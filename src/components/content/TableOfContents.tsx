type TOCItem = {
  label: string;
  id: string;
};

type Props = {
  items: TOCItem[];
};

export default function TableOfContents({ items }: Props) {
  return (
    <nav className="my-8 rounded-xl border border-gold/20 bg-white p-6">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy">
        Table of Contents
      </h2>
      <ol className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-start gap-2 text-sm text-charcoal/70 transition-colors hover:text-burgundy"
            >
              <span className="mt-0.5 shrink-0 text-xs text-gold">
                {index + 1}.
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
