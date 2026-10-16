(function () {
  "use strict";

  var UI = {
    th: {
      "nav.home": "หน้าแรก", "nav.research": "งานวิจัย", "nav.members": "สมาชิก", "nav.publications": "ผลงานตีพิมพ์",
      "nav.services": "บริการ", "nav.servicesLong": "บริการตรวจวิเคราะห์",
      "nav.news": "ข่าว", "nav.newsLong": "ข่าวและกิจกรรม", "nav.contact": "ติดต่อ",
      "nav.portal": "สำหรับสมาชิกแล็บ",
      "kb.title": "คลังความรู้สำหรับสมาชิกแล็บ", "kb.lead": "คู่มือการทำงานในแล็บ แยกตามหมวด กดชื่อเรื่องเพื่อเปิดเอกสาร",
      "kb.accessTitle": "เปิดได้เฉพาะสมาชิกแล็บ", "kb.accessBody": "เอกสารเปิดได้เฉพาะบัญชี Google ที่อาจารย์เพิ่มสิทธิ์ให้ ถ้าเปิดแล้วเจอหน้าขอสิทธิ์เข้าถึง ให้ตรวจว่าเข้าสู่ระบบด้วยบัญชีที่แจ้งอาจารย์ไว้ หรือติดต่ออาจารย์",
      "kb.soon": "กำลังจัดทำ", "kb.n": "{n} เรื่อง", "kb.searchLabel": "ค้นหาในคลังความรู้", "kb.placeholder": "ค้นหา เช่น autoclave, กลีเซอรอล, เชื้อรา, Streptomyces", "kb.found": "พบ {n} เรื่องจาก \u201c{q}\u201d", "kb.total": "ทั้งหมด {n} เรื่อง ใน {c} หมวด", "kb.noneTitle": "ไม่พบเรื่องที่ค้นหา", "kb.noneBody": "ลองคำอื่น ใช้คำสั้นลง หรือค้นเป็นภาษาอังกฤษ ถ้าหัวข้อที่ต้องการยังไม่มีในคลังความรู้ แจ้งอาจารย์ได้", "kb.clear": "ล้างคำค้น", "kb.folder": "เปิดโฟลเดอร์ทั้งหมดใน Google Drive",
      "hero.join": "สนใจเข้าร่วมแล็บ", "hero.research": "ดูงานวิจัยของเรา",
      "research.lead": "ห้าแนวทางที่แล็บทำอยู่ ตั้งแต่ระดับยีนไปจนถึงในแปลงปลูก",
      "pubs.note": "รายการเต็มดูได้ที่", "pubs.all": "ดูผลงานทั้งหมด {n} เรื่อง", "pubs.count": "แสดง {n} จาก {total} เรื่อง", "pubs.n": "{n} เรื่อง", "pubs.none": "ไม่มีผลงานในช่วงปีที่เลือก", "pubs.from": "ตั้งแต่ปี", "pubs.to": "ถึงปี", "pubs.allYears": "ทุกปี", "pubs.last3": "3 ปีล่าสุด", "pubs.last5": "5 ปีล่าสุด", "pubs.back": "กลับหน้าแรก", "pubs.lead": "ผลงานตีพิมพ์ทั้งหมด เรียงจากใหม่ไปเก่า ชื่อของอาจารย์เป็นตัวหนา",
      "svc.note": "ติดต่อสอบถามรายละเอียด ระยะเวลา และค่าบริการก่อนส่งตัวอย่าง",
      "svc.sample": "ตัวอย่างที่ส่ง",
      "contact.address": "ที่อยู่", "contact.email": "อีเมล",
      "contact.joinTitle": "มาทำวิจัยด้วยกัน", "contact.book": "นัดพบอาจารย์",
      "ct.title": "ติดต่อและนัดพบอาจารย์", "ct.lead": "ต้องการพบอาจารย์ที่ห้องปฏิบัติการ ให้จองเวลาจากปฏิทินด้านล่าง ระบบจะส่งอีเมลยืนยันให้ทันที ถ้ามีคำถามหรือเรื่องอื่น ส่งข้อความผ่านแบบฟอร์มได้เลย",
      "ct.inperson": "พบที่ห้องปฏิบัติการ", "ct.inpersonBody": "คุยเรื่องงานวิจัย วิทยานิพนธ์ หรือดูการทดลอง จองเวลาก่อนทุกครั้ง อาจารย์อาจอยู่สอนหรือลงแปลง",
      "ct.email": "ส่งข้อความ", "ct.emailBody": "เหมาะกับคำถาม ขอข้อมูลบริการ หรือสนใจเข้าร่วมแล็บ อาจารย์ตอบกลับทางอีเมลในวันทำการ",
      "ct.copy": "คัดลอกอีเมล", "ct.copied": "คัดลอกแล้ว", "ct.writeMail": "เขียนอีเมล", "ct.mailSubject": "[นัดพบอาจารย์] ",
      "ct.calTitle": "ตารางเวลาว่าง", "ct.calBody": "ช่องที่แสดงคือเวลาที่ว่างจริงตามปฏิทินของอาจารย์ เลือกเวลา แล้วกรอกชื่อ อีเมล และเรื่องที่ต้องการคุย",
      "ct.openCal": "เปิดปฏิทินจองนัด", "ct.openNew": "เปิดในหน้าต่างใหม่",
      "ct.soonTitle": "กำลังเปิดตารางนัดออนไลน์", "ct.soonBody": "ระหว่างนี้ขอนัดผ่านแบบฟอร์มด้านล่างได้ โปรดระบุเรื่องที่ต้องการคุยและวันเวลาที่สะดวกสองถึงสามช่วง",
      "ct.prepTitle": "ก่อนมาพบ", "ct.prep1": "บอกหัวข้อที่ต้องการคุยตอนจอง จะได้ใช้เวลาได้เต็มที่", "ct.prep2": "แนบไฟล์ที่เกี่ยวข้องมาก่อนอย่างน้อยหนึ่งวัน เช่น ร่างบท ผลการทดลอง", "ct.prep3": "ถ้าไม่สะดวกตามนัด ยกเลิกหรือเลื่อนจากลิงก์ในอีเมลยืนยัน",
      "ct.where": "ที่ตั้ง",
      "ct.formTitle": "ส่งข้อความถึงอาจารย์", "ct.formLead": "ข้อความจะส่งถึงอีเมลของอาจารย์ และอาจารย์จะตอบกลับไปที่อีเมลที่กรอก",
      "ct.fName": "ชื่อ-นามสกุล", "ct.fEmail": "อีเมล", "ct.fTopic": "เรื่อง", "ct.fMessage": "ข้อความ",
      "ct.tPick": "เลือกเรื่องที่ติดต่อ", "ct.tJoin": "สนใจเรียนต่อหรือเข้าร่วมแล็บ", "ct.tMeet": "ขอนัดพบ", "ct.tService": "บริการตรวจวิเคราะห์", "ct.tCollab": "ความร่วมมือวิจัย", "ct.tOther": "อื่น ๆ",
      "ct.send": "ส่งข้อความ", "ct.sending": "กำลังส่ง…", "ct.sent": "ส่งข้อความแล้ว อาจารย์จะตอบกลับทางอีเมล",
      "ct.err": "ส่งไม่สำเร็จ ลองอีกครั้ง หรือส่งอีเมลโดยตรงตามที่อยู่ด้านขวา", "ct.missing": "กรอกชื่อ อีเมล เรื่อง และข้อความให้ครบ", "ct.badEmail": "รูปแบบอีเมลไม่ถูกต้อง",
      "ct.mailApp": "เปิดแอปอีเมลพร้อมข้อความที่กรอกแล้ว กดส่งในแอปอีเมลได้เลย", "ct.directEmail": "หรือส่งอีเมลโดยตรง",
      "group.pi": "หัวหน้าห้องปฏิบัติการ", "group.postdoc": "นักวิจัยหลังปริญญาเอก",
      "group.phd": "นิสิตปริญญาเอก", "group.ms": "นิสิตปริญญาโท",
      "group.ug": "นิสิตปริญญาตรี", "group.staff": "เจ้าหน้าที่", "group.alumni": "ศิษย์เก่า",
      "lvl.postdoc": "นักวิจัยหลังปริญญาเอก", "lvl.phd": "ป.เอก", "lvl.ms": "ป.โท", "lvl.ug": "ป.ตรี", "topic": "หัวข้อวิจัย:", "lvl.staff": "เจ้าหน้าที่",
      "kicker": "ภาควิชาโรคพืช คณะเกษตร กำแพงแสน มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน",
      "short": "Microbiome and Biocontrol Laboratory",
      "example": "ตัวอย่าง", "empty": "ยังไม่มีรายการ", "loadError": "โหลดข้อมูลไม่สำเร็จ ตรวจรูปแบบไฟล์ในโฟลเดอร์ data/"
    },
    en: {
      "nav.home": "Home", "nav.research": "Research", "nav.members": "People", "nav.publications": "Publications",
      "nav.services": "Services", "nav.servicesLong": "Analytical services",
      "nav.news": "News", "nav.newsLong": "News and events", "nav.contact": "Contact",
      "nav.portal": "Lab members",
      "kb.title": "Knowledge base for lab members", "kb.lead": "Lab guides grouped by topic. Select a title to open the document.",
      "kb.accessTitle": "Lab members only", "kb.accessBody": "Documents open only for Google accounts the PI has granted access. If you see an access request page, check that you are signed in with the account you gave the PI, or contact the PI.",
      "kb.soon": "In preparation", "kb.n": "{n} topics", "kb.searchLabel": "Search the knowledge base", "kb.placeholder": "Search, e.g. autoclave, glycerol, fungi, Streptomyces", "kb.found": "{n} found for \u201c{q}\u201d", "kb.total": "{n} topics in {c} categories", "kb.noneTitle": "Nothing matches your search", "kb.noneBody": "Try another word, a shorter word, or Thai. If the topic is not in the knowledge base yet, let the PI know.", "kb.clear": "Clear search", "kb.folder": "Open the full folder in Google Drive",
      "hero.join": "Join the lab", "hero.research": "See our research",
      "research.lead": "Five lines of work, from genes in a genome to plants in the field",
      "pubs.note": "Full list on", "pubs.all": "See all {n} publications", "pubs.count": "Showing {n} of {total}", "pubs.n": "{n} papers", "pubs.none": "No publications in the selected years", "pubs.from": "From", "pubs.to": "To", "pubs.allYears": "All years", "pubs.last3": "Last 3 years", "pubs.last5": "Last 5 years", "pubs.back": "Back to home", "pubs.lead": "All publications, newest first. The PI's name is in bold.",
      "svc.note": "Please ask about scope, turnaround, and fees before sending samples",
      "svc.sample": "Send",
      "contact.address": "Address", "contact.email": "Email",
      "contact.joinTitle": "Do research with us", "contact.book": "Book a meeting",
      "ct.title": "Contact and appointments", "ct.lead": "To meet the PI at the lab, book a time in the calendar below and you will get a confirmation email right away. For anything else, send a message with the form.",
      "ct.inperson": "Meet at the lab", "ct.inpersonBody": "For research, thesis work, or to see an experiment. Please always book first; the PI may be teaching or in the field.",
      "ct.email": "Send a message", "ct.emailBody": "For questions, service enquiries, or joining the lab. The PI replies by email on working days.",
      "ct.copy": "Copy email", "ct.copied": "Copied", "ct.writeMail": "Write an email", "ct.mailSubject": "[Meeting request] ",
      "ct.calTitle": "Available times", "ct.calBody": "Slots shown are real free times from the PI's calendar. Pick one, then enter your name, email, and what you would like to discuss.",
      "ct.openCal": "Open booking calendar", "ct.openNew": "Open in a new window",
      "ct.soonTitle": "Online booking opens soon", "ct.soonBody": "Meanwhile, request a meeting with the form below. Please include the topic and two or three times that suit you.",
      "ct.prepTitle": "Before you come", "ct.prep1": "Say what you want to discuss when you book, so the time is well used.", "ct.prep2": "Send related files at least a day ahead, such as a draft chapter or results.", "ct.prep3": "If you cannot make it, cancel or reschedule from the link in your confirmation email.",
      "ct.where": "Location",
      "ct.formTitle": "Message the PI", "ct.formLead": "Your message goes to the PI's inbox, and the reply comes to the email you enter.",
      "ct.fName": "Full name", "ct.fEmail": "Email", "ct.fTopic": "Topic", "ct.fMessage": "Message",
      "ct.tPick": "Choose a topic", "ct.tJoin": "Graduate study or joining the lab", "ct.tMeet": "Meeting request", "ct.tService": "Analytical services", "ct.tCollab": "Research collaboration", "ct.tOther": "Other",
      "ct.send": "Send message", "ct.sending": "Sending…", "ct.sent": "Message sent. You will get a reply by email.",
      "ct.err": "Could not send. Try again, or email directly using the address on the right.", "ct.missing": "Please fill in name, email, topic and message.", "ct.badEmail": "That email address does not look right.",
      "ct.mailApp": "Your email app opened with the message filled in. Press send there.", "ct.directEmail": "Or email directly",
      "group.pi": "Principal investigator", "group.postdoc": "Postdoctoral researchers",
      "group.phd": "Ph.D. students", "group.ms": "M.Sc. students",
      "group.ug": "Undergraduate students", "group.staff": "Staff", "group.alumni": "Alumni",
      "lvl.postdoc": "Postdoc", "lvl.phd": "Ph.D.", "lvl.ms": "M.Sc.", "lvl.ug": "B.Sc.", "topic": "Research topic:", "lvl.staff": "Staff",
      "kicker": "Department of Plant Pathology, Faculty of Agriculture at Kamphaeng Saen, Kasetsart University, Kamphaeng Saen Campus",
      "short": "Microbiome and Biocontrol Laboratory",
      "example": "Example", "empty": "Nothing here yet", "loadError": "Could not load data. Check the file format in the data/ folder"
    }
  };
  var GROUP_ORDER = ["pi", "postdoc", "phd", "ms", "ug", "staff", "alumni"];
  var FILES = ["site", "research", "members", "publications", "services", "news", "kb"];
  var GLYPHS = [
    '<path d="M6 34h8M14 34V16h10M14 25h18M24 16V8h10M24 16h10"/>',
    '<circle cx="20" cy="20" r="15"/><circle cx="12" cy="20" r="3"/><path d="M26 9v22"/>',
    '<path d="M8 6c16 6 8 22 24 28M32 6C16 12 24 28 8 34M12 12h16M12 28h16M16 20h8"/>',
    '<circle cx="10" cy="12" r="3"/><circle cx="30" cy="10" r="3"/><circle cx="20" cy="22" r="3"/><circle cx="9" cy="31" r="3"/><circle cx="31" cy="30" r="3"/><path d="M12 14l6 6M28 12l-6 8M18 24l-7 5M22 24l7 4"/>',
    '<path d="M30 14A12 12 0 0 0 9 12M9 12V6M9 12h6M10 26a12 12 0 0 0 21 2M31 28v6M31 28h-6"/>'
  ];

  var HOME = !!document.getElementById("research-list");
  var lang = "th";
  try { lang = localStorage.getItem("lab-lang") || "th"; } catch (e) {}
  var data = null;

  function $(s) { return document.querySelector(s); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function rich(v) { return esc(v).replace(/\*([^*]+)\*/g, "<i>$1</i>").replace(/\{([^}]+)\}/g, '<span class="nw">$1</span>'); }
  function t(v) { return v && typeof v === "object" ? (v[lang] || v.th || v.en || "") : (v || ""); }
  function badge(item) { return item && item.example ? '<span class="badge">' + UI[lang].example + "</span>" : ""; }
  function isPlaceholder(u) { return !u || /ใส่ลิงก์/.test(u); }
  function initial(name) { return name.replace(/^((ผศ|รศ|ศ|ดร|อ)\.\s*)+/, "").replace(/^(Dr\.?\s+)/, "").charAt(0); }

  function load() {
    if (window.LAB_DATA) return Promise.resolve(window.LAB_DATA);
    return Promise.all(FILES.map(function (f) {
      return fetch("data/" + f + ".json", { cache: "no-cache" }).then(function (r) {
        if (!r.ok) throw new Error(f);
        return r.json();
      });
    })).then(function (arr) {
      var d = {};
      FILES.forEach(function (f, i) { d[f] = arr[i]; });
      return d;
    });
  }

  function metrics(m) {
    var out = [];
    if (m.hindex && m.hindex.value != null) {
      var src = [m.hindex.source, m.hindex.asOf ? t(m.hindex.asOf) : ""].filter(Boolean).join(", ");
      out.push('<span class="stat"><b>h-index ' + esc(m.hindex.value) + "</b>" + (src ? " <span>(" + esc(src) + ")</span>" : "") + "</span>");
    }
    (m.links || []).forEach(function (l) {
      out.push('<a class="pill ghost small" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>");
    });
    return out.length ? '<div class="metrics">' + out.join("") + "</div>" : "";
  }
  function avatar(m) {
    return m.photo ? '<img class="avatar" src="' + esc(m.photo) + '" alt="">'
      : '<span class="avatar" aria-hidden="true">' + esc(initial(t(m.name))) + "</span>";
  }

  function render() {
    var ui = UI[lang], s = data.site;
    document.documentElement.lang = lang;
    $("#lang-toggle").textContent = lang === "th" ? "EN" : "TH";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (ui[k]) el.textContent = ui[k];
    });
    var binds = {
      labName: t(s.labName), tagline: t(s.tagline), kicker: ui.kicker,
      department: t(s.department), address: t(s.address), email: s.email, joinText: t(s.joinText),
      labShort: ui.short
    };
    document.querySelectorAll("[data-bind]").forEach(function (el) {
      el.textContent = binds[el.getAttribute("data-bind")] || "";
    });
    var lines = s.heroLines && s.heroLines[lang];
    if (lines && lines.length && $(".hero h1")) {
      $(".hero h1").innerHTML = lines.map(function (l) { return '<span class="nb">' + esc(l) + "</span>"; }).join(lang === "th" ? "<wbr>" : " ");
    }

    if ($("#pub-full")) { renderFull(); return; }
    if ($("#contact-page")) { renderContact(); return; }
    if ($("#kb-page")) { renderKb(); return; }
    $("#research-list").innerHTML = data.research.map(function (r, i) {
      return '<article class="tile"><svg class="glyph" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        GLYPHS[i % GLYPHS.length] + "</svg><h3>" + esc(t(r.title)) + "</h3><p>" + rich(t(r.body)) + "</p></article>";
    }).join("");

    var M = data.members;
    var pis = M.filter(function (m) { return m.group === "pi"; });
    var current = GROUP_ORDER.filter(function (g) { return g !== "pi" && g !== "alumni"; }).reduce(function (acc, g) {
      return acc.concat(M.filter(function (m) { return m.group === g; }));
    }, []);
    var alumni = M.filter(function (m) { return m.group === "alumni"; });
    var html = pis.map(function (m) {
      return '<div class="pi-card">' + avatar(m) + '<div><div class="eyebrow">' + ui["group.pi"] + '</div><div class="name">' +
        esc(t(m.name)) + badge(m) + '</div><div class="role">' + esc(t(m.role)) + "</div>" +
        (m.note ? '<div class="note">' + rich(t(m.note)) + "</div>" : "") +
        (m.email ? '<div class="note">' + esc(m.email) + "</div>" : "") + metrics(m) + "</div></div>";
    }).join("");
    if (current.length) {
      html += '<div class="people">' + current.map(function (m) {
        return '<div class="person">' + avatar(m) + '<div class="name">' + esc(t(m.name)) + badge(m) + "</div>" +
          '<div class="chips"><span class="level">' + (ui["lvl." + m.group] || esc(t(m.role))) + "</span>" +
          (t(m.scholarship) ? '<span class="level award">' + esc(t(m.scholarship)) + "</span>" : "") + "</div>" +
          (t(m.note) ? '<div class="note"><span class="lbl">' + ui.topic + "</span> " + rich(t(m.note)) + "</div>" : "") + "</div>";
      }).join("") + "</div>";
    }
    if (alumni.length) {
      html += '<div class="alumni"><h3>' + ui["group.alumni"] + "</h3><ul>" + alumni.map(function (m) {
        return "<li><span>" + esc(t(m.name)) + badge(m) + (t(m.role) ? ' <span class="muted">' + esc(t(m.role)) + "</span>" : "") + "</span><span>" + rich(t(m.note)) + "</span></li>";
      }).join("") + "</ul></div>";
    }
    $("#member-list").innerHTML = html;

    var pubs = sortedPubs();
    var LIMIT = 10;
    $("#pub-list").innerHTML = pubs.length ? pubs.slice(0, LIMIT).map(pubItem).join("") : '<li class="pub"><span></span><div>' + ui.empty + "</div></li>";
    var more = $("#pub-more");
    if (more) {
      more.hidden = pubs.length <= LIMIT;
      more.textContent = ui["pubs.all"].replace("{n}", pubs.length);
    }

    $("#service-list").innerHTML = data.services.map(function (v) {
      return '<article class="svc"><h3>' + esc(t(v.title)) + badge(v) + "</h3><p>" + esc(t(v.body)) + "</p>" +
        (v.sample ? '<div class="sample"><b>' + ui["svc.sample"] + "</b><span>" + esc(t(v.sample)) + "</span></div>" : "") + "</article>";
    }).join("");

    var fmt;
    try { fmt = new Intl.DateTimeFormat(lang === "th" ? "th-TH" : "en-GB", { day: "numeric", month: "long", year: "numeric" }); } catch (e) {}
    $("#news-list").innerHTML = data.news.length ? data.news.map(function (n) {
      var d = new Date(n.date + "T00:00:00");
      var label = fmt && !isNaN(d) ? fmt.format(d) : n.date;
      return '<article class="news-item"><time datetime="' + esc(n.date) + '">' + esc(label) + '</time><div class="t">' +
        esc(t(n.title)) + badge(n) + "</div><p>" + esc(t(n.body)) + "</p></article>";
    }).join("") : "<p>" + ui.empty + "</p>";
  }

  function renderContact() {
    var ui = UI[lang], s = data.site;
    var embed = s.bookingEmbedUrl && !isPlaceholder(s.bookingEmbedUrl) ? s.bookingEmbedUrl : "";
    var link = s.bookingUrl && !isPlaceholder(s.bookingUrl) ? s.bookingUrl : "";
    var box = $("#booking-box");
    var key = embed + "|" + link;
    if (box.getAttribute("data-key") !== key) {
      box.setAttribute("data-key", key);
      if (embed) {
        box.innerHTML = '<iframe src="' + esc(embed) + '" title="Booking calendar" loading="lazy"></iframe>';
      } else {
        box.innerHTML = '<div class="booking-empty"><p class="t" data-i18n="ct.soonTitle"></p><p data-i18n="ct.soonBody"></p>' +
          (link ? '<a class="pill solid" href="' + esc(link) + '" target="_blank" rel="noopener" data-i18n="ct.openCal"></a>' : "") + "</div>";
      }
    }
    box.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = ui[el.getAttribute("data-i18n")] || ""; });
    var open = $("#booking-open");
    if (open) { open.hidden = !link; if (link) open.href = link; }
    $("#ct-email").textContent = s.email;
  }

  var KB_ICONS = {
    start: '<path d="M6 26V9l10-5 10 5v17"/><path d="M12 26v-7h8v7M4 26h24"/>',
    media: '<ellipse cx="16" cy="17" rx="12" ry="9"/><ellipse cx="16" cy="15" rx="12" ry="9"/><circle cx="12" cy="14" r="1.6"/><circle cx="19" cy="17" r="1.6"/><circle cx="20" cy="12" r="1.2"/>',
    chem: '<path d="M12 4h8M13 4v8l-7 12a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3l-7-12V4"/><path d="M9 20h14"/>',
    tech: '<path d="M6 26 20 12"/><circle cx="23" cy="9" r="4"/><path d="M4 28h10"/>',
    dna: '<path d="M10 4c0 8 12 8 12 16s-12 4-12 8M22 4c0 8-12 8-12 16s12 4 12 8"/><path d="M12 10h8M12 22h8"/>',
    study: '<path d="M4 8l12-4 12 4-12 4-12-4Z"/><path d="M9 10v7c0 2 3 4 7 4s7-2 7-4v-7M28 8v9"/>'
  };
  function kbNorm(x) { return String(x || "").toLowerCase().replace(/[−–—]/g, "-").replace(/\s+/g, " ").trim(); }
  function kbText(it) {
    var tt = it.title || {}, dd = it.desc || {};
    return kbNorm([tt.th, tt.en, dd.th, dd.en, it.keywords].join(" ").replace(/\*/g, ""));
  }
  var kbWired = false;
  function renderKb() {
    var ui = UI[lang], kb = data.kb, input = $("#kb-q");
    input.placeholder = ui["kb.placeholder"];
    var q = kbNorm(input.value), words = q ? q.split(" ") : [];
    var found = 0, shownCats = 0, total = 0;
    var cats = kb.categories.map(function (c, ci) {
      total += c.items.length;
      var hits = c.items.filter(function (it) {
        if (!words.length) return true;
        var txt = kbText(it);
        return words.every(function (w) { return txt.indexOf(w) !== -1; });
      });
      found += hits.length;
      if (!hits.length) return "";
      shownCats++;
      return '<article class="kb-cat" id="kb-cat-' + ci + '"><div class="kb-top"><svg viewBox="0 0 32 32" aria-hidden="true">' + (KB_ICONS[c.icon] || KB_ICONS.tech) +
        "</svg><div><h2>" + esc(t(c.title)) + '</h2><span class="kb-n">' + ui["kb.n"].replace("{n}", words.length ? hits.length : c.items.length) + "</span></div></div><ul>" +
        hits.map(function (it) {
          var desc = t(it.desc) ? '<small>' + rich(t(it.desc)) + "</small>" : "";
          return it.url && !isPlaceholder(it.url)
            ? '<li><a href="' + esc(it.url) + '" target="_blank" rel="noopener"><span>' + rich(t(it.title)) + desc + "</span></a></li>"
            : '<li class="soon"><span>' + rich(t(it.title)) + desc + '</span><span class="tag">' + ui["kb.soon"] + "</span></li>";
        }).join("") + "</ul></article>";
    });
    $("#kb-list").innerHTML = cats.join("");
    $("#kb-empty").hidden = found > 0;
    $("#kb-count").innerHTML = words.length
      ? esc(ui["kb.found"].replace("{n}", found).replace("{q}", input.value.trim())) + ' <button type="button" class="kb-clear" id="kb-clear">' + ui["kb.clear"] + "</button>"
      : esc(ui["kb.total"].replace("{n}", total).replace("{c}", kb.categories.length));
    var clear = $("#kb-clear");
    if (clear) clear.addEventListener("click", function () { input.value = ""; renderKb(); input.focus(); });
    $("#kb-jump").hidden = words.length > 0;
    $("#kb-jump").innerHTML = kb.categories.map(function (c, ci) {
      return '<a class="pill ghost small" href="#kb-cat-' + ci + '">' + esc(t(c.title)) + "</a>";
    }).join("");
    var f = $("#kb-folder");
    if (f) { f.hidden = !kb.folderUrl; f.href = kb.folderUrl || "#"; }
    if (!kbWired) {
      kbWired = true;
      try { var p = new URLSearchParams(location.search).get("q"); if (p && !input.value) { input.value = p; renderKb(); } } catch (e) {}
      input.addEventListener("input", renderKb);
    }
  }

  var ME = /\b(Sakdapetsiri C|Chirapanda C)\b/g;
  function sortedPubs() {
    return data.publications.slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
  }
  function pubItem(p) {
    var where = "<i>" + esc(p.journal) + "</i>" + (p.volume ? " " + esc(p.volume) : "") + (p.pages ? ": " + esc(p.pages) : "");
    var doi = p.doi ? ' <a href="https://doi.org/' + esc(p.doi) + '" target="_blank" rel="noopener">doi:' + esc(p.doi) + "</a>" : "";
    var authors = p.authors ? esc(p.authors).replace(ME, "<b>$1</b>") + ". " : "";
    return '<li class="pub"><span class="yr">' + esc(p.year) + '</span><div><div class="t">' + rich(p.title) + badge(p) +
      '</div><div class="meta">' + authors + where + "." + doi + "</div></div></li>";
  }

  var range = null;
  function renderFull() {
    var ui = UI[lang], pubs = sortedPubs();
    var years = pubs.map(function (p) { return p.year; }).filter(function (y) { return typeof y === "number"; });
    var lo = Math.min.apply(null, years), hi = Math.max.apply(null, years);
    if (!range) range = { from: lo, to: hi };
    var opts = [];
    for (var y = hi; y >= lo; y--) opts.push(y);
    var fromSel = $("#yr-from"), toSel = $("#yr-to");
    fromSel.innerHTML = opts.slice().reverse().map(function (y) { return "<option" + (y === range.from ? " selected" : "") + ">" + y + "</option>"; }).join("");
    toSel.innerHTML = opts.map(function (y) { return "<option" + (y === range.to ? " selected" : "") + ">" + y + "</option>"; }).join("");
    document.querySelectorAll("[data-quick]").forEach(function (b) {
      var n = +b.getAttribute("data-quick");
      var on = n ? (range.from === hi - n + 1 && range.to === hi) : (range.from === lo && range.to === hi);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    var shown = pubs.filter(function (p) { return p.year >= range.from && p.year <= range.to; });
    $("#pub-count").textContent = ui["pubs.count"].replace("{n}", shown.length).replace("{total}", pubs.length);
    var groups = [], last = null;
    shown.forEach(function (p) {
      if (p.year !== last) { groups.push({ year: p.year, items: [] }); last = p.year; }
      groups[groups.length - 1].items.push(p);
    });
    $("#pub-full").innerHTML = groups.length ? groups.map(function (g) {
      return '<section class="yr-group"><h3>' + esc(g.year) + ' <span>' + ui["pubs.n"].replace("{n}", g.items.length) + '</span></h3><ol class="pubs">' +
        g.items.map(pubItem).join("") + "</ol></section>";
    }).join("") : '<p class="empty">' + ui["pubs.none"] + "</p>";
  }
  function wireCopy() {
    var btn = $("#ct-copy"); if (!btn) return;
    btn.addEventListener("click", function () {
      var txt = $("#ct-email").textContent;
      function done() { btn.textContent = UI[lang]["ct.copied"]; setTimeout(function () { btn.textContent = UI[lang]["ct.copy"]; }, 1800); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(done, function () { selectEmail(); });
      } else { selectEmail(); }
    });
    function selectEmail() {
      var r = document.createRange(); r.selectNodeContents($("#ct-email"));
      var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
    }
  }
  function wireForm() {
    var f = $("#contact-form"); if (!f) return;
    var status = $("#cf-status"), btn = $("#cf-submit");
    function say(k, ok) { status.textContent = UI[lang][k]; status.className = "status " + (ok ? "ok" : "bad"); }
    f.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var el = f.elements;
      var v = {
        name: el.namedItem("name").value.trim(), email: el.namedItem("email").value.trim(), topic: el.namedItem("topic").value,
        topicLabel: el.namedItem("topic").options[el.namedItem("topic").selectedIndex].text,
        message: el.namedItem("message").value.trim(), website: el.namedItem("website").value, lang: lang
      };
      if (!v.name || !v.email || !v.topic || !v.message) return say("ct.missing");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) return say("ct.badEmail");
      if (v.website) return say("ct.sent", true); // bot trap
      var endpoint = data.site.contactFormEndpoint;
      if (!endpoint || isPlaceholder(endpoint)) {
        var body = v.message + "\n\n— " + v.name + " <" + v.email + ">";
        location.href = "mailto:" + data.site.email + "?subject=" + encodeURIComponent(ui_subject(v)) + "&body=" + encodeURIComponent(body);
        return say("ct.mailApp", true);
      }
      btn.disabled = true; status.className = "status"; status.textContent = UI[lang]["ct.sending"];
      fetch(endpoint, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(v) })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.ok) { f.reset(); say("ct.sent", true); } else { say("ct.err"); }
        })
        .catch(function () { say("ct.err"); })
        .then(function () { btn.disabled = false; });
    });
    function ui_subject(v) { return "[" + v.topicLabel + "] " + v.name; }
  }
  function wireFilters() {
    var fromSel = $("#yr-from"), toSel = $("#yr-to");
    if (!fromSel) return;
    function apply() {
      var a = +fromSel.value, b = +toSel.value;
      range = { from: Math.min(a, b), to: Math.max(a, b) };
      renderFull();
    }
    fromSel.addEventListener("change", apply);
    toSel.addEventListener("change", apply);
    document.querySelectorAll("[data-quick]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var ys = data.publications.map(function (p) { return p.year; }).filter(function (y) { return typeof y === "number"; });
        var hi = Math.max.apply(null, ys), lo = Math.min.apply(null, ys), n = +btn.getAttribute("data-quick");
        range = { from: n ? hi - n + 1 : lo, to: hi };
        renderFull();
      });
    });
  }

  $("#lang-toggle").addEventListener("click", function () {
    lang = lang === "th" ? "en" : "th";
    try { localStorage.setItem("lab-lang", lang); } catch (e) {}
    if (data) render();
  });

  load().then(function (d) { data = d; render(); wireFilters(); wireCopy(); wireForm(); }).catch(function (e) {
    var target = $("#research-list") || $("#pub-full") || $("#kb-list");
    if (target) target.textContent = UI[lang].loadError;
    if (window.console) console.error(e);
  });
})();
