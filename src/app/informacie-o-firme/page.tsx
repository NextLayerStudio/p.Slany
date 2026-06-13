import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlossySurface } from "@/components/GlossySection";

export const metadata = {
  title: "Informácie o firme | JVDCars",
  description:
    "Identifikačné a registračné údaje spoločnosti JVD real s.r.o. – IČO, DIČ, sídlo a zápis v obchodnom registri.",
};

const companyDetails = [
  {
    label: "Obchodné meno",
    value: "JVD real s.r.o.",
  },
  {
    label: "IČO",
    value: "46027602",
  },
  {
    label: "DIČ",
    value: "2023201829",
  },
  {
    label: "Sídlo",
    value: (
      <>
        Bratislava – Čuňovo 1005
        <br />
        851 10 Bratislava – Čuňovo
      </>
    ),
  },
  {
    label: "Zápis v ORSR",
    value:
      "Obchodný register Mestského súdu Bratislava III, oddiel: Sro, vložka č. 70511/B",
  },
];

export default function InformacieOFirmePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <GlossySurface className="flex-1 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-neutral-600">
            Prevádzkovateľ webu
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Informácie o firme
          </h1>
          <p className="mt-5 text-base leading-relaxed text-neutral-700 sm:text-lg">
            Na tejto stránke nájdete identifikačné a registračné údaje spoločnosti,
            ktorá prevádzkuje web JVDCars a poskytuje uvedené služby.
          </p>

          <div className="mt-10 rounded-3xl border border-neutral-900/10 bg-white/70 p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] sm:p-8">
            <dl className="space-y-6">
              {companyDetails.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold leading-relaxed text-neutral-950 sm:text-lg">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-neutral-800">
            <section>
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Kontakt
              </h2>
              <p className="mt-3">
                V prípade otázok nás môžete kontaktovať e-mailom na{" "}
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

            <section>
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Súvisiace informácie
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/cookies"
                    className="font-semibold text-[#2d6f94] underline underline-offset-4 transition hover:text-[#4190BD]"
                  >
                    Zásady používania cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/obchodne-podmienky"
                    className="font-semibold text-[#2d6f94] underline underline-offset-4 transition hover:text-[#4190BD]"
                  >
                    Obchodné podmienky
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="font-semibold text-[#2d6f94] underline underline-offset-4 transition hover:text-[#4190BD]"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-10">
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
