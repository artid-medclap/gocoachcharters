import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ShieldCheck, UserRoundCheck, UsersRound } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { homeSections } from "@/data/navigation";
import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";
import { heroTitleClass } from "@/lib/typography";

export const heroSection = homeSectionMeta.hero;

const assurances = [
  { icon: CalendarCheck, label: "Serving Groups Since 2013" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: UserRoundCheck, label: "Professional Drivers" },
  { icon: UsersRound, label: "1000+ Groups Served" },
] as const;

const assuranceIconClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary-200/90 bg-white text-primary-900 shadow-sm sm:h-12 sm:w-12 sm:rounded-2xl";

const assuranceBarClass =
  "w-full rounded-2xl border border-white/35 bg-white/10 px-4 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-md backdrop-saturate-150 sm:rounded-3xl sm:px-6 sm:py-6 supports-[backdrop-filter]:bg-white/12";

const assuranceTextClass =
  "!text-sm font-medium leading-snug !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:!text-[0.9375rem]";

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
        className="relative z-10 flex min-h-[min(100dvh,920px)] flex-col items-center justify-center px-4 pb-[11rem] pt-10 sm:min-h-[min(92vh,880px)] sm:pb-[12rem] sm:pt-14 lg:pb-44 lg:pt-16"
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
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary-900 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(122,1,31,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-[0_16px_36px_rgba(122,1,31,0.34)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
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

      <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 sm:px-6 sm:pb-5 lg:pb-6">
        <Container className="max-w-6xl">
          <div className={assuranceBarClass}>
            <div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5 lg:flex lg:items-center lg:justify-between lg:gap-6"
              role="list"
              aria-label="Why book with Go Coach"
            >
              {assurances.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="flex items-center gap-3 sm:gap-3.5"
                >
                  <div className={assuranceIconClass}>
                    <Icon
                      className="h-5 w-5 text-primary-900 sm:h-[1.3rem] sm:w-[1.3rem]"
                      strokeWidth={2.35}
                      aria-hidden
                    />
                  </div>
                  <p
                    className={`${assuranceTextClass} min-w-0 text-left lg:whitespace-nowrap`}
                  >
                    {label}
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
