"use client";

import type { ReactNode } from "react";
import { openCookieSettings } from "@/lib/cookies";

type CookieSettingsButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function CookieSettingsButton({
  className = "",
  children = "Spravovať nastavenia cookies",
}: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={className}
    >
      {children}
    </button>
  );
}
