// -----------------------------------------------------------------------------
// PENDING-ASSET SLOTS — the single swap-in file.
// Every embed/asset the client is sending lives here as one named slot.
// Paste the embed code (or image path) into `embed` and the site renders it;
// while empty, the slot shows a labelled wireframe placeholder in dev
// (`--serve`, or SHOW_PLACEHOLDERS=1 on a build) and collapses to nothing in
// production builds.
// -----------------------------------------------------------------------------
const showPlaceholders =
  process.env.ELEVENTY_RUN_MODE === "serve" || process.env.SHOW_PLACEHOLDERS === "1";

module.exports = {
  showPlaceholders,

  // Hero slideshow photos (×3) + tagline — pending from Mackenzie.
  // Add image paths (e.g. "/assets/img/photos/….jpg"); empty = static hero ground.
  HERO_SLIDES: [
    "/assets/img/heroes/hero-fall-road.jpg",
    "/assets/img/heroes/hero-couple-vineyard.jpg",
    "/assets/img/heroes/hero-family-corn.jpg",
  ],

  // Per-page hero photos — pending from the client ("client to supply").
  PAGE_HEROES: {
    FAMILIES: "/assets/img/heroes/hero-family-corn.jpg",
    COUPLES_FRIENDS: "/assets/img/heroes/hero-couple-vineyard.jpg",
    EVENTS: "/assets/img/heroes/hero-concert.jpg",
  },

  // Whereabouts embed codes — pending curated business lists from Mackenzie.
  widgets: {
    HOME_EAT_DRINK:       { label: "Whereabouts — home: eat & drink widget", embed: "" },
    HOME_OUTDOORS:        { label: "Whereabouts — home: outdoors widget", embed: "" },
    WHERE_TO_STAY:        { label: "Whereabouts — where to stay widget", embed: `<whereabouts-operators-widget widget-id="6a9f74bbc06fe9442ed4f29f" access-id="6a733c9f069c5aa5556f466c"></whereabouts-operators-widget><script src="https://api.prod.next.whereabouts.tech/embeddable/widget/operator/main.js" type="module"></script>` },
    EVENTS:               { label: "Whereabouts — events widget", embed: `<whereabouts-events-widget organization-id="6a733c9f069c5aa5556f466c" widget-id="6a835cfc86787426fc72ee1b" style="display: block; min-height: 360px"></whereabouts-events-widget><script src="https://api.prod.next.whereabouts.tech/embeddable/widget/event/main.js" type="module"></script>` },
    FAMILY_OUTDOORS:      { label: "Whereabouts — family outdoors widget", embed: `<whereabouts-operators-widget widget-id="6aa0156cc06fe9442e9a722c" access-id="6a733c9f069c5aa5556f466c"></whereabouts-operators-widget><script src="https://api.prod.next.whereabouts.tech/embeddable/widget/operator/main.js" type="module"></script>` },
    FAMILY_FARMS_MARKETS: { label: "Whereabouts — family farms & markets widget", embed: "" },
    FAMILY_ATTRACTIONS:   { label: "Whereabouts — family attractions widget", embed: "" },
    CRAFT_BEVERAGE:       { label: "Whereabouts — craft beverage widget", embed: `<whereabouts-operators-widget widget-id="6a85fa0786787426fc53deae" access-id="6a733c9f069c5aa5556f466c"></whereabouts-operators-widget><script src="https://api.prod.next.whereabouts.tech/embeddable/widget/operator/main.js" type="module"></script>` },
    DINING:               { label: "Whereabouts — dining & cuisine widget", embed: "" },
    CF_FARMS_MARKETS:     { label: "Whereabouts — couples & friends farms & markets widget (defaults to the family list until told otherwise)", embed: "" },
    SHOPPING:             { label: "Whereabouts — shopping widget", embed: `<whereabouts-operators-widget widget-id="6aa03361c06fe9442ef7527e" access-id="6a733c9f069c5aa5556f466c"></whereabouts-operators-widget><script src="https://api.prod.next.whereabouts.tech/embeddable/widget/operator/main.js" type="module"></script>` },
    ITINERARIES_FAMILIES: { label: "Whereabouts — family itineraries widget", embed: "" },
    ITINERARIES_CF:       { label: "Whereabouts — couples & friends itineraries widget", embed: `<whereabouts-tripper-widget widget-id="6a9b034786787426fc4bd7ed" access-id="6a733c9f069c5aa5556f466c"></whereabouts-tripper-widget><script src="https://next.whereabouts.tech/widget/tripper/v1/main.js" type="module" crossorigin="anonymous"></script>` },
    CROWDRIFF_GALLERY:    { label: "Crowdriff — curated fall photography gallery", embed: `<script id="cr-init__d2e2cf176049ac4f" src="https://starling.crowdriff.com/js/crowdriff.js" async></script>` },
    MAILCHIMP_SIGNUP:     { label: "Mailchimp — email signup (wired via embeds.mailchimp; branded form in partials/newsletter-inline.njk)", embed: "" },
    FAQ_CONTENT:          { label: "FAQ — content pending from the client (reused from the current site's events guide)", embed: "" },
    GETTING_HERE_MAP:     { label: "Illustrated regional map", embed: "/assets/img/wander-map.png" },
    FOOTER_FUNDER_LOGOS:  { label: "Footer — funder logos", embed: "" },
  },

  // Article photo slots — pending from Mackenzie (hero + inline per article).
  articleImages: {
    BLOG_WEEKEND_HERO:   { label: "Photo — One Weekend. Two Ways. (hero)", embed: "" },
    BLOG_WEEKEND_DAY:    { label: "Photo — One Weekend. Two Ways. (daytime inline)", embed: "" },
    BLOG_WEEKEND_NIGHT:  { label: "Photo — One Weekend. Two Ways. (evening inline)", embed: "" },
    BLOG_FLAVOURS_HERO:  { label: "Photo — 9 Tasty Ways (hero)", embed: "" },
    BLOG_FLAVOURS_1:     { label: "Photo — 9 Tasty Ways (inline 1)", embed: "" },
    BLOG_FLAVOURS_2:     { label: "Photo — 9 Tasty Ways (inline 2)", embed: "" },
    BLOG_FAMILY_HERO:    { label: "Photo — Family Fall Fun Guide (hero)", embed: "" },
    BLOG_FAMILY_1:       { label: "Photo — Family Fall Fun Guide (inline 1)", embed: "" },
    BLOG_FAMILY_2:       { label: "Photo — Family Fall Fun Guide (inline 2)", embed: "" },
  },
};
