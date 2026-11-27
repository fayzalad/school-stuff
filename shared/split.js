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
   "parts" (number of parts changed) or "shuffle" (new mix).
   Linked questions ("use the result of Q8", one table for several questions): pass
     {group: function(q){ return q.g; }, rank: function(q){ return q.gk; }}
   to take(). Questions with the same group stay together, in rank order, and a part never cuts a group.
   Split.mix(list, group, rank) shuffles a list the same way; Split.cluster(list, group, rank) only pulls
   each group together; Split.first(list, n, group, rank) takes up to n questions without cutting a group. */
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
  function eachText(n, k, about) {
    var b = Math.floor(n / k);
    if (about) return "about " + Math.round(n / k) + " each";
    return n % k ? b + " or " + (b + 1) + " each" : b + " each";
  }
  function none(g) { return g === undefined || g === null || g === ""; }
  function noGroup() { return null; }
  function noRank() { return 0; }
  /* Blocks of a list: a linked group becomes one block (in rank order) where its first member was. */
  function blocks(list, gf, rf) {
    var out = [], at = {};
    list.forEach(function (q) {
      var g = gf(q);
      if (none(g)) { out.push([q]); return; }
      if (at[g] === undefined) { at[g] = out.length; out.push([]); }
      out[at[g]].push(q);
    });
    out.forEach(function (b) { if (b.length > 1) b.sort(function (x, y) { return rf(x) - rf(y); }); });
    return out;
  }
  function flat(bs) { return [].concat.apply([], bs); }
  /* Where the parts start: as close to even as possible, but never inside a linked group. */
  function cutsFor(order, k, gid) {
    var n = order.length, sz = sizes(n, k), ok = [], out = [0], c = 0;
    for (var p = 1; p < n; p++) { var a = gid(order[p - 1]); ok[p] = none(a) || a !== gid(order[p]); }
    for (var j = 0; j < k - 1; j++) {
      c += sz[j];
      var last = out[out.length - 1], best = -1;
      for (var d = 0; d < n && best < 0; d++) {
        if (c - d > last && c - d < n && ok[c - d]) best = c - d;
        else if (c + d > last && c + d < n && ok[c + d]) best = c + d;
      }
      if (best < 0) break;
      out.push(best);
    }
    out.push(n);
    return out;
  }
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
    var gf = opt.group || noGroup, rf = opt.rank || noRank, gOf = {}, rOf = {}, grouped = false;
    items.forEach(function (q) {
      var i = idf(q); by[i] = q; ids.push(i); gOf[i] = gf(q); rOf[i] = rf(q);
      if (!none(gOf[i])) grouped = true;
    });
    var gid = function (i) { return gOf[i]; }, rid = function (i) { return rOf[i]; };
    this.n = items.length; this.ids = ids; this.sig = sig; this.grouped = grouped;
    var k = Math.min(this.st.k, maxParts(this.n));
    if (k < 2) { this.active = false; this.k = 1; this.run = null; this._fresh = false; this.render(); return items; }
    var run = this.st.runs[sig];
    if (!run || this._fresh) {
      run = this.st.runs[sig] = {order: opt.keepOrder ? ids.slice() : flat(shuffle(blocks(ids, gid, rid))), cur: 0, res: {}, k: k};
    } else {
      var have = {}, keep = run.order.filter(function (i) { if (by[i] !== undefined && !have[i]) { have[i] = 1; return true; } return false; });
      var add = ids.filter(function (i) { return !have[i]; });
      if (!opt.keepOrder) add = flat(shuffle(blocks(add, gid, rid)));
      if (add.length || keep.length !== run.order.length) run.res = {};
      run.order = keep.concat(add);
    }
    run.order = flat(blocks(run.order, gid, rid));  // linked questions together, in order
    this._fresh = false;
    if (run.k !== k) { run.k = k; run.cur = 0; run.res = {}; }
    if (!(run.cur < k)) run.cur = 0;
    this.cuts = cutsFor(run.order, k, gid);
    k = this.cuts.length - 1;
    if (!(run.cur < k)) run.cur = 0;
    this.run = run; this.k = k; this.active = true;
    var part = run.order.slice(this.cuts[run.cur], this.cuts[run.cur + 1]).map(function (i) { return by[i]; });
    if (opt.keepOrder) part = flat(shuffle(blocks(part, gf, rf)));
    var names = Object.keys(this.st.runs);
    if (names.length > 40) delete this.st.runs[names[0]];
    save(this.key, this.st);
    this.render();
    return part;
  };
  /* Ids of the current part (after take). */
  Split.prototype.partIds = function () {
    if (!this.active) return this.ids.slice();
    return this.run.order.slice(this.cuts[this.run.cur], this.cuts[this.run.cur + 1]);
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
    for (var k = 2; k <= mk; k++) h += '<option value="' + k + '">' + k + ' parts (' + eachText(n, k, this.grouped) + ')</option>';
    sel.innerHTML = h; sel.value = String(this.k);
    el.querySelector(".sp-shuf").hidden = !this.active;
    var parts = "", hint = "";
    if (this.active) {
      var all = 0, right = 0, done = 0;
      for (var i = 0; i < this.k; i++) {
        var r = this.run.res[i], cls = "sp-chip", sub = (this.cuts[i + 1] - this.cuts[i]) + " questions";
        if (r && r.a >= r.n) { cls += " ok"; sub = r.c + "/" + r.n + " right"; done++; right += r.c; all += r.n; }
        else if (r) sub = r.a + " of " + r.n + " done";
        if (i === this.run.cur) cls += " on";
        parts += '<button type="button" class="' + cls + '" data-i="' + i + '">Part ' + (i + 1) + '<small>' + sub + '</small></button>';
      }
      hint = done === this.k
        ? "All " + this.k + " parts done: " + right + "/" + all + " right. Tap Shuffle again for new parts."
        : "Questions are mixed and shared out evenly. A part keeps the same questions until you tap Shuffle again." +
          (this.grouped ? " Questions that use the same data stay together, in order." : "");
    }
    el.querySelector(".sp-parts").innerHTML = parts;
    el.querySelector(".sp-hint").textContent = hint;
  };
  Split.sizes = sizes;
  Split.mix = function (list, gf, rf) { return flat(shuffle(blocks(list.slice(), gf || noGroup, rf || noRank))); };
  Split.cluster = function (list, gf, rf) { return flat(blocks(list, gf || noGroup, rf || noRank)); };
  Split.first = function (list, n, gf, rf) {
    var out = [];
    blocks(list, gf || noGroup, rf || noRank).forEach(function (b) { if (out.length + b.length <= n) out = out.concat(b); });
    return out;
  };
  window.Split = Split;
})();
