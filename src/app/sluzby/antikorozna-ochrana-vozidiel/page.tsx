import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { GlossySurface } from "@/components/GlossySection";

export const metadata = {
  title: "Autodetailing Bratislava | p.Slany",
  description:
    "Profesionálny autodetailing v Bratislave – hĺbková starostlivosť o exteriér a interiér, ochrana povrchov a obnova vzhľadu vozidla.",
};

export default function AutodetailingBratislavaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative min-h-svh overflow-hidden text-white">
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

        <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col items-start px-6 pb-8 pt-32 sm:pb-10 lg:px-10">
          <div className="mt-12 max-w-4xl sm:mt-20 lg:mt-28">
            <h1
              className="font-bold leading-tight tracking-tight text-white text-[clamp(1.35rem,3.6vw+0.5rem,3.5rem)] max-sm:text-[clamp(2rem,8vw+1rem,2.85rem)]"
              style={{
                textShadow:
                  "0 0 28px rgba(255,255,255,0.35), 0 2px 18px rgba(0,0,0,0.65)",
              }}
            >
              Vráťte svojmu autu dokonalý vzhľad.
            </h1>
          </div>

          <div className="flex w-full flex-1 flex-col justify-end pt-12 sm:pt-16">
            <div className="max-w-2xl border-l-2 border-white pl-6 sm:pl-8 [font-family:var(--font-alexandria),system-ui,sans-serif]">
              <p className="text-base leading-relaxed text-white/95 drop-shadow-sm sm:text-lg">
                Vaše auto si zaslúži viac než len bežné umytie. Autodetailing
                predstavuje komplexnú starostlivosť, ktorá obnovuje vzhľad
                vozidla, chráni jeho povrchy a zároveň pomáha udržať jeho
                hodnotu.
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

      <GlossySurface
        id="preco-autodetailing"
        className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Pre koho je detailing vhodný.
          </h2>
          <ul className="mt-6 list-disc space-y-6 pl-6 text-base font-normal text-neutral-900 sm:pl-7 sm:text-lg">
            <li className="leading-relaxed">
              Autodetailing je vhodný pre každého, kto chce mať svoje auto v
              dobrom stave bez ohľadu na jeho vek.
            </li>
            <li className="leading-relaxed">
              Pomáha nielen majiteľom nových vozidiel, ktorí chcú ochrániť svoju
              investíciu, ale aj tým, ktorí pripravujú auto na predaj alebo si
              jednoducho chcú dopriať čistý a udržiavaný interiér aj exteriér.
            </li>
          </ul>
        </div>
      </GlossySurface>

      <section
        id="ako-prebieha-autodetailing"
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

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
          <h2
            className="mx-auto max-w-4xl text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.25rem]"
            style={{
              textShadow:
                "0 0 24px rgba(255,255,255,0.25), 0 2px 14px rgba(0,0,0,0.55)",
            }}
          >
            Naše služby
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal leading-relaxed text-white/95 sm:mt-8 sm:text-lg lg:text-xl">
            Postaráme sa o vaše vozidlo zvonku aj zvnútra tak, aby pôsobilo čisto,
            zachovalo si svoj stav a bolo príjemné na každodenné používanie.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-14 sm:gap-12 md:mt-16 md:grid-cols-2 md:gap-0 md:divide-x md:divide-white/40">
            <div className="md:pr-10 lg:pr-16">
              <div className="flex gap-4 sm:gap-5">
                <span
                  className="shrink-0 text-5xl font-bold leading-none text-white tabular-nums sm:text-6xl lg:text-7xl"
                  style={{
                    textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                  }}
                  aria-hidden
                >
                  1
                </span>
                <div className="min-w-0 pt-1 sm:pt-2">
                  <h3 className="text-lg font-bold leading-snug text-white drop-shadow-sm sm:text-xl lg:text-2xl">
                    Exteriérový detailing
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/95 drop-shadow-sm sm:mt-4 sm:text-base lg:text-lg">
                    Exteriérový detailing zahŕňa dôkladné a bezpečné ručné umývanie,
                    pri ktorom nedochádza k poškodeniu laku. Následne odstraňujeme
                    nečistoty ako asfalt, živicu či brzdový prach, ktoré bežné
                    umývanie nedokáže odstrániť. V prípade potreby realizujeme aj
                    strojové leštenie, ktoré pomáha odstrániť jemné škrabance a
                    obnoviť lesk karosérie. Výsledok je možné ochrániť voskom alebo
                    keramickou ochranou, vďaka čomu bude údržba vozidla jednoduchšia.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/40 pt-10 md:border-t-0 md:pl-10 md:pt-0 lg:pl-16">
              <div className="flex gap-4 sm:gap-5">
                <span
                  className="shrink-0 text-5xl font-bold leading-none text-white tabular-nums sm:text-6xl lg:text-7xl"
                  style={{
                    textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                  }}
                  aria-hidden
                >
                  2
                </span>
                <div className="min-w-0 pt-1 sm:pt-2">
                  <h3 className="text-lg font-bold leading-snug text-white drop-shadow-sm sm:text-xl lg:text-2xl">
                    Interiérový detailing
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/95 drop-shadow-sm sm:mt-4 sm:text-base lg:text-lg">
                    Interiérový detailing sa zameriava na hĺbkové čistenie a celkový
                    komfort vo vnútri vozidla. Pomocou tepovania odstraňujeme
                    nečistoty zo sedadiel a kobercov, čistíme plasty aj kožené
                    povrchy a venujeme sa aj miestam, ktoré sa pri bežnom čistení
                    často prehliadajú. Súčasťou je aj odstránenie zápachu, baktérií
                    a dezinfekcia, vďaka čomu je interiér nielen čistý, ale aj
                    hygienický.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/40 pt-10 sm:mt-12 sm:pt-12 md:mt-14 md:pt-14">
            <div className="flex gap-4 sm:gap-5">
              <span
                className="shrink-0 text-5xl font-bold leading-none text-white tabular-nums sm:text-6xl lg:text-7xl"
                style={{
                  textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                }}
                aria-hidden
              >
                3
              </span>
              <div className="min-w-0 pt-1 sm:pt-2">
                <h3 className="text-lg font-bold leading-snug text-white drop-shadow-sm sm:text-xl lg:text-2xl">
                  Keramická ochrana laku
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/95 drop-shadow-sm sm:mt-4 sm:text-base lg:text-lg">
                  Dôležitou súčasťou služieb je aj ochrana vozidla. Keramická ochrana
                  laku vytvára vrstvu, ktorá odpudzuje vodu a nečistoty, chráni lak
                  pred UV žiarením a zároveň uľahčuje jeho údržbu. Ide o riešenie,
                  ktoré ocení každý, kto chce mať auto dlhodobo v dobrom stave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GlossySurface
        id="preco-vybrat-nas"
        className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Prečo si vybrať nás
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-neutral-900 sm:mt-8 sm:text-lg">
            Pri práci kladieme dôraz najmä na kvalitu a detail. Používame overené
            produkty a postupy, ktoré sú šetrné k vozidlu, no zároveň prinášajú
            viditeľné výsledky. Každé auto berieme individuálne a snažíme sa nájsť
            riešenie, ktoré mu najviac vyhovuje.
          </p>
        </div>
      </GlossySurface>

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

              <ContactForm />
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
