import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

/** Labels for the homepage “bubbles” (right column under banner). */
const serviceBubbleLinks = [
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
] as const;

export default function Home() {
  return (
    <>
      {/* Page-wide fixed banner background (visible through transparent sections). */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner_background_2.jpg')",
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden text-white">
        <Navbar transparent variant="home" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 pb-24 pt-32 lg:px-10">
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Dovoz a preprava vozidiel
            <br />
            bez starostí
          </h1>

          <p className="mt-5 max-w-2xl text-xl text-zinc-200">
            Kontrola áut, odťahová služba, preprava vozidiel aj sprostredkovanie
            predaja – všetko na jednom mieste.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-flex min-w-44 items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-lg font-medium transition hover:bg-white hover:text-slate-900"
          >
            Kontakt
          </Link>
        </div>
      </section>

      {/* ── NAŠE SLUŽBY (pod bannerom) ───────────────────────────────────────── */}
      <section
        className="py-16 text-white sm:py-20 lg:py-24"
        style={{ backgroundColor: "#4190BD" }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Naše služby
              </h2>
              <div className="mt-6 border-l-2 border-white pl-6">
                <p className="max-w-xl text-base leading-relaxed text-white sm:text-lg">
                  Špecializujeme sa na dovoz vozidiel zo zahraničia, najmä z
                  Nemecka a EÚ, spoľahlivú prepravu áut, odbornú kontrolu
                  vozidiel pred kúpou a profesionálne sprostredkovanie predaja
                  vozidiel. S nami získate bezpečný servis, férový prístup a
                  maximálnu istotu pri kúpe aj prevoze auta. Postaráme sa o celý
                  proces – vy už len jazdíte.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {serviceBubbleLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-[3.25rem] items-center justify-center rounded-full border-2 border-white px-6 py-3 text-center text-base font-medium text-white transition hover:bg-white/15"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dovoz áut – dlhá sekcia (rovnaký obrázok ako banner) ─────────────── */}
      <section className="relative overflow-hidden text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/banner_background_2.jpg')",
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-10 lg:py-32">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Dovoz áut z Nemecka a zahraničia
          </h2>

          <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="border-l-2 border-white pl-6">
              <p className="text-xl font-semibold leading-snug sm:text-2xl">
                Priviezť kvalitné auto zo zahraničia nebolo nikdy jednoduchšie
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                Špecializujeme sa na kompletný dovoz jazdených aj nových
                vozidiel z Nemecka a celej EÚ. Vďaka dlhoročným skúsenostiam,
                kontaktom a overeným postupom vám garantujeme bezpečný nákup
                bez rizík, chýb či zbytočných nákladov.
              </p>
              <Link
                href="/sluzby/dovoz-aut-z-nemecka-a-zahranicia"
                className="mt-6 inline-block text-base font-medium underline underline-offset-4 transition hover:text-white/80"
              >
                Viac informácií
              </Link>
            </div>

            <div className="flex justify-start lg:justify-end lg:pt-2">
              <Link
                href="/ako-to-funguje"
                className="inline-flex min-w-[12rem] items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-center text-base font-semibold transition hover:bg-white/15"
              >
                Ako to funguje?
              </Link>
            </div>
          </div>

          <h3 className="mt-16 max-w-3xl text-2xl font-bold leading-snug sm:mt-20 sm:text-3xl lg:mt-24">
            Kompletný servis pri dovoze vozidiel zo zahraničia
          </h3>

          {/* Odťahová služba – rovnaká sekcia, pod dovozom */}
          <div className="mt-20 sm:mt-24">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Odťahová služba a preprava vozidiel
            </h2>

            <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div>
                <div className="border-l-2 border-white pl-6">
                  <p className="max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                    Potrebujete bezpečne a spoľahlivo odviezť vozidlo doma alebo
                    v zahraničí?
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                    Ponúkame profesionálnu odťahovú službu a prepravu áut po
                    celom Slovensku aj celej Európe.
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                    Rýchlo, bezpečne, nonstop a za férové ceny.
                  </p>
                  <Link
                    href="/sluzby/preprava-a-odtah-vozidiel"
                    className="mt-6 inline-block text-base font-medium underline underline-offset-4 transition hover:text-white/80"
                  >
                    Viac informácií
                  </Link>
                </div>

                <div className="mt-8 flex flex-col gap-4 pl-6 sm:pl-8">
                  <a
                    href="mailto:email.random@gmail.com"
                    className="inline-flex items-center gap-3 text-base text-white transition hover:text-white/85"
                  >
                    <EnvelopeIcon className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
                    email.random@gmail.com
                  </a>
                  <a
                    href="tel:+421904445380"
                    className="inline-flex items-center gap-3 text-base text-white transition hover:text-white/85"
                  >
                    <PhoneIcon className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
                    +421 904 445 380
                  </a>
                </div>
              </div>

              <div className="flex justify-start lg:justify-end lg:pt-2">
                <Link
                  href="/sluzby/preprava-a-odtah-vozidiel"
                  className="inline-flex max-w-xs items-center justify-center rounded-xl border-2 border-white px-6 py-5 text-center text-base font-semibold leading-snug transition hover:bg-white/15 sm:max-w-sm"
                >
                  Prečo si vybrať našu odťahovú službu?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontrola jazdených áut pred kúpou ─────────────────────────────────── */}
      <section
        className="py-16 text-white sm:py-20 lg:py-24"
        style={{ backgroundColor: "#4190BD" }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Kontrola jazdených áut pred kúpou
          </h2>

          <div className="mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="border-l-2 border-white pl-6">
              <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
                Kúpa jazdeného auta je veľkým rozhodnutím. Mnohé vozidlá vyzerajú
                na prvý pohľad výborne, no skrývajú chyby, stočené kilometre
                alebo zanedbanú údržbu.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
                Naša služba profesionálnej kontroly auta pred kúpou vám pomôže
                vyhnúť sa zbytočnému sklamaniu aj finančným stratám.
              </p>
              <Link
                href="/sluzby/kontrola-jazdenych-aut-pred-kupou"
                className="mt-6 inline-block text-base font-medium underline underline-offset-4 transition hover:text-white/90"
              >
                Viac informácií
              </Link>
            </div>

            <div className="flex justify-start lg:justify-end lg:pt-1">
              <Link
                href="/sluzby/kontrola-jazdenych-aut-pred-kupou"
                className="inline-flex min-w-[12rem] max-w-xs items-center justify-center rounded-xl border-2 border-white px-6 py-4 text-center text-base font-bold text-white transition hover:bg-white/15 sm:max-w-sm"
              >
                Ako kontrola prebieha
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sprostredkovanie predaja – dlhá sekcia (banner + modrá „bublina“) ── */}
      <section className="relative overflow-hidden text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/banner_background_2.jpg')",
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-10 lg:py-32">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Sprostredkovanie predaja vozidiel
          </h2>

          <div className="mt-10 border-l-2 border-white pl-6 sm:mt-12">
            <p className="max-w-3xl text-base leading-relaxed text-white/95 sm:text-lg">
              Chcete predať svoje vozidlo, ale nechcete sa zaoberať neustálymi
              telefonátmi, zjednávaním či papierovaním? Nechajte to na nás.
              Poskytujeme kompletnú službu sprostredkovania predaja, vďaka ktorej
              ušetríte čas, nervy a získate najlepšiu možnú cenu.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-block text-base font-medium underline underline-offset-4 transition hover:text-white/85"
            >
              Viac informácií
            </Link>
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <a
              href="#zabezpecime"
              className="inline-flex min-w-[12rem] items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white/15"
            >
              Čo zabezpečíme
            </a>
          </div>

          <div
            id="zabezpecime"
            className="mt-12 rounded-[2rem] px-6 py-8 sm:mt-16 sm:px-10 sm:py-10"
            style={{ backgroundColor: "#4190BD" }}
          >
            <p className="text-lg font-medium text-white sm:text-xl">
              Zabezpečíme:
            </p>
            <div className="my-5 h-px w-full bg-white/70" />
            <ul className="grid gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4 lg:gap-6">
              <li className="font-bold leading-snug text-white">
                Odborné ocenenie vozidla
              </li>
              <li className="font-bold leading-snug text-white">
                Kompletná komunikácia s kupujúcimi
              </li>
              <li className="font-bold leading-snug text-white">
                Bezpečný priebeh predaja
              </li>
              <li className="font-bold leading-snug text-white">
                Pomoc s prepisom vozidla
              </li>
            </ul>
            <div className="mt-8 h-px w-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* ── KONTAKTUJTE NÁS ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,20,40,0.32), rgba(8,20,40,0.32)), url('/ConntactMenu_background.jpg')",
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-white drop-shadow-sm sm:text-4xl">
                Kontaktujte nás
              </h2>
              <p className="mt-3 text-base font-medium text-white/95 drop-shadow-sm">
                Napíšte nám a ozveme sa vám čo najskôr.
              </p>

              <form className="mt-8 space-y-4" action="#" method="POST">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Meno"
                    className="w-full rounded-xl border border-white/35 bg-white/15 px-4 py-3 text-sm text-white placeholder-white/70 outline-none backdrop-blur-sm transition focus:border-white/60 focus:ring-1 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full rounded-xl border border-white/35 bg-white/15 px-4 py-3 text-sm text-white placeholder-white/70 outline-none backdrop-blur-sm transition focus:border-white/60 focus:ring-1 focus:ring-white/50"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Telefónne číslo"
                  className="w-full rounded-xl border border-white/35 bg-white/15 px-4 py-3 text-sm text-white placeholder-white/70 outline-none backdrop-blur-sm transition focus:border-white/60 focus:ring-1 focus:ring-white/50"
                />
                <textarea
                  rows={5}
                  placeholder="Správa"
                  className="w-full rounded-xl border border-white/35 bg-white/15 px-4 py-3 text-sm text-white placeholder-white/70 outline-none backdrop-blur-sm transition focus:border-white/60 focus:ring-1 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-400"
                >
                  Odoslať správu
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="flex flex-col justify-center gap-8 lg:pl-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white drop-shadow-sm">
                  Telefón
                </p>
                <a
                  href="tel:+421900000000"
                  className="mt-1 block text-xl font-semibold text-white drop-shadow-sm transition hover:text-sky-300"
                >
                  +421 900 000 000
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white drop-shadow-sm">
                  E-mail
                </p>
                <a
                  href="mailto:info@pslany.sk"
                  className="mt-1 block text-xl font-semibold text-white drop-shadow-sm transition hover:text-sky-300"
                >
                  info@pslany.sk
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white drop-shadow-sm">
                  Pracovná doba
                </p>
                <p className="mt-1 text-white/95 drop-shadow-sm">
                  Pondelok – Piatok: 8:00 – 18:00
                </p>
                <p className="text-white/95 drop-shadow-sm">Sobota: 9:00 – 13:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
