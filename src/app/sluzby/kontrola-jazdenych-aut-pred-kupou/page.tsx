import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontrola jazdených áut pred kúpou | p.Slany",
  description:
    "Profesionálna kontrola ojazdeného auta pred kúpou – technický stav, história, ochrana pred rizikom.",
};

export default function KontrolaJazdenychPage() {
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

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-10 pt-32 sm:pb-12 lg:px-10">
          <div className="flex flex-1 flex-col justify-center px-0 sm:px-4">
            <h1
              className="text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              style={{
                textShadow:
                  "0 0 28px rgba(255,255,255,0.35), 0 2px 18px rgba(0,0,0,0.65)",
              }}
            >
              Kontrola jazdených áut pred kúpou
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-center text-lg font-semibold leading-snug text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] sm:text-xl md:text-2xl">
              – chráňte sa pred rizikom a zbytočnými nákladmi
            </p>
          </div>

          <div className="mt-10 flex w-full flex-col sm:mt-14">
            <div className="max-w-2xl border-l-2 border-white pl-6 sm:pl-8 [font-family:var(--font-alexandria),system-ui,sans-serif]">
              <p className="text-base leading-relaxed text-white/95 drop-shadow-sm sm:text-lg">
                Kúpa jazdeného auta je veľkým rozhodnutím. Mnohé vozidlá vyzerajú
                na prvý pohľad výborne, no skrývajú chyby, stočené kilometre
                alebo zanedbanú údržbu.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/95 drop-shadow-sm sm:mt-5 sm:text-lg">
                Naša služba profesionálnej kontroly auta pred kúpou vám pomôže
                vyhnúť sa zbytočnému sklamaniu aj finančným stratám.
              </p>
            </div>

            <Link
              href="#kontakt"
              className="mt-8 inline-flex w-fit items-center justify-center self-start rounded-full border-2 border-white px-5 py-3 text-base font-medium text-white transition hover:bg-white hover:text-slate-900 sm:mt-10 sm:px-6 sm:text-lg"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <section
        id="preco-skontrolovat"
        className="scroll-mt-24 bg-white py-16 text-slate-900 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.25rem]">
            Prečo si dať auto skontrolovať ešte pred kúpou?
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: "Zistíme reálny stav vozidla",
                body: "Overíme technický, vizuálny aj mechanický stav auta, aby ste presne vedeli, čo kupujete.",
              },
              {
                title: "Odhalíme chyby",
                body: "Problémy, ktoré nevidno voľným okom – a ktoré môžu stáť stovky či tisíce eur – odhalíme včas.",
              },
              {
                title: "Preveríme pôvod a históriu",
                body: "Kontrola VIN, servisnej knižky, záznamov, kilometrov a poškodení.",
              },
              {
                title: "Ušetríte čas aj peniaze",
                body: "Ak auto nespĺňa kritériá, odporučíme vám vhodnejšiu alternatívu. Vy sa tak vyhnete zlému nákupu.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-2xl text-left text-black shadow-lg"
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
                  className="absolute inset-0 bg-white/78"
                />
                <div className="relative z-10 p-6 sm:p-7">
                  <h3 className="text-lg font-bold leading-snug text-black sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ako-kontrola-prebieha"
        className="relative scroll-mt-24 overflow-hidden py-16 text-white sm:py-20 lg:py-24"
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
          className="absolute inset-0 bg-gradient-to-b from-black/22 via-black/18 to-black/28"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
          <h2
            className="mx-auto max-w-4xl text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.25rem]"
            style={{
              textShadow:
                "0 0 24px rgba(255,255,255,0.25), 0 2px 14px rgba(0,0,0,0.55)",
            }}
          >
            Ako kontrola prebieha?
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:gap-12 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 md:gap-x-12 md:gap-y-10 lg:gap-x-16">
            {[
              {
                n: 1,
                title: "Overenie dokumentov a histórie",
                body: "VIN dekódovanie, overenie servisnej histórie, kontrola kilometrov, preverenie krajiny pôvodu, záznamy o nehodách (ak sú dostupné).",
              },
              {
                n: 2,
                title: "Technická kontrola",
                body: "Diagnostika riadiacej jednotky, kontrola motora, prevodovky a podvozku, meranie hrúbky laku, kontrola brzdového systému, stav pneumatík a geometrie.",
              },
              {
                n: 3,
                title: "Vizuálna a funkčná kontrola interiéru/exteriéru",
                body: "Kontrola poškodení, opráv, korózie, preverenie výbavy, elektroniky a funkčnosti prvkov, skúšobná jazda.",
              },
              {
                n: 4,
                title: "Záverečná správa",
                body: "Kompletný súhrn stavu vozidla, zoznam zistených chýb, odporúčanie, či sa auto oplatí kúpiť, návrh odhadovaných nákladov na opravy.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="border-l-2 border-white pl-6 sm:pl-8"
              >
                <div className="flex gap-4 sm:gap-5">
                  <span
                    className="shrink-0 text-4xl font-bold leading-none text-white tabular-nums sm:text-5xl"
                    style={{
                      textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                    }}
                  >
                    {step.n}
                  </span>
                  <div className="min-w-0 pt-1">
                    <h3 className="text-lg font-bold leading-snug text-white drop-shadow-sm sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/95 drop-shadow-sm sm:text-base">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 text-white sm:py-20 lg:py-24"
        style={{ backgroundColor: "#4190BD" }}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="flex flex-col gap-12 sm:gap-14 lg:gap-16">
            <div className="border-l-2 border-white pl-6 sm:pl-8 [font-family:var(--font-alexandria),system-ui,sans-serif]">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                Pre koho je služba určená?
              </h2>
              <ul className="mt-4 list-none space-y-3 text-base leading-relaxed text-white/95 sm:mt-5 sm:text-lg">
                <li>Pre ľudí, ktorí kupujú auto z inzercie</li>
                <li>Pre kupcov bez technických znalostí</li>
                <li>Pre tých, ktorí chcú istotu a nechcú riskovať</li>
                <li>
                  Pre tých, ktorí nemajú čas chodiť auto kontrolovať osobne
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-white pl-6 sm:pl-8 [font-family:var(--font-alexandria),system-ui,sans-serif]">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                Čo získate?
              </h2>
              <ul className="mt-4 list-none space-y-3 text-base leading-relaxed text-white/95 sm:mt-5 sm:text-lg">
                <li>Objektívne hodnotenie od odborníka</li>
                <li>Ochranu pred podvodom alebo nevýhodnou kúpou</li>
                <li>Informácie, ktoré vám predajca nepovie</li>
              </ul>
            </div>

            <div className="border-l-2 border-white pl-6 sm:pl-8 [font-family:var(--font-alexandria),system-ui,sans-serif]">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                Nechajte si auto preveriť ešte pred podpisom zmluvy
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/95 sm:mt-5 sm:text-lg">
                Jedna kontrola vám môže ušetriť stovky až tisíce eur.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-lg">
                Doprajte si istotu a spoľahnite sa na profesionálov, ktorí
                poznajú autá do posledného detailu.
              </p>
            </div>
          </div>
        </div>
      </section>

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
