// -----------------------------------------------------------------------------
// PENDING-ASSET SLOTS — the single swap-in file.
// Every embed/asset the client is sending lives here as one named slot.
// Paste the embed code (or image path) into `embed` and the site renders it;
// while empty, the slot shows a labelled wireframe placeholder in dev
// (`--serve`, or SHOW_PLACEHOLDERS=1 on a build) and collapses to nothing in
// production builds.
// -----------------------------------------------------------------------------
const fs = require("node:fs");
const path = require("node:path");

const showPlaceholders =
  process.env.ELEVENTY_RUN_MODE === "serve" || process.env.SHOW_PLACEHOLDERS === "1";

// Shared Whereabouts loader scripts.
const OPERATOR_JS = `<script src="https://api.prod.next.whereabouts.tech/embeddable/widget/operator/main.js" type="module"></script>`;
const TRIPPER_JS = `<script src="https://next.whereabouts.tech/widget/tripper/v1/main.js" type="module" crossorigin="anonymous"></script>`;
const ACCESS = "6a733c9f069c5aa5556f466c";
const operators = (id) => `<whereabouts-operators-widget widget-id="${id}" access-id="${ACCESS}"></whereabouts-operators-widget>${OPERATOR_JS}`;
const tripper = (id) => `<whereabouts-tripper-widget widget-id="${id}" access-id="${ACCESS}"></whereabouts-tripper-widget>${TRIPPER_JS}`;

module.exports = {
  showPlaceholders,

  // Per-page hero photos (client photography, Sept 2026). The home hero is a
  // single static image — the slideshow was removed at the client's request
  // (Sept 10).
  PAGE_HEROES: {
    HOME: "/assets/img/heroes/hero-fall-road.jpg",
    FAMILIES: "/assets/img/heroes/hero-family-corn.jpg",
    COUPLES_FRIENDS: "/assets/img/heroes/hero-couple-vineyard.jpg",
    EVENTS: "/assets/img/heroes/hero-concert.jpg",
  },

  // Home page "post-page break" block (client-supplied markup, Sept 10).
  // PUMPKINS and PLATES are the client's picks, sourced from the Dropbox
  // library (Fall 2022 pumpkin patch 0001; Fat Rabbit DSC_6756). For the wide
  // slot the client chose a couple toasting in Adirondack chairs above a
  // Benchlands vineyard in fall colour — sent as a chat image, not in the
  // Dropbox or WordPress libraries. Drop the original at
  //   src/assets/img/break/couple-vineyard.jpg
  // and the next build picks it up automatically; until then the fall-road
  // hero stands in.
  pageBreak: {
    PUMPKINS: "/assets/img/break/pumpkins.jpg",
    PLATES: "/assets/img/break/shared-plates.jpg",
    POUR: fs.existsSync(path.join(__dirname, "../assets/img/break/couple-vineyard.jpg"))
      ? "/assets/img/break/couple-vineyard.jpg"
      : "/assets/img/heroes/hero-fall-road.jpg",
  },

  // Whereabouts embed codes — widget ids supplied by the client (Mackenzie).
  widgets: {
    HOME_EAT_DRINK:       { label: "Whereabouts — home: eat & drink widget", embed: operators("6aa193dcc6852ea15eb96042") },
    HOME_OUTDOORS:        { label: "Whereabouts — home: outdoors widget", embed: operators("6a9f8c39c06fe9442efb3e71") },
    WHERE_TO_STAY:        { label: "Whereabouts — accommodations widget", embed: operators("6a9f74bbc06fe9442ed4f29f") },
    EVENTS:               { label: "Whereabouts — events widget", embed: `<whereabouts-events-widget organization-id="${ACCESS}" widget-id="6a835cfc86787426fc72ee1b" style="display: block; min-height: 360px"></whereabouts-events-widget><script src="https://api.prod.next.whereabouts.tech/embeddable/widget/event/main.js" type="module"></script>` },
    FAMILY_OUTDOORS:      { label: "Whereabouts — hiking & trails widget", embed: operators("6aa0156cc06fe9442e9a722c") },
    FAMILY_FARMS_MARKETS: { label: "Whereabouts — farms & markets widget", embed: operators("6aa192fec6852ea15eb8664e") },
    FAMILY_ATTRACTIONS:   { label: "Whereabouts — museums & attractions widget", embed: operators("6aa19374c6852ea15eb90236") },
    // Sept 10: wine + craft beverage combined into one widget (replaces the
    // wineries-only widget 6a85fa0786787426fc53deae).
    CRAFT_BEVERAGE:       { label: "Whereabouts — wine & craft beverage widget", embed: operators("6aa2d233126a0c45b21934a0") },
    DINING:               { label: "Whereabouts — dining widget", embed: operators("6aa2d2b9126a0c45b21a8f71") },
    CF_FARMS_MARKETS:     { label: "Whereabouts — couples & friends farms & markets widget (shares the family list)", embed: operators("6aa192fec6852ea15eb8664e") },
    SHOPPING:             { label: "Whereabouts — shopping widget", embed: operators("6aa03361c06fe9442ef7527e") },
    ITINERARIES_FAMILIES: { label: "Whereabouts — family itineraries (tripper)", embed: tripper("6aa2baf6126a0c45b2ed840b") },
    ITINERARIES_CF:       { label: "Whereabouts — couples & friends itineraries (tripper)", embed: tripper("6aa2be8a126a0c45b2f4d108") },
    CROWDRIFF_GALLERY:    { label: "Crowdriff — curated fall photography gallery", embed: `<script id="cr-init__ca96b69426de3407" src="https://starling.crowdriff.com/js/crowdriff.js" async></script>` },
    MAILCHIMP_SIGNUP:     { label: "Mailchimp — email signup (wired via embeds.mailchimp; branded form in partials/newsletter-inline.njk)", embed: "" },
    GETTING_HERE_MAP:     { label: "Illustrated regional map", embed: "/assets/img/wander-map.png" },
  },

  // Article photos — pulled from the live WordPress articles (Sept 10), resized
  // and served locally from /assets/img/articles/.
  articleImages: {
    BLOG_WEEKEND_HERO:   { label: "Photo — One Weekend. Two Ways. (hero)", embed: "/assets/img/articles/weekend-hero.jpg", alt: "Downtown St. Catharines at night, storefronts lit along St. Paul Street" },
    BLOG_WEEKEND_DAY:    { label: "Photo — One Weekend. Two Ways. (daytime inline)", embed: "/assets/img/articles/weekend-day.jpg", alt: "The restored barn at Honsberger Estate Winery" },
    BLOG_WEEKEND_NIGHT:  { label: "Photo — One Weekend. Two Ways. (evening inline)", embed: "/assets/img/articles/weekend-night.jpg", alt: "A cocktail being poured at Wandering Spirits in downtown St. Catharines" },
    BLOG_FLAVOURS_HERO:  { label: "Photo — 9 Tasty Ways (hero)", embed: "/assets/img/articles/flavours-hero.jpg", alt: "Apple orchard in the Niagara Benchlands in fall colour" },
    BLOG_FLAVOURS_1:     { label: "Photo — 9 Tasty Ways (inline 1)", embed: "/assets/img/articles/flavours-1.jpg", alt: "Fresh produce at the St. Catharines Farmers Market" },
    BLOG_FLAVOURS_2:     { label: "Photo — 9 Tasty Ways (inline 2)", embed: "/assets/img/articles/flavours-2.jpg", alt: "Pastries and coffee at Pique-Nique café" },
    BLOG_FAMILY_HERO:    { label: "Photo — Family Fall Fun Guide (hero)", embed: "/assets/img/articles/family-hero.jpg", alt: "A family on the beach at Charles Daley Park" },
    BLOG_FAMILY_1:       { label: "Photo — Family Fall Fun Guide (inline 1)", embed: "/assets/img/articles/family-1.jpg", alt: "Farm animals at Happy Rolph's Animal Farm" },
    BLOG_FAMILY_2:       { label: "Photo — Family Fall Fun Guide (inline 2)", embed: "/assets/img/articles/family-2.jpg", alt: "Families at the Ball's Falls Thanksgiving Festival" },
  },
};
