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
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary-900 shadow-[0_4px_14px_rgba(122,1,31,0.12)] sm:h-[3.25rem] sm:w-[3.25rem]";

const assuranceTextClass =
  "text-left text-[0.8125rem] font-semibold leading-[1.25] text-primary-950 sm:text-sm";

export function HeroSection() {
  return (
    <section
      id={heroSection.id}
      aria-label={heroSection.name}
      className="relative isolate min-h-[min(100dvh,920px)] overflow-hidden sm:min-h-[min(92vh,880px)]"
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
        className="relative z-10 flex min-h-[min(100dvh,920px)] flex-col items-center justify-center px-4 pb-36 pt-10 sm:min-h-[min(92vh,880px)] sm:pb-40 sm:pt-14 lg:pb-44 lg:pt-16"
      >
        <div className="mt-8 flex max-w-6xl flex-col items-center gap-8 px-2 py-4 text-center sm:mt-12 sm:gap-10 sm:px-6 sm:py-8 lg:mt-16 lg:gap-12 lg:px-10">
          <h1
            className={`mx-auto mt-0 flex max-w-6xl flex-col items-center gap-4 text-center sm:gap-5 lg:gap-6 ${heroTitleClass}`}
          >
            <span>Charter Bus Rental</span>
            <span className="text-white">Across Alberta</span>
          </h1>

          <div className="flex w-full justify-center">
            <Link
              href={homeSections.getStarted}
              className={cn("group min-h-12 gap-3 px-6 py-3 text-sm", primaryButtonClass)}
            >
              <Image
                src={siteMedia.brand.busIconWhite}
                alt=""
                width={50}
                height={50}
                className="h-9 w-9 object-contain text-md"
              />
              Request a Quote
            </Link>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 px-4 sm:bottom-7 lg:bottom-9">
        <Container className="pointer-events-auto max-w-6xl px-0 sm:px-4">
          <div
            className={cn(
              "overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]",
              heroTrustBarSurfaceClass
            )}
            role="list"
            aria-label="Why book with Go Coach"
          >
            <div
              className="grid grid-cols-1 divide-y divide-primary-200/70 sm:grid-cols-2 sm:divide-x sm:divide-y lg:grid-cols-4 lg:divide-y-0"
            >
              {assurances.map(({ icon: Icon, lines }) => (
                <div
                  key={lines.join(" ")}
                  role="listitem"
                  className="flex items-center justify-center gap-3 px-5 py-5 sm:gap-3.5 sm:px-6 sm:py-6 lg:justify-center"
                >
                  <div className={assuranceIconClass}>
                    <Icon
                      className="h-[1.35rem] w-[1.35rem] text-primary-900 sm:h-6 sm:w-6"
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
        </Container>
      </div>
    </section>
  );
}
