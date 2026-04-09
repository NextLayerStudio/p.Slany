import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Odťahová služba a preprava vozidiel | p.Slany",
  description:
    "Profesionálna odťahová služba a preprava vozidiel po Slovensku aj Európe – rýchlo, bezpečne, nonstop za férové ceny.",
};

export default function PrepravaOdtahPage() {
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
              Odťahová služba a preprava vozidiel
            </h1>
            <p className="mt-4 text-xl font-semibold leading-snug text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] sm:text-2xl">
              – Slovensko & zahraničie
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
              <a
                href="mailto:info@pslany.sk"
                className="inline-flex items-center gap-2.5 text-base font-medium text-white/95 drop-shadow-sm transition hover:text-white sm:text-lg"
              >
                <EnvelopeIcon
                  className="h-6 w-6 shrink-0 opacity-95"
                  aria-hidden
                />
                info@pslany.sk
              </a>
              <a
                href="tel:+421900000000"
                className="inline-flex items-center gap-2.5 text-base font-medium text-white/95 drop-shadow-sm transition hover:text-white sm:text-lg"
              >
                <PhoneIcon className="h-6 w-6 shrink-0 opacity-95" aria-hidden />
                +421 900 000 000
              </a>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col justify-end pt-12 sm:pt-16">
            <div className="max-w-2xl border-l-2 border-white pl-6 sm:pl-8 [font-family:var(--font-alexandria),system-ui,sans-serif]">
              <p className="text-base leading-relaxed text-white/95 drop-shadow-sm sm:text-lg">
                Potrebujete bezpečne a spoľahlivo odviezť vozidlo doma alebo v
                zahraničí?
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/95 drop-shadow-sm sm:mt-5 sm:text-lg">
                Ponúkame profesionálnu odťahovú službu a prepravu áut po celom
                Slovensku aj celej Európe.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/95 drop-shadow-sm sm:mt-5 sm:text-lg">
                Rýchlo, bezpečne, nonstop a za férové ceny.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 text-white sm:py-20 lg:py-24"
        style={{ backgroundColor: "#4190BD" }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Objednajte si odťah alebo prepravu ihneď
          </h2>
          <p className="mt-6 max-w-3xl text-base font-normal leading-relaxed text-white/95 sm:mt-8 sm:text-lg">
            Nech ste kdekoľvek, vždy sa na nás môžete spoľahnúť.
          </p>
          <p className="mt-3 max-w-3xl text-base font-normal leading-relaxed text-white/95 sm:mt-4 sm:text-lg">
            Ponúkame rýchlu, bezpečnú a profesionálnu službu pre jednotlivcov,
            firmy aj auto dealerov.
          </p>
        </div>
      </section>

      <section
        id="preco-odtahova-sluzba"
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
          className="absolute inset-0 bg-gradient-to-b from-black/38 via-black/32 to-black/45"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Prečo si vybrať našu odťahovú službu?
          </h2>

          <div className="mt-10 max-w-4xl border-l-2 border-white pl-6 sm:mt-12 sm:pl-8">
            {[
              {
                title: "Rýchla reakcia",
                body: "Prídeme čo najskôr – či už ide o poruchu, nehodu alebo plánovanú prepravu.",
              },
              {
                title: "Preprava po celom Slovensku aj EÚ",
                body: "Jazdíme pravidelne do krajín ako Nemecko, Rakúsko, Česká republika, Belgicko, Holandsko, Taliansko či Francúzsko.",
              },
              {
                title: "Moderná technika",
                body: "Používame spoľahlivé odťahové vozidlá s dostatočnou nosnosťou, navijakmi a zabezpečením, aby bolo vaše auto počas prevozu v maximálnom bezpečí.",
              },
              {
                title: "Preprava všetkých typov vozidiel",
                body: "Osobné autá, SUV a dodávky, znížené alebo športové vozidlá, nepojazdné či ľahko poškodené autá, nové a luxusné vozidlá.",
              },
              {
                title: "Poistenie a garancia bezpečnosti",
                body: "Každý prevoz je poistený a vykonávaný skúsenými vodičmi.",
              },
            ].map((item, i) => (
              <div key={item.title} className={i > 0 ? "mt-8 sm:mt-10" : ""}>
                <h3 className="text-lg font-bold leading-snug sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-base font-normal leading-relaxed text-white/95 sm:mt-3 sm:text-lg">
                  {item.body}
                </p>
              </div>
            ))}
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
