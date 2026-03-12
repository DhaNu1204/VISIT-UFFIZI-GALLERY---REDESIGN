"use client";

import { useEffect, useRef } from "react";

interface InArticleAdProps {
  adSlot: string;
  className?: string;
}

export default function InArticleAd({
  adSlot,
  className = "",
}: InArticleAdProps) {
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
    <div className={`adsense-in-article ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client="ca-pub-5190790382711375"
        data-ad-slot={adSlot}
        data-ad-layout="in-article"
        data-ad-format="fluid"
      />
    </div>
  );
}
