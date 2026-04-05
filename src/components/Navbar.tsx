"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DOVOZ_NEMECKO_PATH = "/sluzby/dovoz-aut-z-nemecka-a-zahranicia";
const KONTROLA_JAZDENYCH_PATH = "/sluzby/kontrola-jazdenych-aut-pred-kupou";

const services = [
  {
    href: "/sluzby/antikorozna-ochrana-vozidiel",
    label: "Antikorózna ochrana vozidiel",
  },
  {
    href: "/sluzby/dovoz-aut-z-nemecka-a-zahranicia",
    label: "Dovoz áut z Nemecka a zahraničia",
  },
  {
    href: "/sluzby/kontrola-jazdenych-aut-pred-kupou",
    label: "Kontrola jazdených áut pred kúpou",
  },
  {
    href: "/sluzby/preprava-a-odtah-vozidiel",
    label: "Preprava a odťah vozidiel",
  },
];

type NavbarProps = {
  transparent?: boolean;
  /** Home: Domov, Služby, Kontakt only. Other pages: full links. */
  variant?: "home" | "full";
};

export default function Navbar({
  transparent = false,
  variant = "full",
}: NavbarProps) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = variant === "home";
  const isDovozNemeckoPage = pathname === DOVOZ_NEMECKO_PATH;
  const isKontrolaJazdenychPage = pathname === KONTROLA_JAZDENYCH_PATH;

  function scrollToPrecoMy(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isDovozNemeckoPage) {
      e.preventDefault();
      document
        .getElementById("nase-skusenosti")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (isKontrolaJazdenychPage) {
      e.preventDefault();
      document
        .getElementById("preco-skontrolovat")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function scrollToAkoToFunguje(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isDovozNemeckoPage) {
      e.preventDefault();
      document
        .getElementById("ako-to-funguje")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (isKontrolaJazdenychPage) {
      e.preventDefault();
      document
        .getElementById("ako-kontrola-prebieha")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function scrollToKontaktSekcia(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!isDovozNemeckoPage && !isKontrolaJazdenychPage) return;
    e.preventDefault();
    document
      .getElementById("kontakt")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const baseClass = transparent
    ? "absolute top-0 left-0 w-full z-50"
    : "relative w-full z-50 bg-slate-900";

  return (
    <header
      className={`${baseClass} [font-family:var(--font-alexandria),system-ui,sans-serif]`}
    >
      <nav className="mx-auto relative flex max-w-6xl items-center justify-center px-6 py-5 lg:px-10">
        {/* Desktop links (centered) */}
        <div
          className={`hidden items-center font-medium text-white md:flex ${
            isHome ? "gap-12 text-base lg:text-lg" : "gap-10 text-sm"
          }`}
        >
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
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""} ${isHome ? "h-5 w-5" : "h-4 w-4"}`}
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
              <div className="absolute left-1/2 top-full mt-2 w-[min(100vw-2rem,22rem)] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-xl border border-white/20 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-sm sm:w-96">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`block rounded-lg px-4 py-2.5 transition hover:bg-white/10 ${isHome ? "text-base" : "text-sm"}`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {!isHome && (
            <>
              <Link
                href={
                  isDovozNemeckoPage
                    ? "#nase-skusenosti"
                    : isKontrolaJazdenychPage
                      ? "#preco-skontrolovat"
                      : "/preco-my"
                }
                onClick={scrollToPrecoMy}
                className="transition hover:text-[#4190BD]"
              >
                Prečo my
              </Link>

              <Link
                href={
                  isDovozNemeckoPage
                    ? "#ako-to-funguje"
                    : isKontrolaJazdenychPage
                      ? "#ako-kontrola-prebieha"
                      : "/ako-to-funguje"
                }
                onClick={scrollToAkoToFunguje}
                className="transition hover:text-[#4190BD]"
              >
                Ako to funguje
              </Link>
            </>
          )}

          <Link
            href={
              isDovozNemeckoPage || isKontrolaJazdenychPage
                ? "#kontakt"
                : "/kontakt"
            }
            onClick={scrollToKontaktSekcia}
            className="transition hover:text-[#4190BD]"
          >
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
          <div
            className={
              isHome ? "h-px w-full bg-white/25" : "h-[2px] w-full bg-white/30"
            }
          />
        </div>
      )}

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-900 px-6 py-4 md:hidden">
          <Link
            href="/"
            className={`block py-2 font-medium text-white hover:text-[#4190BD] ${isHome ? "text-base" : "text-sm"}`}
            onClick={() => setMobileOpen(false)}
          >
            Domov
          </Link>
          <div className="mt-2">
            <p
              className={`mb-1 font-semibold uppercase tracking-wider text-white/40 ${isHome ? "text-sm" : "text-xs"}`}
            >
              Služby
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`block py-2 pl-3 text-white hover:text-[#4190BD] ${isHome ? "text-base" : "text-sm"}`}
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </div>
          {!isHome && (
            <>
              <Link
                href={
                  isDovozNemeckoPage
                    ? "#nase-skusenosti"
                    : isKontrolaJazdenychPage
                      ? "#preco-skontrolovat"
                      : "/preco-my"
                }
                className={`mt-3 block py-2 font-medium text-white hover:text-[#4190BD] ${isHome ? "text-base" : "text-sm"}`}
                onClick={(e) => {
                  scrollToPrecoMy(e);
                  setMobileOpen(false);
                }}
              >
                Prečo my
              </Link>
              <Link
                href={
                  isDovozNemeckoPage
                    ? "#ako-to-funguje"
                    : isKontrolaJazdenychPage
                      ? "#ako-kontrola-prebieha"
                      : "/ako-to-funguje"
                }
                className={`block py-2 font-medium text-white hover:text-[#4190BD] ${isHome ? "text-base" : "text-sm"}`}
                onClick={(e) => {
                  scrollToAkoToFunguje(e);
                  setMobileOpen(false);
                }}
              >
                Ako to funguje
              </Link>
            </>
          )}
          <Link
            href={
              isDovozNemeckoPage || isKontrolaJazdenychPage
                ? "#kontakt"
                : "/kontakt"
            }
            className={`block py-2 font-medium text-white hover:text-[#4190BD] ${isHome ? "mt-3 text-base" : "mt-2 text-sm"}`}
            onClick={(e) => {
              scrollToKontaktSekcia(e);
              setMobileOpen(false);
            }}
          >
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}
