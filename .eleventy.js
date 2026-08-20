// Eleventy config — Wander Niagara Fall campaign microsite
// CommonJS (package.json has no "type":"module").
const fs = require("fs");
const path = require("path");
const { HtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Rewrites absolute /paths in built HTML when a pathPrefix is set
  // (GitHub Pages project URL: --pathprefix=/wander-niagara-fall/).
  // No-op for local dev and for a future custom domain.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // ---- Passthrough copy (assets ship as-is; keep paths relative) ----
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Rebuild when CSS/JS change during --serve
  eleventyConfig.addWatchTarget("src/assets/");

  // ---- Collections ----
  // Story articles live in src/stories/articles/*.md
  eleventyConfig.addCollection("articles", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/stories/articles/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  // ---- Filters ----
  // Pull the registrable host out of a URL (for analytics params / display)
  eleventyConfig.addFilter("domain", (url) => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch (e) {
      return "";
    }
  });

  // Grab businesses for a given page variant + theme key from the data file
  eleventyConfig.addFilter("themeBusinesses", (businesses, variant, themeKey) => {
    if (!businesses || !businesses[variant]) return [];
    const theme = (businesses[variant].themes || []).find((t) => t.key === themeKey);
    return theme ? theme.items : [];
  });

  // Nunjucks-friendly JSON dump for JSON-LD blocks
  eleventyConfig.addFilter("jsonld", (obj) => JSON.stringify(obj));

  // Inline a file's raw contents (used to inline critical CSS in <head>).
  eleventyConfig.addFilter("readFile", (p) => {
    try {
      return fs.readFileSync(path.join(__dirname, p), "utf8");
    } catch (e) {
      return "";
    }
  });

  // ---- Dirs ----
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    // Use relative paths everywhere so a custom-domain move (fall.wanderniagara.com)
    // and GitHub Pages subpath both work without rewriting links.
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
