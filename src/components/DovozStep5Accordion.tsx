"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ITEMS = [
  {
    id: "obhliadka",
    title: "Obhliadka vozidla",
    body: (
      <div className="space-y-4 pt-2 text-base leading-relaxed text-white/95 sm:text-lg">
        <p>
          Obhliadka prebieha priamo u predajcu v Nemecku alebo v inej vybranej
          krajine.
        </p>
      </div>
    ),
  },
  {
    id: "kontrola",
    title: "Kontrola vozidla",
    body: (
      <p className="pt-2 text-base leading-relaxed text-white/95 sm:text-lg">
        <span className="font-bold text-white">Kontrola vozidla:</span>{" "}
        preverujeme stav auta, lak, dokumenty, vykonávame diagnostiku a skúšobnú
        jazdu.
      </p>
    ),
  },
  {
    id: "online",
    title: "Online spojenie s vami",
    body: (
      <p className="pt-2 text-base leading-relaxed text-white/95 sm:text-lg">
        <span className="font-bold text-white">Online spojenie s vami:</span>{" "}
        počas obhliadky ste s nami v kontakte, pravidelne posielame fotky a videá.
      </p>
    ),
  },
  {
    id: "schvalenie",
    title: "Schválenie kúpy",
    body: (
      <p className="pt-2 text-base leading-relaxed text-white/95 sm:text-lg">
        <span className="font-bold text-white">Schválenie kúpy:</span>{" "}
        ak je všetko v poriadku a súhlasíte s kúpou, zabezpečíme prípravu a podpis
        zmlúv – pre súkromné osoby aj firmy.
      </p>
    ),
  },
] as const;

export default function DovozStep5Accordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mt-6 space-y-1 border-t border-white/20 pt-4 sm:space-y-2">
      {ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-white/15 last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-3 py-3 text-left text-base font-bold text-white transition hover:text-white/90 sm:text-lg"
              aria-expanded={isOpen}
              aria-controls={`dovoz-step5-panel-${item.id}`}
              id={`dovoz-step5-trigger-${item.id}`}
            >
              <span className="flex items-center gap-3">
                <ChevronDownIcon
                  className={`h-6 w-6 shrink-0 text-white transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
                {item.title}
              </span>
            </button>
            <div
              id={`dovoz-step5-panel-${item.id}`}
              role="region"
              aria-labelledby={`dovoz-step5-trigger-${item.id}`}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="pb-4 pl-9">{item.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
