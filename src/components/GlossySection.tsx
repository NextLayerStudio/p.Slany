import type { ReactNode } from "react";

function GlossyLayers() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.9)_48%,rgba(255,255,255,0.45)_52%,transparent_65%)]"
      />
    </>
  );
}

type SurfaceTag = "section" | "footer";

type GlossySurfaceProps = {
  as?: SurfaceTag;
  children: ReactNode;
  className?: string;
  id?: string;
};

/** Full-width section or footer: glossy white background, dark text by default. */
export function GlossySurface({
  as: Tag = "section",
  children,
  className = "",
  id,
}: GlossySurfaceProps) {
  return (
    <Tag
      id={id}
      className={`relative isolate overflow-hidden text-neutral-950 ${className}`}
    >
      <GlossyLayers />
      {children}
    </Tag>
  );
}

type GlossyInsetProps = {
  children: ReactNode;
  className?: string;
};

/** Rounded block with the same glossy treatment (e.g. homepage “bublina”). */
export function GlossyInset({ children, className = "" }: GlossyInsetProps) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-[2rem] ${className}`}
    >
      <GlossyLayers />
      <div className="relative">{children}</div>
    </div>
  );
}
