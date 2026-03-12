import Link from "next/link";
import { SITE_URL } from "@/lib/seo";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
  locale: string;
};

export default function Breadcrumbs({ items, locale }: Props) {
  const allItems = [{ label: "Home", href: `/${locale}` }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `${SITE_URL}${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1200px] px-4 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-charcoal/60">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <span className="text-charcoal/30">/</span>
              )}
              {item.href && index < allItems.length - 1 ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-burgundy"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-charcoal/80">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
