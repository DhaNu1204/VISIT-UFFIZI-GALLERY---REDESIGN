"use client";

import { useEffect, useRef } from "react";

export default function AutoAds() {
  const isLoaded = useRef(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && !isLoaded.current) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {
            google_ad_client: "ca-pub-5190790382711375",
            enable_page_level_ads: true,
          }
        );
        isLoaded.current = true;
      }
    } catch (err) {
      console.error("AdSense Auto Ads error:", err);
    }
  }, []);

  return null;
}
