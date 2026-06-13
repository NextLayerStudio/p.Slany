"use client";

import { useEffect, useState } from "react";
import CookieSettingsPanel from "@/components/CookieSettingsPanel";
import {
  readCookiePreferences,
  saveCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookies";

export default function CookiePreferencesManager() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(
    null,
  );
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setPreferences(readCookiePreferences());
  }, []);

  function handleSave(next: CookiePreferences) {
    saveCookiePreferences(next);
    setPreferences(next);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div>
      <CookieSettingsPanel
        initialPreferences={preferences}
        onSave={handleSave}
      />
      {saved ? (
        <p
          className="mt-4 text-sm font-medium text-[#2d6f94]"
          role="status"
          aria-live="polite"
        >
          Nastavenia cookies boli uložené.
        </p>
      ) : null}
    </div>
  );
}
