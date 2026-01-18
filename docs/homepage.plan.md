# Homepage Redesign Plan

Redesign the homepage to match the new Figma designs: update background to mint gradient (homepage only), restructure header with 3-nav items (moved outside hero), replace footer with social icons, update hero content/layout, and create separate Projects and About pages.

## Figma References

- **Desktop**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=9-2793
- **Tablet**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=9-346
- **Mobile**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=5-57

## Steps

### 1. Update CSS tokens in `src/styles/base.css`

Add new color variables:
- `--color-bg-mint: #F7FFFB`
- `--color-bg-overlay: rgba(223, 223, 223, 0.3)`
- `--color-primary-500: #4B3259`
- `--color-primary-600: #321940`

### 2. Restructure header in `src/styles/layout.css`

- Update for new structure (header as direct child of `.page-wrapper`)
- Add styles for 3 nav items (Home, Projects, About)
- Update `.nav-button--active` to solid purple background (`#4B3259`) with white text
- Adjust typography per breakpoint:
  - Mobile: 14px nav text, 20px logo
  - Tablet: 16px nav text, 28px logo
  - Desktop: 18px nav text, 32px logo

### 3. Redesign footer in `src/styles/layout.css`

- Replace `.footer__email` with `.footer__icons` containing 3 linked icons
- Add `.footer__text` "Other works and contacts" (visible on tablet/desktop only)
- Icon sizes: 24px mobile / 28px desktop
- Icon gap: 40px mobile / 60px desktop
- Links:
  - Instagram: `https://www.instagram.com/reb_fa_cose/`
  - Mail: `mailto:reb.guerrini@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/rebecca-guerrini-53b9401b7`

### 4. Update hero styles in `src/styles/homepage.css`

- Remove `.side-frame` styles entirely
- Apply mint gradient background to `.homepage` body class
- Update hero layout:
  - Desktop: horizontal flex (image left 491×553px, text right, 60px gap)
  - Tablet/Mobile: centered vertical stack
- Image styling: `border-radius: 0 0 50px 50px` with 95% opacity

### 5. Update `index.html`

- Move `<header>` outside `.hero-section` as direct child of `.page-wrapper`
- Remove entire `#projects` section
- Update hero text:
  - Underline "Applied Cognitive Psychology"
  - Bold "UX Designer" and "Zurich"
- Change image src to `/images/illustration.jpg`
- Replace footer with 3 icon links
- Update nav hrefs to `index.html`, `projects.html`, `about.html`

### 6. Create `projects.html`

- New page with header (Projects nav active)
- Contains the 3 project cards (Runnable, Journeal, Busuu) in `.projects-grid`
- Same footer structure
- White/neutral background

### 7. Create `about.html`

- New empty page with header (About nav active)
- Empty `<main>` with placeholder text
- Same footer structure
- White/neutral background

## Design Specifications

### Colors (from Figma)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-mint` | `#F7FFFB` | Homepage background |
| `--color-bg-overlay` | `rgba(223, 223, 223, 0.3)` | Background gradient overlay |
| `--color-primary-500` | `#4B3259` | Active nav button background |
| `--color-primary-600` | `#321940` | Active nav button (darker variant) |
| `--color-neutral-800` | `#1F2937` | Nav text color |
| `--color-neutral-900` | `#111827` | Headings, body text |

### Typography (from Figma)

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Logo | 20px / 28px line | 28px / 36px line | 32px / 40px line |
| Nav buttons | 14px / 20px line | 16px / 24px line | 18px / 28px line |
| Heading (H1) | 24px / 32px line | 32px / 40px line | 40px / 48px line |
| Body text | 14px / ~20px line | 16px / 24px line | 18px / 28px line |

### Spacing

| Breakpoint | Page padding | Content gap | Section gap |
|------------|--------------|-------------|-------------|
| Mobile | 20px | 40px | 40px |
| Tablet | 20px | 80px | 80px |
| Desktop | 20px (content), 80px (hero sides) | 120px | 20px |

### Image Specifications

| Breakpoint | Width | Height | Border radius |
|------------|-------|--------|---------------|
| Mobile | 200px | 318px | 0 0 50px 50px |
| Tablet | 308px | 349px | 0 0 50px 50px |
| Desktop | 491px | 553px | 0 0 50px 50px |

All images have `opacity: 0.95`.
