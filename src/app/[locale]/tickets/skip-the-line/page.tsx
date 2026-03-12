import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getSkipTheLineContent } from "@/data/content/tickets-skip-the-line";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getSkipTheLineContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/tickets/skip-the-line`,
    },
  };
}

export default async function SkipTheLinePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getSkipTheLineContent(locale);

  return (
    <>
      <Hreflang path="tickets/skip-the-line" />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: c.breadcrumbs.tickets, href: `/${locale}/tickets` },
          { label: c.breadcrumbs.skipTheLine },
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
          type="tickets"
          title={c.ctaTop}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
          urgent
        />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.howItWorks.h2}
        </h2>
        {c.howItWorks.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-charcoal/85">
            {p}
          </p>
        ))}

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whichDoor.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whichDoor.p}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.whichDoor.doors.map((door, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{door.label}</strong> &mdash;{" "}
              {door.description}
              {i === 2 && (
                <>
                  {" "}
                  <Link
                    href={`/${locale}/the-uffizi-gallery-door-3-importent-information`}
                    className="font-medium text-burgundy hover:text-burgundy/80"
                  >
                    {c.whichDoor.door3LinkText}
                  </Link>
                  .
                </>
              )}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.bestTimeSlots.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.bestTimeSlots.p}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.bestTimeSlots.slots.map((slot, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{slot.label}</strong> &mdash;{" "}
              {slot.description}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whatsIncluded.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whatsIncluded.p}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.whatsIncluded.items.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.whatsIncluded.notePrefix}
          <strong className="text-navy">{c.whatsIncluded.noteBold}</strong>
          {c.whatsIncluded.noteSuffix}
          <Link
            href={`/${locale}/tours/guided-tour`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.whatsIncluded.guidedTourLinkText}
          </Link>
          {c.whatsIncluded.guidedTourSuffix}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.cancellation.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.cancellation.p}
        </p>

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
