# Portfolio restyle: warm editorial dark/light system

Date: 2026-10-22
Repo: Posiislight/main-portfolio (Next.js 15, Tailwind, shadcn from v0)
Branch: restyle/warm-dark-editorial (local only until approved)

## Intent

Restyle the portfolio so its layout, polish and feel match a reference
portfolio (gbekeodutuga.vercel.app) that the owner admires, while keeping
the owner's own content. Success: the site reads as the same family of design
(typography, warm palette, grain, spacing, motion, dark/light toggle) with
zero of the reference's name, photo, copy, projects or logos.

Not a content rewrite. Not a framework change. No new top-level folders.

## Source of truth for the design

Values were read from the live reference site's computed styles (public
CSS), not guessed. Fonts used are open source: Instrument Serif and Geist.

### Tokens

| Token | Dark (default) | Light |
|---|---|---|
| bg | #121211 | #f5f2ea |
| surface | #191917 | #fbf9f4 |
| showcase | #1e1d1b | #ebe7dd |
| text | #f2efe8 | #111 |
| text-muted | #a29e95 | #5a5750 |
| border | #2d2b28 | #dcd6c9 |
| stroke | #3a3834 | #cfc8b9 |
| accent | #d2909f | #6b2a3a |
| accent-hover | #dfa8b4 | #55202e |
| accent-soft | #261a1e | #ecdfe2 |
| logo-color | #b5afa5 | #5f5a54 |
| success | #9cb38f | #6b8560 |
| grain opacity / blend | .22 / normal | .7 / multiply |
| shadow-soft | 0 1px 2px #0000004d | 0 1px 2px #1111110a |
| shadow-lift | 0 1px 2px #00000059, 0 16px 32px -20px #000000b3 | 0 1px 2px #1111110d, 0 16px 32px -20px #11111140 |

The owner's "Open to freelance" status dot uses `success`.

### Type
- Headings: Instrument Serif 400, h1 ~36px mobile scaling up, h2 38px,
  h3 34px, tracking about -0.015em, line-height about 1.05. One italic
  accent-coloured word in each major heading.
- Body: Geist, 14px UI / 16px paragraphs, line-height 1.6, muted colour for
  paragraphs. Loaded with next/font (geist package is already a dependency;
  Instrument Serif via next/font/google).
- The old mono uppercase labels and 96-128px display sizes are dropped.

### Layout
- Container max 1200px, 24px side padding (40px from md).
- Sticky header, 64px / 72px, bottom hairline transparent at top and fading to
  `border` after scroll. Logo wordmark, nav, theme toggle (round, 40px).
- Sections vertical padding py-16 md:py-24 (md:py-28 for Work and About).
- Pill buttons, 44px tall, 20px inline padding, 14px/500. Primary is
  text-on-bg inverted, hover to accent. Secondary is outline.
- Cards: `surface` background on `showcase` media area, rounded, shadow-soft,
  shadow-lift on hover. Hairline borders, no heavy 1px ink rules.
- Grain: fixed full-viewport overlay using an inline SVG feTurbulence data
  URI, pointer-events none, opacity and blend per theme.

### Motion
- Section reveal: opacity and translateY, 0.3s ease-out, triggered once by
  IntersectionObserver.
- Colour transitions 0.15-0.2s on links, buttons, header border.
- Logo row: monochrome, shifts to full colour or text colour on hover.
- All motion respects prefers-reduced-motion (already in globals.css).

## Page structure (home)

1. Header (sticky).
2. Hero, min-height fills the viewport: small round avatar, h1 with italic
   accent word, short bio paragraph, primary pill CTA. Owner's existing
   positioning kept: "I build the parts of a product that have to hold up."
3. Tech/Stack row in place of the reference's "teams" logo row, built from
   the technologies the owner actually uses (monochrome marks, text
   fallbacks). Reference logos are not reused.
4. Selected work: the existing featured case studies as stacked cards
   (image, title, category tags, one-line summary, "Read case study" and
   "Visit site" links).
5. More work: remaining studies in a 2-3 column grid of smaller cards.
6. About: compact biography, with the existing copy. No collage unless the
   owner supplies photos (placeholder is left out, not faked).
7. What I build: existing three services, restyled as cards.
8. Contact: heading with italic accent word, click-to-copy email with
   "Copied" feedback, GitHub link, availability note.
9. Footer: copyright and links.

## Case-study pages

Same system: header with "All work" back link, serif title, lede in muted
text, a quiet meta list (role, sector, live link), full-width image on
`showcase`, problem / what I built / features / next-study sections using the
new type scale and card style. Routes, slugs and generateStaticParams unchanged.

## Preserved (do not change)

- All text in lib/projects.ts, services, about copy, email, GitHub URL.
- Routes: /, /projects/[slug]. Images in /public.
- Metadata, next.config.mjs, vercel.json, deployment wiring.

## Removed / replaced

- Ledger palette (paper, sand, ink, moss, bone) and the mono uppercase label
  style, replaced by tokens above.
- Full-bleed ink About block and 128px hero type.
- Unused v0 leftovers are NOT cleaned up in this change (out of scope).

## Technical approach

- Define the tokens as CSS variables on :root and .dark in app/globals.css
  and map them into tailwind.config.ts (bg, surface, showcase, text, muted,
  border, accent...). Map shadcn variables onto the same tokens so existing
  ui/* components follow the theme.
- next-themes is already installed. Use attribute="class", defaultTheme
  "dark" with enableSystem so first visit follows the OS and the toggle
  persists. Add inline no-flash handling via next-themes.
- New small components: ThemeToggle, Reveal (IntersectionObserver wrapper),
  GrainOverlay, CopyEmail, StackRow. Existing SiteHeader/SiteFooter/page are
  rewritten in place.
- No new dependencies expected beyond next/font/google.

## Accessibility and quality bars

- WCAG AA contrast for text and accent in both themes (verified with a
  script, not by eye).
- Visible focus styles using accent, skip-to-content link, 44px touch targets.
- No layout shift from fonts (next/font), images keep explicit sizing.
- Works at 375px, 768px, 1200px+.

## Verification (the repo has no tests)

- `npx tsc --noEmit` and `npm run build` pass (note next.config ignores TS
  and lint errors, so tsc is run explicitly).
- Playwright or browser-pane screenshots of home and one case study in light
  and dark at 375 / 768 / 1280, compared against the reference's feel.
- Contrast check script for the token pairs above.
- Vercel preview deployment of the branch for the owner to review. Nothing is
  merged to main or pushed without the owner's explicit approval.

## Risks and open items

- The owner has a recent "Ledger" redesign on main; this replaces it. The
  old look stays recoverable in git history.
- Avatar and any collage photos must come from the owner. Until supplied the
  avatar uses the existing developer-avatar.png.
- Tech logo marks: use simple-icons style SVGs or text only; confirm none are
  copied from the reference.
- Reference is another designer's work; only the visual system is borrowed.
