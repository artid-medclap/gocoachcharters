import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";

export const finalCtaSection = homeSectionMeta.getStarted;

export function FinalCtaSection() {
  return (
    <section
      id={finalCtaSection.id}
      aria-label={finalCtaSection.name}
      className="relative isolate flex min-h-[280px] scroll-mt-[4.75rem] items-center justify-center overflow-hidden bg-primary-900 px-5 py-14 text-center text-white sm:min-h-[320px] sm:px-8 sm:py-16"
    >
      <Image
        src={siteMedia.home.heroCityscape}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-primary-950/75" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-950/80 via-primary-900/70 to-primary-950/85" />

      <div className="relative mx-auto max-w-4xl">
        <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
          Book Your Charter Bus Rental Today
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
          Plan your group’s next journey with Go Coach Charters. Request a quote
          today and experience unparalleled service and comfort on the road.
        </p>
        <Link
          href="/booking"
          className="group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Request a Quote
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
