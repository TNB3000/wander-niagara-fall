---
name: Wander Niagara — Fall on the Bench
description: Fruit-crate lithography — full-ink label sections over aged stock, woodtype and caps lettering, stamp-&-spring motion with an iOS feel.
colors:
  press: "#26150f"
  concord: "#3e2459"
  concord-deep: "#2c1843"
  persimmon: "#c93a20"
  persimmon-bright: "#d8452b"
  persimmon-deep: "#a02c16"
  leaf: "#2f6b3a"
  leaf-deep: "#24522c"
  goldenrod: "#eba51f"
  goldenrod-deep: "#c8880e"
  sky: "#bfdce9"
  stock: "#f7edd6"
  stock-2: "#eddcb6"
  on-concord-2: "#cbb8e0"
  on-leaf-2: "#bfdcb9"
  on-persimmon-2: "#ffd9ce"
  on-goldenrod-2: "#543a06"
  on-stock-2: "#7a5d34"
typography:
  display:
    fontFamily: "Ultra, Rockwell Extra Bold, Archer, serif"
    fontSize: "clamp(2.5rem, 9.5vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Ultra, Rockwell Extra Bold, Archer, serif"
    fontSize: "clamp(1.7rem, 5vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.01em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.05em"
  body:
    fontFamily: "Source Sans 3, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  script:
    fontFamily: "Yellowtail, Brush Script MT, cursive"
    fontWeight: 400
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 700
    letterSpacing: "0.18em"
rounded:
  plate: "8px"
  button: "6px"
  chip: "5px"
  stamp: "4px"
spacing:
  gutter: "18px"
  section-block: "clamp(2.4rem, 7vw, 4rem)"
  card-gap: "1.3rem"
  header-h: "58px"
  wrap-max: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.persimmon}"
    textColor: "{colors.stock}"
    rounded: "{rounded.button}"
    padding: "0.85rem 1.3rem 0.8rem"
  button-primary-hover:
    backgroundColor: "{colors.persimmon-deep}"
  button-gold:
    backgroundColor: "{colors.goldenrod}"
    textColor: "{colors.press}"
    rounded: "{rounded.button}"
    padding: "0.85rem 1.3rem 0.8rem"
  button-gold-hover:
    backgroundColor: "{colors.goldenrod-deep}"
  button-stock:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.press}"
    rounded: "{rounded.button}"
    padding: "0.85rem 1.3rem 0.8rem"
  plate:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.press}"
    rounded: "{rounded.plate}"
  nav-chip:
    textColor: "{colors.stock-2}"
    rounded: "{rounded.chip}"
    padding: "0.36rem 0.7rem 0.3rem"
---

# Design System: Wander Niagara — Fall on the Bench

> Recorded from the built site (Eleventy, `src/assets/css/critical.css` + `main.css`, `src/_includes/`), 2026-08-19. The build is ground truth; the direction contract in `src/_includes/base.njk` names the world. Note: this documenter role ran inline (no subagent harness), per the degraded-mode instruction.

## Overview

**Creative North Star: "The Fruit-Crate Label"**

Every surface on this site is a lithographed fruit-crate label from the Niagara fruit belt's packing-house era. The page is a stack of labels: flat, saturated inks (concord purple, leaf green, persimmon, goldenrod) own whole sections edge-to-edge over aged label stock, framed by double-rule plates, stamped with rotated lot marks, and lettered in Ultra woodtype with Barlow Condensed caps and a single Yellowtail script flourish. Depth is printed, not lit — soft paper-lift shadows and a halftone-dot scrim, never glassy gradients or blurs. Scenery is authored flat-ink SVG lithography (the `scene.njk` orchard-and-escarpment plate), retinted per audience variant like different print runs of the same plate; real photography appears only inside bordered plates and cards, like tipped-in prints.

The build is mobile-first with a binding iOS-feel constraint: presses spring back (`--spring` damped cubic-bezier), sections stamp in once on scroll, horizontal scrollers snap, and a sticky bottom CTA rises like a sheet. It deliberately refuses the photo-hero-plus-card-grid tourism default: the first viewport is a full-bleed litho scene, a region ribbon, and crate-stamp CTAs under a slim press-ink header.

**Key Characteristics:**
- Flat litho inks own entire sections; no gradients as color, no translucency as material.
- Everything is a printed object: double-rule plates, 2px press-ink borders, rotated lot stamps.
- One motion grammar: stamp in once, spring back on press.
- Authored SVG scenes and icons in one visual weight; photos live inside plates.
- Browser chrome is themed to the world (selection, caret, scrollbars, focus ring, `theme-color`).

## Colors

A fruit-crate ink drawer: four label inks over two stocks, with press ink doing all line work, plus one tinted secondary per ground so muted text never goes gray on ink.

### Primary
- **Persimmon** (`--persimmon` #c93a20): the action ink. Buttons, links (`--persimmon-deep` #a02c16 on stock), FAQ markers, "New" event badges, the newsletter label ground (`--persimmon-deep`). `--persimmon-bright` (#d8452b) appears in the litho scene's canopies and sun.
- **Goldenrod** (`--goldenrod` #eba51f): harvest gold. The header/footer 3px rules, links on dark ink grounds, focus rings, ::selection, lot stamps on crates, the events section ground, gold buttons (`--goldenrod-deep` #c8880e on hover).

### Secondary
- **Concord** (`--concord` #3e2459): concord-purple ground for the hero and dark sections; `--concord-deep` (#2c1843) backs feature/story cards and scene ridges.
- **Leaf** (`--leaf` #2f6b3a): leaf-green ground; `--leaf-deep` (#24522c) is the scene's vineyard rows and meadow.
- **Sky** (`--sky` #bfdce9): litho sky; a light section ground carrying press-ink text.

### Neutral
- **Press ink** (`--press` #26150f): near-black brown. All text on stock, all 2px rules and borders, header/footer/event-date grounds, scrollbar thumbs, `theme-color`.
- **Label stock** (`--stock` #f7edd6): the page ground and text-on-ink color. **Aged stock** (`--stock-2` #eddcb6): alternate section ground, media placeholders, pressed button states.
- **Tinted secondaries** (`--on-*-2`): muted text per ground — #cbb8e0 on concord, #bfdcb9 on leaf, #ffd9ce on persimmon, #543a06 on goldenrod, #7a5d34 on stock.

### Named Rules
**The Whole-Ink Rule.** An ink owns its entire section (`.section--concord/--leaf/--gold/--sky/--stock2`), edge to edge, like a stack of labels. Accent colors are not sprinkled onto white pages; the ground changes instead.

**The No-Gray Rule.** Muted text on an ink ground is never gray or plain opacity — it uses that ground's tinted secondary (`--on-concord-2` etc.). Gray on ink reads as screen, not print.

**The Press-Ink Line Rule.** Every border, rule, and stamp outline is `--press` (or `currentColor` on ink grounds) at 2px (`--rule`). No 1px hairline gray borders.

## Typography

**Display Font:** Ultra (with Rockwell Extra Bold / Archer / serif fallback) — woodtype, weight 400 only.
**Caps Font:** Barlow Condensed 600/700 (Arial Narrow fallback) — always uppercase, always letterspaced.
**Script Font:** Yellowtail (Brush Script MT fallback) — the flourish.
**Body Font:** Source Sans 3 (system-UI fallback) — 400/600/700 + 400 italic.

All four load from Google Fonts via a non-render-blocking preload in `base.njk`.

**Character:** Crate-label lettering — a slab woodtype shout, condensed caps doing all the labeling work, and one hand-painted script word breaking the grid.

### Hierarchy
- **Display / h1** (400, `clamp(2.5rem, 9.5vw, 4.6rem)`, lh 1.05): hero headline only; max-width 14ch; on the hero it carries a hard litho drop `text-shadow: 0 3px 0 rgba(38,21,15,.5)`.
- **Headline / h2** (400, `clamp(1.7rem, 5vw, 2.5rem)`, lh 1.05): section titles, always with a 3px stencil rule extending from the title (`.section__head h2::after`, `currentColor`).
- **Title / h3 and caps labels** (Barlow Condensed 700, ~0.88–1.2rem, uppercase, tracking .03–.18em): card names, buttons, nav chips, region lines, lot stamps, section links, meta lines. Tracking scales with size — tighter on big caps (.03em), wide on small ribbon text (.16–.18em).
- **Body** (Source Sans 3 400, 1rem, lh 1.55): default copy. Long-form article body (`.prose`) steps up to 1.14rem / lh 1.72 at 42rem measure.
- **Script flourish** (Yellowtail, ~.82em of its host, rotated −3°, goldenrod): one word inside the hero headline (`.flourish`), lowercase, no letterspacing.

### Named Rules
**The One-Flourish Rule.** Yellowtail appears once per page — a single word inside the display headline. It is never a label, button, or body face.

**The Caps-Do-Labels Rule.** Any small functional text (buttons, nav, stamps, meta, dates, ribbons) is Barlow Condensed uppercase with tracking. Body case + small size is not a label style here.

**The Ribbon-Not-Kicker Rule.** Text above a heading is the region-line ribbon (`.region-line`: caps, .18em tracking, 26×2px bars either side via `::before/::after`) or a rotated lot stamp (`.lot`). Plain floating kickers/eyebrows are banned — the ribbon and stamp are the label grammar that replaced them (see the comment in `critical.css`).

## Layout

Mobile-first, single column, with a 1120px wrap (`--wrap`) and 18px inline gutters (`.wrap`). Sections pad vertically with `clamp(2.4rem, 7vw, 4rem)` (`.section`) and stack as full-ink bands; a 14px `.seam` element marks the torn edge between ink sections.

- **Header:** sticky press-ink bar, `--header-h: 58px`, 3px goldenrod bottom rule; roundel + condensed wordmark left, horizontally scrolling anchor-nav chips (scrollbars hidden), crate-stamp CTA right. Wordmark subline hides below 680px; long CTA label hides below 720px.
- **Hero:** full-bleed, `min-height: min(82svh, 680px)`, content bottom-aligned, safe-area-inset padding. Halftone-dot + vertical gradient scrim over the media.
- **Grids:** itinerary crates 1 → 2 (≥640px) → 3 (≥940px) columns; stories 1 → 2 (≥720px); map 1 → 1.4fr/1fr (≥860px); explore 1 → 3 (≥720px). Gap ~1.3rem.
- **Scrollers (the packing line):** `.scroller` is a snap-scrolling column-flow grid, auto-columns 72% → 38% (≥640px) → 24.5% (≥940px), `scroll-snap-type: x mandatory`, thin press-ink themed scrollbar, `overscroll-behavior-x: contain`.
- **Mobile sticky CTA:** fixed bottom press-ink sheet with goldenrod top rule, springs up (`--spring`) when the hero CTA sentinel scrolls away; hidden ≥900px. Respects `env(safe-area-inset-bottom)`.
- **Article measure:** `.prose` at 42rem; section intro copy caps at 58ch; hero sub at 44ch.

Observed breakpoints: 640, 680, 720, 860, 900, 940px — introduced per component, not a global grid.

## Elevation & Depth

Depth is paper, not light. Surfaces are flat inks; lift comes from two soft press-ink shadows — `--shadow: 0 10px 26px rgba(38,21,15,.2)` at rest on plates/cards, `--shadow-lift: 0 16px 34px rgba(38,21,15,.28)` on hover — always in the brown of `--press`, never neutral black. Buttons use a hard 3px ledge (`0 3px 0 var(--press)`) plus a soft throw; pressing collapses the ledge (`translateY(3px)`, ledge → 0). Scrims over imagery are halftone dots (7px radial-gradient grid) layered with a dark concord-ink gradient, never blur or glassmorphism.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 10px 26px rgba(38,21,15,.2)`): plates, crates, biz-cards, feature/story cards, newsletter label.
- **Lift** (`box-shadow: 0 16px 34px rgba(38,21,15,.28)`): hover state of interactive cards; modal panel.
- **Stamp ledge** (`0 3px 0 var(--press), 0 10px 18px rgba(38,21,15,.22)`): buttons and the play badge; the ledge is the pressable rubber-stamp edge.

### Named Rules
**The Ink-Shadow Rule.** All shadows are tinted with press ink `rgba(38,21,15,…)`. Neutral black shadows read as UI, not print.

## Shapes

Softly rounded print objects: 8px radius on plates/cards (`--radius`), 6px on buttons and event-date blocks, 5px on nav chips, 4px on lot stamps, badges, and captions. The signature silhouette is the **double-rule plate**: a 2px press-ink outer border with an inset 1px inner rule (`::after`, `inset: 5px`, opacity ~.5) — used on `.plate`, `.newsletter`, and `.modal__panel`. Stamps and badges rotate −2° (`.lot`, `.event-badge`); the hero flourish rotates −3°. Circles are reserved for the roundel mark, social buttons, and the play badge. No pills, no fully-square brand-site corners in this campaign world.

## Components

### Buttons (crate stamps)
- **Character:** a rubber crate stamp — condensed caps, hard ink border, ledge shadow, springs when pressed.
- **Shape:** 6px radius, `border: 2px solid var(--press)`, padding `.85rem 1.3rem .8rem` (`.btn--small`: `.55rem .9rem .5rem`, .92rem).
- **Type:** Barlow Condensed 700, 1.06rem, uppercase, .07em tracking.
- **Primary** (`.btn`): persimmon ground, stock text; hover deepens to `--persimmon-deep`.
- **Gold** (`.btn--gold`): goldenrod/press; hover `--goldenrod-deep`. **Stock** (`.btn--stock`): stock/press; hover `--stock-2`.
- **Active:** `translateY(3px)`, ledge collapses to 0 — the stamp presses; transitions run on `--spring` (.28s).
- **Block** (`.btn--block` / contextual `width: 100%`) for card CTAs and the sticky bar.

### Region line (the ribbon)
`.region-line` — inline-flex caps ribbon (700, .88rem, .18em tracking) with 26×2px `currentColor` bars either side. Goldenrod on the hero/article hero. This is the sanctioned "text above a heading."

### Lot stamp
`.lot` — inline caps chip (.8rem, .16em tracking) with a 2px `currentColor` border, 4px radius, rotated −2°. Grade marks on crates and story cards (goldenrod on ink grounds).

### Plate (label frame)
`.plate` — stock ground, double-rule frame (2px outer + inset 1px inner via `::after`), 8px radius, rest shadow. Generic framed container (map "getting here" card, cellar widget frame). The persimmon newsletter and the modal panel are recolored plates.

### Crate cards (itineraries)
`.crate` — a full crate label per itinerary: whole-ink ground (`.crate--concord/--leaf/--persimmon`), 2px press border, 8px radius, centered authored SVG art (~150px, `currentColor` stock), goldenrod lot stamp top-left, Ultra title (1.45rem), goldenrod condensed grade line with 14px icons, tinted-secondary blurb, full-width button pinned to the bottom. Hover lifts −4px to `--shadow-lift`; active scales .985 — all on `--spring`. On the persimmon crate the button switches to gold for contrast.

### Biz cards (packing line)
`.biz-card` — stock label card in the snap scroller: 4:3 photo plate with press-ink bottom rule, condensed uppercase name, tinted blurb, persimmon caps "go" line. Hover −3px lift, active scale .98.

### Events bill
`.event-row` — a goldenrod-section list row: press-ink date block (goldenrod condensed month over Ultra day, 6px radius), bold title + tinted-secondary venue, rotated persimmon "New" badge, arrow. Rows separated by 2px `rgba(38,21,15,.35)` rules; hover washes with translucent stock.

### Nav chips
`.anchor-nav a.chip` — condensed caps chips (600, .9rem, .08em) with translucent stock borders on the press-ink header; hover fills `rgba(247,237,214,.14)`, active scales .94 on `--spring`.

### Inputs
`.nl-form input[type=email]` — stock ground, 2px press border, 6px radius, `.8rem 1rem` padding, persimmon caret, `--on-stock-2` placeholder. Focus uses the global ring: `outline: 3px solid var(--goldenrod)`, offset 2px.

### Header / Footer (press-ink bars)
Sticky `.site-header` and `.site-footer`: `--press` ground, stock text, 3px goldenrod rule on the facing edge. Footer carries the roundel, goldenrod caps region line, tinted stock-2 note, and circled social icons (2px translucent-stock ring, goldenrod on hover, −2px spring lift).

### Hero scene (signature)
`partials/scene.njk` — one authored flat-ink litho SVG plate (escarpment, vineyard rows, fall orchard, lake band, barn, big goldenrod sun with an offset registration ring), inlined so CSS variables retint it. Per-variant tints in `critical.css` are different "hours of day" on the same plate: `.hero--couples` (rose dusk: sky #cfa0b4, lake #96718f), `.hero--families` (bright noon: sky #c6e0ec, gold canopy), `.hero--events` (golden evening: sky #f0cf8f, amber lake). Decorative (`aria-hidden`); the headline carries meaning.

### Icon sprite (signature)
`partials/sprite.njk` — authored 48×48 litho icons (grapes, glass, jug, leaf, pumpkin, apple, sun, ferris, star, corn, pin, clock, lantern, inn) plus the 64×64 brand roundel. Filled flat silhouettes in `currentColor`, one visual weight, ~3px ring work; opacity steps (.4–.55) as the only "second color". Used via `<svg><use href="#i-name">`. No icon fonts, no stock glyph sets.

### Motion (the stamp-&-spring grammar)
- **Stamp-in:** elements tagged `.stamp` start at opacity 0 / scale 1.03 and settle once (`.is-stamped`, .5s `--easeout: cubic-bezier(.16,1,.3,1)`) via an IntersectionObserver (rootMargin −8% bottom, unobserve after firing). Triply safe: gated behind `.js` on `<html>`, behind `prefers-reduced-motion: no-preference` in CSS, and JS adds `.is-stamped` immediately when reduced motion is on or IO is missing.
- **Spring-back:** every press and lift runs on `--spring: cubic-bezier(.32,1.28,.53,1)` — the pinned iOS-feel curve (.28–.42s). Buttons press down, cards lift, chips and social icons scale, the modal panel springs open (`modal-spring` .42s), the sticky CTA slides up (.38s).
- Color-only changes (hover fills) use plain `.15s ease`.

### Themed browser surfaces
`::selection` goldenrod/press; caret persimmon; `.scroller` scrollbars press-ink on translucent track; focus ring 3px goldenrod, 2px offset, 4px radius; `<meta name="theme-color" content="#26150F">`; tap highlight `rgba(201,58,32,.18)`.

### Photography treatment
Real regional photos (35 selects in `src/assets/img/photos/`) never float free: they sit inside bordered plates and cards (`.biz-card__media` with press rules, `.prose img` with `--rule` + 8px radius, scrimmed `.story-card`/`.feature`/`.article-hero`). Dark-ink scrims (concord-tinted gradients, sometimes with the halftone dot layer) keep stock-colored type legible over them. Provenance: each processed JPEG carries its source path in EXIF ImageDescription (`.impeccable/process-photos.py`).

## Do's and Don'ts

### Do:
- **Do** give every new section a whole ink: pick one of `.section--concord/--leaf/--gold/--sky/--stock2` (or plain stock) and let it own the band edge-to-edge, with tinted-secondary muted text for that ground.
- **Do** frame every new container as a printed object: 2px press-ink border, 8px radius, ink-tinted shadow; use the double-rule `::after` inset for label-grade surfaces.
- **Do** run every press/lift interaction on `--spring` and every entrance through the `.stamp`/`.is-stamped` system — once per element, JS-gated, reduced-motion safe.
- **Do** letter small functional text in Barlow Condensed uppercase with tracking, and reach for the region-line ribbon or a rotated lot stamp when a heading needs a label above it.
- **Do** author new icons and scenery in the sprite's flat litho weight (filled `currentColor` silhouettes, opacity steps for depth) and keep photos inside bordered plates with dark-ink scrims.
- **Do** keep it mobile-first: snap scrollers for horizontal content, safe-area insets, block buttons on cards, the sticky CTA pattern for primary actions.

### Don't:
- **Don't** add kickers or eyebrows — plain small text floating above a heading is banned; the region-line ribbon and lot stamp are the only sanctioned label grammar (the ribbon explicitly replaced the kicker in `critical.css`).
- **Don't** use gray for muted text on an ink ground, neutral-black shadows, or 1px gray hairlines — tinted secondaries, press-ink shadows, and 2px press rules only.
- **Don't** use gradients as surface color, translucent/glass materials, or blur; scrims over imagery are the halftone-dot + concord-ink gradient pair only.
- **Don't** let Yellowtail out of the hero flourish, set Ultra above weight 400 or in body sizes, or introduce a fifth typeface.
- **Don't** default to a photo hero with a white card grid — the first viewport is the authored litho scene (retint the plate per variant rather than swapping it) unless real photography is explicitly supplied for a `static`/`video` hero mode.
- **Don't** autoplay video with sound; the video hero stays a muted, captioned, click-to-play facade with a stamped play badge.
- **Don't** animate an entrance more than once, animate without the `.js` gate, or ignore `prefers-reduced-motion`.
