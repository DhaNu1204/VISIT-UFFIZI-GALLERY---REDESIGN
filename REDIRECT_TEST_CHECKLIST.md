# Redirect Test Checklist

## ✅ Updated .htaccess File
All redirects from the PRD have been added to `.htaccess` and copied to the `out` folder.

## 📋 Test These Redirects After Deployment

### English Artist Pages
Test that these OLD URLs redirect to the NEW URLs:

| Old URL | → | New URL | Status |
|---------|---|---------|--------|
| https://visituffizi.com/giotto/ | → | https://visituffizi.com/en/artists/giotto/ | ⬜ |
| https://visituffizi.com/michelangelo/ | → | https://visituffizi.com/en/artists/michelangelo/ | ⬜ |
| https://visituffizi.com/sandro-botticelli/ | → | https://visituffizi.com/en/artists/sandro-botticelli/ | ⬜ |
| https://visituffizi.com/leonardo-da-vinci/ | → | https://visituffizi.com/en/artists/leonardo-da-vinci/ | ⬜ |
| https://visituffizi.com/giorgio-vasari/ | → | https://visituffizi.com/en/artists/giorgio-vasari/ | ⬜ |
| https://visituffizi.com/raffaello-sanzio/ | → | https://visituffizi.com/en/artists/raphael/ | ⬜ |
| https://visituffizi.com/tiziano/ | → | https://visituffizi.com/en/artists/titian/ | ⬜ |
| https://visituffizi.com/rembrandt/ | → | https://visituffizi.com/en/artists/rembrandt/ | ⬜ |
| https://visituffizi.com/dante-alighieri/ | → | https://visituffizi.com/en/artists/dante-alighieri/ | ⬜ |
| https://visituffizi.com/piero-della-francesca/ | → | https://visituffizi.com/en/artists/piero-della-francesca/ | ⬜ |
| https://visituffizi.com/filippo-brunelleschi-biography-artwork/ | → | https://visituffizi.com/en/artists/filippo-brunelleschi/ | ⬜ |
| https://visituffizi.com/famous-renaissance-artists/ | → | https://visituffizi.com/en/artists/ | ⬜ |

### Italian Artist Pages
| Old URL | → | New URL | Status |
|---------|---|---------|--------|
| https://visituffizi.com/it/giotto/ | → | https://visituffizi.com/it/artists/giotto/ | ⬜ |
| https://visituffizi.com/it/michelangelo/ | → | https://visituffizi.com/it/artists/michelangelo/ | ⬜ |
| https://visituffizi.com/it/sandro-botticelli/ | → | https://visituffizi.com/it/artists/sandro-botticelli/ | ⬜ |
| https://visituffizi.com/it/leonardo-da-vinci/ | → | https://visituffizi.com/it/artists/leonardo-da-vinci/ | ⬜ |
| https://visituffizi.com/it/giorgio-vasari/ | → | https://visituffizi.com/it/artists/giorgio-vasari/ | ⬜ |
| https://visituffizi.com/it/raffaello-sanzio/ | → | https://visituffizi.com/it/artists/raphael/ | ⬜ |
| https://visituffizi.com/it/tiziano/ | → | https://visituffizi.com/it/artists/titian/ | ⬜ |
| https://visituffizi.com/it/rembrandt/ | → | https://visituffizi.com/it/artists/rembrandt/ | ⬜ |
| https://visituffizi.com/it/dante-alighieri/ | → | https://visituffizi.com/it/artists/dante-alighieri/ | ⬜ |
| https://visituffizi.com/it/piero-della-francesca/ | → | https://visituffizi.com/it/artists/piero-della-francesca/ | ⬜ |
| https://visituffizi.com/it/filippo-brunelleschi-biography-artwork/ | → | https://visituffizi.com/it/artists/filippo-brunelleschi/ | ⬜ |
| https://visituffizi.com/it/famous-renaissance-artists/ | → | https://visituffizi.com/it/artists/ | ⬜ |

### General Pages
| Old URL | → | New URL | Status |
|---------|---|---------|--------|
| https://visituffizi.com/history-of-uffizi-gallery/ | → | https://visituffizi.com/en/history/ | ⬜ |
| https://visituffizi.com/plan-your-visit-to-uffizi-gallery/ | → | https://visituffizi.com/en/visitor-info/ | ⬜ |
| https://visituffizi.com/getting-to-the-uffizi-gallery/ | → | https://visituffizi.com/en/directions/ | ⬜ |
| https://visituffizi.com/uffizi-artworks/ | → | https://visituffizi.com/en/artworks/ | ⬜ |
| https://visituffizi.com/it/history-of-uffizi-gallery/ | → | https://visituffizi.com/it/history/ | ⬜ |
| https://visituffizi.com/it/plan-your-visit-to-uffizi-gallery/ | → | https://visituffizi.com/it/visitor-info/ | ⬜ |
| https://visituffizi.com/it/getting-to-the-uffizi-gallery/ | → | https://visituffizi.com/it/directions/ | ⬜ |
| https://visituffizi.com/it/uffizi-artworks/ | → | https://visituffizi.com/it/artworks/ | ⬜ |

## 🧪 How to Test

### Method 1: Manual Browser Test
1. Visit each OLD URL in your browser
2. Check that you are redirected to the NEW URL
3. Check that the URL bar shows the NEW URL
4. Check that the response is **301 Moved Permanently** (use browser DevTools Network tab)

### Method 2: Curl Test (Quick)
```bash
# Test single redirect
curl -I https://visituffizi.com/giotto/

# Should see:
# HTTP/1.1 301 Moved Permanently
# Location: https://visituffizi.com/en/artists/giotto/
```

### Method 3: Redirect Mapper Tool
Use https://www.redirect-checker.org/ or https://httpstatus.io/ to test each URL

## ⚠️ Important Notes

1. **Upload `.htaccess`**: Make sure to upload the updated `.htaccess` file from `out/.htaccess` to `/public_html/.htaccess` on Hostinger
2. **Test with trailing slash**: Some old WordPress URLs may have trailing slashes, some may not. The `.htaccess` handles both.
3. **Check 301 status**: Redirects MUST be 301 (permanent) not 302 (temporary) for SEO
4. **Italian priority**: Italian URLs have high rankings - test these carefully!

## 📊 SEO Impact - Why These Redirects Matter

From the PRD, these URLs have significant SEO value:

| Old URL | Impressions | CTR | Position |
|---------|-------------|-----|----------|
| /filippo-brunelleschi-biography-artwork/ | 38K | - | - |
| /it/uffizi-gallery-opening-hours/ | 148K | - | - |

**All redirects must work correctly to preserve this SEO equity!**
