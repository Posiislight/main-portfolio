# Portfolio Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the warm editorial dark/light design system from the spec to the home page and case-study pages of main-portfolio, keeping all existing content and routes.

**Architecture:** New tokens are added next to the old Ledger tokens (additive), pages are migrated one at a time so the build stays green, and the old tokens are deleted in the last task. Tokens live as CSS variables in `app/globals.css`, mapped into Tailwind under non-conflicting names. Theme switching uses `next-themes` (already installed) with the `.dark` class.

**Tech Stack:** Next.js 15, React, Tailwind 3, next-themes, next/font (Geist and Instrument Serif are already loaded in `app/layout.tsx`), lucide-react, Node built-in test runner.

**Spec:** `docs/superpowers/specs/2026-10-22-portfolio-restyle-design.md`

## Global Constraints

- Colour, shadow and grain values come verbatim from the spec's Tokens table (dark and light columns).
- Container max 1200px, side padding `px-6 md:px-10`; header height `h-16 md:h-[72px]`.
- Buttons are pills, `h-11`, `px-5`, `text-sm font-medium`.
- Reveal motion 0.3s ease-out; colour transitions 0.15-0.2s; all motion disabled under `prefers-reduced-motion`.
- All copy, routes (`/`, `/projects/[slug]`), `lib/projects.ts` text, images, `next.config.mjs` and `vercel.json` stay unchanged.
- No new dependencies. No new top-level folders. Local commits only; no push, no merge to `main`.
- Work in `C:\Users\adele\scratch-main-portfolio` on branch `restyle/warm-dark-editorial`.
- Commit messages end with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.
- Theme: `next-themes` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`. First visit follows the OS; the toggle persists the choice. The dark palette is the `.dark` class, the light palette is `:root`.

## Review Focus

- First paint must not flash the wrong theme (no flicker on reload in either theme).
- Content wrapped in `Reveal` must stay visible without JS, without `IntersectionObserver`, and under reduced motion.
- Copy-email must still open the `mailto:` link when `navigator.clipboard` is missing or rejects.
- No horizontal scroll at 375px (long email, long titles, tech row).
- Accent text on `brand-soft` and muted text on `surface` and `showcase` pass WCAG AA in both themes.

---

## File Structure

| File | Responsibility |
|---|---|
| `app/globals.css` | Theme tokens (`:root`, `.dark`), grain overlay, reveal and header-fade CSS |
| `tailwind.config.ts` | Maps tokens to Tailwind colours and shadows; drops the Ledger palette last |
| `app/layout.tsx` | Fonts, `ThemeProvider`, body classes |
| `components/theme-provider.tsx` | next-themes wrapper |
| `components/theme-toggle.tsx` | Round sun/moon toggle |
| `components/reveal.tsx` | Scroll reveal wrapper |
| `components/copy-email.tsx` | Click-to-copy email with mailto fallback |
| `components/site-header.tsx` | Sticky header, nav, toggle, mobile menu (rewrite) |
| `components/site-footer.tsx` | Footer (restyle) |
| `components/stack-row.tsx` | Technology row |
| `app/page.tsx` | Home sections (rewrite) |
| `app/projects/[slug]/page.tsx` | Case-study page (restyle) |
| `lib/contrast.test.mjs` | Contrast test that reads tokens from `globals.css` |

---

### Task 1: Tokens and contrast test

**Files:**
- Modify: `app/globals.css`, `tailwind.config.ts`, `package.json` (add script)
- Create: `lib/contrast.test.mjs`

**Interfaces:**
- Produces: CSS variables `--canvas --surface --showcase --fg --fg-muted --line --stroke --brand --brand-hover --brand-soft --logo --ok --grain-opacity --grain-blend --shadow-soft --shadow-lift` on `:root` (light) and `.dark`. Tailwind colours `canvas surface showcase fg fg-muted line stroke brand brand-hover brand-soft logo ok` (each `var(--x)`), and shadows `shadow-soft`, `shadow-lift`. The Ledger names stay until Task 7.

- [ ] **Step 1: Install and baseline.** Run `npm ci` then `npm run build`. Expected: the build succeeds on the untouched code (if it does not, stop and report).
- [ ] **Step 2: Write `lib/contrast.test.mjs`** using `node:test`. It reads `app/globals.css`, collects `--name: #hex` pairs from every top-level `:root {...}` block (light) and every `.dark {...}` block (dark) separately, and asserts a WCAG contrast ratio of at least 4.5 for each of `fg/canvas`, `fg-muted/canvas`, `fg-muted/surface`, `fg-muted/showcase`, `brand/canvas`, `brand/brand-soft`, and at least 3 for `logo/canvas`, in both themes. Test names look like `light: fg-muted on canvas >= 4.5`. Add the script `"test:contrast": "node --test lib/contrast.test.mjs"`.
- [ ] **Step 3: Run `npm run test:contrast`.** Expected: FAIL (tokens not defined yet).
- [ ] **Step 4: Add the tokens to `app/globals.css`** as top-level `:root` (light values) and `.dark` (dark values) blocks, exactly per the spec table, plus `--shadow-*` and the grain variables. Add the Tailwind colour and shadow mappings. Point the shadcn variables (`--background`, `--foreground`, `--card`, `--border`, `--muted`, `--accent`, and so on) at the new tokens, and change the shadcn colour entries in `tailwind.config.ts` from `hsl(var(--x))` to `var(--x)` so `components/ui/*` follows the theme.
- [ ] **Step 5: Run `npm run test:contrast`.** Expected: all PASS. If a pair fails, report the pair and its ratio instead of changing the spec colours.
- [ ] **Step 6: Commit** `feat: add warm editorial theme tokens and contrast test`.

### Task 2: Theme provider, toggle, grain, layout

**Files:**
- Create: `components/theme-provider.tsx`, `components/theme-toggle.tsx`
- Modify: `app/layout.tsx`, `app/globals.css`

**Interfaces:**
- Produces: `ThemeProvider` (wraps `NextThemesProvider`, props passed through) and `ThemeToggle(): JSX.Element` (a 40px round button labelled `Switch to light mode` or `Switch to dark mode`; renders a same-size placeholder until mounted so nothing shifts).

- [ ] **Step 1: Implement `ThemeProvider`** with `attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange`.
- [ ] **Step 2: Implement `ThemeToggle`** with lucide `Sun` and `Moon`, an `aria-label` per state, and `hover:bg-brand-soft`.
- [ ] **Step 3: Update `app/layout.tsx`:** add `suppressHydrationWarning` on `<html>`, wrap children in `ThemeProvider`, and set body classes to `min-h-dvh bg-canvas font-sans text-fg antialiased`. Keep the fonts and metadata as they are.
- [ ] **Step 4: Add the grain to `globals.css`:** `body::before` fixed, `inset: 0`, `pointer-events: none`, `z-index: 1`, an inline SVG `feTurbulence` data URI (`baseFrequency .75`, `numOctaves 4`, `stitchTiles stitch`), `opacity: var(--grain-opacity)`, `mix-blend-mode: var(--grain-blend)`. The spec lists a `GrainOverlay` component; a CSS pseudo-element gives the same result with no JS.
- [ ] **Step 5: Verify.** `npm run build` passes. Run `npm run dev` in the background, load `http://localhost:3000` in the browser pane, and confirm the dark background is `rgb(18, 18, 17)` and the grain is visible. Switch to light, reload, and confirm there is no flash.
- [ ] **Step 6: Commit** `feat: theme provider, toggle and grain overlay`.

### Task 3: Reveal and CopyEmail

**Files:**
- Create: `components/reveal.tsx`, `components/copy-email.tsx`
- Modify: `app/globals.css` (`.reveal` rules)

**Interfaces:**
- Produces: `Reveal({ children, className?, as? }: { children: ReactNode; className?: string; as?: ElementType })` and `CopyEmail({ email, className? }: { email: string; className?: string })`.

- [ ] **Step 1: `Reveal`.** Client component. The hidden state (`opacity: 0; transform: translateY(12px)`) applies only under `html.js .reveal:not([data-in])`. `Reveal` adds the `js` class to `document.documentElement` in an effect, so visitors without JS see everything. It uses `IntersectionObserver` (threshold 0.15, once). If `IntersectionObserver` is undefined or `prefers-reduced-motion: reduce` matches, it sets `data-in="true"` immediately. Transition: `opacity .3s ease-out, transform .3s ease-out`.
- [ ] **Step 2: `CopyEmail`.** Renders `<a href="mailto:{email}">` plus a "Click to copy" hint. On click it calls `event.preventDefault()` and `await navigator.clipboard.writeText(email)` inside try/catch. On success it shows "Copied" for 2 seconds in an `aria-live="polite"` region. If the API is missing or rejects, it sets `window.location.href` to the mailto instead.
- [ ] **Step 3: Verify in the browser pane** after Task 5 puts them on the page: with `navigator.clipboard` stubbed to reject, a click still opens the mailto; with JavaScript disabled (DevTools override), the content is visible.
- [ ] **Step 4: Commit** `feat: reveal and copy-email components`.

### Task 4: Header, mobile menu, footer

**Files:**
- Modify: `components/site-header.tsx`, `components/site-footer.tsx`, `app/globals.css`

**Interfaces:**
- Consumes: `ThemeToggle` (Task 2).
- Produces: `SiteHeader({ backToWork?: boolean })` (same props as today) and `SiteFooter()`.

- [ ] **Step 1: Rewrite `SiteHeader`.** Sticky `top-0 z-40` with the container from Global Constraints. Wordmark `Posi.` in serif with the dot in `text-brand`. Nav links `Work`, `About`, `Services`, `Contact` (`text-sm font-medium text-fg-muted hover:text-fg`), then `ThemeToggle`, and from `lg` the status dot (`bg-ok`) with "Open to freelance projects". The bottom border is transparent at the top and becomes `border-line` once `scrollY > 8` (client passive scroll listener). Keep the `backToWork` variant ("All work" with `ArrowLeft`).
- [ ] **Step 2: Mobile menu.** Keep the existing open, close, Escape and scroll-lock behaviour, restyled with `bg-canvas`, `border-line`, serif links and 44px targets.
- [ ] **Step 3: Add a "Skip to content" link** as the first focusable element, targeting `#main`. The home and case-study `main` elements get `id="main"` in Tasks 5 and 6.
- [ ] **Step 4: Restyle `SiteFooter`** with `border-line`, `text-fg-muted`, and links that hover to `text-brand`.
- [ ] **Step 5: Verify.** `npm run build` passes. In the browser pane at 375px and 1280px: the header shows, the menu opens and closes with Escape, the toggle switches themes, and the border fades in on scroll.
- [ ] **Step 6: Commit** `feat: restyle header, mobile menu and footer`.

### Task 5: Home page

**Files:**
- Create: `components/stack-row.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `Reveal`, `CopyEmail`, `SiteHeader`, `SiteFooter`, and `featuredStudies`, `otherStudies`, `CaseStudy` from `lib/projects.ts`.
- Produces: `StackRow(): JSX.Element`, a labelled list of monochrome text chips (`text-logo`, hover `text-fg`) with: `Next.js, React, TypeScript, Python, Django, Java, Spring Boot, AWS, Stripe, PostgreSQL`. Text only, no logo images.

- [ ] **Step 1: Hero.** Height `min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-72px)]`. A 64px round `next/image` of `public/developer-avatar.png`. `h1` "I build the parts of a product that *have to hold up.*" with the italic span in `text-brand`, serif, `text-4xl md:text-6xl`. The existing intro paragraph in `text-fg-muted`. A primary pill "See the work" and a secondary pill "Start a project".
- [ ] **Step 2: Stack row section** below the hero, labelled "Tools I build with".
- [ ] **Step 3: Selected work.** `featuredStudies` as stacked cards: `bg-surface`, `rounded-2xl`, `shadow-soft hover:shadow-lift`; a `bg-showcase` media area using the existing `image` and `imagePosition`; then number, category and status tags, serif title, summary, highlights, and the links "Read the case study" and "Visit site". Do not edit `lib/projects.ts`.
- [ ] **Step 4: More work.** `otherStudies` in a `md:grid-cols-2 lg:grid-cols-3` grid of smaller cards with the same styling.
- [ ] **Step 5: About, What I build, Contact.** About keeps its two existing paragraphs on a plain `bg-canvas` section (no ink block). Services keep the three existing items as `surface` cards. Contact keeps the heading "Have something that needs to *hold up?*", uses `CopyEmail` with `adelekeolamiposi@gmail.com`, keeps the existing reply-time sentence, and links to GitHub. Wrap sections in `Reveal`, and give `<main>` `id="main"`.
- [ ] **Step 6: Verify.** `npx tsc --noEmit` and `npm run build` pass. Take browser-pane screenshots of the home page in dark and light at 375, 768 and 1280, and confirm no horizontal scroll at 375px (`document.documentElement.scrollWidth <= innerWidth`).
- [ ] **Step 7: Commit** `feat: restyle home page`.

### Task 6: Case-study page

**Files:**
- Modify: `app/projects/[slug]/page.tsx`

**Interfaces:**
- Consumes: the same data and components as Task 5. `generateStaticParams`, `generateMetadata` and the route params are unchanged.

- [ ] **Step 1: Restyle the sections:** overview (serif title, muted lede, meta list with `border-line`), hero image in a rounded `bg-showcase` frame, problem and what-I-built (muted body text, serif pull quote), features as numbered `surface` cards, a "Next project" row with `border-line` and the arrow, and `id="main"`. Replace every Ledger class (`text-ink*`, `border-rule`, `bg-sand`, `text-moss`).
- [ ] **Step 2: Verify.** `npm run build` lists all five slugs. Open `/projects/lawangels` and `/projects/the-hague-industries` (the last study, whose "Next" wraps to the first) in both themes at 375 and 1280. Confirm `/projects/nope` still renders the 404 page.
- [ ] **Step 3: Commit** `feat: restyle case-study pages`.

### Task 7: Remove Ledger tokens and final verification

**Files:**
- Modify: `tailwind.config.ts`, `app/globals.css`, and any file still using old classes

- [ ] **Step 1: Find leftovers.** Run `grep -rnE "text-ink|bg-ink|border-ink|border-rule|bg-paper|bg-sand|text-moss|bg-moss|bone|font-mono" app components`. Fix every match. Expected after fixing: no matches.
- [ ] **Step 2: Delete the Ledger palette** (`paper`, `sand`, `rule`, `ink`, `moss`, `bone`) from `tailwind.config.ts`, and replace the Ledger-specific `::selection` and focus colours in `globals.css` with `brand`.
- [ ] **Step 3: Full checks.** `npm run test:contrast`, `npx tsc --noEmit` and `npm run build` all pass. Tab through the home page: every interactive element shows a visible brand-coloured focus ring, and the skip link works.
- [ ] **Step 4: Final screenshots** of the home page and one case study, dark and light, at 375, 768 and 1280, saved to the scratchpad for the owner. Compare typography, spacing and grain against the reference.
- [ ] **Step 5: Update docs.** Add a "Design system" section to `README.md` listing the tokens, fonts and theme toggle.
- [ ] **Step 6: Commit** `chore: remove Ledger tokens, final polish`. Stop here and ask the owner before pushing the branch for a Vercel preview.
