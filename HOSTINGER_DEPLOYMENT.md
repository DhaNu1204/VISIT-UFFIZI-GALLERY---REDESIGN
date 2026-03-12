# 🚀 Hostinger Deployment Guide

## Your Setup
- **Hosting Plan:** Cloud Startup
- **GitHub Repo:** https://github.com/DhaNu1204/VISIT-UFFIZI-GALLERY---REDESIGN
- **Domain:** visituffizi.com
- **Site Type:** Static Next.js site (184 pages, 5 languages)

---

## 📋 DEPLOYMENT OPTIONS

### ⭐ OPTION 1: Git Version Control (RECOMMENDED - Automated)

This is the easiest method for ongoing updates. Hostinger will automatically pull from GitHub.

#### Step 1: Access hPanel Git Integration
1. Log in to **Hostinger hPanel**
2. Go to **Websites** → Select your domain
3. Click **Git Version Control** (left sidebar)

#### Step 2: Connect GitHub Repository
1. Click **Create new repository**
2. Fill in:
   - **Repository URL:** `https://github.com/DhaNu1204/VISIT-UFFIZI-GALLERY---REDESIGN.git`
   - **Branch:** `main`
   - **Target directory:** `/public_html` (or your domain's root)
   - **Build command:** `npm install && npm run build`
   - **Output directory:** `out`

3. Click **Create**

#### Step 3: Deploy
1. Click **Pull** to fetch code from GitHub
2. Wait for build to complete
3. Your site will be live at visituffizi.com!

#### Future Updates
Just push to GitHub and click **Pull** in hPanel. That's it! 🎉

---

### OPTION 2: File Manager Upload (Manual)

Use this if Git integration isn't working.

#### Step 1: Prepare Files
Your `out` folder already contains all built files (ready to upload).

#### Step 2: Upload to Hostinger
1. Log in to **Hostinger hPanel**
2. Go to **File Manager**
3. Navigate to `/public_html` (or your domain's root folder)
4. **Delete** existing WordPress files (IMPORTANT: Backup first!)
5. **Upload** all files from the `out` folder

#### Step 3: Configure .htaccess for Redirects
Upload the `.htaccess` file from the next section to handle 301 redirects.

---

### OPTION 3: FTP/SFTP (For Advanced Users)

#### FTP Credentials
Get these from: hPanel → Websites → FTP Accounts

1. Use FileZilla or your preferred FTP client
2. Upload contents of `out` folder to `/public_html`
3. Upload `.htaccess` file

---

## 🔧 REQUIRED: .htaccess Configuration

Create this file in your `/public_html` directory:

```apache
# Enable rewrite engine
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Force www (or remove www - choose one)
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# 301 Redirects for old WordPress URLs
# English URLs
RedirectMatch 301 ^/visit-uffizi-gallery/?$ /en
RedirectMatch 301 ^/uffizi-skip-the-line-tickets/?$ /en/tickets/skip-the-line
RedirectMatch 301 ^/uffizi-gallery-prices/?$ /en/tickets/prices
RedirectMatch 301 ^/uffizi-tours/?$ /en/tours
RedirectMatch 301 ^/uffizi-gallery-private-tour/?$ /en/tours/private-tour
RedirectMatch 301 ^/uffizi-gallery-guided-tour/?$ /en/tours/guided-tour
RedirectMatch 301 ^/uffizi-gallery-tickets/?$ /en/tickets
RedirectMatch 301 ^/vasari-corridor-tickets/?$ /en/vasari-corridor
RedirectMatch 301 ^/uffizi-gallery-opening-hours/?$ /en/uffizi-gallery-opening-hours
RedirectMatch 301 ^/how-to-get-to-the-uffizi-gallery/?$ /en/directions
RedirectMatch 301 ^/the-uffizi-gallery-door-3-importent-information/?$ /en/the-uffizi-gallery-door-3-importent-information
RedirectMatch 301 ^/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look/?$ /en/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look
RedirectMatch 301 ^/the-history-of-the-uffizi-gallery/?$ /en/history
RedirectMatch 301 ^/uffizi-gallery-artworks/?$ /en/artworks
RedirectMatch 301 ^/uffizi-gallery-artists/?$ /en/artists
RedirectMatch 301 ^/visitor-info/?$ /en/visitor-info

# Italian URLs
RedirectMatch 301 ^/it/visita-galleria-uffizi/?$ /it
RedirectMatch 301 ^/it/biglietti-salta-fila-uffizi/?$ /it/tickets/skip-the-line

# Serve static HTML files
DirectoryIndex index.html

# Handle 404 errors
ErrorDocument 404 /404.html

# Improve performance with caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 day"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

---

## 🔐 ENVIRONMENT VARIABLES

For Google Analytics and Search Console to work:

### Option A: Add to hPanel
1. Go to **Advanced** → **PHP Configuration**
2. Add environment variables:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` (your GA4 ID)
   - `NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code`

### Option B: Build with Variables (Easier)
On your local machine:
1. Create `.env.production` file with:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code
   ```
2. Run `npm run build`
3. Upload the `out` folder

---

## ✅ POST-DEPLOYMENT CHECKLIST

After deploying:

### 1. Test Your Site
- [ ] Visit `https://visituffizi.com`
- [ ] Check homepage loads
- [ ] Test language switcher (en, it, de, es, fr)
- [ ] Verify at least 5 different pages

### 2. Test Redirects
- [ ] Try old WordPress URLs (should redirect to new structure)
- [ ] Example: `visituffizi.com/uffizi-tickets` → `/en/tickets`

### 3. Verify Integrations
- [ ] Check **Google Analytics** (Real-time reports in GA4)
- [ ] Verify **AdSense ads** display correctly
- [ ] Test **affiliate links** work

### 4. SEO Setup
- [ ] Submit sitemap to **Google Search Console**
  - URL: `https://visituffizi.com/sitemap.xml`
- [ ] Verify **GSC ownership** (should auto-verify from meta tag)
- [ ] Request indexing for key pages

### 5. Performance Check
- [ ] Run **PageSpeed Insights**: https://pagespeed.web.dev/
- [ ] Test on mobile and desktop
- [ ] Check images load properly

---

## 🔄 UPDATING YOUR SITE

### If Using Git (Option 1):
1. Make changes locally
2. Commit and push to GitHub
3. Go to hPanel → Git Version Control
4. Click **Pull**
5. Done! ✅

### If Using Manual Upload (Option 2):
1. Run `npm run build` locally
2. Upload `out` folder contents to hPanel File Manager
3. Done! ✅

---

## 🆘 TROUBLESHOOTING

### Issue: "Site shows old WordPress content"
**Fix:** Make sure you uploaded to the correct directory (`/public_html`) and cleared cache.

### Issue: "Pages show 404 errors"
**Fix:** Verify `.htaccess` file is uploaded and `mod_rewrite` is enabled in PHP settings.

### Issue: "Redirects not working"
**Fix:** Check `.htaccess` syntax and ensure it's in the root directory.

### Issue: "Ads not displaying"
**Fix:** AdSense needs 24-48 hours to activate on new domains. Also check browser ad blockers.

### Issue: "Analytics not tracking"
**Fix:** Verify environment variables are set and site is built with them.

---

## 📞 SUPPORT

- **Hostinger Support:** 24/7 Live Chat in hPanel
- **GitHub Repo:** https://github.com/DhaNu1204/VISIT-UFFIZI-GALLERY---REDESIGN
- **Next.js Docs:** https://nextjs.org/docs

---

## 🎉 LAUNCH DAY!

Once everything is verified:

1. **Announce** on social media
2. **Monitor** Google Analytics for traffic
3. **Watch** AdSense for ad performance
4. **Check** Search Console for indexing status
5. **Celebrate** 🍾 - You've built an amazing multilingual site!

---

**Remember:** The site is production-ready with:
- ✅ 184 pages across 5 languages
- ✅ SEO optimization
- ✅ Google Analytics & Search Console
- ✅ AdSense integration
- ✅ 301 redirects for old URLs
- ✅ Responsive design
- ✅ Performance optimized

**You're ready to go live! 🚀**
