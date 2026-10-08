import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { homeSections } from "@/data/navigation";
import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";

export const heroSection = homeSectionMeta.hero;

const assurances = [
  { icon: CalendarCheck, label: "Serving Groups Since 2013" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: UserRoundCheck, label: "Professional Drivers" },
  { icon: UsersRound, label: "1000+ Groups Served" },
];

export function HeroSection() {
  return (
    <section
      id={heroSection.id}
      aria-label={heroSection.name}
      className="relative isolate min-h-[min(100dvh,920px)] overflow-hidden sm:min-h-[min(92vh,880px)]"
    >
      <Image
        src={siteMedia.home.heroFleetWide}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_58%]"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-primary-950/70 via-primary-950/25 to-transparent sm:h-64"
        aria-hidden
      />

      <Container
        className="relative z-10 flex min-h-[min(100dvh,920px)] flex-col items-center justify-center px-4 pb-[7.5rem] pt-10 sm:min-h-[min(92vh,880px)] sm:pb-[8.5rem] sm:pt-14 lg:pb-36 lg:pt-16"
      >
        <div className="max-w-4xl px-2 py-4 text-center sm:px-6 sm:py-8 lg:px-10">
          <h1
            className="mx-auto mt-0 max-w-4xl text-balance text-center text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            Charter Bus Rental Service
            <span className="mt-2 block text-primary-200 sm:mt-2.5">
              Across Alberta
            </span>
          </h1>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Link
              href={homeSections.getStarted}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary-900 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(88,0,33,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-[0_16px_36px_rgba(88,0,33,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary-900 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(88,0,33,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-[0_16px_36px_rgba(88,0,33,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700">
              <Image
                src={siteMedia.brand.busIconWhite}
                alt=""
                width={50}
                height={50}
                className="h-6 w-6 object-contain"
              />
              <span>Get a Free Quote</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 sm:px-6 sm:pb-5 lg:pb-6">
        <Container className="max-w-6xl">
          <div
            className="overflow-hidden rounded-[1.75rem] border border-primary-100/80 bg-white shadow-[0_20px_50px_rgba(53,0,20,0.22)] sm:rounded-full"
            role="list"
            aria-label="Why book with Go Coach"
          >
            <div className="grid grid-cols-1 divide-y divide-primary-100 sm:grid-cols-2 sm:divide-x sm:divide-y lg:grid-cols-4 lg:divide-y-0">
              {assurances.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="group flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4 lg:justify-center lg:px-4 xl:px-5"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-900 text-white shadow-[0_8px_20px_rgba(88,0,33,0.28)] ring-4 ring-primary-100 transition-transform duration-300 group-hover:scale-105"
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="text-left text-sm font-bold leading-snug text-primary-900 sm:text-[0.9375rem]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
