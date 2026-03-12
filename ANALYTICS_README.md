# Analytics & Tracking System - Quick Start

Complete analytics and affiliate tracking system for visituffizi.com.

---

## 📋 What's Included

### Files Created

1. **`.env.example`** - Template for environment variables
2. **`src/lib/analytics.ts`** - Tracking utility functions
3. **`ANALYTICS_SETUP_GUIDE.md`** - Complete GA4/GSC setup instructions
4. **`TRACKING_IMPLEMENTATION_EXAMPLES.md`** - Code examples and best practices

### Files Updated

1. **`src/app/[locale]/layout.tsx`** - Now uses environment variables for GA4/GSC
2. **`src/components/ui/BookingCard.tsx`** - Added affiliate click tracking
3. **`src/components/ui/TourCard.tsx`** - Added affiliate click tracking
4. **`src/components/ui/StickyMobileCTA.tsx`** - Added CTA click tracking

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create `.env.local`

```bash
cd "d:\VISIT UFFIZI GALLERY - REDESIGN\visituffizi"
type nul > .env.local
```

### Step 2: Add Your Tracking Codes

Open `.env.local` and add:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code
```

### Step 3: Get Your Tracking IDs

**Google Analytics 4:**
1. Go to https://analytics.google.com/
2. Create a property for `visituffizi.com`
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property: `https://visituffizi.com`
3. Choose "HTML tag" verification
4. Copy the verification code

**Full instructions:** See [ANALYTICS_SETUP_GUIDE.md](./ANALYTICS_SETUP_GUIDE.md)

### Step 4: Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and check browser console (F12) for any errors.

### Step 5: Deploy to Production

Add the same environment variables to your Vercel dashboard:

1. Go to https://vercel.com/dashboard
2. Select your project
3. Settings → Environment Variables
4. Add both variables
5. Redeploy

---

## 📊 What Gets Tracked

### Automatically Tracked

✅ **Page views** - Every page load
✅ **Scrolls** - 90% scroll depth
✅ **Outbound clicks** - All external links
✅ **Affiliate clicks** - GetYourGuide links via `BookingCard`, `TourCard`
✅ **CTA clicks** - "Book Now" buttons via `StickyMobileCTA`

### Custom Events

You can track additional events using `src/lib/analytics.ts`:

```tsx
import { trackEvent, trackAffiliateClick, trackCTAClick } from "@/lib/analytics";

// Track custom event
trackEvent('newsletter_signup', { location: 'footer' });

// Track affiliate click
trackAffiliateClick({
  linkType: 'ticket',
  destination: 'https://www.getyourguide.com/...',
  productName: 'Uffizi Tickets',
  position: 'hero',
});

// Track CTA click
trackCTAClick({
  ctaName: 'Book Now',
  ctaLocation: 'sidebar',
  destination: 'https://www.getyourguide.com/...',
});
```

**Full examples:** See [TRACKING_IMPLEMENTATION_EXAMPLES.md](./TRACKING_IMPLEMENTATION_EXAMPLES.md)

---

## 🔍 Verifying It Works

### Method 1: Browser DevTools

1. Open your site
2. Press `F12` → Network tab
3. Filter by "collect" or "gtag"
4. Click a "Book Now" button
5. ✅ You should see tracking requests

### Method 2: GA4 Real-Time Reports

1. Go to https://analytics.google.com/
2. Reports → Realtime
3. Open your site in another tab
4. ✅ You should see yourself as an active user

### Method 3: GA4 DebugView

1. Open your site with `?debug_mode=true`
2. Go to GA4 → Admin → DebugView
3. Click affiliate links
4. ✅ You should see events with full parameters

---

## 📈 Viewing Data in GA4

### Key Reports to Monitor

1. **Engagement → Events**
   - See all tracked events
   - `affiliate_click` - GetYourGuide link clicks
   - `cta_click` - Call-to-action button clicks
   - `page_view` - Page views

2. **Acquisition → Traffic acquisition**
   - Where visitors come from
   - Organic search, direct, referral

3. **Engagement → Pages and screens**
   - Most visited pages
   - Engagement time per page

4. **User attributes → Demographics**
   - Visitor location
   - Language preferences

### Create Conversion Events

Mark important events as conversions:

1. Admin → Events
2. Find `affiliate_click`
3. Toggle "Mark as conversion" ✅
4. Repeat for `cta_click`

Now you can track conversion rates!

---

## 🎯 Tracking Strategy

### What to Track

| Element | Component | Event Type | Priority |
|---------|-----------|------------|----------|
| Skip-the-line ticket links | `BookingCard` | `affiliate_click` | 🔴 Critical |
| Tour booking links | `TourCard` | `affiliate_click` | 🔴 Critical |
| Sticky mobile CTA | `StickyMobileCTA` | `cta_click` | 🔴 Critical |
| Hero "Book Now" buttons | Custom | `cta_click` | 🟡 Important |
| Time on artwork pages | Custom | `user_engagement` | 🟢 Nice-to-have |
| Newsletter signups | Custom | `newsletter_signup` | 🟢 Nice-to-have |

### Monthly Reviews

Check these metrics monthly:

1. **Affiliate Click-Through Rate**
   - How many visitors click GetYourGuide links?
   - Target: 5-10% of visitors

2. **Top Performing Pages**
   - Which pages drive the most affiliate clicks?
   - Optimize top performers, improve low performers

3. **Position Analysis**
   - Which placements work best?
   - Hero vs sidebar vs inline vs sticky CTA

4. **Language Performance**
   - Which languages convert best?
   - Prioritize content for high-converting languages

---

## 🛠️ Components with Built-in Tracking

### BookingCard

Tracks affiliate clicks automatically.

```tsx
<BookingCard
  type="tickets"
  title="Uffizi Gallery Skip-the-Line Tickets"
  price="20"
  link="https://www.getyourguide.com/uffizi-tickets"
  position="hero-section" // Helps identify placement
/>
```

### TourCard

Tracks tour booking clicks automatically.

```tsx
<TourCard
  title="Uffizi Gallery Small Group Tour"
  description="Expert guide with skip-the-line access"
  price="59"
  duration="2.5 hours"
  link="https://www.getyourguide.com/uffizi-tour"
  position="tours-grid"
/>
```

### StickyMobileCTA

Tracks sticky CTA clicks automatically.

```tsx
<StickyMobileCTA
  label="Skip the Line Tickets"
  price="20"
  link="https://www.getyourguide.com/uffizi-tickets"
/>
```

---

## 🔧 Environment Variables

### Required Variables

```env
# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console Verification Code
NEXT_PUBLIC_GSC_VERIFICATION=abcdefghijklmnopqrstuvwxyz
```

### Where to Add Them

**Development:**
- File: `.env.local` (in project root)
- Status: ❌ Not committed to Git (in `.gitignore`)

**Production (Vercel):**
- Location: Vercel Dashboard → Settings → Environment Variables
- Environments: ✅ Production, ✅ Preview, ✅ Development

---

## 🚨 Troubleshooting

### Problem: No tracking data in GA4

**Checklist:**
- [ ] `.env.local` file exists with correct `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Measurement ID format is `G-XXXXXXXXXX` (not `UA-...`)
- [ ] Dev server restarted after adding env vars
- [ ] Ad blockers disabled
- [ ] Browser console shows no errors

### Problem: GSC verification failed

**Checklist:**
- [ ] `.env.local` has `NEXT_PUBLIC_GSC_VERIFICATION`
- [ ] Site is deployed to production
- [ ] Verification code matches exactly (no extra spaces)
- [ ] Viewing page source shows `<meta name="google-site-verification" content="..."/>`

### Problem: Events not appearing in GA4

**Checklist:**
- [ ] Component has `"use client"` at the top
- [ ] Import statement: `import { trackAffiliateClick } from "@/lib/analytics";`
- [ ] Browser console shows no errors
- [ ] Tracking request visible in Network tab (filter by "collect")

**Full troubleshooting guide:** See [ANALYTICS_SETUP_GUIDE.md](./ANALYTICS_SETUP_GUIDE.md#8-troubleshooting)

---

## 📚 Documentation

### Complete Guides

1. **[ANALYTICS_SETUP_GUIDE.md](./ANALYTICS_SETUP_GUIDE.md)**
   - Step-by-step GA4 setup
   - Step-by-step GSC setup
   - Verification instructions
   - Viewing data in GA4
   - Troubleshooting

2. **[TRACKING_IMPLEMENTATION_EXAMPLES.md](./TRACKING_IMPLEMENTATION_EXAMPLES.md)**
   - Code examples for all components
   - Best practices
   - Custom tracking implementations
   - Complete page examples

### Quick Reference

```tsx
// Import tracking functions
import {
  trackEvent,
  trackAffiliateClick,
  trackCTAClick,
  trackPageView,
  trackEngagement,
} from "@/lib/analytics";

// Track affiliate click
trackAffiliateClick({
  linkType: "ticket",
  destination: url,
  productName: title,
  position: "hero",
});

// Track CTA click
trackCTAClick({
  ctaName: "Book Now",
  ctaLocation: "sidebar",
  destination: url,
});

// Track engagement
trackEngagement({
  contentType: "artwork",
  contentName: "Birth of Venus",
  engagementTime: 120, // seconds
});
```

---

## ✅ Checklist: Before Going Live

### Development

- [ ] `.env.local` created with tracking codes
- [ ] `npm run dev` works without errors
- [ ] Affiliate links track clicks in browser DevTools
- [ ] GA4 DebugView shows events (with `?debug_mode=true`)

### Production

- [ ] Environment variables added to Vercel
- [ ] Site deployed
- [ ] GA4 Real-Time shows data
- [ ] GSC verification successful
- [ ] Sitemap submitted: `https://visituffizi.com/sitemap.xml`

### Monitoring

- [ ] GA4 bookmarked: https://analytics.google.com/
- [ ] GSC bookmarked: https://search.google.com/search-console
- [ ] GetYourGuide partner dashboard bookmarked
- [ ] Monthly review scheduled in calendar

---

## 🎉 You're All Set!

Your analytics system is ready to track:
- ✅ Page views across 5 languages
- ✅ Affiliate link clicks (conversion tracking)
- ✅ CTA button clicks
- ✅ User engagement
- ✅ Search Console performance

**Next steps:**
1. Get your GA4 Measurement ID
2. Get your GSC verification code
3. Add them to `.env.local`
4. Deploy to production
5. Monitor your first data in GA4 Real-Time

**Questions?** Check the troubleshooting sections in [ANALYTICS_SETUP_GUIDE.md](./ANALYTICS_SETUP_GUIDE.md).

---

**Last updated:** March 11, 2026
**Maintained by:** Analytics & Tracking Specialist
