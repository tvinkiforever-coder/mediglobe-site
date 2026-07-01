(function () {
'use strict';
class App {
  buildEarth() {
    const R = 152, CX = 200, CY = 200, D = Math.PI / 180;
    const lon0 = -20 * D, tilt = 16 * D;
    const ct = Math.cos(tilt), st = Math.sin(tilt);
    const project = (lat, lon) => {
      const la = lat * D, lo = lon * D - lon0;
      const x = Math.cos(la) * Math.sin(lo);
      const y = Math.sin(la);
      const z = Math.cos(la) * Math.cos(lo);
      const y2 = y * ct - z * st;
      const z2 = y * st + z * ct;
      return [CX + x * R, CY - y2 * R, z2];
    };
    // Schematic continent outlines as [lon,lat,...] (orthographic land mask)
    const LAND = [
      [-168,66,-160,71,-140,70,-120,72,-100,74,-82,74,-60,68,-60,60,-78,52,-64,49,-55,50,-56,44,-67,44,-70,41,-74,40,-76,35,-81,31,-81,25,-90,30,-94,29,-97,26,-98,20,-105,20,-106,23,-110,23,-112,29,-117,32,-122,37,-124,42,-124,48,-130,54,-138,58,-150,59,-160,62,-168,66],
      [-45,60,-30,60,-20,66,-22,73,-30,80,-45,83,-60,81,-55,72,-52,64,-45,60],
      [-78,9,-70,12,-60,11,-52,5,-50,0,-44,-3,-35,-6,-35,-12,-39,-18,-48,-25,-54,-34,-58,-39,-65,-46,-69,-52,-75,-52,-74,-45,-72,-37,-71,-25,-70,-15,-76,-6,-81,-4,-80,2,-78,9],
      [-10,36,-9,44,-4,48,1,49,-2,52,3,52,5,58,8,63,12,66,20,70,30,71,42,67,50,62,60,60,55,52,40,48,32,45,28,46,24,41,20,40,15,40,19,46,13,46,8,44,3,43,-2,40,-10,36],
      [-17,21,-16,15,-12,8,-8,5,-2,5,5,5,9,4,9,-1,13,-6,12,-16,15,-26,20,-35,26,-34,33,-26,40,-16,41,-4,43,3,51,12,44,12,43,16,37,22,34,28,32,31,25,32,20,32,11,37,10,34,0,35,-6,36,-12,30,-16,28,-17,21],
      [26,40,35,42,40,40,48,40,50,45,57,52,60,56,68,57,78,55,90,56,100,58,110,57,120,55,128,52,135,55,142,54,145,47,138,43,132,42,128,40,125,38,122,31,121,24,110,21,108,15,104,9,100,4,103,1,97,7,93,18,88,21,82,18,77,8,73,18,68,24,62,25,57,26,52,29,48,30,43,38,35,36,28,37,26,40],
      [114,-22,122,-18,130,-12,137,-12,143,-11,147,-20,151,-25,153,-31,149,-37,141,-38,136,-35,130,-32,123,-34,116,-35,114,-28,114,-22],
      [130,31,136,35,140,38,142,42,140,43,136,37,131,33,130,31],
      [43,-13,50,-16,50,-25,45,-25,43,-18,43,-13],
      [131,-1,141,-3,148,-6,150,-10,141,-9,133,-4,131,-1],
      [-6,50,-2,51,-3,58,-8,57,-10,53,-6,50],
      [167,-45,172,-41,175,-37,178,-38,174,-42,170,-46,167,-45]
    ];
    const pip = (lon, lat, p) => {
      let inside = false;
      for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2) {
        const xi = p[i], yi = p[i + 1], xj = p[j], yj = p[j + 1];
        if (((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi)) inside = !inside;
      }
      return inside;
    };
    const isLand = (lon, lat) => { for (const p of LAND) if (pip(lon, lat, p)) return true; return false; };

    const els = [];
    // graticule
    const addLine = (pts, op, w, col) => {
      let d = '', on = false;
      for (const [lat, lon] of pts) {
        const [sx, sy, z] = project(lat, lon);
        if (z > 0.02) { d += (on ? 'L' : 'M') + sx.toFixed(1) + ' ' + sy.toFixed(1) + ' '; on = true; }
        else on = false;
      }
      if (d) els.push(React.createElement('path', { key: 'L' + els.length, d: d.trim(), fill: 'none', stroke: col, strokeOpacity: op, strokeWidth: w, strokeLinecap: 'round' }));
    };
    [-60, -30, 0, 30, 60].forEach(lat => {
      const pts = []; for (let lon = -180; lon <= 180; lon += 3) pts.push([lat, lon]);
      addLine(pts, lat === 0 ? 0.5 : 0.28, lat === 0 ? 1.3 : 1, '#cdf7ea');
    });
    [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].forEach(lon => {
      const pts = []; for (let lat = -88; lat <= 88; lat += 3) pts.push([lat, lon]);
      addLine(pts, 0.3, 1, '#cdf7ea');
    });
    // land dots
    for (let lat = -78; lat <= 72; lat += 3.6) {
      const step = 3.6 / Math.max(0.26, Math.cos(lat * D));
      for (let lon = -180; lon < 180; lon += step) {
        if (!isLand(lon, lat)) continue;
        const [sx, sy, z] = project(lat, lon);
        if (z <= 0.05) continue;
        els.push(React.createElement('circle', {
          key: 'p' + lat.toFixed(1) + '_' + lon.toFixed(1),
          cx: sx.toFixed(1), cy: sy.toFixed(1),
          r: (0.7 + z * 1.7).toFixed(2),
          fill: '#5fe7aa',
          opacity: (0.24 + z * 0.6).toFixed(2)
        }));
      }
    }
    // pulsing location beacons on the visible hemisphere (global coverage)
    const pins = [[51, 0], [40, -74], [-22, -46], [30, 31], [37, -6]];
    pins.forEach((c, i) => {
      const [sx, sy, z] = project(c[0], c[1]);
      if (z <= 0.2) return;
      els.push(React.createElement('g', { key: 'pin' + i, transform: 'translate(' + sx.toFixed(1) + ' ' + sy.toFixed(1) + ')' }, [
        React.createElement('circle', { key: 'r', r: 5, fill: 'none', stroke: '#c3f9de', strokeWidth: 1.4, style: { transformBox: 'fill-box', transformOrigin: 'center', animation: 'mgPing 2.8s ease-out ' + (i * 0.5) + 's infinite' } }),
        React.createElement('circle', { key: 'h', r: 2.5, fill: '#eafff5' }),
        React.createElement('circle', { key: 'c', r: 1, fill: '#ffffff' })
      ]));
    });
    return React.createElement('g', {}, els);
  }
  state = { tileW: 116 };
  _tiles = 12;
  componentDidMount() {
    this._measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => this._measure());
    setTimeout(() => this._measure(), 400);
    this._initMotion();
    this._initGlobe();
    setTimeout(() => this._initGlobe(), 300);
    this._initParticles();
    setTimeout(() => this._initParticles(), 300);
    this._initAiDemo();
    this._initPhone();
    setTimeout(() => this._initPhone(), 300);
    this._initScrollCards();
    setTimeout(() => this._initScrollCards(), 300);
    this._initUI();
  }
  _initUI() {
    if (this._ui) return; this._ui = true;
    // hide loader once ready
    const loader = document.getElementById('mgLoader');
    if (loader) {
      const hide = () => loader.classList.add('mgGone');
      if (document.readyState === 'complete') setTimeout(hide, 500);
      else window.addEventListener('load', () => setTimeout(hide, 400));
      setTimeout(hide, 2600);
    }
    // mobile menu
    const menu = document.getElementById('mgMobileMenu');
    const burger = document.getElementById('mgBurger');
    const closeBtn = document.getElementById('mgMenuClose');
    const backdrop = document.getElementById('mgMenuBackdrop');
    if (menu && burger) {
      const open = () => { menu.style.display = 'block'; requestAnimationFrame(() => menu.classList.add('mgOpen')); document.body.style.overflow = 'hidden'; };
      const close = () => { menu.classList.remove('mgOpen'); document.body.style.overflow = ''; setTimeout(() => { menu.style.display = 'none'; }, 350); };
      burger.addEventListener('click', open);
      if (closeBtn) closeBtn.addEventListener('click', close);
      if (backdrop) backdrop.addEventListener('click', close);
      menu.querySelectorAll('.mgMenuLink').forEach(a => a.addEventListener('click', close));
    }
    // sticky download bar — show after hero, hide near the CTA
    const bar = document.getElementById('mgStickyBar');
    const cta = document.getElementById('najti');
    if (bar) {
      const demo = document.getElementById('demo');
      const onScroll = () => {
        if (bar.dataset.hidden === '1') return;
        const past = window.scrollY > window.innerHeight * 0.75;
        let block = false;
        for (const el of [cta, demo]) {
          if (!el) continue;
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) { block = true; break; }
        }
        bar.style.transform = (past && !block) ? 'translateY(0)' : 'translateY(120%)';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      // прячем бар при фокусе на поле ввода, чтобы не перекрывать клавиатуру
      document.addEventListener('focusin', (e) => {
        if (e.target && e.target.matches && e.target.matches('input,textarea')) {
          bar.dataset.hidden = '1';
          bar.style.transform = 'translateY(120%)';
        }
      });
      document.addEventListener('focusout', () => { bar.dataset.hidden = ''; onScroll(); });
      onScroll();
    }
    // iOS / Android platform switch
    const psw = document.getElementById('mgPlatSwitch');
    if (psw) {
      const thumb = document.getElementById('mgPlatThumb');
      const btns = psw.querySelectorAll('.mgPlatBtn');
      const decks = document.querySelectorAll('.mgPlatDeck');
      const setPlat = (plat) => {
        thumb.style.transform = plat === 'android' ? 'translateX(100%)' : 'translateX(0)';
        btns.forEach(b => b.dataset.active = b.dataset.plat === plat ? '1' : '0');
        decks.forEach(d => d.dataset.active = d.dataset.plat === plat ? '1' : '0');
        try { localStorage.setItem('mgPlat', plat); } catch (e) {}
        this._blip && this._blip();
      };
      btns.forEach(b => b.addEventListener('click', () => setPlat(b.dataset.plat)));
      let saved = 'ios';
      try { saved = localStorage.getItem('mgPlat') || 'ios'; } catch (e) {}
      setPlat(saved);
    }
    const form = document.getElementById('mgNotifyForm');
    const ok = document.getElementById('mgNotifyOk');
    const errBox = document.getElementById('mgNotifyErr');
    const btn = document.getElementById('mgNotifyBtn');
    const emailInput = document.getElementById('mgNotifyEmail');
    if (form && ok) {
      const self = this;
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = (emailInput && emailInput.value || '').trim();
        if (!email) return;
        if (errBox) errBox.style.display = 'none';
        if (btn) { btn.disabled = true; btn.textContent = 'Отправляем…'; btn.style.opacity = '0.7'; }
        try {
          const res = await fetch('https://mediglobe-waitlist.tvinkiforever.workers.dev/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, lang: 'ru' }),
          });
          if (!res.ok) throw new Error('bad status ' + res.status);
          form.style.display = 'none'; ok.style.display = 'flex';
          self._blip();
        } catch (err) {
          if (btn) { btn.disabled = false; btn.textContent = 'Уведомить'; btn.style.opacity = '1'; }
          if (errBox) { errBox.textContent = 'Не удалось отправить. Проверьте интернет и попробуйте ещё раз.'; errBox.style.display = 'block'; }
        }
      });
    }
  }
  _initScrollCards() {
    if (this._sc) return;
    if (!(window.matchMedia && window.matchMedia('(hover:none)').matches)) return;
    const cards = [...document.querySelectorAll('[style*="border-radius: 18px"]')].filter(c => c.querySelector('h3'));
    if (!cards.length) return;
    this._sc = true;
    if (!('IntersectionObserver' in window)) { cards.forEach(c => c.classList.add('mgFocus')); return; }
    // A card is "open" while it sits inside the central viewport band, and
    // collapses as it leaves. IntersectionObserver = no per-frame scroll math,
    // no single-card "snapping" → smooth reveal.
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.target.classList.toggle('mgFocus', e.isIntersecting));
    }, { rootMargin: '-24% 0px -34% 0px', threshold: 0 });
    cards.forEach(c => io.observe(c));
  }
  _initPhone() {
    if (this._ph) return;
    const kak = document.getElementById('kak');
    if (!kak) return;
    const screens = [...kak.querySelectorAll('.mgScreen')];
    const tabs = [...kak.querySelectorAll('.mgTab')];
    if (screens.length < 3 || tabs.length < 3) return;
    this._ph = true;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const typing = document.getElementById('mgPhoneTyping');
    const ans = document.getElementById('mgPhoneAns');
    let i = 0;
    const show = (n) => {
      screens.forEach((s, k) => s.classList.toggle('mgOn', k === n));
      tabs.forEach((t, k) => { t.style.color = (k === n) ? 'var(--accent)' : '#6f8d80'; });
      if (n === 1 && typing && ans) {
        typing.style.display = 'flex'; ans.style.opacity = '0'; ans.style.transition = 'opacity .4s ease';
        clearTimeout(this._phT);
        this._phT = setTimeout(() => { typing.style.display = 'none'; ans.style.opacity = '1'; }, 1100);
      } else if (typing && ans) {
        typing.style.display = 'none'; ans.style.opacity = '1';
      }
    };
    show(0);
    this._phI = setInterval(() => { i = (i + 1) % 3; show(i); }, 3600);
  }
  _aiAnswer(q, preset) {
    var L = (document.documentElement.lang || 'ru').slice(0, 2);
    var en = L === 'en';
    var uk = L === 'uk';
    var ANS = en ? {
      'Sore throat and fever 37.8': 'It could be a cold or a viral infection. Rest and warm fluids; for fever or pain \u2014 paracetamol at an age-appropriate dose. If it doesn\u2019t improve in 3 days \u2014 see a doctor.',
      'Severe headache for a second day': 'Most often this is tension, dehydration or lack of sleep. Rest, water, paracetamol. If the pain is sudden, with nausea or vision changes \u2014 see a doctor urgently.',
      'Can I take ibuprofen with aspirin': 'Both are NSAIDs; combining them without a doctor\u2019s advice is not recommended \u2014 higher risk for the stomach. In the app this combination is flagged as "use with caution".'
    } : {
      '\u0411\u043e\u043b\u0438\u0442 \u0433\u043e\u0440\u043b\u043e \u0438 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 37.8': '\u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0443\u0434\u0430 \u0438\u043b\u0438 \u041e\u0420\u0412\u0418. \u041f\u043e\u043a\u043e\u0439 \u0438 \u0442\u0451\u043f\u043b\u043e\u0435 \u043f\u0438\u0442\u044c\u0451; \u043f\u0440\u0438 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u0438 \u2014 \u043f\u0430\u0440\u0430\u0446\u0435\u0442\u0430\u043c\u043e\u043b \u0432 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u043d\u043e\u0439 \u0434\u043e\u0437\u0435. \u0415\u0441\u043b\u0438 \u043d\u0435 \u043b\u0435\u0433\u0447\u0435 3 \u0434\u043d\u044f \u2014 \u043a \u0432\u0440\u0430\u0447\u0443.',
      '\u0421\u0438\u043b\u044c\u043d\u0430\u044f \u0433\u043e\u043b\u043e\u0432\u043d\u0430\u044f \u0431\u043e\u043b\u044c \u0432\u0442\u043e\u0440\u043e\u0439 \u0434\u0435\u043d\u044c': '\u0427\u0430\u0449\u0435 \u044d\u0442\u043e \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435, \u043e\u0431\u0435\u0437\u0432\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u043d\u0435\u0434\u043e\u0441\u044b\u043f. \u041e\u0442\u0434\u044b\u0445, \u0432\u043e\u0434\u0430, \u043f\u0430\u0440\u0430\u0446\u0435\u0442\u0430\u043c\u043e\u043b. \u0415\u0441\u043b\u0438 \u0431\u043e\u043b\u044c \u0440\u0435\u0437\u043a\u0430\u044f, \u0441 \u0442\u043e\u0448\u043d\u043e\u0442\u043e\u0439 \u0438\u043b\u0438 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435\u043c \u0437\u0440\u0435\u043d\u0438\u044f \u2014 \u0441\u0440\u043e\u0447\u043d\u043e \u043a \u0432\u0440\u0430\u0447\u0443.',
      '\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0438\u0431\u0443\u043f\u0440\u043e\u0444\u0435\u043d \u0441 \u0430\u0441\u043f\u0438\u0440\u0438\u043d\u043e\u043c': '\u041e\u0431\u0430 \u2014 \u041d\u041f\u0412\u041f, \u0441\u043e\u0432\u043c\u0435\u0449\u0430\u0442\u044c \u0431\u0435\u0437 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u0440\u0430\u0447\u0430 \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f: \u0432\u044b\u0448\u0435 \u0440\u0438\u0441\u043a \u0434\u043b\u044f \u0436\u0435\u043b\u0443\u0434\u043a\u0430. \u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0442\u0430\u043a\u043e\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u043f\u043e\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u00ab\u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e\u0441\u0442\u0438\u00bb.'
    };
    if (uk) ANS = {
      'Болить горло і температура 37.8': 'Це може бути застуда або ГРВІ. Спокій і тепле пиття; за температури чи болю — парацетамол у віковій дозі. Якщо не легшає 3 дні — до лікаря.',
      'Сильний головний біль другий день': 'Найчастіше це напруження, зневоднення або недосипання. Відпочинок, вода, парацетамол. Якщо біль різкий, з нудотою чи порушенням зору — терміново до лікаря.',
      'Чи можна приймати ібупрофен з аспірином': 'Обидва — НПЗП, поєднувати без призначення лікаря не рекомендується: вищий ризик для шлунка. У застосунку таке поєднання позначається як «потребує обережності».'
    };
    if (preset && ANS[preset]) return ANS[preset];
    return uk
      ? 'Це демо — повні відповіді доступні в застосунку. Встановіть MediGlobe, щоб поставити своє запитання AI-асистенту й отримати докладний розбір. Памʼятайте: застосунок не замінює консультацію лікаря.'
      : en
      ? 'This is a demo \u2014 full answers are available in the app. Install MediGlobe to ask the AI assistant your own question and get a detailed breakdown. Remember: the app does not replace a doctor\u2019s consultation.'
      : '\u042d\u0442\u043e \u0434\u0435\u043c\u043e \u2014 \u043f\u043e\u043b\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 MediGlobe, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0432\u043e\u043f\u0440\u043e\u0441 AI-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u0443 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u0440\u0430\u0437\u0431\u043e\u0440. \u041f\u043e\u043c\u043d\u0438\u0442\u0435: \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e \u0432\u0440\u0430\u0447\u0430.';
  }
  _initAiDemo() {
    if (this._ai) return;
    const out = document.getElementById('mgAiOut'), input = document.getElementById('mgAiInput'), send = document.getElementById('mgAiSend'), userBubble = document.getElementById('mgAiUser');
    if (!out || !input || !send) return;
    this._ai = true;
    const type = (text) => {
      if (this._typeTimer) clearInterval(this._typeTimer);
      out.textContent = ''; let i = 0;
      this._typeTimer = setInterval(() => {
        out.textContent = text.slice(0, ++i);
        if (i >= text.length) clearInterval(this._typeTimer);
      }, 16);
    };
    const ask = (q, preset) => {
      if (!q || !q.trim()) return;
      q = q.slice(0, 120);
      if (userBubble) { userBubble.textContent = q; userBubble.style.display = 'block'; }
      out.textContent = '…';
      this._blip();
      setTimeout(() => type(this._aiAnswer(q, preset)), 480);
    };
    send.addEventListener('click', () => { ask(input.value); });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') ask(input.value); });
    document.querySelectorAll('.mgChip').forEach(c => c.addEventListener('click', () => { const q = c.getAttribute('data-q'); input.value = q; ask(q, q); }));
  }
  _initParticles() {
    const cv = document.getElementById('mgParticles');
    if (!cv || this._pt) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this._pt = true;
    const ctx = cv.getContext('2d');
    let W, H, dpr = Math.min(1.75, window.devicePixelRatio || 1), parts = [];
    const resize = () => {
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(54, W / 26));
      parts = [];
      for (let i = 0; i < n; i++) {
        const rnd = Math.random();
        const kind = rnd < 0.55 ? 'dot' : (rnd < 0.8 ? 'capsule' : 'cross');
        const big = kind !== 'dot' && Math.random() < 0.32;
        const tintRnd = Math.random();
        const tint = tintRnd < 0.68 ? '120,240,200' : (tintRnd < 0.86 ? '255,255,255' : '255,110,140');
        parts.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.6 + 0.5, vx: (Math.random() - 0.5) * 0.16, vy: -(Math.random() * 0.22 + 0.05), a: big ? (Math.random() * 0.12 + 0.07) : (Math.random() * 0.5 + 0.2), tw: Math.random() * Math.PI * 2, kind, tint, sz: big ? (Math.random() * 16 + 26) : (Math.random() * 6 + 9), rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * (big ? 0.0035 : 0.006), big });
      }
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });
    const loop = (t) => {
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        const margin = p.kind === 'dot' ? 6 : 20;
        if (p.y < -margin) { p.y = H + margin; p.x = Math.random() * W; }
        if (p.x < -margin) p.x = W + margin; if (p.x > W + margin) p.x = -margin;
        const tw = 0.55 + 0.45 * Math.sin(t / 1000 + p.tw);
        const al = p.a * tw;
        if (p.kind === 'dot') {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7);
          ctx.fillStyle = 'rgba(' + p.tint + ',' + al.toFixed(3) + ')';
          ctx.fill();
        } else if (p.kind === 'capsule') {
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.strokeStyle = 'rgba(' + p.tint + ',' + (al * 0.75).toFixed(3) + ')'; ctx.lineWidth = p.big ? 1.8 : 1.1;
          const w = p.sz, h = p.sz * 0.42, r = h / 2;
          ctx.beginPath(); ctx.moveTo(-w / 2 + r, -h / 2); ctx.lineTo(w / 2 - r, -h / 2); ctx.arc(w / 2 - r, 0, r, -Math.PI / 2, Math.PI / 2); ctx.lineTo(-w / 2 + r, h / 2); ctx.arc(-w / 2 + r, 0, r, Math.PI / 2, -Math.PI / 2); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(0, -h / 2); ctx.lineTo(0, h / 2); ctx.stroke();
          ctx.restore();
        } else {
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.strokeStyle = 'rgba(' + p.tint + ',' + (al * 0.8).toFixed(3) + ')'; ctx.lineWidth = p.big ? 1.8 : 1.1;
          const a2 = p.sz * 0.5, b2 = p.sz * 0.18;
          ctx.strokeRect(-b2, -a2, b2 * 2, a2 * 2); ctx.strokeRect(-a2, -b2, a2 * 2, b2 * 2);
          ctx.restore();
        }
      }
      ctx.shadowBlur = 0;
      this._ptRaf = requestAnimationFrame(loop);
    };
    this._ptRaf = requestAnimationFrame(loop);
  }
  componentWillUnmount() { if (this._raf) cancelAnimationFrame(this._raf); if (this._ptRaf) cancelAnimationFrame(this._ptRaf); if (this._phI) clearInterval(this._phI); }
  _initGlobe() {
    const cv = document.getElementById('mgGlobeCanvas');
    if (!cv || this._glb) return;
    this._glb = true;
    const ctx = cv.getContext('2d');
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = 400 * dpr; cv.height = 400 * dpr;
    ctx.scale(dpr, dpr);
    const D = Math.PI / 180;
    const LAND = [
      [-168,66,-160,71,-140,70,-120,72,-100,74,-82,74,-60,68,-60,60,-78,52,-64,49,-55,50,-56,44,-67,44,-70,41,-74,40,-76,35,-81,31,-81,25,-90,30,-94,29,-97,26,-98,20,-105,20,-106,23,-110,23,-112,29,-117,32,-122,37,-124,42,-124,48,-130,54,-138,58,-150,59,-160,62,-168,66],
      [-45,60,-30,60,-20,66,-22,73,-30,80,-45,83,-60,81,-55,72,-52,64,-45,60],
      [-78,9,-70,12,-60,11,-52,5,-50,0,-44,-3,-35,-6,-35,-12,-39,-18,-48,-25,-54,-34,-58,-39,-65,-46,-69,-52,-75,-52,-74,-45,-72,-37,-71,-25,-70,-15,-76,-6,-81,-4,-80,2,-78,9],
      [-10,36,-9,44,-4,48,1,49,-2,52,3,52,5,58,8,63,12,66,20,70,30,71,42,67,50,62,60,60,55,52,40,48,32,45,28,46,24,41,20,40,15,40,19,46,13,46,8,44,3,43,-2,40,-10,36],
      [-17,21,-16,15,-12,8,-8,5,-2,5,5,5,9,4,9,-1,13,-6,12,-16,15,-26,20,-35,26,-34,33,-26,40,-16,41,-4,43,3,51,12,44,12,43,16,37,22,34,28,32,31,25,32,20,32,11,37,10,34,0,35,-6,36,-12,30,-16,28,-17,21],
      [26,40,35,42,40,40,48,40,50,45,57,52,60,56,68,57,78,55,90,56,100,58,110,57,120,55,128,52,135,55,142,54,145,47,138,43,132,42,128,40,125,38,122,31,121,24,110,21,108,15,104,9,100,4,103,1,97,7,93,18,88,21,82,18,77,8,73,18,68,24,62,25,57,26,52,29,48,30,43,38,35,36,28,37,26,40],
      [114,-22,122,-18,130,-12,137,-12,143,-11,147,-20,151,-25,153,-31,149,-37,141,-38,136,-35,130,-32,123,-34,116,-35,114,-28,114,-22],
      [130,31,136,35,140,38,142,42,140,43,136,37,131,33,130,31],
      [43,-13,50,-16,50,-25,45,-25,43,-18,43,-13],
      [-6,50,-2,51,-3,58,-8,57,-10,53,-6,50],
      [167,-45,172,-41,175,-37,178,-38,174,-42,170,-46,167,-45]
    ];
    const pip = (lon, lat, p) => {
      let inside = false;
      for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2) {
        const xi = p[i], yi = p[i + 1], xj = p[j], yj = p[j + 1];
        if (((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi)) inside = !inside;
      }
      return inside;
    };
    const isLand = (lon, lat) => { for (const p of LAND) if (pip(lon, lat, p)) return true; return false; };
    const land = [];
    for (let lat = -78; lat <= 78; lat += 3.6) {
      const step = 3.6 / Math.max(0.26, Math.cos(lat * D));
      for (let lon = -180; lon < 180; lon += step) if (isLand(lon, lat)) land.push([lat, lon]);
    }
    const grat = [];
    [-60, -30, 0, 30, 60].forEach(lat => { const pts = []; for (let lon = -180; lon <= 180; lon += 4) pts.push([lat, lon]); grat.push({ pts, major: lat === 0 }); });
    [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].forEach(lon => { const pts = []; for (let lat = -84; lat <= 84; lat += 4) pts.push([lat, lon]); grat.push({ pts, major: false }); });
    const pins = [[51, 0], [40, -74], [-22, -46], [30, 31], [28, 77], [35, 139], [-26, 133]];
    const arcs = [[[51, 0], [40, -74]], [[40, -74], [-22, -46]], [[51, 0], [30, 31]], [[30, 31], [28, 77]], [[28, 77], [35, 139]], [[51, 0], [-26, 133]]];
    const tilt = 16 * D;
    const GX = 200, GY = 200;
    const ga = ctx.createRadialGradient(GX, GY, 150, GX, GY, 190);
    ga.addColorStop(0, 'rgba(64,236,182,0)'); ga.addColorStop(0.45, 'rgba(74,240,188,0.26)'); ga.addColorStop(0.7, 'rgba(120,246,210,0.12)'); ga.addColorStop(1, 'rgba(64,236,182,0)');
    const gBody = ctx.createRadialGradient(GX - 46, GY - 54, 16, GX, GY, 172);
    gBody.addColorStop(0, '#1c4836'); gBody.addColorStop(0.45, '#103021'); gBody.addColorStop(0.8, '#081d14'); gBody.addColorStop(1, '#040f0a');
    const vg = ctx.createRadialGradient(GX, GY, 90, GX, GY, 158);
    vg.addColorStop(0, 'rgba(4,15,10,0)'); vg.addColorStop(0.58, 'rgba(4,15,10,0)'); vg.addColorStop(0.86, 'rgba(4,13,9,0.45)'); vg.addColorStop(1, 'rgba(3,10,7,0.92)');
    const sp = ctx.createRadialGradient(150, 132, 2, 150, 132, 96);
    sp.addColorStop(0, 'rgba(200,255,234,0.24)'); sp.addColorStop(1, 'rgba(200,255,234,0)');
    this._glbData = { ctx, land, grat, pins, arcs, R: 152, CX: 200, CY: 200, ct: Math.cos(tilt), st: Math.sin(tilt), D, ga, gBody, vg, sp };
    this._spin = { lon: -0.35, speed: 0.14, target: 0.14 };
    const wrap = document.getElementById('mgGlobeWrap');
    if (wrap) {
      wrap.addEventListener('pointerenter', () => { this._spin.target = 0.46; });
      wrap.addEventListener('pointerleave', () => { this._spin.target = 0.14; });
    }
    this._last = performance.now();
    this._drawGlobe(this._last);
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const loop = (t) => { this._drawGlobe(t); this._raf = requestAnimationFrame(loop); };
    this._raf = requestAnimationFrame(loop);
  }
  _proj(lat, lon, lon0) {
    const d = this._glbData, la = lat * d.D, lo = lon * d.D - lon0;
    const x = Math.cos(la) * Math.sin(lo), y = Math.sin(la), z = Math.cos(la) * Math.cos(lo);
    const y2 = y * d.ct - z * d.st, z2 = y * d.st + z * d.ct;
    return [d.CX + x * d.R, d.CY - y2 * d.R, z2];
  }
  _drawArc(ctx, a, b, lon0, t, i) {
    const N = 46, pts = [];
    for (let s = 0; s <= N; s++) { const f = s / N; pts.push(this._proj(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, lon0)); }
    ctx.beginPath(); let on = false;
    for (const [x, y, z] of pts) { if (z > 0.05) { if (on) ctx.lineTo(x, y); else ctx.moveTo(x, y); on = true; } else on = false; }
    ctx.strokeStyle = 'rgba(90,231,170,0.16)'; ctx.lineWidth = 1; ctx.stroke();
    const head = ((t / 1000 * 0.32) + i * 0.28) % 1, hi = Math.floor(head * N);
    for (let s = Math.max(1, hi - 7); s <= hi; s++) {
      const c = pts[s], p = pts[s - 1]; if (!c || !p || c[2] <= 0.05 || p[2] <= 0.05) continue;
      const a2 = 1 - (hi - s) / 7;
      ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(c[0], c[1]);
      ctx.strokeStyle = 'rgba(190,255,228,' + (a2 * 0.85 * c[2]).toFixed(3) + ')'; ctx.lineWidth = 1.9; ctx.stroke();
    }
  }
  _drawGlobe(t) {
    const d = this._glbData; if (!d) return; const ctx = d.ctx, CX = 200, CY = 200;
    const dt = Math.min(0.05, (t - this._last) / 1000); this._last = t;
    this._spin.speed += (this._spin.target - this._spin.speed) * Math.min(1, dt * 3);
    this._spin.lon += this._spin.speed * dt;
    const lon0 = this._spin.lon;
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = d.ga; ctx.beginPath(); ctx.arc(CX, CY, 190, 0, 7); ctx.fill();
    ctx.fillStyle = d.gBody; ctx.beginPath(); ctx.arc(CX, CY, 158, 0, 7); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(CX, CY, 157, 0, 7); ctx.clip();
    ctx.lineCap = 'round';
    for (const gl of d.grat) {
      ctx.beginPath(); let on = false;
      for (const [la, lo] of gl.pts) { const [x, y, z] = this._proj(la, lo, lon0); if (z > 0.02) { if (on) ctx.lineTo(x, y); else ctx.moveTo(x, y); on = true; } else on = false; }
      ctx.strokeStyle = 'rgba(205,247,234,' + (gl.major ? 0.5 : 0.2) + ')'; ctx.lineWidth = gl.major ? 1.2 : 0.8; ctx.stroke();
    }
    ctx.fillStyle = '#5fe7aa';
    for (const [la, lo] of d.land) { const [x, y, z] = this._proj(la, lo, lon0); if (z <= 0.05) continue; ctx.globalAlpha = 0.22 + z * 0.62; ctx.beginPath(); ctx.arc(x, y, 0.7 + z * 1.7, 0, 7); ctx.fill(); }
    ctx.globalAlpha = 1;
    d.arcs.forEach((a, i) => this._drawArc(ctx, a[0], a[1], lon0, t, i));
    d.pins.forEach((p, i) => {
      const [x, y, z] = this._proj(p[0], p[1], lon0); if (z <= 0.12) return;
      const ph = (((t / 1000) + i * 0.6) % 2.4) / 2.4;
      ctx.globalAlpha = (1 - ph) * 0.8 * z; ctx.beginPath(); ctx.arc(x, y, 2 + ph * 10, 0, 7); ctx.strokeStyle = '#c3f9de'; ctx.lineWidth = 1.3; ctx.stroke();
      ctx.globalAlpha = Math.min(1, z + 0.25); ctx.beginPath(); ctx.arc(x, y, 2.5, 0, 7); ctx.fillStyle = '#eafff5'; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, 1, 0, 7); ctx.fillStyle = '#ffffff'; ctx.fill();
    });
    this._drawCross(ctx);
    ctx.globalAlpha = 1; ctx.restore();
    ctx.fillStyle = d.vg; ctx.beginPath(); ctx.arc(CX, CY, 158, 0, 7); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(CX, CY, 158, 0, 7); ctx.clip();
    ctx.fillStyle = d.sp; ctx.beginPath(); ctx.ellipse(150, 132, 96, 78, 0, 0, 7); ctx.fill(); ctx.restore();
    ctx.beginPath(); ctx.arc(CX, CY, 158, 0, 7); ctx.strokeStyle = 'rgba(191,243,227,0.34)'; ctx.lineWidth = 1.4; ctx.stroke();
    ctx.save();
    for (let k = 0; k < 3; k++) {
      const ang = (t / 1000) * 0.5 + k * (Math.PI * 2 / 3);
      const s = Math.sin(ang); if (s <= 0) continue;
      const x = CX + Math.cos(ang) * 184, y = 214 + s * 50;
      ctx.globalAlpha = Math.min(1, s + 0.15); ctx.shadowColor = '#34e8a0'; ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.arc(x, y, 2.6, 0, 7); ctx.fillStyle = '#aef7d6'; ctx.fill();
    }
    ctx.restore();
  }
  _drawCross(ctx) {
    const CX = 200, CY = 200, armLen = 118, armT = 40;
    const pill = (x, y, w, h) => {
      const rr = Math.min(w, h) / 2;
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.arcTo(x + w, y, x + w, y + h, rr);
      ctx.arcTo(x + w, y + h, x, y + h, rr);
      ctx.arcTo(x, y + h, x, y, rr);
      ctx.arcTo(x, y, x + w, y, rr);
      ctx.closePath();
    };
    ctx.save();
    const glow = ctx.createRadialGradient(CX, CY, 6, CX, CY, 104);
    glow.addColorStop(0, 'rgba(255,255,255,0.22)');
    glow.addColorStop(0.4, 'rgba(255,93,125,0.14)');
    glow.addColorStop(1, 'rgba(255,93,125,0)');
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(CX, CY, 104, 0, 7); ctx.fill();
    ctx.globalAlpha = 0.94;
    const vg = ctx.createLinearGradient(CX, CY - armLen / 2, CX, CY + armLen / 2);
    vg.addColorStop(0, '#8dffcb'); vg.addColorStop(0.45, '#00e89f'); vg.addColorStop(1, '#00a974');
    ctx.fillStyle = vg;
    ctx.shadowColor = 'rgba(160,255,215,0.4)'; ctx.shadowBlur = 16;
    pill(CX - armT / 2, CY - armLen / 2, armT, armLen); ctx.fill();
    const hg = ctx.createLinearGradient(CX - armLen / 2, CY, CX + armLen / 2, CY);
    hg.addColorStop(0, '#ffffff'); hg.addColorStop(0.4, '#ffffff'); hg.addColorStop(0.72, '#ff6f8f'); hg.addColorStop(1, '#ff3b5c');
    ctx.fillStyle = hg;
    ctx.shadowColor = 'rgba(255,59,92,0.42)'; ctx.shadowBlur = 20;
    pill(CX - armLen / 2, CY - armT / 2, armLen, armT); ctx.fill();
    ctx.shadowBlur = 0; ctx.globalAlpha = 1;
    ctx.restore();
  }
  _initMotion() {
    if (this._md) return; this._md = true;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const co = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { this._animateCount(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-count]').forEach(n => co.observe(n));
    // back-to-top button
    const topBtn = document.getElementById('mgTop');
    if (topBtn) {
      const onScroll = () => { topBtn.classList.toggle('mgShow', window.scrollY > 700); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      const go = () => window.scrollTo({ top: 0, behavior: 'smooth' });
      topBtn.addEventListener('click', go);
      topBtn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    }
    // nav scrollspy
    const navLinks = [...document.querySelectorAll('header nav a')];
    const linkFor = (id) => navLinks.find(a => (a.getAttribute('href') || '') === '#' + id);
    const spy = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { const l = linkFor(e.target.id); if (l) { navLinks.forEach(a => a.classList.remove('mgActive')); l.classList.add('mgActive'); } } });
    }, { threshold: 0.3, rootMargin: '-30% 0px -55% 0px' });
    document.querySelectorAll('section[id]').forEach(s => spy.observe(s));
    // 3D parallax tilt of the globe cluster following the cursor
    const hero = document.getElementById('top');
    const wrap = document.getElementById('mgGlobeWrap');
    if (hero && wrap && window.matchMedia('(pointer:fine)').matches) {
      let raf = 0;
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          wrap.style.transform = 'perspective(1100px) rotateY(' + (px * 11).toFixed(2) + 'deg) rotateX(' + (-py * 9).toFixed(2) + 'deg) translateZ(0)';
        });
      });
      hero.addEventListener('pointerleave', () => { wrap.style.transform = ''; });
    }
    const fine = window.matchMedia('(pointer:fine)').matches;
    // spotlight + 3D tilt on info cards
    document.querySelectorAll('[style*="border-radius: 18px"]').forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        if (fine) card.style.transform = 'perspective(900px) rotateY(' + ((px - 0.5) * 6).toFixed(2) + 'deg) rotateX(' + ((0.5 - py) * 6).toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
      card.addEventListener('pointerenter', () => this._blip());
    });
    // magnetic primary buttons
    if (fine) document.querySelectorAll('a[style*="border-radius: 14px"]').forEach(btn => {
      btn.style.willChange = 'transform';
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const mx = (e.clientX - r.left - r.width / 2) / r.width, my = (e.clientY - r.top - r.height / 2) / r.height;
        btn.style.transform = 'translate(' + (mx * 8).toFixed(1) + 'px,' + (my * 6).toFixed(1) + 'px)';
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }
  _blip() {
    if (navigator.vibrate) { try { navigator.vibrate(7); } catch (e) {} }
    try {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      if (!this._ac) this._ac = new AC();
      if (this._ac.state === 'suspended') this._ac.resume();
      const now = this._ac.currentTime;
      if (this._lastBlip && now - this._lastBlip < 0.12) return; this._lastBlip = now;
      const o = this._ac.createOscillator(), g = this._ac.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(880, now); o.frequency.exponentialRampToValueAtTime(1320, now + 0.06);
      g.gain.setValueAtTime(0.0001, now); g.gain.exponentialRampToValueAtTime(0.025, now + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      o.connect(g); g.connect(this._ac.destination); o.start(now); o.stop(now + 0.18);
    } catch (e) {}
  }
  _animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const dur = 1500, start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const v = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = v;
      if (p < 1) requestAnimationFrame(step); else el.textContent = target;
    };
    el.textContent = '0';
    requestAnimationFrame(step);
  }
  _measure() {
    const t = document.getElementById('mgRingText');
    if (!t || !t.getComputedTextLength) return;
    let L = 0; try { L = t.getComputedTextLength(); } catch (e) { return; }
    if (!L) return;
    const tw = L / this._tiles;
    if (this.state.tileW && Math.abs(this.state.tileW - tw) < 0.4) return;
    this.setState({ tileW: tw });
  }
  buildRing() {
    const h = React.createElement;
    const tw = this.state.tileW || 116;
    const text = 'MediGlobe \u2022 '.repeat(this._tiles);
    return h('g', { key: 'ringroot' }, [
      h('path', { key: 'op', id: 'mgOrbitPath', d: 'M200,164 A184,50 0 0,0 200,264 A184,50 0 0,0 200,164', fill: 'none' }),
      h('mask', { key: 'rm', id: 'mgRingMask' }, [
        h('rect', { key: 'a', width: 400, height: 400, fill: '#fff' }),
        h('circle', { key: 'b', cx: 200, cy: 200, r: 158, fill: '#000' }),
        h('path', { key: 'c', d: 'M42.6,214 A158,158 0 0,0 357.4,214 Z', fill: '#fff' })
      ]),
      h('g', { key: 'rg', mask: 'url(#mgRingMask)' }, [
        h('ellipse', { key: 'e', cx: 200, cy: 214, rx: 184, ry: 50, fill: 'none', stroke: '#bdf3e4', strokeOpacity: 0.12, strokeWidth: 1 }),
        h('text', {
          key: 't', id: 'mgRingText', fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600,
          letterSpacing: 2, fill: '#e6fbf1', filter: 'url(#mgGlow)', dominantBaseline: 'middle'
        }, h('textPath', { href: '#mgOrbitPath', startOffset: -2 * tw }, [
          text,
          h('animate', { key: 'an', attributeName: 'startOffset', from: -2 * tw, to: -tw, dur: '7s', repeatCount: 'indefinite', calcMode: 'linear' })
        ]))
      ])
    ]);
  }
  renderVals() {
    if (!this._earth) this._earth = this.buildEarth();
    return {
      accent: this.props.accent ?? '#34e8a0',
      headline: this.props.headline ?? 'Знакомое лекарство — в любой аптеке мира',
      tagline: this.props.tagline ?? 'Введи название или вещество — узнай его местный аналог: бренды, дозировки, цены. Офлайн, 3252 препарата, 14 стран, 7 языков.',
      ring: this.buildRing()
    };
  }
}


  // --- standalone bootstrap (no React/DCLogic at runtime) ---
  App.prototype.setState = function (o) { if (o) Object.assign(this.state || (this.state = {}), o); };
  var app = new App();
  var start = function () { try { app.componentDidMount(); } catch (e) { console.error('mg init error', e); } };
  if (document.readyState !== 'loading') start();
  else document.addEventListener('DOMContentLoaded', start);
})();
