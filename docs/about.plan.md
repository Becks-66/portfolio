# About Page Implementation Plan

## Overview

Build the About page content for Rebecca Guerrini's portfolio following the Figma designs for mobile, tablet, and desktop breakpoints. The page features a biographical narrative with 5 personal images in various rounded shapes, with detailed alt text and a clickable Instagram link.

## Figma References

- **Desktop**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=9-2915&m=dev
- **Tablet**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=9-330&m=dev
- **Mobile**: https://www.figma.com/design/TPZHoU2luYjOJ9nW7MEgCU/Portfolio-redesign?node-id=5-39&m=dev

## Design Tokens Used

### Colors
- Background: `linear-gradient(90deg, var(--color-bg-overlay), var(--color-bg-overlay)), var(--color-bg-mint)`
- Text: `var(--color-neutral-900)` (#111827)

### Typography
- Font: Poppins Regular
- Mobile: 14px, line-height 1.45
- Tablet/Desktop: 16px, line-height 24px

### Spacing
- Row gap: 40px
- Image pair gap: 24px
- Text paragraph gap: 20px

### Border Radius
- Image corners: 50px (var(--radius-lg))

## Implementation Steps

### Step 1: Add About Page CSS in `src/styles/pages.css`

Replace placeholder `.about-section` styles with:

- `.about-content`: centered container, max-width 1032px (desktop), 40px vertical gaps, centered alignment
- `.about-row`: flex row with 40px gap, `align-items: center`, reverse variant `.about-row--reverse`
- `.about-text`: Poppins Regular, 14px mobile / 16px tablet+, 24px line-height, max-width 440px (desktop)
- `.about-image-pair`: flex container with 24px gap for two images
- `.about-image`: specific sizes per breakpoint with `object-fit: cover`
- `.about-closing`: centered text block for final paragraph
- Gradient background on `.about-page`

### Step 2: Update HTML Structure in `about.html`

Replace placeholder content with 3 alternating rows:

- **Row 1**: Two text paragraphs (left) + image pair (dreamcatcher.jpg, jewels.jpg) (right)
- **Row 2**: Single image (laurea.jpg) (left) + long text paragraph (right)
- **Row 3**: Text with 3 paragraphs including clickable Instagram link (left) + image pair (artwork.jpg, caricatura.jpg) (right)
- **Closing**: Centered paragraph

### Step 3: Apply Unique Border-Radius per Figma

Define CSS classes:

- `.about-image--left-pair`: `border-radius: 50px 50px 0 50px` (rounded top-left, top-right, bottom-left)
- `.about-image--right-pair`: `border-radius: 50px 50px 50px 0` (rounded top-left, top-right, bottom-right)
- `.about-image--single`: `border-radius: 50px` (fully rounded)

### Step 4: Add Detailed Alt Text for Accessibility

| Image | Alt Text |
|-------|----------|
| dreamcatcher.jpg | Handmade dreamcatcher with feathers and beads |
| jewels.jpg | Handcrafted geometric jewelry pieces with stained glass |
| laurea.jpg | Rebecca at her graduation ceremony holding flowers |
| artwork.jpg | Digital illustration of a woman with flowing red hair holding a glowing orb |
| caricatura.jpg | Cartoon portrait of Rebecca with her cats |

### Step 5: Implement Responsive Breakpoints

| Breakpoint | Layout | Text Size | Image Sizes |
|------------|--------|-----------|-------------|
| Mobile (default) | Single column stacked | 14px | ~125-141px wide |
| Tablet (768px) | Two-column rows | 16px | ~125-141px wide pairs, 243px single |
| Desktop (1024px) | Max-width 1032px container | 16px | ~153-173px wide pairs, 296px single |

## Content

### Row 1 - Introduction

**Text Block 1:**
> The path that brought me here hasn't always been linear, but it has been varied, constantly pushing me out of my comfort zone and forcing me to learn.

**Text Block 2:**
> I have always been fascinated by art and design, finding every possible way to vent my curiosity, whether by drawing, crafting objects, or writing new worlds into existence.

**Images:** dreamcatcher.jpg, jewels.jpg

### Row 2 - Education

**Image:** laurea.jpg

**Text:**
> In high school, I studied jewelry design and manufacturing, a path that I loved and that taught me the fundamentals of craftsmanship. At the same time, I developed a strong interest in how human beings think and feel. Like a magnet, I was drawn to psychology. That universe captivated me for five years, leading to my Master's degree. I focused on the applied side of the field: Human-Computer Interaction, economic decision-making, and User Experience.

### Row 3 - Experience & Creativity

**Text (3 paragraphs):**
> In 2025, I completed a six-month research internship at the National Research Council (CNR) in Pisa, studying trust and reliance in user-AI interactions, a topic I became deeply passionate about.
>
> Throughout my studies, I never stopped creating, drawing, and experimenting with new media.
>
> To look at some of my works, you can check my instagram ([@reb_fa_cose](https://www.instagram.com/reb_fa_cose/))!

**Images:** artwork.jpg, caricatura.jpg

### Closing

> I don't know exactly where my path will lead next, but I hope it stays just as varied and stimulating!

## Files to Modify

- `src/styles/pages.css` — Add ~80 lines of CSS for About page components and breakpoints
- `about.html` — Replace placeholder section with full biographical content (~60 lines of HTML)

## Assets

Images located in `public/images/about_me/`:
- artwork.jpg
- caricatura.jpg
- dreamcatcher.jpg
- jewels.jpg
- laurea.jpg
