import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQ from "@/components/ui/FAQ";
import GetYourGuideWidget from "@/components/ui/GetYourGuideWidget";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import JsonLd from "@/components/seo/JsonLd";
import { getOpeningHoursContent } from "@/data/content/opening-hours";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getOpeningHoursContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/uffizi-gallery-opening-hours`,
    },
  };
}

export default async function OpeningHoursPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getOpeningHoursContent(locale);

  /* Split the openHolidays string on {open} to render the bold keyword inline */
  const [holidaysBefore, holidaysAfter] = c.holidayClosures.openHolidays.split(
    "{open}"
  );
  const openWord = locale === "it" ? "aperti" : "open";

  /* Split the best-time paragraph on {doorLink} to render the Link inline */
  const [bestBefore, bestAfter] = c.bestTimes.best.p.split("{doorLink}");

  return (
    <>
      <Hreflang path="uffizi-gallery-opening-hours" />
      <JsonLd type="Museum" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>

        <h2 className="mb-4 mt-8 text-3xl font-bold text-navy">
          {c.standardHours.h2}
        </h2>

        <div className="mb-8 overflow-hidden rounded-xl border border-gold/20 bg-white shadow-sm">
          <div className="bg-navy px-6 py-3">
            <h3 className="text-lg font-bold text-white">
              {c.standardHours.scheduleTitle}
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gold/10 pb-3">
                <span className="font-semibold text-navy">
                  {c.standardHours.tueSun}
                </span>
                <span className="text-charcoal/85">
                  {c.standardHours.tueSunTime}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-gold/10 pb-3">
                <span className="font-semibold text-navy">
                  {c.standardHours.lastEntry}
                </span>
                <span className="text-charcoal/85">
                  {c.standardHours.lastEntryTime}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-gold/10 pb-3">
                <span className="font-semibold text-navy">
                  {c.standardHours.ticketOffice}
                </span>
                <span className="text-charcoal/85">
                  {c.standardHours.ticketOfficeTime}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-burgundy">
                  {c.standardHours.monday}
                </span>
                <span className="font-semibold text-burgundy">
                  {c.standardHours.mondayClosed}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.standardHours.note}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.holidayClosures.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.holidayClosures.p}
        </p>
        <PriceTable
          title={c.holidayClosures.tableTitle}
          data={c.holidayClosures.closures}
        />
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {holidaysBefore}
          <strong className="text-navy">{openWord}</strong>
          {holidaysAfter}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.extendedHours.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.extendedHours.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.bestTimes.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.bestTimes.intro}
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
          {c.bestTimes.best.h3}
        </h3>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {bestBefore}
          <Link
            href={`/${locale}/the-uffizi-gallery-door-3-importent-information`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.bestTimes.best.doorLinkText}
          </Link>
          {bestAfter}
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
          {c.bestTimes.good.h3}
        </h3>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.bestTimes.good.p}
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
          {c.bestTimes.avoid.h3}
        </h3>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.bestTimes.avoid.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.bestDays.h2}
        </h2>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.bestDays.days.map((day, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{day.label}</strong> &mdash;{" "}
              {day.description}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.bestSeason.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.bestSeason.intro}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.bestSeason.seasons.map((season, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{season.label}</strong>{" "}
              {season.description}
            </li>
          ))}
        </ul>

        <BookingCard
          type="tickets"
          title={c.ctaTitle}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
          urgent
        />

        <FAQ items={c.faq} />
      </div>

      {/* GetYourGuide Widget */}
      <GetYourGuideWidget campaign="visit_uffizi_opening_hours_page" />
    </>
  );
}
