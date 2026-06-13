import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlossySurface } from "@/components/GlossySection";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import CookiePreferencesManager from "@/components/CookiePreferencesManager";

export const metadata = {
  title: "Cookies | p.Slany",
  description:
    "Informácie o používaní cookies na webe JVDCars – typy cookies, účel spracovania a možnosť správy súhlasu.",
};

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <GlossySurface className="flex-1 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-neutral-600">
            Cookies &amp; súkromie
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Zásady používania cookies
          </h1>
          <p className="mt-5 text-base leading-relaxed text-neutral-700 sm:text-lg">
            Táto stránka vysvetľuje, čo sú cookies, ako ich používame na webe
            JVDCars a ako môžete spravovať svoje preferencie. Firemné údaje
            prevádzkovateľa doplníme v sekcii{" "}
            <Link
              href="/informacie-o-firme"
              className="font-semibold text-[#2d6f94] underline underline-offset-4 transition hover:text-[#4190BD]"
            >
              Informácie o firme
            </Link>
            .
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-neutral-800">
            <section>
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Čo sú cookies?
              </h2>
              <p className="mt-3">
                Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom
                prehliadači pri návšteve webovej stránky. Pomáhajú webu
                zapamätať si vaše nastavenia, zabezpečiť jeho správne fungovanie
                alebo, s vaším súhlasom, analyzovať návštevnosť.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Aké cookies používame?
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <span className="font-semibold text-neutral-950">
                    Nevyhnutné cookies
                  </span>{" "}
                  – zabezpečujú základnú funkčnosť webu a uloženie vašich
                  volieb týkajúcich sa cookies. Bez nich by stránka nemusela
                  fungovať správne.
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">
                    Analytické cookies
                  </span>{" "}
                  – pomáhajú nám pochopiť, ako návštevníci používajú web, aby
                  sme mohli zlepšovať obsah a používateľský zážitok. Aktivujú
                  sa len s vaším súhlasom.
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">
                    Marketingové cookies
                  </span>{" "}
                  – umožňujú zobrazovať relevantnejší obsah a merať účinnosť
                  reklamných kampaní. Aktivujú sa len s vaším súhlasom.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Ako dlho cookies uchovávame?
              </h2>
              <p className="mt-3">
                Doba uchovávania závisí od typu cookie. Nevyhnutné cookies môžu
                byť relačné (odstránia sa po zatvorení prehliadača) alebo
                trvalé (zostávajú uložené po určitú dobu). Váš súhlas s
                voliteľnými cookies ukladáme v lokálnom úložisku prehliadača,
                kým ho nezmeníte alebo nevymažete.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Ako môžete cookies spravovať?
              </h2>
              <p className="mt-3">
                Svoj súhlas môžete kedykoľvek zmeniť priamo na tejto stránke
                alebo cez vyskakovacie okno cookies. Môžete tiež upraviť
                nastavenia vo svojom prehliadači a cookies manuálne vymazať.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Kontakt
              </h2>
              <p className="mt-3">
                Ak máte otázky týkajúce sa cookies alebo spracovania údajov,
                kontaktujte nás na{" "}
                <a
                  href="mailto:info@jvdcars.sk"
                  className="font-semibold text-[#2d6f94] underline underline-offset-4 transition hover:text-[#4190BD]"
                >
                  info@jvdcars.sk
                </a>{" "}
                alebo telefóne{" "}
                <a
                  href="tel:+421903286677"
                  className="font-semibold text-[#2d6f94] underline underline-offset-4 transition hover:text-[#4190BD]"
                >
                  +421 903 286 677
                </a>
                .
              </p>
            </section>
          </div>

          <div
            id="nastavenia-cookies"
            className="mt-14 scroll-mt-28 rounded-3xl border border-neutral-900/10 bg-white/70 p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] sm:p-8"
          >
            <h2 className="text-2xl font-bold text-neutral-950">
              Vaše nastavenia cookies
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
              Tu môžete upraviť, ktoré voliteľné cookies chcete povoliť.
            </p>
            <div className="mt-6">
              <CookiePreferencesManager />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <CookieSettingsButton className="text-sm font-semibold text-[#2d6f94] underline underline-offset-4 transition hover:text-[#4190BD]" />
            <Link
              href="/"
              className="text-sm font-semibold text-neutral-700 underline underline-offset-4 transition hover:text-neutral-950"
            >
              Späť na úvod
            </Link>
          </div>
        </div>
      </GlossySurface>

      <Footer />
    </div>
  );
}
