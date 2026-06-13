import type { Metadata } from "next";
import { Alexandria, Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import VercelAnalytics from "@/components/VercelAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Dovoz a preprava vozidiel",
  description: "Dovoz áut, kontrola, odťah a sprostredkovanie predaja vozidiel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${geistSans.variable} ${geistMono.variable} ${alexandria.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
        <VercelAnalytics />
      </body>
    </html>
  );
}
