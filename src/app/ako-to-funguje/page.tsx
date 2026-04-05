import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AkoToFungujePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-start justify-center px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900">Ako to funguje</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          V praxi to znamená jasný postup: najprv si vysvetlíme požiadavku,
          dohodneme podmienky, zabezpečíme potrebné úkony a vozidlo prepravíme
          až k vám.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/sluzby"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Pozrieť služby
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Kontaktovať nás
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

