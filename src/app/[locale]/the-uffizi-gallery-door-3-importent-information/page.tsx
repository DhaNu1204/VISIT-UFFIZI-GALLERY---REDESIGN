import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getDoor3Content } from "@/data/content/door-3";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getDoor3Content(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/the-uffizi-gallery-door-3-importent-information`,
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

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>

        <h2 className="mb-4 mt-8 text-3xl font-bold text-navy">
          {c.threeDoorsH2}
        </h2>

        <div className="mb-8 space-y-4">
          {/* Door 1 */}
          <div className="rounded-xl border border-gold/20 bg-white p-6">
            <h3 className="mb-2 text-xl font-bold text-navy">
              {c.door1.h3}
            </h3>
            <p className="text-sm text-charcoal/85">
              <strong className="text-navy">Location:</strong> {c.door1.location}
            </p>
            <p className="mt-2 leading-relaxed text-charcoal/85">
              {c.door1.p}
            </p>
          </div>

          {/* Door 2 */}
          <div className="rounded-xl border border-gold/20 bg-white p-6">
            <h3 className="mb-2 text-xl font-bold text-navy">
              {c.door2.h3}
            </h3>
            <p className="text-sm text-charcoal/85">
              <strong className="text-navy">Location:</strong> {c.door2.location}
            </p>
            <p className="mt-2 leading-relaxed text-charcoal/85">
              {c.door2.p}
            </p>
          </div>

          {/* Door 3 */}
          <div className="rounded-xl border-2 border-gold bg-cream p-6">
            <h3 className="mb-2 text-xl font-bold text-navy">
              {c.door3.h3}
            </h3>
            <p className="text-sm text-charcoal/85">
              <strong className="text-navy">Location:</strong> {c.door3.location}
            </p>
            <p className="mt-2 leading-relaxed text-charcoal/85">
              {c.door3.p}
            </p>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whichDoor.h2}
        </h2>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.whichDoor.items.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{item.label}</strong> {item.value}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.security.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.security.intro}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.security.items.map((item, i) => (
            <li key={i} className="text-charcoal/85">
              <strong className="text-navy">{item.label}</strong> {item.text}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.proTips.h2}
        </h2>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          {c.proTips.items.map((tip, i) => (
            <li key={i} className="text-charcoal/85">
              {tip}
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
