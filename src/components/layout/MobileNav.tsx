"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

type NavItemType = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

type Props = {
  items: NavItemType[];
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ items, isOpen, onClose }: Props) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[60px] z-40 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Menu panel */}
      <nav className="relative max-h-[calc(100vh-60px)] overflow-y-auto bg-navy">
        <div className="px-4 py-4">
          {items.map((item) => (
            <div key={item.label} className="border-b border-white/10">
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setExpandedItem(
                        expandedItem === item.label ? null : item.label
                      )
                    }
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-white/90"
                  >
                    {item.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform ${
                        expandedItem === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </button>
                  {expandedItem === item.label && (
                    <div className="pb-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 text-sm text-white/70 transition-colors hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href!}
                  onClick={onClose}
                  className="block py-3 text-base font-medium text-white/90 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Language switcher in mobile */}
          <div className="mt-4 sm:hidden">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}
