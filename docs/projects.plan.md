# Projects Page Redesign Plan

Redesign the Projects page to match the new Figma designs: apply mint gradient card backgrounds, update CTA buttons to green with pill shape, change tag styling to white background, adjust typography per breakpoint, restructure card HTML, and update the Runnable card image.

## Figma References

- **Desktop**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=9-2835
- **Tablet**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=9-357
- **Mobile**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=5-75

## Steps

### 1. Add new color tokens in `src/styles/base.css`

Add green button color variables:
- `--color-secondary-700: #21583A` (View button background)
- `--color-secondary-800: #083E20` (View button border)

### 2. Update `.btn-cta` styles in `src/styles/components.css`

- Background: `--color-secondary-700` (#21583A)
- Border: `1px solid --color-secondary-800` (#083E20)
- Border-radius: `50px` (pill shape)
- Padding: `12px 16px` mobile / `12px 20px` tablet/desktop
- Font size: `14px` mobile / `18px` tablet/desktop

### 3. Update `.project-card` styles in `src/styles/components.css`

- Replace solid `--color-primary-50` background with mint gradient:
  ```css
  background: linear-gradient(90deg, rgba(223, 223, 223, 0.3) 0%, rgba(223, 223, 223, 0.3) 100%),
              linear-gradient(90deg, #F7FFFB 0%, #F7FFFB 100%);
  ```
- Box shadow: `0px 0px 3px 0px rgba(112, 172, 180, 0.3)`

### 4. Update `.project-card__tag` styles in `src/styles/components.css`

- Change background from `--color-secondary-50` to `--color-white`

### 5. Update `.project-card__image-wrapper img` in `src/styles/components.css`

- Add border: `1px solid #F9FAFB`

### 6. Update card typography in `src/styles/components.css`

Responsive font sizes per breakpoint (see Design Specifications below).

### 7. Update `.projects-grid` in `src/styles/pages.css`

- Large desktop: `justify-content: space-between` with fixed 422px card widths
- Tablet: Fixed 422px card width, centered

### 8. Restructure HTML in `projects.html`

- Change CTA button text from "View case study" to "View"
- Move `.project-card__reading-time` from `.project-card__cta` into `.project-card__info` (below description)
- Update Runnable card image `src` to `/images/Record-Started-1.png`

## Design Specifications

### Layout

| Breakpoint | Layout | Card Width | Alignment |
|------------|--------|------------|-----------|
| Mobile | Single column, stacked | 100% (full width) | Stretch |
| Tablet | Single column, stacked | Fixed 422px | Centered |
| Desktop | 3-column horizontal row | Fixed 422px | Space-between |

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-secondary-700` | `#21583A` | View button background |
| `--color-secondary-800` | `#083E20` | View button border |
| Card gradient base | `#F7FFFB` | Card background |
| Card gradient overlay | `rgba(223, 223, 223, 0.3)` | Card background overlay |
| Card shadow | `rgba(112, 172, 180, 0.3)` | Box shadow |
| Tag background | `#FFFFFF` | Tag pill background |
| Image border | `#F9FAFB` | Card image border |

### Typography

| Element | Mobile | Tablet/Desktop |
|---------|--------|----------------|
| Type title | 16px / 24px line, semibold | 18px / 28px line, semibold |
| Type subtitle | 14px / 20px line, regular | 16px / 24px line, regular |
| Project title | 16px / 24px line, semibold | 18px / 28px line, semibold |
| Description | 14px / 20px line, regular | 16px / 24px line, regular |
| Reading time | 12px / 20px line, regular, gray | 14px / 20px line, regular, gray |
| View button | 14px / 20px line | 18px / 28px line |

### Card Structure (New)

```
┌─────────────────────────────────────┐
│                    [Personal project]│  ← Tag (top-right aligned)
│                                     │
│  UX Project                         │  ← Type title (semibold)
│  From scratch                       │  ← Type subtitle (regular)
│                                     │
│  ┌─────────────────────────────────┐│
│  │                                 ││  ← Image (with 1px border)
│  │         PROJECT IMAGE           ││
│  │                                 ││
│  └─────────────────────────────────┘│
│                                     │
│  Runnable                           │  ← Project title (semibold)
│  Building a running app...          │  ← Description (regular)
│  Reading time: 10 minutes           │  ← Reading time (gray, moved here)
│                                     │
│                            [View]   │  ← CTA button (green pill, bottom-right)
└─────────────────────────────────────┘
```

### Button Specifications

| Property | Value |
|----------|-------|
| Background | `--color-secondary-700` (#21583A) |
| Border | `1px solid --color-secondary-800` (#083E20) |
| Border-radius | `50px` (pill shape) |
| Text color | White |
| Padding (mobile) | `12px 16px` |
| Padding (tablet/desktop) | `12px 20px` |
| Font (mobile) | 14px / 20px line |
| Font (tablet/desktop) | 18px / 28px line |

### Image Update

- **Runnable card**: Change from current image to `/images/Record-Started-1.png` (map with route tracking UI)

## Files to Modify

| File | Changes |
|------|---------|
| `src/styles/base.css` | Add `--color-secondary-700` and `--color-secondary-800` tokens |
| `src/styles/components.css` | Update `.btn-cta`, `.project-card`, `.project-card__tag`, image border, responsive typography |
| `src/styles/pages.css` | Update `.projects-grid` layout for tablet/desktop |
| `projects.html` | Change button text to "View", move reading time, update Runnable image src |
