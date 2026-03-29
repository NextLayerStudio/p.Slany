import Link from "next/link";

export default function ObchodnePodmienkyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Obchodné podmienky</h1>
      <p className="mt-4 text-slate-600">
        Text obchodných podmienok doplníme.
      </p>
      <Link href="/" className="mt-8 inline-block text-sky-700 underline">
        Späť na úvod
      </Link>
    </main>
  );
}
