# High Tide — Broken References & Issues

Audited against the file tree and source code as of 2026-07-01. Issues are grouped by severity.

---

## 🔴 Broken Links (pages/anchors that don't resolve)

### 1. `#about` and `#contact` anchor hrefs don't exist
**Files affected:** `index.html` (header nav, footer), `about.html` (nav), all four product page footers

The nav and footer links that point to `#about` and `#contact` are hash-fragment anchors, but no element with `id="about"` or `id="contact"` exists anywhere on `index.html`. Clicking these links will do nothing (or scroll to the top in some browsers).

**Locations:**
- `index.html` line 22: `<a href="#contact">CONTACT &amp; FAQ</a>`
- `index.html` line 215: `<li><a href="#about">About Us</a></li>`
- `index.html` line 216: `<li><a href="#contact">Contact &amp; FAQ</a></li>`
- `about.html` line 25: `<a href="index.html#about">ABOUT US</a>`
- `about.html` line 26: `<a href="index.html#contact">CONTACT &amp; FAQ</a>`
- All product page footers: `<a href="#about">About Us</a>`, `<a href="#contact">Contact &amp; FAQ</a>`

**Fix:** Either add `id="about"` and `id="contact"` to the appropriate sections on `index.html`, or update these links to point to `about.html` and a contact page/section respectively.

---

### 2. `#all` anchor on product pages doesn't exist
**Files affected:** `island-punch.html`, `citrus-surge.html`, `lemon-lime-splash.html`, `riptide-cola.html`

All four product pages have a "← See all flavors" link pointing to `#all`. No element with `id="all"` exists on any page.

**Location:** Flavor section, first line of `.flavors-head` container in each product HTML file.

**Fix:** Change to `href="index.html"` (or to a dedicated products listing page when one exists).

---

### 3. `#reach` button on `index.html` doesn't scroll anywhere
**File:** `index.html` line 24

`<a href="#reach" class="btn-reachout">REACH OUT</a>` — no element with `id="reach"` exists on the page.

**Fix:** Add a contact/reach-out section with `id="reach"`, or link to an external contact page.

---

## 🟠 Missing Page Navigation (UX / structural issue)

### 4. All four product pages have their header commented out
**Files:** `island-punch.html`, `citrus-surge.html`, `lemon-lime-splash.html`, `riptide-cola.html`

The `<header>` block (logo + nav + Reach Out button) is wrapped in `<!-- ... -->` comment tags in all product pages. As a result, there is **no navigation** when a user lands on a product page — the only way back to the homepage is the footer "Home" link.

**Likely status:** Intentionally deferred during development. The header HTML and CSS (`.site-header`, `.header-inner`) are fully written and ready to uncomment.

---

### 5. Homepage hero carousel doesn't navigate to product pages
**File:** `script.js`

The `hero-prev` / `hero-next` arrows cycle the `#flavorPill` label text through the four flavor names but take no other action. There are no links on the hero image or pill button to the individual product pages. A user who clicks the arrows has no path to the product page.

**Fix options:** Add a click handler to `#flavorPill` that navigates to the corresponding product page, or wrap the pill in an `<a>` tag.

---

### 6. "View All" and "Tide Locator" buttons are non-functional
**File:** `index.html`

`.btn-viewall` (line 177) and `.btn-locator` (footer, line 207) are bare `<button>` elements with no `href`, `data-` attribute, or JS event handler. Cart buttons on the product strip likewise have no action.

---

## 🟡 Stale / Duplicate Files

### 7. `Super Amore.ttf` at project root is unreferenced
**File:** `Super Amore.ttf` (root)

A copy of the brand font sits at the project root with a space in the filename. All CSS files correctly reference `assets/fonts/SuperAmore.ttf`. The root copy is never loaded by any stylesheet and can be deleted.

---

### 8. `assets/hero-band.webp` is never loaded
**File:** `assets/hero-band.webp`

The `.hero-band` element in `index.html` is a pure CSS gradient (linear-gradient + blur). A separate `hero-band.webp` image exists in the assets folder but is never referenced in any HTML, CSS, or JS file. Likely a leftover from an earlier design pass.

---

### 9. `assets/hero-collage.jpg` is never loaded
**File:** `assets/hero-collage.jpg`

`index.html` loads `assets/hero-bg.webp` for the hero collage image. A separate `hero-collage.jpg` sits in the assets folder and is never referenced. May be an older version of the hero image.

---

### 10. Torn-edge divider SVGs are present but all commented out
**Files:** `assets/torn-hero-bottom.svg`, `assets/torn-teal-top.svg`, `assets/torn-teal-bottom.svg`, `assets/torn-footer-top.svg`, `assets/tornTop.svg`, `assets/tornBottom.svg`, `assets/torn_hero.svg`

All divider `<img>` tags in `index.html` are commented out. The SVG files are in the assets folder and the CSS classes (`.divider-hero`, `.divider-teal-top`, etc.) are defined in `styles.css`, but the visual effect is not rendered.

---

### 11. Unused UI asset files
The following files exist in `assets/` but are not referenced by any current HTML or CSS:

| File | Notes |
|---|---|
| `arrowL.svg`, `arrowL2.svg`, `arrowR.svg`, `arrowR2.svg` | Arrow icons — product page arrows are inline SVGs |
| `cart.svg` | Cart icon — `cart.webp` is used instead |
| `feature-can-wet.png` | Wet can image — referenced in a commented-out `<img>` in `index.html` |
| `footer.svg` | Unknown use |
| `ig.svg`, `li.svg` | Social icons — replaced by inline SVGs |
| `mid.png` | Unknown use |
| `midbg.svg` | Unknown use |
| `orange.svg` (root assets) | Used in `about.html` — this one IS referenced |
| `star.png`, `star1.svg`, `star2.svg`, `stars5.svg` | Rating/decoration assets — not loaded |
| `warnEllipse.svg` | Warning badge shape — the badge is a CSS `border-radius: 50%` div instead |

---

## 🟡 Copy-Paste Errors in JS File Headers

### 12. `citrus-surge.js`, `lemon-lime-splash.js`, `riptide-cola.js` — wrong file header comment
**Files:** `citrus-surge.js` (line 1–5), `lemon-lime-splash.js` (line 1–5), `riptide-cola.js` (line 1–5)

All three files open with the comment `/* High Tide — Island Punch */`. They are functionally correct (the code works for any product page) but the comment attribution is wrong. `island-punch.js` was clearly used as the template and the header was never updated.

---

## 🟡 CSS Duplication

### 13. `citrus-surge.css`, `lemon-lime-splash.css`, `riptide-cola.css` duplicate `product-page.css` entirely
Each of the three per-flavor CSS files is a verbatim copy of `product-page.css` with only two changes: the accent color variable and the feature band background image URL. All layout, typography, breakpoint, and component rules are duplicated across four files (~550 lines each).

**Recommendation:** Refactor into a single shared stylesheet with per-flavor accent color tokens, either as additional `:root` overrides or as a `<link>`ed flavor-specific overrides file.

---

## 🟢 Minor / Cosmetic

### 14. `about.html` doesn't load Bootstrap
All product pages and `index.html` load Bootstrap 5.3.3. `about.html` does not. This is intentional (the about page uses its own flex layout rather than the Bootstrap grid), but worth documenting for consistency if Bootstrap utilities are ever needed there.

### 15. Homepage product strip carousel uses CSS `order` reordering, not scroll
`script.js` `renderStrip()` reorders `.product-cell` elements by changing their CSS `order` property. The strip does not physically scroll. On a 1440 px canvas all four cells are visible simultaneously, making the carousel arrows effectively decorative at that viewport width.
