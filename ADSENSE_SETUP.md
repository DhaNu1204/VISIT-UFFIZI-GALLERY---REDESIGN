# Google AdSense Setup Guide

## ✅ Configuration Complete

Your Google AdSense is now configured with Publisher ID: `ca-pub-5190790382711375`

### What's Been Set Up

1. **AdSense Script** - Added to the site's `<head>` in `src/app/[locale]/layout.tsx`
2. **Reusable Ad Components** - Created in `src/components/ads/`
   - `DisplayAd` - Responsive display ads
   - `InArticleAd` - In-article ads for blog posts
   - `AutoAds` - Automatic ad placement

---

## 📝 How to Use AdSense Components

### 1. Display Ad (Banners)

Use for header, sidebar, or footer ads:

```tsx
import { DisplayAd } from "@/components/ads";

<DisplayAd 
  adSlot="1234567890" 
  adFormat="auto" 
  className="my-4"
/>
```

**Props:**
- `adSlot` (required): Your ad unit ID from AdSense dashboard
- `adFormat`: "auto" | "rectangle" | "horizontal" | "vertical" (default: "auto")
- `fullWidthResponsive`: boolean (default: true)
- `className`: Custom CSS classes

### 2. In-Article Ad

Perfect for blog posts and long-form content:

```tsx
import { InArticleAd } from "@/components/ads";

<InArticleAd 
  adSlot="9876543210"
  className="my-8"
/>
```

**Props:**
- `adSlot` (required): Your ad unit ID
- `className`: Custom CSS classes

### 3. Auto Ads

Automatically places ads throughout your site (optional):

```tsx
import { AutoAds } from "@/components/ads";

// Add to your layout or page
<AutoAds />
```

---

## 🎯 Recommended Placement

### Blog Posts (`src/app/[locale]/blog/[slug]/page.tsx`)

```tsx
import { InArticleAd } from "@/components/ads";

export default function BlogPost() {
  return (
    <article>
      <h1>Blog Title</h1>
      
      {/* After introduction */}
      <p>First paragraphs...</p>
      <InArticleAd adSlot="YOUR_AD_SLOT_1" className="my-8" />
      
      {/* Middle of content */}
      <p>More content...</p>
      <InArticleAd adSlot="YOUR_AD_SLOT_2" className="my-8" />
      
      {/* Before conclusion */}
      <p>Final paragraphs...</p>
    </article>
  );
}
```

### Tour Pages

```tsx
import { DisplayAd } from "@/components/ads";

export default function TourPage() {
  return (
    <>
      {/* Top banner */}
      <DisplayAd adSlot="YOUR_AD_SLOT" adFormat="horizontal" className="mb-8" />
      
      <div className="tour-content">
        {/* Your tour content */}
      </div>
      
      {/* Bottom banner */}
      <DisplayAd adSlot="YOUR_AD_SLOT" adFormat="horizontal" className="mt-8" />
    </>
  );
}
```

### Sidebar (if you have one)

```tsx
import { DisplayAd } from "@/components/ads";

<aside className="sidebar">
  <DisplayAd 
    adSlot="YOUR_AD_SLOT" 
    adFormat="vertical" 
    className="sticky top-4"
  />
</aside>
```

---

## 🔧 Next Steps

### 1. Create Ad Units in Google AdSense

1. Go to [AdSense Dashboard](https://www.google.com/adsense/)
2. Navigate to **Ads** → **By ad unit** → **Display ads**
3. Create new ad units for different placements:
   - Header Banner
   - In-Article Ads (for blog posts)
   - Sidebar Ads
   - Footer Ads

4. Copy the **Ad Slot ID** (looks like: `1234567890`)

### 2. Replace Ad Slot IDs

Update your components with the actual ad slot IDs you get from AdSense:

```tsx
// Example: In your blog post
<InArticleAd adSlot="1234567890" /> // ← Replace with your actual ad slot
```

### 3. Test Your Ads

- Ads won't show immediately in development
- Deploy to production and wait 24-48 hours for approval
- Use AdSense dashboard to monitor performance

### 4. Verify Installation

1. Visit your live site
2. Right-click → Inspect Element
3. Check Console for any AdSense errors
4. Verify the AdSense script is loaded in the `<head>`

---

## 💡 Best Practices

### ✅ DO:
- Place 1-3 ads per page for best user experience
- Use in-article ads for blog posts (higher engagement)
- Wait 24-48 hours after deployment for ads to appear
- Check AdSense Policy Center regularly

### ❌ DON'T:
- Overload pages with too many ads
- Click your own ads (violates AdSense policy)
- Place ads too close to navigation
- Use misleading ad placements

---

## 🐛 Troubleshooting

### Ads Not Showing?

1. **Wait**: New sites need 24-48 hours for approval
2. **Check Console**: Look for JavaScript errors
3. **Verify Script**: Ensure AdSense script is in `<head>`
4. **Ad Blocker**: Disable ad blockers when testing
5. **AdSense Status**: Check your AdSense account status

### Common Issues

**"AdSense code not found"**
- The script is in your layout, but may need time to be recognized by Google

**"Site not approved yet"**
- New sites need manual review (usually 24-48 hours)
- Ensure you have quality content and follow AdSense policies

**Blank spaces where ads should be**
- Normal during review period
- Check AdSense dashboard for approval status

---

## 📊 Monitoring Performance

Track your ad performance in the [AdSense Dashboard](https://www.google.com/adsense/):
- Page RPM (Revenue per 1000 impressions)
- Click-through rate (CTR)
- Estimated earnings
- Top performing pages

---

## 📞 Support

- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [AdSense Community](https://support.google.com/adsense/community)
