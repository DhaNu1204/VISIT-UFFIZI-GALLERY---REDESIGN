import Image from "next/image";

type Props = {
  title: string;
  artist?: string;
  image?: string;
  room?: string;
  year?: string;
  href?: string;
};

export default function ArtworkCard({
  title,
  artist,
  image,
  room,
  year,
  href,
}: Props) {
  const content = (
    <div className="group overflow-hidden rounded-xl border border-gold/20 bg-white shadow-sm transition-shadow hover:shadow-lg">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-navy/5">
        {image ? (
          <Image
            src={image}
            alt={`${title}${artist ? ` by ${artist}` : ""}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-charcoal/30">
            Artwork Image
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
          {year && <p className="text-xs text-white/70">{year}</p>}
          {room && <p className="text-xs text-gold">{room}</p>}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-base font-bold text-navy">{title}</h3>
        {artist && (
          <p className="mt-1 text-sm text-charcoal/60">{artist}</p>
        )}
        {room && (
          <p className="mt-1 text-xs text-gold">{room}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
