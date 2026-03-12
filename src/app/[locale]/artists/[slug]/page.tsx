import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import ArtistInfoBox from "@/components/ui/ArtistInfoBox";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import JsonLd from "@/components/seo/JsonLd";
import { getLocalizedArtists, getLocalizedArtistBySlug, getAllArtistSlugs } from "@/data/artists";
import { getArtistsPageContent } from "@/data/content/artists-page";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  const slugs = getAllArtistSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const artist = getLocalizedArtistBySlug(slug, locale);
  if (!artist) return {};

  return {
    title: artist.title,
    description: artist.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/artists/${slug}`,
    },
  };
}

export default async function ArtistPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const artist = getLocalizedArtistBySlug(slug, locale);
  if (!artist) notFound();

  const c = getArtistsPageContent(locale);

  // Find related artists (exclude current)
  const related = getLocalizedArtists(locale)
    .filter((a) => a.slug !== slug)
    .slice(0, 4);

  return (
    <>
      <Hreflang path={`artists/${slug}`} />
      <JsonLd
        type="Person"
        data={{
          name: artist.name,
          born: artist.born,
          died: artist.died,
          description: artist.description,
        }}
      />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: c.artistsBreadcrumb, href: `/${locale}/artists` },
          { label: artist.name },
        ]}
      />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
          {artist.movement}
        </p>
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {artist.h1}
        </h1>

        {/* Intro */}
        <p className="mb-6 text-lg leading-relaxed text-charcoal/85">
          {artist.intro}
        </p>

        {/* Artist Info Box */}
        <ArtistInfoBox
          name={artist.name}
          born={artist.born}
          died={artist.died}
          movement={artist.movement}
          ufficiRoom={artist.ufficiRoom}
          masterpieces={artist.masterpieces}
        />

        {/* At the Uffizi */}
        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {artist.name}{c.atTheUffiziH2Suffix}
        </h2>
        {artist.atTheUffizi.split("\n\n").map((paragraph, i) => (
          <p key={i} className="mb-4 leading-relaxed text-charcoal/85">
            {paragraph}
          </p>
        ))}

        {/* Biography */}
        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.biographyH2}
        </h2>
        {artist.biography.split("\n\n").map((paragraph, i) => (
          <p key={i} className="mb-4 leading-relaxed text-charcoal/85">
            {paragraph}
          </p>
        ))}

        {/* Legacy */}
        <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
          {c.legacyH2}
        </h2>
        <p className="mb-6 leading-relaxed text-charcoal/85">
          {artist.legacy}
        </p>

        {/* CTA */}
        <BookingCard
          type="tour"
          title={`${c.ctaDetailPrefix}${artist.name}${c.ctaDetailSuffix}`}
          price="49"
          duration="2 hours"
          includes="Skip-the-line entry, licensed art historian"
          link="https://www.getyourguide.com/florence-l32/florence-uffizi-gallery-guided-tour-with-vasari-corridor-t1142368/?partner_id=Z35Q282&utm_medium=online_publisher&cmp=visit_uffizi_tour_page"
        />

        {/* FAQ */}
        <FAQ items={artist.faq} />

        {/* Related Artists */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-navy">
          {c.moreArtistsH2}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {related.map((a) => (
            <Link
              key={a.slug}
              href={`/${locale}/artists/${a.slug}`}
              className="group rounded-lg border border-gold/15 bg-white p-4 transition-all hover:border-gold/30 hover:shadow-md"
            >
              <h3 className="font-semibold text-navy group-hover:text-burgundy">
                {a.name}
              </h3>
              <p className="mt-1 text-xs text-charcoal/50">
                {a.ufficiRoom}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
