import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto max-w-3xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900">Cookies</h1>
        <p className="mt-4 text-slate-600">
          Zásady používania cookies doplníme.
        </p>
        <Link href="/" className="mt-8 inline-block text-sky-700 underline">
          Späť na úvod
        </Link>
      </main>
      <Footer />
    </div>
  );
}
