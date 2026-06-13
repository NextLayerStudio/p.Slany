"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  readCookiePreferences,
} from "@/lib/cookies";

export default function VercelAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function syncAnalyticsConsent() {
      const preferences = readCookiePreferences();
      setEnabled(Boolean(preferences?.analytics));
    }

    syncAnalyticsConsent();
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncAnalyticsConsent);

    return () => {
      window.removeEventListener(
        COOKIE_CONSENT_UPDATED_EVENT,
        syncAnalyticsConsent,
      );
    };
  }, []);

  if (!enabled) return null;

  return <Analytics />;
}
