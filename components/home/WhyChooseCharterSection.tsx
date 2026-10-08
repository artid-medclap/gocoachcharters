import Image from "next/image";
import {
  BusFront,
  CheckCircle2,
  Luggage,
  MapPinned,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { homeSectionMeta } from "@/lib/home-sections";
import {
  sectionCard,
  sectionCardAccentBar,
  sectionCardBody,
  sectionCardDescription,
  sectionCardTitle,
  sectionImageHover,
  sectionImageOverlay,
  sectionMediaAspect,
} from "@/components/shared/home-section-cards";
import { siteMedia } from "@/lib/site-media";

const FEATURES = [
  {
    icon: BusFront,
    image: siteMedia.coaches.bus02,
    title: "Well-Maintained Coaches",
    description:
      "Vehicles are maintained and serviced on a regular basis.",
  },
  {
    icon: UserCheck,
    image: siteMedia.services.intercity,
    title: "Experienced Drivers",
    description:
      "Drivers are experienced with groups and long-distance routes.",
  },
  {
    icon: MapPinned,
    image: siteMedia.services.charters,
    title: "Flexible Trip Planning",
    description: "Transportation according to your itinerary.",
  },
  {
    icon: Luggage,
    image: siteMedia.coaches.bus04,
    title: "Luxury Coach Buses",
    description:
      "Comfortable seating, ample luggage space, and loaded amenities.",
  },
  {
    icon: CheckCircle2,
    image: siteMedia.home.commitmentFeature,
    title: "One Coach, One Group",
    description:
      "Several people remain together without arranging multiple vehicles.",
  },
  {
    icon: ShieldCheck,
    image: siteMedia.services.corporateTravel,
    title: "Licensed & Insured Fleet",
    description:
      "Fully licensed operators and insured coaches for dependable group travel.",
  },
];

export const whyChooseCharterSection = homeSectionMeta.whyGoCoach;

export function WhyChooseCharterSection() {
  return (
    <HomeSection
      id={whyChooseCharterSection.id}
      sectionName={whyChooseCharterSection.name}
      tone="white"
      className="overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-primary-200/12 blur-[110px]" />

      <Container className="relative">
        <SectionHeading
          layout="split"
          title={
            <>
              Why Groups Choose
              <SectionTitleAccent>Go Coach Charters</SectionTitleAccent>
            </>
          }
          description="Everything you need for comfortable, organized, and stress-free group transportation, all in one coach."
        />

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Featured panel with hero image */}
          <div className="relative min-h-[480px] overflow-hidden rounded-[28px] shadow-[0_28px_72px_rgba(53,0,20,0.22)] ring-1 ring-primary-800/40 sm:min-h-[520px] lg:col-span-5 lg:min-h-[560px]">
            <Image
              src={siteMedia.home.edmontonCalgaryBackground}
              alt="Go Coach charter buses serving Edmonton and Calgary"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/50 to-slate-950/25" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-950/15" />

            {/* Accent frame */}
            <div
              className="pointer-events-none absolute -right-3 -top-3 hidden h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[28px] border border-primary-200/25 sm:block"
              aria-hidden
            />

            <div className="relative flex h-full min-h-[480px] flex-col p-6 sm:min-h-[520px] sm:p-8 lg:min-h-[560px] lg:p-11">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-200 text-primary-950 shadow-[0_8px_24px_rgba(242,179,199,0.35)] ring-1 ring-white/25">
                <BusFront className="h-8 w-8" strokeWidth={1.8} />
              </div>

              <div className="mt-10 flex-1 sm:mt-12">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-200">
                  Group travel made simple
                </p>

                <h3 className="mt-4 max-w-sm text-2xl font-bold leading-[1.14] tracking-[-0.028em] text-white sm:text-3xl sm:leading-[1.12] lg:text-4xl">
                  One Comfortable Coach.
                  <span className="mt-2 block text-primary-200 sm:mt-2.5">
                    One Organized Journey.
                  </span>
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  Bring your group together, simplify logistics, and enjoy the
                  journey with transportation designed around the way your group
                  travels.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10">
                <div className="rounded-2xl border border-white/12 bg-white/[0.08] p-4 backdrop-blur-md ring-1 ring-inset ring-white/10">
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    5,000+
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/55">
                    Groups transported
                  </p>
                </div>

                <div className="rounded-2xl border border-white/12 bg-white/[0.08] p-4 backdrop-blur-md ring-1 ring-inset ring-white/10">
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    13+
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/55">
                    Years of experience
                  </p>
                </div>
              </div>

              {/* Floating thumbnail strip */}
              <div className="mt-6 flex gap-2.5 sm:mt-8">
                {[
                  { src: siteMedia.coaches.bus02, alt: "Go Coach charter fleet" },
                  { src: siteMedia.coaches.bus03, alt: "Group charter bus exterior" },
                  { src: siteMedia.coaches.bus05, alt: "Coach bus on the road" },
                ].map((thumb) => (
                  <div
                    key={thumb.src}
                    className="relative h-14 w-[4.5rem] overflow-hidden rounded-xl ring-2 ring-white/25 sm:h-16 sm:w-20"
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature grid with images */}
          <div className="grid items-stretch gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-7">
            {FEATURES.map(({ icon: Icon, image, title, description }, index) => (
              <article
                key={title}
                className={sectionCard(
                  "flex h-full flex-col overflow-hidden p-0",
                  "light"
                )}
              >
                <div className={sectionMediaAspect}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={sectionImageHover}
                  />
                  <div className={sectionImageOverlay} />
                  <span className="absolute left-4 top-4 text-[11px] font-bold tabular-nums text-white/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-primary-800 shadow-lg ring-1 ring-white/50 transition-colors duration-300 group-hover:bg-primary-200">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                </div>

                <div className={sectionCardBody}>
                  <h3 className={sectionCardTitle}>{title}</h3>
                  <p className={sectionCardDescription}>{description}</p>
                </div>

                <div className={sectionCardAccentBar} />
              </article>
            ))}
          </div>
        </div>
      </Container>
    </HomeSection>
  );
}
