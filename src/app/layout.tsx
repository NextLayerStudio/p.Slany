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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
