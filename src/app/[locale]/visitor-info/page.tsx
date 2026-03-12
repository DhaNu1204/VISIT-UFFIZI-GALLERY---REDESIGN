import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getVisitorInfoContent } from "@/data/content/visitor-info";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getVisitorInfoContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/visitor-info`,
    },
  };
}

export default async function VisitorInfoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getVisitorInfoContent(locale);

  return (
    <>
      <Hreflang path="visitor-info" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>

        <h2 className="mb-4 mt-8 text-3xl font-bold text-navy">
          {c.essential.h2}
        </h2>
        <div className="mb-8 overflow-hidden rounded-xl border border-gold/20 bg-white">
          <div className="divide-y divide-gold/10">
            {c.essential.rows.map((row) => (
              <div key={row.label} className="flex gap-4 px-6 py-3">
                <span className="w-28 shrink-0 text-sm font-semibold text-navy">{row.label}</span>
                <span className="text-sm text-charcoal/80">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whatToBring.h2}
        </h2>
        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">{c.whatToBring.allowedH3}</h3>
        <ul className="mb-4 ml-6 list-disc space-y-1">
          {c.whatToBring.allowed.map((item) => (
            <li key={item} className="text-charcoal/85">{item}</li>
          ))}
        </ul>

        <h3 className="mb-2 mt-6 text-xl font-bold text-navy">{c.whatToBring.notAllowedH3}</h3>
        <ul className="mb-6 ml-6 list-disc space-y-1">
          {c.whatToBring.notAllowed.map((item) => (
            <li key={item} className="text-charcoal/85">{item}</li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.facilities.h2}
        </h2>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.facilities.items.map((item) => (
            <li key={item.label} className="text-charcoal/85">
              <strong className="text-navy">{item.label}</strong> {item.text}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.accessibility.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.accessibility.p}{" "}
          <Link
            href={`/${locale}/the-uffizi-gallery-door-3-importent-information`}
            className="font-medium text-burgundy hover:text-burgundy/80"
          >
            {c.accessibility.doorLinkText}
          </Link>
          {c.accessibility.pAfterLink}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.photography.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.photography.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.usefulLinks.h2}
        </h2>
        <div className="mb-8 grid gap-3 sm:grid-cols-2">
          {[
            { title: c.usefulLinks.titles[0], href: `/${locale}/uffizi-gallery-opening-hours` },
            { title: c.usefulLinks.titles[1], href: `/${locale}/tickets` },
            { title: c.usefulLinks.titles[2], href: `/${locale}/directions` },
            { title: c.usefulLinks.titles[3], href: `/${locale}/the-uffizi-gallery-door-3-importent-information` },
            { title: c.usefulLinks.titles[4], href: `/${locale}/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look` },
            { title: c.usefulLinks.titles[5], href: `/${locale}/tours` },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-gold/15 bg-white p-4 text-sm font-semibold text-navy transition-all hover:border-gold/30 hover:text-burgundy"
            >
              {link.title} →
            </Link>
          ))}
        </div>

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
