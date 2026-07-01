/* MediGlobe — language routing
 * - Acts only on the root "/" (RU). /en/ and /uk/ are explicit, never redirected.
 * - A stored manual choice still redirects (that is user intent).
 * - Browser-language detection now shows a dismissible suggestion banner instead
 *   of auto-redirecting: search engine bots render as en-US, and a JS redirect
 *   off the canonical/x-default root hurt indexing of the RU page.
 * CSP-safe: external 'self' script, no inline code.
 */
(function () {
  try {
    var KEY = 'mg_lang_choice';

    // Remember the language whenever the user clicks a switcher link.
    function mark(lang) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
    document.addEventListener('click', function (e) {
      var t = e.target;
      var a = t && t.closest ? t.closest('a[href]') : null;
      if (!a) return;
      var h = a.getAttribute('href');
      if (h === '/') mark('ru');
      else if (h === '/en/') mark('en');
      else if (h === '/uk/') mark('uk');
    }, true);

    // Auto-redirect only from the root RU page.
    var path = location.pathname;
    if (path !== '/' && path !== '/index.html') return;

    var choice = null;
    try { choice = localStorage.getItem(KEY); } catch (e) {}

    // A remembered manual choice is user intent — redirect as before.
    if (choice) {
      if (choice === 'uk' && path !== '/uk/') location.replace('/uk/');
      else if (choice === 'en' && path !== '/en/') location.replace('/en/');
      return;
    }

    // No stored choice: detect the browser language and only SUGGEST switching.
    var langs = navigator.languages || [navigator.language || ''];
    var code = '';
    for (var i = 0; i < langs.length; i++) {
      var l = (langs[i] || '').toLowerCase();
      if (l.indexOf('uk') === 0) { code = 'uk'; break; }
      if (l.indexOf('ru') === 0) { code = 'ru'; break; }
      if (l.indexOf('en') === 0) { code = 'en'; break; }
    }
    if (code !== 'uk' && code !== 'en') return; // ru or unknown -> stay silently

    var target = code === 'uk' ? '/uk/' : '/en/';
    var msg = code === 'uk' ? 'Продовжити українською?' : 'Continue in English?';
    var yes = code === 'uk' ? 'Українська' : 'English';
    var no = code === 'uk' ? 'Залишитись' : 'Stay in Russian';

    var mount = function () {
      var bar = document.createElement('div');
      bar.setAttribute('role', 'region');
      bar.setAttribute('aria-label', msg);
      bar.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:210;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;padding:10px 16px;background:rgba(8,22,15,0.96);border-bottom:1px solid rgba(52,232,160,0.3);font-size:14px;color:#eaf4ee;backdrop-filter:blur(8px)';
      var txt = document.createElement('span');
      txt.textContent = msg;
      var go = document.createElement('a');
      go.href = target;
      go.textContent = yes;
      go.style.cssText = 'padding:7px 16px;border-radius:10px;background:#34e8a0;color:#06120d;font-weight:700;text-decoration:none';
      go.addEventListener('click', function () { mark(code); });
      var stay = document.createElement('button');
      stay.type = 'button';
      stay.textContent = no;
      stay.style.cssText = 'padding:7px 14px;border-radius:10px;background:transparent;color:#a9c2b8;border:1px solid rgba(255,255,255,0.2);font:inherit;font-size:13.5px;cursor:pointer';
      stay.addEventListener('click', function () { mark('ru'); bar.remove(); });
      bar.appendChild(txt); bar.appendChild(go); bar.appendChild(stay);
      document.body.appendChild(bar);
    };
    if (document.body) mount();
    else document.addEventListener('DOMContentLoaded', mount);
  } catch (e) {}
})();
