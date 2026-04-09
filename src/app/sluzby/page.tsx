import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    href: "/sluzby/antikorozna-ochrana-vozidiel",
    label: "Antikorózna ochrana vozidiel",
  },
  {
    href: "/sluzby/dovoz-aut-z-nemecka-a-zahranicia",
    label: "Dovoz áut z Nemecka a zahraničia",
  },
  {
    href: "/sluzby/kontrola-jazdenych-aut-pred-kupou",
    label: "Kontrola jazdených áut pred kúpou",
  },
  {
    href: "/sluzby/preprava-a-odtah-vozidiel",
    label: "Odťahová služba a preprava vozidiel",
  },
];

export default function SluzbyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 max-sm:text-[clamp(2rem,8vw+1rem,2.85rem)]">
          Služby
        </h1>
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
      <Footer />
    </div>
  );
}
