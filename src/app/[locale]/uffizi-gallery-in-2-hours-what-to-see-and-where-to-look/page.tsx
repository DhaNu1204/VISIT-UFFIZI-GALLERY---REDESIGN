import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getTwoHoursContent } from "@/data/content/two-hours";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getTwoHoursContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look`,
    },
  };
}

export default async function TwoHoursGuidePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getTwoHoursContent(locale);

  return (
    <>
      <Hreflang path="uffizi-gallery-in-2-hours-what-to-see-and-where-to-look" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>
        <p className="mb-2 text-sm text-charcoal/50">{c.subtitle}</p>

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>

        <BookingCard
          type="tickets"
          title={c.ctaTopTitle}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
        />

        {/* Route */}
        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.routeH2}
        </h2>

        {/* Stops */}
        {c.stops.map((stop, i) => (
          <div key={i} className="mb-8 border-l-4 border-gold pl-6">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gold">
              {stop.tag}
            </p>
            <h3 className="mb-2 text-xl font-bold text-navy">
              {stop.h3}
            </h3>
            {stop.paragraphs.map((paragraph, j) => (
              <p
                key={j}
                className={`${j > 0 ? "mt-3 " : ""}leading-relaxed text-charcoal/85`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        {/* Bonus */}
        <div className="mb-8 border-l-4 border-burgundy pl-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-burgundy">
            {c.bonus.tag}
          </p>
          <h3 className="mb-2 text-xl font-bold text-navy">
            {c.bonus.h3}
          </h3>
          <p className="leading-relaxed text-charcoal/85">
            {c.bonus.p}
          </p>
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.timingTips.h2}
        </h2>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.timingTips.items.map((tip, i) => (
            <li key={i} className="text-charcoal/85">
              {tip}
            </li>
          ))}
        </ul>

        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.closingP.split(c.closingLinkText)[0]}
          <Link
            href={`/${locale}/tours/guided-tour`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.closingLinkText}
          </Link>
          {c.closingP.split(c.closingLinkText)[1]}
        </p>

        <BookingCard
          type="tickets"
          title={c.ctaBottomTitle}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
          urgent
        />

        <FAQ items={c.faq} />
      </div>
    </>
  );
}
