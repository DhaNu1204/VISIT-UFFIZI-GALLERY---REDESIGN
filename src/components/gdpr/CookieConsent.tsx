"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentPreferences = {
  essential: boolean;
  analytics: boolean;
  advertising: boolean;
};

type CookieConsentProps = {
  locale: string;
  content: {
    title: string;
    description: string;
    affiliateNotice: string;
    acceptAll: string;
    rejectAll: string;
    customize: string;
    savePreferences: string;
    essential: string;
    essentialDesc: string;
    analytics: string;
    analyticsDesc: string;
    advertising: string;
    advertisingDesc: string;
    privacyLink: string;
    cookiesLink: string;
  };
};

export default function CookieConsent({ locale, content }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const saved = JSON.parse(consent);
      setPreferences(saved);
      applyConsent(saved);
    }
  }, []);

  const applyConsent = (prefs: ConsentPreferences) => {
    // Initialize Google Analytics if consent given
    if (prefs.analytics && typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }

    // Initialize Google AdSense if consent given
    if (prefs.advertising && typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  };

  const handleAcceptAll = () => {
    const prefs: ConsentPreferences = {
      essential: true,
      analytics: true,
      advertising: true,
    };
    saveConsent(prefs);
  };

  const handleRejectAll = () => {
    const prefs: ConsentPreferences = {
      essential: true,
      analytics: false,
      advertising: false,
    };
    saveConsent(prefs);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: ConsentPreferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    applyConsent(prefs);
    setShowBanner(false);
    setShowCustomize(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl rounded-lg bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={() => setShowBanner(false)}
          className="absolute right-4 top-4 text-charcoal/40 transition-colors hover:text-charcoal"
          aria-label="Close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          {/* Warning Banner */}
          <div className="mb-6 rounded-lg border-l-4 border-burgundy bg-burgundy/10 p-4">
            <p className="text-sm font-semibold text-burgundy">
              {content.affiliateNotice}
            </p>
          </div>

          {!showCustomize ? (
            <>
              {/* Main banner */}
              <h2 className="mb-3 text-2xl font-bold text-navy">
                {content.title}
              </h2>
              <p className="mb-6 leading-relaxed text-charcoal/80">
                {content.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2 text-sm text-charcoal/70">
                <Link
                  href={`/${locale}/privacy`}
                  className="underline hover:text-navy"
                >
                  {content.privacyLink}
                </Link>
                <span>•</span>
                <Link
                  href={`/${locale}/cookies`}
                  className="underline hover:text-navy"
                >
                  {content.cookiesLink}
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="rounded-md bg-burgundy px-6 py-3 font-semibold text-white transition-colors hover:bg-burgundy/90"
                >
                  {content.acceptAll}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="rounded-md border-2 border-navy/20 bg-white px-6 py-3 font-semibold text-navy transition-colors hover:border-navy/40 hover:bg-navy/5"
                >
                  {content.rejectAll}
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="rounded-md bg-navy/10 px-6 py-3 font-semibold text-navy transition-colors hover:bg-navy/20"
                >
                  {content.customize}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Customize preferences */}
              <h2 className="mb-6 text-2xl font-bold text-navy">
                {content.customize}
              </h2>

              <div className="space-y-4">
                {/* Essential */}
                <div className="rounded-lg border border-gold/30 bg-cream/30 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-1 font-bold text-navy">
                        {content.essential}
                      </h3>
                      <p className="text-sm text-charcoal/70">
                        {content.essentialDesc}
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="h-5 w-5 cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="rounded-lg border border-gold/30 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-1 font-bold text-navy">
                        {content.analytics}
                      </h3>
                      <p className="text-sm text-charcoal/70">
                        {content.analyticsDesc}
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({
                            ...preferences,
                            analytics: e.target.checked,
                          })
                        }
                        className="h-5 w-5 cursor-pointer accent-burgundy"
                      />
                    </div>
                  </div>
                </div>

                {/* Advertising */}
                <div className="rounded-lg border border-gold/30 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-1 font-bold text-navy">
                        {content.advertising}
                      </h3>
                      <p className="text-sm text-charcoal/70">
                        {content.advertisingDesc}
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.advertising}
                        onChange={(e) =>
                          setPreferences({
                            ...preferences,
                            advertising: e.target.checked,
                          })
                        }
                        className="h-5 w-5 cursor-pointer accent-burgundy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleSaveCustom}
                  className="rounded-md bg-burgundy px-6 py-3 font-semibold text-white transition-colors hover:bg-burgundy/90"
                >
                  {content.savePreferences}
                </button>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="rounded-md border-2 border-navy/20 bg-white px-6 py-3 font-semibold text-navy transition-colors hover:border-navy/40 hover:bg-navy/5"
                >
                  {content.rejectAll}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
