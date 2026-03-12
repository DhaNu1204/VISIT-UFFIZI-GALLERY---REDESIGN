import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getLocalizedArtists } from "@/data/artists";
import { getArtistsPageContent } from "@/data/content/artists-page";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getArtistsPageContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/artists`,
    },
  };
}

export default async function ArtistsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getArtistsPageContent(locale);
  const localizedArtists = getLocalizedArtists(locale);

  return (
    <>
      <Hreflang path="artists" />
      <Breadcrumbs locale={locale} items={[{ label: c.breadcrumb }]} />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {c.h1}
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-charcoal/85">
          {c.intro}
        </p>
      </div>

      <section className="mx-auto max-w-[1200px] px-4 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {localizedArtists.map((artist) => (
            <Link
              key={artist.slug}
              href={`/${locale}/artists/${artist.slug}`}
              className="group overflow-hidden rounded-xl border border-gold/20 bg-white transition-all hover:border-gold/40 hover:shadow-lg"
            >
              <div className="h-3 bg-navy" />
              <div className="p-5">
                <h2 className="mb-1 text-lg font-bold text-navy group-hover:text-burgundy">
                  {artist.name}
                </h2>
                <p className="mb-2 text-xs font-semibold text-gold">
                  {artist.movement}
                </p>
                <p className="mb-3 text-sm text-charcoal/60">
                  {artist.ufficiRoom}
                </p>
                <ul className="space-y-1">
                  {artist.masterpieces.slice(0, 2).map((work) => (
                    <li
                      key={work}
                      className="flex items-start gap-2 text-xs text-charcoal/70"
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {work}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[720px] px-4 pb-12">
        <BookingCard
          type="tour"
          title={c.ctaTitle}
          price="49"
          duration="2 hours"
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
        />
      </div>
    </>
  );
}
