import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicePages: Record<string, { title: string; description: string }> = {
  "antikorozna-ochrana-vozidiel": {
    title: "Antikorózna ochrana vozidiel",
    description:
      "Profesionálna ochrana karosérie a spodku vozidla proti korózii a vplyvom prostredia.",
  },
  "preprava-a-odtah-vozidiel": {
    title: "Preprava a odťah vozidiel",
    description:
      "Bezpečná preprava a odťah vozidiel na Slovensku aj v zahraničí, nonstop dostupnosť za férové ceny.",
  },
};

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicePages[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-start justify-center px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900">{service.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          {service.description}
        </p>
        <Link
          href="/sluzby"
          className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700"
        >
          Späť na služby
        </Link>
      </main>
      <Footer />
    </div>
  );
}
