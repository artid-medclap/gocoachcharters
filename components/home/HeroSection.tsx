import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { homeSections } from "@/data/navigation";
import { primaryButtonClass } from "@/lib/constants";
import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";
import { heroTitleClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const heroSection = homeSectionMeta.hero;

export function HeroSection() {
  return (
    <section
      id={heroSection.id}
      aria-label={heroSection.name}
      className="home-hero relative isolate overflow-hidden bg-black min-h-[32rem] lg:min-h-[36rem] xl:min-h-[38rem]"
    >
      <div className="home-hero-media">
        <Image
          src={siteMedia.home.heroPrevostLot}
          alt="Go Coach charter bus on open pavement"
          fill
          priority
          sizes="(min-width: 768px) 100vw, 0px"
          className="for_web object-cover"
        />
        <Image
          src={siteMedia.home.heroPrevostLotMobile}
          alt="Go Coach charter bus on open pavement"
          fill
          sizes="(max-width: 767px) 100vw, 0px"
          className="for_mobile object-cover"
        />
        <div
          className="home-hero-overlay pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
      </div>

      <Container
        className={cn(
          "home-hero-copy relative z-10 flex flex-col justify-center",
          "px-4 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] pb-10 sm:pt-24 sm:pb-14",
          "min-h-[32rem] lg:min-h-[36rem] xl:min-h-[38rem]",
        )}
      >
        <div className="flex w-full max-w-2xl flex-col items-start text-left">
          <h1 className="w-full text-left">
            <span className="block text-lg font-medium tracking-[0.02em] text-white/90 sm:text-xl md:text-2xl">
              Travel With Go Coach Charters
            </span>
            <span
              className={cn(
                heroTitleClass,
                "mt-3 block text-left [text-wrap:wrap] sm:mt-4",
              )}
            >
              Group Travel, Made Easy.
            </span>
          </h1>

          <p className="mt-5 w-full max-w-xl text-left text-sm leading-6 text-white/85 sm:mt-6 sm:text-base sm:leading-7">
            From corporate events and school trips to weddings and group adventures, Go Coach
            Charters makes group transportation simple. Let us help you get where you need to go.
          </p>

          <Link
            href={homeSections.getStarted}
            className={cn(
              "group mt-7 self-start min-h-11 px-6 py-2.5 text-sm sm:mt-8 sm:min-h-12 sm:px-7",
              primaryButtonClass,
            )}
          >
            Request a Quote
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
