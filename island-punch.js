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
  var DESIGN_H = 3900; // design height at 1440 wide (matches the Figma canvas)

  function fit() {
    if (!scaler || !stage) return;
    // Scale the 1440 canvas to span the full width (up past 1440 and down below it).
    var scale = window.innerWidth / DESIGN_W;
    stage.style.transform = 'scale(' + scale + ')';
    // Frame height matches the scaled canvas so there's no leftover space / clipping.
    scaler.style.height = (DESIGN_H * scale) + 'px';
  }

  window.addEventListener('resize', fit);
  window.addEventListener('load', fit); // re-fit once fonts/images settle
  fit();
})();
