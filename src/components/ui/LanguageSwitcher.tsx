"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

const locales = [
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
];

function Flag({ code }: { code: string }) {
  const cls = "h-5 w-7 rounded-sm shadow-sm";

  switch (code) {
    case "en":
      return (
        <svg viewBox="0 0 640 480" className={cls}>
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path
            fill="#FFF"
            d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 302 82 480H0v-60l239-178L0 64V0z"
          />
          <path
            fill="#C8102E"
            d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
          />
          <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
          <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
        </svg>
      );
    case "it":
      return (
        <svg viewBox="0 0 640 480" className={cls}>
          <path fill="#009246" d="M0 0h213.3v480H0z" />
          <path fill="#FFF" d="M213.3 0h213.4v480H213.3z" />
          <path fill="#CE2B37" d="M426.7 0H640v480H426.7z" />
        </svg>
      );
    case "de":
      return (
        <svg viewBox="0 0 640 480" className={cls}>
          <path fill="#000" d="M0 0h640v160H0z" />
          <path fill="#DD0000" d="M0 160h640v160H0z" />
          <path fill="#FFCE00" d="M0 320h640v160H0z" />
        </svg>
      );
    case "es":
      return (
        <svg viewBox="0 0 640 480" className={cls}>
          <path fill="#AA151B" d="M0 0h640v480H0z" />
          <path fill="#F1BF00" d="M0 120h640v240H0z" />
        </svg>
      );
    case "fr":
      return (
        <svg viewBox="0 0 640 480" className={cls}>
          <path fill="#002395" d="M0 0h213.3v480H0z" />
          <path fill="#FFF" d="M213.3 0h213.4v480H213.3z" />
          <path fill="#ED2939" d="M426.7 0H640v480H426.7z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params.locale as string;

  const getLocalePath = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map(({ code, label }) => (
        <Link
          key={code}
          href={getLocalePath(code)}
          title={label}
          aria-label={label}
          className={`rounded transition-opacity ${
            code === currentLocale
              ? "opacity-100 ring-2 ring-gold ring-offset-1 ring-offset-navy"
              : "opacity-60 hover:opacity-100"
          }`}
        >
          <Flag code={code} />
        </Link>
      ))}
    </div>
  );
}
