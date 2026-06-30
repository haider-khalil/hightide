/* ============================================================
   High Tide — Island Punch
   Scale the fixed 1440 design canvas to fill the full browser
   width (same technique as index.html / script.js).
   ============================================================ */
(function () {
  'use strict';

  var scaler = document.querySelector('.scaler-product'); // outer clipping frame
  var stage  = document.querySelector('.stage-product');  // inner 1440 design canvas
  var DESIGN_W = 1440;
  var DESIGN_H = 3939; // measured content height at 1440 wide (header is commented out)
  var BREAKPOINT = 768; // below this, drop the canvas and let the page flow (mobile)

  function fit() {
    if (!scaler || !stage) return;
    // Mobile: clear the inline scaling styles so the CSS media query controls
    // a normal, reflowed layout at the device's real width.
    if (window.innerWidth < BREAKPOINT) {
      stage.style.transform = '';
      stage.style.width = '';
      scaler.style.height = '';
      return;
    }
    // Tablet/desktop: scale the 1440 canvas to span the full width.
    var scale = window.innerWidth / DESIGN_W;
    stage.style.transform = 'scale(' + scale + ')';
    stage.style.width = DESIGN_W + 'px'; // restore if returning from mobile
    // Frame height matches the scaled canvas so there's no leftover space / clipping.
    scaler.style.height = (DESIGN_H * scale) + 'px';
  }

  window.addEventListener('resize', fit);
  window.addEventListener('load', fit); // re-fit once fonts/images settle
  fit();

  /* ---- Flavor slider (arrows scroll the track one card at a time;
     swipe works natively via overflow-x). Uses offsetWidth (layout px)
     so it's correct even while the desktop canvas is transform-scaled. ---- */
  var track = document.getElementById('flavorTrack');
  var prevBtn = document.querySelector('.slider-prev');
  var nextBtn = document.querySelector('.slider-next');

  function cardStep() {
    var card = track && track.querySelector('.flavor-card');
    return card ? card.offsetWidth : 0;
  }
  function slide(dir) {
    if (track) track.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
  }
  if (prevBtn) prevBtn.addEventListener('click', function () { slide(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { slide(1); });
})();
