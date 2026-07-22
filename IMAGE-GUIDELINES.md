# Blog Image Guidelines — visituffizi.com

## Image Types Per Blog Post

Each blog post should include a mix of these image types:

| Type | Purpose | Recommended Count |
|------|---------|-------------------|
| **Hero image** | Featured image at top of post, used for OG/social sharing | 1 per post |
| **Section images** | Illustrate key sections (artwork photos, locations, maps) | 2-4 per post |
| **Infographics** | Data visualization, comparison charts, timelines | 1-2 per post |
| **Practical photos** | Ticket machines, entrances, queue photos, wayfinding | 1-3 per post |

**Target: 5-8 images per blog post** for a good text-to-image ratio.

---

## File Specifications

| Property | Requirement |
|----------|------------|
| **Format** | WebP preferred, JPG acceptable. PNG only for infographics with text. |
| **Hero image** | 1200 x 630px (doubles as OG image for social sharing) |
| **Section images** | 720 x 480px (matches content max-width) |
| **Infographics** | 720px wide, height varies (keep under 1200px) |
| **File size** | Under 150KB for photos (WebP), under 100KB for infographics |
| **Color space** | sRGB |

---

## Naming Convention

```
/public/images/blog/{post-slug}/{type}-{descriptor}.webp
```

**Examples:**
```
/public/images/blog/uffizi-gallery-tickets/hero-uffizi-entrance.webp
/public/images/blog/uffizi-gallery-tickets/section-ticket-machines.webp
/public/images/blog/uffizi-gallery-tickets/infographic-ticket-prices.webp
/public/images/blog/uffizi-gallery-tickets/photo-door1-entrance.webp
```

---

## Alt Text Rules

Alt text is critical for SEO and accessibility. Follow these rules:

1. **Describe what's in the image**, not what you want the viewer to do
2. **Include the primary keyword** naturally when relevant
3. **Keep under 125 characters**
4. **Don't start with "Image of" or "Photo of"**

**Good examples:**
- `"Visitors entering the Uffizi Gallery through Door 1 on a quiet Tuesday morning"`
- `"Ticket purchasing machines inside the Uffizi Gallery ticket office"`
- `"Botticelli's Birth of Venus painting in Room 10 of the Uffizi Gallery"`
- `"Infographic comparing Uffizi Gallery ticket prices: online vs ticket office"`

**Bad examples:**
- `"image1.jpg"` (meaningless)
- `"Uffizi Gallery"` (too vague)
- `"Photo of the beautiful entrance to the famous Uffizi Gallery museum in Florence Italy"` (too long, stuffed)

---

## Image Ideas Per Blog Post Category

### Practical Guides (tickets, hours, skip the line, floor plan)
- Door 1 entrance with/without queue
- Ticket purchasing machines inside ticket office
- Ticket office interior
- Sample tickets (online vs machine)
- Floor plan / map diagrams
- Security checkpoint area
- Queue length at different times of day
- Signage at entrance

### Artwork Guides (famous paintings, Caravaggio, Raphael, Leonardo, Primavera)
- High-quality reproduction of the painting discussed
- Room/gallery photo showing painting in context
- Detail close-ups of key elements
- Comparison images (before/after restoration, sketches vs final)
- Diagram pointing out symbolism or hidden details

### Florence Guides (itineraries, walking tours, restaurants, kids)
- Map/route infographic
- Key landmark photos along the route
- Restaurant exteriors / dishes
- Family-friendly activity photos
- Neighborhood atmosphere shots

### History/Culture (Medici, Vasari Corridor)
- Historical portraits or paintings
- Architectural details
- Before/after comparison images
- Timeline infographics
- Map showing relevant locations

---

## Infographic Design Guidelines

Match the site's design system:

| Element | Value |
|---------|-------|
| **Background** | White `#ffffff` or Cream `#faf8f5` |
| **Primary text** | Navy `#1a1a2e` |
| **Accent color** | Gold `#d4a853` |
| **Highlight** | Burgundy `#6b2737` |
| **Body font** | Inter (or any clean sans-serif) |
| **Heading font** | Playfair Display (or any elegant serif) |

**Infographic types to create:**
- Comparison tables (e.g., "Uffizi vs Accademia at a glance")
- Price breakdowns (e.g., ticket prices by type)
- Timeline charts (e.g., best months to visit)
- Floor plan highlights (e.g., must-see rooms route)
- Checklist graphics (e.g., "What to bring to the Uffizi")

---

## How to Add Images to Blog Posts

In the blog data files (`src/data/blog.ts`), images are added to the `BlogPost` object:

```typescript
{
  slug: "uffizi-gallery-tickets",
  // ... other fields
  heroImage: {
    src: "/images/blog/uffizi-gallery-tickets/hero-uffizi-entrance.webp",
    alt: "Visitors entering the Uffizi Gallery through Door 1",
    caption: "Door 1 — the entrance for all individual visitors",
    width: 1200,
    height: 630,
  },
  sections: [
    {
      heading: "Section Title",
      content: "Section text...",
      image: {
        src: "/images/blog/uffizi-gallery-tickets/section-ticket-machines.webp",
        alt: "Self-service ticket machines inside the Uffizi ticket office",
        caption: "You can buy tickets using these machines inside the ticket office",
      },
    },
    {
      heading: "Another Section",
      content: "More text...",
      images: [
        // Use 'images' (plural) for multiple images in one section
        { src: "/images/blog/...", alt: "..." },
        { src: "/images/blog/...", alt: "..." },
      ],
    },
  ],
}
```

---

## Photo Sourcing Checklist

- [ ] Your own photos (best for authenticity and uniqueness)
- [ ] Wikimedia Commons (check license — most artwork is public domain)
- [ ] Unsplash / Pexels (free stock, but less authentic)
- [ ] Create infographics using Canva, Figma, or similar tools
- [ ] Screenshot ticket machines / booking interfaces (with permission)

**Never use:** copyrighted photos without license, watermarked images, AI-generated art pretending to be real photos.
