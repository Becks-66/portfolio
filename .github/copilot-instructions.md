# Copilot Instructions for Rebecca Guerrini's Portfolio

## Project Overview

This is a **mobile-first responsive portfolio website** for Rebecca Guerrini, a UX Designer with a Psychology background. The site is built with pure HTML/CSS (no frameworks) and uses Vite as the build tool.

## Tech Stack

- **Build Tool**: Vite
- **Languages**: HTML5, CSS3, vanilla JavaScript (minimal)
- **Fonts**: Google Fonts - Poppins (400/500/600) for body text, Montserrat (400) for headings/logo
- **No CSS frameworks** - all styling is custom with CSS custom properties

## Project Structure

```
portfolio/
├── index.html              # Homepage
├── projects.html           # Projects listing page
├── about.html              # About page
├── runnable.html           # Runnable case study page
├── journeal.html           # Journeal case study page
├── busuu.html              # Busuu case study page
├── package.json            # Vite dependencies
├── docs/                   # Planning documents
│   ├── homepage.plan.md
│   ├── projects.plan.md
│   ├── about.plan.md
│   ├── runnable.plan.md
│   ├── journeal.plan.md
│   └── busuu.plan.md
├── public/
│   └── images/             # Static assets
│       ├── illustration.jpg
│       ├── arrow-icon.svg
│       ├── email-icon.svg
│       ├── insta-icon.svg
│       ├── linkedin-icon.svg
│       ├── about_me/       # About page images
│       ├── runnable/       # Runnable case study assets
│       ├── journeal/       # Journeal case study assets
│       └── busuu/          # Busuu case study assets
└── src/
    ├── main.js             # Entry point (imports styles/main.css)
    └── styles/             # Modular CSS architecture
        ├── main.css        # Aggregator - imports all other CSS files
        ├── base.css        # Design tokens, CSS reset, accessibility (skip link)
        ├── layout.css      # Page wrapper, header, footer + breakpoints
        ├── components.css  # Reusable UI: buttons, project cards
        ├── homepage.css    # Hero section styles
        ├── pages.css       # Projects and About page styles
        └── case-study.css  # All case study components + breakpoints
```

## Design System

### Breakpoints (Mobile-First)

| Breakpoint | Min Width | Layout |
|------------|-----------|--------|
| Mobile | default | Single column, vertical stack |
| Tablet | 768px | Side panel layout (homepage), single column cards (projects) |
| Desktop | 1024px+ | Full layout with side frame, 3-column grid (projects) |
| Large Desktop | 1360px | Max container width |

### Color Tokens

```css
/* Background */
--color-bg-mint: #F7FFFB       /* Mint - homepage background, card backgrounds */
--color-bg-overlay: rgba(223, 223, 223, 0.3) /* Gradient overlay */

/* Primary */
--color-primary-50: #E7F3F5    /* Light teal - legacy card backgrounds */
--color-primary-500: #4B3259   /* Purple - active nav button background */
--color-primary-600: #321940   /* Dark purple - active nav button border */
--color-primary-700: #3D7981   /* Dark teal - legacy CTA button */

/* Secondary */
--color-secondary-50: #F3EFF7  /* Light purple - tag background, step boxes */
--color-secondary-400: #734F88 /* Purple - focus states, back link hover */
--color-secondary-700: #21583A /* Green - View button background */
--color-secondary-800: #083E20 /* Dark green - View button border */

/* Neutral */
--color-neutral-100: #F3F4F6   /* Light gray - suggestion boxes */
--color-neutral-200: #E5E7EB   /* Light gray - borders */
--color-neutral-400: #9CA3AF   /* Gray - insight box borders */
--color-neutral-500: #6B7280   /* Darker gray - insight box border variant */
--color-neutral-700: #374151   /* Dark gray - secondary text */
--color-neutral-800: #1F2937   /* Darker gray - nav text */
--color-neutral-900: #111827   /* Near black - primary text */

/* Accent */
--color-green-100: #E7F8E9     /* Light green - step boxes, table headers */
--color-destructive-100: #FEE2E2  /* Light red - "We are not" header */

--color-white: #FFFFFF
```

### Typography

- **Headings/Logo**: Montserrat, 400 weight
- **Body/UI**: Poppins, weights 400 (regular), 500 (medium), 600 (semibold)
- **Mobile sizes**: h1 24px, body 16px, small 14px
- **Desktop sizes**: h1 28-32px, body 18px

### Spacing Scale

```css
--space-xs: 10px
--space-sm: 20px
--space-md: 40px
--space-lg: 60px
--space-xl: 80px
```

### Border Radius

```css
--radius-sm: 4px    /* buttons */
--radius-md: 16px   /* cards, images */
--radius-lg: 50px   /* side frame on desktop */
```

## Accessibility Requirements

This project prioritizes accessibility:

1. **Skip Link**: Hidden link at page top, visible on focus, jumps to `#main-content`
2. **Semantic HTML**: Proper use of `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`
3. **ARIA Labels**: Navigation has `aria-label="Main navigation"`, active page uses `aria-current="page"`
4. **Focus States**: All interactive elements must have visible `:focus-visible` styles using `--focus-ring`
5. **Alt Text**: Descriptive alt text for all images
6. **Reduced Motion**: Respect `prefers-reduced-motion` preference - disable animations/transitions

## Component Patterns

### Navigation

- 3 nav items: Home, Projects, About
- Default state: white background
- Active state: `--color-primary-500` (#4B3259) background with `--color-primary-600` border, white text
- Hover state: light purple tint (`--color-secondary-50`)
- Must include focus-visible outline
- Typography scales per breakpoint (14px mobile, 16px tablet, 18px desktop)

### Footer

- Contains 3 social icon links: Instagram, Mail, LinkedIn
- Icon sizes: 24px mobile, 28px tablet/desktop
- Icon gap: 40px mobile, 60px tablet/desktop
- Footer text "Other works and contacts" visible on tablet+ only
- Links:
  - Instagram: `https://www.instagram.com/reb_fa_cose/`
  - Mail: `mailto:reb.guerrini@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/rebecca-guerrini-53b9401b7`

### CTA Buttons (View Button)

- Background: `--color-secondary-700` (#21583A)
- Border: 1px solid `--color-secondary-800` (#083E20)
- Border-radius: 50px (pill shape)
- Text: white
- Padding: 12px 16px mobile, 12px 20px tablet/desktop
- Font size: 14px mobile, 18px tablet/desktop

### Project Cards

- Background: mint gradient with overlay
  ```css
  background: linear-gradient(90deg, rgba(223, 223, 223, 0.3), rgba(223, 223, 223, 0.3)),
              linear-gradient(90deg, #F7FFFB, #F7FFFB);
  ```
- Box shadow: `0px 0px 3px rgba(112, 172, 180, 0.3)`
- Tag: white background (changed from purple)
- Image: 1px border `#F9FAFB`
- Reading time moved below description (not in CTA area)
- Layout: Fixed 422px width on tablet/desktop, full-width on mobile

### Case Study Components (runnable.html)

#### Hero Card
- `.case-study-hero`: flex row, `--color-primary-50` bg, 16px radius, 28px/32px padding, 40px gap
- Image: 366×273px, 16px radius, object-fit cover
- Info: title, subtitle, meta rows (Type/Process/Client), reading time

#### Content Container
- `.case-study-content`: 640px max-width, centered, 80px section gap
- Section titles: Poppins SemiBold 28px/36px, centered
- Subtitles: Poppins SemiBold 20px/28px, centered

#### Step Boxes
- `.step-box--violet`: `--color-secondary-50` background
- `.step-box--green`: `--color-green-100` background
- 16px padding, 8px radius

#### Insight/Suggestion Boxes
- `.insight-box`: 1px border `--color-neutral-400`, 16px padding, 8px radius
- `.insight-box--dark`: 1px border `--color-neutral-500`
- `.suggestion-box`: `--color-neutral-100` background, 16px padding, 8px radius

#### Personas
- `.persona-row`: flex, 16px gap, align-items center
- `.persona-row--reverse`: flex-direction row-reverse
- Image height: 200px, width auto

#### Tables
- Competitor table: horizontal scroll wrapper, flex columns, 16px gap
- Values table: 2 columns, green/red headers for "We are"/"We are not"

#### Mockups
- `.mockup-row`: flex, 24px gap, align-items center
- `.mockup-row--reverse`: flex-direction row-reverse
- `.mockup-grid--three`: 3 images in a row (tablet+)
- `.mockup-grid--two`: 2 images in a row (tablet+)
- `.mockup-grid--two-by-two`: 2x2 grid (tablet+)
- Images: 16px radius, box-shadow `0px 1px 4px rgba(0,0,0,0.25)`
- Sizes: phone 278px, medium 252px, small 216px width

#### Decorative Elements
- `.deco-circle`: rounded decorative backgrounds (Runnable)
- `.deco-rect`: rectangular decorative backgrounds (Journeal)
- `.deco-rect--teal`: `#E7F3F5` background
- `.deco-rect--violet`: `#F3EFF7` background
- `.deco-rect--violet-dark`: `#D6C7E2` background
- Size variants: `--wide` (1300×588), `--medium` (800×1196), `--square-lg` (300×300), `--square-sm` (200×200)

#### Back Link
- 28px SVG icon with text
- `--color-secondary-400` on hover

## CSS Architecture

### Modular File Structure

The CSS is split into focused modules in `src/styles/`. Import order is managed by `main.css`:

1. **`base.css`** — Design tokens (`:root` custom properties), CSS reset, reduced motion, skip link
2. **`layout.css`** — `.page-wrapper`, `.header`, `.nav-button`, `.footer` + tablet/desktop breakpoints
3. **`components.css`** — `.btn-cta`, `.project-card` and all card elements + breakpoints
4. **`homepage.css`** — `.main-content`, `.hero`, `.hero__image`, `.hero__text` + breakpoints
5. **`pages.css`** — `.projects-page`, `.projects-grid`, `.about-page`, `.about-content` + breakpoints
6. **`case-study.css`** — All case study components (hero, sections, boxes, personas, tables, mockups, decorative circles/rectangles) + all breakpoints

### Organization Principles

- **Mobile-first**: Base styles for mobile, media queries for larger screens
- **Co-located breakpoints**: Each file contains its own responsive overrides
- **Dependency order**: Variables must load first; page-specific styles load last

### Naming Convention

Uses BEM-like naming:
- Block: `.header`, `.nav-button`, `.project-card`
- Element: `.header__logo`, `.project-card__title`
- Modifier: `.nav-button--active`, `.projects-page`

## Code Style Guidelines

### HTML

- Use semantic elements over generic divs
- Include proper `lang` attribute on `<html>`
- All images must have descriptive `alt` attributes
- Use `role` attributes where helpful (e.g., `role="banner"`, `role="main"`)

### CSS

- Mobile-first approach: base styles for mobile, then `@media (min-width: ...)` for larger screens
- Use CSS custom properties for all colors, spacing, and typography values
- Include `transition` properties but wrap in `prefers-reduced-motion` check
- Use `rem` units for typography, `px` for borders and small fixed values

### JavaScript

- Minimal JS usage - prefer CSS solutions
- Keep `main.js` as simple entry point for CSS import

## Page-Specific Notes

### Homepage (index.html)

- Mint gradient background: `linear-gradient(90deg, var(--color-bg-overlay), var(--color-bg-overlay)), var(--color-bg-mint)`
- `.homepage` class on body
- Hero layout:
  - Desktop: horizontal flex (image left 491×553px, text right, 60px gap)
  - Tablet/Mobile: centered vertical stack
- Hero image: `border-radius: 0 0 50px 50px`, 95% opacity
- No side-frame panel (removed in redesign)
- Header outside hero section as direct child of `.page-wrapper`

### Projects Page (projects.html)

- White/neutral background
- `.projects-page` class on body
- 3 project cards: Runnable, Journeal, Busuu
- Grid layout:
  - Mobile: single column stacked, full-width cards
  - Tablet: single column, fixed 422px card width, centered
  - Desktop: 3-column row, fixed 422px card width, space-between
- Cards use mint gradient background with box shadow

### About Page (about.html)

- Mint gradient background (same as homepage)
- `.about-page` class on body
- Biographical content with 5 images in rounded shapes
- Layout: alternating rows of text and image pairs
- Images have unique border-radius variations (50px corners)
- Contains Instagram link to `@reb_fa_cose`

### Case Study Pages (runnable.html, journeal.html, busuu.html)

- White background with 80px horizontal padding (desktop)
- `.case-study-page` class on body
- Structure: header → hero card → back link → content sections → footer

#### Hero Card
- Background: mint gradient with overlay (same as project cards)
- Box shadow: `0px 0px 3px rgba(112, 172, 180, 0.3)`
- Layout:
  - Mobile: column (image on top, 100% width)
  - Tablet+: row (image left 366×273px fixed, info right, 40px gap)
- Padding: 28px × 32px, border-radius: 16px
- Content: 640px centered container with 80px vertical section gaps
- Sections include: User Story, Problem, Target Users, Customer Journey, Primary Research, Personas, Competitor Analysis, Sitemaps, Lean Branding, Designs, Testing
- Uses `<strong>` tags for inline bold text emphasis
- Tables use horizontal scroll wrapper for wide content
- Mockup images have fixed widths with auto height
- Back link: arrow-icon.svg with text, no hover state

#### Runnable Specifics
- Uses `.deco-circle` decorative elements behind mockups

#### Journeal Specifics
- Sections include: User Story, Problem, Target Users, Primary Research, Personas, Sitemap, Lean Branding, Designs, Testing
- Designs section has two subsections: Journaling and Therapy
- Uses `.deco-rect` decorative rectangles (teal for Journaling, violet squares for Therapy)
- Includes one video mockup in Journaling section intro
- Two palette images in Lean Branding section

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```
