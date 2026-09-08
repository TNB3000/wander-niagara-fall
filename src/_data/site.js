// Global site configuration.
// Everything a stakeholder might want to flip lives here, not in templates.
module.exports = {
  name: "Wander Niagara",
  campaign: "Fall in St. Catharines & the Benchlands",

  // Global nav — three items (Sept 3 call). Labels are constants so a swap
  // (e.g. "Families" → "Family Adventures") is a one-line change.
  nav: [
    { label: "Families", href: "/families/" },
    { label: "Couples & Friends", href: "/couples-and-friends/" },
    { label: "Events", href: "/events/" },
  ],
  // Kicker line required on EVERY page, above the headline.
  kicker: "St. Catharines & the Benchlands",
  // Canonical production origin. Used for absolute URLs in JSON-LD / OG tags.
  // Build target (DEPLOY_TARGET=flywheel|ghpages) — see .eleventy.js.
  target: process.env.DEPLOY_TARGET === "flywheel" ? "flywheel" : "ghpages",
  // Absolute site URL for canonicals, og:url/og:image, JSON-LD and the sitemap.
  //   flywheel: static folder on the client's WordPress host — bare domain, no www.
  //   ghpages : unchanged preview/staging value.
  url: process.env.DEPLOY_TARGET === "flywheel"
    ? "https://wanderniagara.com/fall"
    : "https://fall.wanderniagara.com",
  description:
    "Fall in St. Catharines and the Benchlands — wine, colour, farms and events across Niagara's bench. Plan your fall getaway.",

  // ---------------------------------------------------------------------------
  // DIRECTORY DESTINATION — single source of truth.
  // Every "directory" CTA site-wide reads this value. Point it at the internal
  // flagged page ("/directory/") OR the existing directory on the main site to
  // avoid stakeholder pushback. Change in ONE place.
  // ---------------------------------------------------------------------------
  directoryUrl: "https://www.wanderniagara.com/directory/", // or "/directory/"

  // Feature flags. directoryPage builds & links the internal /directory/ page.
  // Off by default — the page still builds (so it can be previewed) but is not
  // linked in any nav/anchor menu.
  featureFlags: {
    directoryPage: false,
  },

  // Outbound ref param appended to outbound clicks where safe. Disable per-domain
  // for destinations whose routing breaks on unknown query params.
  outboundRef: {
    enabled: true,
    param: "ref",
    value: "fallcampaign",
    // Hostnames (no www.) that should NOT receive the ref param:
    disabledDomains: [],
  },

  // "Getting here" drive-time block. Compact, one screen.
  gettingHere: {
    origins: [
      { from: "Toronto", time: "1 hr 15 min", note: "via QEW" },
      { from: "Hamilton", time: "30 min", note: "via QEW" },
      { from: "Buffalo, NY", time: "45 min", note: "via QEW / Peace Bridge" },
      { from: "Niagara Falls", time: "20 min", note: "via QEW" },
    ],
    transit: "GO Transit runs seasonal weekend rail + bus to St. Catharines. [PLACEHOLDER — confirm 2026 fall schedule]",
  },

  social: [
    { label: "Instagram", url: "https://www.instagram.com/wanderniagara/", icon: "instagram" },
    { label: "Facebook", url: "https://www.facebook.com/wanderniagara/", icon: "facebook" },
    { label: "TikTok", url: "https://www.tiktok.com/@wanderniagara", icon: "tiktok" },
  ],

  privacyUrl: "https://www.wanderniagara.com/privacy/",
  year: 2026,
};
