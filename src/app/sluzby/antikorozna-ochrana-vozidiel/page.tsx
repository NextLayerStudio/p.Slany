import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AntikoroznaBannerAccordions from "@/components/AntikoroznaBannerAccordions";

export const metadata = {
  title: "Antikorózna ochrana podvozku vozidiel | p.Slany",
  description:
    "Profesionálna antikorózna ochrana podvozku a spodku vozidla proti korózii, vlhkosti a posypovej soli.",
};

export default function AntikoroznaOchranaPage() {
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
          <div className="mt-12 max-w-4xl sm:mt-20 lg:mt-28">
            <h1
              className="font-bold leading-tight tracking-tight text-white text-[clamp(1.35rem,3.6vw+0.5rem,3.5rem)]"
              style={{
                textShadow:
                  "0 0 28px rgba(255,255,255,0.35), 0 2px 18px rgba(0,0,0,0.65)",
              }}
            >
              Antikorózna ochrana podvozku vozidiel
            </h1>
            <p className="mt-4 text-xl font-semibold leading-snug text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] sm:text-2xl">
              – spoľahlivá ochrana pred koróziou a vlhkosťou
            </p>
          </div>

          <div className="flex w-full flex-1 flex-col justify-end pt-12 sm:pt-16">
            <div className="max-w-2xl border-l-2 border-white pl-6 sm:pl-8 [font-family:var(--font-alexandria),system-ui,sans-serif]">
              <p className="text-base leading-relaxed text-white/95 drop-shadow-sm sm:text-lg">
                Spodok vozidla je najviac ohrozený vlhkosťou, posypovou soľou a
                kamienkami z vozovky. Bez kvalitnej ochrany môže korózia
                nebadane napáchať škody.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/95 drop-shadow-sm sm:mt-5 sm:text-lg">
                Ponúkame profesionálnu antikoróznu úpravu podvozku a
                kritických miest karosérie tak, aby vaše auto vydržalo dlhé roky
                v dobrom stave.
              </p>
            </div>

            <Link
              href="#kontakt"
              className="mt-10 inline-flex w-fit items-center justify-center self-start rounded-full border-2 border-white px-5 py-3 text-base font-medium text-white transition hover:bg-white hover:text-slate-900 sm:mt-10 sm:px-6 sm:text-lg"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <section
        id="preco-antikorozna"
        className="scroll-mt-24 py-16 text-white sm:py-20 lg:py-24"
        style={{ backgroundColor: "#4190BD" }}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Prečo je antikorózna ochrana dôležitá?
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-white/95 sm:text-lg">
            <span className="mr-1.5 font-semibold" aria-hidden>
              ✓
            </span>
            chráni podvozok pred hrdzou a chemickými vplyvmi, predlžuje
            životnosť vozidla, zvyšuje bezpečnosť jazdy, zachováva vyššiu
            hodnotu vozidla pri predaji, šetrí náklady na budúce opravy
          </p>
          <p className="mt-6 text-base font-normal leading-relaxed text-white/95 sm:mt-8 sm:text-lg">
            Prevencia je vždy lacnejšia než riešenie rozsiahlej korózie.
          </p>
        </div>
      </section>

      <section
        id="ako-prebieha-osetrenie"
        className="relative scroll-mt-24 overflow-hidden py-20 text-white sm:py-28 lg:py-36"
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 xl:px-14">
          <AntikoroznaBannerAccordions
            steps={[
              {
                title: "Dôkladné čistenie a príprava podvozku",
                body: "Odstránime nečistoty, soľ a povrchovú koróziu.",
              },
              {
                title: "Kontrola stavu podvozku",
                body: "Zhodnotíme aktuálny stav a navrhneme najvhodnejší postup ochrany.",
              },
              {
                title: "Aplikácia kvalitných antikoróznych prípravkov",
                body: "Používame overené ochranné nátery a vosky určené na dlhodobú ochranu.",
              },
              {
                title: "Ošetrenie kritických miest",
                body: "Zameriavame sa najmä na dutiny, spoje a namáhané časti podvozku.",
              },
            ]}
            blocks={[
              {
                title: "Pre aké vozidlá je služba vhodná?",
                body: "Nové vozidlá (prevencia korózie), jazdené vozidlá, dodávky a úžitkové vozidlá, vozidlá jazdiace v náročných podmienkach.",
              },
              {
                title: "Prečo si vybrať nás?",
                body: "Profesionálny prístup a precízna práca, kvalitné a osvedčené materiály, individuálny prístup ku každému vozidlu, férové a transparentné ceny, dlhodobý efekt ochrany.",
              },
              {
                title: "Objednajte si antikoróznu ochranu",
                body: "Doprajte svojmu vozidlu ochranu, ktorú si zaslúži. Kontaktujte nás ešte dnes a predĺžte životnosť svojho auta.",
              },
            ]}
          />
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
