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
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { DisplayAd } from "@/components/ads";
import { getTicketsContent } from "@/data/content/tickets";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getTicketsContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/tickets`,
    },
  };
}

export default async function TicketsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getTicketsContent(locale);

  return (
    <>
      <Hreflang path="tickets" />
      <JsonLd
        type="Product"
        data={{
          name: "Uffizi Gallery Skip-the-Line Ticket",
          description:
            "Pre-booked timed entry ticket to the Uffizi Gallery with skip-the-line access via Door 1.",
          price: "26",
          url: "https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802",
        }}
      />
      <Breadcrumbs locale={locale} items={[{ label: c.h1 }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>

        <BookingCard
          type="tickets"
          title={c.ctaTitle}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
          urgent
        />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.priceSection.h2}
        </h2>

        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.priceSection.p}
        </p>

        <PriceTable
          title={c.priceSection.tableTitle}
          data={[
            { type: locale === "it" ? "Biglietto Online" : "Online Ticket", price: "€29", notes: locale === "it" ? "Prenotazione sito ufficiale" : "Official website booking" },
            { type: locale === "it" ? "Biglietteria" : "Ticket Office", price: "€25", notes: locale === "it" ? "Porta 2" : "Door 2 walk-up" },
            { type: locale === "it" ? "Ingresso Pomeridiano (dopo le 16:00)" : "Afternoon Entry (after 4 PM)", price: "€20", notes: locale === "it" ? "Prenotazione online" : "Online booking" },
            { type: locale === "it" ? "Cittadini UE (18-25)" : "EU Citizens (18-25)", price: "€2", notes: locale === "it" ? "Documento richiesto" : "Valid ID required" },
            { type: locale === "it" ? "Minori di 18" : "Under 18", price: locale === "it" ? "Gratis" : "Free", notes: locale === "it" ? "Qualsiasi nazionalità" : "Any nationality" },
            { type: locale === "it" ? "Over 65 (UE)" : "Over 65 (EU)", price: "€2", notes: locale === "it" ? "Documento richiesto" : "Valid ID required" },
            { type: "Skip-the-Line (online)", price: locale === "it" ? "Da €26" : "From €26", notes: locale === "it" ? "Rivenditori autorizzati" : "Authorized resellers" },
            { type: locale === "it" ? "Visita Guidata + Ingresso" : "Guided Tour + Entry", price: locale === "it" ? "Da €49" : "From €49", notes: locale === "it" ? "Tour di 2 ore" : "2-hour expert tour" },
          ]}
        />

        {/* Banner Ad */}
        <DisplayAd adSlot="2318668115" className="my-8" />

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.howToBuy.h2}
        </h2>

        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.howToBuy.p}
        </p>

        {c.howToBuy.options.map((opt, i) => (
          <div key={i}>
            <h3 className="mb-2 mt-6 text-xl font-bold text-navy">
              {opt.h3}
            </h3>
            <p className="mb-4 leading-relaxed text-charcoal/85">{opt.p}</p>
          </div>
        ))}

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.freeEntry.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.freeEntry.p}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.skipLine.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.skipLine.p}
        </p>

        <div className="my-6 text-center">
          <Link
            href={`/${locale}/tickets/skip-the-line`}
            className="text-sm font-semibold text-burgundy underline decoration-burgundy/30 hover:text-burgundy/80"
          >
            {c.skipLine.link}
          </Link>
        </div>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.whenToBook.h2}
        </h2>
        {c.whenToBook.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-charcoal/85">
            {p}
          </p>
        ))}

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.compared.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.compared.p}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          <li className="text-charcoal/85">
            <strong className="text-navy">
              {locale === "it" ? "Prima visita:" : "First-time visitors:"}
            </strong>{" "}
            <Link
              href={`/${locale}/tours/guided-tour`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              {locale === "it" ? "Visita guidata" : "Guided tour"}
            </Link>{" "}
            — {locale === "it"
              ? "vale ogni euro per il contesto e l'accesso prioritario"
              : "worth every euro for context and priority access"}
          </li>
          <li className="text-charcoal/85">
            <strong className="text-navy">
              {locale === "it"
                ? "Appassionati d'arte:"
                : "Art lovers & repeat visitors:"}
            </strong>{" "}
            <Link
              href={`/${locale}/tickets/skip-the-line`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              {locale === "it" ? "Biglietto salta la fila" : "Skip-the-line ticket"}
            </Link>{" "}
            — {locale === "it"
              ? "esplora al tuo ritmo"
              : "explore at your own pace"}
          </li>
          <li className="text-charcoal/85">
            <strong className="text-navy">
              {locale === "it" ? "Famiglie con bambini:" : "Families with kids:"}
            </strong>{" "}
            <Link
              href={`/${locale}/tours/private-tour`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              {locale === "it" ? "Tour privato" : "Private tour"}
            </Link>{" "}
            — {locale === "it"
              ? "ritmo adatto ai bambini, percorso personalizzato"
              : "kid-friendly pace, custom route"}
          </li>
          <li className="text-charcoal/85">
            <strong className="text-navy">
              {locale === "it" ? "Poco tempo:" : "Short on time:"}
            </strong>{" "}
            <Link
              href={`/${locale}/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              {locale === "it"
                ? "Guida Uffizi in 2 ore"
                : "2-hour Uffizi guide"}
            </Link>
          </li>
        </ul>

        <BookingCard
          type="tickets"
          title={c.bottomCta}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
          urgent
        />

        <FAQ items={c.faq} />
      </div>

      {/* GetYourGuide Widget */}
      <GetYourGuideWidget campaign="visit_uffizi_tickets_page" />

      <StickyMobileCTA
        label={c.ctaTitle}
        price="26"
        link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
      />
    </>
  );
}
