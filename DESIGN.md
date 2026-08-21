# Design System — Wander Niagara Fall Campaign (Wireframe v3)

<!-- Source of truth: the client's mockup (families-simplified_3.html, 2026-08-21)
     and the Aug 21 call. This is a client-pinned system, not an authored world:
     fidelity to the mockup is the bar, and every rule here is traceable to it.
     References: tourisme-charlevoix.com, chaudiereappalaches.com. -->

## Thesis

Great imagery, clear call-to-action copy, and nothing else. The site should read
closer to a wireframe than to a "designed" website — explicitly not a brand
refresh (that comes with the 2027 rebuild). Whereabouts widgets carry the rich
layer; the page's job is to stay out of their way.

## Palette (tokens in `src/assets/css/critical.css` `:root`)

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FFFFFF` | Page ground |
| `--paper-warm` | `#F7F3ED` | Alternate section ground, itinerary cards, mapcard |
| `--ink` | `#243910` | Text, footer ground |
| `--ink-soft` | `#5A6B48` | Secondary text |
| `--green` | `#243910` | Events section ground (white text) |
| `--yellow` | `#EFEF45` | Header bar, link underlines, selection |
| `--black` | `#000000` | Buttons, header text |
| `--orange` | `#F26A2E` | Focus rings only |
| `--line` | `rgba(36,57,16,.16)` | Hairlines, borders |

White (`#fff`, `rgba(255,255,255,*)`) is text/UI on green and ink grounds.
No other colors. Photography supplies all the richness.

## Type

**Inter only** (400/500/600/700/800, Google Fonts). h1 `clamp(2.5rem,6vw,4.25rem)`
at 800/-.035em; h2 700/-.03em; h3 700/-.02em; body 1.0625rem/1.6. Meta lines are
.8125rem/600 uppercase +.08em. No display face, no script, no second family.

## Components (all in critical.css, inlined)

- **`.site-header`** — sticky yellow bar: brand text, on-page nav (hidden <760px), one `.btn--sm` CTA.
- **`.btn`** — black pill, white text; `.btn--ghost` outline; hover lifts 1px. White-on-photo variant inside `.path__body`.
- **`.tlink`** — text link with 1.5px yellow underline.
- **`.hero`** — full-bleed photo, bottom gradient `rgba(14,22,6,…)`, h1 + sub + one btn.
- **`.paths` / `.path`** — landing's two audience photo cards (min-height 440px, white pill).
- **`.itin`** — warm-paper text card (meta / h3 / blurb / tlink), radius 6px.
- **`.scroller` + `.card`** — horizontal snap row of 3:2 photo cards, radius 6px.
- **`.widget-slot`** — Whereabouts zone: dashed border, uppercase label, hatched wireframe grid cells. **Never design these** — "just put a grid there." The `.embed-slot` inner div is the app.js lazy-loader removal hook.
- **`.section--green` + `.events` / `.event`** — dark green events list: date column (incl. "SEP TBC"), name, venue.
- **`.feature`** — aligned blog-post photo card with bottom gradient.
- **`.mapcard` + `.drive`** — getting-here drive times on warm paper.
- **`.faq`** — native `<details>`, +/– marker.
- **`.nl`** — pill input + black pill button.
- **`.site-footer`** — ink ground, text links only (no icons).
- **Article**: `.article-head` (h1 + meta), `.article-hero` (radius-6 photo, max 560px), `.prose` (680px measure), widget slot, newsletter.

## Rules

1. **The mockup wins.** Divergence needs a reason in the mockup's own system or the client's words.
2. **No motion** beyond hover transforms already in the mockup.
3. **Photography carries the page.** Real photos only (client library, provenance in EXIF); no illustration, no icons.
4. **Widget zones are wireframe grids** until the real embed is pasted into `_data/embeds.js` and wired via `slotEmbed`/`slotEmbedCode`.
5. **Copy is Mac's.** Anything we wrote is `[PLACEHOLDER]`-marked or held over from the client's article outlines.
6. **Architecture is fixed**: `/`, `/families/`, `/couples/`, `/events/`, plus one aligned blog post per audience at `/stories/<slug>/`. No stories hub, no directory page.
7. Tracking (`assets/js/app.js`, `data-module`/`data-card-label`) is product behavior — preserve it through any edit.
