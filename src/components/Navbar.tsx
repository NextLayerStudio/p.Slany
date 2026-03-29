"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    href: "/sluzby/dovoz-aut-z-nemecka-a-zahranicia",
    label: "Dovoz áut z Nemecka a zahraničia",
  },
  {
    href: "/sluzby/kontrola-jazdenych-aut-pred-kupou",
    label: "Kontrola jazdených áut pred kúpou",
  },
  {
    href: "/sluzby/sprostredkovanie-predaja-vozidiel",
    label: "Sprostredkovanie predaja vozidiel",
  },
  {
    href: "/sluzby/odtahova-sluzba",
    label: "Odťahová služba",
  },
];

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const baseClass = transparent
    ? "absolute top-0 left-0 w-full z-50"
    : "relative w-full z-50 bg-slate-900";

  return (
    <header className={baseClass}>
      <nav className="mx-auto relative flex max-w-6xl items-center justify-center px-6 py-5 lg:px-10">
        {/* Desktop links (centered) */}
        <div className="hidden items-center gap-10 text-sm font-medium text-white md:flex">
          <Link href="/" className="transition hover:text-[#4190BD]">
            Domov
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="inline-flex items-center gap-1 transition hover:text-[#4190BD]"
            >
              Služby
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 rounded-xl border border-white/20 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-sm">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-lg px-4 py-2.5 text-sm transition hover:bg-white/10"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/preco-my" className="transition hover:text-[#4190BD]">
            Prečo my
          </Link>

          <Link href="/ako-to-funguje" className="transition hover:text-[#4190BD]">
            Ako to funguje
          </Link>

          <Link href="/kontakt" className="transition hover:text-[#4190BD]">
            Kontakt
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="absolute right-6 text-white md:hidden"
          aria-label="Otvoriť menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Skinny divider "just under links" */}
      {transparent && (
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="h-[2px] w-full bg-white/30" />
        </div>
      )}

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-900 px-6 py-4 md:hidden">
          <Link
            href="/"
            className="block py-2 text-sm font-medium text-white hover:text-[#4190BD]"
            onClick={() => setMobileOpen(false)}
          >
            Domov
          </Link>
          <div className="mt-2">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/40">
              Služby
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block py-2 pl-3 text-sm text-white hover:text-[#4190BD]"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </div>
          <Link
            href="/preco-my"
            className="mt-3 block py-2 text-sm font-medium text-white hover:text-[#4190BD]"
            onClick={() => setMobileOpen(false)}
          >
            Prečo my
          </Link>
          <Link
            href="/ako-to-funguje"
            className="block py-2 text-sm font-medium text-white hover:text-[#4190BD]"
            onClick={() => setMobileOpen(false)}
          >
            Ako to funguje
          </Link>
          <Link
            href="/kontakt"
            className="mt-2 block py-2 text-sm font-medium text-white hover:text-[#4190BD]"
            onClick={() => setMobileOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}
