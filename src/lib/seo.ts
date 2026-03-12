// SEO utility helpers
export const SITE_URL = "https://visituffizi.com";
export const SITE_NAME = "Visit Uffizi";

export function getCanonicalUrl(locale: string, path: string = "") {
  return `${SITE_URL}/${locale}${path ? `/${path}` : ""}`;
}

export function getAlternateUrls(path: string = "") {
  const locales = ["en", "it", "de", "es", "fr"];
  return locales.map((locale) => ({
    locale,
    url: getCanonicalUrl(locale, path),
  }));
}
