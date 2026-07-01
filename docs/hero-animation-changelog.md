# High Tide — Hero Animation Changelog

Documents the current state of three animation systems: the hero wave-wipe / glow overlay, bubble particle effects, and IntersectionObserver scroll reveals. Each section describes what is implemented in the code today, what is partially in place, and what is not yet built.

---

## 1. Hero Glow Overlay (`.hero-band`)

**Status: Implemented — static CSS, no keyframe animation**

### What's in the code

A `<div class="hero-band">` element sits between the header and hero image in `index.html` (line 28). It is a purely CSS decorative layer — no image, no JS, no animation loop.

**CSS (`styles.css` lines 94–106):**
```css
.hero-band {
  position: absolute;
  left: -120px;
  top: 330px;
  width: 1680px;
  height: 200px;
  z-index: 5;
  pointer-events: none;
  background: linear-gradient(to bottom,
    rgba(251,236,199,0)    0%,
    rgba(255,249,232,0.55) 26%,
    rgba(255,253,248,0.98) 50%,
    rgba(255,248,226,0.42) 72%,
    rgba(251,236,199,0)    100%);
  filter: blur(11px);
}
```

This creates a **luminous bloom band** — a near-white, cream-tinted horizontal strip that sits at the boundary where the cream background meets the top edge of the hero collage image. The `blur(11px)` softens it into an atmospheric glow rather than a hard line. The 1680 px width with `left: -120px` intentionally bleeds the element 120 px past both edges of the 1440 px canvas to prevent hard side cutoff.

A 1.5 px teal horizontal rule (`.hero-rule`) sits at `top: 457px`, just below the band, reinforcing the visual horizon line between the cream area and the image.

### What is NOT implemented

- No CSS `@keyframes` animation — the band is static.
- No wave motion, sweep, or wipe transition.
- An `assets/hero-band.webp` file exists in the assets folder but is never referenced. It may have been an earlier image-based version of this effect.

### To add animation

A wave-wipe entry could be added with:
```css
@keyframes hero-band-wipe {
  from { transform: scaleX(0); opacity: 0; }
  to   { transform: scaleX(1); opacity: 1; }
}
.hero-band {
  animation: hero-band-wipe 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: left center;
}
```

---

## 2. Bubble Particle Effects

**Status: Partially implemented — static SVG positioning on the About page; commented out on the homepage**

### Homepage (`index.html`)

A bubble system with 11 `<span class="bubble">` elements was authored in the HTML, placed inside the teal feature section. **The entire block is commented out** (lines 77–90 of `index.html`).

The CSS classes exist and are live in `styles.css`:
```css
.bubbles { position: absolute; inset: 0; pointer-events: none; }
.bubble  { position: absolute; border: 2px solid var(--offwhite); border-radius: 50%; opacity: .85; }
```

Each bubble was a `<span>` with inline `style="left:…; top:…; width:…; height:…;"` giving them specific positions and sizes. There is no JS driving movement, opacity fade, or rise animation — they were intended as static decorative circles.

### About page (`about.html`)

Bubbles are **active** on the About page. 11 `<img>` elements inside `.ab-bubbles` load individual SVG files (`b3.svg` through `b14.svg`) and are absolutely positioned via inline styles across the orange feature band.

```html
<div class="ab-bubbles" aria-hidden="true">
  <img class="bub" style="left:28px; top:150px; width:92px; height:92px;" src="assets/b6.svg" alt="" />
  <!-- ... 10 more -->
</div>
```

CSS:
```css
.ab-bubbles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.ab-bubbles .bub { position: absolute; opacity: .9; }
```

These are **static decorative elements** — circle outlines baked into SVG files, positioned to frame the left and right edges of the feature band. On mobile (`max-width: 767.98px`) the entire `.ab-bubbles` div is `display: none`.

### What is NOT implemented

- No JavaScript particle system.
- No rise, float, or pop animation on any bubble.
- No canvas-based or CSS-animation-based bubble generation.

### To add rise animation

A CSS-only floating effect could be applied to the `.bub` elements:
```css
@keyframes bubble-rise {
  0%   { transform: translateY(0) scale(1); opacity: .9; }
  100% { transform: translateY(-80px) scale(1.05); opacity: 0; }
}
.ab-bubbles .bub {
  animation: bubble-rise 4s ease-in infinite;
  animation-delay: calc(var(--i, 0) * 0.4s);
}
```
Each bubble would need a `--i` CSS variable set via inline style for staggered timing.

---

## 3. IntersectionObserver Scroll Reveals

**Status: Not implemented — no IntersectionObserver code exists anywhere in the project**

None of the five JS files (`script.js`, `about.js`, `island-punch.js`, `citrus-surge.js`, `lemon-lime-splash.js`, `riptide-cola.js`) contain any reference to `IntersectionObserver`, `observe()`, or scroll-triggered class toggling.

No CSS classes for reveal states (e.g., `.revealed`, `.is-visible`, `.fade-in`) exist in any stylesheet.

### Foundation for adding it

Because the homepage uses an absolutely-positioned pixel-canvas with a fixed 5281 px design height and a `transform: scale()` applied to the stage, IntersectionObserver will observe elements in their **pre-scale layout coordinates** (which differ from what appears on screen). This needs to be accounted for.

A working approach for the scaled canvas:

```js
// Compensate for the scale transform when thresholding visibility
var io = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(function(el) {
  io.observe(el);
});
```

CSS reveal classes to pair with it:
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: none;
}
```

The product pages (Island Punch, Citrus Surge, etc.) use normal document flow rather than a fixed canvas, so IntersectionObserver would work there without any scaling compensation.

---

## Summary Table

| Feature | Homepage | About Page | Product Pages |
|---|---|---|---|
| Hero glow band | ✅ Static CSS | — | — |
| Bubble markup | ⚠️ Commented out | ✅ Static SVGs | — |
| Bubble animation | ❌ None | ❌ None | — |
| IntersectionObserver | ❌ Not built | ❌ Not built | ❌ Not built |
| Wave/wipe keyframe | ❌ Not built | — | — |
