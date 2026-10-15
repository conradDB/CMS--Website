/* Motion is progressive enhancement. Content, controls and reduced-motion views stay usable. */
(() => {
  const root = document.documentElement;
  const hero = document.querySelector('.hero');
  const photo = document.querySelector('.hero-photo');
  const journey = document.querySelector('#journey');
  const panel = document.querySelector('#journey-panel');
  const motionButton = document.querySelector('.motion-control');
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 901px)');
  const canMove = () => root.dataset.motion !== 'reduce' && !prefersReduced.matches;
  let chapter = 0;
  let scrollChapter = -1;
  let manualScrollY = null;
  let frame = null;
  let heroVisible = true;
  let wilsonVisible = false;
  let heroStage = 0;
  let heroManual = false;
  const chapterLabels = ['THE FIRST CONNECTION', 'FROM INTEREST TO IGNITION', 'THE RELATIONSHIP CONTINUES', 'THE WHOLE PICTURE'];
  const satellites = [
    ['Website enquiry', 'One customer record', 'Your team, connected'],
    ['Live stock match', 'Trade-in & quote', 'Ready for the next step'],
    ['Service reminder', 'A personal follow-up', 'Connected for the long run'],
    ['Sales activity', 'Your dealer network', 'Insight into every move']
  ];
  function replay(el, name) {
    if (!canMove() || !el) return;
    el.classList.remove(name);
    void el.offsetWidth;
    el.classList.add(name);
  }
  function syncChapter(index) {
    chapter = index;
    panel.dataset.scene = String(index);
    panel.querySelectorAll('.satellite-label').forEach((el, i) => el.textContent = satellites[index][i]);
    panel.querySelector('.scene-watermark').textContent = String(index + 1).padStart(2, '0');
    document.querySelector('#chapter-label').textContent = `CHAPTER ${String(index + 1).padStart(2,'0')} / ${chapterLabels[index]}`;
    if (!desktop.matches || !canMove()) journey.style.setProperty('--journey-progress', String(index / 3));
    replay(panel, 'scene-transition');
  }
  document.addEventListener('cms:journey', event => syncChapter(event.detail.index));
  document.querySelectorAll('.journey-step').forEach(button => {
    button.addEventListener('click', () => { manualScrollY = scrollY; });
    button.addEventListener('keydown', event => { if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home','End'].includes(event.key)) manualScrollY = scrollY; });
  });
  syncChapter(0);

  // Nine selectable products form a single, connected system.
  const svg = document.querySelector('.ecosystem-links');
  const tabs = [...document.querySelectorAll('.product-tab')];
  tabs.forEach((tab, index) => {
    const angle = (-90 + index * 40) * Math.PI / 180;
    const x = 300 + 203 * Math.cos(angle);
    const y = 300 + 203 * Math.sin(angle);
    tab.style.setProperty('--node-x', `${x / 6}%`);
    tab.style.setProperty('--node-y', `${y / 6}%`);
    const line = document.createElementNS('http://www.w3.org/2000/svg','path');
    line.setAttribute('d', `M300 300L${x} ${y}`);
    line.setAttribute('class', `ecosystem-spoke${index === 0 ? ' active' : ''}`);
    line.dataset.connection = String(index);
    svg.prepend(line);
  });
  // Give touch targets more vertical separation on narrow displays.
  function layoutConnections() {
    const mobilePoints = [[50,6],[84,24],[84,48],[84,73],[68,94],[32,94],[16,73],[16,48],[16,24]];
    tabs.forEach((tab,index) => {
      const angle = (-90 + index * 40) * Math.PI / 180;
      const [x,y] = innerWidth <= 760 ? mobilePoints[index].map(v=>v*6) : [300 + 203*Math.cos(angle),300 + 203*Math.sin(angle)];
      tab.style.setProperty('--node-x',`${x/6}%`);
      tab.style.setProperty('--node-y',`${y/6}%`);
      svg.querySelector(`[data-connection="${index}"]`).setAttribute('d',`M300 300L${x} ${y}`);
    });
  }
  layoutConnections();
  window.addEventListener('resize',layoutConnections);
  document.addEventListener('cms:product', event => {
    svg.querySelectorAll('.ecosystem-spoke').forEach(line => line.classList.toggle('active', Number(line.dataset.connection) === event.detail.index));
    replay(document.querySelector('#product-panel'), 'is-switching');
  });

  // Keep repeated marquee content out of the accessibility tree.
  const partners = document.querySelector('.partner-names');
  const duplicate = document.createElement('span');
  duplicate.className = 'partner-duplicate';
  duplicate.setAttribute('aria-hidden','true');
  duplicate.innerHTML = partners.innerHTML;
  partners.append(duplicate);

  function refreshMotionUI() {
    const moving = canMove();
    motionButton.setAttribute('aria-label', moving ? 'Pause animations' : 'Animations paused');
    motionButton.setAttribute('aria-pressed', String(!moving));
    motionButton.querySelector('.motion-control-label').textContent = moving ? 'Motion on' : 'Motion off';
    motionButton.title = moving ? 'Pause animations' : prefersReduced.matches ? 'Your device requests reduced motion' : 'Resume animations';
    document.querySelectorAll('svg').forEach(el => {
      if (typeof el.pauseAnimations === 'function') {
        if (moving) el.unpauseAnimations(); else el.pauseAnimations();
      }
    });
    document.querySelector('.journey-scroll-hint').innerHTML = desktop.matches && moving ? 'SCROLL TO ADVANCE <span aria-hidden="true">↓</span>' : 'SELECT A CHAPTER TO EXPLORE <span aria-hidden="true">↗</span>';
    if (!moving) {
      photo.style.translate = '';
      photo.style.scale = '';
      document.querySelector('.hero-instrument').style.translate = '';
    }
    scheduleScroll();
  }
  motionButton.addEventListener('click', () => {
    if (prefersReduced.matches) return;
    savePreference('cms-motion', canMove() ? 'reduce' : 'full');
    refreshMotion();
  });
  document.addEventListener('cms:motion', refreshMotionUI);
  prefersReduced.addEventListener('change', refreshMotionUI);
  desktop.addEventListener('change', refreshMotionUI);

  function updateScroll() {
    frame = null;
    if (!canMove()) return;
    if (heroVisible) {
      const progress = Math.min(1, Math.max(0, scrollY / hero.offsetHeight));
      photo.style.translate = `0 ${progress * 65}px`;
      photo.style.scale = String(1 + progress * .055);
      document.querySelector('.hero-instrument').style.translate = `0 ${progress * -35}px`;
    }
    if (desktop.matches) {
      const rect = journey.getBoundingClientRect();
      const available = journey.offsetHeight - document.querySelector('.journey-sticky').offsetHeight;
      const progress = Math.min(1, Math.max(0, (88 - rect.top) / Math.max(1, available)));
      journey.style.setProperty('--journey-progress', String(progress));
      const next = Math.min(3, Math.floor(progress * 4));
      if (manualScrollY !== null && Math.abs(scrollY - manualScrollY) > 100) manualScrollY = null;
      if (manualScrollY === null && next !== scrollChapter && rect.top < innerHeight && rect.bottom > 88) {
        scrollChapter = next;
        if (chapter !== next) selectJourney(next);
      }
    }
    const contact = document.querySelector('.contact-section');
    const rect = contact.getBoundingClientRect();
    if (rect.top < innerHeight && rect.bottom > 0) contact.style.setProperty('--contact-scale', String(.7 + Math.max(0,1 - rect.top / innerHeight) * .3));
  }
  function scheduleScroll() { if (!frame) frame = requestAnimationFrame(updateScroll); }
  window.addEventListener('scroll', scheduleScroll, {passive:true});
  window.addEventListener('resize', scheduleScroll);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target.id === 'wilson') wilsonVisible = entry.isIntersecting;
        if (entry.isIntersecting) entry.target.classList.add('is-inview');
      });
    },{threshold:.1});
    [hero, document.querySelector('#wilson'), ...document.querySelectorAll('.ecosystem-section,.about-section,.contact-section')].forEach(el => observer.observe(el));
  }
  document.querySelectorAll('[data-hero-stage]').forEach(button => {
    button.addEventListener('click', event => {
      heroStage = Number(button.dataset.heroStage);
      if (event.isTrusted) {
        heroManual = true;
        document.querySelector('.hero-stages').classList.add('manual');
      }
      replay(document.querySelector('.hero-event'), 'is-changing');
    });
  });
  setInterval(() => {
    if (!canMove() || document.hidden || !heroVisible || heroManual) return;
    heroStage = (heroStage + 1) % 3;
    document.querySelector(`[data-hero-stage="${heroStage}"]`).click();
  }, 5000);

  // Wilson reacts to the pointer and introduces his role using illustrative dialogue.
  const wilson = document.querySelector('.wilson-visual');
  wilson.addEventListener('pointermove', event => {
    if (!canMove() || event.pointerType === 'touch') return;
    const rect = wilson.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    document.querySelector('.wilson-brand-card').style.translate = `${x * 8}px ${y * 6}px`;
  });
  wilson.addEventListener('pointerleave', () => document.querySelector('.wilson-brand-card').style.translate = '');
  const dialogue = [
    ['“A little help with my next step?”','Let’s work through it together.'],
    ['“I’m new to CMS. Where do I start?”','A friendly guide, right beside you.'],
    ['“I’m stuck. Can you help?”','Ask Wilson inside your CMS system.']
  ];
  let dialogueIndex = 0;
  setInterval(() => {
    if (!canMove() || document.hidden || !wilsonVisible) return;
    dialogueIndex = (dialogueIndex + 1) % dialogue.length;
    document.querySelector('#wilson-typed-question').textContent = dialogue[dialogueIndex][0];
    document.querySelector('#wilson-typed-answer').textContent = dialogue[dialogueIndex][1];
    replay(document.querySelector('.wilson-question'),'is-changing');
    replay(document.querySelector('.wilson-answer'),'is-changing');
  },6500);
  refreshMotionUI();
})();
