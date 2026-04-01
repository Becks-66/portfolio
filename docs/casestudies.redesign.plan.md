# Case Studies Redesign Plan

Update the header, footer, and case study hero card across the remaining case study pages (runnable.html and journeal.html) to match Figma designs. Header/footer styling follows homepage.plan.md; hero card uses mint gradient from projects.plan.md.

## Figma References

- **Desktop**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=9-2148
- **Tablet**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=9-1284
- **Mobile**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=8-626

## Steps

### 1. Add color tokens in `src/styles/base.css`

Add new color variables for active nav button states:
- `--color-primary-500: #4B3259`
- `--color-primary-600: #321940`

### 2. Update nav button active state in `src/styles/layout.css`

Change `.nav-button--active` to use:
- `background: var(--color-primary-500)`
- `border: 1px solid var(--color-primary-600)`
- `color: var(--color-white)`

### 3. Update footer HTML in all case study pages

In `runnable.html` and `journeal.html`, replace the current `.footer__email` structure with:
- `.footer__icons` containing linked icons for Instagram, Mail, LinkedIn (icons on the left)
- `.footer__text` with "Other works and contacts" (hidden on mobile, visible on tablet+)

Links:
- Instagram: `https://www.instagram.com/reb_fa_cose/`
- Mail: `mailto:reb.guerrini@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/rebecca-guerrini-53b9401b7`

### 4. Update case study hero card in `src/styles/case-study.css`

Replace solid `--color-primary-50` background with mint gradient and shadow:

```css
.case-study-hero {
  background: linear-gradient(90deg, rgba(223, 223, 223, 0.3) 0%, rgba(223, 223, 223, 0.3) 100%),
              linear-gradient(90deg, #F7FFFB 0%, #F7FFFB 100%);
  box-shadow: 0px 0px 3px 0px rgba(112, 172, 180, 0.3);
}
```

### 5. Adjust hero card responsive layout in `src/styles/case-study.css`

- **Mobile**: Column layout with image 100% width on top
- **Tablet+**: Row layout with image fixed 366×273px left, info fills remaining space, 40px gap

### 6. Update back link arrow in all case study pages

In `runnable.html` and `journeal.html`, replace the inline SVG in `.back-link` with:

```html
<img src="/images/arrow-icon.svg" alt="" aria-hidden="true" class="back-link__icon" />
```

No hover state needed.

### 7. Remove back link hover styles in `src/styles/case-study.css`

Remove any existing `:hover` rules on `.back-link` since no hover state is required.

## Design Specifications

### Header Typography (per breakpoint)

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Logo | 20px / 28px line | 28px / 36px line | 32px / 40px line |
| Nav buttons | 14px / 20px line | 16px / 24px line | 18px / 28px line |

### Footer Specifications

| Property | Mobile | Tablet/Desktop |
|----------|--------|----------------|
| Icon size | 24px | 28px |
| Icon gap | 40px | 60px |
| Text | Hidden | Visible, Poppins Medium 16px/24px |
| Layout | Centered icons | Space-between (icons left, text right) |

### Hero Card Specifications

| Property | Mobile | Tablet/Desktop |
|----------|--------|----------------|
| Layout | Column (image on top) | Row (image left, info right) |
| Padding | 28px × 32px | 28px × 32px |
| Border radius | 16px | 16px |
| Gap | 40px | 40px |
| Image width | 100% | 366px (fixed) |
| Image height | 273px | 273px |

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-500` | `#4B3259` | Active nav button background |
| `--color-primary-600` | `#321940` | Active nav button border |
| Card gradient base | `#F7FFFB` | Hero card background |
| Card gradient overlay | `rgba(223, 223, 223, 0.3)` | Hero card background overlay |
| Card shadow | `rgba(112, 172, 180, 0.3)` | Hero card box shadow |

## Files to Modify

| File | Changes |
|------|---------|
| `src/styles/base.css` | Add `--color-primary-500` and `--color-primary-600` tokens |
| `src/styles/layout.css` | Update `.nav-button--active` colors |
| `src/styles/case-study.css` | Update `.case-study-hero` background/shadow, layout; remove `.back-link` hover |
| `runnable.html` | Update footer structure, replace back link SVG with img |
| `journeal.html` | Update footer structure, replace back link SVG with img |
