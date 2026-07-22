import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getPrivacyContent } from "@/data/content/privacy";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getPrivacyContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/privacy/`,
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: `https://visituffizi.com/${locale}/privacy/`,
      siteName: "Visit Uffizi",
      type: "website",
      locale,
      images: [
        {
          url: "https://visituffizi.com/images/og/default.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: ["https://visituffizi.com/images/og/default.jpg"],
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getPrivacyContent(locale);

  return (
    <>
      <Hreflang path="privacy" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <article className="mx-auto max-w-[720px] px-4 py-12">
        {/* Header */}
        <div className="mb-8 border-b border-gold/20 pb-6">
          <h1 className="mb-3 text-4xl font-bold text-navy">{c.h1}</h1>
          <p className="text-sm text-charcoal/60">{c.lastUpdated}</p>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="mb-8 rounded-lg border-l-4 border-burgundy bg-cream p-6">
          <h2 className="mb-2 text-lg font-bold text-burgundy">{c.disclaimer.title}</h2>
          <p className="text-charcoal/80">{c.disclaimer.text}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {c.sections.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-navy">{section.title}</h2>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="mb-4 leading-relaxed text-charcoal/85">
                  {para}
                </p>
              ))}
              {section.list && (
                <ul className="mb-4 ml-6 list-disc space-y-2 text-charcoal/85">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 rounded-lg bg-navy/5 p-6">
          <h2 className="mb-3 text-xl font-bold text-navy">{c.contact.title}</h2>
          <p className="text-charcoal/80">{c.contact.text}</p>
        </div>
      </article>
    </>
  );
}
