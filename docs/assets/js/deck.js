/* The deck engine.
 * Slides are data (data/deck.js). Six layouts, each a small render function.
 * The canvas is a fixed 1280x720 box scaled to fit, so one set of px sizes
 * works on a laptop, a projector and a phone. */
(function () {
  'use strict';

  var S = window.Site, D = window.DECK;
  var frame = document.getElementById('frame');
  var canvas = document.getElementById('canvas');
  var rail = document.getElementById('rail');
  var notes = document.getElementById('notes');
  var tc = document.getElementById('tc');
  var i = 0, running = false, elapsed = 0, last = 0, tick = null;

  var total = D.slides.reduce(function (a, s) { return a + s.budget; }, 0);

  /* ── scale the canvas into the frame ── */
  function fit() {
    var w = frame.clientWidth;
    canvas.style.transform = 'scale(' + (w / 1280) + ')';
    frame.style.height = '';
    if (document.fullscreenElement === document.getElementById('stage')) {
      var h = frame.clientHeight, k = Math.min(w / 1280, h / 720);
      canvas.style.transform = 'translate(' + ((w - 1280 * k) / 2) + 'px,' +
        ((h - 720 * k) / 2) + 'px) scale(' + k + ')';
    }
  }
  window.addEventListener('resize', fit);
  document.addEventListener('fullscreenchange', fit);

  /* ── pieces ── */
  function fig(f, cls) {
    var cap = S.t(f, 'cap');
    return '<div class="figwrap ' + (cls || '') + (f.cover ? ' cover' : '') + '">' +
      '<img src="' + f.src + '" alt="' + S.esc(S.t(f, 'alt')) + '" loading="eager">' +
      '</div>' + (cap ? '<p class="figcap">' + S.esc(cap) + '</p>' : '');
  }
  function nums(list, cls) {
    var h = '<div class="nums ' + (cls || '') + '">';
    for (var k = 0; k < list.length; k++) {
      h += '<div class="num"><div class="v">' + list[k].v + '</div>' +
           '<div class="l">' + S.esc(S.t(list[k], 'l')) + '</div></div>';
    }
    return h + '</div>';
  }
  function eyebrow(s, n) {
    return '<div class="sl-eye"><span class="who">' + S.esc(S.p(D.speakers[s.speaker].name)) + '</span>' +
      '<span class="dot"></span><span>' + S.esc(S.t(s, 'kicker')) + '</span>' +
      '<span class="pg">' + (n + 1) + ' / ' + D.slides.length + ' · ' + S.clock(s.budget) + '</span></div>';
  }
  function footnote(s) {
    var c = S.t(s, 'caveat');
    if (!c) return '';
    return '<p class="foot-note"><b data-en="Say it:" data-zh="要說出口：">' +
      (S.lang === 'zh' ? '要說出口：' : 'Say it:') + '</b><span>' + S.esc(c) + '</span></p>';
  }

  /* ── layouts ── */
  var LY = {
    hero: function (s) {
      return '<div class="sl ly-hero">' + '{{eye}}' +
        '<h2>' + S.esc(S.t(s, 'title')) + '</h2>' +
        (S.t(s, 'sub') ? '<p class="sub">' + S.esc(S.t(s, 'sub')) + '</p>' : '') +
        '<div class="art">' + fig(s.figs[0]) + '</div>' + footnote(s) + '</div>';
    },
    split: function (s) {
      return '<div class="sl ly-split">' + '{{eye}}' +
        '<h2 class="sm">' + S.esc(S.t(s, 'title')) + '</h2>' +
        '<div class="body"><div>' + fig(s.figs[0]) + '</div>' +
        '<div>' + (S.t(s, 'sub') ? '<p class="sub" style="margin:0 0 22px">' + S.esc(S.t(s, 'sub')) + '</p>' : '') +
        nums(s.stats, 'col') + '</div></div>' + footnote(s) + '</div>';
    },
    pair: function (s) {
      var h = '<div class="sl ly-pair">' + '{{eye}}' +
        '<h2 class="sm">' + S.esc(S.t(s, 'title')) + '</h2>' +
        '<div class="body">';
      for (var k = 0; k < 2; k++) {
        h += '<div class="pane"><h3>' + S.esc(S.t(s.figs[k], 'head')) + '</h3>' + fig(s.figs[k]) + '</div>';
      }
      h += '</div>' + (s.mid ? '<div class="mid">' + S.esc(S.p(s.mid)) + '</div>' : '');
      return h + footnote(s) + '</div>';
    },
    trio: function (s) {
      var h = '<div class="sl ly-trio">' + '{{eye}}' +
        '<h2 class="sm">' + S.esc(S.t(s, 'title')) + '</h2>' +
        '<div class="body">';
      for (var k = 0; k < s.figs.length; k++) {
        var f = s.figs[k];
        h += '<div class="pane"><h3>' + S.esc(S.t(f, 'head')) + '</h3>' + fig(f) +
          (f.n ? '<div class="n">' + f.n + '</div>' : '') +
          (S.t(f, 'note') ? '<p>' + S.esc(S.t(f, 'note')) + '</p>' : '') + '</div>';
      }
      return h + '</div>' + footnote(s) + '</div>';
    },
    ledger: function (s) {
      function col(c, cls) {
        var h = '<div class="col ' + cls + '"><h3>' + S.esc(S.t(c, 'head')) + '</h3><ul>';
        for (var k = 0; k < c.items.length; k++) h += '<li>' + S.t(c.items[k], 'text') + '</li>';
        return h + '</ul></div>';
      }
      return '<div class="sl ly-ledger">' + '{{eye}}' +
        '<h2 class="sm">' + S.esc(S.t(s, 'title')) + '</h2>' +
        '<div class="body">' + col(s.done, 'done') + col(s.open, 'open') + '</div>' +
        (S.t(s, 'ask') ? '<p class="ask">' + S.esc(S.t(s, 'ask')) + '</p>' : '') + '</div>';
    }
  };

  /* ── render ── */
  function draw() {
    var s = D.slides[i];
    canvas.innerHTML = LY[s.layout](s).replace('{{eye}}', eyebrow(s, i));
    S.applyStatic(canvas);
    fit();

    var sp = D.speakers[s.speaker];
    notes.innerHTML =
      '<div class="who">' + S.esc(S.p(sp.name)) + ' · ' + S.clock(s.budget) +
      ' · ' + S.esc(S.t(s, 'kicker')) + '</div>' +
      '<p class="say">' + S.t(s, 'say') + '</p>' +
      (S.t(s, 'watch') ? '<p class="cav"><b>' + (S.lang === 'zh' ? '注意：' : 'Watch: ') + '</b>' +
        S.esc(S.t(s, 'watch')) + '</p>' : '');

    var bs = rail.children;
    for (var k = 0; k < bs.length; k++) {
      bs[k].setAttribute('aria-current', String(k === i));
      bs[k].className = k < i ? 'past' : '';
    }
    showTime();
  }

  function go(n) {
    i = Math.max(0, Math.min(D.slides.length - 1, n));
    draw();
  }

  /* ── the clock ── */
  function budgetTo(n) {
    var a = 0; for (var k = 0; k < n; k++) a += D.slides[k].budget; return a;
  }
  function showTime() {
    var due = budgetTo(i + 1);
    tc.textContent = S.clock(elapsed) + ' / ' + S.clock(total);
    tc.className = 'tc' + (elapsed > total ? ' over' : elapsed > due ? ' warn' : '');
    tc.title = (S.lang === 'zh' ? '本張應在 ' : 'this slide should end by ') + S.clock(due);
  }
  function startStop() {
    running = !running;
    document.getElementById('run').setAttribute('data-en', running ? 'Pause' : 'Start the clock');
    document.getElementById('run').setAttribute('data-zh', running ? '暫停' : '開始計時');
    S.applyStatic(document.getElementById('run').parentNode);
    last = Date.now();
    if (running && !tick) {
      tick = setInterval(function () {
        if (!running) return;
        var now = Date.now(); elapsed += (now - last) / 1000; last = now; showTime();
      }, 250);
    }
  }
  function reset() { elapsed = 0; running = false; if (tick) { clearInterval(tick); tick = null; } startStop(); startStop(); showTime(); }

  /* ── overview ── */
  function overview() {
    var ov = document.createElement('div');
    ov.className = 'ov';
    var h = '<div class="wrap"><h2 data-en="All six slides" data-zh="六張投影片總覽"></h2><div class="ovg">';
    for (var k = 0; k < D.slides.length; k++) {
      var s = D.slides[k];
      h += '<button class="ovc" data-i="' + k + '"><span class="n">' + (k + 1) + ' · ' +
        S.clock(s.budget) + '</span><h3>' + S.esc(S.t(s, 'title')) + '</h3>' +
        '<p>' + S.esc(S.t(s, 'kicker')) + '</p>' +
        '<div class="b">' + S.esc(S.p(D.speakers[s.speaker].name)) + '</div></button>';
    }
    ov.innerHTML = h + '</div></div>';
    document.body.appendChild(ov);
    S.applyStatic(ov);
    ov.addEventListener('click', function (e) {
      var b = e.target.closest('.ovc');
      if (b) { go(+b.getAttribute('data-i')); }
      ov.remove();
    });
  }

  /* ── wiring ── */
  for (var k = 0; k < D.slides.length; k++) {
    var b = document.createElement('button');
    /* grow in proportion to the budget rather than a width percentage, so the
       3px gaps between segments do not push the rail past 100% */
    b.style.flex = '1 1 0';
    b.style.flexGrow = String(D.slides[k].budget);
    b.setAttribute('data-i', k);
    b.setAttribute('aria-label', 'slide ' + (k + 1));
    rail.appendChild(b);
  }
  rail.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-i')) go(+e.target.getAttribute('data-i'));
  });
  document.getElementById('prev').addEventListener('click', function () { go(i - 1); });
  document.getElementById('next').addEventListener('click', function () { go(i + 1); });
  document.getElementById('run').addEventListener('click', startStop);
  document.getElementById('rst').addEventListener('click', reset);
  document.getElementById('ovb').addEventListener('click', overview);
  document.getElementById('fs').addEventListener('click', function () {
    var st = document.getElementById('stage');
    if (document.fullscreenElement) document.exitFullscreen();
    else if (st.requestFullscreen) st.requestFullscreen();
  });
  frame.addEventListener('click', function (e) {
    go(e.offsetX < frame.clientWidth * 0.22 ? i - 1 : i + 1);
  });

  document.addEventListener('keydown', function (e) {
    if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    var ov = document.querySelector('.ov');
    if (e.key === 'Escape') { if (ov) ov.remove(); else overview(); return; }
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); go(i + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(i - 1); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(D.slides.length - 1);
    else if (e.key === 't' || e.key === 'T') startStop();
    else if (e.key === 'f' || e.key === 'F') document.getElementById('fs').click();
  });

  S.onLang(draw);
  document.addEventListener('DOMContentLoaded', function () { draw(); });
  if (document.readyState !== 'loading') draw();
})();
