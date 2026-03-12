import Link from "next/link";

type RelatedPage = {
  title: string;
  href: string;
  description?: string;
};

type Props = {
  pages: RelatedPage[];
  title?: string;
};

export default function RelatedPages({
  pages,
  title = "You Might Also Like",
}: Props) {
  return (
    <div className="my-8">
      <h2 className="mb-4 text-xl font-bold text-navy">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group rounded-lg border border-gold/15 bg-white p-4 transition-all hover:border-gold/30 hover:shadow-md"
          >
            <h3 className="font-semibold text-navy group-hover:text-burgundy">
              {page.title}
            </h3>
            {page.description && (
              <p className="mt-1 text-sm text-charcoal/60">
                {page.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
