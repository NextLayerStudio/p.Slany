import Link from "next/link";

const services = [
  {
    href: "/sluzby/dovoz-aut-z-nemecka-a-zahranicia",
    label: "Dovoz áut z Nemecka a zahraničia",
  },
  {
    href: "/sluzby/kontrola-jazdenych-aut-pred-kupou",
    label: "Kontrola jazdených áut pred kúpou",
  },
  {
    href: "/sluzby/sprostredkovanie-predaja-vozidiel",
    label: "Sprostredkovanie predaja vozidiel",
  },
  {
    href: "/sluzby/odtahova-sluzba",
    label: "Odťahová služba",
  },
];

export default function SluzbyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Služby</h1>
      <p className="mt-4 text-lg text-slate-600">
        Vyberte si službu, ktorú potrebujete.
      </p>

      <div className="mt-8 grid gap-3">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="rounded-xl border border-slate-200 p-4 text-slate-900 transition hover:bg-slate-50"
          >
            {service.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
