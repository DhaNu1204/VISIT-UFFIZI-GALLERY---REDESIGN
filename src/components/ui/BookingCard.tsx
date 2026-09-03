"use client";

import { useTranslations } from "next-intl";
import { trackAffiliateClick } from "@/lib/analytics";

type Props = {
  type: "tickets" | "tour";
  title: string;
  price?: string;
  link: string;
  urgent?: boolean;
  duration?: string;
  includes?: string;
  position?: string;
};

export default function BookingCard({
  type,
  title,
  price,
  link,
  urgent,
  duration,
  includes,
  position = "booking-card",
}: Props) {
  const t = useTranslations("booking");

  const handleClick = () => {
    trackAffiliateClick({
      linkType: type === "tickets" ? "ticket" : "tour",
      destination: link,
      productName: title,
      position,
    });
  };

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gold/20 bg-white shadow-md">
      {urgent && (
        <div className="bg-burgundy px-4 py-2 text-center text-sm font-semibold text-white">
          Popular — sells out fast
        </div>
      )}
      <div className="p-6">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gold">
          {type === "tickets" ? "Timed-Entry Ticket" : "Guided Experience"}
        </div>
        <h3 className="mb-3 text-xl font-bold text-navy">{title}</h3>

        {(duration || includes) && (
          <div className="mb-4 space-y-1 text-sm text-charcoal/70">
            {duration && <p>Duration: {duration}</p>}
            {includes && <p>Includes: {includes}</p>}
          </div>
        )}

        <div className="flex items-end justify-between">
          {price && (
            <div>
              <span className="text-sm text-charcoal/50">From</span>
              <span className="ml-1 text-2xl font-bold text-navy">
                &euro;{price}
              </span>
              <span className="text-sm text-charcoal/50"> /person</span>
            </div>
          )}
          <a
            href={link}
            target="_blank"
            rel="nofollow sponsored noopener"
            onClick={handleClick}
            className="inline-block rounded-lg bg-burgundy px-6 py-3 text-sm font-bold text-white shadow transition-all hover:bg-burgundy/90 hover:shadow-lg"
          >
            Book Now
          </a>
        </div>

        {/* Dual-rate line: ticket cards only (both products start from these prices) */}
        {type === "tickets" && price && (
          <p className="mt-3 text-xs leading-snug text-charcoal/60">
            {t("dualRate")}
          </p>
        )}
      </div>
    </div>
  );
}
