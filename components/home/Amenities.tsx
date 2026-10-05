import Image from "next/image";
import {
  Armchair,
  Bath,
  Luggage,
  Snowflake,
  Users,
  Wifi,
  Zap,
  ShieldCheck,
  Smile,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { premiumCard, premiumCardAccentBar } from "@/components/shared/premium-ui";

const ONBOARD_FEATURES: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Snowflake,
    title: "Climate Control",
    description: "Adjustable AC & heating for all-season comfort.",
  },
  {
    icon: Bath,
    title: " Onboard Restroom",
    description: "Clean and convenient restroom onboard.",
  },
  {
    icon: Luggage,
    title: "Luggage Storage",
    description: "Spacious storage for all your bags and gear.",
  },
  {
    icon: Zap,
    title: "Charging",
    description: "Power outlets & USB ports at every seat.",
  },
  {
    icon: Armchair,
    title: "Reclining Seats",
    description: "Relax in spacious, comfortable reclining seats.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi",
    description: "Stay connected with fast, free onboard Wi-Fi.",
  },
];

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    description: "Well-maintained buses and professional drivers.",
  },
  {
    icon: Users,
    title: "Perfect for Groups",
    description: "Ideal for corporate, school, sports, and private trips.",
  },
  {
    icon: Smile,
    title: "Comfort Guaranteed",
    description: "Everything you need for a great journey.",
  },
] as const;

export function Amenities() {
  return (
    <HomeSection id="amenities" tone="blush" className="overflow-hidden">
      <div className="pointer-events-none absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-primary-200/18 blur-[100px]" />
      <div className="pointer-events-none absolute -right-48 bottom-10 h-[500px] w-[500px] rounded-full bg-primary-200/12 blur-[110px]" />

      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          eyebrow="Onboard Experience"
          title={
            <>
              What&apos;s On
              <SectionTitleAccent>Board?</SectionTitleAccent>
            </>
          }
          description="Everything you need for a comfortable, convenient, and enjoyable journey."
        />

        <div className="mt-10 grid gap-6 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-10">
          {/* Hero image — matches height of 3×2 card grid on large screens */}
          <div className="relative min-h-[340px] lg:col-span-5 lg:min-h-0 lg:h-full">
            <div
              className="pointer-events-none absolute -right-3 -top-3 hidden h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-[28px] bg-primary-200/35 sm:block sm:-right-4 sm:-top-4"
              aria-hidden
            />
            <div className="group relative h-full min-h-[340px] overflow-hidden rounded-[28px] shadow-[0_28px_72px_rgba(53,0,20,0.18)] ring-1 ring-primary-200/30 sm:min-h-[420px]">
              <Image
                src="/images/bus4.webp"
                alt="Inside a GoCoach charter bus"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/25 to-primary-950/10" />

              <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/95 px-4 py-2.5 shadow-lg">
                  <Users className="h-4 w-4 text-primary-700" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary-950">
                      Group comfort
                    </p>
                    <p className="text-[10px] text-primary-950/50">
                      Designed for every mile
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-5 bottom-6 sm:inset-x-7 sm:bottom-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-200">
                  Premium onboard experience
                </p>
                <h3 className="mt-3 max-w-md text-2xl font-bold leading-[1.14] tracking-[-0.028em] text-white sm:text-3xl sm:leading-[1.12] lg:text-4xl">
                  Built for Comfort.
                  <span className="mt-2 block text-primary-200 sm:mt-2.5">
                    Ready for the Road.
                  </span>
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                  Travel together with the comfort, convenience, and amenities
                  your group needs throughout the journey.
                </p>
              </div>
            </div>
          </div>

          {/* Amenity cards — equal 3×2 grid beside image */}
          <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-7 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
            {ONBOARD_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const number = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={feature.title}
                  className={premiumCard(
                    "flex h-full min-h-[168px] flex-col p-5 sm:min-h-[176px] sm:p-6 lg:min-h-0",
                    "light"
                  )}
                >
                  <div className="flex shrink-0 items-start justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-primary-800 ring-1 ring-primary-200/45 transition-all duration-300 group-hover:bg-primary-200 group-hover:text-primary-950">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-bold tabular-nums text-primary-300">
                      {number}
                    </span>
                  </div>

                  <div className="mt-4 flex min-h-0 flex-1 flex-col">
                    <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-primary-950 sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-primary-950/55">
                      {feature.description}
                    </p>
                  </div>

                  <div className={premiumCardAccentBar} />
                </article>
              );
            })}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-6 overflow-hidden rounded-[28px] bg-primary-900 p-2 shadow-[0_20px_56px_rgba(53,0,20,0.2)] ring-1 ring-primary-800 sm:mt-8 sm:p-2.5">
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {TRUST_ITEMS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group flex items-center gap-4 px-5 py-6 sm:px-7 sm:py-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-primary-200 ring-1 ring-white/10">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white">{title}</h4>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </HomeSection>
  );
}
