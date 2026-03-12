import { SITE_URL, SITE_NAME } from "@/lib/seo";

type Props = {
  title: string;
  description: string;
  locale: string;
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export default function MetaTags({
  title,
  description,
  locale,
  path = "",
  ogImage,
  type = "website",
  publishedTime,
  modifiedTime,
}: Props) {
  const canonicalUrl = `${SITE_URL}/${locale}${path ? `/${path}` : ""}`;
  const ogImageUrl = ogImage
    ? `${SITE_URL}${ogImage}`
    : `${SITE_URL}/images/og/default.jpg`;

  return (
    <>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale} />

      {/* Article metadata */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </>
  );
}
