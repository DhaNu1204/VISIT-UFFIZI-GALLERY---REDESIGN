# Analytics & Tracking Setup Guide

Complete guide to setting up Google Analytics 4, Google Search Console, and affiliate link tracking for visituffizi.com.

---

## Table of Contents

1. [Google Analytics 4 Setup](#1-google-analytics-4-setup)
2. [Google Search Console Setup](#2-google-search-console-setup)
3. [Environment Variables Configuration](#3-environment-variables-configuration)
4. [Verifying Tracking is Working](#4-verifying-tracking-is-working)
5. [Affiliate Link Tracking](#5-affiliate-link-tracking)
6. [Custom Event Tracking](#6-custom-event-tracking)
7. [Troubleshooting](#7-troubleshooting)

---

## 1. Google Analytics 4 Setup

### Step 1: Create a GA4 Property

1. **Go to Google Analytics:** https://analytics.google.com/
2. **Sign in** with your Google account
3. **Click "Admin"** (gear icon in bottom left)
4. **Click "Create Property"**
   - Property name: `VisitUffizi.com`
   - Time zone: `Italy Time (GMT+1)`
   - Currency: `Euro (EUR)`
5. **Click "Next"**
6. **Fill in business details:**
   - Industry: `Travel & Tourism`
   - Business size: `Small`
7. **Click "Create"**
8. **Accept Terms of Service**

### Step 2: Get Your Measurement ID

1. After creating the property, you'll see **"Web stream details"**
2. If not, go to: **Admin → Data Streams → Add stream → Web**
3. **Enter website details:**
   - Website URL: `https://visituffizi.com`
   - Stream name: `VisitUffizi Main Site`
   - Enhanced measurement: ✅ Enable (tracks scrolls, clicks, file downloads automatically)
4. **Click "Create stream"**
5. **Copy your Measurement ID** — it looks like: `G-XXXXXXXXXX`

### Step 3: Configure Enhanced Measurements (Recommended)

In your Web stream settings, enable these:

- ✅ **Page views** (auto-enabled)
- ✅ **Scrolls** (tracks 90% scroll depth)
- ✅ **Outbound clicks** (important for affiliate links!)
- ✅ **Site search** (if you add search later)
- ✅ **Video engagement** (if you add videos)
- ✅ **File downloads** (tracks PDF clicks)

---

## 2. Google Search Console Setup

### Step 1: Add Your Property

1. **Go to Google Search Console:** https://search.google.com/search-console
2. **Click "Add Property"**
3. **Choose "URL prefix"** (recommended over Domain)
4. **Enter your URL:** `https://visituffizi.com`
5. **Click "Continue"**

### Step 2: Verify Ownership (HTML Meta Tag Method)

1. **Choose "HTML tag"** verification method
2. **Copy the verification code** — looks like: `abcdefghijklmnopqrstuvwxyz1234567890`
   - Only copy the `content` value, not the entire meta tag
3. **Keep this tab open** (don't verify yet)

### Step 3: Alternative Verification Methods

If HTML tag doesn't work, you can use:

- **Google Analytics:** If you already have GA4 set up and it's tracking data
- **Google Tag Manager:** If you use GTM
- **Domain name provider:** Add a TXT record to your DNS

---

## 3. Environment Variables Configuration

### Step 1: Create .env.local File

In the root of your project (`visituffizi/`), create a file named `.env.local`:

```bash
# In PowerShell or Command Prompt:
cd "d:\VISIT UFFIZI GALLERY - REDESIGN\visituffizi"
type nul > .env.local
```

Or create it manually in your code editor.

### Step 2: Add Your Tracking Codes

Open `.env.local` and add:

```env
# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console Verification Code
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code-here
```

**Replace:**
- `G-XXXXXXXXXX` → Your actual GA4 Measurement ID
- `your-verification-code-here` → Your GSC verification code

**Example:**
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123DEF4
NEXT_PUBLIC_GSC_VERIFICATION=1234567890abcdefghijklmnopqrstuvwxyz
```

### Step 3: Verify GSC Ownership

1. **Save your `.env.local` file**
2. **Rebuild your site:**
   ```bash
   npm run build
   ```
3. **Deploy to production** (Vercel will automatically read `.env.local` if you add env vars in Vercel dashboard)
4. **Go back to Google Search Console tab**
5. **Click "Verify"**
6. ✅ You should see: "Ownership verified"

### Step 4: Add Environment Variables to Vercel

If deploying to Vercel:

1. **Go to your Vercel dashboard:** https://vercel.com/dashboard
2. **Select your project:** `visituffizi`
3. **Go to Settings → Environment Variables**
4. **Add each variable:**
   - Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
   - Environments: ✅ Production, ✅ Preview, ✅ Development
5. **Add second variable:**
   - Key: `NEXT_PUBLIC_GSC_VERIFICATION`
   - Value: Your verification code
   - Environments: ✅ Production, ✅ Preview, ✅ Development
6. **Click "Save"**
7. **Redeploy your site** (Settings → Deployments → ... → Redeploy)

---

## 4. Verifying Tracking is Working

### Method 1: Google Analytics Real-Time Reports

1. **Go to Google Analytics:** https://analytics.google.com/
2. **Click "Reports" → "Realtime"**
3. **Open your website** in a new tab: https://visituffizi.com
4. **Navigate between pages**
5. ✅ You should see yourself as an active user

**If you don't see data:**
- Check browser console for errors (F12 → Console tab)
- Verify your Measurement ID is correct in `.env.local`
- Ensure ad blockers are disabled (they block GA4)
- Wait 2-3 minutes (sometimes there's a delay)

### Method 2: Browser Developer Tools

1. **Open your site:** https://visituffizi.com
2. **Open Developer Tools:** Press `F12` or right-click → Inspect
3. **Go to "Network" tab**
4. **Filter by "gtag" or "collect"**
5. **Refresh the page**
6. ✅ You should see requests to `www.google-analytics.com/g/collect`

### Method 3: Google Tag Assistant (Chrome Extension)

1. **Install:** [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm)
2. **Click extension icon**
3. **Enable debugging**
4. **Refresh your page**
5. ✅ You should see your GA4 tag firing

### Method 4: Check Google Search Console

1. **Go to Google Search Console:** https://search.google.com/search-console
2. **Click your property**
3. **Go to "Sitemaps"**
4. **Submit your sitemap:** `https://visituffizi.com/sitemap.xml`
5. **Wait 24-48 hours**
6. **Check "Performance" → "Search results"**
7. ✅ After a few days, you'll see impressions and clicks

---

## 5. Affiliate Link Tracking

### Tracking GetYourGuide Link Clicks

The project includes an analytics utility (`src/lib/analytics.ts`) with pre-built tracking functions.

### Step 1: Add Tracking to BookingCard Component

When a user clicks a GetYourGuide affiliate link, track it:

**Example implementation in `src/components/booking/BookingCard.tsx`:**

```tsx
import { trackAffiliateClick } from '@/lib/analytics';

export default function BookingCard({ 
  title, 
  url, 
  type = 'ticket',
  position = 'booking-section' 
}: BookingCardProps) {
  
  const handleClick = () => {
    // Track the affiliate click
    trackAffiliateClick({
      linkType: type, // 'ticket' | 'tour' | 'widget'
      destination: url,
      productName: title,
      position: position, // e.g., 'hero', 'sidebar', 'booking-section'
    });
  };

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="..."
    >
      {/* Card content */}
    </a>
  );
}
```

### Step 2: Track CTA Button Clicks

For prominent calls-to-action (e.g., "Book Now" buttons):

```tsx
import { trackCTAClick } from '@/lib/analytics';

<button
  onClick={() => {
    trackCTAClick({
      ctaName: 'Book Tickets Now',
      ctaLocation: 'hero-section',
      destination: 'https://www.getyourguide.com/...',
    });
    // Then navigate or open link
    window.open(ticketUrl, '_blank');
  }}
>
  Book Tickets Now
</button>
```

### Step 3: Track User Engagement on Content Pages

For artwork/artist pages, track how long users spend reading:

```tsx
import { useEffect, useState } from 'react';
import { trackEngagement } from '@/lib/analytics';

export default function ArtworkPage({ artwork }) {
  const [startTime] = useState(Date.now());

  useEffect(() => {
    // Track engagement when user leaves the page
    return () => {
      const engagementTime = Math.floor((Date.now() - startTime) / 1000);
      if (engagementTime > 5) { // Only track if > 5 seconds
        trackEngagement({
          contentType: 'artwork',
          contentName: artwork.title,
          engagementTime,
        });
      }
    };
  }, [artwork.title, startTime]);

  return (
    // ... artwork content
  );
}
```

---

## 6. Custom Event Tracking

All custom events are defined in `src/lib/analytics.ts`. Available functions:

### 1. `trackEvent(eventName, eventParams)`
Generic event tracking.

```tsx
trackEvent('newsletter_signup', {
  location: 'footer',
  email_provided: true,
});
```

### 2. `trackAffiliateClick(params)`
Track affiliate link clicks.

```tsx
trackAffiliateClick({
  linkType: 'tour',
  destination: 'https://www.getyourguide.com/...',
  productName: 'Uffizi Gallery Skip-the-Line Tour',
  position: 'sidebar',
});
```

### 3. `trackCTAClick(params)`
Track CTA button clicks.

```tsx
trackCTAClick({
  ctaName: 'Book Skip-the-Line Tickets',
  ctaLocation: 'hero-banner',
  destination: 'https://www.getyourguide.com/...',
});
```

### 4. `trackPageView(url, title)`
Manual page view tracking (useful for SPAs, though Next.js handles this automatically).

```tsx
trackPageView('/en/artworks/birth-of-venus', 'Birth of Venus - Uffizi Gallery');
```

### 5. `trackSearch(searchTerm, resultCount)`
Track search queries (if you add search functionality).

```tsx
trackSearch('botticelli paintings', 5);
```

### 6. `trackEngagement(params)`
Track time spent on content pages.

```tsx
trackEngagement({
  contentType: 'artist',
  contentName: 'Leonardo da Vinci',
  engagementTime: 120, // seconds
});
```

---

## 7. Viewing Custom Events in GA4

### Step 1: Check DebugView (Real-Time)

1. **Go to Google Analytics**
2. **Click "Admin" → "DebugView"**
3. **Open your site with `?debug_mode=true`:**
   - Example: `https://visituffizi.com?debug_mode=true`
4. **Click affiliate links and CTAs**
5. ✅ You should see events in real-time with full parameters

### Step 2: Create Custom Reports

1. **Go to "Reports" → "Engagement" → "Events"**
2. **You'll see all tracked events:**
   - `affiliate_click`
   - `cta_click`
   - `user_engagement`
   - `page_view`
3. **Click any event to see parameters:**
   - `link_type`, `product_name`, `click_position`, etc.

### Step 3: Create Conversion Events

Mark important events as conversions:

1. **Go to "Admin" → "Events"**
2. **Find `affiliate_click`**
3. **Toggle "Mark as conversion"** ✅
4. **Repeat for `cta_click`**

Now you can see conversion rates in GA4 reports!

---

## 8. Troubleshooting

### Problem: GA4 Not Tracking

**Possible causes:**
- ❌ Measurement ID is incorrect
- ❌ Ad blocker is enabled
- ❌ Environment variables not set in production
- ❌ CSP (Content Security Policy) blocking scripts

**Solutions:**
1. Check `.env.local` has correct `NEXT_PUBLIC_GA_MEASUREMENT_ID`
2. Verify environment variables are set in Vercel dashboard
3. Disable ad blockers (uBlock Origin, AdBlock, etc.)
4. Check browser console for errors (F12 → Console)
5. Verify scripts are loading: View page source (Ctrl+U) and search for `gtag`

### Problem: Custom Events Not Appearing

**Possible causes:**
- ❌ Event name has spaces or special characters
- ❌ Component not importing tracking functions
- ❌ Event firing before GA4 loads

**Solutions:**
1. Use underscores in event names: `affiliate_click` not `affiliate click`
2. Verify import: `import { trackAffiliateClick } from '@/lib/analytics';`
3. Add small delay if needed: `setTimeout(() => trackEvent(...), 100);`

### Problem: GSC Not Verifying

**Possible causes:**
- ❌ Verification code not in production build
- ❌ Site not deployed yet
- ❌ Typo in verification code

**Solutions:**
1. Verify `.env.local` has correct `NEXT_PUBLIC_GSC_VERIFICATION`
2. Rebuild and redeploy: `npm run build` → deploy
3. View page source in production and search for `google-site-verification`
4. Try alternative verification method (Google Analytics or DNS)

### Problem: No Data After 24 Hours

**Possible causes:**
- ❌ Site not indexed by Google yet
- ❌ No traffic to the site
- ❌ Robots.txt blocking crawlers

**Solutions:**
1. Submit sitemap manually in GSC: `https://visituffizi.com/sitemap.xml`
2. Check `robots.txt` allows crawling
3. Share links on social media to get initial traffic
4. Request indexing for key pages in GSC: "URL Inspection" → "Request Indexing"

---

## 9. Best Practices

### Performance
- ✅ GA4 scripts load asynchronously (won't slow down page)
- ✅ Only loads if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- ✅ No tracking in development (unless you set env vars)

### Privacy
- ✅ GA4 is GDPR-compliant by default (no PII collected)
- ❌ Consider adding cookie consent banner for EU traffic
- ❌ Update privacy policy to mention GA4 and affiliate links

### Tracking Strategy
- 🎯 **Focus on conversions:** Track affiliate clicks and CTA clicks
- 📊 **Monitor engagement:** Track time spent on key content pages
- 🔍 **Analyze drop-off:** Where do users leave before clicking affiliate links?
- 🌍 **Track by language:** Use GA4's built-in language/country reports

### Monthly Reviews
- Check GA4 "Engagement" → "Events" → `affiliate_click`
- Which pages drive the most affiliate clicks?
- Which CTAs have highest click-through rates?
- Optimize top-performing pages, improve low-performing ones

---

## 10. Useful Resources

### Documentation
- [Google Analytics 4 Help](https://support.google.com/analytics/answer/9304153)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Next.js Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)

### Tools
- [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm)
- [GA4 Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
- [Screaming Frog SEO Spider](https://www.screamingfrogseoseo.com/) (check meta tags, redirects)

### GetYourGuide Affiliate
- [Partner Dashboard](https://partner.getyourguide.com/)
- Track conversions and commissions
- Your Partner ID: `Z35Q282` (already set up)

---

## 11. Quick Reference

### Environment Variables

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code
```

### Import Tracking Functions

```tsx
import {
  trackEvent,
  trackAffiliateClick,
  trackCTAClick,
  trackPageView,
  trackSearch,
  trackEngagement,
} from '@/lib/analytics';
```

### Track Affiliate Click

```tsx
trackAffiliateClick({
  linkType: 'ticket',
  destination: url,
  productName: title,
  position: 'hero',
});
```

### Track CTA Click

```tsx
trackCTAClick({
  ctaName: 'Book Now',
  ctaLocation: 'sidebar',
  destination: url,
});
```

---

**Questions?** Check the [Troubleshooting section](#8-troubleshooting) or review the analytics utility code in `src/lib/analytics.ts`.

**Ready to deploy?** Make sure both environment variables are set in Vercel dashboard, then redeploy. ✅
