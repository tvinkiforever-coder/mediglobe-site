/* MediGlobe — Google Analytics 4 + Consent Mode v2 + баннер согласия
 *
 * Property : mediglobe.me (GA4 547885073, аккаунт MediGlobe 402978611)
 * Stream   : MediGlobe Website (15354979226)
 * Measure  : G-EP3G02BSQE
 *
 * Как работает:
 *   1. До загрузки тега выставляем consent = denied по всем рекламным/аналитическим
 *      хранилищам (Consent Mode v2). В этом режиме GA шлёт только обезличенные
 *      пинги без кук и без идентификаторов.
 *   2. Грузим gtag.js.
 *   3. Если посетитель уже решал — применяем его выбор из localStorage.
 *      Если нет — показываем баннер на языке страницы (ru / en / uk).
 *   4. window.mgConsentOpen() открывает баннер повторно (ссылка в privacy).
 *
 * Правило проекта: никаких шаблонных строк и бэктиков — только конкатенация.
 */
(function () {
  'use strict';

  var GA_ID = 'G-EP3G02BSQE';
  var STORE_KEY = 'mgConsent.v1';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  function readChoice() {
    try { return window.localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function saveChoice(value) {
    try { window.localStorage.setItem(STORE_KEY, value); } catch (e) { /* приватный режим */ }
  }

  var saved = readChoice();

  /* --- 1. Дефолт: всё запрещено, пока человек не решил --- */
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });

  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });

  /* --- 2. Сам тег --- */
  var tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  (document.head || document.documentElement).appendChild(tag);

  function applyConsent(granted) {
    var v = granted ? 'granted' : 'denied';
    gtag('consent', 'update', {
      ad_storage: v,
      ad_user_data: v,
      ad_personalization: v,
      analytics_storage: v
    });
  }

  /* --- 3. Тексты баннера --- */
  var TEXTS = {
    ru: {
      body: 'Мы используем Google Analytics, чтобы понимать, какие разделы сайта полезны. Аналитические куки включаются только с вашего согласия.',
      more: 'Политика конфиденциальности',
      moreHref: '/privacy/',
      yes: 'Принять',
      no: 'Только необходимые',
      aria: 'Согласие на аналитические куки'
    },
    en: {
      body: 'We use Google Analytics to see which parts of the site are useful. Analytics cookies are switched on only with your consent.',
      more: 'Privacy Policy',
      moreHref: '/en/privacy/',
      yes: 'Accept',
      no: 'Essential only',
      aria: 'Analytics cookie consent'
    },
    uk: {
      body: 'Ми використовуємо Google Analytics, щоб розуміти, які розділи сайту корисні. Аналітичні куки вмикаються лише за вашою згодою.',
      more: 'Політика конфіденційності',
      moreHref: '/uk/privacy/',
      yes: 'Прийняти',
      no: 'Лише необхідні',
      aria: 'Згода на аналітичні куки'
    }
  };

  function pickLang() {
    var l = (document.documentElement.getAttribute('lang') || 'ru').slice(0, 2).toLowerCase();
    return TEXTS[l] ? l : 'ru';
  }

  var STYLE_ID = 'mgConsentStyle';
  var BOX_ID = 'mgConsent';

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var css = ''
      + '#' + BOX_ID + '{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;'
      + 'max-width:640px;margin:0 auto;padding:18px 20px;border-radius:16px;'
      + 'background:rgba(10,26,19,0.94);border:1px solid rgba(52,232,160,0.22);'
      + 'box-shadow:0 18px 48px rgba(0,0,0,0.45);'
      + 'font-family:Manrope,system-ui,sans-serif;color:#cfe3da;font-size:14px;line-height:1.55;'
      + 'opacity:0;transform:translateY(12px);transition:opacity .35s ease,transform .35s ease}'
      + '#' + BOX_ID + '.mgConsentIn{opacity:1;transform:translateY(0)}'
      + '#' + BOX_ID + ' a{color:#8fe9c4}'
      + '#' + BOX_ID + ' .mgConsentRow{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}'
      + '#' + BOX_ID + ' button{flex:1 1 auto;min-width:150px;cursor:pointer;'
      + 'font-family:inherit;font-size:14px;font-weight:600;padding:11px 16px;border-radius:11px;'
      + 'border:1px solid rgba(255,255,255,0.14);background:rgba(255,255,255,0.05);color:#eaf4ee;'
      + 'transition:background .2s ease,border-color .2s ease}'
      + '#' + BOX_ID + ' button:hover{background:rgba(255,255,255,0.10)}'
      + '#' + BOX_ID + ' button.mgConsentYes{background:#34e8a0;border-color:#34e8a0;color:#06120d}'
      + '#' + BOX_ID + ' button.mgConsentYes:hover{background:#48f0ad}'
      + '@media(max-width:520px){#' + BOX_ID + '{padding:16px;font-size:13px}}'
      + '@media(prefers-reduced-motion:reduce){#' + BOX_ID + '{transition:none}}';
    var st = document.createElement('style');
    st.id = STYLE_ID;
    st.appendChild(document.createTextNode(css));
    (document.head || document.documentElement).appendChild(st);
  }

  function closeBanner() {
    var box = document.getElementById(BOX_ID);
    if (!box) return;
    box.className = '';
    window.setTimeout(function () {
      if (box.parentNode) box.parentNode.removeChild(box);
    }, 350);
  }

  function showBanner() {
    if (document.getElementById(BOX_ID)) return;
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', showBanner);
      return;
    }
    injectStyle();

    var t = TEXTS[pickLang()];

    var box = document.createElement('div');
    box.id = BOX_ID;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-live', 'polite');
    box.setAttribute('aria-label', t.aria);

    var p = document.createElement('p');
    p.style.margin = '0';
    p.appendChild(document.createTextNode(t.body + ' '));
    var a = document.createElement('a');
    a.href = t.moreHref;
    a.appendChild(document.createTextNode(t.more));
    p.appendChild(a);
    box.appendChild(p);

    var row = document.createElement('div');
    row.className = 'mgConsentRow';

    var no = document.createElement('button');
    no.type = 'button';
    no.appendChild(document.createTextNode(t.no));
    no.onclick = function () { saveChoice('denied'); applyConsent(false); closeBanner(); };

    var yes = document.createElement('button');
    yes.type = 'button';
    yes.className = 'mgConsentYes';
    yes.appendChild(document.createTextNode(t.yes));
    yes.onclick = function () { saveChoice('granted'); applyConsent(true); closeBanner(); };

    row.appendChild(no);
    row.appendChild(yes);
    box.appendChild(row);

    document.body.appendChild(box);
    window.setTimeout(function () { box.className = 'mgConsentIn'; }, 30);
  }

  /* Ссылка «изменить решение» со страниц privacy.
     CSP запрещает inline-onclick, поэтому вешаем обработчик на .mgConsentLink. */
  window.mgConsentOpen = function () {
    try { window.localStorage.removeItem(STORE_KEY); } catch (e) {}
    closeBanner();
    window.setTimeout(showBanner, 60);
    return false;
  };

  function wireConsentLinks() {
    var links = document.querySelectorAll('.mgConsentLink');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (ev) {
        ev.preventDefault();
        window.mgConsentOpen();
      });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireConsentLinks);
  } else {
    wireConsentLinks();
  }

  /* --- 4. Решение --- */
  if (saved === 'granted' || saved === 'denied') {
    applyConsent(saved === 'granted');
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }
})();
