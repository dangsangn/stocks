/* Bộ nhân vật và tiện ích chung "Heo Đất & Cú Già".
   Tự khởi tạo khi trang tải xong:
   - [data-char="pig:happy"] / [data-char="owl:talk"]  → vẽ nhân vật
   - .mcq[data-answer]                                → câu đố một đáp án đúng
   - .flip                                            → thẻ lật (thuật ngữ)
   - ul#tasks[data-module="01"]                       → checklist bài tập, lưu tiến độ, cho Heo ăn xu
   Trang riêng gọi Truyen.pig(), Truyen.owl(), Truyen.money()... trong script của mình. */
(function () {
  var PIG_MOODS = ['happy', 'worried', 'wow', 'proud', 'sad'];
  var OWL_MOODS = ['talk', 'stern', 'smile'];

  function pig(mood) {
    var mouth = {
      happy: '<path class="st nofill" d="M88 74 q7 7 14 0"/>',
      worried: '<path class="st nofill" d="M88 79 q7 -6 14 0"/><path class="c-drop st" style="stroke-width:2" d="M74 22 q-6 9 0 12 q6 -3 0 -12z"/><path class="st nofill" d="M86 37 l12 4"/>',
      wow: '<ellipse class="c-line" cx="95" cy="77" rx="4.5" ry="5.5"/>',
      proud: '<path class="st nofill" d="M86 72 q9 10 18 0"/><path class="st nofill" d="M86 38 q6 -5 12 0"/>',
      sad: '<path class="st nofill" d="M88 80 q7 -7 14 0"/><path class="c-drop" d="M90 52 q-3 6 0 8 q3 -2 0 -8z"/><path class="st nofill" d="M86 40 l12 -3"/>'
    }[mood] || '';
    return '<svg viewBox="0 0 130 100" aria-hidden="true">' +
      '<path class="st nofill" d="M20 52 c-10 -2 -12 -12 -4 -14 c6 -1 6 7 0 7"/>' +
      '<rect class="c-pig-deep st" x="30" y="76" width="12" height="18" rx="4"/><rect class="c-pig-deep st" x="46" y="78" width="12" height="16" rx="4"/>' +
      '<rect class="c-pig-deep st" x="72" y="78" width="12" height="16" rx="4"/><rect class="c-pig-deep st" x="88" y="76" width="12" height="18" rx="4"/>' +
      '<ellipse class="c-pig st" cx="64" cy="56" rx="46" ry="34"/>' +
      '<rect class="c-line" x="38" y="25" width="22" height="5" rx="2.5"/>' +
      '<path class="c-pig-deep st" d="M72 28 L74 6 L90 24 Z"/><path class="c-pig-deep st" d="M90 30 L104 12 L106 36 Z"/>' +
      '<ellipse class="c-pig-deep st" cx="112" cy="60" rx="12" ry="11"/>' +
      '<ellipse class="c-line" cx="108" cy="60" rx="2" ry="3.5"/><ellipse class="c-line" cx="116" cy="60" rx="2" ry="3.5"/>' +
      '<circle class="c-line" cx="92" cy="47" r="5"/><circle class="c-white" cx="93.6" cy="45.4" r="1.7"/>' +
      '<ellipse class="c-blush" cx="96" cy="64" rx="6" ry="4"/>' + mouth + '</svg>';
  }

  function owl(mood) {
    var eyes = mood === 'smile'
      ? '<circle class="c-white st" cx="39" cy="62" r="14"/><circle class="c-white st" cx="71" cy="62" r="14"/>' +
        '<path class="st nofill" d="M32 64 q7 -8 14 0"/><path class="st nofill" d="M64 64 q7 -8 14 0"/>'
      : '<circle class="c-white st" cx="39" cy="62" r="14"/><circle class="c-white st" cx="71" cy="62" r="14"/>' +
        '<circle class="c-line" cx="41" cy="63" r="6"/><circle class="c-line" cx="69" cy="63" r="6"/>' +
        '<circle class="c-white" cx="43" cy="61" r="2"/><circle class="c-white" cx="71" cy="61" r="2"/>';
    var brows = mood === 'stern' ? '<path class="st nofill" d="M26 44 l22 7"/><path class="st nofill" d="M84 44 l-22 7"/>' : '';
    return '<svg viewBox="0 0 110 132" aria-hidden="true">' +
      '<path class="c-owl-deep st" d="M17 78 q-8 24 14 36 z"/><path class="c-owl-deep st" d="M93 78 q8 24 -14 36 z"/>' +
      '<path class="c-owl st" d="M24 46 L20 24 L40 38 Z"/><path class="c-owl st" d="M86 46 L90 24 L70 38 Z"/>' +
      '<ellipse class="c-owl st" cx="55" cy="82" rx="38" ry="44"/>' +
      '<ellipse class="c-owl-light" cx="55" cy="96" rx="23" ry="25"/>' +
      '<path class="st nofill" style="stroke-width:2" d="M46 92 l4 4 l4 -4 M56 92 l4 4 l4 -4 M51 104 l4 4 l4 -4"/>' +
      eyes + '<path class="st nofill" d="M52 60 q3 -3 6 0"/>' + brows +
      '<path class="c-beak st" d="M49 75 L61 75 L55 85 Z"/>' +
      '<ellipse class="c-beak st" cx="44" cy="126" rx="7" ry="4"/><ellipse class="c-beak st" cx="66" cy="126" rx="7" ry="4"/>' +
      '<path class="c-line" d="M25 26 L55 12 L85 26 L55 38 Z"/><path class="st nofill" style="stroke-width:2" d="M80 25 v16"/><circle class="c-beak" cx="80" cy="43" r="3.5"/>' +
      '</svg>';
  }

  function draw(el, spec) {
    var p = String(spec).split(':');
    el.innerHTML = p[0] === 'owl' ? owl(p[1] || 'talk') : pig(p[1] || 'happy');
  }

  // ---------- định dạng số kiểu Việt Nam ----------
  function trim(x, d) {
    var s = x.toFixed(d);
    if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
    return s.replace('.', ',');
  }
  function money(v) {
    var s = v < 0 ? '−' : '', a = Math.abs(v);
    if (a >= 1e9) return s + trim(a / 1e9, 2) + ' tỷ';
    if (a >= 1e6) return s + trim(a / 1e6, 1) + ' triệu';
    return s + Math.round(a).toLocaleString('vi-VN') + ' đ';
  }
  function pct(x, d) { return trim(x, d == null ? 1 : d) + '%'; }
  function num(x, d) { return Number(x.toFixed(d || 0)).toLocaleString('vi-VN'); }
  function niceStep(max) {
    if (!(max > 0)) return 1;
    var raw = max / 4, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p;
  }
  function store(key, val) {
    try {
      if (arguments.length > 1) { localStorage.setItem(key, JSON.stringify(val)); return val; }
      return JSON.parse(localStorage.getItem(key) || 'null');
    } catch (e) { return null; }
  }

  // ---------- câu đố ----------
  function initMcq(box) {
    var ans = +box.dataset.answer;
    var fb = box.querySelector('.mcq-fb') || box.appendChild(Object.assign(document.createElement('div'), { className: 'mcq-fb' }));
    var btns = box.querySelectorAll('.opt');
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () {
        btns.forEach(function (o) { o.classList.remove('right', 'wrong'); o.setAttribute('aria-pressed', 'false'); });
        var ok = i === ans;
        b.classList.add(ok ? 'right' : 'wrong');
        b.setAttribute('aria-pressed', 'true');
        var msg = ok ? (box.dataset.right || 'Chính xác!') : (box.dataset.wrong || 'Chưa đúng, thử lại nhé.');
        fb.innerHTML = '<span class="char">' + (ok ? pig('proud') : owl('stern')) + '</span><p>' + msg + '</p>';
      });
    });
  }

  // ---------- thẻ lật ----------
  function initFlip(b) {
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', function () {
      b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
    });
  }

  // ---------- bài tập: cho Heo ăn xu ----------
  function initTasks(list) {
    var key = 'heo-dat:tasks:' + list.dataset.module;
    var saved = store(key) || {};
    var boxes = list.querySelectorAll('input[type=checkbox]');
    var pigEl = document.getElementById('feedPig'), textEl = document.getElementById('feedText'), barEl = document.getElementById('feedBar');
    function render(save) {
      var done = 0, checked = {};
      boxes.forEach(function (b) { if (b.checked) done++; checked[b.id] = b.checked; });
      if (save) store(key, { checked: checked, done: done, total: boxes.length });
      if (barEl) barEl.style.width = (done / boxes.length * 100) + '%';
      if (pigEl) pigEl.innerHTML = pig(done === boxes.length ? 'proud' : done === 0 ? 'worried' : done * 2 >= boxes.length ? 'happy' : 'wow');
      if (textEl) textEl.textContent = done === boxes.length
        ? 'Heo no căng! Xong module này rồi.'
        : 'Heo đã ăn ' + done + '/' + boxes.length + ' đồng xu';
    }
    boxes.forEach(function (b) {
      if (saved && saved.checked && saved.checked[b.id]) b.checked = true;
      b.addEventListener('change', function () { render(true); });
    });
    render(false);
  }

  function init() {
    document.querySelectorAll('[data-char]').forEach(function (el) { draw(el, el.dataset.char); });
    document.querySelectorAll('.mcq[data-answer]').forEach(initMcq);
    document.querySelectorAll('.flip').forEach(initFlip);
    document.querySelectorAll('ul#tasks[data-module]').forEach(initTasks);
  }

  window.Truyen = {
    pig: pig, owl: owl, draw: draw, PIG_MOODS: PIG_MOODS, OWL_MOODS: OWL_MOODS,
    trim: trim, money: money, pct: pct, num: num, niceStep: niceStep, store: store,
    $: function (id) { return document.getElementById(id); }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
