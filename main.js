/* ===== EDIT THESE TWO LINES ===== */
const WA="971554782240";          // WhatsApp number: country code + number, no + or spaces
const TEL="+971 55 478 2240";     // phone number as shown on the site
const MAIL="Recruitment@sourceeve.com";  // company email
/* ================================= */
/* ===== EMAILJS: both forms deliver to the client's Gmail =====
   Paste the 4 PUBLIC values from your EmailJS dashboard. Never put passwords or private keys here. */
const EMAILJS={publicKey:"YOUR_EMAILJS_PUBLIC_KEY",serviceId:"YOUR_EMAILJS_SERVICE_ID",inquiryTemplateId:"YOUR_INQUIRY_TEMPLATE_ID",productTemplateId:"YOUR_PRODUCT_REQUEST_TEMPLATE_ID"};
/* ============================================================ */
const mailOk=t=>[EMAILJS.publicKey,EMAILJS.serviceId,t].every(v=>v&&!/^YOUR_/.test(v));
async function sendMail(tpl,params){
 if(!mailOk(tpl))throw new Error("EmailJS is not configured");
 const ac=new AbortController(),tm=setTimeout(()=>ac.abort(),15000);
 try{const r=await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},signal:ac.signal,body:JSON.stringify({service_id:EMAILJS.serviceId,template_id:tpl,user_id:EMAILJS.publicKey,template_params:params})});
  const t=await r.text();if(!r.ok)throw new Error(t||"HTTP "+r.status);return t}finally{clearTimeout(tm)}}
const stamp=()=>new Date().toLocaleString("en-GB",{dateStyle:"medium",timeStyle:"short"})+" ("+Intl.DateTimeFormat().resolvedOptions().timeZone+")";
document.documentElement.classList.add("jsok");
const wl=m=>`https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
const EXT=["jpg","png","webp","jpeg"];
/* Image fallback: tries .jpg > .png > .webp > .jpeg, then a stock photo (if any), then the colour tile */
function loadEmbed(cb){if(window.EMBED)return cb();const s=document.createElement("script");s.src="fallback-images.js";s.onload=cb;s.onerror=cb;document.head.appendChild(s)}
const ALIAS={hero:["home","hero-banner","banner"]};
function cands(b){const nm=b.split("/").pop(),dir=b.slice(0,b.length-nm.length),o=[];
 if(b.includes("/products/")){for(const e of EXT)o.push(b+"."+e);return o}
 for(const n of [nm,...(ALIAS[nm]||[])])for(const d of [...new Set([dir,"images/","images/products/",""])])for(const e of EXT)o.push(d+n+"."+e);return o}
function imgErr(i){const L=cands(i.dataset.b||""),n=(+i.dataset.n||0)+1;
 if(n<L.length){i.dataset.n=n;i.src=L[n]}
 else if(i.dataset.u&&!i.dataset.t){i.dataset.t=1;i.src="https://images.unsplash.com/photo-"+i.dataset.u+"?auto=format&fit=crop&w=900&q=70"}
 else{const k=(i.dataset.b||"").split("/").pop();if(i.dataset.e||k!="logo"){i.remove();return}i.dataset.e=1;loadEmbed(()=>{if(window.EMBED&&EMBED.logo)i.src=EMBED.logo;else i.remove()})}}
/* header logo: if images/logo.* is missing the header shows text; swap in the backup logo */
addEventListener("load",()=>{const b=document.querySelector("header .lg b");if(b)loadEmbed(()=>{if(window.EMBED&&EMBED.logo){const m=new Image();m.alt="SourceEve Group of Companies";m.src=EMBED.logo;b.replaceWith(m)}})});
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
/* smooth image fade-in (no flash of placeholder) */
$$(".im img,.hx-bg img").forEach(m=>{const ok=()=>m.classList.add("ld");m.complete&&m.naturalWidth?ok():m.addEventListener("load",ok)});
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
/* shared submit: validation, loading, success, error, no duplicates */
const say=(el,m,ok)=>{el.textContent=m;el.classList.remove("ok","err");if(m)el.classList.add(ok?"ok":"err")};
async function submitForm(f,tpl,build,done){
 const st=f.querySelector(".fs"),btn=f.querySelector("button[type=submit]");
 if(f.dataset.busy)return;if(f.elements.website&&f.elements.website.value)return;
 const c=f.elements.contact;if(c){const v=c.value.trim();c.setCustomValidity(/^\S+@\S+\.\S+$/.test(v)||v.replace(/\D/g,"").length>=7?"":"Enter a valid email or phone number")}
 if(!f.checkValidity()){f.reportValidity();return}
 f.dataset.busy=1;btn.disabled=true;const lab=btn.textContent;btn.textContent="Sending…";say(st,"");
 try{await sendMail(tpl,build(Object.fromEntries(new FormData(f))));say(st,done,1);f.reset()}
 catch(e){console.error("EmailJS:",e);say(st,mailOk(tpl)?"Sorry, we couldn’t send this right now. Please try again, or contact us on WhatsApp.":"The email service isn’t configured yet. Please contact us on WhatsApp for now.",0)}
 finally{btn.textContent=lab;setTimeout(()=>{btn.disabled=false;delete f.dataset.busy},2500)}}
/* product request card at the end of every category grid (category = page title) */
const grid=$(".pgrid");if(grid){const h=$(".bh h1"),cat=(h?h.textContent:document.title.split("|")[0]).trim();
 grid.insertAdjacentHTML("beforeend",`<div class="req" id="request"><div class="req-side"><svg viewBox="0 0 120 100" width="96" aria-hidden="true"><g fill="rgba(255,255,255,.08)" stroke="#fff" stroke-width="3" stroke-linejoin="round"><path d="M60 14l40 20-40 20-40-20z"/><path d="M20 34l40 20v42L20 76z"/><path d="M100 34L60 54v42l40-20z"/></g><path d="M40 24l40 20" stroke="#e31b23" stroke-width="6" stroke-linecap="round"/></svg><h3>Can’t Find Your Product?</h3><p>Tell us what you need. We’ll check availability and get back to you.</p><span class="req-cat">Category: <b></b></span></div><div class="req-body"><form class="req-f"><label>Product name *<input name="product" required maxlength="120" placeholder="e.g. Kashmiri red chilli"></label><div class="req-q"><label>Quantity *<input name="qty" type="number" min="0.01" step="any" required placeholder="e.g. 500"></label><label>Unit<select name="unit"><option>kg</option><option>tonnes</option><option>boxes</option><option>pieces</option></select></label></div><label>Your email or phone *<input name="contact" required maxlength="120" placeholder="So we can reply to you"></label><label>Additional details<textarea name="msg" rows="3" maxlength="1500" placeholder="Grade, packing, destination, timeline…"></textarea></label><input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"><button class="btn" type="submit">Send Request</button><p class="fs" role="status" aria-live="polite"></p></form></div></div>`);
 grid.querySelector(".req-cat b").textContent=cat;const f=grid.querySelector(".req-f");f.elements.contact.addEventListener("input",e=>e.target.setCustomValidity(""));
 f.onsubmit=e=>{e.preventDefault();submitForm(f,EMAILJS.productTemplateId,v=>({subject:"New Product Request — SourceEve",category:cat,product_name:v.product,quantity:v.qty+" "+v.unit,quantity_value:v.qty,unit:v.unit,message:v.msg||"-",contact:v.contact,reply_to:/@/.test(v.contact)?v.contact:"",submitted_at:stamp(),page_url:location.href}),"Thank you! Your request has been sent. We’ll check availability and get back to you.")}}
/* contact form -> email (EmailJS) */
const fm=$("#fm");if(fm){const m={employer:0,supplier:1,event:2},q=new URLSearchParams(location.search).get("i");if(q in m)$("#si").selectedIndex=m[q];
 fm.onsubmit=e=>{e.preventDefault();submitForm(fm,EMAILJS.inquiryTemplateId,v=>({subject:"New Inquiry — SourceEve: "+v.i,from_name:v.n,company:v.c||"-",reply_to:v.e,from_email:v.e,interest:v.i,message:v.m,submitted_at:stamp(),page_url:location.href}),"Thank you! Your inquiry has been sent. Our team will get back to you soon.")}}
/* contact details (kept in sync with WA / TEL / MAIL above) */
$$("[data-tel]").forEach(a=>{a.href="tel:+"+WA;a.textContent=TEL});
$$("[data-mailtxt]").forEach(a=>{a.href="mailto:"+MAIL;a.textContent=MAIL});
document.addEventListener("keydown",e=>{if(e.key=="Escape")mo(false)});
});
