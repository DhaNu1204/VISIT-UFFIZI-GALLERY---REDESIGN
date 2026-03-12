import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getHistoryContent } from "@/data/content/history";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getHistoryContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/history`,
    },
  };
}

export default async function HistoryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getHistoryContent(locale);

  return (
    <>
      <Hreflang path="history" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.intro.before}
          <Link
            href={`/${locale}/artists/giorgio-vasari`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.intro.vasariLinkText}
          </Link>
          {c.intro.after}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.vasariSection.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.vasariSection.p1}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.vasariSection.p2.before}
          <Link
            href={`/${locale}/vasari-corridor`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.vasariSection.p2.corridorLinkText}
          </Link>
          {c.vasariSection.p2.after}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.mediciCollection.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.mediciCollection.p1}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.mediciCollection.p2}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.annaMaria.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.annaMaria.p1}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.annaMaria.p2}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.galleryToMuseum.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.galleryToMuseum.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.wwii.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.wwii.p.before}
          <Link
            href={`/${locale}/vasari-corridor`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.wwii.p.corridorLinkText}
          </Link>
          {c.wwii.p.after}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.flood.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.flood.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.modernUffizi.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.modernUffizi.p}
        </p>

        <BookingCard
          type="tour"
          title={c.ctaTitle}
          price="49"
          duration="2 hours"
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
        />

        <FAQ items={c.faq} />
      </div>
    </>
  );
}
