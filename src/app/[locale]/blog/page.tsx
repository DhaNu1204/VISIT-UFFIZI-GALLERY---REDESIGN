import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import BookingCard from "@/components/ui/BookingCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Hreflang from "@/components/seo/Hreflang";
import { getLocalizedBlogPosts } from "@/data/blog";
import { getBlogPageContent } from "@/data/content/blog-page";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = getBlogPageContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `https://visituffizi.com/${locale}/blog`,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getBlogPageContent(locale);
  const posts = getLocalizedBlogPosts(locale);

  return (
    <>
      <Hreflang path="blog" />
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group overflow-hidden rounded-xl border border-gold/20 bg-white transition-all hover:border-gold/40 hover:shadow-lg"
            >
              <div className="h-3 bg-burgundy" />
              <div className="p-5">
                <p className="mb-2 text-xs text-charcoal/50">
                  {post.readTime} {c.minRead} · {c.updated}{" "}
                  {new Date(post.updatedDate).toLocaleDateString(locale, {
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mb-2 text-lg font-bold text-navy group-hover:text-burgundy">
                  {post.h1}
                </h2>
                <p className="text-sm leading-relaxed text-charcoal/60">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[720px] px-4 pb-12">
        <BookingCard
          type="tickets"
          title={c.ctaHubTitle}
          price="26"
          duration="Full day"
          link="https://widgets.bokun.io/online-sales/b3f14469-0594-44c7-909d-81e89e845a68/experience/961802"
        />
      </div>
    </>
  );
}
