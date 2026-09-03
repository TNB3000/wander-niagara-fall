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
  HERO_SLIDES: [],

  // Per-page hero photos — pending from the client ("client to supply").
  PAGE_HEROES: {
    FAMILIES: "",
    COUPLES_FRIENDS: "",
    EVENTS: "",
  },

  // Whereabouts embed codes — pending curated business lists from Mackenzie.
  widgets: {
    HOME_EAT_DRINK:       { label: "Whereabouts — home: eat & drink widget", embed: "" },
    HOME_OUTDOORS:        { label: "Whereabouts — home: outdoors widget", embed: "" },
    WHERE_TO_STAY:        { label: "Whereabouts — where to stay widget", embed: "" },
    EVENTS:               { label: "Whereabouts — events widget", embed: "" },
    FAMILY_OUTDOORS:      { label: "Whereabouts — family outdoors widget", embed: "" },
    FAMILY_FARMS_MARKETS: { label: "Whereabouts — family farms & markets widget", embed: "" },
    FAMILY_ATTRACTIONS:   { label: "Whereabouts — family attractions widget", embed: "" },
    CRAFT_BEVERAGE:       { label: "Whereabouts — craft beverage widget", embed: "" },
    DINING:               { label: "Whereabouts — dining & cuisine widget", embed: "" },
    CF_FARMS_MARKETS:     { label: "Whereabouts — couples & friends farms & markets widget (defaults to the family list until told otherwise)", embed: "" },
    SHOPPING:             { label: "Whereabouts — shopping widget", embed: "" },
    ITINERARIES_FAMILIES: { label: "Whereabouts — family itineraries widget", embed: "" },
    ITINERARIES_CF:       { label: "Whereabouts — couples & friends itineraries widget", embed: "" },
    CROWDRIFF_GALLERY:    { label: "Crowdriff — curated fall photography gallery", embed: "" },
    MAILCHIMP_SIGNUP:     { label: "Mailchimp — email signup embed", embed: "" },
    FAQ_CONTENT:          { label: "FAQ — content pending from the client (reused from the current site's events guide)", embed: "" },
    GETTING_HERE_MAP:     { label: "Illustrated regional map — image pending from Mackenzie", embed: "" },
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
