/* MediGlobe — landing page for drug links shared from the app (https://mediglobe.me/drug/<id>)
 * - _redirects rewrites /drug/* to /drug/ with a 200, so location.pathname still holds the id.
 * - Text in Ukrainian, Russian or English, picked from the browser languages (default English).
 * - "Open in the app" (mediglobe://drug/<id>) only for a valid id: in-app browsers such as
 *   Telegram's do not hand https links to the installed app.
 * Lives outside /drug/ on purpose: the rewrite would answer /drug/drug.js with the HTML page.
 * CSP-safe: external 'self' script, no inline code. No template literals (project rule).
 */
(function () {
  'use strict';

  var TEXTS = {
    en: {
      title: 'MediGlobe — medicine card',
      h1: 'This medicine card opens in the MediGlobe app',
      text: 'Someone shared a medicine card from MediGlobe with you. Install the free app to see the medicine’s local brand names, dosage and warnings — it works offline.',
      play: 'Get it on',
      apple: 'Download on the',
      open: 'Already have MediGlobe? Open the card in the app',
      home: 'About MediGlobe →',
      homeHref: '/en/'
    },
    ru: {
      title: 'MediGlobe — карточка препарата',
      h1: 'Эта карточка препарата открывается в приложении MediGlobe',
      text: 'С вами поделились карточкой препарата из MediGlobe. Установите бесплатное приложение, чтобы увидеть местные торговые названия, дозировку и предупреждения — оно работает офлайн.',
      play: 'Доступно в',
      apple: 'Доступно в',
      open: 'Уже есть MediGlobe? Открыть карточку в приложении',
      home: 'О приложении MediGlobe →',
      homeHref: '/'
    },
    uk: {
      title: 'MediGlobe — картка препарату',
      h1: 'Ця картка препарату відкривається в застосунку MediGlobe',
      text: 'З вами поділилися карткою препарату з MediGlobe. Установіть безкоштовний застосунок, щоб побачити місцеві торгові назви, дозування та застереження — він працює офлайн.',
      play: 'Доступно в',
      apple: 'Доступно в',
      open: 'Уже маєте MediGlobe? Відкрити картку в застосунку',
      home: 'Про застосунок MediGlobe →',
      homeHref: '/uk/'
    }
  };

  function pickLang() {
    var langs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      var l = String(langs[i] || '').toLowerCase();
      if (l.indexOf('uk') === 0) return 'uk';
      if (l.indexOf('ru') === 0) return 'ru';
      if (l.indexOf('en') === 0) return 'en';
    }
    return 'en';
  }

  // Same id shape as the app's drug ids; anything else gets no deep link (store buttons still work).
  function drugIdFrom(path) {
    var m = /^\/drug\/([^\/]+)\/?$/.exec(String(path || ''));
    var id = m ? m[1] : '';
    return /^[a-z0-9_]{1,80}$/.test(id) ? id : '';
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  try {
    var lang = pickLang();
    var t = TEXTS[lang];
    document.documentElement.lang = lang;
    document.title = t.title;
    setText('dTitle', t.h1);
    setText('dText', t.text);
    setText('dPlay', t.play);
    setText('dApple', t.apple);
    setText('dOpen', t.open);
    setText('dHome', t.home);
    var home = document.getElementById('dHome');
    if (home) home.setAttribute('href', t.homeHref);
    var logo = document.getElementById('dLogo');
    if (logo) logo.setAttribute('href', t.homeHref);

    var drugId = drugIdFrom(location.pathname);
    var open = document.getElementById('dOpen');
    if (drugId && open) {
      open.setAttribute('href', 'mediglobe://drug/' + drugId);
      open.hidden = false;
    }
  } catch (e) { /* the static English page with store buttons still works */ }
})();
