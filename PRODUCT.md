# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Eleventy 3 static site (`.njk` templates in `src/`), no client framework. Confirmed from the pulled repo `TNB3000/wander-niagara-fall` on 2026-08-19. Deploys via GitHub Pages (custom domain via `src/CNAME`).

## Users

- **Families** planning visits to the region with kids.
- **Couples and groups of friends** planning getaways together.

Both audiences use Wander to discover what to do in the region and to follow curated itineraries rather than assembling trips from scratch.

## Product Purpose

Wander is a tourism marketing website for the region comprising the Benchlands, the town of Lincoln, and St. Catharines (Ontario, Canada). It exists to convert trip-research into visits by giving travelers audience-specific itineraries and exhaustive, current information on tourism-suitable businesses and events in the region.

## Positioning

Two claims a neighboring destination site could not truthfully copy:

1. **Curated itineraries for specific audiences** (families; couples/friend groups) — not a generic "things to do" list.
2. **Exhaustive, up-to-date business and event information** for the region, powered by live data rather than hand-maintained pages.

## Operating Context

- Listings, events, and itineraries are delivered via embeddable **widgets from Whereabouts**, the site owner's tourism SaaS product.
- The user will provide the widget embed codes; the design work must **style these embedded widgets** so they read as native parts of the site, not third-party inserts.
- The exact operating entity behind Wander was not stated; the site is built by the user's team and powered by their own SaaS (Whereabouts). *(Inferred — confirm if it matters for footer/legal/attribution copy.)*

## Capabilities and Constraints

- Mobile-first website. The user explicitly wants it to **mimic iOS functionality** — native-app-like interaction behavior in the browser. (Platform remains web; this is a binding experience constraint, not a native build.)
- Live regional data (businesses, events, itineraries) comes from Whereabouts widgets; the site does not maintain its own listings database.
- Widget embed codes are not yet on hand — pending from the user.

## Brand Commitments

- Product name: **Wander Niagara** (this repo: the "Fall in St. Catharines & the Benchlands" campaign microsite at `fall.wanderniagara.com`).
- Binding constraint volunteered by the user: mobile-first, iOS-like functionality and feel.
- Brand source (user-directed, inferred from https://wanderniagara.com/ on 2026-08-19):
  - **Primary identity:** vivid yellow `#FFD300` paired with black/near-black `#222`; square corners (0 radius) on brand elements.
  - **Type on the brand site:** Inter — 900 uppercase display (~1px tracking), 400/18px body; Source Sans Pro also loaded.
  - **Category color system** on tiles: blue `#435DAA`, purple `#904C88`, green `#688C25`, red `#D2232A`, teal `#009CAB`, gold `#B48D06`, orange `#F15A29`, deep teal `#15708C`; link accent `#D16726`.
  - **Voice:** exclamatory and welcoming — "WANDERERS WELCOME!", "ADVENTURE AWAITS!"; positioning as Niagara's "flip side" (beyond the Falls).
  - **Logo:** an illustrated map of the Benchlands + St. Catharines; real regional photography (wineries, farmers markets, Ball's Falls, Port Dalhousie lighthouse).
- Operators of the parent brand: Town of Lincoln & City of St. Catharines; site by 180 Marketing.

## Evidence on Hand

- Real listings, events, and itineraries are served by Whereabouts widgets. The Wineries operators widget embed is wired in (`src/_data/embeds.js`); as of 2026-08-19 its GraphQL API returns 500s — user to verify the widget/access IDs with Whereabouts.
- **Client photo library** (thousands of real regional photos, organized by season/venue): `E:\The New Business Dropbox\The New Business Team Folder\__Client Folders\_Wander Niagara\Visual Assets\Wander Niagara Assets\`. 35 processed selects live in `src/assets/img/photos/` with source paths embedded as provenance.
- **Fall 2026 article outlines** (client, real businesses and events): three articles built from them in `src/stories/articles/`. Only confirmed event date: Spark Gala ft. National Ballet of Canada, Oct 24, 2026, FirstOntario PAC. All other event dates are marked TBC and must be confirmed before launch.
- **2026 Fall Paid Media Plan**: $51K total; Flight 1 (Fall) Sept 7–Nov 1 2026, Flight 2 (Holiday/Seasonal) Nov 2–Dec 31 2026. Ads land on themed articles, product-category pages, an events carousel, and the homepage (retargeting). A holiday-flight content refresh (holiday articles + events) is expected for Flight 2.
- **Future work must not fabricate** business names, events, dates, itineraries, testimonials, visitor numbers, or regional claims — real data arrives via the widgets, the photo library, and client documents.

## Product Principles

1. **Live data over hand-written pages.** The exhaustive-and-current claim is the product; surfaces should foreground Whereabouts widget data, never duplicate or fake it.
2. **Itineraries are for someone.** Every itinerary surface serves a named audience (families, or couples/friend groups); avoid generic catch-all trip content.
3. **Phone in hand, possibly on the road.** Design mobile-first for a traveler actively researching or mid-trip; desktop is the adaptation, not the baseline.
4. **App-like, not page-like.** Interactions should feel like a native iOS app — immediate, fluid, gesture-friendly — within web constraints.
5. **Widgets must disappear into the design.** Embedded Whereabouts components are styled to be indistinguishable from first-party UI.
