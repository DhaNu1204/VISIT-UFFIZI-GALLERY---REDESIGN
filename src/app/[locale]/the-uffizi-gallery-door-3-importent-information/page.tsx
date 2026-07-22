import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getDoor3Content } from "@/data/content/door-3";

type Props = { params: Promise<{ locale: string }> };

const BOKUN_LINK =
  "https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getDoor3Content(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/the-uffizi-gallery-door-3-importent-information/`,
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: `https://visituffizi.com/${locale}/the-uffizi-gallery-door-3-importent-information/`,
      siteName: "Visit Uffizi",
      type: "website",
      locale,
      images: [
        {
          url: "https://visituffizi.com/images/og/default.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: ["https://visituffizi.com/images/og/default.jpg"],
    },
  };
}

export default async function Door3Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getDoor3Content(locale);

  return (
    <>
      <Hreflang path="the-uffizi-gallery-door-3-importent-information" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        {/* Quick answer callout */}
        <div className="mb-8 rounded-xl border-2 border-gold bg-cream p-6">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
            {c.quickAnswer.label}
          </div>
          <p className="text-lg leading-relaxed text-charcoal/85">
            {c.quickAnswer.text}
          </p>
        </div>

        {/* Booking CTA #1 */}
        <BookingCard
          type="tickets"
          title={c.ctaTicketTitle}
          price="26"
          link={BOKUN_LINK}
          position="door3-top"
        />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.changed.h2}
        </h2>
        {c.changed.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-charcoal/85">
            {p}
          </p>
        ))}

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whereEnter.h2}
        </h2>
        <p className="mb-4 text-xl font-bold text-burgundy">
          {c.whereEnter.lead}
        </p>
        {c.whereEnter.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-charcoal/85">
            {p}
          </p>
        ))}

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.bookedOnline.h2}
        </h2>
        {c.bookedOnline.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-charcoal/85">
            {p}
          </p>
        ))}
        <p className="mb-3 font-semibold text-navy">
          {c.bookedOnline.stepsIntro}
        </p>
        <ol className="mb-6 ml-6 list-decimal space-y-2">
          {c.bookedOnline.steps.map((step, i) => (
            <li key={i} className="text-charcoal/85">
              {step}
            </li>
          ))}
        </ol>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.bookedOnline.closing}
        </p>

        {/* Booking CTA #2 — main sell */}
        <div className="my-10 rounded-xl border-2 border-burgundy bg-white p-6 shadow-md">
          <h3 className="mb-3 text-2xl font-bold text-navy">
            {c.mainCta.title}
          </h3>
          <p className="mb-4 leading-relaxed text-charcoal/85">
            {c.mainCta.intro}
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-2">
            {c.mainCta.bullets.map((b, i) => (
              <li key={i} className="text-charcoal/85">
                {b}
              </li>
            ))}
          </ul>
          <a
            href={BOKUN_LINK}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-block rounded-lg bg-burgundy px-6 py-3 text-base font-bold text-white shadow transition-all hover:bg-burgundy/90 hover:shadow-lg"
          >
            {c.mainCta.button}
          </a>
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.onTheDay.h2}
        </h2>
        {c.onTheDay.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-charcoal/85">
            {p}
          </p>
        ))}
        <p className="mb-3 text-charcoal/85">{c.onTheDay.paymentIntro}</p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.onTheDay.payment.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.onTheDay.closing}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.guidedTours.h2}
        </h2>
        {c.guidedTours.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-charcoal/85">
            {p}
          </p>
        ))}

        {/* CTA #3 — guided tours */}
        <div className="my-8 rounded-xl border border-gold/40 bg-cream p-6">
          <h3 className="mb-2 text-xl font-bold text-navy">
            {c.guidedTours.ctaTitle}
          </h3>
          <p className="mb-4 text-charcoal/85">{c.guidedTours.ctaLabel}</p>
          <Link
            href={`/${locale}/tours/`}
            className="inline-block rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white shadow transition-all hover:bg-navy/90 hover:shadow-lg"
          >
            {c.guidedTours.ctaTitle}
          </Link>
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.quickFacts.h2}
        </h2>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.quickFacts.items.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{item.label}</strong> {item.value}
            </li>
          ))}
        </ul>

        <FAQ items={c.faq} />

        {/* Final CTA */}
        <div className="my-10 rounded-xl border border-gold/20 bg-white p-6 text-center shadow-md">
          <p className="mb-4 text-lg font-bold text-navy">
            {c.finalCta.text}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOKUN_LINK}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-block rounded-lg bg-burgundy px-6 py-3 text-sm font-bold text-white shadow transition-all hover:bg-burgundy/90 hover:shadow-lg"
            >
              {c.finalCta.ticketLabel}
            </a>
            <Link
              href={`/${locale}/tours/`}
              className="inline-block rounded-lg border-2 border-navy px-6 py-3 text-sm font-bold text-navy transition-all hover:bg-navy hover:text-white"
            >
              {c.finalCta.toursLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
