import { SITE_URL } from "@/lib/seo";

type FAQItem = { q: string; a: string };

type JsonLdProps = {
  type:
    | "Museum"
    | "FAQPage"
    | "Product"
    | "Person"
    | "Article"
    | "TouristAttraction"
    | "Event";
  data?: Record<string, unknown>;
  faq?: FAQItem[];
  locale?: string;
  path?: string;
};

function buildMuseumSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Museum",
    name: "Uffizi Gallery",
    alternateName: "Galleria degli Uffizi",
    url: "https://www.uffizi.it",
    image: `${SITE_URL}/images/uffizi/uffizi-gallery-exterior.jpg`,
    description:
      "The Uffizi Gallery is a prominent art museum located in Florence, Italy, housing a collection of priceless works from the Italian Renaissance.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Piazzale degli Uffizi, 6",
      addressLocality: "Florence",
      addressRegion: "Tuscany",
      postalCode: "50122",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.7677,
      longitude: 11.2553,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:15",
        closes: "18:30",
      },
    ],
    telephone: "+39 055 294883",
    priceRange: "€12-€25",
    isAccessibleForFree: false,
  };
}

function buildFAQSchema(faq: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function buildProductSchema(data: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name || "Uffizi Gallery Ticket",
    description: data.description || "",
    image: data.image || `${SITE_URL}/images/uffizi/uffizi-gallery-exterior.jpg`,
    offers: {
      "@type": "Offer",
      price: data.price || "20",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: data.url || "",
      validFrom: data.validFrom || "2026-01-01",
    },
  };
}

function buildPersonSchema(data: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name || "",
    birthDate: data.born || "",
    deathDate: data.died || "",
    birthPlace: data.birthPlace || "",
    description: data.description || "",
    image: data.image || "",
    sameAs: data.sameAs || [],
  };
}

function buildArticleSchema(
  data: Record<string, unknown>,
  locale?: string,
  path?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title || "",
    description: data.description || "",
    image: data.image || `${SITE_URL}/images/og/default.jpg`,
    author: {
      "@type": "Organization",
      name: "Visit Uffizi",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Visit Uffizi",
      url: SITE_URL,
    },
    datePublished: data.datePublished || "",
    dateModified: data.dateModified || data.datePublished || "",
    mainEntityOfPage: `${SITE_URL}/${locale || "en"}${path ? `/${path}` : ""}`,
    inLanguage: locale || "en",
  };
}

export default function JsonLd({
  type,
  data = {},
  faq,
  locale,
  path,
}: JsonLdProps) {
  let schema: object;

  switch (type) {
    case "Museum":
      schema = buildMuseumSchema();
      break;
    case "FAQPage":
      schema = buildFAQSchema(faq || []);
      break;
    case "Product":
      schema = buildProductSchema(data);
      break;
    case "Person":
      schema = buildPersonSchema(data);
      break;
    case "Article":
      schema = buildArticleSchema(data, locale, path);
      break;
    default:
      schema = { "@context": "https://schema.org", "@type": type, ...data };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
