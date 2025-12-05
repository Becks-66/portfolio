# Plan: Add Busuu Case Study Page

Create a new `busuu.html` case study page following the exact structure and patterns from `runnable.html` and `journeal.html`, using the text content from the Figma design.

## Steps

### 1. Create `busuu.html`

Using the case study template from `runnable.html`: include doctype, head with meta tags and Google Fonts, body with `case-study-page` class, skip link, `.page-wrapper`, header, main with `#main-content`, and footer with email SVG icon.

### 2. Build Hero Card

- Title: "Busuu"
- Subtitle: "Redesign of an app for learning language."
- Type: "UX Project"
- Process: "Redesign"
- Client tag: "Personal project"
- Reading time: "10 minutes"
- Hero image: `Stories section.png`

### 3. Add Content Sections

Using existing CSS classes:

#### User Story
Single `.section` with paragraph text about Elisa learning German.

#### About Busuu
Single `.section` with 2 paragraphs describing the app.

#### Problems
`.section` with:
- Intro text
- 4 `.step-box--violet` boxes
- `.mockup-grid--two` with images:
  - `5852843400342735746.jpg`
  - `5852843400342735747.jpg`

#### Research Questions
`.section` with 2 `.insight-box` elements.

#### Redesign Process
`.section--large-gap` with 3 subsections:

1. **Rethink Review**: `.step-box--violet` with bullet list + images:
   - `Review section - Grammar.png`
   - Video: `Registrazione schermo 2025-11-25 alle 16.45.22.mp4`
   - `Review section - Vocabulary.png`

2. **Add Stories**: `.step-box--violet` + images:
   - `Stories section.png`
   - `A day of shopping.png`

3. **Add Battle**: `.step-box--violet` + 3 images:
   - `Community section - Battle on.png`
   - `Community section - Battle timer.png`
   - `Community section - Battle completed.png`

#### Testing
`.section--large-gap` with:
- Experimental design (bullet list)
- Measures (6 measure groups each with description and `.step-box--violet` containing questionnaire items)
- Expected outcomes (bullet list)

## Assets

All assets available in `public/images/busuu/`:
- `5852843400342735746.jpg`
- `5852843400342735747.jpg`
- `A day of shopping.png`
- `Community section - Battle completed.png`
- `Community section - Battle on.png`
- `Community section - Battle timer.png`
- `Registrazione schermo 2025-11-25 alle 16.45.22.mp4`
- `Review section - Grammar.png`
- `Review section - Vocabulary.png`
- `Stories section.png`

## Notes

- No CSS changes needed — existing `case-study.css` has all required component styles
- No decorative elements specific to Busuu
- Project card already exists in `projects.html`
