"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CookieSettingsPanel from "@/components/CookieSettingsPanel";
import {
  COOKIE_SETTINGS_EVENT,
  readCookiePreferences,
  saveCookiePreferences,
  acceptAllPreferences,
  type CookiePreferences,
} from "@/lib/cookies";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences | null>(
    null,
  );

  useEffect(() => {
    setMounted(true);
    const stored = readCookiePreferences();
    setPreferences(stored);
    setVisible(!stored);
  }, []);

  useEffect(() => {
    function handleOpenSettings() {
      setShowSettings(true);
      setVisible(true);
    }

    window.addEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings);
    return () =>
      window.removeEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings);
  }, []);

  function handleSave(next: CookiePreferences) {
    saveCookiePreferences(next);
    setPreferences(next);
    setVisible(false);
    setShowSettings(false);
  }

  function handleAcceptAll() {
    const all = acceptAllPreferences();
    handleSave(all);
  }

  if (!mounted || !visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      aria-modal="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />

      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-3xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.9)_48%,rgba(255,255,255,0.45)_52%,transparent_65%)]"
        />

        <div className="relative p-5 sm:p-7">
          <div className="flex items-start gap-4">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#4190BD]/12 text-[#2d6f94]"
              aria-hidden
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <h2
                id="cookie-consent-title"
                className="text-lg font-bold tracking-tight text-neutral-950 sm:text-xl"
              >
                {showSettings ? "Nastavenia cookies" : "Cookies na tomto webe"}
              </h2>
              <p
                id="cookie-consent-description"
                className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base"
              >
                {showSettings
                  ? "Vyberte, ktoré voliteľné cookies chcete povoliť. Nevyhnutné cookies zostávajú vždy zapnuté kvôli správnemu fungovaniu stránky."
                  : "Používame cookies na zabezpečenie funkčnosti webu a, s vaším súhlasom, aj na analýzu návštevnosti a marketing. Svoj výber môžete kedykoľvek zmeniť."}
              </p>
            </div>
          </div>

          {showSettings ? (
            <div className="mt-5 sm:mt-6">
              <CookieSettingsPanel
                initialPreferences={preferences}
                onSave={handleSave}
                onAcceptAll={() => setShowSettings(false)}
                compact
              />
            </div>
          ) : (
            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Prijať všetky
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="inline-flex items-center justify-center rounded-full border-2 border-neutral-950 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
              >
                Spravovať cookies
              </button>
              <Link
                href="/cookies"
                className="inline-flex items-center justify-center rounded-full px-2 py-3 text-sm font-semibold text-neutral-700 underline underline-offset-4 transition hover:text-neutral-950"
                onClick={() => setVisible(false)}
              >
                Viac informácií
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
