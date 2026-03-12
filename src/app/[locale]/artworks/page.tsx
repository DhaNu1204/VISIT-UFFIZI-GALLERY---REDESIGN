import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import GetYourGuideWidget from "@/components/ui/GetYourGuideWidget";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getArtworksContent } from "@/data/content/artworks";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getArtworksContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/artworks`,
    },
  };
}

export default async function ArtworksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getArtworksContent(locale);

  return (
    <>
      <Hreflang path="artworks" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.highlights.h2}
        </h2>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.highlights.p}
        </p>

        <h3 className="mb-3 mt-8 text-2xl font-bold text-navy">
          {c.botticelli.h3}
        </h3>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.botticelli.p}
        </p>

        <h3 className="mb-3 mt-8 text-2xl font-bold text-navy">
          {c.leonardo.h3}
        </h3>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.leonardo.p}
        </p>

        <h3 className="mb-3 mt-8 text-2xl font-bold text-navy">
          {c.michelangelo.h3}
        </h3>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.michelangelo.p}
        </p>

        <h3 className="mb-3 mt-8 text-2xl font-bold text-navy">
          {c.raphael.h3}
        </h3>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.raphael.p}
        </p>

        <h3 className="mb-3 mt-8 text-2xl font-bold text-navy">
          {c.titian.h3}
        </h3>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.titian.p}
        </p>

        <h3 className="mb-3 mt-8 text-2xl font-bold text-navy">
          {c.caravaggio.h3}
        </h3>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.caravaggio.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.beyondPaintings.h2}
        </h2>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.beyondPaintings.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whereTofind.h2}
        </h2>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.whereTofind.p}
        </p>

        <BookingCard
          type="tickets"
          title={c.ctaTitle}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
        />

        <FAQ items={c.faq} />
      </div>

      {/* GetYourGuide Widget */}
      <GetYourGuideWidget campaign="visit_uffizi_artworks_page" />
    </>
  );
}
