/* ===== EDIT THESE TWO LINES ===== */
const WA="+971554782240";          // WhatsApp number: country code + number, no + or spaces
const MAIL="Recruitment@sourceeve.com";  // company email
/* ================================= */
const wl=m=>`https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
const EXT=["jpg","png","webp","jpeg"];
/* Image fallback: tries .jpg > .png > .webp > .jpeg, then a stock photo (if any), then the colour tile */
function imgErr(i){let n=+(i.dataset.n||0);if(n<EXT.length-1){i.dataset.n=++n;i.src=i.dataset.b+"."+EXT[n]}else if(i.dataset.u&&!i.dataset.t){i.dataset.t=1;i.src="https://images.unsplash.com/photo-"+i.dataset.u+"?auto=format&fit=crop&w=900&q=70"}else i.remove()}
document.addEventListener("DOMContentLoaded",()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$$("[data-wa]").forEach(a=>{a.href=wl(a.dataset.wa);a.target="_blank";a.rel="noopener"});
$$("[data-mail]").forEach(a=>{a.href="mailto:"+MAIL});
const mo=o=>{document.body.classList.toggle("mo",o);$("#hb").setAttribute("aria-expanded",o)};
$("#hb").onclick=()=>mo(true);$("#cl").onclick=$("#ov").onclick=()=>mo(false);
$("#dr").onclick=e=>{if(e.target.closest("a"))mo(false)};
const pg=document.body.dataset.p;$$("nav.dk a").forEach(a=>a.classList.toggle("on",a.dataset.r==pg));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
$$(".rv").forEach(e=>e.getBoundingClientRect().top<innerHeight?e.classList.add("in","inst"):io.observe(e));
/* trending carousel: auto every 3s, swipe, arrows, dots */
const tr=$("#tr");if(tr){const vp=tr.parentNode,d=$("#dots");let i=0,st,max,tm,x0=null,mv=false;
 const calc=()=>{st=tr.children[0].offsetWidth+16;max=Math.max(0,tr.children.length-Math.round(vp.offsetWidth/st))};
 const go=k=>{i=k>max?0:k<0?max:k;tr.style.transform=`translateX(${-i*st}px)`;[...d.children].forEach((x,j)=>x.classList.toggle("on",j==i))};
 const run=()=>{clearInterval(tm);tm=setInterval(()=>go(i+1),3000)};
 calc();d.innerHTML=Array.from({length:max+1},(_,j)=>`<button aria-label="Slide ${j+1}"></button>`).join("");
 [...d.children].forEach((b,j)=>b.onclick=()=>{go(j);run()});
 $("#pv").onclick=()=>{go(i-1);run()};$("#nx").onclick=()=>{go(i+1);run()};
 vp.ondragstart=e=>e.preventDefault();
 vp.onpointerdown=e=>{x0=e.clientX;mv=false;clearInterval(tm)};
 vp.onpointerup=e=>{if(x0!=null){const dx=e.clientX-x0;if(Math.abs(dx)>40){mv=true;go(i+(dx<0?1:-1))}x0=null}run()};
 vp.onclick=e=>{if(mv){e.preventDefault();mv=false}};
 vp.onpointercancel=run;vp.onmouseenter=()=>clearInterval(tm);vp.onmouseleave=run;
 addEventListener("resize",()=>{calc();go(Math.min(i,max))});go(0);run()}
/* product zoom (lightbox) */
const items=$$(".pi");let k=0,lb;
if(items.length){lb=document.createElement("div");lb.id="lb";
 lb.innerHTML='<button class="xx" aria-label="Close">×</button><button class="nv pv" aria-label="Previous">‹</button><figure><div class="big"></div><figcaption></figcaption><a class="btn w" style="margin-top:14px" target="_blank" rel="noopener">Enquire on WhatsApp</a></figure><button class="nv nx" aria-label="Next">›</button>';
 document.body.appendChild(lb);
 const show=n=>{k=(n+items.length)%items.length;const it=items[k],t=it.querySelector(".im"),img=t.querySelector("img"),big=lb.querySelector(".big");
  big.setAttribute("style",t.getAttribute("style"));big.innerHTML="<span>"+t.querySelector("span").textContent+"</span>"+(img?`<img src="${img.currentSrc||img.src}" alt="" onerror="this.remove()">`:"");
  lb.querySelector("figcaption").textContent=it.dataset.n;lb.querySelector("a").href=wl("Hello SourceEve Group, I would like to enquire about "+it.dataset.n+".");
  lb.classList.add("on");document.body.style.overflow="hidden"};
 const hide=()=>{lb.classList.remove("on");document.body.style.overflow=""};
 items.forEach((it,n)=>it.onclick=()=>show(n));
 lb.querySelector(".xx").onclick=hide;lb.querySelector(".pv").onclick=()=>show(k-1);lb.querySelector(".nx").onclick=()=>show(k+1);
 lb.onclick=e=>{if(e.target==lb)hide()};
 document.addEventListener("keydown",e=>{if(!lb.classList.contains("on"))return;if(e.key=="Escape")hide();if(e.key=="ArrowLeft")show(k-1);if(e.key=="ArrowRight")show(k+1)})}
/* contact form -> WhatsApp */
const fm=$("#fm");if(fm){const m={employer:0,supplier:1,event:2},q=new URLSearchParams(location.search).get("i");if(q in m)$("#si").selectedIndex=m[q];
 fm.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(fm));
  window.open(wl(`Hello SourceEve Group,\n\nName: ${v.n}\nCompany: ${v.c||"-"}\nEmail: ${v.e}\nInterested in: ${v.i}\n\n${v.m}`),"_blank")}}
document.addEventListener("keydown",e=>{if(e.key=="Escape")mo(false)});
});
