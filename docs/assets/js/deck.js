/* The deck engine.
 *
 * Slides are data (data/deck.js). Five layouts, each a small render function.
 * Three capabilities the data can use:
 *
 *   crop  [x, y, w, h]   normalized region of the source image to show, so a
 *                        three-panel wiki figure can be presented one panel at
 *                        a time at full size. Implemented with a background
 *                        image, which needs no natural dimensions.
 *   marks [{...}]        annotation placed in normalized figure coordinates:
 *                        a ring on the thing being discussed, a label naming it
 *                        where it happens, a band over a region.
 *   f     n              a fragment: hidden until the speaker reaches step n.
 *                        Right arrow advances the fragment, then the slide.
 */
(function () {
  'use strict';

  var S = window.Site, D = window.DECK;
  var frame = document.getElementById('frame');
  var canvas = document.getElementById('canvas');
  var rail = document.getElementById('rail');
  var notes = document.getElementById('notes');
  var tc = document.getElementById('tc');
  var fc = document.getElementById('fc');
  var i = 0, step = 0, running = false, elapsed = 0, last = 0, tick = null;

  var total = D.slides.reduce(function (a, s) { return a + s.budget; }, 0);

  function maxStep(s) { return s.steps ? s.steps.length - 1 : 0; }

  /* ── scale the canvas into the frame ── */
  function fit() {
    var w = frame.clientWidth;
    canvas.style.transform = 'scale(' + (w / 1280) + ')';
    if (document.fullscreenElement === document.getElementById('stage')) {
      var h = frame.clientHeight, k = Math.min(w / 1280, h / 720);
      canvas.style.transform = 'translate(' + ((w - 1280 * k) / 2) + 'px,' +
        ((h - 720 * k) / 2) + 'px) scale(' + k + ')';
    }
  }
  window.addEventListener('resize', fit);
  document.addEventListener('fullscreenchange', fit);

  /* ── figure pieces ── */

  /* A crop is shown in a box whose aspect ratio is the crop's own, so the figure
     is never cropped a second time by the slot it sits in. That needs the source
     file's pixel size, which the data carries as `nat`. Inside the box the image
     is scaled by 1/w and 1/h and shifted by -x and -y. */
  function cropBox(f) {
    var c = f.crop || [0, 0, 1, 1], x = c[0], y = c[1], w = c[2], h = c[3];
    var ar = (f.nat ? (f.nat[0] * w) / (f.nat[1] * h) : 16 / 9).toFixed(4);
    return '<span class="cropbox" style="aspect-ratio:' + ar + '">' +
      '<img src="' + f.src + '" alt="' + S.esc(S.t(f, 'alt')) + '" loading="eager" style="' +
        'width:' + (100 / w).toFixed(3) + '%;height:' + (100 / h).toFixed(3) + '%;' +
        'left:' + (-x * 100 / w).toFixed(3) + '%;top:' + (-y * 100 / h).toFixed(3) + '%">' +
      marks(f.marks) + '</span>';
  }

  function marks(list) {
    if (!list || !list.length) return '';
    var h = '<div class="marks">';
    for (var k = 0; k < list.length; k++) {
      var m = list[k], cls = m.warn ? ' warn' : '';
      var pos = 'left:' + m.x + '%;top:' + m.y + '%;';
      if (m.kind === 'ring') {
        h += '<i class="mk mk-ring' + cls + '" style="' + pos +
             'width:' + (m.w || 10) + '%;height:' + (m.h || 18) + '%"></i>';
      } else if (m.kind === 'band') {
        h += '<i class="mk mk-band' + cls + '" style="left:' + m.x + '%;top:' + m.y + '%;' +
             'width:' + (m.w || 8) + '%;height:' + (m.h || 70) + '%"></i>';
      } else if (m.kind === 'lead') {
        h += '<i class="mk mk-lead' + cls + '" style="' + pos +
             'width:' + (m.w || 1.5) + 'px;height:' + (m.h || 8) + '%"></i>';
      } else {
        h += '<span class="mk mk-lab' + cls + (m.quiet ? ' quiet' : '') +
             (m.multi ? ' multi' : '') + '" style="' + pos + '">' +
             S.esc(S.t(m, 't')) + '</span>';
      }
    }
    return h + '</div>';
  }

  function fig(f, opts) {
    opts = opts || {};
    var cap = opts.nocap ? '' : S.t(f, 'cap');
    /* Marks are placed in the coordinates of the IMAGE, so any marked figure has
       to be drawn in a box that is exactly the image: a letterboxed `contain`
       image would put the mark layer on the box instead and every coordinate
       would drift. A `cover` figure is the exception, because there the box is
       what the viewer sees. Hence: crop, or marks with a known size. */
    var boxed = f.crop || (f.marks && f.nat && !f.cover);
    var inner = boxed
      ? cropBox(f)
      : '<img src="' + f.src + '" alt="' + S.esc(S.t(f, 'alt')) + '" loading="eager">' + marks(f.marks);
    return '<div class="figwrap">' +
      '<div class="shot' + (f.cover ? ' cover' : '') + (boxed ? ' cropped' : '') + '">' +
        inner +
      '</div>' +
      (cap ? '<p class="figcap">' + S.esc(cap) + '</p>' : '') +
      '</div>';
  }

  function nums(list, cls) {
    var h = '<div class="nums ' + (cls || '') + '">';
    for (var k = 0; k < list.length; k++) {
      var n = list[k];
      h += '<div class="num"' + (n.f ? ' data-f="' + n.f + '"' : '') + '>' +
           '<div class="v">' + n.v + '</div>' +
           '<div class="l">' + S.esc(S.t(n, 'l')) + '</div></div>';
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
    return '<p class="foot-note"><b>' + (S.lang === 'zh' ? '要說出口：' : 'Say it:') +
      '</b><span>' + S.esc(c) + '</span></p>';
  }

  /* ── layouts ── */
  var LY = {
    hero: function (s) {
      return '<div class="sl ly-hero">{{eye}}' +
        '<h2>' + S.t(s, 'title') + '</h2>' +
        (S.t(s, 'sub') ? '<p class="sub" data-f="2">' + S.esc(S.t(s, 'sub')) + '</p>' : '') +
        '<div class="art">' + fig(s.figs[0]) + '</div>' + footnote(s) + '</div>';
    },

    evidence: function (s) {
      var strip = '';
      if (s.strip) {
        strip = '<div class="strip" data-f="' + (s.strip.f || 1) + '">';
        for (var k = 0; k < s.strip.figs.length; k++) {
          var f = s.strip.figs[k];
          strip += '<div class="figwrap"><h4>' + S.esc(S.t(f, 'head')) + '</h4>' +
            fig(f, { nocap: true }).replace('<div class="figwrap">', '').replace(/<\/div>$/, '') +
            '</div>';
        }
        strip += '</div>';
      }
      return '<div class="sl ly-evidence">{{eye}}' +
        '<h2 class="sm">' + S.t(s, 'title') + '</h2>' +
        '<div class="body"><div class="main">' + fig(s.figs[0]) + strip + '</div>' +
        '<div>' + nums(s.stats, 'col') +
          (S.t(s, 'railNote') ? '<p class="rail-note" data-f="2">' + S.esc(S.t(s, 'railNote')) + '</p>' : '') +
        '</div></div>' + footnote(s) + '</div>';
    },

    pair: function (s) {
      var h = '<div class="sl ly-pair">{{eye}}' +
        '<h2 class="sm">' + S.t(s, 'title') + '</h2><div class="body">';
      for (var k = 0; k < 2; k++) {
        var f = s.figs[k];
        h += '<div class="pane"' + (f.f ? ' data-f="' + f.f + '"' : '') + '>' +
          '<h3>' + S.esc(S.t(f, 'head')) + '</h3>' + fig(f) + '</div>';
      }
      h += '</div>' + (s.mid ? '<div class="mid" data-f="' + (s.midF || 1) + '">' +
        S.esc(S.p(s.mid)) + '</div>' : '');
      return h + footnote(s) + '</div>';
    },

    trio: function (s) {
      var h = '<div class="sl ly-trio">{{eye}}' +
        '<h2 class="sm">' + S.t(s, 'title') + '</h2><div class="body">';
      for (var k = 0; k < s.figs.length; k++) {
        var f = s.figs[k];
        h += '<div class="pane"' + (f.f ? ' data-f="' + f.f + '"' : '') + '>' +
          '<h3>' + (s.numbered === false ? '' : '<i class="s">' + (k + 1) + '</i>') +
          S.esc(S.t(f, 'head')) + '</h3>' + fig(f, { nocap: true }) +
          (f.n ? '<div class="n">' + f.n + '</div>' : '') +
          (S.t(f, 'note') ? '<p>' + S.esc(S.t(f, 'note')) + '</p>' : '') + '</div>';
      }
      return h + '</div>' + footnote(s) + '</div>';
    },

    ledger: function (s) {
      function col(c, cls, fr) {
        var h = '<div class="col ' + cls + '"' + (fr ? ' data-f="' + fr + '"' : '') +
          '><h3>' + S.esc(S.t(c, 'head')) + '</h3><ul>';
        for (var k = 0; k < c.items.length; k++) h += '<li>' + S.t(c.items[k], 'text') + '</li>';
        return h + '</ul></div>';
      }
      return '<div class="sl ly-ledger">{{eye}}' +
        '<h2 class="sm">' + S.t(s, 'title') + '</h2>' +
        '<div class="body">' + col(s.done, 'done') + col(s.open, 'open', 1) + '</div>' +
        (S.t(s, 'ask') ? '<p class="ask" data-f="2">' + S.esc(S.t(s, 'ask')) + '</p>' : '') + '</div>';
    }
  };

  /* ── fragments ── */
  function applySteps() {
    var nodes = canvas.querySelectorAll('[data-f]');
    for (var k = 0; k < nodes.length; k++) {
      /* `f` is a beat number, which is 1-based; `step` is 0-based */
      nodes[k].classList.toggle('off', +nodes[k].getAttribute('data-f') > step + 1);
    }
    var root = canvas.firstElementChild;
    if (root) root.setAttribute('data-step', String(step));
    var m = maxStep(D.slides[i]);
    fc.textContent = m ? (S.lang === 'zh' ? '節拍 ' : 'beat ') + (step + 1) + '/' + (m + 1) : '';
    if (m) {
      var beats = D.slides[i].steps;
      var b = notes.querySelector('.beat');
      if (b) b.innerHTML = '<b>' + (S.lang === 'zh' ? '這個節拍：' : 'This beat: ') + '</b>' +
        S.esc(S.p(beats[Math.min(step, beats.length - 1)]));
    }
  }

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
        S.esc(S.t(s, 'watch')) + '</p>' : '') +
      (s.steps ? '<p class="beat"></p>' : '');

    var bs = rail.children;
    for (var k = 0; k < bs.length; k++) {
      bs[k].setAttribute('aria-current', String(k === i));
      bs[k].className = k < i ? 'past' : '';
    }
    applySteps();
    showTime();
  }

  function go(n, atEnd) {
    n = Math.max(0, Math.min(D.slides.length - 1, n));
    if (n === i && step === (atEnd ? maxStep(D.slides[i]) : 0)) return;
    i = n;
    step = atEnd ? maxStep(D.slides[i]) : 0;
    draw();
  }

  function advance() {
    if (step < maxStep(D.slides[i])) { step++; applySteps(); return; }
    if (i < D.slides.length - 1) go(i + 1);
  }
  function back() {
    if (step > 0) { step--; applySteps(); return; }
    if (i > 0) go(i - 1, true);
  }

  /* ── the clock ── */
  function budgetTo(n) { var a = 0; for (var k = 0; k < n; k++) a += D.slides[k].budget; return a; }
  function showTime() {
    var due = budgetTo(i + 1);
    tc.textContent = S.clock(elapsed) + ' / ' + S.clock(total);
    tc.className = 'tc' + (elapsed > total ? ' over' : elapsed > due ? ' warn' : '');
    tc.title = (S.lang === 'zh' ? '本張應在 ' : 'this slide should end by ') + S.clock(due);
  }
  function startStop() {
    running = !running;
    var b = document.getElementById('run');
    b.setAttribute('data-en', running ? 'Pause' : 'Start the clock');
    b.setAttribute('data-zh', running ? '暫停' : '開始計時');
    S.applyStatic(b.parentNode);
    last = Date.now();
    if (running && !tick) {
      tick = setInterval(function () {
        if (!running) return;
        var now = Date.now(); elapsed += (now - last) / 1000; last = now; showTime();
      }, 250);
    }
  }
  function reset() {
    elapsed = 0;
    if (running) startStop();
    showTime();
  }

  /* ── overview ── */
  function overview() {
    var ov = document.createElement('div');
    ov.className = 'ov';
    var h = '<div class="wrap"><h2 data-en="All six slides" data-zh="六張投影片總覽"></h2><div class="ovg">';
    for (var k = 0; k < D.slides.length; k++) {
      var s = D.slides[k];
      h += '<button class="ovc" data-i="' + k + '"><span class="n">' + (k + 1) + ' · ' +
        S.clock(s.budget) + (s.steps ? ' · ' + s.steps.length + (S.lang === 'zh' ? ' 拍' : ' beats') : '') +
        '</span><h3>' + S.esc(S.t(s, 'title').replace(/<[^>]*>/g, '')) + '</h3>' +
        '<p>' + S.esc(S.t(s, 'kicker')) + '</p>' +
        '<div class="b">' + S.esc(S.p(D.speakers[s.speaker].name)) + '</div></button>';
    }
    ov.innerHTML = h + '</div></div>';
    document.body.appendChild(ov);
    S.applyStatic(ov);
    ov.addEventListener('click', function (e) {
      var b = e.target.closest('.ovc');
      if (b) go(+b.getAttribute('data-i'));
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
  document.getElementById('prev').addEventListener('click', back);
  document.getElementById('next').addEventListener('click', advance);
  document.getElementById('run').addEventListener('click', startStop);
  document.getElementById('rst').addEventListener('click', reset);
  document.getElementById('ovb').addEventListener('click', overview);
  document.getElementById('fs').addEventListener('click', function () {
    var st = document.getElementById('stage');
    if (document.fullscreenElement) document.exitFullscreen();
    else if (st.requestFullscreen) st.requestFullscreen();
  });
  frame.addEventListener('click', function (e) {
    if (e.offsetX < frame.clientWidth * 0.22) back(); else advance();
  });

  document.addEventListener('keydown', function (e) {
    if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    var ov = document.querySelector('.ov');
    if (e.key === 'Escape') { if (ov) ov.remove(); else overview(); return; }
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); advance(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); back(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); go(i + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); go(i - 1); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(D.slides.length - 1);
    else if (e.key === 't' || e.key === 'T') startStop();
    else if (e.key === 'f' || e.key === 'F') document.getElementById('fs').click();
  });

  S.onLang(draw);
  document.addEventListener('DOMContentLoaded', function () { draw(); });
  if (document.readyState !== 'loading') draw();
})();
