import { SITE_URL } from "@/lib/seo";

const locales = ["en", "it", "de", "es", "fr"];

type Props = {
  path?: string;
};

export default function Hreflang({ path = "" }: Props) {
  const pathSegment = path ? `/${path}` : "";

  return (
    <>
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${SITE_URL}/${locale}${pathSegment}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}/en${pathSegment}`}
      />
    </>
  );
}
