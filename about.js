/* ============================================================
   High Tide — About Us page interactions
   Scales the 1440 design canvas to fill the browser width (same
   technique as index.html / the product pages). Below 768px the
   CSS drops the transform and the page reflows to a stacked layout.
   ============================================================ */
(function () {
  'use strict';

  var scaler = document.querySelector('.scaler-about');
  var stage = document.querySelector('.stage-about');
  var DESIGN_W = 1440;
  var MOBILE_BP = 768;

  /* ---- Mobile hamburger menu ---- */
  var burger = document.getElementById('abBurger');
  var menu = document.getElementById('abMenu');
  var menuClose = document.getElementById('abMenuClose');

  function setMenu(open) {
    if (!menu || !burger) return;
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    // lock page scroll while the drawer is open
    document.documentElement.style.overflow = open ? 'hidden' : '';
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function () { setMenu(true); });
  if (menuClose) menuClose.addEventListener('click', function () { setMenu(false); });
  // close after tapping a menu link
  if (menu) {
    var links = menu.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () { setMenu(false); });
    }
  }
  // close on Escape, and whenever we grow back to desktop
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth >= MOBILE_BP) setMenu(false); });

  function fit() {
    if (!scaler || !stage) return;

    if (window.innerWidth < MOBILE_BP) {
      // CSS handles the stacked mobile layout — undo any scaling.
      stage.style.transform = 'none';
      scaler.style.height = 'auto';
      return;
    }

    var scale = window.innerWidth / DESIGN_W;
    stage.style.transform = 'scale(' + scale + ')';
    // offsetHeight is the un-scaled layout height; match the frame to the
    // scaled height so there's no leftover whitespace or clipping.
    scaler.style.height = (stage.offsetHeight * scale) + 'px';
  }

  window.addEventListener('resize', fit);
  window.addEventListener('load', fit); // re-fit once fonts/images settle height
  fit();
})();
