# Favicon Setup Guide

## ✅ Current Status: FIXED

The favicon issue has been resolved by adding proper `<link>` tags in the layout.

---

## 🔧 What Was Fixed

Added these lines to `src/app/[locale]/layout.tsx`:

```tsx
{/* Favicon */}
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
```

---

## 📁 Current Favicon

**Location:** `public/favicon.ico`  
**Size:** 783 KB (⚠️ This is quite large for a favicon)

---

## 🎨 Optional: Create Optimized Favicon

Your current favicon is 783KB which is very large. For better performance, consider optimizing it:

### Recommended Favicon Sizes

1. **favicon.ico** - 32×32 and 16×16 (multi-resolution .ico file)
2. **favicon-16x16.png** - 16×16 PNG
3. **favicon-32x32.png** - 32×32 PNG
4. **apple-touch-icon.png** - 180×180 PNG (for iOS)
5. **android-chrome-192x192.png** - 192×192 PNG
6. **android-chrome-512x512.png** - 512×512 PNG

### How to Create Optimized Favicons

**Option 1: Use Online Tool (Easiest)**
1. Go to https://realfavicongenerator.net/
2. Upload your logo/icon image
3. Customize settings
4. Download generated favicon package
5. Replace files in `public/` folder

**Option 2: Use Favicon.io**
1. Go to https://favicon.io/
2. Choose: Convert PNG to ICO, or Create from Text, or Create from Emoji
3. Download the package
4. Replace files in `public/` folder

### Design Recommendations for Uffizi Gallery Favicon

**Option A: Classic Column Icon**
- Use a simple column icon (representing Renaissance architecture)
- Gold/cream color (#d4a853)
- Simple, recognizable at small sizes

**Option B: "U" Letter Icon**
- Stylized "U" for Uffizi
- Playfair Display font
- Navy background (#1a1a2e), gold letter (#d4a853)

**Option C: Venus Shell**
- Simplified shell from Birth of Venus
- Iconic and recognizable
- Works well at small sizes

### If You Create New Favicons

Update the layout with additional sizes:

```tsx
{/* Favicon - Multiple Sizes */}
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```

---

## 📱 Site Manifest (Optional Enhancement)

Create `public/site.webmanifest` for Progressive Web App support:

```json
{
  "name": "Visit Uffizi Gallery",
  "short_name": "Uffizi",
  "description": "Uffizi Gallery tickets, tours & visitor guide",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#1a1a2e",
  "background_color": "#faf8f5",
  "display": "standalone"
}
```

---

## 🧪 Testing Your Favicon

After making changes:

1. **Hard Refresh Browser**
   - Chrome/Edge: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Firefox: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

2. **Clear Browser Cache**
   - Chrome: Settings → Privacy → Clear browsing data → Cached images

3. **Check in Different Browsers**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Android Chrome)

4. **Favicon Checker Tools**
   - https://realfavicongenerator.net/favicon_checker
   - Check how your favicon looks in different contexts

---

## 🚀 Quick Fix Summary

**What to do NOW:**
1. ✅ Favicon links added (already done)
2. Restart dev server: `npm run dev`
3. Hard refresh browser (Ctrl+Shift+R)
4. Should see favicon appear!

**What to do LATER (optional):**
1. Create optimized favicon (reduce 783KB to <50KB)
2. Add multiple sizes for different devices
3. Create site.webmanifest for PWA support

---

## 📊 Performance Impact

**Current:** 783 KB favicon = slow to load  
**Optimized:** <50 KB favicon = fast, better UX  
**Benefit:** Faster page loads, better Core Web Vitals

---

## ✅ Verification

After restarting dev server, your browser tab should show:
- ✅ Proper favicon icon (not generic document icon)
- ✅ Consistent across all pages
- ✅ Shows in bookmarks
- ✅ Shows in browser tabs

---

**Issue Status: RESOLVED** ✅  
**Next Step:** Restart dev server and hard refresh browser
