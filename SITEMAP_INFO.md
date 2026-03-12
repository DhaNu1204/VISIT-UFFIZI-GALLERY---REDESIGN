# Sitemap Configuration

## ✅ Sitemap is Configured!

Your website has a fully configured sitemap system that automatically generates XML sitemaps for all your pages in all languages.

---

## 📁 Current Setup

### Files:
- **Configuration**: `next-sitemap.config.js`
- **Robots.txt**: `public/robots.txt`
- **Generated Sitemap**: `public/sitemap.xml` (created after build)

### Features:
- ✅ **Multilingual Support** - All 5 languages (EN, IT, DE, ES, FR)
- ✅ **Automatic Generation** - Runs after every build
- ✅ **SEO Optimized** - Different priorities for different page types
- ✅ **Hreflang Tags** - Proper alternate language references

---

## 🎯 Sitemap Priorities

The configuration automatically assigns priorities based on page type:

| Page Type | Priority | Update Frequency |
|-----------|----------|------------------|
| Homepage | 1.0 | Daily |
| Tours & Tickets | 0.9 | Weekly |
| Blog Posts | 0.8 | Monthly |
| Artists & Artworks | 0.7 | Monthly |
| Other Pages | 0.7 | Weekly |

---

## 🚀 How to Generate the Sitemap

The sitemap is automatically generated when you build your site:

```bash
# Navigate to your project
cd visituffizi

# Build the project (sitemap generates automatically)
npm run build
```

This runs two commands:
1. `next build` - Builds your Next.js app
2. `next-sitemap` - Generates sitemap.xml (runs automatically via postbuild script)

---

## 📍 Generated Files

After running `npm run build`, you'll find:

```
public/
├── sitemap.xml          ← Main sitemap
└── robots.txt           ← Search engine instructions
```

---

## 🌐 Sitemap Location

Your sitemap will be available at:
- **Production**: `https://visituffizi.com/sitemap.xml`
- **Local**: `http://localhost:3000/sitemap.xml` (after build + start)

---

## 📋 What's Included in Your Sitemap

The sitemap automatically includes all:

✅ Homepage (all languages)
✅ Tour pages
  - /tours
  - /tours/guided-tour
  - /tours/private-tour
  - /tours/uffizi-accademia-tour

✅ Ticket pages
  - /tickets
  - /tickets/prices
  - /tickets/skip-the-line

✅ Content pages
  - /history
  - /directions
  - /visitor-info
  - /vasari-corridor
  - /opening-hours

✅ Blog posts
  - /blog (listing)
  - /blog/[slug] (all posts)

✅ Artists
  - /artists (listing)
  - /artists/[slug] (all artists)

✅ Artworks
  - /artworks (listing)

**All pages × 5 languages = Comprehensive multilingual sitemap!**

---

## 🔧 Configuration Details

### Current Settings:

```javascript
siteUrl: "https://visituffizi.com"
generateRobotsTxt: false  // We use custom robots.txt
outDir: "./public"         // Output to public folder
changefreq: "weekly"       // Default update frequency
priority: 0.7              // Default priority
```

### Multilingual Support:

Each URL includes hreflang alternates for:
- English (en)
- Italian (it)
- German (de)
- Spanish (es)
- French (fr)
- x-default (fallback)

---

## 🔍 Submit to Search Engines

After deployment, submit your sitemap to:

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Navigate to **Sitemaps** in the left menu
4. Enter: `sitemap.xml`
5. Click **Submit**

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Select your site
3. Go to **Sitemaps** → **Submit Sitemap**
4. Enter: `https://visituffizi.com/sitemap.xml`
5. Click **Submit**

---

## 🧪 Testing Your Sitemap

### After Building:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Visit sitemap**:
   ```
   http://localhost:3000/sitemap.xml
   ```

4. **Validate**:
   - Use [Google's Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
   - Paste your sitemap URL
   - Check for errors

---

## 📊 Sitemap Example

Your sitemap will look like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://visituffizi.com/en</loc>
    <lastmod>2026-03-11T00:00:00.000Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://visituffizi.com/en"/>
    <xhtml:link rel="alternate" hreflang="it" href="https://visituffizi.com/it"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://visituffizi.com/de"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://visituffizi.com/es"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://visituffizi.com/fr"/>
  </url>
  <!-- More URLs... -->
</urlset>
```

---

## 🔄 Updating the Sitemap

The sitemap automatically regenerates every time you:
1. Run `npm run build`
2. Deploy to production

**No manual updates needed!** 🎉

---

## ⚙️ Customization

If you want to:

### Exclude specific pages:
Edit `next-sitemap.config.js`:
```javascript
exclude: [
  "/api/*",
  "/private-page",
  "/admin/*",
],
```

### Add additional pages:
```javascript
additionalPaths: async (config) => {
  return [
    { loc: "/special-page", priority: 0.9, changefreq: "monthly" },
  ];
},
```

### Change priorities:
Modify the `transform` function in `next-sitemap.config.js`

---

## 📝 Robots.txt

Your `public/robots.txt` file:

```
User-agent: *
Allow: /

Sitemap: https://visituffizi.com/sitemap.xml
```

This tells search engines:
- ✅ Crawl all pages
- ✅ Find sitemap at /sitemap.xml

---

## ✅ Checklist

- [x] Sitemap configuration created
- [x] Robots.txt configured
- [x] Multilingual support enabled
- [x] Priority levels optimized
- [ ] Build and generate sitemap (`npm run build`)
- [ ] Deploy to production
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools

---

## 🆘 Troubleshooting

**Sitemap not generating?**
- Make sure you run `npm run build` (not just `npm run dev`)
- Check `public/` folder after build
- Look for errors in build output

**Sitemap empty or missing pages?**
- Ensure all pages are statically generated
- Check `exclude` rules in config
- Verify page files exist

**Wrong URLs in sitemap?**
- Check `siteUrl` in config matches your domain
- Verify deployment URL is correct

---

## 📚 Resources

- [next-sitemap Documentation](https://github.com/iamvishnusankar/next-sitemap)
- [Google Sitemap Guidelines](https://developers.google.com/search/docs/advanced/sitemaps/overview)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)
