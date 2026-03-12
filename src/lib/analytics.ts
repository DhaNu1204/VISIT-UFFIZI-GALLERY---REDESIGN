/**
 * Analytics & Tracking Utilities
 * For Google Analytics 4 event tracking
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a custom event in Google Analytics 4
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track affiliate link clicks (GetYourGuide)
 */
export function trackAffiliateClick(params: {
  linkType: 'ticket' | 'tour' | 'widget';
  destination: string;
  productName?: string;
  position?: string;
}) {
  trackEvent('affiliate_click', {
    link_type: params.linkType,
    destination: params.destination,
    product_name: params.productName || 'unknown',
    click_position: params.position || 'unknown',
  });
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(params: {
  ctaName: string;
  ctaLocation: string;
  destination?: string;
}) {
  trackEvent('cta_click', {
    cta_name: params.ctaName,
    cta_location: params.ctaLocation,
    destination: params.destination || '',
  });
}

/**
 * Track page views manually (for client-side navigation)
 */
export function trackPageView(url: string, title: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (gaId) {
      window.gtag('config', gaId, {
        page_path: url,
        page_title: title,
      });
    }
  }
}

/**
 * Track search queries (if you add search functionality)
 */
export function trackSearch(searchTerm: string, resultCount: number) {
  trackEvent('search', {
    search_term: searchTerm,
    result_count: resultCount,
  });
}

/**
 * Track user engagement time on artworks/artists pages
 */
export function trackEngagement(params: {
  contentType: 'artwork' | 'artist' | 'page';
  contentName: string;
  engagementTime: number; // in seconds
}) {
  trackEvent('user_engagement', {
    content_type: params.contentType,
    content_name: params.contentName,
    engagement_time_seconds: params.engagementTime,
  });
}
