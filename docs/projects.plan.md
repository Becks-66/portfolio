# Plan: Create "My Projects" Page for Portfolio

Create a new projects page with white background, no side-frame, and 3 project cards based on the Figma designs for desktop (3-column), tablet (single column 422px cards), and mobile (full-width stacked cards).

## Figma References

- **Desktop (1360px)**: https://www.figma.com/design/qQObtDkLeH7y7bS717KOY7/Portfolio?node-id=13363-164
- **Tablet (768px)**: https://www.figma.com/design/qQObtDkLeH7y7bS717KOY7/Portfolio?node-id=13424-580
- **Mobile (390px)**: https://www.figma.com/design/qQObtDkLeH7y7bS717KOY7/Portfolio?node-id=13434-1250

## Steps

### 1. Create `projects.html`
New file with base structure from `index.html`: skip-link, header (with "My projects" as active), main content with `.projects-grid` container holding 3 `.project-card` components, and footer. No `.side-frame`. Add `projects-page` class to body for white background.

### 2. Update `index.html`
Change the "My projects" link `href` from `#` to `projects.html`.

### 3. Add new design tokens to `style.css`
Add to `:root`:
- `--color-primary-700: #3D7981`
- `--color-primary-600: #56929A`
- `--color-secondary-50: #F3EFF7`
- `--color-neutral-700: #374151`
- `--color-neutral-200: #E5E7EB`
- `--text-xs: 0.75rem` (12px)

### 4. Add projects page base styles to `style.css`
- `.projects-page` (white background)
- `.projects-page .main-content` (no left margin, centered, max-width 1360px, 40px horizontal padding on desktop)

### 5. Add project card component styles to `style.css`
Mobile-first approach:
- `.projects-grid`: flex column, 20px gap, full-width, centered
- `.project-card`: primary-50 background, 16px border-radius, soft shadow, 28px/32px padding, 24px internal gap, flex column
- `.project-card__tag`: secondary-50 background, 8px border-radius/padding, 12px font, self-aligned right
- `.project-card__type-title`: 18px semibold
- `.project-card__type-subtitle`: 16px regular neutral-700
- `.project-card__image`: 273px height, 16px border-radius, object-fit cover, shadow
- `.project-card__title`: 18px semibold
- `.project-card__description`: 16px regular
- `.project-card__cta`: flex column, right-aligned, 4px gap

### 6. Add CTA button styles to `style.css`
- `.btn-cta`: primary-700 (#3D7981) background, primary-600 (#56929A) 1px border, white text, 16px/24px font, 16px/12px padding, 4px border-radius
- `.project-card__reading-time`: 14px neutral-700 text

### 7. Add tablet breakpoint (768px) for projects page
In existing `@media (min-width: 768px)`:
- `.projects-grid`: single column, 20px gap, cards fixed 422px width
- Header: row layout with logo left, nav right (same as homepage)
- Footer: centered alignment

### 8. Add desktop breakpoint (1024px+) for projects page
In existing `@media (min-width: 1024px)` and new `@media (min-width: 1360px)`:
- `.projects-grid`: flex row, 33px gap, 3 equal-width cards (~431px each)
- Container: max-width 1360px, 40px horizontal padding
- Footer: right-aligned with border-top

## Design Tokens from Figma

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary/700 | #3D7981 | CTA button background |
| Primary/600 | #56929A | CTA button border |
| Primary/50 | #E7F3F5 | Card background |
| Secondary/400 | #734F88 | Active nav button |
| Secondary/50 | #F3EFF7 | Tag background |
| Neutral/900 | #111827 | Primary text |
| Neutral/700 | #374151 | Secondary text (subtitles, reading time) |
| Neutral/200 | #E5E7EB | Footer border |
| White | #FFFFFF | Page background, button text |

### Typography
| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|-------------|
| Card Type Title | Poppins | 18px | 600 (SemiBold) | 28px |
| Card Type Subtitle | Poppins | 16px | 400 (Regular) | 24px |
| Card Title | Poppins | 18px | 600 (SemiBold) | 28px |
| Card Description | Poppins | 16px | 400 (Regular) | 24px |
| Tag | Poppins | 12px | 400 (Regular) | 20px |
| CTA Button | Poppins | 16px | 500 (Medium) | 24px |
| Reading Time | Poppins | 14px | 400 (Regular) | 1.45 |

### Layout Specs
| Breakpoint | Cards Layout | Card Width | Gap | Container Padding |
|------------|--------------|------------|-----|-------------------|
| Mobile (<768px) | Single column | 100% | 20px | 20px |
| Tablet (768px) | Single column | 422px | 20px | 20px |
| Desktop (1360px+) | 3-column row | ~431px | 33px | 40px |

### Card Specs
- Padding: 28px horizontal, 32px vertical
- Border radius: 16px
- Shadow: 0px 0px 3px rgba(112, 172, 180, 0.3)
- Internal gap: 24px
- Image height: 273px
