import Link from "next/link";

export default function PrecoMyPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-start justify-center px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Prečo my</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Pri dovozе a preprave vozidiel sa zameriavame na transparentnosť,
        rýchlu komunikáciu a starostlivosť o každý krok procesu od začiatku až
        po odovzdanie.
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
  );
}

