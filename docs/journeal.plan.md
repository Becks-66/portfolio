# Journeal Case Study Page - Implementation Plan

## Overview

Create a new case study page (`journeal.html`) following the exact structure and patterns from `runnable.html`, using text and assets from the Figma design. All images and video are already available in `public/images/journeal/`.

## Steps

### 1. Create `journeal.html`

Mirror the structure of `runnable.html`:
- Header with navigation (Home, My projects - active)
- Hero card with:
  - Title: "Journeal"
  - Subtitle: "Building a journaling app that accompanies you during your therapy journey."
  - Type: UX Project
  - Process: From scratch
  - Client: Personal project (tag)
  - Reading time: 10 minutes
- Back link to projects.html
- 9 content sections (see below)
- Footer with same fixed/scroll behavior

### 2. Build Content Sections

Using existing CSS classes from `case-study.css`:

| Section | CSS Classes | Content |
|---------|-------------|---------|
| User Story | `.section`, `.section__text` | Leo's story about therapy journaling |
| Problem | `.section`, `.section__text`, `.section__text--bold` | Problem statement + design question |
| Target Users | `.section`, `.section__text` | Ages 15-35, therapy patients |
| Primary Research | `.section--large-gap`, `.step-box--violet`, `.insight-box`, `.suggestion-box` | 4 Objectives, 6 Insights, 8 Suggestions |
| Personas | `.section`, `.persona-row` | 3 personas: Strugglers, Newbies, Non-recorders |
| Sitemap | `.section`, `.figma-embed` | Figma embed iframe |
| Lean Branding | `.section--large-gap`, `.values-table`, `.palette-image` | Values table + 2 palette images |
| Designs | `.section`, `.subsection`, `.mockup-row`, `.mockup-grid` | Journaling (1 video + 5 image groups) + Therapy (6 image groups) |
| Testing | `.section--large-gap`, `.subsection`, `.section__list` | Methods, Experimental design, Measures |

### 3. Add CSS for Decorative Rectangles

Add to `case-study.css`:

```css
/* Decorative rectangles - Journeal */
.deco-rect {
  display: none;
  position: absolute;
  border-radius: 16px;
  z-index: -1;
}

.deco-rect--teal {
  background-color: #E7F3F5; /* --color-primary-50 */
}

.deco-rect--violet {
  background-color: #F3EFF7; /* --color-secondary-50 */
}

.deco-rect--violet-dark {
  background-color: #D6C7E2; /* --color-secondary-100 */
}

/* Size variants */
.deco-rect--wide {
  width: 1300px;
  height: 588px;
}

.deco-rect--medium {
  width: 800px;
  height: 1196px;
}

.deco-rect--square-lg {
  width: 300px;
  height: 300px;
  border-radius: 0;
}

.deco-rect--square-md {
  width: 200px;
  height: 200px;
  border-radius: 0;
}

/* Show on tablet+ */
@media (min-width: 768px) {
  .deco-rect {
    display: block;
  }
}
```

### 4. Update `projects.html`

Change line ~83 from:
```html
<a href="#" class="btn-cta">View case study</a>
```
to:
```html
<a href="journeal.html" class="btn-cta">View case study</a>
```

### 5. Asset References

Images in `public/images/journeal/`:

| Asset Type | Filename |
|------------|----------|
| Hero image | `Image frame.png` (or similar) |
| Persona 1 (Strugglers) | `Humaaans - Space 1.png` |
| Persona 2 (Newbies) | `Humaaans - Space copia 1.png` |
| Persona 3 (Non-recorders) | `Humaaans - Space copia 2 1.png` |
| Primary palette | `Primary.png` |
| Secondary palette | `Secondary.png` |
| Video | `Journeal - Add an entry.mp4` |
| Mockup images | Various `Image frame.png` files |

### 6. Figma Sitemap Embed

```html
<div class="figma-embed">
  <iframe 
    src="https://embed.figma.com/board/LNIIuyWheC2oZrIGq6YQQw/Journaling-app?node-id=0-1&embed-host=share" 
    title="Journeal Sitemap - FigJam board"
    allowfullscreen>
  </iframe>
</div>
```

## Design Sections Structure

### Journaling Section
1. Intro text + video mockup (side by side)
2. Blank page: text + 3 images with teal deco-rect
3. Words of affirmation: text + 3 images with teal deco-rect
4. Gratitude: text + 3 images with teal deco-rect
5. Unsent letters: text + 3 images with teal deco-rect

### Therapy Section
1. Intro text + 4 images (2x2 grid) with violet deco-rect
2. Questionnaire mood: text + 3 images with violet deco-rect
3. Insights collection: text + 1 image (side by side)
4. Exercises: text + 2 images with square deco-rects
5. Commitments: text + 2 images with square deco-rects
6. Empty state: text + 2 images with square deco-rects

## Checklist

- [ ] Create `journeal.html` with full structure
- [ ] Add deco-rect CSS classes to `case-study.css`
- [ ] Update projects.html CTA link
- [ ] Test responsive behavior (mobile, tablet, desktop)
- [ ] Verify all image paths load correctly
- [ ] Test video autoplay/loop
- [ ] Verify Figma embed loads
- [ ] Check footer fixed/scroll behavior on large screens
