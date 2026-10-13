/**
 * Contact form backend for the lab website (Google Apps Script web app).
 *
 * What it does: receives the form on contact.html, emails it to the PI with
 * Reply-To set to the sender, and keeps a copy in a Google Sheet tab "Messages".
 *
 * Setup (one time, about 5 minutes):
 * 1. Go to https://script.google.com and create a new project. Paste this whole file into Code.gs.
 * 2. Check TO_EMAIL below.
 * 3. Deploy → New deployment → type "Web app"
 *      Execute as: Me
 *      Who has access: Anyone
 *    Approve the permissions it asks for (send email, create a spreadsheet).
 * 4. Copy the Web app URL (ends in /exec) and put it in data/site.json → "contactFormEndpoint".
 * After editing this script later, use Deploy → Manage deployments → Edit → New version, so the URL stays the same.
 */
const TO_EMAIL = 'chatsuda.sak@ku.th';
const SHEET_NAME = 'Lab website messages';
const MAX_PER_HOUR = 20; // simple guard against floods

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    if (d.website) return json_({ ok: true }); // bot trap field was filled
    const name = clean_(d.name, 100);
    const email = clean_(d.email, 120);
    const topic = clean_(d.topicLabel || d.topic, 80);
    const message = clean_(d.message, 3000);
    if (!name || !email || !topic || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json_({ ok: false, error: 'missing' });
    }
    if (!underLimit_()) return json_({ ok: false, error: 'busy' });

    const subject = '[เว็บแล็บ] ' + topic + ' — ' + name;
    const body = 'ชื่อ: ' + name + '\nอีเมล: ' + email + '\nเรื่อง: ' + topic + '\n\n' + message +
      '\n\n— ส่งจากแบบฟอร์มติดต่อบนเว็บไซต์ห้องปฏิบัติการ';
    MailApp.sendEmail({ to: TO_EMAIL, subject: subject, body: body, replyTo: email, name: 'Lab website' });
    log_([new Date(), name, email, topic, message]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, info: 'Contact form endpoint is running.' });
}

function clean_(v, max) {
  return String(v || '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
}

function underLimit_() {
  const cache = CacheService.getScriptCache();
  const n = Number(cache.get('count') || 0);
  if (n >= MAX_PER_HOUR) return false;
  cache.put('count', String(n + 1), 3600);
  return true;
}

function log_(row) {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('sheetId');
  let ss;
  if (id) {
    ss = SpreadsheetApp.openById(id);
  } else {
    ss = SpreadsheetApp.create(SHEET_NAME);
    props.setProperty('sheetId', ss.getId());
    ss.getSheets()[0].setName('Messages').appendRow(['Time', 'Name', 'Email', 'Topic', 'Message']);
  }
  ss.getSheetByName('Messages').appendRow(row);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
