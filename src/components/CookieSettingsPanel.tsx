"use client";

import { useEffect, useState } from "react";
import {
  acceptAllPreferences,
  defaultPreferences,
  type CookiePreferences,
} from "@/lib/cookies";

type CookieOption = {
  id: keyof Pick<CookiePreferences, "analytics" | "marketing">;
  title: string;
  description: string;
};

const optionalCookies: CookieOption[] = [
  {
    id: "analytics",
    title: "Analytické cookies",
    description:
      "Pomáhajú nám pochopiť, ako návštevníci používajú web, aby sme mohli zlepšovať obsah a používateľský zážitok.",
  },
  {
    id: "marketing",
    title: "Marketingové cookies",
    description:
      "Umožňujú zobrazovať relevantnejší obsah a merať účinnosť reklamných kampaní na externých platformách.",
  },
];

type CookieSettingsPanelProps = {
  initialPreferences?: CookiePreferences | null;
  onSave: (preferences: CookiePreferences) => void;
  onAcceptAll?: () => void;
  compact?: boolean;
};

export default function CookieSettingsPanel({
  initialPreferences,
  onSave,
  onAcceptAll,
  compact = false,
}: CookieSettingsPanelProps) {
  const [analytics, setAnalytics] = useState(
    initialPreferences?.analytics ?? false,
  );
  const [marketing, setMarketing] = useState(
    initialPreferences?.marketing ?? false,
  );

  useEffect(() => {
    setAnalytics(initialPreferences?.analytics ?? false);
    setMarketing(initialPreferences?.marketing ?? false);
  }, [initialPreferences]);

  function handleSave() {
    onSave({
      necessary: true,
      analytics,
      marketing,
      updatedAt: new Date().toISOString(),
    });
  }

  function handleAcceptAll() {
    const all = acceptAllPreferences();
    setAnalytics(true);
    setMarketing(true);
    onSave(all);
    onAcceptAll?.();
  }

  function handleRejectOptional() {
    const prefs = defaultPreferences();
    setAnalytics(false);
    setMarketing(false);
    onSave(prefs);
  }

  return (
    <div className={compact ? "space-y-4" : "space-y-6"}>
      <div
        className={`rounded-2xl border border-neutral-900/10 bg-white/80 ${
          compact ? "p-4" : "p-5 sm:p-6"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-neutral-950 sm:text-base">
              Nevyhnutné cookies
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
              Potrebné pre správne fungovanie webu, bezpečnosť a uloženie vašich
              volieb. Tieto cookies nie je možné vypnúť.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-neutral-900/8 px-3 py-1 text-xs font-semibold text-neutral-700">
            Vždy aktívne
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {optionalCookies.map((cookie) => {
          const enabled =
            cookie.id === "analytics" ? analytics : marketing;
          const setEnabled =
            cookie.id === "analytics" ? setAnalytics : setMarketing;

          return (
            <div
              key={cookie.id}
              className={`rounded-2xl border border-neutral-900/10 bg-white/80 ${
                compact ? "p-4" : "p-5"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-neutral-950 sm:text-base">
                    {cookie.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                    {cookie.description}
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={enabled}
                  aria-label={`${cookie.title} – ${enabled ? "zapnuté" : "vypnuté"}`}
                  onClick={() => setEnabled((v) => !v)}
                  className={`relative mt-0.5 h-7 w-12 shrink-0 rounded-full transition-colors ${
                    enabled ? "bg-[#4190BD]" : "bg-neutral-300"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                      enabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
          compact ? "" : "pt-1"
        }`}
      >
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Uložiť výber
        </button>
        <button
          type="button"
          onClick={handleAcceptAll}
          className="inline-flex items-center justify-center rounded-full border-2 border-neutral-950 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
        >
          Prijať všetky
        </button>
        <button
          type="button"
          onClick={handleRejectOptional}
          className="inline-flex items-center justify-center rounded-full border border-neutral-900/20 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-900/35 hover:text-neutral-950"
        >
          Len nevyhnutné
        </button>
      </div>
    </div>
  );
}
