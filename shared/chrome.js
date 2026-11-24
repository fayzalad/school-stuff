/* School Stuff page chrome (2026-11-24): the same top bar and footer on every study page.
   Loaded with <script src="../shared/chrome.js" defer> at the end of each <slug>/index.html.
   It adds a sticky bar  [S School Stuff / MODULE / Page title ............ theme]  and a footer,
   moves the page's own #themebtn into the bar (its click handler keeps working), and hides the
   old "← All modules" link. Styles live in shared/look.css (".ss-bar", ".ss-foot"). */
(function () {
  "use strict";
  if (document.querySelector(".ss-bar")) return;
  var MODS = { icnf102: "ICNF102", wrav102: "WRAV102", stav102: "STAV102", iaut202: "IAUT202" };
  var parts = location.pathname.split("/").filter(Boolean);
  var folder = parts.length && /\.html?$/.test(parts[parts.length - 1]) ? parts[parts.length - 2] : parts[parts.length - 1];
  var mod = String(folder || "").split("-")[0];
  var code = MODS[mod] || "";
  var title = document.title.split(" · ")[0].replace(/^(STAV|ICNF|WRAV|MSEV|IAUT)\d{3}(\s*\/\s*\w+)?\s*[:—–-]?\s*/i, "").trim() || document.title;
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  var bar = document.createElement("div");
  bar.className = "ss-bar";
  bar.innerHTML = '<div class="ss-in"><nav class="ss-crumbs" aria-label="Breadcrumb">' +
    '<a class="ss-brand" href="../"><span class="ss-mark" aria-hidden="true">S</span><span class="ss-name">School Stuff</span></a>' +
    (code ? '<span class="ss-sep" aria-hidden="true">/</span><a class="ss-mod" href="../' + mod + '/">' + code + "</a>" : "") +
    '<span class="ss-sep" aria-hidden="true">/</span><span class="ss-here" aria-current="page">' + esc(title) + "</span></nav>" +
    '<span class="ss-slot"></span></div>';
  document.body.insertBefore(bar, document.body.firstChild);
  var tb = document.getElementById("themebtn");
  if (tb) bar.querySelector(".ss-slot").appendChild(tb);
  document.documentElement.classList.add("ss-chrome");

  // the old in-page "← All modules" link is replaced by the bar
  [].forEach.call(document.querySelectorAll('a[href="../"]'), function (a) {
    if (!bar.contains(a) && /All modules/.test(a.textContent)) a.style.display = "none";
  });

  var foot = document.createElement("footer");
  foot.className = "ss-foot";
  foot.innerHTML = '<div class="ss-in"><span>School Stuff' + (code ? " · " + code : "") + "</span><span>" +
    (code ? '<a href="../' + mod + '/">All ' + code + " pages</a> · " : "") + '<a href="../">All modules</a></span></div>';
  document.body.appendChild(foot);
})();
