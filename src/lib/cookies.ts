export type CookieCategory = "necessary" | "analytics" | "marketing";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export const COOKIE_CONSENT_KEY = "jvdcars-cookie-consent";
export const COOKIE_SETTINGS_EVENT = "jvdcars-open-cookie-settings";
export const COOKIE_CONSENT_UPDATED_EVENT = "jvdcars-cookie-consent-updated";

export const defaultPreferences = (): CookiePreferences => ({
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: new Date().toISOString(),
});

export const acceptAllPreferences = (): CookiePreferences => ({
  necessary: true,
  analytics: true,
  marketing: true,
  updatedAt: new Date().toISOString(),
});

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function saveCookiePreferences(preferences: CookiePreferences) {
  const next = {
    ...preferences,
    necessary: true as const,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(next));

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: next }),
    );
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT));
}
