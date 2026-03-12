"use client";

import { useEffect, useState } from "react";
import { trackCTAClick } from "@/lib/analytics";

type Props = {
  label: string;
  price?: string;
  link: string;
  productName?: string;
};

export default function StickyMobileCTA({ label, price, link, productName }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    trackCTAClick({
      ctaName: label,
      ctaLocation: "sticky-mobile-cta",
      destination: link,
    });
  };

  if (!visible) return null;

  return (
    <div className="sticky-cta">
      <a
        href={link}
        rel="nofollow sponsored"
        target="_blank"
        onClick={handleClick}
        className="flex items-center justify-between rounded-lg bg-burgundy px-5 py-3 text-white shadow-md transition-all active:scale-[0.98]"
      >
        <div>
          <p className="text-sm font-bold">{label}</p>
          {price && (
            <p className="text-xs text-white/80">From €{price}</p>
          )}
        </div>
        <span className="rounded-md bg-white/20 px-3 py-1 text-sm font-bold">
          Book Now
        </span>
      </a>
    </div>
  );
}
