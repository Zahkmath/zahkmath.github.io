/* =====================================================================
   site.js — builds the menu, footer and the pages from the data files.
   You normally do NOT need to edit this file.
   Things you may want to change are in the SETTINGS block below.
   ===================================================================== */

const SETTINGS = {
  siteName: "ZahkMath",
  email: "your.email@example.com",               // ← your contact email
  youtubeChannel: "https://www.youtube.com/",     // ← your channel link
  year: new Date().getFullYear()
};

const RESOURCE_TYPES = [
  { key: "notes",              label: "Notes",                          cls: "" },
  { key: "worksheet",          label: "Practice Worksheet",             cls: "" },
  { key: "worksheetSolutions", label: "Practice Worksheet Solutions",   cls: "sol" },
  { key: "exam",               label: "Exam Style Questions",           cls: "" },
  { key: "examSolutions",      label: "Exam Style Questions Solutions", cls: "sol" }
];

/* ---------- helpers ---------- */
const $ = sel => document.querySelector(sel);
const params = new URLSearchParams(location.search);
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function mat(course, id) {
  return (window.MATERIALS && MATERIALS[course] && MATERIALS[course][id]) || {};
}
function youtubeId(url) {
  const m = String(url || "").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : "";
}
function linkAttrs(link) {
  return `href="${esc(link)}" target="_blank" rel="noopener"`;
}
function buyButton(item) {
  if (!item.buy) return `<span class="res soon">${esc(item.title)}</span>`;
  return `<a class="buy" ${linkAttrs(item.buy)}>★ ${esc(item.title)}${item.price ? ` <span class="price">${esc(item.price)}</span>` : ""}</a>`;
}

/* ---------- header & footer ---------- */
function buildHeader() {
  const page = document.body.dataset.page;
  const course = params.get("c");
  const links = [
    ["course.html?c=aa-hl", "HL AA", course === "aa-hl"],
    ["course.html?c=aa-sl", "SL AA", course === "aa-sl"],
    ["course.html?c=ai-hl", "HL AI", course === "ai-hl"],
    ["course.html?c=ai-sl", "SL AI", course === "ai-sl"],
    ["videos.html", "Videos", page === "videos"],
    ["interactive.html", "Interactive Notes", page === "interactive"],
    ["shop.html", "Shop", page === "shop"],
    ["about.html", "About me", page === "about"]
  ];
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="wrap">
      <a class="logo" href="index.html">Zahk<span>Math</span></a>
      <button class="menu-btn" aria-label="Menu">☰</button>
      <nav class="nav">${links.map(([h, t, a]) => `<a href="${h}"${a ? ' class="active"' : ""}>${t}</a>`).join("")}</nav>
    </div>`;
  document.body.prepend(header);
  header.querySelector(".menu-btn").onclick = () => header.querySelector(".nav").classList.toggle("open");

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap">
      <div><span class="logo">Zahk<span>Math</span></span><br>© ${SETTINGS.year} ZahkMath · IB Mathematics resources</div>
      <div>Contact: <a href="mailto:${esc(SETTINGS.email)}">${esc(SETTINGS.email)}</a><br>
      This site is not affiliated with or endorsed by the International Baccalaureate Organization.</div>
    </div>`;
  document.body.append(footer);
}

/* ---------- counting resources ---------- */
function countResources(course, topic) {
  const subs = getSubtopics(course, topic);
  let have = 0;
  subs.forEach(s => {
    const m = mat(course, s.id);
    RESOURCE_TYPES.forEach(r => { if (m[r.key]) have++; });
  });
  return { have, total: subs.length * RESOURCE_TYPES.length, subs: subs.length };
}

/* ---------- COURSE PAGE ---------- */
function renderCourse() {
  const key = params.get("c");
  const c = COURSES[key];
  if (!c) { location.href = "index.html"; return; }
  document.title = `${c.short} · ZahkMath`;
  $("#hero").innerHTML = `
    <div class="breadcrumb"><a href="index.html">Home</a> › ${c.short}</div>
    <h1>${c.name}</h1>
    <p>IB Mathematics · ${c.level === "HL" ? "Higher Level (SL + AHL content)" : "Standard Level"}</p>`;
  $("#content").innerHTML = `
    <h2 class="section-title">Topics</h2>
    <p class="section-sub">Choose a topic to see notes, worksheets and exam-style questions.</p>
    <div class="grid topics">${[1, 2, 3, 4, 5].map(t => {
      const n = countResources(key, t);
      return `<a class="card" href="topic.html?c=${key}&t=${t}">
        <div class="num">${t}</div>
        <h3>${TOPIC_NAMES[t]}</h3>
        <p>${n.subs} subtopics</p>
        <div class="go">Open topic →</div>
      </a>`;
    }).join("")}</div>`;
}

/* ---------- TOPIC PAGE ---------- */
function renderTopic() {
  const key = params.get("c");
  const t = Number(params.get("t"));
  const c = COURSES[key];
  if (!c || !TOPIC_NAMES[t]) { location.href = "index.html"; return; }
  document.title = `${c.short} · Topic ${t} ${TOPIC_NAMES[t]} · ZahkMath`;

  $("#hero").innerHTML = `
    <div class="breadcrumb"><a href="index.html">Home</a> › <a href="course.html?c=${key}">${c.short}</a> › Topic ${t}</div>
    <h1>Topic ${t}: ${TOPIC_NAMES[t]}</h1>
    <p>${c.name}</p>`;

  const tabs = [1, 2, 3, 4, 5].map(n =>
    `<a href="topic.html?c=${key}&t=${n}"${n === t ? ' class="active"' : ""}>${n}. ${TOPIC_NAMES[n]}</a>`).join("");

  const packs = (MATERIALS[key]?.topicPacks?.[t]) || [];
  const packHtml = packs.length ? `
    <div class="pack-box">
      <h2>Topic ${t} Revision Packs</h2>
      <p>Complete revision for the whole topic, with full worked solutions.</p>
      <div class="links">${packs.map(buyButton).join("")}</div>
    </div>` : "";

  const subs = getSubtopics(key, t).map(s => {
    const m = mat(key, s.id);
    const res = RESOURCE_TYPES.map(r => m[r.key]
      ? `<a class="res ${r.cls}" ${linkAttrs(m[r.key])}>${r.label}</a>`
      : `<span class="res soon">${r.label}</span>`).join("");
    const video = m.video ? `<a class="res video" ${linkAttrs(m.video)}>▶ Video</a>` : "";
    const extra = (m.extra || []).length ? `<div class="premium-row">${m.extra.map(buyButton).join("")}</div>` : "";
    return `<div class="subtopic${s.hl ? " ahl" : ""}" id="s${s.id}">
      <h3><span class="id">${s.id}</span> ${esc(s.title)} ${s.hl ? '<span class="badge">AHL</span>' : ""}</h3>
      <div class="links">${res}${video}</div>${extra}
    </div>`;
  }).join("");

  $("#content").innerHTML = `
    <div class="topic-tabs">${tabs}</div>
    ${packHtml}
    ${c.level === "HL" ? '<div class="legend"><span class="badge">AHL</span> Additional Higher Level content</div>' : ""}
    ${subs}`;
}

/* ---------- filter buttons (videos, interactive, shop) ---------- */
function filterBar(onChange) {
  const opts = [["all", "All"], ...Object.entries(COURSES).map(([k, c]) => [k, c.short])];
  const bar = document.createElement("div");
  bar.className = "filters";
  bar.innerHTML = opts.map(([k, l], i) => `<button data-k="${k}"${i === 0 ? ' class="active"' : ""}>${l}</button>`).join("");
  bar.onclick = e => {
    if (!e.target.dataset.k) return;
    bar.querySelectorAll("button").forEach(b => b.classList.toggle("active", b === e.target));
    onChange(e.target.dataset.k);
  };
  return bar;
}
const matchCourse = (item, k) => k === "all" || !item.course || item.course === "all" || item.course === k;

/* ---------- VIDEOS PAGE ---------- */
function renderVideos() {
  const list = window.VIDEOS || [];
  const box = $("#list");
  const draw = k => {
    const items = list.filter(v => matchCourse(v, k));
    box.innerHTML = items.length ? `<div class="grid">${items.map(v => {
      const id = youtubeId(v.youtube);
      const course = COURSES[v.course] ? COURSES[v.course].short : "All courses";
      return `<a class="card video-card" ${linkAttrs(v.youtube)}>
        ${id ? `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">` : ""}
        <div class="body"><span class="tag">${course}${v.subtopic ? " · " + esc(v.subtopic) : ""}</span>
        <h3>${esc(v.title)}</h3><div class="go">▶ Watch on YouTube</div></div></a>`;
    }).join("")}</div>` : `<div class="empty">Videos are coming soon — subscribe on <a ${linkAttrs(SETTINGS.youtubeChannel)}>YouTube</a>.</div>`;
  };
  box.before(filterBar(draw));
  draw("all");
}

/* ---------- INTERACTIVE PAGE ---------- */
function renderInteractive() {
  const list = window.INTERACTIVE || [];
  const box = $("#list");
  const draw = k => {
    const items = list.filter(v => matchCourse(v, k));
    box.innerHTML = items.length ? `<div class="grid">${items.map(v => {
      const course = COURSES[v.course] ? COURSES[v.course].short : "All courses";
      return `<a class="card" ${linkAttrs(v.link)}>
        <span class="tag">${course}${v.subtopic ? " · " + esc(v.subtopic) : ""}</span>
        <h3>${esc(v.title)}</h3><p>${esc(v.description || "")}</p><div class="go">Open →</div></a>`;
    }).join("")}</div>` : `<div class="empty">Interactive notes are coming soon.</div>`;
  };
  box.before(filterBar(draw));
  draw("all");
}

/* ---------- SHOP PAGE (collects every paid item automatically) ---------- */
function renderShop() {
  const items = [];
  Object.keys(COURSES).forEach(key => {
    const m = (window.MATERIALS || {})[key] || {};
    [1, 2, 3, 4, 5].forEach(t => {
      (m.topicPacks?.[t] || []).forEach(p => items.push({ ...p, course: key, where: `Topic ${t}: ${TOPIC_NAMES[t]}`, link: `topic.html?c=${key}&t=${t}` }));
      getSubtopics(key, t).forEach(s => (mat(key, s.id).extra || []).forEach(p =>
        items.push({ ...p, course: key, where: `${s.id} ${s.title}`, link: `topic.html?c=${key}&t=${t}#s${s.id}` })));
    });
  });
  const box = $("#list");
  const draw = k => {
    const shown = items.filter(i => k === "all" || i.course === k);
    box.innerHTML = shown.length ? `<div class="grid">${shown.map(i => `
      <div class="card">
        <span class="tag">${COURSES[i.course].short}</span>
        <h3>${esc(i.title)}</h3>
        <p><a href="${i.link}">${esc(i.where)}</a></p>
        <div class="go">${buyButton(i)}</div>
      </div>`).join("")}</div>` : `<div class="empty">Revision packs and extra worksheets are coming soon.</div>`;
  };
  box.before(filterBar(draw));
  draw("all");
}

/* ---------- start ---------- */
document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  const page = document.body.dataset.page;
  ({ course: renderCourse, topic: renderTopic, videos: renderVideos,
     interactive: renderInteractive, shop: renderShop }[page] || (() => {}))();
});
