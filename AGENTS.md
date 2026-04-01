# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Build and deploy to GitHub Pages
```

## Visual Verification

For visual or layout changes, verify the result with `plaxwright-cli` skill and compare it against the relevant design reference when one is available. Do not use `npm run build` as a substitute for visual verification.

## Architecture

Pure HTML/CSS/minimal JS site built with Vite. No frameworks, no CSS preprocessors.

**Pages**: `index.html` (homepage), `projects.html`, `runnable.html`, `journeal.html`

**CSS** is modular in `src/styles/`, imported in order via `main.css`:
1. `base.css` — design tokens (CSS custom properties), reset, accessibility
2. `layout.css` — header, nav, footer, page wrapper
3. `components.css` — buttons, project cards
4. `homepage.css` — hero section
5. `pages.css` — projects grid
6. `case-study.css` — all case study components

`src/main.js` is only an entry point that imports `styles/main.css`.

## Design System

**Mobile-first breakpoints**: 768px (tablet), 1024px (desktop), 1360px (large desktop)

**Fonts**: Montserrat 400 (headings/logo), Poppins 400/500/600 (body/UI) — loaded from Google Fonts

**Key color tokens** (defined in `base.css`):
- `--color-bg-mint: #F7FFFB` — homepage hero background
- `--color-primary-500: #4B3259` — active nav background
- `--color-secondary-700: #21583A` — CTA button background
- `--color-secondary-400: #734F88` — focus states, hover

**Spacing scale**: `--space-xs: 10px`, `--space-sm: 20px`, `--space-md: 40px`, `--space-lg: 60px`, `--space-xl: 80px`

**Border radius**: `--radius-sm: 4px`, `--radius-md: 16px`, `--radius-lg: 50px`

## CSS Conventions

- BEM-like naming: `.project-card`, `.project-card__title`, `.nav-button--active`
- Each CSS file contains its own `@media` breakpoints (co-located, not centralized)
- All colors, spacing, and typography use CSS custom properties from `base.css`
- Transitions must be wrapped in `prefers-reduced-motion` check
- `rem` for typography, `px` for borders and small fixed values

## Accessibility Requirements

- Skip link at page top → `#main-content`
- `aria-current="page"` on active nav item
- `aria-label="Main navigation"` on `<nav>`
- Visible `:focus-visible` styles on all interactive elements using `--focus-ring`
- Descriptive `alt` text on all images
- Respect `prefers-reduced-motion`

## Page-Specific Notes

- **Homepage**: soft mint-to-lilac gradient hero background; body class `.homepage`
- **Projects**: white background; body class `.projects-page`; 2 cards in `.projects-grid`
- **Case studies**: white background; body class `.case-study-page`; structure is header → hero card → back link → `.case-study-content` (640px max-width) → footer
- Static assets (images, SVGs, video) live in `public/images/` and are referenced as `/images/...`
