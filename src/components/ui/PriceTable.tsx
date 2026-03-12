type PriceRow = {
  type: string;
  price: string;
  notes?: string;
};

type Props = {
  data: PriceRow[];
  title?: string;
};

export default function PriceTable({ data, title }: Props) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gold/20 bg-white shadow-sm">
      {title && (
        <div className="border-b border-gold/10 bg-navy px-6 py-3">
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gold/10 bg-cream">
              <th className="px-6 py-3 text-left text-sm font-semibold text-navy">
                Ticket Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-navy">
                Price
              </th>
              <th className="hidden px-6 py-3 text-left text-sm font-semibold text-navy sm:table-cell">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gold/5 ${
                  i % 2 === 0 ? "bg-white" : "bg-cream/50"
                }`}
              >
                <td className="px-6 py-3 text-sm text-charcoal">{row.type}</td>
                <td className="px-6 py-3 text-sm font-semibold text-navy">
                  {row.price}
                </td>
                <td className="hidden px-6 py-3 text-sm text-charcoal/60 sm:table-cell">
                  {row.notes || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
