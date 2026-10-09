import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Container } from "@/components/shared/Container";
import { primaryButtonClass } from "@/lib/constants";
import { siteMedia } from "@/lib/site-media";
import { cn } from "@/lib/utils";
import { sectionTitleInvertedClass } from "@/lib/typography";

export function ServicesEstimateCtaSection() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-primary-950"
      aria-label="Get a charter bus rental estimate"
    >
      <Image
        src={siteMedia.commitment.servicesCtaBand}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-[1.02] contrast-[1.03]"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-primary-950/82 via-primary-900/38 to-primary-950/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-primary-950/35 via-transparent to-primary-950/15"
      />

      <Badge
        tone="neutral"
        className="absolute left-4 right-4 top-4 z-20 max-w-none border border-white/40 bg-white/90 px-3 py-2 text-left text-xs font-semibold leading-snug text-primary-900 shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:left-auto sm:right-6 sm:top-6 sm:max-w-md sm:px-4 sm:text-sm lg:right-8 lg:top-8"
      >
        Should We Add An Average Charter Bus Cost Calculator Here For visitors?
      </Badge>

      <Container className="relative">
        <div
          className="flex min-h-[min(420px,85dvh)] flex-col items-center justify-center gap-6 px-1 pb-8 pt-24 text-center sm:min-h-[460px] sm:gap-8 sm:px-0 sm:py-20 lg:min-h-[500px] lg:flex-row lg:justify-between lg:gap-14 lg:py-24 lg:pt-20 lg:text-left"
        >
          <div className="max-w-3xl">
            <h2 className={sectionTitleInvertedClass}>
              Get an Estimate for Your{" "}
              <span className="text-primary-100">Charter Bus Rental</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] sm:text-base sm:leading-8">
              Enter your trip details to get an estimated charter bus rental cost
              based on your travel distance, trip duration, and number of buses.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              className={cn(
                "group min-h-14 w-full max-w-md cursor-default gap-3 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.04em] sm:min-h-16 sm:w-auto sm:min-w-[300px] sm:gap-4 sm:px-10 sm:py-5 sm:text-sm sm:tracking-[0.05em] md:min-w-[340px]",
                primaryButtonClass
              )}
            >
              Calculate Bus Rental Cost
              <ArrowUpRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
