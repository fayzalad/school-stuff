/* School Stuff site shell. index.html (landing) and each <slug>/index.html (module page) are empty shells;
   this file holds the module list and draws both. To add a module: add one object to MODULES, then copy any
   module page folder (e.g. iaut202/) to <slug>/ and change its data-module. */
(function(){
  "use strict";

  // Page types are grouped into categories on the module page, in this order.
  var CATS = [
    { id: "guides", title: "Study guides", tags: ["Guide"], note: "Read these first: explanations and worked examples, no questions." },
    { id: "sheets", title: "Cheat sheets", tags: ["Sheet"], note: "One-page summaries for the day before." },
    { id: "quizzes", title: "Quizzes", tags: ["Quiz"], note: "Multiple-choice questions with every answer explained." },
    { id: "drills", title: "Practice drills", tags: ["Drill", "Practice"], note: "Work problems step by step, with a fresh one each time." },
    { id: "exams", title: "Exam practice", tags: ["Exam", "Mock", "Mock exam"], note: "Long questions and full papers in the real exam style, with memos." }
  ];

  var MODULES = [
    {
      slug: "icnf102", code: "ICNF102", name: "Communication Network Fundamentals",
      blurb: "Networking from the OSI model to subnetting, VLSM, IPv6, VLANs and routing, with long-question practice for the exam.",
      tint: "#9C4A2E", tintDark: "#E0916E",
      sites: [
        { label: "Field reference", tag: "Guide", href: "icnf102-study-guide/",
          desc: "21-sheet study guide: explanations, worked examples and cheat sheets. No questions." },
        { label: "Line Test", tag: "Quiz", href: "icnf102-quiz/",
          desc: "200 questions in 8 sets, rising in difficulty. Study and test modes." },
        { label: "Subnet Bench", tag: "Drill", href: "icnf102-subnetting/",
          desc: "Traditional subnetting worked step by step. It explains the method as you solve it, not just the answer." },
        { label: "Subnetting Long Questions", tag: "Exam", href: "icnf102-subnet-exam/",
          desc: "20 exam-style long questions, from the past-paper question to VLSM. Type your answers to have them marked, then reveal the memo one step at a time." },
        { label: "Long Questions Practice", tag: "Exam", href: "icnf102-long-questions/",
          desc: "54 practice questions for every other long-question type: conversions, IPv6 and EUI-64, the TCP handshake, encapsulation, ping/traceroute scenarios, SLAAC, config scenarios. Calculations auto-marked; explanations marked against a memo." }
      ]
    },
    {
      slug: "wrav102", code: "WRAV102 / MSEV102", name: "Semester Test 2 theory",
      blurb: "Section A theory for Semester Test 2: sorting, searching, classes and arraylists, and code tracing.",
      tint: "#3C6E63", tintDark: "#7FC2B2",
      sites: [
        { label: "Theory Drill", tag: "Quiz", href: "wrav102-drill/",
          desc: "100 questions on sorting algorithms, searching, classes/arraylists and code tracing. Answers save to your browser." }
      ]
    },
    {
      slug: "stav102", code: "STAV102", name: "Business Statistics",
      blurb: "Final exam (Tue 27 Oct 2026), all ten units: descriptive statistics, probability, distributions, sampling, confidence intervals, hypothesis tests, regression and time series. Test 2 pages (Units 5 to 8) below.",
      tint: "#0F5B8C", tintDark: "#7DB8E0",
      sites: [
        { label: "Exam Study Guide (Units 1-10)", tag: "Guide", href: "stav102-exam-guide/",
          desc: "The whole semester for the final: Units 1-4 and 5-8 from the test guides, plus new Units 9 (regression and correlation) and 10 (time series), what the past finals ask, reading Excel output, errata, traps and a 2-day plan." },
        { label: "Exam Quiz (275 questions)", tag: "Quiz", href: "stav102-exam-quiz/",
          desc: "Every unit, 1 to 10, with the working for every answer. Filter by unit or test, an exam sim of 50 questions in the real paper's unit mix, and a redo-what-I-got-wrong mode." },
        { label: "Study Guide", tag: "Guide", href: "stav102-study-guide/",
          desc: "Units 5-8: probability distributions, sampling distributions, confidence intervals, hypothesis tests. Worked examples, lecture-video notes, errata, 7-day plan." },
        { label: "Cheat Sheet", tag: "Sheet", href: "stav102-cheat-sheet/",
          desc: "One page: which distribution, which interval, which test, critical values and conclusion templates." },
        { label: "MCQ Drill", tag: "Quiz", href: "stav102-quiz/",
          desc: "68 questions with explanations. Test-sim mode (20 random) and a redo-what-I-got-wrong mode." },
        { label: "Explained MCQs", tag: "Quiz", href: "stav102-explained-mcq/",
          desc: "50 questions with every answer explained, and the trap to avoid. Skim the answers, or hide them and test yourself." },
        { label: "Mock Papers", tag: "Mock", href: "stav102-mock-papers/",
          desc: "Two full 90-minute tests in the real layout (long questions + 20 MCQs) with mark-by-mark memos." }
      ]
    },
    {
      slug: "iaut202", code: "IAUT202", name: "Introduction to Automation",
      blurb: "The five exam questions (95 marks): theory, ADC, PLC scenarios, robotics and pneumatic cascades, plus full mock papers.",
      tint: "#5B4B8A", tintDark: "#B3A6DB",
      sites: [
        { label: "Question 1 Quiz", tag: "Quiz", href: "iaut202-quiz/",
          desc: "100 easy questions on the short-answer theory: control systems, sensors, PLCs, logic gates. Every answer explained, plus a memorise mode with the answers shown." },
        { label: "Likely Question 1 (50)", tag: "Quiz", href: "iaut202-likely-q1/",
          desc: "50 questions on the topics most likely to come up in Question 1: open and closed loop, logic and sequence control, levels of automation, PLC vs PC, gates, actuators." },
        { label: "ADC and Number Systems Quiz", tag: "Quiz", href: "iaut202-adc-quiz/",
          desc: "Question 2 (6 marks): computed successive approximation conversions (digital code and encoded voltage), resolution, quantisation error and binary, decimal and hex conversions." },
        { label: "Robotics Quiz (79)", tag: "Quiz", href: "iaut202-robotics-quiz/",
          desc: "Question 4: the five joint types (L, O, R, T, V), the five robot configurations, wrist and drives, sensors, the four control types, end effectors, programming, and control resolution, accuracy and repeatability." },
        { label: "PLC Quiz", tag: "Quiz", href: "iaut202-plc-quiz/",
          desc: "Question 3 groundwork: scan cycle, contacts, seal-in and latches, on-delay and off-delay timers, counters, flashers, and turning a scenario into logic." },
        { label: "PLC Scenario Practice (6)", tag: "Practice", href: "iaut202-plc-scenarios/",
          desc: "Six packaging and conveyor scenarios in the style of Question 3 (25 marks), each with an I/O table and full logic memo: carton line, crate line, labeller, shrink-wrap tunnel, two-conveyor accumulator, pallet layer counter." },
        { label: "Pneumatics Quiz", tag: "Quiz", href: "iaut202-pneumatics-quiz/",
          desc: "Question 5 groundwork: cylinders and valves, port numbers, sequence notation, the cascade method and the drawing conventions." },
        { label: "Pneumatic Cascade Practice (9)", tag: "Practice", href: "iaut202-pneumatics-practice/",
          desc: "Nine sequences to group and turn into an electrical cascade, each with a memo giving the groups, relay set and reset conditions and the solenoid table. One has a 3 s delay and one has four cylinders." },
        { label: "Mock Exam Papers A, B and C", tag: "Mock exam", href: "iaut202-practice-paper/",
          desc: "Three full 95-mark papers in the exam layout, worded like the make-up paper: theory as 20 multiple-choice questions, a 5-bit ADC (6), a PLC scenario with I/O table and sequence of operation (25), robotics with robot pictures (20) and a hand-drawn pneumatic cascade with a lamp (24). Each question has a memo that opens on tap." },
        { label: "Mixed Mock Quiz (64)", tag: "Mock exam", href: "iaut202-mock-quiz/",
          desc: "A mixed set drawn from every exam part (theory, ADC, PLC, robotics, pneumatics). Filter by part or run all of it as a quick mock." }
      ]
    }
  ];

  function esc(s){ var d=document.createElement("div"); d.textContent=s; return d.innerHTML; }
  function plural(n,w){ return n+" "+w+(n===1?"":"s"); }
  var ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  function accent(m){ return ' accent" style="--a-l:'+m.tint+';--a-d:'+m.tintDark; }

  function grouped(mod){
    return CATS.map(function(c){
      return { cat: c, items: mod.sites.filter(function(s){ return c.tags.indexOf(s.tag) >= 0; }) };
    }).filter(function(g){ return g.items.length; });
  }

  var slug = document.body.getAttribute("data-module");
  var mod = null, base = "";
  MODULES.forEach(function(m){ if(m.slug === slug) mod = m; });
  if(slug) base = "../";

  var root = document.getElementById("root");
  var top = '<header class="site-top"><div class="crumbs">'
    + '<a class="brand" href="'+base+'./" aria-label="School Stuff home"><span class="brand-mark" aria-hidden="true">S</span><span>School Stuff</span></a>'
    + (mod ? '<span class="crumb-sep" aria-hidden="true">/</span><span class="crumb-here'+accent(mod)+'">'+esc(mod.code.split(" / ")[0])+'</span>' : '')
    + '</div><button class="themebtn" id="themebtn" type="button" aria-label="Switch theme"></button></header>';

  var body;
  if(mod){
    document.title = mod.code.split(" / ")[0] + " · School Stuff";
    var groups = grouped(mod);
    body = '<main class="accent" style="--a-l:'+mod.tint+';--a-d:'+mod.tintDark+'">'
      + '<section class="mhero"><p class="module-code">'+esc(mod.code)+'</p><h1>'+esc(mod.name)+'</h1><p>'+esc(mod.blurb)+'</p>'
      + '<p class="stat">'+plural(mod.sites.length,"page")+' in '+plural(groups.length,"section")+'</p></section>'
      + '<div class="layout"><aside class="side"><h3>In this module</h3><nav aria-label="Sections">'
      + groups.map(function(g){ return '<a class="tab" href="#'+g.cat.id+'">'+esc(g.cat.title)+'<span>'+g.items.length+'</span></a>'; }).join("")
      + '</nav><div class="others"><h3>Other modules</h3>'
      + MODULES.filter(function(m){ return m !== mod; }).map(function(m){
          return '<a class="'+accent(m).slice(1)+'" href="../'+m.slug+'/"><span class="dot"></span>'+esc(m.code.split(" / ")[0])+'</a>'; }).join("")
      + '</div></aside><div>'
      + groups.map(function(g){
          return '<section class="cat" id="'+g.cat.id+'"><div class="cat-head"><h2>'+esc(g.cat.title)+'</h2><span>'+g.items.length+'</span></div>'
            + '<p class="cat-note">'+esc(g.cat.note)+'</p><div class="cards">'
            + g.items.map(function(s){
                return '<a class="card" href="../'+esc(s.href)+'"><span class="type-tag">'+esc(s.tag)+'</span><strong>'+esc(s.label)+'</strong>'
                  + '<small>'+esc(s.desc)+'</small><span class="open">Open '+ARROW+'</span></a>'; }).join("")
            + '</div></section>'; }).join("")
      + '</div></div><footer><a href="../">&larr; All modules</a><span>'+esc(mod.code)+'</span></footer></main>';
  } else {
    var total = 0;
    MODULES.forEach(function(m){ total += m.sites.length; });
    body = '<main><section class="hero" aria-labelledby="h"><p class="eyebrow">Your study shelf</p><h1 id="h">Pick a module.</h1>'
      + '<p class="hero-copy">Study guides, quizzes and exam practice for each course. Open a module to see everything in it, sorted by type.</p></section>'
      + '<div class="grid">'
      + MODULES.map(function(m,i){
          return '<a class="mcard'+accent(m)+'" href="'+m.slug+'/"><span class="idx" aria-hidden="true">0'+(i+1)+'</span>'
            + '<div><p class="module-code">'+esc(m.code)+'</p><h2>'+esc(m.name)+'</h2><p class="blurb">'+esc(m.blurb)+'</p></div>'
            + '<div class="mfoot"><div class="chips">'
            + grouped(m).map(function(g){ return '<span class="chip"><b>'+g.items.length+'</b>'+esc(g.cat.title)+'</span>'; }).join("")
            + '</div><span class="open">Open module '+ARROW+'</span></div></a>'; }).join("")
      + '</div><footer><span>New modules get added here as they are built.</span><span>'+plural(MODULES.length,"module")+' · '+plural(total,"page")+'</span></footer></main>';
  }
  root.innerHTML = top + body;

  // Highlight the section being read.
  var tabs = document.querySelectorAll("a.tab");
  if(tabs.length && "IntersectionObserver" in window){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){
        [].forEach.call(tabs,function(t){ t.classList.toggle("on", t.getAttribute("href")==="#"+e.target.id); });
      }});
    },{rootMargin:"-20% 0px -65% 0px"});
    [].forEach.call(document.querySelectorAll(".cat"),function(c){ io.observe(c); });
  }

  // Theme button: auto -> light -> dark -> paper, shared key across the whole site.
  var btn = document.getElementById("themebtn"), KEY = "school_stuff_theme", order = ["auto","light","dark","paper"];
  var icons = {
    auto:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/></svg>',
    light:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    dark:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    paper:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h7"/></svg>'
  };
  var theme = "auto";
  try{ theme = localStorage.getItem(KEY) || "auto"; }catch(e){}
  if(order.indexOf(theme) < 0) theme = "auto";
  function apply(){
    if(theme==="auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
    btn.innerHTML = icons[theme] + '<span>' + theme + '</span>';
    btn.title = "Theme: " + theme + " (click to change)";
    btn.setAttribute("aria-label", "Theme: " + theme + ". Click to change");
  }
  apply();
  btn.onclick = function(){
    theme = order[(order.indexOf(theme)+1) % order.length];
    apply();
    try{ localStorage.setItem(KEY, theme); }catch(e){}
  };
})();
