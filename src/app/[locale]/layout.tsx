import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/gdpr/CookieConsent";
import { getCookieConsentContent } from "@/data/content/cookieConsent";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Visit Uffizi Gallery | Florence, Italy",
  description:
    "Plan your visit to the Uffizi Gallery in Florence. Tickets, tours, opening hours, and expert guides.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

  return (
    <html lang={locale} className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Google Search Console verification */}
        {gscVerification && (
          <meta
            name="google-site-verification"
            content={gscVerification}
          />
        )}

        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://widget.getyourguide.com" />

        {/* Google Analytics 4 - only loads if NEXT_PUBLIC_GA_MEASUREMENT_ID is set */}
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen bg-cream font-body text-charcoal antialiased">
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer locale={locale} />
          <CookieConsent
            locale={locale}
            content={getCookieConsentContent(locale)}
          />
        </NextIntlClientProvider>

        {/* Google AdSense - loaded after page is interactive */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5190790382711375"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        {/* GetYourGuide Analytics */}
        <Script
          src="https://widget.getyourguide.com/dist/pa.umd.production.min.js"
          data-gyg-partner-id="Z35Q282"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
