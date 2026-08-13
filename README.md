# Wander Niagara — Fall Campaign Microsite

Static, mobile-first landing pages for the **"Fall in St. Catharines & the
Benchlands"** paid-media campaign (Meta/Instagram, run by Loud & Clear).

**Primary KPI:** outbound link clicks to businesses, itineraries and the
directory. Every design/engineering decision serves *fast load, mobile-first,
maximum measured click-through.*

- **Stack:** [Eleventy (11ty)](https://www.11ty.dev/) + Nunjucks. Zero client
  frameworks. ~12 KB of first-party vanilla JS.
- **Hosting:** GitHub Pages, custom domain `fall.wanderniagara.com`.
- **Pages:** `/`, `/couples/`, `/families/`, `/events/`, `/stories/`,
  `/stories/<slug>/` (article), `/directory/` (flagged).

---

## Quick start (local preview)

```bash
npm install
npx @11ty/eleventy --serve
```

Then open <http://localhost:8080/couples/>. Edits to templates, data, CSS and JS
hot-rebuild. Build to `_site/` without serving:

```bash
npm run build
```

---

## Project structure

```
src/
  _data/            ← EDIT THESE to change content (no template edits needed)
    site.js         ← global config: directoryUrl, feature flags, drive times, social
    embeds.js       ← ★ ALL third-party paste-in slots + analytics IDs (see below)
    businesses.json ← themed business modules (couples/families → themes → items)
    itineraries.json← 3 itinerary cards per page
    events.json     ← dated event rows + "see all" link
    faq.json        ← FAQ copy per variant (feeds accordion + FAQPage JSON-LD)
  _includes/
    base.njk        ← HTML shell: head, JSON-LD, inlined critical CSS, analytics slot
    layouts/        ← page.njk (audience/events), stories.njk, article.njk
    partials/       ← header, hero, itineraries, themes, events, map, faq, footer,
                      newsletter (inline + modal), stories-feature, explore-more
  assets/
    css/critical.css← inlined in <head> (above-the-fold)
    css/main.css    ← deferred (below-the-fold)
    js/app.js       ← tracking + interactions (one file)
    img/            ← placeholder SVGs (client replaces with real photos)
  couples.njk, families.njk, events.njk, stories.njk, directory.njk, index.njk
  stories/articles/*.md ← the 3 placeholder articles
content/            ← drop the client's article-ideas + ad-set-blend docs here
```

---

## ★ What the client must paste where — `src/_data/embeds.js`

Everything third-party lives in **one file**: `src/_data/embeds.js`. Leave a value
empty (`""`) and that module degrades gracefully to a labelled placeholder; the
site keeps working. Nothing here is render-blocking — embeds lazy-load on scroll.

| Slot | Field in `embeds.js` | Where to get it |
|------|----------------------|-----------------|
| **GA4** | `ga4Id` | GA4 → Admin → Data streams → Measurement ID (`G-XXXXXXXXXX`) |
| **Meta Pixel** | `metaPixelId` | Events Manager → your pixel → Pixel ID |
| **GTM** (optional, if L&C prefer) | `gtmId` | Tag Manager container ID (`GTM-XXXXXXX`) |
| **Whereabouts loader** | `whereabouts.loaderSrc` | Whereabouts embed `<script src>` |
| **Whereabouts listings** | `whereabouts.listingsEmbed` | Listings widget embed HTML (used on `/directory/` + `/stories/`) |
| **Whereabouts map** | `whereabouts.mapEmbed` | Interactive map embed HTML |
| **CrowdRiff** | `crowdriff.galleryId` | The `data-crowdriff-hash` value in the CrowdRiff snippet |
| **Mailchimp** | `mailchimp.actionUrl` | Audience → Signup forms → Embedded form → the `<form action="…">` URL (already encodes `u` & `id`) |
| **Mailchimp honeypot** | `mailchimp.honeypot` | The hidden field name `b_<u>_<id>` from the same embed |

Itinerary destinations (the Whereabouts itinerary URLs) live per-card in
`src/_data/itineraries.json` (`url`). Business links live in `businesses.json`.

---

## Placeholder checklist (what Mackenzie/L&C still owe)

All are clearly marked `[PLACEHOLDER]` in code. See the "Still empty" list your
build report links to. Summary:

1. **Logo** — replace `src/assets/img/logo.svg` (SVG preferred).
2. **Hero video (Plan A)** — 9:16, <60s, captioned. Until then pages use the
   static photo hero (Plan B). To switch a page: set `hero.mode: video`,
   `hero.video: <mp4 url>`, `hero.captions: <vtt url>` in its front-matter.
3. **Hero photos (Plan B)** — replace `placeholder-hero-*.svg`.
4. **Article ideas + article images** — see `content/article-ideas.md`; edit the
   3 files in `src/stories/articles/`.
5. **Ad-set blend / final headlines** — see `content/ad-set-blend.md`; swap
   `headline`/`sub` in each page's front-matter.
6. **Business list** — `src/_data/businesses.json`.
7. **Whereabouts embeds** — `embeds.js` (see table).
8. **CrowdRiff gallery id** — `embeds.js`.
9. **Mailchimp** — `embeds.js`.
10. **FAQ copy / final page copy / event picks** — `faq.json`, page front-matter,
    `events.json`.
11. **GA4 + Meta Pixel IDs** — `embeds.js`.

---

## Tracking (this is the product)

Loaded lazily by `src/assets/js/app.js` (never blocks LCP). Uses **event
delegation** on `a[href^="http"]` — no per-link handlers.

### Events fired

| Event | When | Key params |
|-------|------|-----------|
| `click_out` | any outbound link click | `destination_domain`, `destination_url`, `module`, `page_variant`, `card_label` |
| `first_click_out` | first outbound click of the session | same as above |
| `scroll_depth` | 25 / 50 / 75 / 100% reached | `percent`, `page_variant` |
| `engaged_time` | 15s of visible time | `seconds`, `page_variant` |
| `hero_video_play` | user taps the video hero | `page_variant` |
| `embed_view` | a lazy embed enters view | `module`, `page_variant` |
| `newsletter_prompt` / `newsletter_submit` | modal shown / form submitted | `trigger` / `location` |

`module` values: `hero`, `itinerary`, `theme`, `events`, `stories`, `directory`,
`faq`, `map`, `header`, `sticky-cta`, `footer`, `home`. Clicks into business
listings carry `module: theme`; directory clicks carry `module: directory`, so
conversions are separable.

### Verifying in GA4 DebugView

1. Put a real `G-…` ID in `embeds.js`, build, load a page.
2. Install the [GA Debugger] extension or append `?_dbg=1` while testing.
3. Watch **GA4 → Admin → DebugView** — click a business card and confirm
   `click_out` (and, on the first click, `first_click_out`) appears with the params.

### Meta Pixel — campaign optimization note for Loud & Clear

`app.js` fires a **custom `OutboundClick`** event mirroring `click_out`.
**Optimize the campaigns toward this custom conversion**, and **buy Landing Page
Views, not Link Clicks** — the whole funnel is measured on-page click-through, so
you want people who actually land and then click out.

### UTMs & the outbound `ref` param

- Inbound `utm_*` / `gclid` / `fbclid` are preserved in `sessionStorage`.
- Outbound clicks get `?ref=fallcampaign` appended **where it's safe** (skips any
  hostname listed in `site.outboundRef.disabledDomains`, and never double-appends).
  Toggle globally with `site.outboundRef.enabled`.

---

## A/B setup for Loud & Clear (no client-side framework)

Variants are **separate URLs**. Split traffic **at the ad-set level** — do not
run a client-side A/B test. The primary A/B is *hero page vs `/stories/` as the
landing URL* for cold traffic:

| Test | Variant A URL | Variant B URL |
|------|---------------|---------------|
| Landing type | `/couples/` (or `/families/`, `/events/`) | `/stories/` |

`page_variant` is set consistently per page (`couples` / `families` / `events` /
`stories`), so GA4 comparisons stay clean. `/stories/` is a full standalone
landing page (same header, sticky CTA, tracking, FAQ, footer).

---

## The events variant

`/events/` uses the **same modules** as the audience pages but promotes the
events strip to **position 2, directly under the hero**, and shows **6 rows**
(audience pages show 3). This is controlled entirely by front-matter in
`src/events.njk`:

```yaml
eventsFirst: true   # moves the events module above itineraries
eventRows: 6        # 6 rows instead of the default 3
```

The layout (`_includes/layouts/page.njk`) reads `eventsFirst` and reorders.

---

## Directory: one config value

Every "directory" CTA site-wide reads **`site.directoryUrl`** (in
`src/_data/site.js`). Point it at either:

- the **external** existing directory (default, avoids stakeholder pushback):
  `"https://www.wanderniagara.com/directory/"`, or
- the **internal** page: `"/directory/"`.

The internal `/directory/` page (embeds the Whereabouts listings module) **is
built but not linked in nav** while `featureFlags.directoryPage` is `false`.
Flip that flag to surface it. Changing the destination is a **one-line** edit.

---

## Structured data (AEO)

- **Organization** + **BreadcrumbList** JSON-LD site-wide (`base.njk`).
- **FAQPage** JSON-LD on every page with an FAQ (validate at Google's
  [Rich Results Test](https://search.google.com/test/rich-results)).
- **BlogPosting** JSON-LD on articles.

---

## Performance

- Critical CSS inlined; `main.css` deferred (preload → stylesheet).
- Hero image: `fetchpriority="high"` + `<link rel="preload" as="image">`.
- All below-the-fold images `loading="lazy"` with explicit `width`/`height`
  (no layout shift).
- Third-party embeds are **facades** activated by `IntersectionObserver` — they
  never block LCP.
- `preconnect` hints for embed origins.
- Heaviest page ships ~**58 KB** before third-party embeds (budget: <1 MB).

**Swap placeholder SVGs for real photos as WebP/AVIF with `srcset`.** The image
markup already carries `width`/`height`; add `srcset`/`sizes` when real assets land.

---

## Deployment (GitHub Pages)

Push to `main` → `.github/workflows/deploy.yml` builds Eleventy and deploys
`_site` to Pages. PRs get a build check (`.github/workflows/ci.yml`).

**One-time GitHub setup:** repo → Settings → Pages → *Build and deployment* →
Source = **GitHub Actions**.

### DNS cutover for `fall.wanderniagara.com`

1. `src/CNAME` (→ `_site/CNAME`) already contains `fall.wanderniagara.com`.
2. On **wanderniagara.com's DNS**, add a **CNAME record**:
   `fall` → `tnb3000.github.io`  *(host `fall`, value `tnb3000.github.io`)*.
3. In repo → Settings → Pages, set the custom domain to
   `fall.wanderniagara.com` and wait for the check to pass.
4. Tick **Enforce HTTPS** once the certificate is issued.

Before DNS is live, the raw Pages URL is
`https://tnb3000.github.io/wander-niagara-fall/`. Asset paths are root-absolute
(`/assets/…`) so they resolve correctly once served from the custom-domain root.

---

## Definition-of-done status

- [x] All 6 page types build & deploy from `main`
- [x] `click_out` fires from every module (event delegation) → verify in GA4 DebugView once a real ID is in `embeds.js`
- [x] FAQPage / Organization / BreadcrumbList / BlogPosting JSON-LD emitted
- [x] Exit-intent modal: capped once / 30 days, never before 30s, never on load
- [x] Directory CTAs resolve through the single `directoryUrl`
- [x] Events variant reorders modules via front-matter
- [ ] Lighthouse mobile ≥ 90 — run against a deployed URL with placeholder media (structure is built for it: inlined critical CSS, lazy media, ~58 KB page)
