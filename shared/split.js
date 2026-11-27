/* split.js: "Split into parts" for the quizzes on the school-stuff site.
   Mixes a quiz's questions once, shares them out evenly into the number of parts the user picks
   (70 into 3 = 24, 23, 23; never 25, 25, 3) and remembers the parts and the score of each part
   on this device. Canonical copy: Stav/Test 2 prep/src/split.js. The site's shared/split.js is a
   copy of it, and the STAV quiz builds paste it into their pages.

   Use:
     var sp = new Split({key: "page-id", mount: element, onChange: function(why){ rebuild(); }});
     var part = sp.take(questions, "filter-signature", {id: function(q){ return q.i; }});
     sp.score(right, answered, part.length);   // after every answer
     var b = sp.nextButton(); if (b) endBox.appendChild(b);
   onChange(why): why is "part" (another part picked), "redo" (the same part tapped again),
   "parts" (number of parts changed) or "shuffle" (new mix). */
(function () {
  if (window.Split) return;
  var CSS = ".splitbar{border:1px solid rgba(127,127,127,.35);border-radius:12px;padding:10px 12px;margin:0 0 14px;font-size:.9rem;scroll-margin-top:70px}" +
    ".splitbar[hidden]{display:none}" +
    ".sp-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px}" +
    ".sp-row label{display:flex;align-items:center;gap:6px;flex-wrap:wrap}" +
    ".sp-row select,.sp-row button,.sp-chip{font:inherit;font-size:.88rem;color:inherit;background:transparent;border:1px solid rgba(127,127,127,.45);border-radius:8px;padding:7px 10px;cursor:pointer;max-width:100%}" +
    ".sp-row select option{color:#1c1a17;background:#fff}" +
    ".sp-parts{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}" +
    ".sp-parts:empty{display:none}" +
    ".sp-chip{display:flex;flex-direction:column;align-items:flex-start;line-height:1.25;min-width:84px;text-align:left}" +
    ".sp-chip small{font-size:.74rem;opacity:.75}" +
    ".splitbar .sp-chip.ok{border-color:var(--ok,#1e7a4a)!important}" +
    ".sp-chip.ok small{color:var(--ok,#1e7a4a);opacity:1;font-weight:600}" +
    ".splitbar .sp-chip.on{background:var(--accent,#0f5b8c)!important;border-color:var(--accent,#0f5b8c)!important;color:var(--onaccent,#fff)!important}" +
    ".splitbar .sp-chip.on small{color:inherit!important;opacity:.85}" +
    ".sp-hint{margin-top:7px;font-size:.8rem;opacity:.75}" +
    ".sp-hint:empty{display:none}" +
    ".sp-next{font:inherit;margin-top:10px;padding:9px 14px;border-radius:9px;border:0!important;background:var(--accent,#0f5b8c)!important;color:var(--onaccent,#fff)!important;cursor:pointer;font-weight:600;display:block}" +
    "@media (max-width:600px){.sp-row select,.sp-row button,.sp-chip{padding:9px 11px}.sp-chip{min-width:calc(33% - 6px)}}";

  function addCss() {
    if (document.getElementById("split-css")) return;
    var s = document.createElement("style"); s.id = "split-css"; s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function sizes(n, k) { var b = Math.floor(n / k), x = n % k, out = []; for (var i = 0; i < k; i++) out.push(b + (i < x ? 1 : 0)); return out; }
  function eachText(n, k) { var b = Math.floor(n / k); return n % k ? b + " or " + (b + 1) + " each" : b + " each"; }
  function maxParts(n) { return Math.min(20, Math.floor(n / 4)); }
  function load(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function Split(cfg) {
    addCss();
    this.cfg = cfg; this.key = "split:" + cfg.key;
    this.st = load(this.key) || {};
    if (!this.st.runs) this.st.runs = {};
    if (!this.st.k) this.st.k = 1;
    this.active = false; this.n = 0; this.k = 1; this.run = null; this._fresh = false; this.ids = [];
    var el = this.el = document.createElement("div");
    el.className = "splitbar"; el.hidden = true;
    el.innerHTML = '<div class="sp-row"><label>Split into <select class="sp-k"></select></label>' +
      '<button type="button" class="sp-shuf">Shuffle again</button></div><div class="sp-parts"></div><div class="sp-hint"></div>';
    var self = this;
    el.querySelector(".sp-k").addEventListener("change", function () {
      self.st.k = +this.value; save(self.key, self.st); self.go("parts");
    });
    el.querySelector(".sp-shuf").addEventListener("click", function () { self._fresh = true; self.go("shuffle"); });
    el.querySelector(".sp-parts").addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest(".sp-chip") : null; if (!b || !self.run) return;
      var i = +b.getAttribute("data-i");
      if (i === self.run.cur) { delete self.run.res[i]; save(self.key, self.st); self.go("redo"); }
      else { self.run.cur = i; save(self.key, self.st); self.go("part"); }
    });
    if (cfg.mount) cfg.mount.appendChild(el);
  }
  Split.prototype.go = function (why) {
    if (this.cfg.onChange) this.cfg.onChange(why);
    var r = this.el.getBoundingClientRect();
    if (r.top < 0 || r.top > window.innerHeight) this.el.scrollIntoView({block: "start"});
  };
  /* Ask for a new mix the next time take() runs (for a page's own "reshuffle" button). */
  Split.prototype.fresh = function () { this._fresh = true; };
  /* Returns the questions of the current part, or all of them when the quiz is not split. */
  Split.prototype.take = function (items, sig, opt) {
    opt = opt || {};
    var idf = opt.id || function (q) { return q.i; }, by = {}, ids = [];
    items.forEach(function (q) { var i = idf(q); by[i] = q; ids.push(i); });
    this.n = items.length; this.ids = ids; this.sig = sig;
    var k = Math.min(this.st.k, maxParts(this.n));
    if (k < 2) { this.active = false; this.k = 1; this.run = null; this._fresh = false; this.render(); return items; }
    var run = this.st.runs[sig];
    if (!run || this._fresh) {
      run = this.st.runs[sig] = {order: opt.keepOrder ? ids.slice() : shuffle(ids.slice()), cur: 0, res: {}, k: k};
    } else {
      var have = {}, keep = run.order.filter(function (i) { if (by[i] !== undefined && !have[i]) { have[i] = 1; return true; } return false; });
      var add = ids.filter(function (i) { return !have[i]; });
      if (!opt.keepOrder) shuffle(add);
      if (add.length || keep.length !== run.order.length) run.res = {};
      run.order = keep.concat(add);
    }
    this._fresh = false;
    if (run.k !== k) { run.k = k; run.cur = 0; run.res = {}; }
    if (!(run.cur < k)) run.cur = 0;
    this.run = run; this.k = k; this.active = true;
    var sz = sizes(this.n, k), start = 0;
    for (var p = 0; p < run.cur; p++) start += sz[p];
    var part = run.order.slice(start, start + sz[run.cur]).map(function (i) { return by[i]; });
    if (opt.keepOrder) shuffle(part);
    var names = Object.keys(this.st.runs);
    if (names.length > 40) delete this.st.runs[names[0]];
    save(this.key, this.st);
    this.render();
    return part;
  };
  /* Ids of the current part (after take). */
  Split.prototype.partIds = function () {
    if (!this.active) return this.ids.slice();
    var sz = sizes(this.n, this.k), start = 0;
    for (var p = 0; p < this.run.cur; p++) start += sz[p];
    return this.run.order.slice(start, start + sz[this.run.cur]);
  };
  Split.prototype.label = function () { return this.active ? "Part " + (this.run.cur + 1) + " of " + this.k : ""; };
  Split.prototype.score = function (c, a, n) {
    if (!this.active || !a) return;  // 0 answered = a part just (re)opened: keep the last result on its button
    this.run.res[this.run.cur] = {c: c, a: a, n: n};
    save(this.key, this.st); this.render();
  };
  /* A "Next part" button for the end of a part, or null when there is no next part. */
  Split.prototype.nextButton = function () {
    if (!this.active || this.run.cur >= this.k - 1) return null;
    var self = this, b = document.createElement("button");
    b.type = "button"; b.className = "sp-next"; b.textContent = "Next: Part " + (this.run.cur + 2) + " of " + this.k + " →";
    b.addEventListener("click", function () { self.run.cur++; save(self.key, self.st); self.go("part"); });
    return b;
  };
  Split.prototype.render = function () {
    var el = this.el, n = this.n, mk = maxParts(n);
    if (mk < 2) { el.hidden = true; return; }
    el.hidden = false;
    var sel = el.querySelector(".sp-k"), h = '<option value="1">Don\'t split (all ' + n + ')</option>';
    for (var k = 2; k <= mk; k++) h += '<option value="' + k + '">' + k + ' parts (' + eachText(n, k) + ')</option>';
    sel.innerHTML = h; sel.value = String(this.k);
    el.querySelector(".sp-shuf").hidden = !this.active;
    var parts = "", hint = "";
    if (this.active) {
      var sz = sizes(n, this.k), all = 0, right = 0, done = 0;
      for (var i = 0; i < this.k; i++) {
        var r = this.run.res[i], cls = "sp-chip", sub = sz[i] + " questions";
        if (r && r.a >= r.n) { cls += " ok"; sub = r.c + "/" + r.n + " right"; done++; right += r.c; all += r.n; }
        else if (r) sub = r.a + " of " + r.n + " done";
        if (i === this.run.cur) cls += " on";
        parts += '<button type="button" class="' + cls + '" data-i="' + i + '">Part ' + (i + 1) + '<small>' + sub + '</small></button>';
      }
      hint = done === this.k
        ? "All " + this.k + " parts done: " + right + "/" + all + " right. Tap Shuffle again for new parts."
        : "Questions are mixed and shared out evenly. A part keeps the same questions until you tap Shuffle again.";
    }
    el.querySelector(".sp-parts").innerHTML = parts;
    el.querySelector(".sp-hint").textContent = hint;
  };
  Split.sizes = sizes;
  window.Split = Split;
})();
