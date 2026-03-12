"use client";

import Image from "next/image";
import { trackAffiliateClick } from "@/lib/analytics";

type Props = {
  title: string;
  description: string;
  price: string;
  duration: string;
  image?: string;
  link: string;
  bestSeller?: boolean;
  position?: string;
};

export default function TourCard({
  title,
  description,
  price,
  duration,
  image,
  link,
  bestSeller,
  position = "tour-card",
}: Props) {
  const handleClick = () => {
    trackAffiliateClick({
      linkType: "tour",
      destination: link,
      productName: title,
      position,
    });
  };

  return (
    <div className="group overflow-hidden rounded-xl border border-gold/20 bg-white shadow-sm transition-shadow hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-navy/10">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-charcoal/30">
            Tour Image
          </div>
        )}
        {bestSeller && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
            Best Seller
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-charcoal/70">
          {description}
        </p>
        <div className="mb-4 flex items-center gap-4 text-xs text-charcoal/50">
          <span>Duration: {duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-charcoal/50">From </span>
            <span className="text-xl font-bold text-navy">&euro;{price}</span>
          </div>
          <a
            href={link}
            target="_blank"
            rel="nofollow sponsored noopener"
            onClick={handleClick}
            className="rounded-lg bg-burgundy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-burgundy/90"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
