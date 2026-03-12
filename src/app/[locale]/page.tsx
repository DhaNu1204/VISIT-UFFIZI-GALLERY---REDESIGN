import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import TourCard from "@/components/ui/TourCard";
import ArtworkCard from "@/components/ui/ArtworkCard";
import FAQ from "@/components/ui/FAQ";
import GetYourGuideWidget from "@/components/ui/GetYourGuideWidget";
import JsonLd from "@/components/seo/JsonLd";
import Hreflang from "@/components/seo/Hreflang";
import { getHomeContent } from "@/data/content/home";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getHomeContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}`,
      languages: {
        en: "https://visituffizi.com/en",
        it: "https://visituffizi.com/it",
        de: "https://visituffizi.com/de",
        es: "https://visituffizi.com/es",
        fr: "https://visituffizi.com/fr",
      },
    },
  };
}

const tourLinks = [
  "https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page",
  "https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page",
  "https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page",
];
const tourPrices = ["49", "189", "89"];
const tourDurations = ["2 hours", "2.5 hours", "5 hours"];

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getHomeContent(locale);

  const visitLinks = [
    `/${locale}/uffizi-gallery-opening-hours`,
    `/${locale}/directions`,
    `/${locale}/the-uffizi-gallery-door-3-importent-information`,
    `/${locale}/uffizi-gallery-in-2-hours-what-to-see-and-where-to-look`,
  ];

  return (
    <>
      <Hreflang />
      <JsonLd type="Museum" />
      <JsonLd type="FAQPage" faq={c.faq} />

      {/* Hero Section */}
      <section className="relative bg-navy py-20 md:py-28">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/uffizi/hero-background.jpg')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/80 to-burgundy/60" />
        <div className="relative mx-auto max-w-[1200px] px-4 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {c.hero.tagline}
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            {c.hero.h1}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80">
            {c.hero.subtitle}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`/${locale}/tickets`}
              className="inline-block rounded-lg bg-burgundy px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-burgundy/90 hover:shadow-xl"
            >
              {c.hero.ctaTickets}
            </Link>
            <Link
              href={`/${locale}/tours`}
              className="inline-block rounded-lg border-2 border-gold px-8 py-4 text-lg font-bold text-gold transition-all hover:bg-gold hover:text-navy"
            >
              {c.hero.ctaTours}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="border-b border-gold/15 bg-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
          {(
            ["hours", "tickets", "location", "collection"] as const
          ).map((key) => (
            <div key={key} className="text-center">
              <p className="text-sm font-semibold uppercase text-gold">
                {c.quickInfo[key].label}
              </p>
              <p className="mt-1 text-sm text-charcoal">
                {c.quickInfo[key].value}
              </p>
              <p className="text-xs text-charcoal/50">
                {c.quickInfo[key].note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content wrapper */}
      <div className="mx-auto max-w-[720px] px-4 py-12">
        {/* Intro */}
        {c.intro.map((p, i) => (
          <p key={i} className="mb-6 text-lg leading-relaxed text-charcoal/85">
            {p}
          </p>
        ))}

        {/* Tickets Section */}
        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.ticketsSection.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.ticketsSection.p1}
        </p>

        <BookingCard
          type="tickets"
          title={c.ticketsSection.ctaTitle}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
          urgent
        />

        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.ticketsSection.p2}
        </p>

        <div className="my-6 text-center">
          <Link
            href={`/${locale}/tickets`}
            className="text-sm font-semibold text-burgundy underline decoration-burgundy/30 hover:text-burgundy/80"
          >
            {c.ticketsSection.link}
          </Link>
        </div>

        {/* GetYourGuide Tours Widget */}
        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.toursSection.h2}
        </h2>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {c.toursSection.p}
        </p>
      </div>

      {/* GetYourGuide Widget */}
      <section className="mx-auto max-w-[1200px] px-4 pb-12">
        <div 
          data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
          data-gyg-locale-code="en-US"
          data-gyg-widget="activities"
          data-gyg-number-of-items="4"
          data-gyg-cmp="visit_uffizi_home_page"
          data-gyg-partner-id="Z35Q282"
          data-gyg-tour-ids="914317,1142368,1151106,1170306"
        >
          <span>
            Powered by{" "}
            <a 
              target="_blank" 
              rel="sponsored noopener noreferrer" 
              href="https://www.getyourguide.com/florence-l32/"
            >
              GetYourGuide
            </a>
          </span>
        </div>
      </section>

      {/* Plan Your Visit */}
      <section className="border-y border-gold/15 bg-white py-12">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-navy">
            {c.planVisit.h2}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {c.planVisit.items.map((item, i) => (
              <Link
                key={i}
                href={visitLinks[i]}
                className="group rounded-lg border border-gold/15 bg-cream/50 p-5 transition-all hover:border-gold/30 hover:shadow-md"
              >
                <h3 className="font-bold text-navy group-hover:text-burgundy">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-charcoal/60">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Artwork Highlights */}
      <section className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-2 text-3xl font-bold text-navy">
            {c.artworks.h2}
          </h2>
          <p className="mb-8 text-charcoal/70">{c.artworks.p}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <ArtworkCard
            title="Birth of Venus"
            artist="Sandro Botticelli"
            room="Rooms 10-14"
            year="c. 1485"
            image="/images/birth-of-venus.jpg"
            href={`/${locale}/artists/sandro-botticelli`}
          />
          <ArtworkCard
            title="Primavera"
            artist="Sandro Botticelli"
            room="Rooms 10-14"
            year="c. 1482"
            image="/images/primavera.jpg"
            href={`/${locale}/artists/sandro-botticelli`}
          />
          <ArtworkCard
            title="Doni Tondo"
            artist="Michelangelo"
            room="Room 35"
            year="c. 1507"
            image="/images/doni-tondo.jpg"
            href={`/${locale}/artists/michelangelo`}
          />
          <ArtworkCard
            title="Medusa"
            artist="Caravaggio"
            room="Room 90"
            year="c. 1597"
            image="/images/medusa.jpg"
          />
        </div>
      </section>

      {/* Vasari Corridor Teaser */}
      <section className="bg-navy py-12">
        <div className="mx-auto max-w-[720px] px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            {c.vasari.tagline}
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white">
            {c.vasari.h2}
          </h2>
          <p className="mb-6 leading-relaxed text-white/80">{c.vasari.p}</p>
          <Link
            href={`/${locale}/vasari-corridor`}
            className="inline-block rounded-lg border-2 border-gold px-8 py-3 font-bold text-gold transition-all hover:bg-gold hover:text-navy"
          >
            {c.vasari.cta}
          </Link>
        </div>
      </section>

      {/* Extended Content */}
      <div className="mx-auto max-w-[720px] px-4 py-12">
        <h2 className="mb-4 text-3xl font-bold text-navy">
          {c.whyMatters.h2}
        </h2>
        {c.whyMatters.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-charcoal/85">
            {p}
          </p>
        ))}

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.beforeYouGo.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.beforeYouGo.paragraphs[0]}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.beforeYouGo.paragraphs[1]}
        </p>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.beforeYouGo.paragraphs[2]}
        </p>

        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.artistsSection.h2}
        </h2>
        <p className="mb-4 leading-relaxed text-charcoal/85">
          {c.artistsSection.p}
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-2">
          <li className="text-charcoal/85">
            <Link
              href={`/${locale}/artists/sandro-botticelli`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              Sandro Botticelli
            </Link>{" "}
            — Birth of Venus, Primavera (Rooms 10-14)
          </li>
          <li className="text-charcoal/85">
            <Link
              href={`/${locale}/artists/leonardo-da-vinci`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              Leonardo da Vinci
            </Link>{" "}
            — Annunciation, Adoration of the Magi (Room 35)
          </li>
          <li className="text-charcoal/85">
            <Link
              href={`/${locale}/artists/michelangelo`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              Michelangelo
            </Link>{" "}
            — Doni Tondo (Room 35)
          </li>
          <li className="text-charcoal/85">
            <Link
              href={`/${locale}/artists/raphael`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              Raphael
            </Link>{" "}
            — Madonna of the Goldfinch (Room 66)
          </li>
          <li className="text-charcoal/85">
            <Link
              href={`/${locale}/artists/titian`}
              className="font-medium text-burgundy hover:text-burgundy/80"
            >
              Titian
            </Link>{" "}
            — Venus of Urbino (Room 83)
          </li>
        </ul>
        <div className="text-center">
          <Link
            href={`/${locale}/artists`}
            className="text-sm font-semibold text-burgundy underline decoration-burgundy/30 hover:text-burgundy/80"
          >
            {c.artistsSection.link}
          </Link>
        </div>

        {/* Bottom CTA */}
        <BookingCard
          type="tickets"
          title={c.bottomCta}
          price="26"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
          urgent
        />

        {/* FAQ */}
        <FAQ items={c.faq} />
      </div>

      {/* GetYourGuide Widget */}
      <GetYourGuideWidget campaign="visit_uffizi_home_page_bottom" />
    </>
  );
}
