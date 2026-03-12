import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#faf8f5",
          color: "#2d2d2d",
          fontFamily: "'Inter', system-ui, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#d4a853",
              marginBottom: "1rem",
            }}
          >
            Page Not Found
          </p>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: "#1a1a2e",
              fontFamily: "'Playfair Display', Georgia, serif",
              marginBottom: "1rem",
            }}
          >
            404
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#2d2d2d",
              opacity: 0.7,
              maxWidth: "440px",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            This room doesn&apos;t exist in our gallery. Perhaps one of these
            corridors will lead you to what you&apos;re looking for.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/en"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                background: "#6b2737",
                color: "white",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.875rem",
              }}
            >
              Visit Homepage
            </Link>
            <Link
              href="/en/tickets"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                border: "2px solid #d4a853",
                color: "#1a1a2e",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.875rem",
              }}
            >
              Book Tickets
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
