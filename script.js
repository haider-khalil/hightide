/* ============================================================
   High Tide — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- Hero flavor carousel (label cycles through 4 flavors) ---- */
  var flavors = ['ISLAND PUNCH', 'CITRUS SURGE', 'LEMON LIME SPLASH', 'RIPTIDE COLA'];
  var heroIndex = 0; // default visible state = ISLAND PUNCH
  var pill = document.getElementById('flavorPill');
  var heroPrev = document.querySelector('.hero-prev');
  var heroNext = document.querySelector('.hero-next');

  function renderFlavor() {
    if (pill) pill.textContent = flavors[heroIndex];
  }
  function heroStep(dir) {
    heroIndex = (heroIndex + dir + flavors.length) % flavors.length;
    renderFlavor();
  }
  if (heroPrev) heroPrev.addEventListener('click', function () { heroStep(-1); });
  if (heroNext) heroNext.addEventListener('click', function () { heroStep(1); });
  renderFlavor();

  /* ---- Product strip carousel (advance the row of cells) ---- */
  var strip = document.getElementById('productStrip');
  var stripPrev = document.querySelector('.strip-prev');
  var stripNext = document.querySelector('.strip-next');
  var cellWidth = 360;
  var stripIndex = 0;
  var cellCount = strip ? strip.querySelectorAll('.product-cell').length : 0;

  function renderStrip() {
    if (!strip) return;
    var cells = strip.querySelectorAll('.product-cell');
    for (var i = 0; i < cells.length; i++) {
      var pos = (i - stripIndex + cellCount) % cellCount;
      cells[i].style.order = pos;
    }
    // subtle slide feedback
    strip.style.transition = 'transform .25s ease';
    strip.style.transform = 'translateX(0)';
  }
  function stripStep(dir) {
    if (!cellCount) return;
    stripIndex = (stripIndex + dir + cellCount) % cellCount;
    renderStrip();
  }
  if (stripPrev) stripPrev.addEventListener('click', function () { stripStep(-1); });
  if (stripNext) stripNext.addEventListener('click', function () { stripStep(1); });

  /* ---- Responsive: scale the 1440 design frame fluidly ---- */
  var scaler = document.querySelector('.scaler');
  var DESIGN_W = 1440;
  var DESIGN_H = 5281;

  function fit() {
    if (!scaler) return;
    var w = window.innerWidth;
    if (w >= DESIGN_W) {
      scaler.style.transform = 'none';
      scaler.style.height = '';
      return;
    }
    var scale = w / DESIGN_W;
    scaler.style.transform = 'scale(' + scale + ')';
    // collapse the leftover whitespace created by transform scaling
    scaler.style.height = (DESIGN_H * scale) + 'px';
  }
  window.addEventListener('resize', fit);
  fit();
})();
