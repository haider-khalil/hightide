# High Tide — Project File Map

> Reference canvas: 1440 × 5281 px (homepage). All pages use a JS `scale()` technique to fill any browser width from this fixed canvas.

---

## HTML Pages

### `index.html` — Homepage
The main marketing page. Absolutely-positioned layout on a 1440 × 5281 px canvas, scaled to viewport width by `script.js`.

**Sections:**
- Header with logo, nav ("About Us", "Contact & FAQ"), "Reach Out" button
- Hero: large collage image (`hero-bg.webp`), heading "Sip Into Something Better", teal horizontal rule, flavor pill carousel (label only — no page navigation)
- Tagline bar
- Teal feature section: three-column feature box, Vegan starburst seal, warning badge oval; bubble markup is present in HTML but commented out
- Products section: four-cell product strip with cart buttons and prev/next arrows, "View All" button, reviews, "Thoughtfully Crafted" copy
- Footer: CTA, Tide Locator button, four-column links

**Assets loaded by CSS (`styles.css`):**
- `assets/fonts/SuperAmore.ttf` — custom display font
- `assets/teal-bg.webp` — teal feature section background
- `assets/footer-bg.webp` — footer background

**Assets loaded in HTML:**
- `assets/hero-bg.webp`
- `assets/icon-leaf.webp`, `assets/icon-citrus.webp`, `assets/icon-heart.webp`
- `assets/cart.webp` (×4)
- `assets/product-citrus-surge.jpg`, `assets/product-lemon-lime-splash.jpg`, `assets/product-island-punch.jpg`, `assets/product-riptide-cola.jpg`

**Scripts:** `script.js`  
**Styles:** `styles.css`, Bootstrap 5.3.3 CDN, Google Fonts CDN

---

### `about.html` — About Us
Brand story page. Responsive normal-flow layout (not the absolute-canvas approach). Scaled to viewport width by `about.js` down to a 768 px breakpoint, below which CSS takes over with a stacked mobile layout.

**Sections:**
- Header (logo + nav on teal `about-header.png` background)
- Hero: "Sip Into Something Better" headline + subtitle
- "How It Started" two-column cream section
- Orange features band: heading box, three-column feature box, Vegan seal, warning ellipse, 11 decorative bubble SVGs (`b3–b14.svg`) positioned absolutely over `about-mid.png`
- "Made for the Ones Who Just Get It" two-column cream section
- CTA section + Footer on `about-footer.png` teal background

**Assets loaded by CSS (`about.css`):**
- `assets/fonts/SuperAmore.ttf`
- `assets/about-header.png` — top teal section background
- `assets/about-mid.png` — orange features band background
- `assets/about-footer.png` — bottom teal section background

**Assets loaded in HTML:**
- `assets/b3.svg`, `assets/b4.svg`, `assets/b5.svg`, `assets/b6.svg`, `assets/b7.svg`, `assets/b9.svg`, `assets/b10.svg`, `assets/b11.svg`, `assets/b12.svg`, `assets/b13.svg`, `assets/b14.svg` — decorative bubble SVGs
- `assets/plant.svg`, `assets/orange.svg`, `assets/heart.svg` — feature column icons

**Scripts:** `about.js`  
**Styles:** `about.css`, Google Fonts CDN  
**Note:** Does not load Bootstrap — unlike the product pages.

---

### `island-punch.html` — Island Punch Product Page
Template product page. Responsive Bootstrap grid layout inside a 1440 px canvas scaled by `island-punch.js`.

**Sections (shared structure with all product pages):**
- **Hero** (commented-out header, no site nav present): can image with prev/next carousel arrows, flavor title, tagline, description, "Tide Locator" CTA button, feature tag list (Zero Alcohol, Real Marijuana, Gluten Free, Vegan Friendly)
- **Description band**: centered flavor description text
- **Two-image gallery**: `island-middle-1.png` + `island-middle-2.png`
- **Feature band**: full-bleed `island-punch-mid-bg.png` background with "Real Marijuana. Real Flavor. Real Good." heading and circular "Start Sipp'n" badge with `ip-leaf.png` icon
- **Flavor slider**: horizontal scroll track with all 4 flavor cards (3 visible at once desktop, 2 on mobile) each with a cart button
- **Footer**: teal, four-column links

**CSS accent color:** `--coral: #C74F51`

**Assets loaded:**
- `assets/island-punch.png` — hero can image
- `assets/island-middle-1.png`, `assets/island-middle-2.png`
- `assets/ip-leaf.png` — badge icon
- `assets/cart.webp` (×4)
- `assets/product-*.jpg` (all four flavors in slider)
- `assets/island-punch-mid-bg.png` (via CSS)

**Scripts:** `island-punch.js`  
**Styles:** `product-page.css`, Bootstrap 5.3.3 CDN, Google Fonts CDN

---

### `citrus-surge.html` — Citrus Surge Product Page
Same structure as `island-punch.html`. Uses its own `citrus-surge.css` instead of the shared `product-page.css`.

**CSS accent color:** `--heat: #F3621D`  
**Feature band background:** `assets/citrus-surge-mid-bg.png`  
**Badge icon:** `assets/cs-orange.png`  
**Hero can:** `assets/citrus-surge.png`  
**Gallery:** `assets/citrus-surge-middle-1.png`, `assets/citrus-surge-middle-2.png`

**Scripts:** `citrus-surge.js`  
**Styles:** `citrus-surge.css`, Bootstrap 5.3.3 CDN, Google Fonts CDN

---

### `lemon-lime-splash.html` — Lemon Lime Splash Product Page
Same structure. Uses `lemon-lime-splash.css`.

**CSS accent color:** `--lemon: #B2BF0D`  
**Feature band background:** `assets/lemon-lime-splash-mid-bg.png`  
**Badge icon:** `assets/lls-heart.png`  
**Hero can:** `assets/lemon-lime-splash.png`  
**Gallery:** `assets/lemon-lime-splash-middle-1.png`, `assets/lemon-lime-splash-middle-2.png`

**Scripts:** `lemon-lime-splash.js`  
**Styles:** `lemon-lime-splash.css`, Bootstrap 5.3.3 CDN, Google Fonts CDN

---

### `riptide-cola.html` — Riptide Cola Product Page
Same structure. Uses `riptide-cola.css`.

**CSS accent color:** `--cola: #9B4629`  
**Feature band background:** `assets/riptide-cola-mid-bg.png`  
**Badge icon:** `assets/rc-leaf.png`  
**Hero can:** `assets/riptide-cola.png`  
**Gallery:** `assets/riptide-cola-middle-1.png`, `assets/riptide-cola-middle-2.png`

**Scripts:** `riptide-cola.js`  
**Styles:** `riptide-cola.css`, Bootstrap 5.3.3 CDN, Google Fonts CDN

---

## JavaScript Files

### `script.js` — Homepage Interactions
Handles all `index.html` interactivity and layout scaling.

- **Hero flavor carousel** — cycles the `#flavorPill` button label through the four flavor names (Island Punch → Citrus Surge → Lemon Lime Splash → Riptide Cola) using prev/next arrow clicks. Label only; does not navigate to product pages or swap the hero image.
- **Product strip carousel** — reorders `.product-cell` elements via CSS `order` property on each prev/next click. Does not scroll the strip.
- **Responsive scaling** — calculates `scale = window.innerWidth / 1440`, applies it to `.stage` via `transform: scale()`, and sets `.scaler` height to `5281 * scale` so there's no leftover whitespace. Fires on `resize`.

---

### `about.js` — About Page Scaling
Single responsibility: scales `.stage-about` to fill viewport width above 768 px. Below 768 px it clears all inline transform styles and hands layout control back to the CSS mobile breakpoint. Fires on both `resize` and `load` (to accommodate late-loading fonts/images).

---

### `island-punch.js` / `citrus-surge.js` / `lemon-lime-splash.js` / `riptide-cola.js` — Product Page Interactions
All four files are functionally identical. Each:

- **Canvas scaling** — same `scale()` technique as `about.js`; design height hardcoded at `3939 px`; drops transform below 768 px breakpoint.
- **Flavor slider** — wires `.slider-prev` / `.slider-next` buttons to `scrollBy()` on `#flavorTrack` by one card width (`offsetWidth`). Native `overflow-x: auto` + `scroll-snap-type: x mandatory` handles swipe on touch devices.

---

## CSS Files

### `styles.css` — Homepage Stylesheet
Pixel-perfect absolute layout on a `1440 × 5281 px` stage. All elements use `position: absolute` with fixed `left`/`top` values. Defines the brand `:root` design tokens (colors, font stacks). Includes a single `@media (max-width: 1439px)` rule that removes the stage box-shadow.

**Key custom font:** `Super Amore` loaded from `assets/fonts/SuperAmore.ttf`.

---

### `about.css` — About Page Stylesheet
Scoped under `.about-page` to avoid polluting the global namespace. Re-declares all brand tokens as local CSS variables (same values as `styles.css`). Normal document flow with Flexbox layout for the two-column sections. Includes a `@media (max-width: 767.98px)` mobile breakpoint that reflowed the absolute-canvas design into a stacked single-column layout.

---

### `product-page.css` — Island Punch / Shared Product Stylesheet
Used exclusively by `island-punch.html`. Normal document flow with Bootstrap grid. Defines full product page layout: hero, description band, gallery, feature band, flavor slider, footer. Includes mobile breakpoint at 767.98 px. The other three product pages duplicate this file with only the accent color variable and feature band background image changed.

---

### `citrus-surge.css` / `lemon-lime-splash.css` / `riptide-cola.css` — Per-Flavor Product Stylesheets
Each is a near-exact copy of `product-page.css` with two differences:
- The flavor accent color variable (`--heat`, `--lemon`, `--cola`)
- The `background-image` URL for the feature band section

All other rules — layout, typography, responsive breakpoints, footer — are duplicated verbatim.

---

## Inter-Page Navigation Map

```
index.html
  ├── → about.html          (header nav "About Us")
  ├── → #contact            (header nav — no matching ID on page)
  └── → #reach              (header button — no matching ID on page)

about.html
  ├── → index.html          (logo, footer "Home", CTA "View All Flavors")
  ├── → index.html#about    (nav "About Us" — #about ID does not exist on index.html)
  └── → index.html#contact  (nav "Contact & FAQ" — #contact ID does not exist on index.html)

island-punch.html / citrus-surge.html / lemon-lime-splash.html / riptide-cola.html
  ├── → index.html          (footer "Home" link)
  ├── → #all                (flavor section "See all flavors" — anchor does not exist)
  ├── → #about              (footer "About Us" — no matching ID on any page)
  └── → #contact            (footer "Contact & FAQ" — no matching ID on any page)
```

**Note:** The homepage hero carousel and product strip do not link to individual product pages. Navigating between pages currently requires the footer links.

---

## Assets Directory Summary

All files live in `assets/`. Key categories:

| Category | Files |
|---|---|
| Hero / homepage images | `hero-bg.webp`, `teal-bg.webp`, `footer-bg.webp` |
| Product can images (product pages) | `island-punch.png`, `citrus-surge.png`, `lemon-lime-splash.png`, `riptide-cola.png` |
| Product thumbnail images (strip/slider) | `product-island-punch.jpg`, `product-citrus-surge.jpg`, `product-lemon-lime-splash.jpg`, `product-riptide-cola.jpg` |
| Gallery images | `island-middle-1/2.png`, `citrus-surge-middle-1/2.png`, `lemon-lime-splash-middle-1/2.png`, `riptide-cola-middle-1/2.png` |
| Feature band backgrounds | `island-punch-mid-bg.png`, `citrus-surge-mid-bg.png`, `lemon-lime-splash-mid-bg.png`, `riptide-cola-mid-bg.png` |
| About page backgrounds | `about-header.png`, `about-mid.png`, `about-footer.png` |
| Bubble SVGs (about page) | `b3.svg` – `b14.svg` (11 files, non-sequential numbering) |
| Feature icons (about page) | `plant.svg`, `orange.svg`, `heart.svg` |
| Feature icons (homepage) | `icon-leaf.webp`, `icon-citrus.webp`, `icon-heart.webp` |
| Badge icons (product pages) | `ip-leaf.png`, `cs-orange.png`, `lls-heart.png`, `rc-leaf.png` |
| Cart | `cart.webp` |
| Font | `fonts/SuperAmore.ttf` |
