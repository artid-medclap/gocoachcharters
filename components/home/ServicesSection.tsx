import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";
import { sectionCardTitleClass, sectionTitleStackClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

/** Shared label style for service card image badges and “Explore services” links */
const exploreServicesTextClass = "text-sm font-semibold text-primary-800";

const GROUPS = [
  {
    image: siteMedia.services.corporateGroups,
    title: "Corporate Travel",
    description:
      "Conferences, meetings, employee transportation, and corporate events. Keep your guests and team on schedule with Go Coach Charters.",
    imageAlt: "Colleagues working together around a table",
  },
  {
    image: siteMedia.services.schoolGroups,
    title: "School and College Trips",
    description:
      "Safe, on-time transportation for field trips, class excursions, university events, and school tournaments.",
    imageAlt: "Students gathered in a classroom",
  },
  {
    image: siteMedia.services.sportsHockey,
    title: "Sports Teams",
    description:
      "Travel to games, tournaments, and sporting events. Dedicated luggage storage provides space for sports equipment and personal bags.",
    imageAlt: "Youth hockey players competing at a tournament in Edmonton",
  },
  {
    image: siteMedia.services.eventGroups,
    title: "Weddings & Events",
    description:
      "Guest transportation for weddings, festivals, concerts, and private events, helping everyone arrive together safely and comfortably.",
    imageAlt: "Guests celebrating together at an event",
  },
  {
    image: siteMedia.services.charterCoach,
    title: "Church & Religious Groups",
    description:
      "Charter bus transportation for church groups, pilgrimages, and faith-based events, with comfortable travel for groups of all sizes.",
    imageAlt: "Charter coach ready for a group trip",
  },
  {
    image: siteMedia.services.scenicTours,
    title: "Senior Group Tour",
    description:
      "Comfortable charter bus transportation for senior clubs, community groups, and organized outings. Our team makes group transportation simple and stress-free.",
    imageAlt: "A canoe on a clear mountain lake in the Canadian Rockies",
  },
];

export const servicesSection = homeSectionMeta.services;

export function ServicesSection() {
  return (
    <HomeSection
      id={servicesSection.id}
      sectionName={servicesSection.name}
      tone="blush"
      className="overflow-hidden bg-surface-blush"
    >
      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          title={
            <span className={sectionTitleStackClass}>
              <span className="block text-foreground">Charter Bus Services</span>
              <SectionTitleAccent>for Every Kind of Group</SectionTitleAccent>
            </span>
          }
        />

        <div className="mx-auto mt-10 grid max-w-7xl items-stretch gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <Link
              key={group.title}
              href="/booking"
              aria-label={`Explore ${group.title} charter services`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-[0_10px_30px_rgba(53,0,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_20px_42px_rgba(53,0,20,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-primary-50">
                <Image
                  src={group.image}
                  alt={group.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute right-3 top-3 z-10 sm:right-4 sm:top-4"
                >
                  <Badge
                    tone="neutral"
                    className={cn(
                      "border border-primary-100 bg-white/95 px-3 py-1 shadow-sm backdrop-blur-sm",
                      exploreServicesTextClass
                    )}
                  >
                    Demo image
                  </Badge>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center px-5 py-5 text-center sm:px-6 sm:py-6">
                <h3
                  className={`${sectionCardTitleClass} transition-colors group-hover:text-primary-700`}
                >
                  {group.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-body-text">
                  {group.description}
                </p>
                <span
                  className={cn(
                    "mt-auto inline-flex items-center justify-center gap-2 pt-5",
                    exploreServicesTextClass
                  )}
                >
                  Explore services
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </HomeSection>
  );
}
