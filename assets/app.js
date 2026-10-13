(function () {
  "use strict";

  var UI = {
    th: {
      "nav.research": "งานวิจัย", "nav.members": "สมาชิก", "nav.publications": "ผลงานตีพิมพ์",
      "nav.services": "บริการ", "nav.servicesLong": "บริการตรวจวิเคราะห์",
      "nav.news": "ข่าว", "nav.newsLong": "ข่าวและกิจกรรม", "nav.contact": "ติดต่อ",
      "nav.portal": "สำหรับสมาชิกแล็บ",
      "hero.join": "สนใจเข้าร่วมแล็บ", "hero.research": "ดูงานวิจัยของเรา",
      "research.lead": "ห้าแนวทางที่แล็บทำอยู่ ตั้งแต่ระดับยีนไปจนถึงในแปลงปลูก",
      "pubs.note": "รายการเต็มดูได้ที่ ORCID และ Scopus",
      "svc.note": "ติดต่อสอบถามรายละเอียด ระยะเวลา และค่าบริการก่อนส่งตัวอย่าง",
      "svc.sample": "ตัวอย่างที่ส่ง",
      "contact.address": "ที่อยู่", "contact.email": "อีเมล",
      "contact.joinTitle": "มาทำวิจัยด้วยกัน", "contact.book": "นัดพบอาจารย์",
      "group.pi": "หัวหน้าห้องปฏิบัติการ", "group.postdoc": "นักวิจัยหลังปริญญาเอก",
      "group.phd": "นิสิตปริญญาเอก", "group.ms": "นิสิตปริญญาโท",
      "group.ug": "นิสิตปริญญาตรี", "group.staff": "เจ้าหน้าที่", "group.alumni": "ศิษย์เก่า",
      "lvl.postdoc": "นักวิจัยหลังปริญญาเอก", "lvl.phd": "ป.เอก", "lvl.ms": "ป.โท", "lvl.ug": "ป.ตรี", "lvl.staff": "เจ้าหน้าที่",
      "kicker": "ภาควิชาโรคพืช มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน",
      "short": "แล็บชีวนิเวศแบคทีเรียและชีววิธี",
      "example": "ตัวอย่าง", "empty": "ยังไม่มีรายการ", "loadError": "โหลดข้อมูลไม่สำเร็จ ตรวจรูปแบบไฟล์ในโฟลเดอร์ data/"
    },
    en: {
      "nav.research": "Research", "nav.members": "People", "nav.publications": "Publications",
      "nav.services": "Services", "nav.servicesLong": "Analytical services",
      "nav.news": "News", "nav.newsLong": "News and events", "nav.contact": "Contact",
      "nav.portal": "Lab members",
      "hero.join": "Join the lab", "hero.research": "See our research",
      "research.lead": "Five lines of work, from genes in a genome to plants in the field",
      "pubs.note": "Full list on ORCID and Scopus",
      "svc.note": "Please ask about scope, turnaround, and fees before sending samples",
      "svc.sample": "Send",
      "contact.address": "Address", "contact.email": "Email",
      "contact.joinTitle": "Do research with us", "contact.book": "Book a meeting",
      "group.pi": "Principal investigator", "group.postdoc": "Postdoctoral researchers",
      "group.phd": "PhD students", "group.ms": "MSc students",
      "group.ug": "Undergraduate students", "group.staff": "Staff", "group.alumni": "Alumni",
      "lvl.postdoc": "Postdoc", "lvl.phd": "PhD", "lvl.ms": "MSc", "lvl.ug": "BSc", "lvl.staff": "Staff",
      "kicker": "Department of Plant Pathology, Kasetsart University, Kamphaeng Saen",
      "short": "Microbiome & Biocontrol Lab",
      "example": "Example", "empty": "Nothing here yet", "loadError": "Could not load data. Check the file format in the data/ folder"
    }
  };
  var GROUP_ORDER = ["pi", "postdoc", "phd", "ms", "ug", "staff", "alumni"];
  var FILES = ["site", "research", "members", "publications", "services", "news"];
  var GLYPHS = [
    '<path d="M6 34h8M14 34V16h10M14 25h18M24 16V8h10M24 16h10"/>',
    '<circle cx="20" cy="20" r="15"/><circle cx="12" cy="20" r="3"/><path d="M26 9v22"/>',
    '<path d="M8 6c16 6 8 22 24 28M32 6C16 12 24 28 8 34M12 12h16M12 28h16M16 20h8"/>',
    '<circle cx="10" cy="12" r="3"/><circle cx="30" cy="10" r="3"/><circle cx="20" cy="22" r="3"/><circle cx="9" cy="31" r="3"/><circle cx="31" cy="30" r="3"/><path d="M12 14l6 6M28 12l-6 8M18 24l-7 5M22 24l7 4"/>',
    '<path d="M30 14A12 12 0 0 0 9 12M9 12V6M9 12h6M10 26a12 12 0 0 0 21 2M31 28v6M31 28h-6"/>'
  ];

  var lang = "th";
  try { lang = localStorage.getItem("lab-lang") || "th"; } catch (e) {}
  var data = null;

  function $(s) { return document.querySelector(s); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
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
    if (lines && lines.length) {
      $(".hero h1").innerHTML = lines.map(function (l) { return '<span class="nb">' + esc(l) + "</span>"; }).join(" ");
    }
    [["#portal-link", s.membersPortalUrl], ["#booking-link", s.bookingUrl]].forEach(function (p) {
      $(p[0]).href = isPlaceholder(p[1]) ? "#contact" : p[1];
    });

    $("#research-list").innerHTML = data.research.map(function (r, i) {
      return '<article class="tile"><svg class="glyph" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        GLYPHS[i % GLYPHS.length] + "</svg><h3>" + esc(t(r.title)) + "</h3><p>" + esc(t(r.body)) + "</p></article>";
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
        (m.note ? '<div class="note">' + esc(t(m.note)) + "</div>" : "") +
        (m.email ? '<div class="note">' + esc(m.email) + "</div>" : "") + "</div></div>";
    }).join("");
    if (current.length) {
      html += '<div class="people">' + current.map(function (m) {
        return '<div class="person">' + avatar(m) + '<div class="name">' + esc(t(m.name)) + badge(m) + "</div>" +
          '<span class="level">' + (ui["lvl." + m.group] || esc(t(m.role))) + "</span>" +
          (m.note ? '<div class="note">' + esc(t(m.note)) + "</div>" : "") + "</div>";
      }).join("") + "</div>";
    }
    if (alumni.length) {
      html += '<div class="alumni"><h3>' + ui["group.alumni"] + "</h3><ul>" + alumni.map(function (m) {
        return "<li><span>" + esc(t(m.name)) + badge(m) + "</span><span>" + esc(t(m.role)) + "</span><span>" + esc(t(m.note)) + "</span></li>";
      }).join("") + "</ul></div>";
    }
    $("#member-list").innerHTML = html;

    var pubs = data.publications.slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
    $("#pub-list").innerHTML = pubs.length ? pubs.map(function (p) {
      var where = "<i>" + esc(p.journal) + "</i>" + (p.volume ? " " + esc(p.volume) : "") + (p.pages ? ": " + esc(p.pages) : "");
      var doi = p.doi ? ' <a href="https://doi.org/' + esc(p.doi) + '" target="_blank" rel="noopener">doi:' + esc(p.doi) + "</a>" : "";
      return '<li class="pub"><span class="yr">' + esc(p.year) + '</span><div><div class="t">' + esc(p.title) + badge(p) +
        '</div><div class="meta">' + (p.authors ? esc(p.authors) + ". " : "") + where + "." + doi + "</div></div></li>";
    }).join("") : '<li class="pub"><span></span><div>' + ui.empty + "</div></li>";

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

  $("#lang-toggle").addEventListener("click", function () {
    lang = lang === "th" ? "en" : "th";
    try { localStorage.setItem("lab-lang", lang); } catch (e) {}
    if (data) render();
  });

  load().then(function (d) { data = d; render(); }).catch(function () {
    $("#research-list").textContent = UI[lang].loadError;
  });
})();
