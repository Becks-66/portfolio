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
├── package.json            # Vite dependencies
├── docs/                   # Planning documents
│   ├── homepage.plan.md
│   └── projects.plan.md
├── public/
│   └── images/             # Static assets (illustration.png, mail-icon.svg)
└── src/
    ├── main.js             # Entry point (imports style.css)
    └── style.css           # All styles (mobile-first approach)
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
--color-primary-50: #E7F3F5    /* Light teal - card/page backgrounds */
--color-primary-600: #56929A   /* Medium teal - CTA button border */
--color-primary-700: #3D7981   /* Dark teal - CTA button background */
--color-secondary-50: #F3EFF7  /* Light purple - tag background */
--color-secondary-400: #734F88 /* Purple - active nav, focus states */
--color-neutral-900: #111827   /* Near black - primary text */
--color-neutral-700: #374151   /* Dark gray - secondary text */
--color-neutral-200: #E5E7EB   /* Light gray - borders */
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

## CSS Architecture

### Organization

The CSS follows this order in `style.css`:

1. Custom Properties (`:root`)
2. CSS Reset & Base Styles
3. Skip Link
4. Layout Components (page-wrapper, header, side-frame, main-content, footer)
5. Typography
6. Buttons & Interactive Elements
7. Page-Specific Styles (homepage hero, projects grid/cards)
8. Tablet Breakpoint (`@media (min-width: 768px)`)
9. Desktop Breakpoint (`@media (min-width: 1024px)`)
10. Large Desktop Breakpoint (`@media (min-width: 1360px)`)

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

## Assets

Images are stored in `public/images/`:
- `illustration.png` - Portrait illustration for homepage side frame
- `mail-icon.svg` - Email icon for footer
- Project card images (to be added)

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```
