// Legacy WordPress URL redirects
// These will be configured in next.config.ts for server-side redirects
// For static export, we handle redirects via meta refresh or Vercel config

export const redirects = [
  { source: "/giotto/", destination: "/en/artists/giotto/" },
  { source: "/michelangelo/", destination: "/en/artists/michelangelo/" },
  {
    source: "/sandro-botticelli/",
    destination: "/en/artists/sandro-botticelli/",
  },
  {
    source: "/leonardo-da-vinci/",
    destination: "/en/artists/leonardo-da-vinci/",
  },
  { source: "/giorgio-vasari/", destination: "/en/artists/giorgio-vasari/" },
  { source: "/raffaello-sanzio/", destination: "/en/artists/raphael/" },
  { source: "/tiziano/", destination: "/en/artists/titian/" },
  { source: "/rembrandt/", destination: "/en/artists/rembrandt/" },
  {
    source: "/dante-alighieri/",
    destination: "/en/artists/dante-alighieri/",
  },
  {
    source: "/piero-della-francesca/",
    destination: "/en/artists/piero-della-francesca/",
  },
  { source: "/famous-renaissance-artists/", destination: "/en/artists/" },
  { source: "/history-of-uffizi-gallery/", destination: "/en/history/" },
  {
    source: "/plan-your-visit-to-uffizi-gallery/",
    destination: "/en/visitor-info/",
  },
  {
    source: "/getting-to-the-uffizi-gallery/",
    destination: "/en/directions/",
  },
  { source: "/uffizi-artworks/", destination: "/en/artworks/" },
] as const;
