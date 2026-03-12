import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getToursComboContent } from "@/data/content/tours-combo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getToursComboContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/tours/uffizi-accademia-tour`,
    },
  };
}

export default async function ComboTourPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getToursComboContent(locale);

  return (
    <>
      <Hreflang path="tours/uffizi-accademia-tour" />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: c.breadcrumbs.tours, href: `/${locale}/tours` },
          { label: c.breadcrumbs.comboTour },
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
          price="89"
          duration="5 hours"
          includes="Skip-the-line entry to both museums, licensed guide, headsets"
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
          urgent
        />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.yourDay.h2}
        </h2>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
          {c.yourDay.morning.h3}
        </h3>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.yourDay.morning.p}
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
          {c.yourDay.lunch.h3}
        </h3>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.yourDay.lunch.p}
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
          {c.yourDay.afternoon.h3}
        </h3>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.yourDay.afternoon.p1}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.yourDay.afternoon.p2}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.yourDay.afternoon.p3}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.tourDetails.h2}
        </h2>
        <div className="mb-8 rounded-xl border border-gold/20 bg-white p-6">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            {c.tourDetails.details.map((item, i) => (
              <div key={i}>
                <dt className="font-semibold text-navy">{item.label}</dt>
                <dd className="mt-1 text-charcoal/70">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.worthIt.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.worthIt.intro}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.worthIt.items.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              {item}
            </li>
          ))}
          <li className="text-charcoal/85">
            <strong className="text-navy">{c.worthIt.total}</strong>
          </li>
        </ul>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.worthIt.closing}
        </p>

        <BookingCard
          type="tour"
          title={c.bookingCtaBottom}
          price="89"
          duration="5 hours"
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
        />

        <FAQ title={c.faqTitle} items={c.faq} />
      </div>
    </>
  );
}
