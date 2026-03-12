import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import TourCard from "@/components/ui/TourCard";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import GetYourGuideWidget from "@/components/ui/GetYourGuideWidget";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { DisplayAd } from "@/components/ads";
import { getToursContent } from "@/data/content/tours";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getToursContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/tours`,
    },
  };
}

export default async function ToursPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getToursContent(locale);

  return (
    <>
      <Hreflang path="tours" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.introParagraphs[0]}
        </p>

        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.introParagraphs[1]}
        </p>
      </div>

      {/* Banner Ad */}
      <div className="mx-auto max-w-[720px] px-4">
        <DisplayAd adSlot="2318668115" className="mb-8" />
      </div>

      {/* GetYourGuide Tours Widget */}
      <section className="mx-auto max-w-[1200px] px-4 pb-8">
        <div 
          data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
          data-gyg-locale-code="en-US"
          data-gyg-widget="activities"
          data-gyg-number-of-items="4"
          data-gyg-cmp="visit_uffizi_tours_page"
          data-gyg-partner-id="Z35Q282"
          data-gyg-tour-ids="914317,1142368,1151106,1170306"
        >
          <span>
            Powered by{" "}
            <a 
              target="_blank" 
              rel="sponsored noopener noreferrer" 
              href="https://www.getyourguide.com/florence-l32/"
            >
              GetYourGuide
            </a>
          </span>
        </div>
      </section>

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h2 className="mb-4 text-3xl font-bold text-navy">
          {c.whyGuided.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whyGuided.paragraphs[0]}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whyGuided.paragraphs[1]}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whichTour.h2}
        </h2>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
          {c.whichTour.guided.h3}
        </h3>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whichTour.guided.p}{" "}
          <Link
            href={`/${locale}/tours/guided-tour`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.whichTour.guided.link}
          </Link>
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
          {c.whichTour.private.h3}
        </h3>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whichTour.private.p}{" "}
          <Link
            href={`/${locale}/tours/private-tour`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.whichTour.private.link}
          </Link>
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
          {c.whichTour.combo.h3}
        </h3>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whichTour.combo.p}{" "}
          <Link
            href={`/${locale}/tours/uffizi-accademia-tour`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.whichTour.combo.link}
          </Link>
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whatToExpect.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whatToExpect.paragraphs[0]}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whatToExpect.paragraphs[1]}
        </p>

        <BookingCard
          type="tour"
          title={c.bookingCtaTitle}
          price="49"
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
          duration="2 hours"
          includes="Skip-the-line entry, licensed guide, headsets"
        />

        <FAQ title={c.faqTitle} items={c.faq} />

        {/* Banner Ad */}
        <DisplayAd adSlot="2318668115" className="my-8" />
      </div>

      {/* GetYourGuide Widget */}
      <GetYourGuideWidget campaign="visit_uffizi_tours_page_bottom" />

      <StickyMobileCTA
        label={c.bookingCtaTitle}
        price="49"
        link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
      />
    </>
  );
}
