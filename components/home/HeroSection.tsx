import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ShieldCheck, UserRoundCheck, UsersRound } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { homeSections } from "@/data/navigation";
import { heroTrustBarSurfaceClass, primaryButtonClass } from "@/lib/constants";
import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";
import { heroTitleClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const heroSection = homeSectionMeta.hero;

const assurances = [
  { icon: CalendarCheck, lines: ["Serving Groups", "Since 2013"] },
  { icon: ShieldCheck, lines: ["Licensed &", "Insured"] },
  { icon: UserRoundCheck, lines: ["Professional", "Drivers"] },
  { icon: UsersRound, lines: ["1000+ Groups", "Served"] },
] as const;

const assuranceIconClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-primary-900 shadow-[0_4px_14px_rgba(122,1,31,0.12)] min-[400px]:h-10 min-[400px]:w-10 sm:h-[3.25rem] sm:w-[3.25rem]";

const assuranceTextClass =
  "text-left text-[0.75rem] font-semibold leading-[1.2] text-primary-950 min-[400px]:text-[0.8125rem] sm:text-sm sm:leading-[1.25]";

function HeroTrustBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem]",
        heroTrustBarSurfaceClass,
        className
      )}
      role="list"
      aria-label="Why book with Go Coach"
    >
      <div
        className="grid grid-cols-2 divide-x divide-y divide-primary-200/70 lg:grid-cols-4 lg:divide-y-0"
      >
        {assurances.map(({ icon: Icon, lines }) => (
          <div
            key={lines.join(" ")}
            role="listitem"
            className="flex items-center justify-center gap-1.5 px-2 py-3 min-[400px]:gap-2 min-[400px]:px-3 min-[400px]:py-3.5 sm:gap-3 sm:px-5 sm:py-5 lg:gap-3.5 lg:px-6 lg:py-6"
          >
            <div className={assuranceIconClass}>
              <Icon
                className="h-[1.15rem] w-[1.15rem] text-primary-900 min-[400px]:h-[1.35rem] min-[400px]:w-[1.35rem] sm:h-6 sm:w-6"
                strokeWidth={2.35}
                aria-hidden
              />
            </div>
            <p className={`${assuranceTextClass} min-w-0`}>
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id={heroSection.id}
      aria-label={heroSection.name}
      className="relative isolate overflow-hidden lg:min-h-[min(92vh,880px)]"
    >
      <Image
        src={siteMedia.home.heroGoCoachBuses}
        alt="Go Coach Charters fleet of motorcoaches parked on an open lot"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[rgba(0,0,0,0.49)]"
        aria-hidden
      />

      <Container
        className={cn(
          "relative z-10 flex flex-col items-center",
          "px-3 pt-[calc(4.5rem+env(safe-area-inset-top,0px))] pb-10 sm:px-4 sm:pt-20 sm:pb-12",
          "lg:min-h-[min(92vh,880px)] lg:justify-center lg:pb-44 lg:pt-16 xl:pb-48"
        )}
      >
        <div
          className={cn(
            "flex w-full max-w-6xl flex-col items-center text-center lg:px-6 xl:px-10"
          )}
        >
          <div className="flex w-full flex-col items-center gap-5 sm:gap-7 lg:gap-10 xl:gap-12">
            <h1
              className={cn(
                "mx-auto flex w-full max-w-6xl flex-col items-center gap-3 text-center sm:gap-5 lg:gap-6",
                heroTitleClass
              )}
            >
              <span>Charter Bus Rental</span>
              <span className="text-white">Across Alberta</span>
            </h1>

            <div className="flex w-full justify-center">
              <Link
                href={homeSections.getStarted}
                className={cn(
                  "group min-h-12 w-full max-w-[280px] gap-2 px-5 py-3 text-sm sm:max-w-xs sm:gap-3 sm:px-6 lg:w-auto lg:max-w-none",
                  primaryButtonClass
                )}
              >
                <Image
                  src={siteMedia.brand.busIconWhite}
                  alt=""
                  width={50}
                  height={50}
                  className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                />
                Request a Quote
              </Link>
            </div>
          </div>

          <HeroTrustBar className="mt-6 w-full sm:mt-8 lg:hidden" />
        </div>
      </Container>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden px-4 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] lg:block lg:px-6"
      >
        <Container className="pointer-events-auto max-w-6xl px-0">
          <HeroTrustBar />
        </Container>
      </div>
    </section>
  );
}
