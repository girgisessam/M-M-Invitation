/* ============ ONE PLACE TO EDIT EVERYTHING ============ */
const weddingConfig = {
  weddingDateISO: "2026-10-06T20:00:00+03:00", // countdown target (Cairo time)
  mapUrl: "https://maps.app.goo.gl/TwH7nxVX6CrpfYK57", // "Open in Maps" link (use a Google "embed" URL to show a live map)
  
  sheetUrl: "", // paste your Google Apps Script Web App URL here (ends with /exec)
  defaultLang: "en",
  images: { hero: "images/laugh.jpg", gallery: ["images/pool.jpg", "images/cabin.jpg", "images/stairs.jpg"] }
};
/* All wording, in both languages. Edit freely; empty text hides the element. */
const TEXT = {
  ar: { dir: "rtl", title: "ماركو & ميرنا · ٠٦ · ١٠ · ٢٠٢٦", names: "ماركو & ميرنا", mono: "م&م", tap: "اضغط للفتح",
    invite: "بكل الحب<br>ندعوكم لحضور زفافنا", shortDate: "٠٦ · ١٠ · ٢٠٢٦", weddingDate: "٦ أكتوبر ٢٠٢٦", weekday: "الثلاثاء",
    venue: "كنيسة العذراء مريم والسمائين", venueShort: "شبرا الخيمة · مصر", address: "نزلة بهتيم – شبرا الخيمة",
    ceremony: "مراسم الإكليل", ceremonyTime: "٨:٠٠ مساءً", forever: "يبدأ الأبد بعد",
    Days: "يوم", Hours: "ساعة", Minutes: "دقيقة", Seconds: "ثانية",
    coupleEy: "العروسان", storyT: "قصتنا", lead: "حياتان، رحلتان، وبداية واحدة جميلة.", dayT: "يوم الزفاف",
    moments: "لحظات", together: "معًا", where: "المكان", blurb: "يسعدنا أن نحتفل معكم بهذا اليوم المبارك.", openMaps: "افتح في الخريطة",
    dressEy: "الزي", dressCode: "أنيق واحتفالي", dressNote: "الألوان الهادئة والمبهجة مرحّب بها.",
    rsvpEy: "نرجو التأكيد", rsvpT: "شاركونا فرحتنا و ابعت رسايل للعروسين", fName: "الاسم بالكامل", fEmail: "البريد الإلكتروني", fAttend: "هل ستحضر؟", yes: "هحضر", no: "مش هحضر",
    fGuests: "عدد الحضور", fDiet: "متطلبات غذائية", fMsg: "رسالة", confirm: "ابعت الرسالة", sendMsg: "ابعت الرسالة", joyT: "شكرًا من القلب!", joyS: "فرحتنا مش هتكمل غير بوجودك. اكتب لنا رسالة صغيرة وابعتها للعروسين 💌", dodge: ["مش هينفع، عايزينك معانا!", "استحالة! لازم تيجي", "جرّب تاني… الزرار مش عايز يتضغط"], sending: "جارٍ الإرسال…",
    err: "من فضلك اكتب اسمك.", errMsg: "من فضلك اكتب رسالة للعروسين.", errSend: "حدث خطأ. حاول مرة أخرى.", thanks: n => "شكرًا يا " + n, thanksYes: "يسعدنا حضورك معنا.", thanksNo: "سنفتقدك كثيرًا.",
    closing: "لا يمكننا الانتظار<br>للاحتفال معكم", openAria: "افتح الدعوة", menuAria: "القائمة", playAria: "تشغيل الموسيقى", pauseAria: "إيقاف الموسيقى", alt: "ماركو وميرنا", toggle: "EN",
    nav: ["الرئيسية", "قصتنا", "الحدث", "الموقع", "تأكيد الحضور"],
    story: [{ title: "أول لقاء", date: "البداية", text: "مرحبًا بسيطة تحولت إلى حديث لم نرد له أن ينتهي." }, { title: "أول مغامرة", date: "معًا", text: "مشاوير طويلة وضحكات مشتركة، وشعور بأن البيت هو شخص." },
      { title: "طلب الارتباط", date: "السؤال", text: "سؤال واحد، وإجابة سهلة، ومستقبل جاهزون لنكتبه." }, { title: "يوم الزفاف", date: "٦ أكتوبر ٢٠٢٦", text: "وسط الأحباب، نبدأ رحلتنا." }] },
  en: { dir: "ltr", title: "Marko & Merna · 06 · 10 · 2026", names: "Marko & Merna", mono: "M&M", tap: "Tap to open",
    invite: "With all our love, we<br>invite you to", shortDate: "06 · 10 · 2026", weddingDate: "6 October 2026", weekday: "Tuesday",
    venue: "Church of the Virgin Mary and the Heavenly Ones", venueShort: "Shubra El Kheima · Egypt", address: "Nazlet Bahtim, Shubra El Kheima",
    ceremony: "Ceremony", ceremonyTime: "8:00 PM", forever: "Forever begins in", Days: "Days", Hours: "Hours", Minutes: "Minutes", Seconds: "Seconds",
    coupleEy: "The couple", storyT: "Our Story", lead: "Two lives, two journeys, one beautiful beginning.", dayT: "The Day",
    moments: "Moments", together: "Together", where: "Where", blurb: "We would be honoured to celebrate this blessed day with you.", openMaps: "Open in Maps",
    dressEy: "Dress code", dressCode: "Elegant & Festive", dressNote: "Soft, joyful colours are most welcome.",
    rsvpEy: "Kindly reply", rsvpT: "Share our joy and send the couple a message", fName: "Full name", fEmail: "Email", fAttend: "Will you attend?", yes: "Attending", no: "Not attending",
    fGuests: "Number of guests", fDiet: "Dietary requirements", fMsg: "Message", confirm: "Send message", sendMsg: "Send message", joyT: "Thank you!", joyS: "Our joy won't be complete without you. Leave the couple a little message below 💌", dodge: ["Oh no, we need you there!", "Not so fast! Please say you'll come.", "Nice try… this button refuses to be pressed."], sending: "Sending…",
    err: "Please add your name.", errMsg: "Please write a message for the couple.", errSend: "Something went wrong. Please try again.", thanks: n => "Thank you, " + n, thanksYes: "We are delighted you will be there.", thanksNo: "We will miss you dearly.",
    closing: "We can't wait to<br>celebrate with you", openAria: "Open the wedding invitation", menuAria: "Menu", playAria: "Play music", pauseAria: "Pause music", alt: "Marko and Merna", toggle: "عربي",
    nav: ["HOME", "OUR STORY", "EVENT", "LOCATION", "RSVP"],
    story: [{ title: "First meeting", date: "Where it began", text: "A simple hello that turned into a conversation neither of us wanted to end." }, { title: "First adventure", date: "Together", text: "Long walks, shared laughter, and the feeling that home is a person." },
      { title: "The proposal", date: "The question", text: "One question, one easy answer, and a future we were ready to write." }, { title: "The wedding day", date: "6 October 2026", text: "Surrounded by the people we love most, we begin." }] }
};
/* ======================================================= */
const c = weddingConfig, $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
let lang = 'en', T = TEXT.en;
try { lang = localStorage.getItem('lang-v2') || c.defaultLang; } catch (e) { lang = c.defaultLang; }
$$('[data-img]').forEach(e => e.src = c.images[e.dataset.img]);
$$('.divider').forEach(d => d.innerHTML = '<svg width="22" height="22" viewBox="-11 -11 22 22" fill="none" stroke="currentColor" stroke-width=".8">' + [0, 60, 120].map(a => `<ellipse rx="2.6" ry="9" transform="rotate(${a})"/>`).join('') + '</svg>');
const sections = ['home', 'story', 'event', 'location', 'rsvp'];
function setLang(l) {
  lang = l; T = TEXT[l]; const d = document.documentElement; d.lang = l; d.dir = T.dir; document.title = T.title;
  try { localStorage.setItem('lang-v2', l); } catch (e) {}
  $$('[data-t]').forEach(e => { const v = T[e.dataset.t]; e.innerHTML = v || ''; e.hidden = !v; });
  $$('[data-aria]').forEach(e => e.setAttribute('aria-label', T[e.dataset.aria]));
  $$('[data-img]').forEach(e => e.alt = T.alt);
  const links = sections.map((id, i) => `<a href="#${id}">${T.nav[i]}</a>`).join(''); $('.links').innerHTML = links; $('#menu nav').innerHTML = links;
  $('#lang').textContent = T.toggle; $('#lang').setAttribute('lang', l === 'ar' ? 'en' : 'ar');
  $('#menuBtn').setAttribute('aria-label', T.menuAria);
  $('#timeline').innerHTML = T.story.map(s => `<li class="rv in"><p class="eyebrow">${s.date}</p><h3>${s.title}</h3><p>${s.text}</p></li>`).join('');
  $('#gallery').innerHTML = c.images.gallery.map((s, i) => `<figure class="rv${galleryIn ? ' in' : ''}" style="transition-delay:${i * .15}s"><img src="${s}" alt="${T.alt} ${i + 1}" loading="lazy"></figure>`).join('');
  if (opened) $$('#gallery .rv').forEach(e => io.observe(e));
  if (typeof tickCd === 'function') tickCd(); const b = $('#send'); if (b && !b.disabled) b.textContent = attended ? T.sendMsg : T.confirm;
  if (typeof joyT !== 'undefined') { joyT.textContent = T.joyT; joyS.textContent = T.joyS; }
}
let opened = false, galleryIn = false, attended = false;
const bots = $$('.hero .bot'); let tick = false;
addEventListener('scroll', () => { if (tick || matchMedia('(prefers-reduced-motion:reduce)').matches) return; tick = true;
  requestAnimationFrame(() => { bots.forEach((b, i) => b.style.transform = `translateY(${Math.min(scrollY, 900) * (i % 2 ? -.04 : -.06)}px)`); tick = false; }); }, { passive: true });

/* nav */
const menu = $('#menu'), mb = $('#menuBtn'), setMenu = o => { menu.classList.toggle('show', o); mb.setAttribute('aria-expanded', o);  menu.style.zIndex = 50; };
mb.onclick = () => setMenu(!menu.classList.contains('show')); menu.onclick = e => e.target.tagName === 'A' && setMenu(false);
mb.style.position = 'relative'; mb.style.zIndex = 55; addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));

/* envelope → reveal */
const env = $('#envelope'), io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
$('#openBtn').onclick = () => { if (env.classList.contains('opening')) return; env.classList.add('opening');
  opened = true; setTimeout(() => $$('.rv:not(.in)').forEach(e => io.observe(e)), 1600); setTimeout(() => env.remove(), 3000); };
document.body.style.overflow = 'hidden'; $('#openBtn').addEventListener('click', () => setTimeout(() => document.body.style.overflow = '', 2000));

/* countdown */
const cd = $('.count'), pad = n => String(n).padStart(2, '0'), num = n => pad(n).replace(/\d/g, d => lang === 'ar' ? '٠١٢٣٤٥٦٧٨٩'[d] : d);
const tickCd = () => { const s = Math.max(0, Math.floor((new Date(c.weddingDateISO) - Date.now()) / 1000));
  cd.innerHTML = [['Days', s / 86400 | 0], ['Hours', s / 3600 % 24 | 0], ['Minutes', s / 60 % 60 | 0], ['Seconds', s % 60]].map(([l, v]) => `<div><b>${num(v)}</b><span>${T[l]}</span></div>`).join(''); };
tickCd(); setInterval(tickCd, 1000);


/* location: replace #mapBox content with Google Maps / Mapbox. If mapUrl is a Google "embed" URL an iframe is used. */
$('#mapBox').innerHTML = c.mapUrl.includes('embed') ? `<iframe title="Map" src="${c.mapUrl}" loading="lazy"></iframe>` :
  `<svg viewBox="0 0 400 260" role="img" aria-label="Map placeholder"><rect width="400" height="260" fill="#ECE7D6"/><path d="M0 170C90 150 150 190 240 120S340 70 400 90V0H0Z" fill="#C9D6C8"/><path d="M40 260C120 190 240 200 400 230M200 0V260" fill="none" stroke="#fff" stroke-width="5"/><path transform="translate(200 105)" d="M0 40C-22 12-18-22 0-22S22 12 0 40Z" fill="#2E4636"/><circle cx="200" cy="99" r="6" fill="#F6F1E6"/></svg>`;
$('#mapLink').href = c.mapUrl.includes('embed') ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(TEXT.ar.venue + ' ' + TEXT.ar.address) : c.mapUrl;

/* RSVP – saves each message to Google Sheets via Apps Script (config.sheetUrl) */
async function submitRsvp(data) {
  if (!c.sheetUrl) { console.error('sheetUrl is empty in weddingConfig'); throw new Error('not configured'); }
  /* no-cors + plain-text body = works with Google Apps Script without CORS problems */
  await fetch(c.sheetUrl, { method: 'POST', mode: 'no-cors', body: JSON.stringify(data) });
  return { ok: true }; }
const form = $('#rsvpForm'), yesBtn = $('#yesBtn'), joy = $('#joy'), joyT = $('#joyT'), joyS = $('#joyS'), noBtn = $('#noBtn'), dodge = $('#dodge'); let ox = 0, oy = 0, dn = 0;
/* "Not attending" runs away every time it is clicked */
noBtn.onclick = () => {
  const f = form.getBoundingClientRect(), r = noBtn.getBoundingClientRect(), m = 8;
  const L0 = Math.max(m, f.left - 30), L1 = Math.max(L0, Math.min(innerWidth - r.width - m, f.right + 30 - r.width));
  const T0 = Math.max(70, f.top - 50), T1 = Math.max(T0, Math.min(innerHeight - r.height - 70, f.bottom - r.height));
  let nl, nt, k = 0; do { nl = L0 + Math.random() * (L1 - L0); nt = T0 + Math.random() * (T1 - T0); } while (Math.hypot(nl - r.left, nt - r.top) < 70 && ++k < 10);
  ox += nl - r.left; oy += nt - r.top;
  noBtn.style.transform = `translate(${ox}px,${oy}px) rotate(${(Math.random() - .5) * 18}deg)`;
  dodge.textContent = T.dodge[dn++ % T.dodge.length]; dodge.hidden = false; };
addEventListener('resize', () => { ox = oy = 0; noBtn.style.transform = ''; });
form.addEventListener('submit', async e => { e.preventDefault(); const d = { name: form.name.value.trim(), message: form.message.value.trim(), attending: 'yes' }, err = $('#err');
  if (!d.name) { err.textContent = T.err; err.hidden = false; form.name.focus(); return; }
  if (!d.message) { err.textContent = T.errMsg; err.hidden = false; form.message.focus(); return; } err.hidden = true;
  const b = $('#send'); b.disabled = true; b.textContent = T.sending;
  try { await submitRsvp(d); form.hidden = true; $('#thanksName').textContent = T.thanks(d.name.split(' ')[0]); $('#thanksMsg').textContent = T.thanksYes; $('#thanks').hidden = false; }
  catch { err.textContent = T.errSend; err.hidden = false; b.disabled = false; b.textContent = attended ? T.sendMsg : T.confirm; } });
$('#lang').onclick = () => setLang(lang === 'ar' ? 'en' : 'ar');

/* "Attending" → celebration: confetti + petals, thank-you note, button becomes "Send message" */
const fx = $('#fx'), ctx = fx.getContext('2d'), still = matchMedia('(prefers-reduced-motion:reduce)').matches;
let parts = [], raining = 0, running = false, W = 0, H = 0;
const sizeFx = () => { const r = devicePixelRatio || 1; W = innerWidth; H = innerHeight; fx.width = W * r; fx.height = H * r; ctx.setTransform(r, 0, 0, r, 0, 0); };
sizeFx(); addEventListener('resize', sizeFx);
const COLORS = ['#B39B6A', '#D8C48F', '#2E4636', '#8FA88F', '#F6F1E6', '#FFFFFF', '#C9D6C8'], rnd = (a, b) => a + Math.random() * (b - a);
function spawn(x, y, vx, vy, g) { parts.push({ x, y, vx, vy, g, w: rnd(6, 12), h: rnd(3, 7), rot: rnd(0, 6.28), vr: rnd(-.25, .25), sh: ['r', 'c', 'p', 'p'][Math.random() * 4 | 0], col: COLORS[Math.random() * COLORS.length | 0], life: 0, max: rnd(160, 260), sw: rnd(0, 6.28) }); }
function frame() {
  ctx.clearRect(0, 0, W, H);
  if (raining > 0) { raining--; if (raining % 4 === 0) for (let i = 0; i < 3; i++) spawn(rnd(0, W), -12, rnd(-.6, .6), rnd(1, 2.2), .012); }
  parts = parts.filter(p => p.life < p.max && p.y < H + 30);
  for (const p of parts) {
    p.life++; p.vx *= p.g > .1 ? .985 : .995; p.vy = Math.min(p.vy + p.g, p.g > .1 ? 14 : 2.6); p.sw += .05;
    p.x += p.vx + (p.g < .1 ? Math.sin(p.sw) * .7 : 0); p.y += p.vy; p.rot += p.vr;
    ctx.save(); ctx.globalAlpha = Math.min(1, (p.max - p.life) / 40); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.col;
    if (p.sh === 'r') ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    else if (p.sh === 'c') { ctx.beginPath(); ctx.arc(0, 0, p.h / 1.6, 0, 6.28); ctx.fill(); }
    else { ctx.beginPath(); ctx.ellipse(0, 0, p.w / 2, p.h / 1.4, 0, 0, 6.28); ctx.fill(); }
    ctx.restore(); }
  if (parts.length || raining > 0) requestAnimationFrame(frame); else { running = false; ctx.clearRect(0, 0, W, H); } }
function celebrate() {
  const r = yesBtn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  for (let i = 0; i < 120; i++) { const a = -Math.PI / 2 + rnd(-1, 1) * 1.1, s = rnd(5, 15); spawn(x, y, Math.cos(a) * s, Math.sin(a) * s, .24); }
  raining = 220; if (!running) { running = true; requestAnimationFrame(frame); } }
yesBtn.onclick = () => {
  const first = !attended; attended = true; yesBtn.classList.add('on'); yesBtn.setAttribute('aria-pressed', 'true');
  $('#rsvp').classList.add('party'); joyT.textContent = T.joyT; joyS.textContent = T.joyS; joy.hidden = false;
  const b = $('#send'); if (!b.disabled) b.textContent = T.sendMsg;
  if (first) joy.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  if (!still) celebrate(); };
setLang(lang);
