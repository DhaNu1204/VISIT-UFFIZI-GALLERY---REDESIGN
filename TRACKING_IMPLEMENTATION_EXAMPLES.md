# Tracking Implementation Examples

Practical examples of how to use the analytics tracking system in your components.

---

## Quick Reference

All tracking components have been updated with built-in analytics:

- ✅ `BookingCard` - Tracks affiliate link clicks
- ✅ `TourCard` - Tracks tour booking clicks
- ✅ `StickyMobileCTA` - Tracks sticky CTA clicks

---

## 1. BookingCard Component

### Basic Usage

```tsx
import BookingCard from "@/components/ui/BookingCard";

<BookingCard
  type="tickets"
  title="Uffizi Gallery Skip-the-Line Tickets"
  price="20"
  link="https://www.getyourguide.com/uffizi-tickets"
  urgent={true}
  duration="2-3 hours"
  includes="Skip-the-line entry, audio guide"
  position="hero-section"
/>
```

**What gets tracked:**
- Event: `affiliate_click`
- Parameters:
  - `link_type`: "ticket"
  - `destination`: "https://www.getyourguide.com/uffizi-tickets"
  - `product_name`: "Uffizi Gallery Skip-the-Line Tickets"
  - `click_position`: "hero-section"

### Position Examples

Use different `position` values to track where the card appears:

```tsx
// Hero section
<BookingCard position="hero-section" ... />

// Sidebar
<BookingCard position="sidebar" ... />

// Main content area
<BookingCard position="main-content" ... />

// Below article
<BookingCard position="article-bottom" ... />
```

This helps you identify which placement drives the most conversions.

---

## 2. TourCard Component

### Basic Usage

```tsx
import TourCard from "@/components/ui/TourCard";

<TourCard
  title="Uffizi Gallery Small Group Tour"
  description="Expert-led tour with skip-the-line access and priority viewing"
  price="59"
  duration="2.5 hours"
  image="/images/tours/uffizi-tour.jpg"
  link="https://www.getyourguide.com/uffizi-tour"
  bestSeller={true}
  position="tours-grid"
/>
```

**What gets tracked:**
- Event: `affiliate_click`
- Parameters:
  - `link_type`: "tour"
  - `destination`: "https://www.getyourguide.com/uffizi-tour"
  - `product_name`: "Uffizi Gallery Small Group Tour"
  - `click_position`: "tours-grid"

### Grid Layout Example

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <TourCard
    title="Uffizi Gallery Skip-the-Line Tour"
    description="..."
    price="45"
    duration="2 hours"
    link="https://www.getyourguide.com/..."
    position="tours-grid-1"
  />
  <TourCard
    title="Uffizi + Accademia Combo Tour"
    description="..."
    price="89"
    duration="5 hours"
    link="https://www.getyourguide.com/..."
    position="tours-grid-2"
  />
  <TourCard
    title="Private Uffizi Gallery Tour"
    description="..."
    price="199"
    duration="3 hours"
    link="https://www.getyourguide.com/..."
    position="tours-grid-3"
    bestSeller={true}
  />
</div>
```

---

## 3. StickyMobileCTA Component

### Basic Usage

```tsx
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

<StickyMobileCTA
  label="Skip the Line Tickets"
  price="20"
  link="https://www.getyourguide.com/uffizi-tickets"
  productName="Uffizi Gallery Tickets"
/>
```

**What gets tracked:**
- Event: `cta_click`
- Parameters:
  - `cta_name`: "Skip the Line Tickets"
  - `cta_location`: "sticky-mobile-cta"
  - `destination`: "https://www.getyourguide.com/uffizi-tickets"

**Behavior:**
- Only visible after scrolling 400px
- Fixed to bottom on mobile devices
- Tracks clicks automatically

---

## 4. Custom CTA Buttons

For standalone CTA buttons that aren't using the pre-built components:

### Example 1: Hero CTA

```tsx
"use client";

import { trackCTAClick } from "@/lib/analytics";

export default function HeroSection() {
  const handleBookingClick = () => {
    trackCTAClick({
      ctaName: "Book Uffizi Tickets Now",
      ctaLocation: "hero-banner",
      destination: "https://www.getyourguide.com/uffizi-tickets",
    });
  };

  return (
    <section className="hero-section">
      <h1>Visit the Uffizi Gallery</h1>
      <p>Skip the line with advance tickets</p>
      <a
        href="https://www.getyourguide.com/uffizi-tickets"
        target="_blank"
        rel="nofollow sponsored noopener"
        onClick={handleBookingClick}
        className="btn-primary"
      >
        Book Tickets Now
      </a>
    </section>
  );
}
```

### Example 2: In-Article CTA

```tsx
"use client";

import { trackCTAClick } from "@/lib/analytics";

export default function ArticleCTA() {
  return (
    <div className="bg-gold/10 p-6 rounded-lg my-8">
      <h3 className="text-xl font-bold mb-2">Ready to Visit?</h3>
      <p className="mb-4">Book your skip-the-line tickets now</p>
      <a
        href="https://www.getyourguide.com/uffizi-tickets"
        target="_blank"
        rel="nofollow sponsored noopener"
        onClick={() =>
          trackCTAClick({
            ctaName: "Book Now - Article CTA",
            ctaLocation: "article-inline",
            destination: "https://www.getyourguide.com/uffizi-tickets",
          })
        }
        className="btn-burgundy"
      >
        Book Now
      </a>
    </div>
  );
}
```

---

## 5. Text Link Tracking

For affiliate links within article text:

### Example: Inline Text Link

```tsx
"use client";

import { trackAffiliateClick } from "@/lib/analytics";

export default function ArticleContent() {
  return (
    <p>
      We recommend booking{" "}
      <a
        href="https://www.getyourguide.com/uffizi-tickets"
        target="_blank"
        rel="nofollow sponsored noopener"
        onClick={() =>
          trackAffiliateClick({
            linkType: "ticket",
            destination: "https://www.getyourguide.com/uffizi-tickets",
            productName: "Uffizi Tickets",
            position: "article-text",
          })
        }
        className="text-burgundy underline hover:no-underline"
      >
        skip-the-line tickets
      </a>{" "}
      in advance to avoid long queues.
    </p>
  );
}
```

---

## 6. Page Engagement Tracking

Track how long users spend reading important content pages:

### Example: Artist Page

```tsx
"use client";

import { useEffect, useState } from "react";
import { trackEngagement } from "@/lib/analytics";

export default function ArtistPage({ artist }) {
  const [startTime] = useState(Date.now());

  useEffect(() => {
    return () => {
      const engagementTime = Math.floor((Date.now() - startTime) / 1000);
      
      // Only track if user spent more than 5 seconds
      if (engagementTime > 5) {
        trackEngagement({
          contentType: "artist",
          contentName: artist.name,
          engagementTime,
        });
      }
    };
  }, [artist.name, startTime]);

  return (
    <article>
      <h1>{artist.name}</h1>
      {/* Artist content */}
    </article>
  );
}
```

### Example: Artwork Page

```tsx
"use client";

import { useEffect, useState } from "react";
import { trackEngagement } from "@/lib/analytics";

export default function ArtworkPage({ artwork }) {
  const [startTime] = useState(Date.now());

  useEffect(() => {
    return () => {
      const engagementTime = Math.floor((Date.now() - startTime) / 1000);
      
      if (engagementTime > 5) {
        trackEngagement({
          contentType: "artwork",
          contentName: artwork.title,
          engagementTime,
        });
      }
    };
  }, [artwork.title, startTime]);

  return (
    <article>
      <h1>{artwork.title}</h1>
      <p>By {artwork.artist}</p>
      {/* Artwork content */}
    </article>
  );
}
```

---

## 7. Complete Page Example

Here's a full page implementation combining multiple tracking elements:

```tsx
"use client";

import { useEffect, useState } from "react";
import BookingCard from "@/components/ui/BookingCard";
import TourCard from "@/components/ui/TourCard";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { trackEngagement, trackCTAClick } from "@/lib/analytics";

export default function UffiziTicketsPage() {
  const [startTime] = useState(Date.now());

  // Track page engagement
  useEffect(() => {
    return () => {
      const engagementTime = Math.floor((Date.now() - startTime) / 1000);
      if (engagementTime > 5) {
        trackEngagement({
          contentType: "page",
          contentName: "Uffizi Tickets",
          engagementTime,
        });
      }
    };
  }, [startTime]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Uffizi Gallery Tickets</h1>
        <p>Skip the line and book your tickets in advance</p>
        
        <button
          onClick={() => {
            trackCTAClick({
              ctaName: "Get Tickets - Hero",
              ctaLocation: "hero",
              destination: "https://www.getyourguide.com/uffizi-tickets",
            });
            window.open("https://www.getyourguide.com/uffizi-tickets", "_blank");
          }}
          className="btn-primary"
        >
          Get Tickets
        </button>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <article>
              <h2>Why Book Uffizi Tickets in Advance?</h2>
              <p>The Uffizi Gallery is one of the most popular museums...</p>
              
              {/* Inline Booking Card */}
              <BookingCard
                type="tickets"
                title="Uffizi Gallery Skip-the-Line Tickets"
                price="20"
                link="https://www.getyourguide.com/uffizi-tickets"
                urgent={true}
                position="article-inline"
              />
              
              <h2>Available Tours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TourCard
                  title="Uffizi Gallery Small Group Tour"
                  description="Expert guide, skip-the-line access"
                  price="59"
                  duration="2.5 hours"
                  link="https://www.getyourguide.com/uffizi-tour"
                  bestSeller={true}
                  position="tours-section-1"
                />
                <TourCard
                  title="Private Uffizi Gallery Tour"
                  description="Personalized experience"
                  price="199"
                  duration="3 hours"
                  link="https://www.getyourguide.com/uffizi-private-tour"
                  position="tours-section-2"
                />
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside>
            <BookingCard
              type="tickets"
              title="Most Popular: Skip-the-Line Tickets"
              price="20"
              link="https://www.getyourguide.com/uffizi-tickets"
              urgent={true}
              duration="Flexible"
              includes="Mobile ticket"
              position="sidebar"
            />
          </aside>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA
        label="Skip the Line Tickets"
        price="20"
        link="https://www.getyourguide.com/uffizi-tickets"
      />
    </>
  );
}
```

---

## 8. Best Practices

### Position Naming Convention

Use clear, descriptive position names:

- ✅ `hero-section`
- ✅ `sidebar-top`
- ✅ `article-inline`
- ✅ `tours-grid-1`
- ✅ `footer-cta`

❌ Avoid generic names:
- ❌ `position1`
- ❌ `link`
- ❌ `button`

### Component Organization

```
src/
├── components/
│   ├── ui/
│   │   ├── BookingCard.tsx (✅ tracking built-in)
│   │   ├── TourCard.tsx (✅ tracking built-in)
│   │   └── StickyMobileCTA.tsx (✅ tracking built-in)
│   └── custom/
│       └── CustomCTA.tsx (manually add tracking)
└── lib/
    └── analytics.ts (tracking utilities)
```

### When to Use Each Tracking Function

| Function | Use Case | Example |
|----------|----------|---------|
| `trackAffiliateClick()` | GetYourGuide affiliate links | Ticket/tour booking links |
| `trackCTAClick()` | Call-to-action buttons | "Book Now", "Get Tickets" |
| `trackEngagement()` | Time spent on content | Artist/artwork pages |
| `trackPageView()` | Manual page view tracking | Custom navigation (rare) |
| `trackEvent()` | Custom events | Newsletter signup, form submission |

---

## 9. Testing Checklist

Before deploying:

- [ ] Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`
- [ ] Test in development: `npm run dev`
- [ ] Open browser DevTools → Console
- [ ] Click affiliate links and CTAs
- [ ] Check for console errors
- [ ] Open DevTools → Network tab
- [ ] Filter by "collect" or "gtag"
- [ ] Verify tracking requests are sent
- [ ] Check GA4 DebugView (add `?debug_mode=true` to URL)
- [ ] Deploy to production
- [ ] Test in production environment
- [ ] Check GA4 Real-Time reports

---

## 10. Troubleshooting

### "trackAffiliateClick is not a function"

**Cause:** Import missing or incorrect

**Solution:**
```tsx
import { trackAffiliateClick } from "@/lib/analytics";
```

### Events not showing in GA4

**Cause:** Environment variable not set or ad blocker enabled

**Solution:**
1. Check `.env.local` has `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...`
2. Rebuild: `npm run build && npm run dev`
3. Disable ad blockers
4. Check browser console for errors

### "window.gtag is not defined"

**Cause:** GA4 script hasn't loaded yet or ID is missing

**Solution:**
- The analytics utility gracefully handles this (no error thrown)
- Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- Check Network tab to see if `gtag/js` loaded

### Component requires "use client" error

**Cause:** Using client-side tracking in Server Component

**Solution:**
```tsx
"use client"; // Add this at the top of the file

import { trackAffiliateClick } from "@/lib/analytics";
```

---

## Quick Command Reference

```bash
# Create .env.local
type nul > .env.local

# Add environment variables
# (edit .env.local and add your tracking IDs)

# Restart dev server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start
```

---

**Need help?** Check the [ANALYTICS_SETUP_GUIDE.md](./ANALYTICS_SETUP_GUIDE.md) for GA4 setup instructions.
