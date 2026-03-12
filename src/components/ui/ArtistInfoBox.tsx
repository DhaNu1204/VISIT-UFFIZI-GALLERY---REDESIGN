type Props = {
  name: string;
  born?: string;
  died?: string;
  movement?: string;
  ufficiRoom?: string;
  masterpieces?: string[];
  image?: string;
};

export default function ArtistInfoBox({
  name,
  born,
  died,
  movement,
  ufficiRoom,
  masterpieces,
  image,
}: Props) {
  return (
    <aside className="my-8 overflow-hidden rounded-xl border border-gold/20 bg-white shadow-sm">
      {/* Header */}
      <div className="bg-navy px-6 py-4">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        {movement && (
          <p className="text-sm text-gold">{movement}</p>
        )}
      </div>

      <div className="p-6">
        <dl className="space-y-3 text-sm">
          {born && (
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-navy">Born</dt>
              <dd className="text-charcoal/70">{born}</dd>
            </div>
          )}
          {died && (
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-navy">Died</dt>
              <dd className="text-charcoal/70">{died}</dd>
            </div>
          )}
          {ufficiRoom && (
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-navy">
                Uffizi Room
              </dt>
              <dd className="font-medium text-burgundy">{ufficiRoom}</dd>
            </div>
          )}
        </dl>

        {masterpieces && masterpieces.length > 0 && (
          <div className="mt-4 border-t border-gold/10 pt-4">
            <h4 className="mb-2 text-sm font-semibold text-navy">
              Key Works at the Uffizi
            </h4>
            <ul className="space-y-1">
              {masterpieces.map((work) => (
                <li
                  key={work}
                  className="flex items-start gap-2 text-sm text-charcoal/70"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {work}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}
