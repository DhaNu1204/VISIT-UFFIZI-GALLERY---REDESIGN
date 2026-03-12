import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { getToursGuidedContent } from "@/data/content/tours-guided";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getToursGuidedContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/tours/guided-tour`,
    },
  };
}

export default async function GuidedTourPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getToursGuidedContent(locale);

  return (
    <>
      <Hreflang path="tours/guided-tour" />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: c.breadcrumbs.tours, href: `/${locale}/tours` },
          { label: c.breadcrumbs.guidedTour },
        ]}
      />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>

        <BookingCard
          type="tour"
          title={c.bookingCtaTop}
          price="49"
          duration="2 hours"
          includes="Skip-the-line entry, licensed guide, headsets"
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
          urgent
        />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whatYouSee.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whatYouSee.p}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-3">
          {c.whatYouSee.highlights.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{item.label}</strong> {item.text}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.tourDetails.h2}
        </h2>
        <div className="mb-8 rounded-xl border border-gold/20 bg-white p-6">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="font-semibold text-navy">{c.tourDetails.duration.label}</dt>
              <dd className="mt-1 text-charcoal/70">{c.tourDetails.duration.value}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">{c.tourDetails.groupSize.label}</dt>
              <dd className="mt-1 text-charcoal/70">{c.tourDetails.groupSize.value}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">{c.tourDetails.languages.label}</dt>
              <dd className="mt-1 text-charcoal/70">{c.tourDetails.languages.value}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">{c.tourDetails.meetingPoint.label}</dt>
              <dd className="mt-1 text-charcoal/70">{c.tourDetails.meetingPoint.value}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">{c.tourDetails.includes.label}</dt>
              <dd className="mt-1 text-charcoal/70">{c.tourDetails.includes.value}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">{c.tourDetails.cancellation.label}</dt>
              <dd className="mt-1 text-charcoal/70">{c.tourDetails.cancellation.value}</dd>
            </div>
          </dl>
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.guides.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.guides.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.tips.h2}
        </h2>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.tips.items.map((tip, i) => (
            <li key={i} className="text-charcoal/85">
              {tip}
            </li>
          ))}
        </ul>

        <BookingCard
          type="tour"
          title={c.bookingCtaBottom}
          price="49"
          duration="2 hours"
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
        />

        <FAQ title={c.faqTitle} items={c.faq} />
      </div>

      <StickyMobileCTA
        label={c.bookingCtaBottom}
        price="49"
        link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
      />
    </>
  );
}
