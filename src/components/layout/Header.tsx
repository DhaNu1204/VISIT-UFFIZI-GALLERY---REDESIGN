"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import MobileNav from "./MobileNav";

export default function Header() {
  const t = useTranslations("nav");
  const params = useParams();
  const locale = params.locale as string;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("tickets"), href: `/${locale}/tickets` },
    { label: t("tours"), href: `/${locale}/tours` },
    {
      label: t("visiting"),
      children: [
        {
          label: t("openingHours"),
          href: `/${locale}/uffizi-gallery-opening-hours`,
        },
        { label: t("visitorInfo"), href: `/${locale}/visitor-info` },
        { label: t("directions"), href: `/${locale}/directions` },
        { label: t("history"), href: `/${locale}/history` },
      ],
    },
    { label: t("artworks"), href: `/${locale}/artworks` },
    {
      label: t("artists"),
      children: [
        {
          label: "Botticelli",
          href: `/${locale}/artists/sandro-botticelli`,
        },
        {
          label: "Leonardo da Vinci",
          href: `/${locale}/artists/leonardo-da-vinci`,
        },
        { label: "Michelangelo", href: `/${locale}/artists/michelangelo` },
        { label: "Raphael", href: `/${locale}/artists/raphael` },
        { label: "Giotto", href: `/${locale}/artists/giotto` },
        { label: "Giorgio Vasari", href: `/${locale}/artists/giorgio-vasari` },
        { label: "Titian", href: `/${locale}/artists/titian` },
        { label: "Rembrandt", href: `/${locale}/artists/rembrandt` },
        { label: "Filippo Brunelleschi", href: `/${locale}/artists/filippo-brunelleschi` },
        { label: "Dante Alighieri", href: `/${locale}/artists/dante-alighieri` },
        { label: "Piero della Francesca", href: `/${locale}/artists/piero-della-francesca` },
      ],
    },
    {
      label: t("vasariCorridor"),
      href: `/${locale}/vasari-corridor`,
    },
    { label: t("blog"), href: `/${locale}/blog` },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/95 shadow-lg backdrop-blur-sm"
            : "bg-navy"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-xl font-bold tracking-tight text-white"
          >
            <span className="text-gold">Visit</span>Uffizi
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        items={navItems}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Spacer for fixed header */}
      <div className="h-[60px]" />
    </>
  );
}

type NavItemType = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

function NavItem({ item }: { item: NavItemType }) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-gold">
          {item.label}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path d="M3 5l3 3 3-3" />
          </svg>
        </button>

        {open && (
          <div className="absolute left-0 top-full pt-1">
            <div className="min-w-[200px] rounded-lg bg-white py-2 shadow-xl ring-1 ring-black/5">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-charcoal transition-colors hover:bg-cream hover:text-burgundy"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href!}
      className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-gold"
    >
      {item.label}
    </Link>
  );
}
