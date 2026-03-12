/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://visituffizi.com",
  generateRobotsTxt: false, // We have a custom robots.txt
  generateIndexSitemap: false,
  outDir: "./public", // Changed from ./out to ./public for standard Next.js builds
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  
  // Exclude admin, API routes, etc.
  exclude: [
    "/api/*",
    "/_next/*",
    "/404",
    "/500",
  ],
  
  // Transform function to add multilingual support
  transform: async (config, path) => {
    // Set different priorities based on page type
    let priority = 0.7;
    let changefreq = "weekly";
    
    if (path === "/" || path.match(/^\/(en|it|de|es|fr)$/)) {
      // Homepage - highest priority
      priority = 1.0;
      changefreq = "daily";
    } else if (path.includes("/blog/")) {
      // Blog posts - high priority, updated less frequently
      priority = 0.8;
      changefreq = "monthly";
    } else if (path.includes("/tours") || path.includes("/tickets")) {
      // Important conversion pages
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.includes("/artists") || path.includes("/artworks")) {
      // Content pages
      priority = 0.7;
      changefreq = "monthly";
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { hreflang: "x-default", href: `${config.siteUrl}${path}` },
        { hreflang: "en", href: `${config.siteUrl}/en${path.replace(/^\/(en|it|de|es|fr)/, "")}` },
        { hreflang: "it", href: `${config.siteUrl}/it${path.replace(/^\/(en|it|de|es|fr)/, "")}` },
        { hreflang: "de", href: `${config.siteUrl}/de${path.replace(/^\/(en|it|de|es|fr)/, "")}` },
        { hreflang: "es", href: `${config.siteUrl}/es${path.replace(/^\/(en|it|de|es|fr)/, "")}` },
        { hreflang: "fr", href: `${config.siteUrl}/fr${path.replace(/^\/(en|it|de|es|fr)/, "")}` },
      ],
    };
  },
  
  // Additional paths (if you have any dynamic routes not generated statically)
  additionalPaths: async (config) => {
    const result = [];
    
    // You can add any additional dynamic paths here if needed
    // Example:
    // result.push({ loc: '/special-page', priority: 0.9 });
    
    return result;
  },
};
