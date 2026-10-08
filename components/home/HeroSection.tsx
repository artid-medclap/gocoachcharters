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
  {
    icon: CalendarCheck,
    lines: ["Serving Groups Since", "2013"],
  },
  { icon: ShieldCheck, lines: ["Licensed & Insured"] },
  { icon: UserRoundCheck, lines: ["Professional Drivers"] },
  { icon: UsersRound, lines: ["1000+ Groups Served"] },
];

const assuranceIconClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#7c011e] shadow-[0_4px_14px_rgba(0,0,0,0.22)] ring-1 ring-white/40 sm:h-12 sm:w-12 sm:rounded-2xl";

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
        className="pointer-events-none absolute inset-0 z-[1] bg-black/60"
        aria-hidden
      />

      <Container
        className="relative z-10 flex min-h-[min(100dvh,920px)] flex-col items-center justify-center px-4 pb-[7.5rem] pt-10 sm:min-h-[min(92vh,880px)] sm:pb-[8.5rem] sm:pt-14 lg:pb-36 lg:pt-16"
      >
        <div className="mt-8 flex max-w-4xl flex-col items-center gap-8 px-2 py-4 text-center sm:mt-12 sm:gap-10 sm:px-6 sm:py-8 lg:mt-16 lg:gap-12 lg:px-10">
          <h1
            className={`mx-auto mt-0 flex max-w-4xl flex-col items-center gap-4 text-center sm:gap-5 lg:gap-6 ${heroTitleClass}`}
          >
            <span>Charter Bus Rental Service</span>
            <span className="text-white">Across Alberta</span>
          </h1>

          <div className="flex w-full justify-center">
            <Link
              href={homeSections.getStarted}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary-900 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(88,0,33,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-[0_16px_36px_rgba(88,0,33,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
            >
              <Image
                src={siteMedia.brand.busIconWhite}
                alt=""
                width={50}
                height={50}
                className="h-6 w-6 object-contain"
              />
              Request a Quote
            </Link>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-3 sm:px-6 sm:pb-4 lg:pb-5">
        <Container className="max-w-6xl">
          <div
            className="rounded-2xl bg-black/45 px-4 py-5 ring-1 ring-white/15 backdrop-blur-sm sm:rounded-3xl sm:px-6 sm:py-6 lg:px-8"
            role="list"
            aria-label="Why book with Go Coach"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {assurances.map(({ icon: Icon, lines }) => (
                <div
                  key={lines.join(" ")}
                  role="listitem"
                  className="flex items-center gap-3 sm:gap-3.5 lg:justify-center"
                >
                  <div className={assuranceIconClass}>
                    <Icon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={2.5} aria-hidden />
                  </div>
                  <div className="min-w-0 text-left">
                    {lines.map((line) => (
                      <p
                        key={line}
                        className="!text-sm font-semibold leading-snug !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:!text-[0.9375rem]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
