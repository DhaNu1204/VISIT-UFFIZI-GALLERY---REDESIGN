import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getTicketPricesContent } from "@/data/content/tickets-prices";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getTicketPricesContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/tickets/prices`,
    },
  };
}

export default async function TicketPricesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getTicketPricesContent(locale);

  return (
    <>
      <Hreflang path="tickets/prices" />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: c.breadcrumbs.tickets, href: `/${locale}/tickets` },
          { label: c.breadcrumbs.prices },
        ]}
      />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>

        <h2 className="mb-4 mt-8 text-3xl font-bold text-navy">
          {c.standardPrices.h2}
        </h2>
        <PriceTable title={c.standardPrices.tableTitle} data={c.standardPrices.rows} />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.reducedFree.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.reducedFree.p}
        </p>
        <PriceTable title={c.reducedFree.tableTitle} data={c.reducedFree.rows} />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.onlineVsWalkUp.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.onlineVsWalkUp.p}
        </p>
        <PriceTable title={c.onlineVsWalkUp.tableTitle} data={c.onlineVsWalkUp.rows} />
        <p className="mt-2 text-xs text-charcoal/50">
          {c.onlineVsWalkUp.footnote}
        </p>

        <p className="mb-4 mt-6 leading-relaxed text-charcoal/85">
          {c.onlineVsWalkUp.recommendation}
        </p>

        <BookingCard
          type="tickets"
          title={c.ctaTop}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
          urgent
        />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.freeEntryDays.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.freeEntryDays.pPrefix}
          <strong className="text-navy">{c.freeEntryDays.pBold}</strong>
          {c.freeEntryDays.pSuffix}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.comboTickets.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.comboTickets.p}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.comboTickets.options.map((option, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{option.label}</strong> &mdash;{" "}
              {option.description}
              {option.hasLink && option.linkText && (
                <>
                  {" "}
                  <Link
                    href={`/${locale}/tours/uffizi-accademia-tour`}
                    className="font-medium text-burgundy hover:text-burgundy/80"
                  >
                    {option.linkText}
                  </Link>
                </>
              )}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.moneySaving.h2}
        </h2>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.moneySaving.tips.map((tip, i) => (
            <li key={i} className="text-charcoal/85">
              {tip}
            </li>
          ))}
        </ul>

        <BookingCard
          type="tickets"
          title={c.ctaBottom}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
        />

        <FAQ items={c.faq} />
      </div>
    </>
  );
}
