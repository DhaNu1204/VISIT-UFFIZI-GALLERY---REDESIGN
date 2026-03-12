// MDX content loading utilities
// Will be implemented when content pages are created

export const locales = ["en", "it", "de", "es", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
