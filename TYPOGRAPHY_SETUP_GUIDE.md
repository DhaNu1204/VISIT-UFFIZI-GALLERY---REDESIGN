# Typography Setup Guide — VisitUffizi.com

**Project:** VisitUffizi.com Redesign  
**Framework:** Next.js 15 with Tailwind CSS 4  
**Fonts:** Playfair Display (headings) + Inter (body text)  
**Date:** March 11, 2026

---

## Current State

✅ **Fonts are currently loading from Google Fonts CDN** via `<link>` tags in `src/app/[locale]/layout.tsx` (lines 48-58).

**Weights being used:**
- **Inter:** 400, 500, 600, 700
- **Playfair Display:** 700, 800

**Location:** `src/app/[locale]/layout.tsx`

```tsx
{/* Google Fonts: Playfair Display + Inter */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossOrigin="anonymous"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap"
  rel="stylesheet"
/>
```

---

## Why Self-Host Fonts?

### Benefits:
1. **Better Performance** — No DNS lookup to Google servers, faster First Contentful Paint (FCP)
2. **Privacy Compliance** — No third-party requests, better GDPR compliance
3. **Full Control** — No dependency on external CDN availability
4. **Offline Support** — Fonts work even if Google Fonts is down

### Trade-offs:
- **Bundle Size** — Font files add ~200-400KB to your deployment
- **Maintenance** — You manage font files instead of Google

**Recommendation:** For an SEO-focused site like VisitUffizi, self-hosting is better for Core Web Vitals.

---

## Option 1: Self-Hosted Fonts (Recommended)

### Step 1: Download Font Files

#### Download Inter
1. Go to https://fonts.google.com/specimen/Inter
2. Click "Download family"
3. Extract the ZIP file
4. You'll need these files from the `static/` folder:
   - `Inter-Regular.ttf` (400)
   - `Inter-Medium.ttf` (500)
   - `Inter-SemiBold.ttf` (600)
   - `Inter-Bold.ttf` (700)

#### Download Playfair Display
1. Go to https://fonts.google.com/specimen/Playfair+Display
2. Click "Download family"
3. Extract the ZIP file
4. You'll need these files from the `static/` folder:
   - `PlayfairDisplay-Bold.ttf` (700)
   - `PlayfairDisplay-ExtraBold.ttf` (800)

### Step 2: Convert to Modern Formats

For best performance, convert TTF files to WOFF2 (better compression):

**Online Tools (easiest):**
- https://cloudconvert.com/ttf-to-woff2
- https://everythingfonts.com/ttf-to-woff2

**Command Line (if you have tools installed):**
```bash
# Using fonttools (install with: pip install fonttools brotli)
pyftsubset Inter-Regular.ttf --output-file=inter-regular.woff2 --flavor=woff2 --layout-features='*' --unicodes=U+0020-007E,U+00A0-00FF,U+0100-017F
```

### Step 3: Organize Font Files

Create this folder structure:

```
visituffizi/
└── public/
    └── fonts/
        ├── inter/
        │   ├── inter-regular.woff2
        │   ├── inter-medium.woff2
        │   ├── inter-semibold.woff2
        │   └── inter-bold.woff2
        └── playfair/
            ├── playfair-bold.woff2
            └── playfair-extrabold.woff2
```

### Step 4: Update globals.css

Replace the current font variable declarations with @font-face rules:

**File:** `src/app/globals.css`

```css
@import "tailwindcss";

/* Inter Font Family */
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter/inter-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/inter/inter-medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/inter/inter-semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/inter/inter-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Playfair Display Font Family */
@font-face {
  font-family: "Playfair Display";
  src: url("/fonts/playfair/playfair-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Playfair Display";
  src: url("/fonts/playfair/playfair-extrabold.woff2") format("woff2");
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

/* Tailwind CSS 4 Theme Configuration */
@theme inline {
  --color-navy: #1a1a2e;
  --color-gold: #d4a853;
  --color-burgundy: #6b2737;
  --color-cream: #faf8f5;
  --color-charcoal: #2d2d2d;
  --font-heading: "Playfair Display", Georgia, "Times New Roman", serif;
  --font-body: "Inter", system-ui, -apple-system, sans-serif;
}

/* Rest of your existing styles... */
body {
  background: var(--color-cream);
  color: var(--color-charcoal);
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}

/* ... existing sticky-cta styles ... */
```

### Step 5: Remove Google Fonts from layout.tsx

**File:** `src/app/[locale]/layout.tsx`

Remove these lines (48-58):

```tsx
{/* DELETE THIS BLOCK */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossOrigin="anonymous"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap"
  rel="stylesheet"
/>
```

### Step 6: Test

```bash
npm run dev
# Open http://localhost:3000
```

Check:
- [ ] Headings use Playfair Display (bold, elegant serif)
- [ ] Body text uses Inter (clean, modern sans-serif)
- [ ] All font weights display correctly
- [ ] No console errors about missing fonts

---

## Option 2: next/font/google (Alternative)

Next.js 15 has built-in font optimization that automatically downloads and self-hosts Google Fonts.

### Benefits:
- Automatic optimization
- CSS size-adjustment to prevent layout shift
- Zero external requests (fonts are self-hosted automatically)

### Setup:

**File:** `src/app/[locale]/layout.tsx`

Replace the current `<link>` tags with this:

```tsx
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export default async function LocaleLayout({ children, params }: Props) {
  // ... existing code ...

  return (
    <html lang={locale} className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Remove Google Fonts links — next/font handles it */}
      </head>
      <body className="min-h-screen bg-cream font-body text-charcoal antialiased">
        {/* ... rest of layout ... */}
      </body>
    </html>
  );
}
```

**Update globals.css:**

```css
@theme inline {
  --color-navy: #1a1a2e;
  --color-gold: #d4a853;
  --color-burgundy: #6b2737;
  --color-cream: #faf8f5;
  --color-charcoal: #2d2d2d;
  --font-heading: var(--font-playfair), Georgia, "Times New Roman", serif;
  --font-body: var(--font-inter), system-ui, -apple-system, sans-serif;
}
```

---

## Which Option Should You Choose?

| Criteria | Self-Hosted Fonts | next/font/google |
|----------|-------------------|------------------|
| **Performance** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent |
| **Setup Complexity** | ⭐⭐⭐ Medium (manual) | ⭐⭐⭐⭐⭐ Easy (automatic) |
| **Control** | ⭐⭐⭐⭐⭐ Full control | ⭐⭐⭐⭐ Good control |
| **Maintenance** | ⭐⭐⭐ Manual updates | ⭐⭐⭐⭐⭐ Automatic |
| **Best For** | Full control, custom fonts | Standard Google Fonts |

**Recommendation:** Use **next/font/google** — it's the easiest and gives you all the benefits of self-hosting automatically.

---

## Testing Checklist

After implementing either option:

### Visual Checks:
- [ ] Homepage hero title uses Playfair Display (bold serif)
- [ ] All `<h1>` through `<h6>` headings use Playfair Display
- [ ] Body paragraphs use Inter
- [ ] Navigation menu uses Inter
- [ ] Buttons use Inter (bold)
- [ ] Font weights render correctly (regular, medium, semibold, bold)

### Performance Checks:
- [ ] No external font requests in Network tab (DevTools)
- [ ] Fonts load on first paint (no FOUT - Flash of Unstyled Text)
- [ ] Page Speed Insights score improves (target: 95+)
- [ ] No console warnings about missing fonts

### Browser Testing:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Before/After Examples

### Before (Google Fonts CDN):
```html
<!-- Network request to fonts.googleapis.com -->
<link href="https://fonts.googleapis.com/css2?family=Inter..." rel="stylesheet" />

<!-- External DNS lookup + download = slower FCP -->
```

### After (Self-Hosted):
```css
/* Fonts served from your own domain */
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter/inter-regular.woff2") format("woff2");
  /* Instant load, no external requests */
}
```

### Performance Impact:
- **Before:** ~150-200ms for Google Fonts DNS + download
- **After:** 0ms external latency (served from same domain)
- **Result:** Improved Lighthouse score, better Core Web Vitals

---

## Font Subsetting (Advanced)

If you want to optimize further, you can subset fonts to include only the characters you need:

### Example: Latin-only subset (smaller file size)

```bash
# Using fonttools
pyftsubset Inter-Regular.ttf \
  --output-file=inter-regular-subset.woff2 \
  --flavor=woff2 \
  --layout-features='*' \
  --unicodes=U+0020-007E,U+00A0-00FF

# Reduces file size by ~40-60%
```

**When to subset:**
- You only use English (no special characters)
- You want maximum performance
- You're comfortable with command-line tools

**When NOT to subset:**
- You need multilingual support (Italian, German, French, Spanish)
- You use special characters (€, ñ, ü, etc.)

**For VisitUffizi:** Don't subset — you need full Latin Extended character set for 5 languages.

---

## Troubleshooting

### Issue: Fonts don't load
**Solution:** Check file paths. Font files must be in `public/fonts/`, and paths in CSS should start with `/fonts/` (not `/public/fonts/`).

### Issue: Font looks different than Google Fonts version
**Solution:** Make sure you downloaded the correct weights (400, 500, 600, 700 for Inter; 700, 800 for Playfair).

### Issue: FOUT (Flash of Unstyled Text)
**Solution:** Use `font-display: swap` in @font-face declarations (already included above).

### Issue: Build fails after adding fonts
**Solution:** Make sure font files are in `public/` folder, not `src/`. Next.js only serves files from `public/` as static assets.

---

## Next Steps

1. **Choose your option:** next/font/google (recommended) or self-hosted
2. **Implement the changes** using the code above
3. **Test locally** with `npm run dev`
4. **Check performance** with Lighthouse
5. **Deploy** and verify on production
6. **Monitor Core Web Vitals** in Google Search Console

---

## Resources

- [Next.js Font Optimization Guide](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Google Fonts](https://fonts.google.com/)
- [Web Font Loading Best Practices](https://web.dev/font-best-practices/)
- [Tailwind CSS 4 Theme Documentation](https://tailwindcss.com/docs/v4-beta)

---

**Questions?** Check the design system audit in `DESIGN_SYSTEM_AUDIT.md` for more details on typography usage across components.
