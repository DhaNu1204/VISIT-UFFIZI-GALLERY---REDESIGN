"use client";

import { useEffect, useRef } from "react";

interface DisplayAdProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  fullWidthResponsive?: boolean;
  className?: string;
}

export default function DisplayAd({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
}: DisplayAdProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    try {
      if (
        typeof window !== "undefined" &&
        adRef.current &&
        !isAdLoaded.current
      ) {
        // Check if ad is already initialized
        const isInitialized = adRef.current.getAttribute(
          "data-adsbygoogle-status"
        );

        if (!isInitialized) {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
            {}
          );
          isAdLoaded.current = true;
        }
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`adsense-container my-4 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", minHeight: "250px" }}
        data-ad-client="ca-pub-5190790382711375"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
