import { cn } from "@/lib/utils";

/** Shared body copy on light surfaces */
export const bodyTextClass =
  "text-base leading-7 text-body-text sm:text-lg sm:leading-8";

export const bodyTextSmClass =
  "text-sm leading-6 text-body-text sm:text-base sm:leading-7";

/** Primary section titles (h2) — homepage sections */
export const sectionTitleClass = cn(
  "text-balance font-extrabold tracking-[-0.04em]",
  "text-3xl sm:text-4xl lg:text-5xl",
  "leading-[1.12] sm:leading-[1.1] lg:leading-[1.08]"
);

/** Trust bar & secondary band titles */
export const sectionTitleCompactClass = cn(
  "text-balance font-extrabold tracking-[-0.03em]",
  "text-xl sm:text-2xl lg:text-3xl",
  "leading-[1.14] sm:leading-[1.12]"
);

/** Titles on dark image / burgundy bands */
export const sectionTitleInvertedClass = cn(
  sectionTitleClass,
  "leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
);

/** Hero h1 */
export const heroTitleClass = cn(
  "text-balance font-extrabold leading-[1.08] tracking-[-0.045em]",
  "text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem]",
  "text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]"
);

/** Second line under section titles */
export const sectionTitleAccentClass = "mt-2 block sm:mt-2.5";

export const sectionTitleAccentOnDarkClass = "text-primary-200";

/** Inline accent within a title (FAQ, gallery, booking) */
export const sectionTitleEmphasisClass = "text-primary-800";

export const sectionTitleEmphasisBrandClass = "text-primary-700";

/** Card & grid item titles (h3) */
export const sectionCardTitleClass = cn(
  "font-bold tracking-[-0.02em] text-primary-950",
  "text-lg sm:text-xl"
);

/** Large feature panel title on dark imagery */
export const featurePanelTitleClass = cn(
  "max-w-sm font-bold tracking-[-0.028em] text-white",
  "text-2xl leading-[1.14] sm:text-3xl sm:leading-[1.12] lg:text-4xl"
);
