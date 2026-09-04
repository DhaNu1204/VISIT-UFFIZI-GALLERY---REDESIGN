/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://visituffizi.com",
  generateRobotsTxt: false, // We have a custom robots.txt
  generateIndexSitemap: false,
  outDir: "./out", // write into the export AFTER next build has copied public/ (was ./public → shipped a one-build-stale sitemap)
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: true,

  // Exclude admin, API routes, non-page assets, and root redirect
  exclude: [
    "/",
    "/api/*",
    "/_next/*",
    "/404",
    "/500",
    "/icon.png",
    "/icon.png/",
  ],

  // Transform function to add multilingual support
  transform: async (config, path) => {
    // Set different priorities based on page type
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/" || path.match(/^\/(en|it|de|es|fr)\/?$/)) {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.includes("/blog/")) {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path.includes("/tours") || path.includes("/tickets")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.includes("/artists") || path.includes("/artworks")) {
      priority = 0.7;
      changefreq = "monthly";
    }

    // Strip the locale prefix to get the page path segment
    // Ensure trailing slash for consistency with trailingSlash: true
    const pathWithoutLocale = path.replace(/^\/(en|it|de|es|fr)/, "").replace(/\/?$/, "/");

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { hreflang: "x-default", href: `${config.siteUrl}/en${pathWithoutLocale}`, hrefIsAbsolute: true },
        { hreflang: "en", href: `${config.siteUrl}/en${pathWithoutLocale}`, hrefIsAbsolute: true },
        { hreflang: "it", href: `${config.siteUrl}/it${pathWithoutLocale}`, hrefIsAbsolute: true },
        { hreflang: "de", href: `${config.siteUrl}/de${pathWithoutLocale}`, hrefIsAbsolute: true },
        { hreflang: "es", href: `${config.siteUrl}/es${pathWithoutLocale}`, hrefIsAbsolute: true },
        { hreflang: "fr", href: `${config.siteUrl}/fr${pathWithoutLocale}`, hrefIsAbsolute: true },
      ],
    };
  },
};
