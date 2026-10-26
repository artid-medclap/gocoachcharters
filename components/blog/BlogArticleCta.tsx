import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { primaryButtonClass } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function BlogArticleCta() {
  return (
    <div className="mt-10 rounded-2xl bg-primary-900 px-6 py-10 text-center text-white sm:px-8">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Need a coach for this trip?</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/90 sm:text-base">
        Share your itinerary with Go Coach Charters and we will help you book the right vehicle for
        your group.
      </p>
      <Link
        href="/booking"
        className={cn(
          "mt-6 inline-flex min-h-12 items-center justify-center gap-2 px-8",
          primaryButtonClass,
        )}
      >
        Get a charter quote
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
