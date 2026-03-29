import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Kontakt | p.Slany",
  description: "Kontaktujte nás ohľadom dovozu, kontroly a prepravy vozidiel.",
};

export default function KontaktPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          {/* Hero strip – brand blue */}
          <section
            className="text-white"
            style={{ backgroundColor: "#4190BD" }}
          >
            <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-16">
              <p className="text-sm font-medium uppercase tracking-wider text-white/85">
                Sme tu pre vás
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Kontakt
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/95">
                Napíšte nám alebo zavolajte – ozveme sa čo najskôr a prejdeme
                vašu požiadavku ohľadom dovozu, kontroly či prepravy vozidla.
              </p>
            </div>
          </section>

          {/* Form + info */}
          <section className="bg-slate-50 py-14 lg:py-20">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
              <div className="lg:col-span-7">
                <h2 className="text-xl font-bold text-slate-900">
                  Napíšte nám správu
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Vyplňte formulár – odpovieme na váš e-mail alebo vás
                  kontaktujeme telefonicky.
                </p>

                <form
                  className="mt-8 space-y-4"
                  action="#"
                  method="post"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Meno a priezvisko
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Ján Novák"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-[#4190BD]/0 transition placeholder:text-slate-400 focus:border-[#4190BD] focus:ring-2 focus:ring-[#4190BD]/25"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        E-mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="vas@email.sk"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#4190BD] focus:ring-2 focus:ring-[#4190BD]/25"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Telefón (voliteľné)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+421 904 000 000"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#4190BD] focus:ring-2 focus:ring-[#4190BD]/25"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Správa
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Stručne popíšte, čo potrebujete…"
                      className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#4190BD] focus:ring-2 focus:ring-[#4190BD]/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto sm:min-w-[200px]"
                    style={{ backgroundColor: "#4190BD" }}
                  >
                    Odoslať správu
                  </button>
                </form>
              </div>

              <aside className="lg:col-span-5">
                <h2 className="text-xl font-bold text-slate-900">
                  Priamy kontakt
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Radi vám poradíme osobne alebo po telefóne.
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: "#4190BD" }}
                    >
                      <PhoneIcon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Telefón
                      </p>
                      <a
                        href="tel:+421904445380"
                        className="mt-0.5 block text-lg font-semibold text-slate-900 transition hover:text-[#4190BD]"
                      >
                        +421 904 445 380
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: "#4190BD" }}
                    >
                      <EnvelopeIcon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        E-mail
                      </p>
                      <a
                        href="mailto:email.random@gmail.com"
                        className="mt-0.5 block break-all text-base font-semibold text-slate-900 transition hover:text-[#4190BD]"
                      >
                        email.random@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                      <MapPinIcon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Pracovná doba
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">
                        Pondelok – Piatok: 8:00 – 18:00
                        <br />
                        Sobota: 9:00 – 13:00
                      </p>
                    </div>
                  </li>
                </ul>

                <Link
                  href="/"
                  className="mt-8 inline-flex text-sm font-medium text-[#4190BD] underline underline-offset-4 transition hover:brightness-90"
                >
                  ← Späť na úvod
                </Link>
              </aside>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
