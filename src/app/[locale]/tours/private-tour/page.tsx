import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getToursPrivateContent } from "@/data/content/tours-private";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getToursPrivateContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/tours/private-tour`,
    },
  };
}

export default async function PrivateTourPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getToursPrivateContent(locale);

  return (
    <>
      <Hreflang path="tours/private-tour" />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: c.breadcrumbs.tours, href: `/${locale}/tours` },
          { label: c.breadcrumbs.privateTour },
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
          price="189"
          duration="2.5 hours"
          includes="Skip-the-line entry, private licensed guide, headsets"
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
          urgent
        />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whyChoose.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whyChoose.intro}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-3">
          {c.whyChoose.items.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{item.label}</strong> — {item.text}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whatsIncluded.h2}
        </h2>
        <div className="mb-8 rounded-xl border border-gold/20 bg-white p-6">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            {c.whatsIncluded.details.map((item, i) => (
              <div key={i}>
                <dt className="font-semibold text-navy">{item.label}</dt>
                <dd className="mt-1 text-charcoal/70">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.customRoutes.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.customRoutes.intro}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.customRoutes.items.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{item.label}</strong> {item.text}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.comparison.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.comparison.p}
        </p>

        <BookingCard
          type="tour"
          title={c.bookingCtaBottom}
          price="189"
          duration="2.5 hours"
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
        />

        <FAQ title={c.faqTitle} items={c.faq} />
      </div>
    </>
  );
}
