# How to Use Your AdSense Ads

## ✅ Your Ad Units (Ready to Use)

| Ad Name | Ad Slot ID | Purpose |
|---------|-----------|---------|
| Blog In-Article Ad | `5754991454` | For blog posts |
| Banner Ad | `2318668115` | For tours and pages |
| Sidebar Ad | `8692504774` | For sidebar placements |

---

## 🎯 Implementation Examples

### 1. Blog Posts (In-Article Ads)

**File**: `src/app/[locale]/blog/[slug]/page.tsx`

Add this import at the top:
```tsx
import { InArticleAd } from "@/components/ads";
```

Then use it in your blog content:
```tsx
{/* After introduction or table of contents */}
<InArticleAd adSlot="5754991454" className="my-8" />

{/* After middle section */}
<InArticleAd adSlot="5754991454" className="my-8" />
```

### 2. Tour Pages (Banner Ads)

**Files**: 
- `src/app/[locale]/tours/page.tsx`
- `src/app/[locale]/tours/guided-tour/page.tsx`
- `src/app/[locale]/tours/private-tour/page.tsx`
- etc.

Add this import:
```tsx
import { DisplayAd } from "@/components/ads";
```

Use at top or bottom of page:
```tsx
{/* Top banner */}
<DisplayAd adSlot="2318668115" className="mb-8" />

{/* Your tour content here */}

{/* Bottom banner */}
<DisplayAd adSlot="2318668115" className="mt-8" />
```

### 3. Regular Pages (Banner Ads)

**Files**:
- `src/app/[locale]/tickets/page.tsx`
- `src/app/[locale]/history/page.tsx`
- `src/app/[locale]/visitor-info/page.tsx`
- etc.

```tsx
import { DisplayAd } from "@/components/ads";

{/* Before or after main content */}
<DisplayAd adSlot="2318668115" className="my-8" />
```

### 4. Sidebar Ad (If you add sidebars)

```tsx
import { DisplayAd } from "@/components/ads";

<aside className="sidebar">
  <DisplayAd 
    adSlot="8692504774" 
    adFormat="vertical"
    className="sticky top-4"
  />
</aside>
```

---

## 📝 Step-by-Step: Add to Blog Posts

Let's add the in-article ad to your blog posts:

**Edit**: `src/app/[locale]/blog/[slug]/page.tsx`

1. Add import at the top (around line 8):
```tsx
import { InArticleAd } from "@/components/ads";
```

2. Add after table of contents (around line 110):
```tsx
</nav>

{/* Ad after table of contents */}
<InArticleAd adSlot="5754991454" className="my-8" />

{/* Content Sections */}
```

3. Add in the middle of content (around line 138):
```tsx
{section.content.split("\n\n").map((paragraph, j) => {
  // ... existing code
})}

{/* Ad after every 2-3 sections */}
{i > 0 && (i + 1) % 2 === 0 && (
  <InArticleAd adSlot="5754991454" className="my-8" />
)}
```

---

## 📝 Step-by-Step: Add to Tour Pages

Let's add banner ads to your tour pages:

**Edit**: `src/app/[locale]/tours/page.tsx` (and other tour pages)

1. Add import at the top:
```tsx
import { DisplayAd } from "@/components/ads";
```

2. Add near the beginning of your return statement:
```tsx
return (
  <>
    {/* Existing breadcrumbs, etc. */}
    
    {/* Top banner ad */}
    <DisplayAd adSlot="2318668115" className="container mx-auto px-4 my-8" />
    
    {/* Your existing tour content */}
  </>
);
```

3. Optionally add at the bottom before closing tags:
```tsx
    {/* Your tour cards, etc. */}
    
    {/* Bottom banner ad */}
    <DisplayAd adSlot="2318668115" className="container mx-auto px-4 my-8" />
  </>
);
```

---

## ⚡ Quick Copy-Paste Code

### For Blog Posts:
```tsx
<InArticleAd adSlot="5754991454" className="my-8" />
```

### For Tours & Pages:
```tsx
<DisplayAd adSlot="2318668115" className="mb-8" />
```

### For Sidebar:
```tsx
<DisplayAd adSlot="8692504774" adFormat="vertical" className="sticky top-4" />
```

---

## 🎨 Styling Tips

### With Tailwind Classes:
```tsx
{/* Centered with max width */}
<InArticleAd adSlot="5754991454" className="mx-auto max-w-[720px] my-8" />

{/* With container */}
<DisplayAd adSlot="2318668115" className="container mx-auto px-4 my-8" />

{/* Full width */}
<DisplayAd adSlot="2318668115" className="w-full my-8" />

{/* Sticky sidebar */}
<DisplayAd 
  adSlot="8692504774" 
  className="sticky top-20 max-w-[300px]" 
/>
```

---

## ✅ Checklist

- [ ] Add import statements to files where you want ads
- [ ] Copy-paste ad components with your slot IDs
- [ ] Start with blog posts (highest engagement)
- [ ] Add to 2-3 tour pages
- [ ] Test locally (ads won't show but check for errors)
- [ ] Deploy to production
- [ ] Wait 24-48 hours for Google approval
- [ ] Check AdSense dashboard for ad performance

---

## 🐛 Testing

After adding ads:

1. **Check Browser Console**:
   - Open DevTools (F12)
   - Look for any errors related to AdSense
   - Should see AdSense script loading

2. **Verify HTML**:
   - Right-click → Inspect Element
   - Find `<ins class="adsbygoogle">`
   - Check data-ad-slot matches your IDs

3. **Production Test**:
   - Deploy to live site
   - Disable ad blocker
   - Check if blank space appears (normal during approval)

---

## 📊 Performance Tips

### Best Placements (Highest Revenue):

1. **Blog Posts** - Use in-article ads (slot: 5754991454)
   - After first few paragraphs
   - Middle of content
   - Before conclusion

2. **Tour Pages** - Use banner ads (slot: 2318668115)
   - Top of page (before tour cards)
   - Between sections
   - Bottom of page

3. **Avoid**:
   - Home page (unless you have content)
   - Thank you pages
   - Error pages

---

## 🚀 Recommended Implementation Order

1. **Start with Blog Posts** (highest engagement)
   - Add 1-2 in-article ads per post
   - Test on 1-2 posts first

2. **Add to Top Tour Pages**
   - `/tours/guided-tour`
   - `/tours/private-tour`
   - Main `/tours` page

3. **Add to Content Pages**
   - `/tickets`
   - `/visitor-info`
   - `/history`

4. **Monitor Performance**
   - Check AdSense dashboard after 1 week
   - Adjust placements based on performance

---

## 💡 Pro Tips

1. **Don't overload pages**: 2-3 ads per page is optimal
2. **Blog posts perform best**: Focus there first
3. **Mobile matters**: All your ads are responsive (good!)
4. **Be patient**: Takes 24-48 hours for ads to appear
5. **Check policies**: Ensure content follows AdSense guidelines

---

## Need Help?

- Check `ADSENSE_SETUP.md` for detailed guide
- Check `ADSENSE_BLOG_EXAMPLE.tsx` for full blog example
- AdSense Help: https://support.google.com/adsense
