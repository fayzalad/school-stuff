/* Round auto/light/dark button, same as the STAV102 pages. Needs <button class="themebtn" id="themebtn"> in the page. */
(function(){
  var KEY="school_stuff_theme", order=["auto","light","dark"], btn=document.getElementById("themebtn");
  if(!btn) return;
  var icons={
    auto:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/></svg>',
    light:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    dark:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
  };
  var t="auto"; try{t=localStorage.getItem(KEY)||"auto";}catch(e){}
  function apply(){
    if(t==="light"||t==="dark") document.documentElement.setAttribute("data-theme",t);
    else document.documentElement.removeAttribute("data-theme");
    btn.innerHTML=icons[t]; btn.title="Theme: "+t+" (click to change)"; btn.setAttribute("aria-label","Theme: "+t+". Click to change");
  }
  apply();
  btn.addEventListener("click",function(){ t=order[(order.indexOf(t)+1)%order.length]; apply(); try{localStorage.setItem(KEY,t);}catch(e){} });
})();
