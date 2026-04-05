import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const quickLinks = [
  { href: "/", label: "Domov" },
  { href: "/preco-my", label: "Prečo my" },
  { href: "/ako-to-funguje", label: "Ako to funguje" },
  { href: "/kontakt", label: "Kontakt" },
];

const serviceLinks = [
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

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "#4190BD" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-0">
          {/* Rýchle odkazy */}
          <div className="lg:pr-8">
            <p className="text-base font-bold">Rýchle odkazy</p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white transition hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Služby */}
          <div className="lg:border-l lg:border-white/35 lg:px-8">
            <p className="text-base font-bold">Služby</p>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white transition hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informácie o firme & Cookies */}
          <div className="lg:border-l lg:border-white/35 lg:px-8">
            <p className="text-base font-bold">Informácie o firme</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/informacie-o-firme"
                  className="text-sm text-white transition hover:underline"
                >
                  Informácie o firme
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-base font-bold">Cookies &amp; OP</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-white transition hover:underline"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/obchodne-podmienky"
                  className="text-sm text-white transition hover:underline"
                >
                  Obchodné podmienky
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="lg:border-l lg:border-white/35 lg:pl-8">
            <p className="text-base font-bold">Kontakt</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:email.random@gmail.com"
                  className="inline-flex items-center gap-2.5 text-sm text-white transition hover:underline"
                >
                  <EnvelopeIcon
                    className="h-5 w-5 shrink-0 opacity-95"
                    aria-hidden
                  />
                  email.random@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+421904445380"
                  className="inline-flex items-center gap-2.5 text-sm text-white transition hover:underline"
                >
                  <PhoneIcon
                    className="h-5 w-5 shrink-0 opacity-95"
                    aria-hidden
                  />
                  +421 904 445 380
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/25 pt-6 text-center text-xs text-white/80">
          © {new Date().getFullYear()} p.Slany. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
}
