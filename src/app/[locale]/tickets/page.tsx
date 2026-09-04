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

type PriceRow = { type: string; price: string; notes: string };

const PRICE_ROWS: Record<string, PriceRow[]> = {
  en: [
    { type: "Online Ticket", price: "€29", notes: "Booked in advance" },
    { type: "Ticket Office", price: "€25", notes: "Same day, at the ticket office" },
    { type: "Afternoon Entry (from 4 PM)", price: "€16 / €20", notes: "Same day / booked in advance" },
    { type: "EU Citizens (18-25)", price: "€2", notes: "Valid ID required" },
    { type: "Under 18", price: "Free", notes: "Any nationality — nominative ticket" },
    { type: "Uffizi + Vasari Corridor", price: "€43 / €47", notes: "Same day / booked in advance" },
    { type: "PassePartout 5 Days", price: "€40", notes: "Uffizi, Pitti, Boboli & Bardini — Uffizi first" },
    { type: "Timed-Entry Ticket + Guide-Book App", price: "From €26", notes: "Reserved entry time" },
    { type: "Timed-Entry Ticket + Audio Guide", price: "From €49", notes: "Reserved entry time" },
    { type: "Guided Tour + Entry", price: "From €49", notes: "2-hour expert tour" },
  ],
  it: [
    { type: "Biglietto Online", price: "€29", notes: "Prenotato in anticipo" },
    { type: "Biglietteria", price: "€25", notes: "In giornata, alla biglietteria" },
    { type: "Ingresso Pomeridiano (dalle 16:00)", price: "€16 / €20", notes: "In giornata / in anticipo" },
    { type: "Cittadini UE (18-25)", price: "€2", notes: "Documento richiesto" },
    { type: "Minori di 18", price: "Gratis", notes: "Qualsiasi nazionalità — biglietto nominativo" },
    { type: "Uffizi + Corridoio Vasariano", price: "€43 / €47", notes: "In giornata / in anticipo" },
    { type: "PassePartout 5 Giorni", price: "€40", notes: "Uffizi, Pitti, Boboli e Bardini — Uffizi per primo" },
    { type: "Biglietto con Orario + App Guida", price: "Da €26", notes: "Orario di ingresso riservato" },
    { type: "Biglietto con Orario + Audioguida", price: "Da €49", notes: "Orario di ingresso riservato" },
    { type: "Visita Guidata + Ingresso", price: "Da €49", notes: "Tour di 2 ore" },
  ],
  de: [
    { type: "Online-Ticket", price: "€29", notes: "Im Voraus gebucht" },
    { type: "Ticketkasse", price: "€25", notes: "Am selben Tag an der Kasse" },
    { type: "Nachmittagseintritt (ab 16:00 Uhr)", price: "€16 / €20", notes: "Am selben Tag / im Voraus" },
    { type: "EU-Bürger (18-25)", price: "€2", notes: "Gültiger Ausweis erforderlich" },
    { type: "Unter 18", price: "Kostenlos", notes: "Jede Nationalität — personalisiertes Ticket" },
    { type: "Uffizien + Vasarikorridor", price: "€43 / €47", notes: "Am selben Tag / im Voraus" },
    { type: "PassePartout 5 Tage", price: "€40", notes: "Uffizien, Pitti, Boboli & Bardini — Uffizien zuerst" },
    { type: "Ticket mit Zeitfenster + Guide-App", price: "Ab €26", notes: "Reservierte Eintrittszeit" },
    { type: "Ticket mit Zeitfenster + Audioguide", price: "Ab €49", notes: "Reservierte Eintrittszeit" },
    { type: "Führung + Eintritt", price: "Ab €49", notes: "2-stündige Expertenführung" },
  ],
  es: [
    { type: "Entrada Online", price: "€29", notes: "Reservada con antelación" },
    { type: "Taquilla", price: "€25", notes: "El mismo día, en taquilla" },
    { type: "Entrada de Tarde (desde las 16:00)", price: "€16 / €20", notes: "El mismo día / con antelación" },
    { type: "Ciudadanos UE (18-25)", price: "€2", notes: "Documento válido requerido" },
    { type: "Menores de 18", price: "Gratis", notes: "Cualquier nacionalidad — entrada nominativa" },
    { type: "Uffizi + Corredor Vasariano", price: "€43 / €47", notes: "El mismo día / con antelación" },
    { type: "PassePartout 5 Días", price: "€40", notes: "Uffizi, Pitti, Boboli y Bardini — Uffizi primero" },
    { type: "Entrada con Hora Reservada + App Guía", price: "Desde €26", notes: "Hora de entrada reservada" },
    { type: "Entrada con Hora Reservada + Audioguía", price: "Desde €49", notes: "Hora de entrada reservada" },
    { type: "Visita Guiada + Entrada", price: "Desde €49", notes: "Visita de 2 horas" },
  ],
  fr: [
    { type: "Billet en Ligne", price: "€29", notes: "Réservé à l'avance" },
    { type: "Billetterie", price: "€25", notes: "Le jour même, à la billetterie" },
    { type: "Entrée de l'Après-midi (dès 16h00)", price: "€16 / €20", notes: "Le jour même / à l'avance" },
    { type: "Citoyens UE (18-25)", price: "€2", notes: "Pièce d'identité requise" },
    { type: "Moins de 18 ans", price: "Gratuit", notes: "Toute nationalité — billet nominatif" },
    { type: "Offices + Corridor de Vasari", price: "€43 / €47", notes: "Le jour même / à l'avance" },
    { type: "PassePartout 5 Jours", price: "€40", notes: "Offices, Pitti, Boboli & Bardini — Offices en premier" },
    { type: "Billet à Horaire Réservé + Appli Guide", price: "Dès €26", notes: "Heure d'entrée réservée" },
    { type: "Billet à Horaire Réservé + Audioguide", price: "Dès €49", notes: "Heure d'entrée réservée" },
    { type: "Visite Guidée + Entrée", price: "Dès €49", notes: "Visite de 2 heures" },
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getTicketsContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/tickets/`,
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: `https://visituffizi.com/${locale}/tickets/`,
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
          name: "Uffizi Gallery Timed-Entry Ticket",
          description:
            "Reserved timed-entry ticket to the Uffizi Gallery: a guaranteed entry time at Door 1, with no ticket-office queue.",
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
          data={PRICE_ROWS[locale] ?? PRICE_ROWS.en}
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
            href={`/${locale}/tickets/skip-the-line/`}
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
              href={`/${locale}/tours/guided-tour/`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              {locale === "it" ? "Visita guidata" : "Guided tour"}
            </Link>{" "}
            — {locale === "it"
              ? "vale ogni euro per il contesto e per l'orario di ingresso riservato"
              : "worth every euro for the context and the reserved entry time"}
          </li>
          <li className="text-charcoal/85">
            <strong className="text-navy">
              {locale === "it"
                ? "Appassionati d'arte:"
                : "Art lovers & repeat visitors:"}
            </strong>{" "}
            <Link
              href={`/${locale}/tickets/skip-the-line/`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              {locale === "it" ? "Biglietto con orario riservato" : "Timed-entry ticket"}
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
              href={`/${locale}/tours/private-tour/`}
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
              href={`/${locale}/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look/`}
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
