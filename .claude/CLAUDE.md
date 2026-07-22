# VisitUffizi.com — Claude Code Project Instructions

## Project Overview
Multilingual tourism website for the Uffizi Gallery in Florence, Italy. Monetized via GetYourGuide affiliate commissions (tickets + tours). Secondary goal: build authority for Heritance Italy tour business. 5 languages: EN, IT, DE, ES, FR. Production-ready with 304 static pages (27 blog posts × 5 languages + content pages + artist pages).

## Tech Stack
- **Framework:** Next.js 16.1.6 (App Router, static export)
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4 (@tailwindcss/postcss)
- **i18n:** next-intl 4.8.3 (locales: en, it, de, es, fr; default: en)
- **Content:** Page data in `src/data/content/*.ts` and `src/data/blog*.ts` TypeScript files (MDX folders exist but are empty)
- **SEO:** next-sitemap 4.2.3, JSON-LD structured data
- **Analytics:** Google Analytics 4, AdSense
- **Deployment:** Static export (`output: 'export'`), configured for Hostinger (Apache/.htaccess) and Vercel

## Commands
```bash
npm run dev       # Dev server at localhost:3000
npm run build     # Static export to /out (runs next-sitemap as postbuild)
npm run start     # Production server
npm run lint      # ESLint
```

## Deployment
`.htaccess` lives at `public/.htaccess` (single source of truth). The build copies it into
`out/` automatically. `ads.txt` lives at `public/ads.txt`, same behavior.

Deployment = build, then **manually upload `out/` contents to Hostinger `public_html`**. The
upload is the owner's step (Claude has no credentials). There is no Git auto-deploy and no
Vercel connection — `vercel.json` is unused, the live redirects come from `.htaccess`.

Verified: Next.js 16.1.6 does copy dotfiles from `public/` into the static export, so
`public/.htaccess` reliably reaches `out/.htaccess` on every build. Never re-add a root-level
`.htaccess` — two copies drift, and the build ships the `public/` one.

## Project Structure
```
visituffizi/
├── src/
│   ├── app/[locale]/          # All pages (locale-based routing)
│   │   ├── artists/[slug]/    # Dynamic artist pages
│   │   ├── blog/[slug]/       # Dynamic blog posts
│   │   ├── tickets/           # Ticket pages (money pages)
│   │   └── tours/             # Tour pages (money pages)
│   ├── components/
│   │   ├── layout/            # Header, Footer, Breadcrumbs, MobileNav
│   │   ├── seo/               # JsonLd, MetaTags, Hreflang
│   │   ├── ui/                # BookingCard, TourCard, FAQ, etc.
│   │   ├── content/           # MDXComponents, RelatedPages, TOC
│   │   ├── ads/               # AutoAds, DisplayAd, InArticleAd
│   │   └── gdpr/              # CookieConsent
│   ├── data/content/          # Page content as TypeScript objects (all locales)
│   ├── lib/                   # Utilities (analytics, content, i18n, seo)
│   ├── i18n/                  # next-intl routing & request config
│   └── styles/globals.css
├── messages/                  # UI translation strings ({locale}.json)
├── public/images/             # Artworks, artists, gallery, OG images
├── public/.htaccess           # Apache redirects & config (copied to out/ by build)
├── public/ads.txt             # AdSense sellers file (copied to out/ by build)
├── out/                       # Static build output
└── vercel.json                # UNUSED (no Vercel deployment) — see Deployment above
```

## Content Rules
- **Voice:** Local Florence guide — warm, knowledgeable, practical
- **Every page must have:** min 1 BookingCard CTA + 3-5 internal links
- **Affiliate links:** Always use `rel="nofollow sponsored"`
- **Images:** Descriptive alt text with relevant keywords
- **Content source:** Page content lives in `src/data/content/*.ts`, NOT in MDX files (MDX folders exist but are empty)

## SEO Rules
- Unique `<title>` per page (<60 chars, primary keyword first)
- Meta description: 150-160 chars
- Unique H1 with primary keyword
- Hreflang tags for all 5 languages on every page
- FAQPage + BreadcrumbList JSON-LD schema on every page
- Additional structured data where relevant: Museum, Product, Person, Article
- Canonical URLs must be correct

## URL Structure
`/{locale}/[page]/` — trailing slashes required (Apache compatibility)

### PRESERVED Legacy URLs (DO NOT change these slugs — they have significant search traffic):
- `/[locale]/uffizi-gallery-opening-hours/` (185K impressions, position 8.7)
- `/[locale]/vasari-corridor/` (68K impressions, position 13.6)
- `/[locale]/the-uffizi-gallery-door-3-importent-information/` (5K impressions, 7.1% CTR — typo is intentional)
- `/[locale]/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look/` (11.2% CTR)

## Design System
- **Fonts:** Playfair Display (headings), Inter (body) — self-hosted via `next/font/google` (WOFF2, automatic subsetting)
- **Colors:** Navy `#1a1a2e` | Gold `#d4a853` | Burgundy `#6b2737` | Cream `#faf8f5` | Charcoal `#2d2d2d`
- **Layout:** Max content 720px, max page 1200px, mobile-first
- **CTAs:** Burgundy background, white text, 44px minimum tap targets

## Key Redirects (old WordPress → new)
Live redirects are in `public/.htaccess` (54 `RedirectMatch 301` rules). `vercel.json` also
lists redirects but is unused — the site is not on Vercel. Pattern:
- `/giotto/` → `/en/artists/giotto/`
- `/sandro-botticelli/` → `/en/artists/sandro-botticelli/`
- `/famous-renaissance-artists/` → `/en/artists/`
- `/history-of-uffizi-gallery/` → `/en/history/`
- Same pattern duplicated for `/it/` prefix

## Environment Variables
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=<GA4 ID>
NEXT_PUBLIC_GSC_VERIFICATION=<Google Search Console verification>
```

## Blog Content Architecture
- **27 English blog posts** in `src/data/blog.ts` + `blog-posts-1-5.ts` through `blog-posts-16-20.ts`
- **Translations** in `blog-{lang}.ts` (original 7) + `blog-posts-new-{lang}.ts` (additional 20) for IT, DE, ES, FR
- Translation files merge via `Object.assign()` in each `blog-{lang}.ts`
- Blog posts use `BookingCard` CTA at top (after hero), mid-article, and bottom
- Each post has: title, description, h1, heroImage, sections[], faq[], with full translations per locale

## Important Notes
- Static export: No server-side features (no API routes, no SSR, no ISR)
- Images are unoptimized (`unoptimized: true` in next.config.ts) for static export
- Trailing slashes enabled for Apache .htaccess compatibility
- Path alias: `@/*` maps to `./src/*`
- Build generates 304 pages across all 5 locales
- AdSense loaded via `<Script strategy="lazyOnload">` (not in head) for performance
- Font CSS variables: `--font-inter` and `--font-playfair` set on `<html>` via `next/font`
