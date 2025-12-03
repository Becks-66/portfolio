## Plan: Mobile-First Responsive Portfolio Homepage

Implement Rebecca Guerrini's accessible portfolio homepage with mobile-first CSS across three breakpoints (mobile, tablet 768px, desktop 1024px). Pure HTML/CSS with hover states, descriptive alt texts, skip link, and focus-visible styles.

### Steps

1. **Download assets to `public/images/`** — Create `images/` folder, save portrait illustration as `drawing.png` from [Figma asset](https://www.figma.com/api/mcp/asset/9911f748-8cb9-427b-85c6-528d98ac6d7a) and mail icon as `mail-icon.svg` from [Figma asset](https://www.figma.com/api/mcp/asset/2ce3d728-f846-4afb-aa54-8c18d054456d).

2. **Set up [index.html](portfolio/index.html)** — Replace Vite boilerplate with accessible semantic structure:
   - `<html lang="en">`, viewport meta, Google Fonts link (Poppins 400/500/600, Montserrat 400)
   - Skip-to-content link (`<a href="#main-content" class="skip-link">`)
   - `<header>`: Logo + `<nav aria-label="Main navigation">` with Home (active) and My projects (`href="#"`) buttons
   - `<main id="main-content">`: h1 greeting + bio paragraphs + illustration `<img alt="Illustrated portrait of Rebecca Guerrini">`
   - `<footer>`: Mail icon + email as plain text with `aria-label`

3. **Create CSS custom properties in [style.css](portfolio/src/style.css)** — Define `:root` tokens for colors (`--primary-50: #E7F3F5`, `--neutral-900: #111827`, `--secondary-400: #734F88`, `--white: #FFFFFF`), spacing, shadow, border-radius, and focus ring.

4. **Style mobile base (default) in [style.css](portfolio/src/style.css)** — Vertical flex layout:
   - Skip link: visually hidden until focused
   - Header: centered logo (24px Montserrat), nav buttons below (16px Poppins Medium)
   - Content: 262px max-width, centered text, 40px gaps, h1 24px, paragraphs 16px
   - Illustration: 200×250px, 16px border-radius, soft shadow
   - Footer: centered, 14px email text
   - `:focus-visible` styles and `prefers-reduced-motion` support

5. **Add tablet breakpoint (min-width: 768px)** — Side panel layout with illustration on left (410px), header horizontal (logo left, nav right), content positioned right with left-aligned text, 80px gaps, larger typography (h1 28px, paragraphs 18px).

6. **Add desktop breakpoint (min-width: 1024px)** — Full layout with 1360px container, 480px side panel with right-only 50px border-radius, 628px content width, 60px gaps.

7. **Add button hover/focus states** — Default buttons get light purple tint on hover; active button darkens slightly; `transition: background-color 0.2s ease` respecting reduced-motion.

8. **Clean up boilerplate** — In [main.js](portfolio/src/main.js) keep only `import './style.css'`, delete [counter.js](portfolio/src/counter.js), remove `javascript.svg` and `vite.svg`.