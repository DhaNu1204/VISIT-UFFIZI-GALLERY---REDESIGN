// EXAMPLE: How to add AdSense to your blog post page
// This shows the recommended placement for ads in blog posts
// File: src/app/[locale]/blog/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import JsonLd from "@/components/seo/JsonLd";
import { InArticleAd, DisplayAd } from "@/components/ads"; // ← Add this import
import {
  getLocalizedBlogPosts,
  getLocalizedBlogPostBySlug,
  getAllBlogSlugs,
} from "@/data/blog";
import { getBlogPageContent } from "@/data/content/blog-page";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getLocalizedBlogPostBySlug(slug, locale);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getLocalizedBlogPostBySlug(slug, locale);
  if (!post) notFound();

  const c = getBlogPageContent(locale);

  // Related posts (exclude current, take 3)
  const related = getLocalizedBlogPosts(locale)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Hreflang path={`blog/${slug}`} />
      <JsonLd
        type="Article"
        data={{
          headline: post.h1,
          description: post.description,
          datePublished: post.publishedDate,
          dateModified: post.updatedDate,
        }}
      />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: c.breadcrumb, href: `/${locale}/blog` },
          { label: post.h1 },
        ]}
      />

      <div className="mx-auto max-w-[720px] px-4 py-8">
        <p className="mb-2 text-sm text-charcoal/50">
          {c.updated}{" "}
          {new Date(post.updatedDate).toLocaleDateString(locale, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          · {post.readTime} {c.minRead}
        </p>
        <h1 className="mb-6 text-4xl font-bold text-navy md:text-5xl">
          {post.h1}
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-charcoal/85">
          {post.description}
        </p>

        {/* Table of Contents */}
        <nav className="mb-10 rounded-lg border border-gold/20 bg-cream/50 p-5">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy">
            {c.inThisGuide}
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-sm">
            {post.sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="text-burgundy hover:text-burgundy/80"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ✨ AD PLACEMENT 1: After table of contents, before content */}
        <InArticleAd adSlot="YOUR_AD_SLOT_1" className="my-8" />

        {/* Content Sections */}
        {post.sections.map((section, i) => (
          <div key={i} id={`section-${i}`}>
            <h2 className="mb-4 mt-12 text-3xl font-bold text-navy">
              {section.heading}
            </h2>
            {section.content.split("\n\n").map((paragraph, j) => {
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p
                  key={j}
                  className="mb-4 leading-relaxed text-charcoal/85"
                >
                  {parts.map((part, k) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={k} className="font-semibold text-navy">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      <span key={k}>{part}</span>
                    )
                  )}
                </p>
              );
            })}
            
            {/* ✨ AD PLACEMENT 2: After every 2-3 sections */}
            {i > 0 && (i + 1) % 2 === 0 && (
              <InArticleAd adSlot="YOUR_AD_SLOT_2" className="my-8" />
            )}
          </div>
        ))}

        {/* ✨ AD PLACEMENT 3: Before CTA */}
        <DisplayAd 
          adSlot="YOUR_AD_SLOT_3" 
          adFormat="horizontal" 
          className="my-8" 
        />

        {/* CTA */}
        <BookingCard
          type="tickets"
          title={c.ctaDetailTitle}
          price="26"
          duration="Full day"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
        />

        {/* FAQ */}
        <FAQ items={post.faq} />

        {/* Related Posts */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-navy">
          {c.moreGuidesH2}
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/blog/${p.slug}`}
              className="group rounded-lg border border-gold/15 bg-white p-4 transition-all hover:border-gold/30 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-navy group-hover:text-burgundy">
                {p.h1}
              </h3>
              <p className="mt-1 text-xs text-charcoal/50">
                {p.readTime} {c.minRead}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

/* 
SUMMARY OF CHANGES:
1. Import ad components at the top
2. Add InArticleAd after table of contents
3. Add InArticleAd after every 2 sections
4. Add DisplayAd before the CTA booking card

REPLACE "YOUR_AD_SLOT_X" with actual ad slot IDs from your AdSense dashboard.
*/
