import Link from "next/link";

export default function InformacieOFirmePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Informácie o firme</h1>
      <p className="mt-4 text-slate-600">
        Obsah doplníme podľa vašich údajov.
      </p>
      <Link href="/" className="mt-8 inline-block text-sky-700 underline">
        Späť na úvod
      </Link>
    </main>
  );
}
