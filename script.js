/* ============================================================
   ADRI & LOKA — Barbershop
   ============================================================ */

/* ============================================================
   CONFIG — edit everything brand-related here
   ============================================================ */
const CONFIG = {
  // WhatsApp number, digits only with country code (e.g. 15550100100)
  whatsappNumber: "201063333165",

  // Social links — replace '#' with real URLs
  instagramUrl: "https://www.instagram.com/adriloka.eg/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61584799082603",

  // Google Maps — replace the query with the real shop address
  mapsEmbedUrl: "https://maps.app.goo.gl/nVNkALyL1PXVZ2ow9",
  mapsLinkUrl: "https://maps.app.goo.gl/9Et2z1rvEUAuyHYt8",

  // Barber options for the booking form — add real names later
  barbers: ["No preference"],

  // Opening hours shown in Location + Footer
  hours: [["sat – Fri", "13:00 — 03:00"]],
};

/* ============================================================
   MENU DATA — the single source of truth for the service menu,
   the booking dropdown and the footer service list.
   Bilingual menu: every category and service carries an Arabic
   line (ar — shown first) and an English line (en — shown second).
   Package categories (numbered: true) list their items with
   sequential numbers. No prices are displayed anywhere.
   ============================================================ */
const MENU_DATA = [
  {
    id: 'hair-beard',
    num: '01',
    titleAr: 'الشعر والذقن',
    titleEn: 'Hair & Beard',
    services: [
      { ar: 'قص شعر + ذقن تدريج', en: 'Haircut + Beard Fade' },
      { ar: 'قص شعر + ذقن مكينة', en: 'Haircut + Beard Machine Trim' },
      { ar: 'قص شعر', en: 'Haircut' },
      { ar: 'قص ذقن', en: 'Beard Trim' },
      { ar: 'قص الطفل', en: 'Kids’ Haircut' },
      { ar: 'مكواة الشعر', en: 'Hair Iron' },
      { ar: 'فرد الشعر', en: 'Hair Straightening' },
      { ar: 'صبغة عادية', en: 'Regular Hair Dye' },
      { ar: 'صبغة شعر + ذقن', en: 'Hair + Beard Dye' },
      { ar: 'استشوار', en: 'Blow-Dry' },
      { ar: 'كيرلي الشعر', en: 'Curly Hair' },
      { ar: 'اسبونشة الشعر', en: 'Hair Sponge' },
      { ar: 'توبيك', en: 'Toppik' },
      { ar: 'صبغة الوان', en: 'Hair Color' },
      { ar: 'بروتين', en: 'Protein Treatment' },
      { ar: 'صبغة الوان Full Hair', en: 'Full Hair Color' },
      { ar: 'بروتين بالجرام', en: 'Protein by Gram' },
      { ar: 'حناء شعر وذقن', en: 'Hair & Beard Henna' }
    ]
  },
  {
    id: 'skin-care',
    num: '02',
    titleAr: 'البشرة',
    titleEn: 'Skin Care',
    services: [
      { ar: 'حمام زيت', en: 'Oil Bath' },
      { ar: 'فوطة ساخنة + ساقعة', en: 'Hot + Cold Towel' },
      { ar: 'فتلة', en: 'Threading' },
      { ar: 'واكس', en: 'Waxing' },
      { ar: 'تنظيف بشرة Level 1', en: 'Skin Cleaning – Level 1' },
      { ar: 'تنظيف بشرة Level 2', en: 'Skin Cleaning – Level 2' },
      { ar: 'تنظيف بشرة Level 3', en: 'Skin Cleaning – Level 3' },
      { ar: 'تنظيف بشرة Level 4', en: 'Skin Cleaning – Level 4' },
      { ar: 'تنظيف بشرة Level 5', en: 'Skin Cleaning – Level 5' },
      { ar: 'تنظيف بشرة Special', en: 'Skin Cleaning – Special' }
    ]
  },
  {
    id: 'pedicure',
    num: '03',
    titleAr: 'الباديكير',
    titleEn: 'Pedicure',
    services: [
      { ar: 'باديكير يد', en: 'Hand Pedicure' },
      { ar: 'باديكير قدم', en: 'Foot Pedicure' },
      { ar: 'باديكير يد وقدم', en: 'Hand & Foot Pedicure' },
      { ar: 'باديكير ميديكال', en: 'Medical Pedicure' }
    ]
  },
  {
    id: 'other-services',
    num: '04',
    titleAr: 'خدمات أخرى',
    titleEn: 'Other Services',
    services: [
      { ar: 'تنظيف البشرة', en: 'Skin Cleaning' },
      { ar: 'مساج سوفت', en: 'Soft Massage' },
      { ar: 'مساج ريكوفري', en: 'Recovery Massage' },
      { ar: 'حمام مغربي وسوداني عطري', en: 'Aromatic Moroccan & Sudanese Bath' },
      { ar: 'ساونا', en: 'Sauna' },
      { ar: 'جاكوزي', en: 'Jacuzzi' }
    ]
  },
  {
    id: 'level-1-package',
    num: '05',
    titleAr: 'المستوى الأول',
    titleEn: 'Level 1 Package',
    numbered: true,
    services: [
      { ar: 'غسول مناسب للبشرة', en: 'Cleanser suitable for the skin type' },
      { ar: 'إسكراب لتقشير الجلد الميت', en: 'Dead Skin Cell Exfoliation Scrub' },
      { ar: 'ماسك تفتيح مناسب لنوع البشرة', en: 'Brightening Mask suitable for the skin type' },
      { ar: 'جهاز البخار لتفتيح مسام البشرة', en: 'Steam Machine to Open Pores' },
      { ar: 'جهاز الألترا سونيك', en: 'Ultrasonic Device' },
      { ar: 'سيرم مناسب لنوع البشرة ومحيط العين', en: 'Serum suitable for the skin type & Eye Area' },
      { ar: 'غلق المسام بالتونر وفيتامين E', en: 'Pore Tightening Toner + Vitamin E' }
    ]
  },
  {
    id: 'level-2-package',
    num: '06',
    titleAr: 'المستوى الثاني',
    titleEn: 'Level 2 Package',
    numbered: true,
    services: [
      { ar: 'غسول مناسب للبشرة', en: 'Cleanser suitable for the skin type' },
      { ar: 'إسكراب لتقشير الجلد الميت', en: 'Dead Skin Cell Exfoliation Scrub' },
      { ar: 'ماسك تفتيح مناسب لنوع البشرة', en: 'Brightening Mask suitable for the skin type' },
      { ar: 'جهاز البخار لتفتيح مسام البشرة', en: 'Steam Machine to Open Pores' },
      { ar: 'جهاز الألترا سونيك', en: 'Ultrasonic Device' },
      { ar: 'جهاز الهيدرافيشال + إبرة البثور', en: 'HydraFacial + Pimple Extraction Needle' },
      { ar: 'ماسك طبيعي مناسب لنوع البشرة', en: 'Natural Mask suitable for the skin type' },
      { ar: 'سيرم مناسب للوجه ومحيط العين', en: 'Serum suitable for the face & Eye Area' }
    ]
  },
  {
    id: 'level-3-package',
    num: '07',
    titleAr: 'المستوى الثالث',
    titleEn: 'Level 3 Package',
    numbered: true,
    services: [
      { ar: 'غسول مناسب للبشرة', en: 'Cleanser suitable for the skin type' },
      { ar: 'إسكراب لتقشير الجلد الميت', en: 'Dead Skin Cell Exfoliation Scrub' },
      { ar: 'ماسك تفتيح مناسب لنوع البشرة', en: 'Brightening Mask suitable for the skin type' },
      { ar: 'جهاز البخار لتفتيح مسام البشرة', en: 'Steam Machine to Open Pores' },
      { ar: 'جهاز Ultra Sound', en: 'Ultrasound Device' },
      { ar: 'جهاز Vacuum', en: 'Vacuum Device' },
      { ar: 'ماسك طبيعي مناسب لنوع البشرة', en: 'Natural Mask suitable for the skin type' },
      { ar: 'سيرم مناسب لنوع البشرة ومحيط العين', en: 'Serum suitable for the skin type & Eye Area' },
      { ar: 'جهاز Cold B لغلق المسام', en: 'Cold B Device for Pore Tightening' },
      { ar: 'مساج للبشرة لتنشيط الدورة الدموية', en: 'Facial Massage to Stimulate Blood Circulation' },
      { ar: 'ماسك طبيعي مناسب لنوع البشرة', en: 'Natural Mask suitable for the skin type' },
      { ar: 'غلق المسام بالتونر وفيتامين E', en: 'Pore Tightening Toner + Vitamin E' }
    ]
  },
  {
    id: 'additional-vip-package',
    num: '08',
    titleAr: 'VIP باقة',
    titleEn: ' VIP Package',
    numbered: true,
    services: [
      { ar: 'تنظيف البشرة 12 مرحلة بجهاز الهيدرافيشال', en: '12-Step Skin Cleaning with HydraFacial' },
      { ar: 'جلسة ترميم الشعر', en: 'Hair Repair Treatment' },
      { ar: 'تنظيف فروة الشعر', en: 'Scalp Cleaning' },
      { ar: 'جلسة ترميم الشعر بجهاز الهاي فريكونسي', en: 'Hair Repair Treatment with High-Frequency Device' },
      { ar: 'حمام كريم لترطيب الشعر', en: 'Moisturizing Hair Cream Bath' },
      { ar: 'جلسة تنظيف فروة الشعر', en: 'Scalp Cleaning Session' },
      { ar: 'جلسة علاجية للصلع الوراثي وتساقط الشعر بالميزوثيرابي', en: 'Therapeutic Session for Genetic Hair Loss & Hair Loss using Mesotherapy' },
      { ar: 'ديرمابن للشعر', en: 'Hair Derma Pen' }
    ]
  },
  {
    id: 'groom-vip-package',
    num: '09',
    titleAr: 'باقة VIP للعريس',
    titleEn: 'Groom’s VIP Package',
    numbered: true,
    services: [
      { ar: 'قص شعر', en: 'Haircut' },
      { ar: 'حلاقة وتهذيب ذقن', en: 'Beard Shave & Trim' },
      { ar: 'استشوار', en: 'Blow-Dry' },
      { ar: 'صبغة أو حنة (على حسب احتياج الشعر)', en: 'Hair Dye or Henna (Based on Hair Needs)' },
      { ar: 'حمام زيت نانو لترميم الشعر', en: 'Nano Oil Hair Repair Treatment' },
      { ar: 'جلسة تنظيف فروة الشعر', en: 'Scalp Cleaning Session' },
      { ar: 'مساج يدوي + مساج إلكتروني', en: 'Manual + Electronic Massage' },
      { ar: 'فرد الشعر دارك أو بروتين (على حسب احتياج الشعر)', en: 'Dark Hair Straightening or Protein Treatment (Based on Hair Needs)' },
      { ar: 'تنظيف البشرة عميق 15 مرحلة', en: 'Deep Skin Cleaning – 15 Steps' },
      { ar: 'شمع سوري + فتلة', en: 'Syrian Wax + Threading' },
      { ar: 'باديكير يد وقدم', en: 'Hand & Foot Pedicure' },
      { ar: 'حمام مغربي عطري', en: 'Aromatic Moroccan Bath' },
      { ar: 'حمام تركي عطري', en: 'Aromatic Turkish Bath' }
    ]
  },
  {
    id: 'groom-bronze-package',
    num: '10',
    titleAr: 'الباقة البرونزية للعريس',
    titleEn: 'Groom’s Bronze Package',
    numbered: true,
    services: [
      { ar: 'قص شعر', en: 'Haircut' },
      { ar: 'حلاقة وتهذيب ذقن', en: 'Beard Shave & Trim' },
      { ar: 'استشوار', en: 'Blow-Dry' },
      { ar: 'تنظيف بشرة 7 مراحل', en: 'Skin Cleaning – 7 Steps' },
      { ar: 'حمام زيت بالنانو لترميم الشعر', en: 'Nano Oil Hair Repair Treatment' },
      { ar: 'حناء للشعر', en: 'Hair Henna' }
    ]
  },
  {
    id: 'groom-silver-package',
    num: '11',
    titleAr: 'الباقة الفضية للعريس',
    titleEn: 'Groom’s Silver Package',
    numbered: true,
    services: [
      { ar: 'قص شعر', en: 'Haircut' },
      { ar: 'حلاقة وتهذيب ذقن', en: 'Beard Shave & Trim' },
      { ar: 'صبغة أو حنة (على حسب احتياج الشعر)', en: 'Hair Dye or Henna (Based on Hair Needs)' },
      { ar: 'حمام زيت نانو لترميم الشعر', en: 'Nano Oil Hair Repair Treatment' },
      { ar: 'تنظيف البشرة 9 مراحل', en: 'Skin Cleaning – 9 Steps' },
      { ar: 'شمع سوري + فتلة', en: 'Syrian Wax + Threading' },
      { ar: 'باديكير يد وقدم', en: 'Hand & Foot Pedicure' },
      { ar: 'حمام مغربي + حمام عطري + مساج', en: 'Moroccan Bath + Aromatic Bath + Massage' }
    ]
  },
  {
    id: 'groom-gold-package',
    num: '12',
    titleAr: 'الباقة الذهبية للعريس',
    titleEn: 'Groom’s Gold Package',
    numbered: true,
    services: [
      { ar: 'قص شعر', en: 'Haircut' },
      { ar: 'حلاقة وتهذيب ذقن', en: 'Beard Shave & Trim' },
      { ar: 'استشوار', en: 'Blow-Dry' },
      { ar: 'صبغة أو حنة (على حسب احتياج الشعر)', en: 'Hair Dye or Henna (Based on Hair Needs)' },
      { ar: 'حمام زيت نانو لترميم الشعر', en: 'Nano Oil Hair Repair Treatment' },
      { ar: 'تنظيف البشرة 9 مراحل', en: 'Skin Cleaning – 9 Steps' },
      { ar: 'شمع سوري + فتلة', en: 'Syrian Wax + Threading' },
      { ar: 'باديكير يد وقدم', en: 'Hand & Foot Pedicure' },
      { ar: 'حمام مغربي + حمام عطري + مساج', en: 'Moroccan Bath + Aromatic Bath + Massage' }
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
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  let refreshTimer;
  const scheduleRefresh = () => {
    if (!hasGsap) return;
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => {
      /* Refreshing while a pinned section is active recalculates pin
         geometry against the pinned position and breaks the pin, so
         defer until it is released. */
      const triggers = ScrollTrigger.getAll();
      if (triggers.some(t => t.pin && t.isActive)) { scheduleRefresh(); return; }
      ScrollTrigger.refresh();
    }, 200);
  };

  const lockScroll = () => document.documentElement.classList.add('lock');
  const unlockScroll = () => document.documentElement.classList.remove('lock');

  /* ============================================================
     Content injection (menu, selects, hours, socials, maps)
     ============================================================ */
  function renderMenu() {
    const track = qs('#menuTrack');
    if (!track) return;

    track.innerHTML = MENU_DATA.map(cat => {
      // Density tier: content units = items x lines (packages carry a number line),
      // so every panel fits the pinned viewport without internal scrolling
      const units = cat.services.length * (cat.numbered ? 3 : 2);
      const density = units >= 33 ? ' menu-panel--xdense' : units >= 22 ? ' menu-panel--dense' : '';
      return `
      <article class="menu-panel${density}" data-num="${cat.num}" data-cat="${cat.id}">
        <header class="panel__head">
          <span class="panel__num">${cat.num}</span>
          <div class="panel__titles">
            <h3 class="panel__title">${esc(cat.titleEn)}</h3>
            <p class="panel__title-ar">${esc(cat.titleAr)}</p>
          </div>
        </header>
        <ul class="panel__list">
          ${cat.services.map((s, i) => `
            <li class="service">
              ${cat.numbered ? `<span class="service__num">${pad2(i + 1)}</span>` : ''}
              <div class="service__top">
                <h4 class="service__name">${esc(s.en)}</h4>
                <span class="service__leader" aria-hidden="true"></span>
              </div>
              <p class="service__desc">${esc(s.ar)}</p>
            </li>`).join('')}
        </ul>
      </article>`;
    }).join('');

    const total = qs('#menuTotal');
    if (total) total.textContent = pad2(MENU_DATA.length);

    const footerList = qs('#footerServices');
    if (footerList) {
      footerList.innerHTML = MENU_DATA.map(cat =>
        `<li><a href="#menu">${esc(cat.titleEn)}</a></li>`).join('');
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
    qsa(".media-frame[data-media]").forEach((frame) => {
      const src = "assets/" + frame.dataset.media;
      const img = new Image();

      img.alt = frame.dataset.alt || "";
      img.decoding = "async";
      /* Every media frame sits below the fold — lazy loading defers the
         fetch without changing when/how each image fades in. */
      img.loading = "lazy";
      /* A lazy image only fetches once it is in the DOM, so insert first. */
      frame.prepend(img);

      img.addEventListener(
        "load",
        () => {
          frame.classList.add("has-img");

          if (hasGsap && !reduced && !frame.classList.contains("lb")) {
            setupParallax(frame);
          }
          /* No refresh needed: aspect-ratio frames mean an image load
             never changes layout. */
        },
        { once: true },
      );

      img.addEventListener(
        "error",
        () => {
          console.error("[media] Failed to load:", src);
        },
        { once: true },
      );

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
      /* The video is absolutely positioned inside the fixed-height hero —
         its readiness never changes layout, so no refresh is needed. */
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

  /* ============================================================
     Booking form — WhatsApp reservation request
     ============================================================ */
  function buildWhatsAppMessage(d) {
    const formatDate = iso => {
      const [y, m, day] = iso.split('-').map(Number);
      return `${String(day).padStart(2, '0')}/${String(m).padStart(2, '0')}/${y}`;
    };
    const formatTime = t => {
      let [h, mi] = t.split(':').map(Number);
      const ap = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      return `${String(h).padStart(2, '0')}:${String(mi).padStart(2, '0')} ${ap}`;
    };
    const lines = [
      'Hello, I would like to request a reservation at ADRI & LOKA.',
      '',
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Date: ${formatDate(d.date)}`,
      `Time: ${formatTime(d.time)}`
    ];
    if (d.notes && d.notes.trim()) lines.push(`Note: ${d.notes.trim()}`);
    lines.push('', 'Please confirm my reservation.');
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

  function showSuccess(d, gsapReady) {
    const overlay = qs('#successOverlay');
    if (!overlay) return;
    const summary = qs('#successSummary');
    if (summary) summary.textContent = `${d.date} at ${d.time}`;
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
    const timeInput = qs('#timeInput');

    /* Business hours — open 1:00 PM, close 3:00 AM the following calendar day.
       A booking is only valid at least 1 hour before the appointment time. */
    const OPEN_MIN = 13 * 60;
    const CLOSE_MIN = 3 * 60;
    const NOTICE_MIN = 60;

    if (dateInput) dateInput.min = new Date().toLocaleDateString('en-CA');

    /* Maps the chosen date + time onto the real appointment moment.
       Times before 3:00 AM belong to the operating window that started
       the previous afternoon, so they land on the next calendar day. */
    const bookingMoment = (dateStr, timeStr) => {
      if (!dateStr || !timeStr) return null;
      const [y, mo, d] = dateStr.split('-').map(Number);
      const [h, mi] = timeStr.split(':').map(Number);
      const mins = h * 60 + mi;
      const dt = new Date(y, mo - 1, d);
      if (mins >= OPEN_MIN) {
        dt.setMinutes(mins);                      // 1:00 PM – 11:59 PM
      } else if (mins <= CLOSE_MIN) {
        dt.setDate(dt.getDate() + 1);             // 12:00 AM – 3:00 AM (overnight tail)
        dt.setMinutes(mins);
      } else {
        return null;                              // 3:01 AM – 12:59 PM → closed
      }
      return dt;
    };

    const bookingError = () => {
      if (!dateInput || !timeInput || !dateInput.value || !timeInput.value) return '';
      const moment = bookingMoment(dateInput.value, timeInput.value);
      if (!moment) return 'We are closed at this time. Bookings run 1:00 PM \u2192 3:00 AM.';
      if (moment.getTime() < Date.now() + NOTICE_MIN * 60000) return 'Please book at least 1 hour in advance.';
      return '';
    };

    const clearBookingValidity = () => {
      if (timeInput) timeInput.setCustomValidity('');
      if (dateInput) dateInput.setCustomValidity('');
    };

    /* Clicking / tapping anywhere inside the native date & time inputs
       opens the browser's own picker. Feature-detected and fail-safe. */
    const openNativePicker = el => {
      if (!el || typeof el.showPicker !== 'function') return;
      try { el.showPicker(); } catch (err) { /* picker unavailable — input stays manual */ }
    };

    if (dateInput) {
      dateInput.addEventListener('click', () => openNativePicker(dateInput));
      dateInput.addEventListener('change', () => {
        clearBookingValidity();
        if (timeInput) timeInput.setCustomValidity(bookingError());
      });
    }

    if (timeInput) {
      timeInput.addEventListener('click', () => openNativePicker(timeInput));
      timeInput.addEventListener('change', () => {
        clearBookingValidity();
        timeInput.setCustomValidity(bookingError());
      });
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      clearBookingValidity();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const bookingProblem = bookingError();
      if (bookingProblem) {
        if (timeInput) timeInput.setCustomValidity(bookingProblem);
        form.reportValidity();
        return;
      }

      const data = Object.fromEntries(new FormData(form).entries());
      const submitBtn = qs('#bookingSubmit');
      if (submitBtn) submitBtn.classList.add('is-sent');

      openWhatsApp(data);
      showSuccess(data, gsapReady);

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
      }, { passive: true });
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
    let lastCount = -1;
    tl.from('.loader__mark', { scale: 0.82, duration: 1, ease: 'power2.out' })
      .from('.loader__tag', { opacity: 0, duration: 0.5 }, '-=0.45')
      .from('.loader__bar, .loader__count', { opacity: 0, duration: 0.4 }, '-=0.3')
      .to(counter, {
        v: 100, duration: 1.15, ease: 'power2.inOut',
        onUpdate: () => {
          const v = Math.round(counter.v);
          if (countEl && v !== lastCount) { lastCount = v; countEl.textContent = pad2(v); }
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

      let lastIdx = -1;

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
            const idx = Math.min(total, Math.round(self.progress * (total - 1)) + 1);
            if (indexEl && idx !== lastIdx) { lastIdx = idx; indexEl.textContent = pad2(idx); }
          }
        }
      });

      qsa('.menu-panel', track).forEach(panel => {
        gsap.from(qsa('.panel__head, .service', panel), {
          y: 36, opacity: 0, duration: 0.8, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: panel, containerAnimation: tween, start: 'left 85%', once: true }
        });
      });

      /* Horizontal wheel / trackpad input feeds the SAME pinned scroll
         progress: while the menu is pinned, predominantly-horizontal
         deltas are translated into vertical page scroll 1:1, so
         deltaX=200 moves the track exactly like deltaY=200. Vertical
         deltas are left fully native. */
      const deltaPx = e => {
        const unit = e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? window.innerHeight : 1;
        return e.deltaX * unit;
      };
      const scrollEl = document.scrollingElement || document.documentElement;
      let sbRaf = 0;
      const scrollPage = px => {
        /* html has scroll-behavior:smooth, which animates (and coalesces)
           programmatic scrolls. Native wheel input is instant, so force an
           instant 1:1 scroll to keep the same movement ratio. */
        scrollEl.style.scrollBehavior = 'auto';
        scrollEl.scrollTop += px;
        if (!sbRaf) sbRaf = requestAnimationFrame(() => { sbRaf = 0; scrollEl.style.scrollBehavior = ''; });
      };
      const onWheel = e => {
        if (!tween.scrollTrigger || !tween.scrollTrigger.isActive) return;
        if (document.documentElement.classList.contains('lock')) return;
        if (e.ctrlKey) return;
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
        e.preventDefault();
        scrollPage(deltaPx(e));
      };

      /* Horizontal swipe feeds the same scroll position, content follows
         the finger just like the native vertical swipe. */
      let tX = 0, tY = 0;
      const onTouchStart = e => {
        tX = e.touches[0].clientX;
        tY = e.touches[0].clientY;
      };
      const onTouchMove = e => {
        if (!tween.scrollTrigger || !tween.scrollTrigger.isActive) return;
        if (document.documentElement.classList.contains('lock')) return;
        const dx = e.touches[0].clientX - tX;
        const dy = e.touches[0].clientY - tY;
        if (Math.abs(dx) <= Math.abs(dy)) return;
        e.preventDefault();
        scrollPage(-dx);
        tX = e.touches[0].clientX;
        tY = e.touches[0].clientY;
      };
      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('touchstart', onTouchStart, { passive: true });
      window.addEventListener('touchmove', onTouchMove, { passive: false });

      return () => {
        tween.scrollTrigger && tween.scrollTrigger.kill();
        tween.kill();
        gsap.set(track, { clearProps: 'all' });
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchmove', onTouchMove);
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
    renderHours();
    applyConfigLinks();
    initHeaderScroll();
    initNavSpyFallback();
    initMobileMenu();
    initAnchors();
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
