import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

type Props = {
  locale: string;
};

export default function Footer({ locale }: Props) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: t("quickLinks"),
      links: [
        { label: nav("tickets"), href: `/${locale}/tickets` },
        { label: nav("tours"), href: `/${locale}/tours` },
        { label: nav("artworks"), href: `/${locale}/artworks` },
        { label: nav("artists"), href: `/${locale}/artists` },
        { label: nav("blog"), href: `/${locale}/blog` },
      ],
    },
    {
      title: t("visitInfo"),
      links: [
        {
          label: nav("openingHours"),
          href: `/${locale}/uffizi-gallery-opening-hours`,
        },
        { label: nav("visitorInfo"), href: `/${locale}/visitor-info` },
        { label: nav("directions"), href: `/${locale}/directions` },
        {
          label: nav("vasariCorridor"),
          href: `/${locale}/vasari-corridor`,
        },
        { label: nav("history"), href: `/${locale}/history` },
      ],
    },
    {
      title: t("about"),
      links: [
        { label: nav("skipTheLine"), href: `/${locale}/tickets/skip-the-line` },
        { label: nav("guidedTour"), href: `/${locale}/tours/guided-tour` },
        { label: nav("privateTour"), href: `/${locale}/tours/private-tour` },
        {
          label: nav("comboTour"),
          href: `/${locale}/tours/uffizi-accademia-tour`,
        },
      ],
    },
    {
      title: t("legal"),
      links: [
        { label: t("privacy"), href: `/${locale}/privacy` },
        { label: t("terms"), href: `/${locale}/terms` },
        { label: t("cookies"), href: `/${locale}/cookies` },
      ],
    },
  ];

  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-xs text-white/40">
              {t("copyright", { year: currentYear })}
            </p>
            <p className="max-w-md text-center text-xs text-white/30 md:text-left">
              {t("affiliate")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
