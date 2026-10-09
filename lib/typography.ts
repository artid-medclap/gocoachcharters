import { cn } from "@/lib/utils";

/** Shared body copy on light surfaces */
export const bodyTextClass =
  "text-base leading-7 text-body-text sm:text-lg sm:leading-8";

export const bodyTextSmClass =
  "text-sm leading-6 text-body-text sm:text-base sm:leading-7";

/** Primary section titles (h2) — homepage sections */
export const sectionTitleClass = cn(
  "text-balance font-semibold tracking-[-0.03em]",
  "text-[1.625rem] min-[400px]:text-3xl sm:text-4xl lg:text-5xl",
  "leading-[1.12] min-[400px]:leading-[1.1] sm:leading-[1.08] lg:leading-[1.06]"
);

/** Trust bar & secondary band titles */
export const sectionTitleCompactClass = cn(
  "text-balance font-semibold tracking-[-0.025em]",
  "text-xl sm:text-2xl lg:text-3xl",
  "leading-[1.14] sm:leading-[1.12]"
);

/** Titles on dark image / burgundy bands */
export const sectionTitleInvertedClass = cn(
  sectionTitleClass,
  "leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
);

/** Hero h1 — tight kerning + default word gaps (see route card overlays) */
export const heroTitleClass = cn(
  "text-balance font-medium leading-[1.1] tracking-[-0.02em] [word-spacing:normal]",
  "text-[2rem] min-[400px]:text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem]",
  "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
);

/** Stacked lines inside an h2 (consistent vertical rhythm) */
export const sectionTitleStackClass = "flex flex-col gap-1 sm:gap-1.5";

/** Accent line in a section title — no extra top margin (use stack gap instead) */
export const sectionTitleAccentClass = "block mt-0";

export const sectionTitleAccentOnDarkClass = "text-primary-200";

/** Inline accent within a title (FAQ, gallery, booking) */
export const sectionTitleEmphasisClass = "text-primary-800";

export const sectionTitleEmphasisBrandClass = "text-primary-700";

/** Card & grid item titles (h3) */
export const sectionCardTitleClass = cn(
  "font-semibold tracking-[-0.02em] text-primary-950",
  "text-lg sm:text-xl"
);

/** Large feature panel title on dark imagery */
export const featurePanelTitleClass = cn(
  "max-w-sm font-semibold tracking-[-0.025em] text-white",
  "text-2xl leading-[1.14] sm:text-3xl sm:leading-[1.12] lg:text-4xl"
);
