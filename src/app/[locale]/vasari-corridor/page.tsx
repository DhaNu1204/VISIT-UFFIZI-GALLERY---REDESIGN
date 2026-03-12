import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import GetYourGuideWidget from "@/components/ui/GetYourGuideWidget";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getVasariCorridorContent } from "@/data/content/vasari-corridor";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getVasariCorridorContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/vasari-corridor`,
    },
  };
}

export default async function VasariCorridorPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getVasariCorridorContent(locale);

  return (
    <>
      <Hreflang path="vasari-corridor" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>

        <BookingCard
          type="tour"
          title={c.topCta.title}
          price="124"
          duration={c.topCta.duration}
          includes={c.topCta.includes}
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_book_now_btn"
          urgent
        />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.history.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.history.p1}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.history.p2.before}
          <Link
            href={`/${locale}/artists/giorgio-vasari`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.history.p2.vasariLinkText}
          </Link>
          {c.history.p2.after}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.history.p3}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whatYoullSee.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whatYoullSee.intro}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-3">
          {c.whatYoullSee.items.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{item.label}</strong> {item.text}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.visiting.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.visiting.p}
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
          {c.visiting.practicalDetails.h3}
        </h3>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.visiting.practicalDetails.items.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{item.label}</strong> {item.text}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.wwii.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.wwii.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.tips.h2}
        </h2>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          <li className="text-charcoal/85">{c.tips.bookEarly}</li>
          <li className="text-charcoal/85">{c.tips.comfortableShoes}</li>
          <li className="text-charcoal/85">
            {c.tips.combineWithTour.before}
            <Link
              href={`/${locale}/tours/guided-tour`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              {c.tips.combineWithTour.linkText}
            </Link>
            {c.tips.combineWithTour.after}
          </li>
          <li className="text-charcoal/85">{c.tips.warmInSummer}</li>
          <li className="text-charcoal/85">{c.tips.photography}</li>
        </ul>

        <BookingCard
          type="tour"
          title={c.bottomCta.title}
          price="124"
          duration={c.bottomCta.duration}
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_book_now_btn"
        />

        <FAQ items={c.faq} />
      </div>

      {/* GetYourGuide Widget */}
      <GetYourGuideWidget campaign="visit_uffizi_vasari_corridor_page" />
    </>
  );
}
