/* ============================================================
   ADRI & LOKA — Barbershop
   ============================================================ */

/* ============================================================
   CONFIG — edit everything brand-related here
   ============================================================ */
const CONFIG = {
  // Web3Forms access key (https://web3forms.io) — replace before going live
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',

  // WhatsApp number, digits only with country code (e.g. 15550100100)
  whatsappNumber: '15550100100',

  // Social links — replace '#' with real URLs
  instagramUrl: '#',
  facebookUrl: '#',

  // Google Maps — replace the query with the real shop address
  mapsEmbedUrl: 'https://www.google.com/maps?q=128%20Meridian%20Ave%2C%20City%20Center&output=embed',
  mapsLinkUrl: 'https://www.google.com/maps/search/?api=1&query=128+Meridian+Ave+City+Center',

  // Barber options for the booking form — add real names later
  barbers: ['No preference'],

  // Opening hours shown in Location + Footer
  hours: [
    ['Mon – Fri', '09:00 — 21:00'],
    ['Saturday', '09:00 — 19:00'],
    ['Sunday', 'Closed']
  ]
};

/* ============================================================
   MENU DATA — the single source of truth for the service menu,
   the booking dropdown and the footer service list.
   Replace names / descriptions / durations / prices with the real menu.
   ============================================================ */
const MENU_DATA = [
  {
    id: 'cuts',
    num: '01',
    title: 'Cuts',
    note: 'Structure first. Style follows.',
    services: [
      { name: 'Classic Cut', desc: 'Scissor work with a timeless silhouette.', duration: '45 min', price: '250' },
      { name: 'Fade', desc: 'Seamless blend, razor-sharp finish.', duration: '50 min', price: '300' },
      { name: 'Skin Fade', desc: 'Zero gradient to skin. Bold and clean.', duration: '55 min', price: '350' },
      { name: 'Long Scissor Work', desc: 'Growth, layers and movement by blade alone.', duration: '60 min', price: '380' }
    ]
  },
  {
    id: 'beard',
    num: '02',
    title: 'Beard',
    note: 'Lines drawn with intent.',
    services: [
      { name: 'Beard Trim', desc: 'Shape, symmetry and a clean outline.', duration: '30 min', price: '180' },
      { name: 'Beard Sculpt & Line-Up', desc: 'Full reshape with detailed edging.', duration: '35 min', price: '220' },
      { name: 'Hot Towel Shave', desc: 'Steam, warm lather and a straight razor.', duration: '45 min', price: '300' }
    ]
  },
  {
    id: 'combinations',
    num: '03',
    title: 'Combinations',
    note: 'The complete works.',
    services: [
      { name: 'Cut + Beard', desc: 'The essential pairing, handled together.', duration: '75 min', price: '400' },
      { name: 'Cut + Hot Towel Shave', desc: 'Full reset from hairline to jawline.', duration: '90 min', price: '480' },
      { name: 'The Full Ritual', desc: 'Cut, beard, hot towel and styling finish.', duration: '105 min', price: '550' }
    ]
  },
  {
    id: 'shaves',
    num: '04',
    title: 'Shaves',
    note: 'Cold steel, warm towels.',
    services: [
      { name: 'Classic Razor Shave', desc: 'Traditional wet shave with hot lather.', duration: '40 min', price: '260' },
      { name: 'Head Shave', desc: 'Straight-razor head shave, baby smooth.', duration: '35 min', price: '220' }
    ]
  },
  {
    id: 'styling',
    num: '05',
    title: 'Styling',
    note: 'Finished, not fussy.',
    services: [
      { name: 'Wash & Style', desc: 'Cleanse, condition and a taught finish.', duration: '25 min', price: '120' },
      { name: 'Occasion Styling', desc: 'Weddings, shoots and stage-ready work.', duration: '40 min', price: '190' }
    ]
  }
];

/* ============================================================
   Helpers
   ============================================================ */
(function () {
  'use strict';

  const qs = (sel, ctx) => (ctx || document).querySelector(sel);
  const qsa = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const pad2 = n => String(n).padStart(2, '0');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  let refreshTimer;
  const scheduleRefresh = () => {
    if (!hasGsap) return;
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
  };

  const lockScroll = () => document.documentElement.classList.add('lock');
  const unlockScroll = () => document.documentElement.classList.remove('lock');

  /* ============================================================
     Content injection (menu, selects, hours, socials, maps)
     ============================================================ */
  function renderMenu() {
    const track = qs('#menuTrack');
    if (!track) return;

    track.innerHTML = MENU_DATA.map(cat => `
      <article class="menu-panel" data-num="${cat.num}" data-cat="${cat.id}">
        <header class="panel__head">
          <span class="panel__num">${cat.num}</span>
          <h3 class="panel__title">${cat.title}</h3>
          <p class="panel__note">${cat.note}</p>
        </header>
        <ul class="panel__list">
          ${cat.services.map(s => `
            <li class="service">
              <div class="service__top">
                <h4 class="service__name">${s.name}</h4>
                <span class="service__leader" aria-hidden="true"></span>
                <span class="service__price">${s.price}</span>
              </div>
              <p class="service__desc">${s.desc}</p>
              <div class="service__meta">
                <span class="service__dur">${s.duration}</span>
                <a class="link-book" href="#booking" data-book-service="${s.name}">Book this service <span class="arr">&rarr;</span></a>
              </div>
            </li>`).join('')}
        </ul>
      </article>`).join('');

    const total = qs('#menuTotal');
    if (total) total.textContent = pad2(MENU_DATA.length);

    const footerList = qs('#footerServices');
    if (footerList) {
      footerList.innerHTML = MENU_DATA.map(cat =>
        `<li><a href="#menu">${cat.title}</a></li>`).join('');
    }
  }

  function populateSelects() {
    const serviceSelect = qs('#serviceSelect');
    if (serviceSelect) {
      serviceSelect.innerHTML = '<option value="" disabled selected>Select a service</option>' +
        MENU_DATA.map(cat => `
          <optgroup label="${cat.title.toUpperCase()}">
            ${cat.services.map(s => `<option value="${s.name}">${s.name} — ${s.price}</option>`).join('')}
          </optgroup>`).join('');
    }

    const barberSelect = qs('#barberSelect');
    if (barberSelect) {
      barberSelect.innerHTML = CONFIG.barbers
        .map(b => `<option value="${b}">${b}</option>`).join('');
    }
  }

  function renderHours() {
    const html = CONFIG.hours.map(([day, time]) =>
      `<li><span>${day}</span><b>${time}</b></li>`).join('');
    ['hoursList', 'hoursListFooter'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    });
  }

  function applyConfigLinks() {
    const map = {
      instagram: CONFIG.instagramUrl,
      facebook: CONFIG.facebookUrl,
      whatsapp: `https://wa.me/${String(CONFIG.whatsappNumber).replace(/\D/g, '')}`
    };
    qsa('[data-social]').forEach(a => {
      const key = a.dataset.social;
      if (key === 'maps') a.href = CONFIG.mapsLinkUrl;
      else if (map[key]) a.href = map[key];
    });

    const frame = qs('#mapFrame');
    if (frame) frame.src = CONFIG.mapsEmbedUrl;

    const year = qs('#yearNow');
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ============================================================
     Asset slots — real files drop straight into assets/
     ============================================================ */
  function initMediaSlots() {
    qsa('.media-frame[data-media]').forEach(frame => {
      const src = 'assets/' + frame.dataset.media;
      const img = new Image();
      img.alt = frame.dataset.alt || '';
      img.decoding = 'async';
      img.loading = 'lazy';
      img.addEventListener('load', () => {
        frame.classList.add('has-img');
        frame.prepend(img);
        if (hasGsap && !reduced && !frame.classList.contains('lb')) setupParallax(frame);
        scheduleRefresh();
      }, { once: true });
      img.src = src;
    });
  }

  function initHeroVideo() {
    const host = qs('#heroMedia');
    if (!host) return;
    /* Real asset: assets/videos/hero.mp4 */
    const video = document.createElement('video');
    video.className = 'hero__video';
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('preload', 'auto');
    video.setAttribute('aria-hidden', 'true');
    video.src = 'assets/videos/hero.mp4';

    const tag = '[hero video]';
    const srcNow = () => video.currentSrc || video.src || '(no source)';

    video.addEventListener('loadedmetadata', () => {
      console.info(`${tag} metadata OK — ${video.videoWidth}x${video.videoHeight}, ${isFinite(video.duration) ? video.duration.toFixed(1) + 's' : 'unknown duration'}`);
    });
    video.addEventListener('loadeddata', () => {
      console.info(`${tag} first frame data loaded`);
    });
    video.addEventListener('playing', () => {
      console.info(`${tag} playing (${srcNow()})`);
    });

    video.addEventListener('canplay', () => {
      host.classList.add('has-video');
      /* Without GSAP (or with reduced motion) the intro veil never animates
         away — hide it so the video/fallback stays visible. */
      if (!hasGsap || reduced) {
        const veil = qs('#heroVeil');
        if (veil) veil.style.opacity = '0';
      }
      const p = video.play();
      if (p && p.catch) {
        p.catch(err => {
          console.warn(`${tag} autoplay did not start: ${err && err.name ? err.name + ' — ' + err.message : err}. Playback will retry when the hero re-enters the viewport.`);
        });
      }
      scheduleRefresh();
    }, { once: true });

    /* Diagnostic only — never remove the video element silently.
       If the file exists but will not decode, it almost certainly needs
       browser-compatible H.264 (video) + AAC (audio) encoding. */
    video.addEventListener('error', () => {
      const mediaErr = video.error;
      const codeNames = { 1: 'MEDIA_ERR_ABORTED', 2: 'MEDIA_ERR_NETWORK', 3: 'MEDIA_ERR_DECODE', 4: 'MEDIA_ERR_SRC_NOT_SUPPORTED' };
      const code = mediaErr ? mediaErr.code : 'unknown';
      const name = codeNames[code] || 'UNKNOWN';
      console.error(
        `${tag} FAILED — code ${code} (${name})` +
        (mediaErr && mediaErr.message ? ` — "${mediaErr.message}"` : '') +
        ` — src: ${srcNow()}` +
        (code === 3 || code === 4
          ? '. The file exists but this browser cannot decode it. Re-encode the MP4 as H.264 video + AAC audio (e.g. 1920x1080, yuv420p) — the code is fine, the file encoding is not.'
          : '. Check that assets/videos/hero.mp4 exists and is served correctly.')
      );
    });

    host.prepend(video);
    console.assert(host.contains(video), `${tag} video element was not inserted into #heroMedia`);
    console.info(`${tag} element inserted into #heroMedia — src: ${video.src}`);

    if (hasGsap && !reduced) {
      ScrollTrigger.create({
        trigger: '#home',
        start: 'top bottom',
        end: 'bottom top',
        onToggle: self => {
          if (!host.contains(video)) return;
          if (self.isActive) { const p = video.play(); if (p && p.catch) p.catch(() => {}); }
          else video.pause();
        }
      });
    }
  }

  /* ============================================================
     Header behaviour
     ============================================================ */
  function initHeaderScroll() {
    const header = qs('#header');
    if (!header) return;
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 40);
      if (y > 160 && y > lastY + 2 && !document.documentElement.classList.contains('lock')) {
        header.classList.add('is-hidden');
      } else if (y < lastY - 2 || y <= 160) {
        header.classList.remove('is-hidden');
      }
      lastY = y;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  function initNavSpyFallback() {
    if (hasGsap) return;
    const sections = qsa('[data-section]');
    if (!('IntersectionObserver' in window) || !sections.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const sel = en.target.dataset.section;
        qsa('[data-nav-link]').forEach(a =>
          a.classList.toggle('is-active', a.dataset.navLink === sel));
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => io.observe(s));
  }

  /* ============================================================
     Mobile fullscreen menu
     ============================================================ */
  function initMobileMenu() {
    const burger = qs('#burger');
    const menu = qs('#mobileMenu');
    if (!burger || !menu) return;

    qsa('.mmenu__list li', menu).forEach((li, i) => li.style.setProperty('--i', i));

    const setState = open => {
      burger.classList.toggle('is-open', open);
      menu.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('lock', open);
    };

    burger.addEventListener('click', () =>
      setState(!menu.classList.contains('is-open')));

    qsa('a', menu).forEach(a => a.addEventListener('click', () => setState(false)));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setState(false);
    });
  }

  /* ============================================================
     Smooth anchors + Menu -> Booking connection
     ============================================================ */
  function scrollToTarget(sel) {
    const target = qs(sel);
    if (!target) return;
    const doScroll = () => target.scrollIntoView({
      behavior: (reduced || !hasGsap) ? 'auto' : 'smooth',
      block: 'start'
    });
    if (document.body.classList.contains('lock')) setTimeout(doScroll, 420);
    else doScroll();
  }

  function initAnchors() {
    document.addEventListener('click', e => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href.length < 2) return;
      const target = qs(href);
      if (!target) return;
      e.preventDefault();
      scrollToTarget(href);
    });
  }

  function initBookLinks() {
    document.addEventListener('click', e => {
      const link = e.target.closest('[data-book-service]');
      if (!link) return;
      const name = link.dataset.bookService;
      const select = qs('#serviceSelect');
      if (select && name) {
        const match = qsa('option', select).find(o => o.value.toLowerCase() === name.toLowerCase());
        if (match) {
          select.value = match.value;
          const field = select.closest('.field');
          if (field) {
            field.classList.add('is-flash');
            setTimeout(() => field.classList.remove('is-flash'), 1800);
          }
        }
      }
    });
  }

  /* ============================================================
     Booking form — Web3Forms + WhatsApp
     ============================================================ */
  function buildWhatsAppMessage(d) {
    const lines = [
      'Hello, I would like to book an appointment.',
      '',
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Service: ${d.service}`,
      `Barber: ${d.barber || 'No preference'}`,
      `Date: ${d.date}`,
      `Time: ${d.time}`
    ];
    if (d.notes) lines.push(`Notes: ${d.notes}`);
    return lines.join('\n');
  }

  function openWhatsApp(d) {
    const num = String(CONFIG.whatsappNumber).replace(/\D/g, '');
    const url = `https://wa.me/${num}?text=${encodeURIComponent(buildWhatsAppMessage(d))}`;
    const win = window.open(url, '_blank');
    if (win) {
      win.opener = null;
    } else {
      const waLine = qs('.success__wa');
      if (waLine) {
        waLine.innerHTML = '';
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = 'Tap here to open WhatsApp \u2197';
        a.style.textDecoration = 'underline';
        waLine.appendChild(a);
      }
    }
  }

  function sendToWeb3Forms(d) {
    if (!CONFIG.web3formsKey || CONFIG.web3formsKey === 'YOUR_WEB3FORMS_ACCESS_KEY') return;
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: CONFIG.web3formsKey,
        subject: `Appointment request — ${d.service} — ${d.name}`,
        from_name: 'ADRI & LOKA Website',
        name: d.name,
        phone: d.phone,
        service: d.service,
        barber: d.barber || 'No preference',
        date: d.date,
        time: d.time,
        notes: d.notes || ''
      })
    }).catch(() => {});
  }

  function showSuccess(d, gsapReady) {
    const overlay = qs('#successOverlay');
    if (!overlay) return;
    const summary = qs('#successSummary');
    if (summary) summary.textContent = `${d.service} — ${d.date} at ${d.time}`;
    overlay.hidden = false;
    lockScroll();

    if (!gsapReady || reduced) return;
    gsap.fromTo('.success__card', { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
    gsap.fromTo('.success__circle', { strokeDashoffset: 176 }, { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut', delay: 0.15 });
    gsap.fromTo('.success__check', { strokeDashoffset: 40 }, { strokeDashoffset: 0, duration: 0.55, ease: 'power2.out', delay: 0.75 });
  }

  function hideSuccess() {
    const overlay = qs('#successOverlay');
    if (!overlay) return;
    overlay.hidden = true;
    unlockScroll();
    const submit = qs('#bookingSubmit');
    if (submit) submit.focus();
  }

  function initBookingForm(gsapReady) {
    const form = qs('#bookingForm');
    if (!form) return;

    const dateInput = qs('#dateInput');
    if (dateInput) dateInput.min = new Date().toLocaleDateString('en-CA');

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const data = Object.fromEntries(new FormData(form).entries());
      const submitBtn = qs('#bookingSubmit');
      if (submitBtn) submitBtn.classList.add('is-sent');

      sendToWeb3Forms(data);
      openWhatsApp(data);
      showSuccess(data, gsapReady);

      form.reset();
      setTimeout(() => { if (submitBtn) submitBtn.classList.remove('is-sent'); }, 1200);
    });

    const closeBtn = qs('#successClose');
    if (closeBtn) closeBtn.addEventListener('click', hideSuccess);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlayVisible()) hideSuccess();
    });
    function overlayVisible() {
      const ov = qs('#successOverlay');
      return ov && !ov.hidden;
    }
  }

  /* ============================================================
     Lightbox
     ============================================================ */
  function initLightbox(gsapReady) {
    const box = qs('#lightbox');
    if (!box) return;
    const imgEl = qs('#lbImg');
    const capEl = qs('#lbCaption');
    const figures = qsa('.lb');
    let current = 0;
    let lastTrigger = null;

    const openAt = i => {
      const visible = figures.filter(f => f.classList.contains('has-img'));
      if (!visible.length) return;
      current = ((i % visible.length) + visible.length) % visible.length;
      const fig = visible[current];
      const img = fig.querySelector('img');
      if (!img) return;
      imgEl.src = img.src;
      imgEl.alt = img.alt;
      capEl.textContent = fig.dataset.cap || '';
      box.hidden = false;
      requestAnimationFrame(() => box.classList.add('is-open'));
      lockScroll();
      lastTrigger = document.activeElement;
      qs('#lbClose').focus();
    };

    const close = () => {
      box.classList.remove('is-open');
      setTimeout(() => { box.hidden = true; }, reduced ? 0 : 400);
      unlockScroll();
      if (lastTrigger) lastTrigger.focus();
    };

    figures.forEach((fig, i) => {
      fig.setAttribute('tabindex', '0');
      fig.setAttribute('role', 'button');
      fig.setAttribute('aria-label', fig.dataset.cap || 'View image');
      fig.addEventListener('click', () => openAt(i));
      fig.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openAt(i); }
      });
    });

    qs('#lbClose').addEventListener('click', close);
    qs('#lbPrev').addEventListener('click', () => openAt(currentIndex() - 1));
    qs('#lbNext').addEventListener('click', () => openAt(currentIndex() + 1));

    function currentIndex() {
      const visible = figures.filter(f => f.classList.contains('has-img'));
      const src = imgEl.getAttribute('src');
      const idx = visible.findIndex(f => {
        const im = f.querySelector('img');
        return im && im.src === src;
      });
      return idx === -1 ? current : idx;
    }

    document.addEventListener('keydown', e => {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') openAt(currentIndex() - 1);
      if (e.key === 'ArrowRight') openAt(currentIndex() + 1);
    });
  }

  /* ============================================================
     Magnetic buttons (desktop only)
     ============================================================ */
  function initMagnetic() {
    if (reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    qsa('[data-magnetic]').forEach(el => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        xTo(Math.max(-10, Math.min(10, (e.clientX - r.left - r.width / 2) * 0.28)));
        yTo(Math.max(-8, Math.min(8, (e.clientY - r.top - r.height / 2) * 0.28)));
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.45)' });
      });
    });
  }

  /* ============================================================
     GSAP motion system
     ============================================================ */
  let heroIntroTl = null;

  function prepareIntroStates() {
    gsap.set('#header', { y: -18, opacity: 0 });
    gsap.set('.hero__eyebrow, .hero__sub, .hero__ctas, .hero__cue', { y: 26, opacity: 0 });
    gsap.set('.hero .rl__i', { yPercent: 118 });
    gsap.set('#heroVeil', { opacity: 1 });
    gsap.set('.hero__media > *', { scale: 1.18 });
  }

  function buildHeroIntro() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to('#heroVeil', { opacity: 0, duration: 1.4, ease: 'power2.inOut' }, 0)
      .to('.hero__media > *', { scale: 1, duration: 2.2, ease: 'expo.out' }, 0)
      .to('#header', { y: 0, opacity: 1, duration: 1 }, 0.35)
      .to('.hero__eyebrow', { y: 0, opacity: 1, duration: 0.9 }, 0.5)
      .to('.hero .rl__i', { yPercent: 0, duration: 1.25, ease: 'expo.out', stagger: 0.14 }, 0.55)
      .to('.hero__sub', { y: 0, opacity: 1, duration: 0.9 }, 1.0)
      .to('.hero__ctas', { y: 0, opacity: 1, duration: 0.9 }, 1.12)
      .to('.hero__cue', { y: 0, opacity: 1, duration: 0.8 }, 1.3);
    return tl;
  }

  function runLoader(onDone) {
    const loader = qs('#loader');
    if (!loader) { onDone(); return; }

    const counter = { v: 0 };
    const countEl = qs('#loaderCount');
    const barEl = qs('#loaderBar');

    const tl = gsap.timeline();
    tl.from('.loader__mark', { scale: 0.82, duration: 1, ease: 'power2.out' })
      .from('.loader__tag', { opacity: 0, duration: 0.5 }, '-=0.45')
      .from('.loader__bar, .loader__count', { opacity: 0, duration: 0.4 }, '-=0.3')
      .to(counter, {
        v: 100, duration: 1.15, ease: 'power2.inOut',
        onUpdate: () => {
          if (countEl) countEl.textContent = pad2(Math.round(counter.v));
          if (barEl) barEl.style.transform = `scaleX(${counter.v / 100})`;
        }
      }, '-=0.2')
      .to('.loader__inner > *', { y: -34, opacity: 0, duration: 0.45, stagger: 0.05, ease: 'power2.in' }, '+=0.1')
      .to(loader, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '-=0.15')
      .add(() => {
        loader.classList.add('is-done');
        loader.setAttribute('aria-hidden', 'true');
        unlockScroll();
        onDone();
        scheduleRefresh();
      }, '-=0.45');
  }

  function initReveals() {
    qsa('[data-reveal]').forEach(el => {
      if (el.closest('.rl') || el.closest('.hero')) return;
      gsap.from(el, {
        y: 38, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 87%', once: true }
      });
    });

    qsa('[data-reveal-group]').forEach(group => {
      gsap.from(qsa(':scope > *', group), {
        y: 34, opacity: 0, duration: 0.85, stagger: 0.09, ease: 'power3.out',
        scrollTrigger: { trigger: group, start: 'top 84%', once: true }
      });
    });

    qsa('.section .rl__i, .footer .rl__i').forEach(inner => {
      gsap.from(inner, {
        yPercent: 118, duration: 1.15, ease: 'expo.out',
        scrollTrigger: { trigger: inner.closest('.rl'), start: 'top 86%', once: true }
      });
    });
  }

  function initScrubText() {
    qsa('[data-scrub-lines]').forEach(title => {
      const section = title.closest('section');
      qsa('.rl', title).forEach(line => {
        const dir = parseFloat(line.dataset.lineDir || '0') || 1;
        gsap.fromTo(line, { xPercent: 0 }, {
          xPercent: dir * 5, ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
        });
      });
    });
  }

  function setupParallax(frame) {
    const img = frame.querySelector('img');
    if (!img) return;
    const depth = parseFloat(frame.dataset.depth || '12');
    gsap.set(img, { scale: 1 + depth / 100 });
    gsap.fromTo(img, { yPercent: -depth / 2 }, {
      yPercent: depth / 2, ease: 'none',
      scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  }

  function initFrameReveals() {
    qsa('.media-frame').forEach(frame => {
      if (frame.closest('.hero')) return;
      gsap.from(frame, {
        clipPath: 'inset(12% 6% 12% 6%)', y: 56, duration: 1.3, ease: 'expo.out',
        scrollTrigger: { trigger: frame, start: 'top 85%', once: true }
      });
    });
  }

  function initLookbookFX() {
    const ghost = qs('#lookbookGhost');
    if (ghost) {
      gsap.fromTo(ghost, { xPercent: 4 }, {
        xPercent: -14, ease: 'none',
        scrollTrigger: { trigger: '#lookbook', start: 'top bottom', end: 'bottom top', scrub: 0.8 }
      });
    }
  }

  function initExperienceFX() {
    const list = qs('#stepsList');
    if (!list) return;

    const rail = document.createElement('span');
    rail.className = 'steps__rail';
    rail.setAttribute('aria-hidden', 'true');
    list.prepend(rail);

    gsap.to(rail, {
      scaleY: 1, ease: 'none',
      scrollTrigger: { trigger: list, start: 'top 72%', end: 'bottom 45%', scrub: true }
    });

    qsa('.step', list).forEach(step => {
      ScrollTrigger.create({
        trigger: step, start: 'top 62%', end: 'bottom 38%',
        toggleClass: { targets: step, className: 'is-active' }
      });
    });
  }

  function initFooterFX() {
    const giant = qs('.footer__giant span');
    if (giant) {
      gsap.from(giant, {
        yPercent: 42, ease: 'none',
        scrollTrigger: { trigger: '.footer__giant', start: 'top bottom', end: 'bottom bottom', scrub: 0.6 }
      });
    }
  }

  function initHeroScrollOut() {
    gsap.to('.hero__content', {
      yPercent: -16, opacity: 0.25, ease: 'none',
      scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.fromTo('.hero__cue', { opacity: 1 }, {
      opacity: 0, ease: 'none', immediateRender: false,
      scrollTrigger: { trigger: '#home', start: 'top top', end: '22% top', scrub: true }
    });
  }

  function initMenuFX() {
    const mm = gsap.matchMedia();

    /* Same scroll-driven horizontal menu at every viewport width.
       Mobile matches desktop exactly: pin -> vertical swipe drives the
       panels horizontally -> releases after the final panel. */
    mm.add('(min-width: 320px)', () => {
      const track = qs('#menuTrack');
      const pin = qs('#menuPin');
      if (!track || !pin) return;

      const distance = () => Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
      const total = MENU_DATA.length;
      const indexEl = qs('#menuIndex');
      const barEl = qs('#menuProgress');

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => '+=' + Math.round(distance() * 1.15),
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            if (barEl) barEl.style.transform = `scaleX(${self.progress})`;
            if (indexEl) indexEl.textContent = pad2(Math.min(total, Math.round(self.progress * (total - 1)) + 1));
          }
        }
      });

      qsa('.menu-panel', track).forEach(panel => {
        gsap.from(qsa('.panel__head, .service', panel), {
          y: 36, opacity: 0, duration: 0.8, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: panel, containerAnimation: tween, start: 'left 85%', once: true }
        });
      });

      return () => {
        tween.scrollTrigger && tween.scrollTrigger.kill();
        tween.kill();
        gsap.set(track, { clearProps: 'all' });
      };
    });
  }

  function initActiveNavSpy() {
    qsa('[data-section]').forEach(section => {
      const sel = section.dataset.section;
      const link = qs(`[data-nav-link="${sel}"]`);
      if (!link) return;
      ScrollTrigger.create({
        trigger: section,
        start: 'top 45%',
        end: 'bottom 45%',
        onToggle: self => link.classList.toggle('is-active', self.isActive)
      });
    });
  }

  function initMotion() {
    if (!hasGsap || reduced) return;

    prepareIntroStates();
    heroIntroTl = buildHeroIntro();
    heroIntroTl.pause();

    runLoader(() => heroIntroTl.play());

    initReveals();
    initScrubText();
    initFrameReveals();
    initLookbookFX();
    initExperienceFX();
    initFooterFX();
    initHeroScrollOut();
    initMenuFX();
    initActiveNavSpy();
    initMagnetic();
  }

  /* ============================================================
     Boot
     ============================================================ */
  function init() {
    renderMenu();
    populateSelects();
    renderHours();
    applyConfigLinks();
    initHeaderScroll();
    initNavSpyFallback();
    initMobileMenu();
    initAnchors();
    initBookLinks();
    initMediaSlots();
    initHeroVideo();
    initBookingForm(hasGsap && !reduced);
    initLightbox();

    if (hasGsap && !reduced) {
      initMotion();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleRefresh);
      window.addEventListener('load', scheduleRefresh);
    } else {
      const menuSection = qs('#menu');
      if (menuSection) menuSection.classList.add('menu--static');
      const loader = qs('#loader');
      if (loader) {
        loader.classList.add('is-done');
        loader.setAttribute('aria-hidden', 'true');
      }
      unlockScroll();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Safety net: never trap the user behind the loader */
  setTimeout(() => {
    const loader = qs('#loader');
    if (loader && !loader.classList.contains('is-done')) {
      loader.classList.add('is-done');
      unlockScroll();
      if (heroIntroTl) heroIntroTl.play();
    }
  }, 6000);
})();
