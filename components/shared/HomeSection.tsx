import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type HomeSectionTone = "white" | "blush" | "muted" | "brand";

/** Shared vertical rhythm for all homepage sections */
export const HOME_SECTION_PADDING = "py-16 sm:py-20 lg:py-24";

const toneStyles: Record<HomeSectionTone, string> = {
  white: "bg-white",
  blush: "bg-surface-blush",
  muted: "bg-surface-muted",
  brand: "bg-primary-900 text-white",
};

interface HomeSectionProps {
  id?: string;
  /** Accessible name when the section has no visible heading */
  sectionName?: string;
  tone?: HomeSectionTone;
  decorated?: boolean;
  children: ReactNode;
  className?: string;
}

export function HomeSectionDecor({
  variant = "light",
}: {
  variant?: "light" | "brand";
}) {
  if (variant === "brand") {
    return (
      <>
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary-300/10 blur-[100px]"
          aria-hidden
        />
      </>
    );
  }

  return (
    <>
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary-100/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary-100/10 blur-[100px]"
        aria-hidden
      />
    </>
  );
}

export function HomeSection({
  id,
  sectionName,
  tone = "white",
  decorated = false,
  children,
  className,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      aria-label={sectionName}
      className={cn(
        "relative scroll-mt-[4.75rem] sm:scroll-mt-24",
        HOME_SECTION_PADDING,
        toneStyles[tone],
        className
      )}
    >
      {decorated ? (
        <HomeSectionDecor variant={tone === "brand" ? "brand" : "light"} />
      ) : null}
      {children}
    </section>
  );
}
