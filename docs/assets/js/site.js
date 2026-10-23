/* Shared chrome: language, nav, footer, helpers. Loaded on every page.
 * Same contract as the Judging Trainer's site.js: data-en / data-zh attributes
 * on static text, Site.t() for object fields, one language flag in localStorage. */
(function () {
  'use strict';

  var PAGES = [
    { href: 'index.html',   en: 'The Plan',   zh: '整體計畫' },
    { href: 'deck.html',    en: 'The Deck',   zh: '投影片' },
    { href: 'script.html',  en: 'The Script', zh: '逐字稿' },
    { href: 'figures.html', en: 'Figures',    zh: '圖表庫' },
    { href: 'backup.html',  en: 'Backup',     zh: '備用與問答' }
  ];

  var LEAF = '<svg class="leaf" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M4 20c0-8 5.5-14.5 16-15.5C19.5 14 14 20 4 20Z" fill="#23684a"/>' +
    '<path d="M4 20C8 14 12.5 10.5 17 8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>';

  var lang = 'en';
  try { lang = localStorage.getItem('rof-lang') || 'en'; } catch (e) {}
  if (lang !== 'zh') lang = 'en';

  var listeners = [];

  var S = window.Site = {
    get lang() { return lang; },
    /** pick the field for the current language: t(obj,'s') -> obj.s_zh || obj.s_en */
    t: function (o, key) {
      if (!o) return '';
      var v = o[key + '_' + lang];
      if (v === undefined || v === null || v === '') v = o[key + '_en'];
      if (v === undefined || v === null) v = o[key] || '';
      return v;
    },
    /** pick from a pair object {en,zh} or a plain string */
    p: function (v) {
      if (v === null || v === undefined) return '';
      if (typeof v === 'string') return v;
      return v[lang] || v.en || '';
    },
    onLang: function (fn) { listeners.push(fn); },
    esc: function (s) {
      return String(s === undefined || s === null ? '' : s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    },
    wiki: function (slug) {
      var s = String(slug || '').split('#')[0].trim();
      if (s === 'home' || s === 'index' || s === '') s = '';
      return 'https://2026.igem.wiki/gems-taiwan/' + s;
    },
    /** a source may name more than one page ("results; measurement") */
    srcLink: function (src) {
      if (!src) return '';
      var bits = String(src).split(/\s*[;,]\s*/), out = '';
      for (var i = 0; i < bits.length; i++) {
        var parts = bits[i].split('#');
        var slug = parts[0].trim();
        if (!slug) continue;
        var label = (slug === 'home' ? 'home page' : slug) +
                    (parts[1] ? ' · ' + parts[1].replace(/-/g, ' ') : '');
        out += '<a class="src" href="' + S.wiki(slug) + '" target="_blank" rel="noopener">' +
               S.esc(label) + ' ↗</a>' + (i < bits.length - 1 ? '<span class="src"> · </span>' : '');
      }
      return out;
    },
    /** seconds -> 1:05 */
    clock: function (sec) {
      sec = Math.max(0, Math.round(sec));
      var m = Math.floor(sec / 60), s = sec % 60;
      return m + ':' + (s < 10 ? '0' : '') + s;
    },
    save: function (k, v) { try { localStorage.setItem('rof-' + k, JSON.stringify(v)); } catch (e) {} },
    load: function (k, d) {
      try { var v = localStorage.getItem('rof-' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; }
    }
  };

  function applyStatic(root) {
    var nodes = (root || document).querySelectorAll('[data-en]');
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var v = n.getAttribute('data-' + lang);
      if (v === null) v = n.getAttribute('data-en');
      if (n.hasAttribute('data-html')) n.innerHTML = v; else n.textContent = v;
    }
    var ph = (root || document).querySelectorAll('[data-ph-en]');
    for (var k = 0; k < ph.length; k++) {
      var p = ph[k];
      p.setAttribute('placeholder', p.getAttribute('data-ph-' + lang) || p.getAttribute('data-ph-en'));
    }
  }
  S.applyStatic = applyStatic;

  function setLang(next, quiet) {
    lang = next === 'zh' ? 'zh' : 'en';
    try { localStorage.setItem('rof-lang', lang); } catch (e) {}
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hant' : 'en');
    var bs = document.querySelectorAll('.lang button');
    for (var i = 0; i < bs.length; i++) {
      bs[i].setAttribute('aria-pressed', String(bs[i].getAttribute('data-set') === lang));
    }
    applyStatic();
    if (!quiet) for (var j = 0; j < listeners.length; j++) { try { listeners[j](lang); } catch (e) {} }
  }
  S.setLang = setLang;

  function buildNav() {
    var here = (location.pathname.split('/').pop() || 'index.html');
    if (here === '') here = 'index.html';
    var links = '';
    for (var i = 0; i < PAGES.length; i++) {
      var p = PAGES[i];
      links += '<a href="' + p.href + '"' + (p.href === here ? ' aria-current="page"' : '') +
               ' data-en="' + p.en + '" data-zh="' + p.zh + '">' + p.en + '</a>';
    }
    var nav = document.createElement('div');
    nav.className = 'nav no-print';
    nav.innerHTML =
      '<div class="nav-in">' +
        '<a class="nav-brand" href="index.html">' + LEAF +
          '<span data-en="Opening Five" data-zh="五分鐘開場"></span></a>' +
        '<nav class="nav-links">' + links + '</nav>' +
        '<div class="lang" role="group" aria-label="Language">' +
          '<button data-set="en" type="button">EN</button>' +
          '<button data-set="zh" type="button">中</button>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(nav, document.body.firstChild);
    nav.querySelector('.lang').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-set]');
      if (b) setLang(b.getAttribute('data-set'));
    });
  }

  function buildFoot() {
    var f = document.createElement('footer');
    f.className = 'foot no-print';
    f.innerHTML = '<div class="wrap">' +
      '<p data-en="GEMS Taiwan · iGEM 2026 · five-minute team update, Room J03, Friday 13 November, 12:00 Paris. Every figure and number on this site comes from the frozen ReLEAF wiki." ' +
      'data-zh="GEMS Taiwan · iGEM 2026 · 五分鐘團隊更新，J03 會談室，11 月 13 日（五）巴黎時間 12:00。本站所有圖與數字都取自凍結後的 ReLEAF wiki。"></p>' +
      '<p><a href="https://2026.igem.wiki/gems-taiwan/" target="_blank" rel="noopener">2026.igem.wiki/gems-taiwan</a> · ' +
      '<a href="https://timmy97-tw.github.io/releaf-judging-qa/" target="_blank" rel="noopener">' +
      '<span data-en="Judging Trainer: the twenty minutes after this" data-zh="評審訓練：這五分鐘之後的二十分鐘"></span></a></p></div>';
    document.body.appendChild(f);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.body.hasAttribute('data-bare')) { buildNav(); buildFoot(); }
    setLang(lang, true);
    for (var j = 0; j < listeners.length; j++) { try { listeners[j](lang); } catch (e) {} }
  });
})();
