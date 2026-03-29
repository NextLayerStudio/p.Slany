import Link from "next/link";
import { notFound } from "next/navigation";

const servicePages: Record<string, { title: string; description: string }> = {
  "dovoz-aut-z-nemecka-a-zahranicia": {
    title: "Dovoz áut z Nemecka a zahraničia",
    description:
      "Kompletné zabezpečenie dovozu vozidla vrátane výberu, dopravy a administratívy.",
  },
  "kontrola-jazdenych-aut-pred-kupou": {
    title: "Kontrola jazdených áut pred kúpou",
    description:
      "Technická aj vizuálna kontrola vozidla pred kúpou, aby ste sa vyhli rizikám.",
  },
  "sprostredkovanie-predaja-vozidiel": {
    title: "Sprostredkovanie predaja vozidiel",
    description:
      "Pomoc s predajom vozidla od inzercie cez komunikáciu so záujemcami až po odovzdanie auta.",
  },
  "odtahova-sluzba": {
    title: "Odťahová služba",
    description:
      "Rýchly a bezpečný odťah nepojazdných vozidiel na Slovensku aj zo zahraničia.",
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
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-start justify-center px-6 py-16">
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
  );
}
