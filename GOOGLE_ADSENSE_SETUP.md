# Google AdSense Setup Guide

## Current Status

✅ **AdSense script is loaded** globally in `src/app/[locale]/layout.tsx`  
❌ **Ad units were NOT placed** on most content pages

## The Problem

The AdSense components (`DisplayAd`, `InArticleAd`) were created but **only used on 3 pages**:
- ✅ `/tickets/` - Has ads
- ✅ `/tours/` - Has ads
- ✅ `/blog/*` posts - Have ads

**Missing ads on ~20+ content pages**, including:
- ❌ Homepage `/`
- ❌ `/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look/`
- ❌ `/uffizi-gallery-opening-hours/`
- ❌ `/history/`
- ❌ `/vasari-corridor/`
- ❌ `/directions/`
- ❌ `/visitor-info/`
- ❌ `/artists/[slug]/`
- ❌ `/artworks/`
- ❌ And more...

## What I've Done

I've added ad placements to **2 example pages**:
1. ✅ `uffizi-gallery-in-2-hours-what-to-see-and-where-to-look/page.tsx`
2. ✅ `uffizi-gallery-opening-hours/page.tsx`

## What You Need to Do

### Step 1: Create Ad Units in Google AdSense

1. Go to [Google AdSense](https://adsense.google.com/)
2. Click **Ads** → **By ad unit** → **Display ads** → **+ New ad unit**
3. Create **In-article ads** (recommended for content pages):
   - Name: "Uffizi Content - In-Article"
   - Type: **In-article**
   - Copy the **Ad slot ID** (e.g., `1234567890`)

4. Create multiple ad units for different page types:
   - `uffizi-content-top` - For top of content pages
   - `uffizi-content-mid` - For middle of content
   - `uffizi-sidebar` - For sidebar areas (if you add sidebars)
   - `uffizi-homepage` - For homepage

### Step 2: Replace Placeholder Ad Slot IDs

I've used placeholder ID `"1234567890"` in the code. **Replace these with your real ad slot IDs**:

**Example in** `uffizi-gallery-in-2-hours-what-to-see-and-where-to-look/page.tsx`:

```tsx
{/* BEFORE (placeholder) */}
<InArticleAd adSlot="1234567890" className="my-8" />

{/* AFTER (your real ID from AdSense) */}
<InArticleAd adSlot="9876543210" className="my-8" />
```

### Step 3: Add Ads to Remaining Pages

Add the `InArticleAd` component to all content-rich pages:

#### Pages that need ads:

1. **Homepage** (`src/app/[locale]/page.tsx`)
2. **History** (`src/app/[locale]/history/page.tsx`)
3. **Vasari Corridor** (`src/app/[locale]/vasari-corridor/page.tsx`)
4. **Directions** (`src/app/[locale]/directions/page.tsx`)
5. **Visitor Info** (`src/app/[locale]/visitor-info/page.tsx`)
6. **Artworks** (`src/app/[locale]/artworks/page.tsx`)
7. **Artists index** (`src/app/[locale]/artists/page.tsx`)
8. **Individual artists** (`src/app/[locale]/artists/[slug]/page.tsx`)
9. **Door 3 guide** (`src/app/[locale]/the-uffizi-gallery-door-3-importent-information/page.tsx`)
10. **Tour subpages**: guided-tour, private-tour, uffizi-accademia-tour
11. **Ticket subpages**: skip-the-line, prices

#### How to add ads to a page:

**1. Import the component:**

```tsx
import { InArticleAd } from "@/components/ads";
```

**2. Place the ad in the content:**

```tsx
<InArticleAd adSlot="YOUR_REAL_SLOT_ID" className="my-8" />
```

**3. Best placement locations:**
- After the introduction paragraph
- Before or after booking cards
- Between major content sections
- Before FAQ sections

### Step 4: Test Your Ads

1. **Rebuild the site**:
   ```bash
   npm run build
   ```

2. **Deploy to Hostinger**

3. **Wait 24-48 hours** for Google to approve and start serving ads

4. **Check Google AdSense dashboard** to verify impressions

## Ad Component Types Available

### 1. InArticleAd (Best for content pages)
```tsx
<InArticleAd 
  adSlot="YOUR_SLOT_ID" 
  className="my-8" 
/>
```

### 2. DisplayAd (For flexible placement)
```tsx
<DisplayAd 
  adSlot="YOUR_SLOT_ID"
  adFormat="auto"  // or "rectangle", "horizontal", "vertical"
  fullWidthResponsive={true}
  className="my-6"
/>
```

### 3. AutoAds (Not recommended - less control)
Already configured in layout.tsx, but manual placement gives you more control.

## Important Notes

⚠️ **Ad Policy Compliance**:
- Don't place more than 3-4 ads per page
- Don't place ads too close together
- Leave space between ads and other content
- Don't encourage clicks ("Click the ad!")

⚠️ **New Site Warning**:
- Google may limit or not show ads on very new sites
- It can take 2-4 weeks for ads to show consistently
- Check AdSense for any policy violations

✅ **Best Practices**:
- Place ads naturally in content flow
- Use In-article ads for better user experience
- Test on mobile devices - ads should be responsive
- Monitor performance in AdSense dashboard

## Quick Reference - Files Modified

- ✅ `src/app/[locale]/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look/page.tsx`
- ✅ `src/app/[locale]/uffizi-gallery-opening-hours/page.tsx`

Use these as templates for adding ads to other pages!

## Need Help?

1. Check Google AdSense Help Center
2. Review the ad components in `src/components/ads/`
3. Look at existing implementations in tickets, tours, and blog pages
