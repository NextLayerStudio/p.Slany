"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Step = { title: string; body: string };
type Block = { title: string; body: string };

function AccordionRow({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId = `${id}-panel`;

  return (
    <div className="py-7 first:pt-3 sm:py-8">
      <button
        type="button"
        id={`${id}-trigger`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 text-left text-white transition hover:text-white/95"
      >
        <span className="min-w-0 text-lg font-bold leading-snug sm:text-xl lg:text-2xl">
          {title}
        </span>
        <ChevronDownIcon
          className={`mt-1 h-6 w-6 shrink-0 transition-transform duration-300 sm:h-7 sm:w-7 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-1 pt-4 text-base font-normal leading-relaxed text-white/95 sm:text-lg lg:text-xl">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

function StepColumn({
  steps,
  startNumber,
}: {
  steps: Step[];
  startNumber: number;
}) {
  return (
    <div className="space-y-14 border-l-2 border-white pl-7 sm:space-y-16 sm:pl-9 lg:pl-10">
      {steps.map((step, i) => {
        const n = startNumber + i;
        return (
          <div key={step.title}>
            <h3 className="text-[1.35rem] font-bold leading-snug text-white sm:text-2xl lg:text-[1.85rem]">
              {n}. {step.title}
            </h3>
            <p className="mt-3 text-base font-normal leading-relaxed text-white/95 sm:mt-4 sm:text-lg lg:text-xl">
              {step.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function AntikoroznaBannerAccordions({
  steps,
  blocks,
}: {
  steps: Step[];
  blocks: Block[];
}) {
  const mid = Math.ceil(steps.length / 2);
  const leftSteps = steps.slice(0, mid);
  const rightSteps = steps.slice(mid);

  return (
    <>
      <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem]">
        Ako prebieha ošetrenie podvozku?
      </h2>

      <div
        className={`mt-12 grid grid-cols-1 gap-14 border-t border-white/30 pt-12 sm:mt-14 sm:pt-14 md:gap-12 lg:gap-20 ${rightSteps.length > 0 ? "md:grid-cols-2" : ""}`}
      >
        <StepColumn steps={leftSteps} startNumber={1} />
        {rightSteps.length > 0 ? (
          <StepColumn steps={rightSteps} startNumber={mid + 1} />
        ) : null}
      </div>

      <div className="mt-14 divide-y divide-white/30 border-t border-white/30 sm:mt-16">
        {blocks.map((block) => (
          <AccordionRow key={block.title} title={block.title} body={block.body} />
        ))}
      </div>
    </>
  );
}
