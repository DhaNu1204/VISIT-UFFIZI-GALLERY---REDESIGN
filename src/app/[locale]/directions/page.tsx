import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getDirectionsContent } from "@/data/content/directions";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getDirectionsContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/directions`,
    },
  };
}

export default async function DirectionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getDirectionsContent(locale);

  return (
    <>
      <Hreflang path="directions" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>

        <h2 className="mb-4 mt-8 text-3xl font-bold text-navy">
          {c.walking.h2}
        </h2>
        <div className="mb-8 overflow-hidden rounded-xl border border-gold/20 bg-white">
          <div className="divide-y divide-gold/10">
            {c.walking.rows.map((row) => (
              <div key={row.from} className="px-6 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-navy">{row.from}</span>
                  <span className="text-sm font-semibold text-gold">{row.time}</span>
                </div>
                <p className="mt-1 text-xs text-charcoal/60">{row.route}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.trainStation.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.trainStation.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.bus.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.bus.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.taxi.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.taxi.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.pisaAirport.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.pisaAirport.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.florenceAirport.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.florenceAirport.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.parking.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.parking.intro}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.parking.options.map((opt) => (
            <li key={opt.label} className="text-charcoal/85">
              <strong className="text-navy">{opt.label}</strong> {opt.text}
            </li>
          ))}
        </ul>

        <BookingCard
          type="tickets"
          title={c.ctaTitle}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
        />

        <FAQ items={c.faq} />
      </div>
    </>
  );
}
