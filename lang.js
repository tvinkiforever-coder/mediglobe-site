/* MediGlobe — language auto-routing (region/browser based)
 * - Acts only on the root "/" (RU). /en/ and /uk/ are explicit, never redirected.
 * - Remembers a manual choice: clicking a language switch stops future auto-redirects.
 * - Detection order: stored choice -> navigator.languages.
 *   uk* -> /uk/ ; ru* -> stay (RU) ; anything else -> /en/.
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

    var target = null;
    if (choice) {
      if (choice === 'uk') target = '/uk/';
      else if (choice === 'en') target = '/en/';
      // choice === 'ru' -> stay
    } else {
      var langs = navigator.languages || [navigator.language || ''];
      var code = '';
      for (var i = 0; i < langs.length; i++) {
        var l = (langs[i] || '').toLowerCase();
        if (l.indexOf('uk') === 0) { code = 'uk'; break; }
        if (l.indexOf('ru') === 0) { code = 'ru'; break; }
        if (l.indexOf('en') === 0) { code = 'en'; break; }
      }
      if (code === 'uk') target = '/uk/';
      else if (code === 'en') target = '/en/';
      // ru or unknown -> stay on RU (x-default)
    }

    if (target && target !== path) location.replace(target);
  } catch (e) {}
})();
