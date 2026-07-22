# Google Analytics & Search Console Integration Guide

## 🎯 Quick Overview
Your website code is already set up for both services. You just need to add your IDs and rebuild!

---

## 📊 Step 1: Get Google Analytics 4 Measurement ID

### If You Already Have GA4 Property:
1. Go to https://analytics.google.com/
2. Click **Admin** (gear icon, bottom left)
3. Under **Property** column → Click **Data Streams**
4. Click on your web stream (or create one if needed)
5. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### If You Need to Create a New GA4 Property:
1. Go to https://analytics.google.com/
2. Click **Admin** → **Create Property**
3. Property name: `Visit Uffizi`
4. Timezone: `Italy`
5. Currency: `Euro`
6. Click **Next** → **Create a web stream**
7. Website URL: `https://visituffizi.com`
8. Stream name: `Visit Uffizi Website`
9. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

---

## 🔍 Step 2: Get Google Search Console Verification Code

### If Your Property Already Verified:
1. Go to https://search.google.com/search-console
2. Select your property `visituffizi.com`
3. Go to **Settings** (left sidebar)
4. Click **Ownership verification**
5. Find the **HTML tag** method
6. Copy the `content` value from the meta tag
   
   Example:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ456..." />
   ```
   You need: `ABC123XYZ456...`

### If You Need to Add New Property:
1. Go to https://search.google.com/search-console
2. Click **Add Property**
3. Choose **URL prefix**
4. Enter: `https://visituffizi.com`
5. Select **HTML tag** verification method
6. Copy the `content` value (the long alphanumeric code)
7. **DON'T CLICK VERIFY YET** - wait until after you deploy!

---

## 💾 Step 3: Create .env File Locally

In your project folder `d:\VISIT UFFIZI GALLERY - REDESIGN\visituffizi\`:

1. Create a new file named **`.env`** (yes, with the dot at the start!)
2. Add your values:

```env
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console Verification
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code-here
```

**Example with real values:**
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC1234567
NEXT_PUBLIC_GSC_VERIFICATION=aBc123XyZ789dEf456GhI789jKl012MnO345
```

---

## 🔨 Step 4: Rebuild Your Site

```powershell
# In your visituffizi folder
npm run build
```

This will:
- ✅ Read your `.env` file
- ✅ Inject GA4 tracking code into all 204 pages
- ✅ Add GSC verification meta tag to every page
- ✅ Generate new `out` folder with everything

---

## 📤 Step 5: Upload to Hostinger

Upload **everything** from `out` folder to `/public_html/`:
- All HTML files
- All folders (`en`, `it`, `de`, `fr`, `es`)
- `.htaccess` file
- Assets and images

---

## ✅ Step 6: Verify Google Search Console

1. Go back to https://search.google.com/search-console
2. Click **VERIFY** button
3. Should see: ✅ "Ownership verified"

If verification fails:
- Check that `.htaccess` was uploaded
- Visit `https://visituffizi.com/en/` and view page source
- Search for `google-site-verification` meta tag - it should be there!

---

## 📊 Step 7: Test Google Analytics

1. Visit https://visituffizi.com/en/
2. Open GA4 dashboard → **Reports** → **Realtime**
3. You should see yourself as an active user!
4. Check that page views are being tracked

---

## 🎯 What's Already Built-In:

Your website automatically tracks:
- ✅ Page views (all 204 pages)
- ✅ Scroll depth
- ✅ Outbound clicks (affiliate links)
- ✅ Button clicks (booking CTAs)
- ✅ Language switching

All tracking respects user cookie consent from the GDPR banner!

---

## 🚨 Important Notes:

1. **`.env` file stays local** - Never upload it to Hostinger!
2. **Already working**: AdSense (ca-pub-5190790382711375) and GetYourGuide (Z35Q282)
3. **Cookie consent**: Users must accept "Analytics" cookies for GA4 to track them
4. **Test in incognito**: Regular browsers may have ad blockers that block GA4

---

## 🐛 Troubleshooting:

### GA4 Not Tracking:
- Check browser console for errors
- Disable ad blockers
- Wait 24-48 hours for data to appear in reports
- Test in Realtime view first

### GSC Not Verifying:
- View page source - search for `google-site-verification`
- Clear browser cache and try again
- Use "URL Inspection" tool to check if Google can access your site
- Check that `.htaccess` allows crawlers

---

## 📱 Need Your IDs?

I need these from you:
1. **GA4 Measurement ID**: `G-__________`
2. **GSC Verification Code**: `___________`

Once you provide them, I'll create your `.env` file!
