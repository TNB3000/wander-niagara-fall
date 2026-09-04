# Design System — Wander Niagara Fall Campaign (Brand-matched v4)

<!-- Source of truth: wanderniagara.com's live computed styles (2026-09-03) for
     tokens, type, spacing and devices; the client's simplified mockup
     (2026-08-21) for layout and section anatomy. Fidelity to the parent brand
     is the bar; every rule here is traceable to one of those two sources. -->

## Thesis

The parent brand, kept wireframe-simple. Bold photography, yellow boxed
headings, square black-on-yellow buttons, white/grey section rhythm — and
nothing else. Whereabouts widgets carry the rich layer and are themed to read
as the brand; the page's job is to stay out of their way.

## Palette (tokens in `src/assets/css/critical.css` `:root`)

| Token | Value | Use |
|---|---|---|
| `--yellow` | `#FFD300` | Header, boxed headings, buttons, tags, footer accents |
| `--black` | `#000000` | Button text, mobile MENU block, footer ground, hover fills |
| `--ink` | `#222222` | Body text, headings |
| `--ink-soft` | `#555555` | Secondary text, meta |
| `--grey` | `#EEEEEE` | Alternate section ground, cards, funders band |
| `--paper` | `#FFFFFF` | Page ground |
| `--link` | `#D16726` | Inline text links |
| `--orange` | `#F26A2E` | Draft markers only (dev) |
| `--line` | `rgba(0,0,0,.12)` | Hairlines |

Square corners everywhere (`border-radius: 0`). No shadows. Photography
supplies all the richness.

## Type (Inter only, 400/500/600/700/800/900 via Google Fonts)

- Body `1.125rem/1.5` (18px/27px, as on wanderniagara.com), colour `#222`.
- **h1/h2** — Inter 900, uppercase, `letter-spacing: 1px`, `line-height: 1.08`; h1 `clamp(2rem,5vw,3.75rem)`, h2 `clamp(1.75rem,4vw,3rem)`. Section h2s, the hero h1 and article h1 sit in the **yellow box** (`.boxed`): inline-block, `#FFD300`, padding ≈ 20px.
- **h3** — Inter 700, `clamp(1.25rem,1.9vw,1.5625rem)`.
- Meta lines `.8125rem/700` uppercase +.08em.
- Article `.prose h2` drops the box (plain uppercase 900).

## Components (all in critical.css, inlined)

- **`.site-header`** — sticky `#FFD300` bar, logo (official black lockup) home link, 3-item nav (Inter 600 17px, black underline on current/hover); `.menu-btn` black uppercase MENU block on mobile; mobile nav panel black with white links.
- **`.btn`** — black on yellow, square, Inter 600 18px, `12px 22px`; hover inverts to black/white. `.btn--ghost` = black with white text.
- **`.tlink`** — Inter 600 with a 3px yellow underline. Inline prose/main links are `#D16726` underlined.
- **`.hero` / `.hero-slides`** — full-bleed photo (or 3-slide crossfade), black bottom gradient, yellow boxed h1, white sub, yellow `.btn`.
- **`.paths` / `.path`** — landing's two audience photo cards, square, black gradient, yellow button.
- **`.itin`** — grey text card (white on grey sections), hover turns yellow; blog teasers.
- **`.widget-slot`** — pending-asset placeholder: 2px dashed grid, uppercase label; collapses in production unless `SHOW_PLACEHOLDERS=1`.
- **Whereabouts widgets** — themed via `::part()`: `card__surface` square/white/no border, `card__title` Inter 700 18px `#222`, `card__venue`/`card__description` Inter `#555`, `card__tag` yellow/black square, `card__btn-details` = brand button, image parts square; `--global-font-body: Inter` on the host. (Widgets are origin-restricted — verify on the deployed preview only.)
- **`.mapcard` + `.drive`** — grey block with drive times; `.region-map` full-width illustrated map (WebP + PNG).
- **`.faq`** — native `<details>`, +/– marker, Inter 700 summaries.
- **`.nl`** — square 2px-ink input + yellow button (Mailchimp slot replaces the form when it lands).
- **`.funders` + `.site-footer`** — identical to wanderniagara.com (see partial comments).

## Rules

1. **The parent brand wins on tokens; the mockup wins on layout.** Divergence needs a reason in one of the two sources.
2. **Headings live in the yellow box.** Every section h2, the hero h1 and article h1 — never a bare heading at section level.
3. **Square corners, no shadows, no gradients** except the photo scrims.
4. **No motion** beyond hover state changes and the hero slideshow crossfade (auto-advance off under `prefers-reduced-motion`).
5. **Widgets are themed, never rebuilt** — only through `::part()` and `--global-font-body`; if a widget exposes no hook for something, leave it. The **tripper** (itinerary) widget exposes no hooks and re-declares its `--tripper-*` theme internally — its colours/font are set in the Whereabouts widget config, not here.
6. **Copy is the client's, verbatim.** Anything we drafted carries a visible `[DRAFT — client to approve]` marker (grep: `client to approve`).
7. **Architecture (Sept 3)**: `/`, `/families/`, `/couples-and-friends/`, `/events/` (with FAQ), `/privacy/`, three articles at `/blog/<slug>/`. Nav labels are constants in `_data/site.js`; pending assets all land in `_data/slots.js`.
8. Tracking (`assets/js/app.js`, `data-module`/`data-card-label`) is product behavior — preserve it through any edit.
