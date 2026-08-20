// -----------------------------------------------------------------------------
// EMBEDS & ANALYTICS — the single paste-here file for the client / Loud & Clear.
// Every third-party integration is a slot below. Leave a value as "" (empty
// string) and the site degrades gracefully: the module renders a labelled
// placeholder instead of a live embed, and analytics no-ops.
//
// Nothing here loads render-blocking; embeds are lazy-initialised on scroll.
// See README → "What the client must paste where".
// -----------------------------------------------------------------------------
module.exports = {
  // ---- Analytics -----------------------------------------------------------
  // GA4 Measurement ID, e.g. "G-XXXXXXXXXX". Empty = analytics disabled.
  ga4Id: "",
  // Meta (Facebook) Pixel ID, e.g. "1234567890". Empty = pixel disabled.
  metaPixelId: "",
  // Optional: if Loud & Clear prefer GTM, paste the container id "GTM-XXXXXXX"
  // here and load it instead of gtag (see README). Empty = not used.
  gtmId: "",

  // ---- Whereabouts ---------------------------------------------------------
  // The client chose Whereabouts because its widgets load async. Paste embed
  // markup/ids below. Each itinerary card links to a Whereabouts itinerary URL
  // (set per-itinerary in itineraries.json). These are the widget embeds.
  whereabouts: {
    // <script> src the widgets need (paste once; loaded lazily). e.g.
    // "https://embed.whereabouts.co/loader.js"
    loaderSrc: "",
    // Listings module embed (used on /directory/). Paste the raw embed HTML,
    // or a widget id the loader expands.
    listingsEmbed: "", // e.g. '<div data-whereabouts-listings="XXImportid"></div>'
    // Interactive map embed (client's existing map). Paste raw embed HTML/iframe.
    mapEmbed: "", // e.g. '<div data-whereabouts-map="XXmapid"></div>'
    // Wineries roster — the Whereabouts operators widget ("The cellar list"
    // section). Loaded lazily by app.js when the section scrolls into view.
    wineriesWidget:
      '<whereabouts-operators-widget widget-id="6a85fa0786787426fc53deae" access-id="6a733c9f069c5aa5556f466c"></whereabouts-operators-widget>' +
      '<script src="https://api.prod.next.whereabouts.tech/embeddable/widget/operator/main.js" type="module"></script>',
  },

  // ---- CrowdRiff -----------------------------------------------------------
  // UGC gallery. Paste the gallery hash/id from the CrowdRiff embed snippet.
  crowdriff: {
    galleryId: "", // e.g. "abc123def456" (the value in data-crowdriff-hash)
  },

  // ---- Mailchimp -----------------------------------------------------------
  // From Mailchimp: Audience → Signup forms → Embedded form. Copy the values out
  // of the generated <form action="..."> tag. That URL already encodes u & id.
  mailchimp: {
    // The full form action URL, e.g.
    // "https://thenewbusiness.us21.list-manage.com/subscribe/post?u=XXXX&id=YYYY"
    actionUrl: "",
    // Mailchimp's anti-bot honeypot field name is derived from u & id:
    // b_<u>_<id>. Paste it here so the hidden field is correct. Optional but
    // recommended. e.g. "b_XXXX_YYYY"
    honeypot: "",
  },

  // ---- Preconnect origins --------------------------------------------------
  // Hosts we hint the browser to connect to early. Trim any you don't use.
  preconnect: [
    "https://api.prod.next.whereabouts.tech",
    "https://www.googletagmanager.com",
    "https://connect.facebook.net",
    "https://embed.whereabouts.co",
    "https://cdn.crowdriff.com",
    "https://chimpstatic.com",
    "https://list-manage.com",
  ],
};
