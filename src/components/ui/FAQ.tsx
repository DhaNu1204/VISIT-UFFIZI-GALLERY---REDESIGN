"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

type Props = {
  items: FAQItem[];
  title?: string;
};

export default function FAQ({ items, title = "Frequently Asked Questions" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQPage JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="my-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h2 className="mb-6 text-2xl font-bold text-navy">{title}</h2>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gold/15 bg-white"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="pr-4 font-semibold text-navy">{item.q}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`shrink-0 text-gold transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path d="M5 8l5 5 5-5" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="border-t border-gold/10 px-6 py-4 text-sm leading-relaxed text-charcoal/80">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
