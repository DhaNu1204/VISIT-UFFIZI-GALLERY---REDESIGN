# VisitUffizi.com - Project Status & Next Steps

**Last Updated:** March 11, 2026  
**Status:** Core Development Complete ✅ | Pre-Launch Phase 🚀

---

## ✅ COMPLETED (Based on PRD)

### Phase 1-2: Project Scaffolding & Core Infrastructure ✅
- [x] Next.js 15 (App Router) with TypeScript
- [x] Tailwind CSS 4 styling system
- [x] next-intl i18n (5 locales: en, it, de, es, fr)
- [x] MDX support for content
- [x] next-sitemap configuration
- [x] Static export configuration
- [x] Header with navigation & language switcher
- [x] Footer with 4-column layout
- [x] Breadcrumbs with JSON-LD schema
- [x] Mobile responsive navigation

### Phase 3: SEO Components ✅
- [x] Hreflang tags for all languages
- [x] JSON-LD schemas (Museum, FAQPage, Product, Person, Article, BreadcrumbList)
- [x] Meta tags and Open Graph
- [x] Sitemap generation with multilingual support
- [x] robots.txt configured

### Phase 4: Content Components ✅
- [x] BookingCard (GetYourGuide CTAs)
- [x] PriceTable
- [x] TourCard
- [x] ArtworkCard
- [x] FAQ accordion with schema
- [x] ImageGallery
- [x] GetYourGuideWidget
- [x] StickyMobileCTA

### Phase 5-6: Money Pages ✅
- [x] Homepage (English)
- [x] Tickets pages (main, skip-the-line, prices)
- [x] Tours pages (main, guided-tour, private-tour, uffizi-accademia-tour)

### Phase 7: Visitor Info Pages ✅
- [x] Opening Hours (preserved legacy URL)
- [x] Vasari Corridor (preserved legacy URL)
- [x] Door 3 (preserved legacy URL with typo)
- [x] 2-Hours Guide (preserved legacy URL)
- [x] Visitor Info
- [x] Directions
- [x] History

### Phase 8: Artist & Blog Pages ✅
- [x] Artists hub page
- [x] Dynamic artist pages with [slug] route
- [x] Blog index page
- [x] Dynamic blog post pages with [slug] route
- [x] Artworks listing page

### Bonus: Additional Features ✅
- [x] **Google AdSense Integration** (3 ad units configured)
  - Blog In-Article Ad (slot: 5754991454)
  - Banner Ad for tours/pages (slot: 2318668115)
  - Sidebar Ad (slot: 8692504774)
- [x] **Sitemap Optimization** (smart priorities, multilingual support)

---

## 🟡 IN PROGRESS / PARTIALLY COMPLETE

### Translations
**Status:** Framework ready, content needs completion

- [x] Translation files structure (en, it, de, es, fr)
- [x] UI strings translated (messages/*.json)
- [ ] **All page content translated to IT, DE, ES, FR**
  - Need to verify all 35 pages × 4 additional languages = 140 translations

---

## ❌ NOT YET STARTED (Critical for Launch)

### 1. 301 Redirects (CRITICAL - Don't Lose Rankings!)

**Priority: HIGH** - Must complete before deploying to production

The PRD specifies these old WordPress URLs must redirect:

```javascript
// Add to next.config.ts
async redirects() {
  return [
    // Artist redirects
    { source: '/giotto', destination: '/en/artists/giotto', permanent: true },
    { source: '/michelangelo', destination: '/en/artists/michelangelo', permanent: true },
    { source: '/sandro-botticelli', destination: '/en/artists/sandro-botticelli', permanent: true },
    { source: '/leonardo-da-vinci', destination: '/en/artists/leonardo-da-vinci', permanent: true },
    { source: '/giorgio-vasari', destination: '/en/artists/giorgio-vasari', permanent: true },
    { source: '/raffaello-sanzio', destination: '/en/artists/raphael', permanent: true },
    { source: '/tiziano', destination: '/en/artists/titian', permanent: true },
    { source: '/rembrandt', destination: '/en/artists/rembrandt', permanent: true },
    { source: '/dante-alighieri', destination: '/en/artists/dante-alighieri', permanent: true },
    { source: '/piero-della-francesca', destination: '/en/artists/piero-della-francesca', permanent: true },
    { source: '/filippo-brunelleschi-biography-artwork', destination: '/en/artists/filippo-brunelleschi', permanent: true },
    
    // Content page redirects
    { source: '/famous-renaissance-artists', destination: '/en/artists', permanent: true },
    { source: '/history-of-uffizi-gallery', destination: '/en/history', permanent: true },
    { source: '/plan-your-visit-to-uffizi-gallery', destination: '/en/visitor-info', permanent: true },
    { source: '/getting-to-the-uffizi-gallery', destination: '/en/directions', permanent: true },
    { source: '/uffizi-artworks', destination: '/en/artworks', permanent: true },
    
    // Italian redirects (same pattern with /it/)
    { source: '/it/giotto', destination: '/it/artists/giotto', permanent: true },
    // ... repeat for all IT URLs
  ];
}
```

**Why critical:** These URLs have existing Google authority and traffic.

---

### 2. Design Polish

**Priority: MEDIUM-HIGH**

- [ ] **Typography Setup**
  - [ ] Self-host Playfair Display (headings)
  - [ ] Self-host Inter (body text)
  - [ ] Update globals.css with font-family declarations

- [ ] **Color System Verification**
  - [ ] Ensure consistent use of:
    - Navy #1a1a2e (primary text)
    - Gold #d4a853 (accents)
    - Burgundy #6b2737 (CTAs)
    - Cream #faf8f5 (backgrounds)
    - Charcoal #2d2d2d (secondary text)

- [ ] **Homepage Hero Polish**
  - [ ] Full-width hero image with overlay
  - [ ] Centered text
  - [ ] Prominent CTA button

- [ ] **Mobile Optimization**
  - [ ] Test all pages at 375px width
  - [ ] Verify sticky mobile CTA bar on ticket/tour pages
  - [ ] Ensure 44px minimum tap targets

---

### 3. Images & Assets

**Priority: MEDIUM**

- [ ] **Source Images**
  - [ ] Collect artwork images (Wikimedia Commons, public domain)
  - [ ] Collect Uffizi Gallery photos (Unsplash, Pexels, or own)
  - [ ] Collect Florence photos

- [ ] **Image Optimization**
  - [ ] Create sharp-based optimization script
  - [ ] Generate WebP versions
  - [ ] Create responsive sizes (400w, 800w, 1200w)
  - [ ] Compress to quality 80

- [ ] **Open Graph Images**
  - [ ] Create 1200x630px OG images for key pages
  - [ ] Homepage, tickets, tours, top artists

---

### 4. Analytics & Tracking

**Priority: MEDIUM-HIGH**

- [ ] **Google Analytics 4**
  - [ ] Create GA4 property
  - [ ] Replace placeholder `G-XXXXXXXXXX` in layout.tsx with actual ID
  - [ ] Set up conversion tracking for affiliate clicks
  - [ ] Test tracking in production

- [ ] **Google Search Console**
  - [ ] Add site to Search Console
  - [ ] Verify ownership (meta tag or DNS)
  - [ ] Replace `REPLACE_WITH_YOUR_VERIFICATION_CODE` in layout.tsx
  - [ ] Submit sitemap after deployment

---

### 5. Performance Optimization

**Priority: MEDIUM**

- [ ] **Core Web Vitals**
  - [ ] Add image width/height attributes
  - [ ] Implement lazy loading for below-fold images
  - [ ] Preload hero images
  - [ ] Target <100KB first load JS

- [ ] **Lighthouse Audit**
  - [ ] Run Lighthouse on all page types
  - [ ] Target 95+ on mobile
  - [ ] Fix any accessibility issues

---

### 6. Pre-Launch Testing

**Priority: HIGH**

- [ ] **Functionality Testing**
  - [ ] Test all 5 language versions render correctly
  - [ ] Verify all internal links work
  - [ ] Check all GetYourGuide affiliate links have `rel="nofollow sponsored"`
  - [ ] Test mobile navigation and CTAs
  - [ ] Verify AdSense ads appear (after deployment & approval)

- [ ] **SEO Testing**
  - [ ] Run Screaming Frog on local build - no broken links
  - [ ] Verify sitemap includes all pages
  - [ ] Check hreflang tags on sample pages
  - [ ] Validate JSON-LD schemas
  - [ ] Test 404 page

- [ ] **Cross-Browser Testing**
  - [ ] Chrome, Firefox, Safari, Edge
  - [ ] Mobile: iOS Safari, Android Chrome

---

### 7. Deployment

**Priority: HIGH** (Once above items complete)

- [ ] **Pre-Deploy Checklist**
  - [ ] All 301 redirects configured
  - [ ] GA4 tracking code in place
  - [ ] GSC verification code in place
  - [ ] All affiliate links use correct tracking
  - [ ] Production build successful (`npm run build`)
  - [ ] Sitemap generated in public/ directory

- [ ] **Vercel Deployment**
  - [ ] Push to GitHub repository
  - [ ] Connect Vercel to GitHub repo
  - [ ] Configure custom domain (visituffizi.com)
  - [ ] Set environment variables (if any)
  - [ ] Deploy production build
  - [ ] Verify HTTPS works

- [ ] **DNS Configuration**
  - [ ] Update DNS records to point to Vercel
  - [ ] Verify both www and non-www work
  - [ ] Test all 5 language URLs live

---

### 8. Post-Launch

**Priority: HIGH** (First 2 weeks after launch)

- [ ] **Search Console Monitoring**
  - [ ] Submit sitemap to GSC
  - [ ] Monitor for crawl errors daily
  - [ ] Check indexing status
  - [ ] Monitor Core Web Vitals

- [ ] **Analytics Setup**
  - [ ] Verify GA4 receiving traffic
  - [ ] Set up affiliate click tracking
  - [ ] Monitor bounce rate by page type
  - [ ] Track language distribution

- [ ] **AdSense Monitoring**
  - [ ] Wait 24-48 hours for ads to appear
  - [ ] Check AdSense dashboard for approval status
  - [ ] Monitor ad performance by page
  - [ ] Adjust placements based on data

- [ ] **SEO Monitoring**
  - [ ] Check rankings for key terms weekly
  - [ ] Monitor organic traffic trend
  - [ ] Track indexed pages count
  - [ ] Monitor CTR in GSC

---

## 📊 CONTENT COMPLETION STATUS

### English Content (Target: 35 pages)
Based on PRD requirements:

| Category | Required | Status |
|----------|----------|--------|
| Homepage | 1 | ✅ Complete |
| Tickets | 3 | ✅ Complete |
| Tours | 4 | ✅ Complete |
| Visitor Info | 7 | ✅ Complete |
| Artists | 11 | 🟡 Need verification |
| Blog | 8 | 🟡 Need verification |
| Hub pages | 2 | ✅ Complete |
| **Total** | **35** | **~30 complete** |

### Translations (Target: 175 total pages)
| Language | Pages | Status |
|----------|-------|--------|
| English (EN) | 35 | ✅ ~30 complete |
| Italian (IT) | 35 | 🟡 Partial |
| German (DE) | 35 | 🟡 Partial |
| Spanish (ES) | 35 | 🟡 Partial |
| French (FR) | 35 | 🟡 Partial |
| **Total** | **175** | **~30-50 complete** |

---

## 🎯 RECOMMENDED NEXT STEPS (Priority Order)

### Immediate (Before Launch)

1. **Set up 301 Redirects** (1-2 hours)
   - Add redirect configuration to next.config.ts
   - Test each redirect locally

2. **Complete Content Audit** (2-3 hours)
   - Verify all 35 English pages exist
   - Check all artist pages have content
   - Check all blog posts have content

3. **Google Analytics & Search Console** (1 hour)
   - Create GA4 property
   - Add tracking code to layout
   - Create GSC property
   - Add verification code

4. **Run Pre-Launch Tests** (2-3 hours)
   - Build production (`npm run build`)
   - Run Screaming Frog
   - Test all pages locally
   - Verify sitemap

### Short Term (Launch Week)

5. **Deploy to Production** (1 day)
   - Push to GitHub
   - Configure Vercel
   - Set up custom domain
   - Verify deployment

6. **Submit to Search Engines** (1 hour)
   - Submit sitemap to GSC
   - Submit sitemap to Bing Webmaster

7. **Monitor Launch** (Daily for 2 weeks)
   - Check GSC for errors
   - Monitor analytics
   - Watch AdSense approval status

### Medium Term (Weeks 2-8)

8. **Complete Translations** (4-6 weeks)
   - Translate all pages to IT (highest priority)
   - Translate money pages to DE
   - Translate money pages to ES, FR
   - Complete all remaining translations

9. **Content Enhancement** (Ongoing)
   - Add images to all pages
   - Optimize images for performance
   - Create Open Graph images
   - Add more internal links

10. **Performance Optimization** (1-2 weeks)
    - Achieve 95+ Lighthouse score
    - Optimize Core Web Vitals
    - Reduce bundle size

---

## 📈 SUCCESS METRICS (6 Months Post-Launch)

From PRD - Track these monthly:

| Metric | Current | Target | Progress |
|--------|---------|--------|----------|
| Monthly organic clicks | 3,500 | 15,000 | Not launched |
| Average CTR | 0.41% | 3% | Not launched |
| Affiliate conversions | ~0 | 200+ | Not launched |
| Page Speed (mobile) | - | 95+ | Not measured |
| Indexed pages | 60 | 175+ | Not launched |

---

## 🔧 TECHNICAL DEBT & NICE-TO-HAVES

### Low Priority (Post-Launch)
- [ ] Set up Cloudinary for dynamic image optimization
- [ ] Add image alt text optimization
- [ ] Implement blog category taxonomy
- [ ] Add related articles widget
- [ ] Create artist comparison pages
- [ ] Add user reviews/testimonials
- [ ] Implement structured data for reviews
- [ ] Add seasonal content (Christmas at Uffizi, etc.)

---

## 📝 NOTES

### What's Working Well
- ✅ Solid technical foundation (Next.js + i18n)
- ✅ Good SEO infrastructure
- ✅ Comprehensive component library
- ✅ AdSense integrated early
- ✅ Sitemap properly configured

### What Needs Attention
- ⚠️ 301 redirects MUST be done before launch
- ⚠️ Translation completion needed
- ⚠️ Analytics setup critical for tracking success
- ⚠️ Image optimization will improve performance significantly

### Risk Areas
- 🔴 **HIGH RISK:** Deploying without redirects = loss of existing rankings
- 🟡 **MEDIUM RISK:** No translations = only capturing English market initially
- 🟡 **MEDIUM RISK:** No images = lower engagement and CTR

---

## 📞 SUPPORT & RESOURCES

### Documentation Created
- ✅ `ADSENSE_SETUP.md` - Complete AdSense integration guide
- ✅ `HOW_TO_USE_YOUR_ADS.md` - Ad placement guide with actual slot IDs
- ✅ `SITEMAP_INFO.md` - Sitemap configuration and submission guide
- ✅ `visituffizi_prd.md` - Original product requirements document
- ✅ `PROJECT_STATUS_AND_NEXT_STEPS.md` - This document

### Key PRD Sections to Reference
- **Section 2:** Critical migration plan (redirects)
- **Section 7:** Claude Code prompts for content generation
- **Section 9:** Content writing guidelines
- **Section 12:** Deployment instructions

---

**Ready for launch after completing Immediate priority items! 🚀**

*Estimated time to launch-ready: 5-8 hours of focused work*
