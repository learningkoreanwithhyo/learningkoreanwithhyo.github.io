/* Two still-image motion openings. No paid API or external dependency. */
(() => {
  'use strict';
  const query = new URLSearchParams(location.search);
  const mode = query.get('opening') === 'cinematic' || (query.get('opening') === 'collection' && query.get('style') === 'photoreal') ? 'cinematic' : 'animated';
  const collectionScene = query.get('opening') === 'collection' && window.HyoCollection
    ? window.HyoCollection.select({date:query.get('introDate'),hour:query.get('introHour'),scene:query.get('scene'),style:query.get('style')}) : null;
  const oldSplash = document.getElementById('splash');
  const route = location.hash.replace(/^#\/?/, '');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (query.get('opening') === 'classic') {
    const classic = document.createElement('script');
    classic.src = 'opening.js';
    document.head.append(classic);
    return;
  }
  oldSplash?.remove();
  if ((route && route !== 'home') || reduced.matches || query.get('opening') === 'off') return;

  const override = query.get('introHour');
  const hour = override !== null && /^(?:[0-9]|1[0-9]|2[0-3])$/.test(override)
    ? Number(override) : new Date().getHours();
  const periods = [
    [5, 'AFTER HOURS', '늦은 시간에도, 반가워요.', 'A little Korean, even after hours.'],
    [8, 'RISE & SHINE', '좋은 아침, 함께 시작해요.', 'A new day. A new word.'],
    [12, 'COFFEE & KOREAN', '커피 한 잔, 한국어 한마디.', 'Your daily dose of Korean.'],
    [14, 'LUNCH BREAK', '잠깐의 여유, 우리 만나요.', 'Make a little room for Korean.'],
    [18, 'AFTERNOON RESET', '잠깐 쉬고, 이야기해요.', 'A fresh start for your afternoon.'],
    [21, 'WELCOME HOME', '다녀왔어요. 어서 와요!', 'Leave the busy day at the door.'],
    [24, 'ONE LAST CHAPTER', '하루 끝, 편하게 들어와요.', 'A cozy little ending to your day.']
  ];
  const period = collectionScene
    ? [24, collectionScene.label, collectionScene.greeting, collectionScene.english]
    : periods.find(row => hour < row[0]);
  const overlay = document.createElement('section');
  overlay.className = `hyo-intro hyo-intro--${mode}`;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'hyo 홈페이지 오프닝');
  overlay.innerHTML = `
    <div class="hi-ambient" aria-hidden="true"></div>
    <div class="hi-frame"><img class="hi-art" alt="높은 흰색 티셔츠와 금색 열쇠 목걸이를 착용한 hyo. 춘식이 인형이 있는 서울의 아늑한 작업실." fetchpriority="high" decoding="async"></div>
    <div class="hi-shade" aria-hidden="true"></div>
    <div class="hi-glow" aria-hidden="true"></div>
    <div class="hi-streak" aria-hidden="true"></div>
    <div class="hi-grain" aria-hidden="true"></div>
    <header class="hi-top"><span class="hi-logo">hyo<span>한국어로 만나요</span></span><button class="hi-skip" type="button">건너뛰기 <span aria-hidden="true">↗</span></button></header>
    <div class="hi-copy"><p class="hi-eyebrow"><i></i> ${period[1]}</p><h1>안녕,<br><em>I'm hyo.</em></h1><p class="hi-greeting">${period[2]}</p><p class="hi-english">${period[3]}</p></div>
    <footer class="hi-bottom"><span>KOREAN, MADE PERSONAL</span><span class="hi-entering">당신의 한국어 이야기가 시작됩니다 <b aria-hidden="true">↗</b></span></footer>
    <div class="hi-progress" aria-hidden="true"></div><div class="hi-exit" aria-hidden="true"></div>`;
  const art = overlay.querySelector('.hi-art');
  const imagePath = collectionScene ? collectionScene.image : `assets/openings/hyo-${mode}.jpg`;
  if (collectionScene) {
    art.alt = `${collectionScene.title}: ${collectionScene.wardrobe}. ${collectionScene.setting}.`;
    overlay.dataset.scene = collectionScene.id;
  }
  overlay.style.setProperty('--scene', `url("${imagePath}")`);
  const skip = overlay.querySelector('.hi-skip');
  const focusedBefore = document.activeElement;
  const overflowBefore = document.body.style.overflow;
  const siblings = [...document.body.children].filter(el => !['SCRIPT', 'STYLE'].includes(el.tagName));
  const inertBefore = siblings.map(el => [el, el.inert]);
  let closed = false, timer, safety;

  function finish(immediate = false) {
    if (closed) return;
    closed = true;
    clearTimeout(timer); clearTimeout(safety);
    overlay.classList.add('hi-leaving');
    function cleanup() {
      overlay.remove();
      document.body.style.overflow = overflowBefore;
      inertBefore.forEach(([el, value]) => { el.inert = value; });
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('hashchange', routeChange);
      reduced.removeEventListener('change', onReduced);
      document.removeEventListener('visibilitychange', onVisibility);
      if (focusedBefore && focusedBefore !== document.body && focusedBefore.isConnected) focusedBefore.focus({preventScroll:true});
      else document.querySelector('.nav button')?.focus({preventScroll:true});
    }
    if (immediate) cleanup(); else setTimeout(cleanup, 360);
  }
  function onKey(event) {
    if (event.key === 'Escape') finish(true);
    if (event.key === 'Tab') { event.preventDefault(); skip.focus(); }
  }
  function routeChange() { finish(true); }
  function onReduced(event) { if (event.matches) finish(true); }
  function onVisibility() { if (document.hidden) finish(true); }
  skip.addEventListener('click', () => finish(true));
  document.addEventListener('keydown', onKey);
  window.addEventListener('hashchange', routeChange);
  reduced.addEventListener('change', onReduced);
  document.addEventListener('visibilitychange', onVisibility);
  document.body.append(overlay);
  inertBefore.forEach(([el]) => { el.inert = true; });
  document.body.style.overflow = 'hidden';
  skip.focus({preventScroll:true});
  // Slow or missing assets must never block access to the website.
  safety = setTimeout(() => finish(true), 6000);
  art.onerror = () => finish(true);
  art.onload = () => {
    if (closed) return;
    clearTimeout(safety);
    overlay.classList.add('hi-playing');
    timer = setTimeout(() => finish(), 3950);
  };
  art.src = imagePath;
})();
