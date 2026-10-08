import {
  Armchair,
  Bath,
  Coffee,
  Luggage,
  MapPinCheck,
  MonitorPlay,
  Snowflake,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { homeSectionMeta } from "@/lib/home-sections";

const ONBOARD_FEATURES: { icon: LucideIcon; title: string }[] = [
  { icon: Snowflake, title: "Climate Control" },
  { icon: Bath, title: "Onboard Restrooms" },
  { icon: Luggage, title: "Overhead Luggage Storage" },
  { icon: Zap, title: "110V Power Sockets" },
  { icon: Wifi, title: "Wi-Fi" },
  { icon: Coffee, title: "Cup Holders" },
  { icon: MonitorPlay, title: "Multiple Screens" },
  { icon: MapPinCheck, title: "Live Bus Tracking with ETA" },
  { icon: Armchair, title: "Push Reclining Seats" },
];

export const amenitiesSection = homeSectionMeta.amenities;

export function AmenitiesSection() {
  return (
    <HomeSection
      id={amenitiesSection.id}
      sectionName={amenitiesSection.name}
      tone="blush"
      decorated
      className="overflow-hidden"
    >
      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          <div className="lg:pr-4">
            <SectionHeading
              align="left"
              title={
                <>
                  What&apos;s On <SectionTitleAccent>Board?</SectionTitleAccent>
                </>
              }
              description="Comfort and convenience on every trip, without the clutter."
            />
          </div>

          <ul
            className="grid list-none grid-cols-3 gap-x-1 gap-y-3 p-0 sm:gap-x-1.5 sm:gap-y-3.5 md:grid-cols-3 lg:gap-x-2 lg:gap-y-4"
            aria-label="Onboard amenities"
          >
            {ONBOARD_FEATURES.map(({ icon: Icon, title }) => (
              <li key={title} className="min-w-0">
                <article
                  className="group flex flex-col items-center gap-1.5 text-center sm:gap-2"
                >
                  <span
                    className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-primary-100 bg-white text-primary-900 shadow-[0_8px_22px_rgba(88,0,33,0.1)] ring-1 ring-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary-200 group-hover:bg-primary-900 group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(88,0,33,0.16)] sm:h-20 sm:w-20 lg:h-[5.5rem] lg:w-[5.5rem]"
                  >
                    <Icon
                      className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                      strokeWidth={1.85}
                      aria-hidden
                    />
                  </span>
                  <h3
                    className="line-clamp-2 max-w-[8rem] text-[0.9375rem] font-bold leading-snug tracking-[-0.01em] text-primary-950 sm:max-w-[9.25rem] sm:text-base lg:max-w-[10.5rem] lg:text-[1.0625rem]"
                  >
                    {title}
                  </h3>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </HomeSection>
  );
}
