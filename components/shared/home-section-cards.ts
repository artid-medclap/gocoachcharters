import { sectionCardTitleClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

/** Shared elevation + border for homepage image/text cards */
export function sectionCard(
  className?: string,
  variant: "light" | "soft" | "glass" = "light"
) {
  return cn(
    "group relative overflow-hidden rounded-[28px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    variant === "light" &&
      cn(
        "border border-primary-100 bg-white",
        "shadow-[0_14px_44px_rgba(53,0,20,0.045)]",
        "ring-1 ring-inset ring-white/90",
        "hover:-translate-y-1.5 hover:border-primary-200/80 hover:shadow-[0_26px_64px_rgba(53,0,20,0.075)]"
      ),
    variant === "soft" &&
      cn(
        "border border-primary-100 bg-surface-blush",
        "shadow-[0_10px_36px_rgba(53,0,20,0.035)]",
        "hover:-translate-y-1 hover:border-primary-200/80 hover:bg-white hover:shadow-[0_22px_52px_rgba(53,0,20,0.065)]"
      ),
    variant === "glass" &&
      cn(
        "border border-white/20 bg-white/10 backdrop-blur-md",
        "shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
      ),
    className
  );
}

export const sectionCardAccentBar =
  "absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300 transition-all duration-500 group-hover:w-full";

export const sectionImageOverlay =
  "absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent";

export const sectionMediaAspect =
  "relative aspect-[4/3] w-full shrink-0 overflow-hidden";

export const sectionImageHover =
  "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105";

export function sectionRouteCard(className?: string) {
  return cn(
    "group relative block h-full overflow-hidden rounded-[28px] bg-slate-900",
    "shadow-[0_14px_44px_rgba(53,0,20,0.12)] ring-1 ring-primary-200/25",
    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "hover:-translate-y-1.5 hover:shadow-[0_26px_64px_rgba(53,0,20,0.18)] hover:ring-primary-200/40",
    className
  );
}

export const sectionRouteOverlay =
  "absolute inset-0 bg-slate-950/25 transition-colors duration-500 group-hover:bg-slate-950/35";

export const sectionRouteGradient =
  "absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/10";

export const sectionCardBody =
  "flex min-h-[168px] flex-1 flex-col p-5 sm:min-h-[180px] sm:p-6";

export const sectionCardTitle = sectionCardTitleClass;

export const sectionCardDescription =
  "mt-2 line-clamp-3 flex-1 text-sm leading-6 text-body-text sm:text-base sm:leading-7";
