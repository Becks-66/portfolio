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
├── runnable.html           # Runnable case study page
├── package.json            # Vite dependencies
├── docs/                   # Planning documents
│   ├── homepage.plan.md
│   ├── projects.plan.md
│   └── runnable.plan.md
├── public/
│   └── images/             # Static assets
│       ├── illustration.png
│       ├── mail-icon.svg
│       └── runnable/       # Runnable case study assets
└── src/
    ├── main.js             # Entry point (imports styles/main.css)
    └── styles/             # Modular CSS architecture
        ├── main.css        # Aggregator - imports all other CSS files
        ├── base.css        # Design tokens, CSS reset, accessibility (skip link)
        ├── layout.css      # Page wrapper, header, footer + breakpoints
        ├── components.css  # Reusable UI: buttons, project cards
        ├── homepage.css    # Hero, side-frame, mobile illustration
        ├── projects.css    # Projects page grid and overrides
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
/* Primary */
--color-primary-50: #E7F3F5    /* Light teal - card/page backgrounds */
--color-primary-600: #56929A   /* Medium teal - CTA button border */
--color-primary-700: #3D7981   /* Dark teal - CTA button background */

/* Secondary */
--color-secondary-50: #F3EFF7  /* Light purple - tag background, step boxes */
--color-secondary-400: #734F88 /* Purple - active nav, focus states, back link hover */

/* Neutral */
--color-neutral-100: #F3F4F6   /* Light gray - suggestion boxes */
--color-neutral-200: #E5E7EB   /* Light gray - borders */
--color-neutral-400: #9CA3AF   /* Gray - insight box borders */
--color-neutral-500: #6B7280   /* Darker gray - insight box border variant */
--color-neutral-700: #374151   /* Dark gray - secondary text */
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

### Navigation Buttons

- Default state: white background
- Active state: `--color-secondary-400` (#734F88) background, white text
- Hover state: light purple tint (`--color-secondary-50`)
- Must include focus-visible outline

### Project Cards (projects.html)

- Container: `.project-card` with primary-50 background
- Structure: tag, type info, image, title, description, CTA button
- Responsive: full-width on mobile, 422px on tablet, flex-grow in 3-column on desktop

### CTA Buttons

- Background: `--color-primary-700`
- Border: 1px solid `--color-primary-600`
- Text: white, Poppins Medium 16px
- Padding: 16px horizontal, 12px vertical

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
- Images: 16px radius, box-shadow `0px 1px 4px rgba(0,0,0,0.25)`
- Sizes: phone 278px, medium 252px, small 216px width

#### Back Link
- 28px SVG icon with text
- `--color-secondary-400` on hover

## CSS Architecture

### Modular File Structure

The CSS is split into focused modules in `src/styles/`. Import order is managed by `main.css`:

1. **`base.css`** — Design tokens (`:root` custom properties), CSS reset, reduced motion, skip link
2. **`layout.css`** — `.page-wrapper`, `.header`, `.nav-button`, `.footer` + tablet/desktop breakpoints
3. **`components.css`** — `.btn-cta`, `.project-card` and all card elements + breakpoints
4. **`homepage.css`** — `.main-content`, `.hero`, `.side-frame`, `.mobile-illustration` + breakpoints
5. **`projects.css`** — `.projects-page` overrides, `.projects-grid` + breakpoints
6. **`case-study.css`** — All case study components (hero, sections, boxes, personas, tables, mockups, decorative circles) + all breakpoints

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

- Features side-frame illustration panel (tablet/desktop only)
- Side frame: sticky, appears on left side with soft shadow
- Content area: centered with max-width constraints
- Footer includes email with mail icon

### Projects Page (projects.html)

- No side-frame illustration
- White background (add `.projects-page` class to body)
- 3 project cards in responsive grid
- Cards include: tag, type title/subtitle, image, title, description, CTA button with reading time

### Case Study Page (runnable.html)

- White background with 80px horizontal padding (desktop)
- `.case-study-page` class on body
- Structure: header → hero card → back link → content sections → footer
- Hero card: horizontal flex with image left, info right
- Content: 640px centered container with 80px vertical section gaps
- Sections include: User Story, Problem, Target Users, Customer Journey, Primary Research, Personas, Competitor Analysis, Sitemaps, Lean Branding, Designs, Testing
- Uses `<strong>` tags for inline bold text emphasis
- Tables use horizontal scroll wrapper for wide content
- Mockup images have fixed widths with auto height

## Assets

Images are stored in `public/images/`:
- `illustration.png` - Portrait illustration for homepage side frame
- `mail-icon.svg` - Email icon for footer
- Project card images

### Runnable Case Study Images (`public/images/runnable/`)
- `Register-New route.png` - Hero card image + Registration section
- `Register-New route-Type of road copia.png` - Registration section
- `Home.png` - Homescreen mockup
- `Community-Groups.png` - Community groups mockup
- `Community-Your Feed.png` - Community feed mockup
- `Activity - Past Runs - Detaills.png` - Activity details mockup
- `Palette.png` - Color palette image (529px width)
- `Humaaans - Standing copia.png` - Newbies persona
- `Humaaans - Standing 1.png` - Experienced runners persona
- `Humaaans - Standing.png` - Solitary runners persona
- `Humaaans - Standing copia 2.png` - Explorers persona

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```
