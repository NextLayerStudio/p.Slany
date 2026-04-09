import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DovozStep5Accordion from "@/components/DovozStep5Accordion";

export const metadata = {
  title: "Dovoz áut z Nemecka a zahraničia | p.Slany",
  description:
    "Spoľahlivý dovoz vozidiel z Nemecka a EÚ – výber, doprava a administratíva bez starostí.",
};

export default function DovozNemeckoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative min-h-screen overflow-hidden text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner_background_2.jpg')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/22 via-black/18 to-black/28"
        />

        <Navbar transparent variant="full" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start px-6 pb-8 pt-32 sm:pb-10 lg:px-10">
          <div className="mt-20 sm:mt-28 lg:mt-36">
            <h1
              className="whitespace-normal font-bold leading-tight tracking-tight text-white text-[clamp(1.05rem,4.2vw+0.35rem,3.75rem)] max-sm:text-[clamp(2rem,8vw+1rem,2.85rem)] sm:whitespace-nowrap"
              style={{
                textShadow:
                  "0 0 28px rgba(255,255,255,0.35), 0 2px 18px rgba(0,0,0,0.65)",
              }}
            >
              Dovoz áut z Nemecka a zahraničia
            </h1>
            <p className="mt-4 max-w-3xl text-xl font-semibold leading-snug text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] sm:text-2xl">
              – spoľahlivo, profesionálne a bez starostí
            </p>
          </div>

          <div className="flex w-full flex-1 flex-col justify-end pt-12 sm:pt-16">
            <div
              className="max-w-2xl border-l-2 border-white pl-6 [font-family:var(--font-alexandria),system-ui,sans-serif]"
            >
              <p className="text-xl font-bold leading-snug text-white drop-shadow-sm sm:text-2xl lg:text-3xl">
                Priviezť kvalitné auto zo zahraničia
                <br />
                nebolo nikdy jednoduchšie
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/95 drop-shadow-sm sm:mt-6 sm:text-lg">
                Špecializujeme sa na kompletný dovoz jazdených aj nových vozidiel z
                Nemecka a celej EÚ. Vďaka dlhoročným skúsenostiam, kontaktom a
                overeným postupom vám garantujeme bezpečný nákup bez rizík, chýb
                či zbytočných nákladov.
              </p>
            </div>

            <Link
              href="#kontakt"
              className="mt-10 inline-flex w-fit items-center justify-center self-start rounded-full border-2 border-white px-5 py-3 text-base font-medium text-white transition hover:bg-white hover:text-slate-900 sm:px-6 sm:text-lg"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-16 text-white sm:py-20 lg:py-24"
        style={{ backgroundColor: "#4190BD" }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Kompletný servis pri dovoze vozidiel zo zahraničia
          </h2>

          <div className="mt-8 max-w-3xl border-l-2 border-white pl-6 sm:mt-10 sm:pl-8">
            <h3 className="text-lg font-bold leading-snug sm:text-xl lg:text-2xl">
              Vyhľadanie vozidla
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white sm:text-lg">
              podľa Vašich predstáv (motorizácia, farba, výbava, cena). Ak si nie
              ste istí výberom, radi poradíme.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white sm:text-lg">
              Ak už máte auto vyhliadnuté, stačí nám preposlať odkaz a postaráme sa
              o zvyšok.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white sm:text-lg">
              <span className="font-bold">Komunikujeme priamo s predajcami</span>
              , aby sme získali presné informácie.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 sm:mt-14">
            <Link
              href="/sluzby"
              className="inline-flex rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Späť na služby
            </Link>
            <Link
              href="#ako-to-funguje"
              className="inline-flex rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Ako to funguje
            </Link>
          </div>
        </div>
      </section>

      {/* Ako to funguje – kroky (rovnaký obrázok ako banner) */}
      <section
        id="ako-to-funguje"
        className="relative scroll-mt-24 overflow-hidden text-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner_background_2.jpg')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/60"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ako to funguje?
          </h2>

          <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
            {/* Ľavý stĺpec */}
            <div className="flex flex-col gap-14 lg:gap-16">
              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  <span className="text-3xl sm:text-4xl">1.</span> Kontaktujte nás
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-lg">
                  Máte konkrétnu predstavu o vozidle? Pošlite nám popis auta alebo
                  odkaz na inzerát, o ktorý máte záujem.
                </p>
                <Link
                  href="#kontakt"
                  className="mt-5 inline-flex rounded-lg bg-zinc-200 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-white"
                >
                  Kontakt
                </Link>
              </div>

              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  <span className="text-3xl sm:text-4xl">2.</span> Vypracovanie ponuky
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-lg">
                  Na základe vašich požiadaviek vám bezplatne pripravíme cenovú
                  ponuku na mieru, ktorá zahŕňa kúpu vozidla, jeho dovoz aj
                  prihlásenie na Slovensku.
                </p>
              </div>

              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  <span className="text-3xl sm:text-4xl">3.</span> Preverenie vozidla
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-lg">
                  Po odsúhlasení ponuky preveríme dostupnosť vozidla, jeho technický
                  stav aj históriu. Ak je všetko v poriadku, auto pre vás
                  rezervujeme.
                </p>
              </div>
            </div>

            {/* Pravý stĺpec */}
            <div className="flex flex-col gap-14 lg:gap-16">
              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  <span className="text-3xl sm:text-4xl">4.</span> Podpis zmluvy a platba
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-lg">
                  Po vašom rozhodnutí o kúpe podpíšeme zmluvu o obstaraní vozidla.
                  Následne vystavíme zálohovú faktúru vo výške 10 % z ceny (alebo
                  podľa výšky akontácie). Zvyšnú sumu uhradíte až tesne pred
                  odovzdaním vozidla na Slovensku alebo za auto zaplatíte priamo
                  predajcovi, aby bola záruka vystavená na Vaše meno.
                </p>
              </div>

              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  <span className="text-3xl sm:text-4xl">5.</span> Kúpa, kontrola a dovoz
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-lg">
                  Zabezpečíme obhliadku vozidla na mieste, technickú kontrolu a
                  dokumentáciu. Nákup realizujeme podľa vašich pokynov; priebeh s
                  vami priebežne konzultujeme online, kým je auto pripravené na
                  prepravu na Slovensko.
                </p>
                <DovozStep5Accordion />
              </div>

              <div className="border-l-2 border-white pl-6 sm:pl-8">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  <span className="text-3xl sm:text-4xl">6.</span> Prihlásenie vozidla
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-lg">
                  Po dovoze zabezpečíme kompletný proces registrácie – od kontroly
                  originality až po vydanie EČV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="nase-skusenosti"
        className="scroll-mt-24 py-16 text-white sm:py-20 lg:py-24"
        style={{ backgroundColor: "#4190BD" }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Naše skúsenosti – vaša istota
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-lg">
            Dovoz áut zo zahraničia je výhodný, no môže byť rizikový. S nami
            získate partnera, ktorý pozná trh, vie sa vyhnúť nepoctivým predajcom a
            zabezpečí pre vás vozidlo v najlepšom možnom stave.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed sm:text-lg">
            Naším cieľom je, aby ste svoje nové auto kupovali s istotou, nie s
            obavami.
          </p>

          <div className="mt-10 max-w-3xl border-l-2 border-white pl-6 sm:mt-12 sm:pl-8">
            <div className="space-y-8 sm:space-y-10">
              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Dovoz a registrácia vozidla na Slovensku
                </h3>
                <p className="mt-3 text-base leading-relaxed sm:text-lg">
                  Po príchode vozidla na Slovensko zabezpečíme kompletnú{" "}
                  <span className="font-bold">
                    kontrolu originality (KO), STK a EK.
                  </span>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">Vybavenie dokladov</h3>
                <p className="mt-3 text-base leading-relaxed sm:text-lg">
                  Pripravíme všetky potrebné dokumenty – preklady, technický
                  preukaz aj recyklačný poplatok – na základe vášho splnomocnenia.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">Doručenie vozidla</h3>
                <p className="mt-3 text-base leading-relaxed sm:text-lg">
                  auto vám dovezieme priamo domov alebo ho zdarma uskladníme, kým
                  obdržíte ŠPZ.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">Posledný krok</h3>
                <p className="mt-3 text-base leading-relaxed sm:text-lg">
                  Administratívna kontrola na STK (cca 30 €).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold sm:text-xl">Hotovo!</h3>
                <p className="mt-3 text-base leading-relaxed sm:text-lg">
                  Teraz si môžete plne užívať svoje nové vozidlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt – rovnaká sekcia ako na úvodnej stránke */}
      <section
        id="kontakt"
        className="relative scroll-mt-24 overflow-hidden py-24 text-white"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,20,40,0.32), rgba(8,20,40,0.32)), url('/ConntactMenu_background.jpg')",
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white drop-shadow-sm sm:text-4xl">
                Kontaktujte nás
              </h2>
              <p className="mt-3 text-base font-semibold text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
                Napíšte nám a ozveme sa vám čo najskôr.
              </p>

              <form className="mt-8 space-y-4" action="#" method="POST">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Meno"
                    className="w-full rounded-xl border border-white/50 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/90 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm transition focus:border-white/85 focus:bg-white/25 focus:text-white focus:placeholder:text-white/95 focus:ring-2 focus:ring-white/45"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full rounded-xl border border-white/50 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/90 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm transition focus:border-white/85 focus:bg-white/25 focus:text-white focus:placeholder:text-white/95 focus:ring-2 focus:ring-white/45"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Telefónne číslo"
                  className="w-full rounded-xl border border-white/50 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/90 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm transition focus:border-white/85 focus:bg-white/25 focus:text-white focus:placeholder:text-white/95 focus:ring-2 focus:ring-white/45"
                />
                <textarea
                  rows={5}
                  placeholder="Správa"
                  className="w-full rounded-xl border border-white/50 bg-white/20 px-4 py-3 text-base font-medium text-white placeholder:text-white/90 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm transition focus:border-white/85 focus:bg-white/25 focus:text-white focus:placeholder:text-white/95 focus:ring-2 focus:ring-white/45"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-400"
                >
                  Odoslať správu
                </button>
              </form>
            </div>

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
    </div>
  );
}
