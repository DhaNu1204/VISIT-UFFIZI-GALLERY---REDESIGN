# VisitUffizi.com — Claude Code Project Instructions

## Project
Multilingual tourism site for Uffizi Gallery, Florence. Sells tickets/tours
via GetYourGuide affiliate. 5 languages: EN, IT, DE, ES, FR.

## Stack
Next.js 15 (App Router), TypeScript, Tailwind CSS 4, next-intl, MDX, Vercel

## Content Rules
- Voice: local Florence guide — warm, knowledgeable, practical
- Every page: min 1 BookingCard CTA + 3-5 internal links
- Affiliate links: rel="nofollow sponsored"
- Images: descriptive alt text with keywords

## SEO Rules
- Unique title (<60 chars, primary keyword)
- Meta description (150-160 chars)
- Unique H1 with keyword
- Hreflang tags for all 5 languages
- FAQPage + BreadcrumbList schema on every page
- Structured data (JSON-LD) on relevant pages

## URL Structure
/en/[page]/, /it/[page]/, /de/[page]/, /es/[page]/, /fr/[page]/

### PRESERVED Legacy URLs (must not change slug):
- /[locale]/uffizi-gallery-opening-hours/
- /[locale]/vasari-corridor/
- /[locale]/the-uffizi-gallery-door-3-importent-information/
- /[locale]/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look/

## Design
Playfair Display (headings), Inter (body)
Navy #1a1a2e | Gold #d4a853 | Burgundy #6b2737 | Cream #faf8f5
Max content 720px | Max page 1200px | All CTAs: burgundy bg, white text

## Redirects (old WordPress → new)
/giotto/ → /en/artists/giotto/
/michelangelo/ → /en/artists/michelangelo/
/sandro-botticelli/ → /en/artists/sandro-botticelli/
/leonardo-da-vinci/ → /en/artists/leonardo-da-vinci/
/giorgio-vasari/ → /en/artists/giorgio-vasari/
/raffaello-sanzio/ → /en/artists/raphael/
/tiziano/ → /en/artists/titian/
/rembrandt/ → /en/artists/rembrandt/
/dante-alighieri/ → /en/artists/dante-alighieri/
/piero-della-francesca/ → /en/artists/piero-della-francesca/
/famous-renaissance-artists/ → /en/artists/
/history-of-uffizi-gallery/ → /en/history/
/plan-your-visit-to-uffizi-gallery/ → /en/visitor-info/
/getting-to-the-uffizi-gallery/ → /en/directions/
/uffizi-artworks/ → /en/artworks/
(Same pattern for /it/ prefix)
