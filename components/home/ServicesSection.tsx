import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";
import { sectionCardTitleClass, sectionTitleInvertedClass } from "@/lib/typography";

const GROUPS = [
  {
    image: siteMedia.services.corporateGroups,
    title: "Corporate & Conference Travel",
    description:
      "Bring colleagues together for meetings, conferences, and company events without juggling separate rides.",
    imageAlt: "Colleagues working together around a table",
  },
  {
    image: siteMedia.services.schoolGroups,
    title: "School & Campus Journeys",
    description:
      "Keep students and educators together for campus visits, learning days, and school events.",
    imageAlt: "Students gathered in a classroom",
  },
  {
    image: siteMedia.services.sportsHockey,
    title: "Team & Tournament Travel",
    description:
      "Get players, coaches, and their gear to the next game or tournament together.",
    imageAlt: "Youth hockey players competing at a tournament in Edmonton",
  },
  {
    image: siteMedia.services.eventGroups,
    title: "Wedding & Event Shuttles",
    description:
      "Help guests travel between hotels, venues, and celebrations with one coordinated ride.",
    imageAlt: "Guests celebrating together at an event",
  },
  {
    image: siteMedia.services.charterCoach,
    title: "Church & Community Outings",
    description:
      "Make retreats, gatherings, and community outings easier to plan from pickup to return.",
    imageAlt: "Charter coach ready for a group trip",
  },
  {
    image: siteMedia.services.scenicTours,
    title: "Scenic Day Trips & Tours",
    description:
      "Explore Alberta together on an easy-paced day trip planned around your group's itinerary.",
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
      decorated
      className="overflow-hidden"
    >
      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          title={
            <>
              Charter Bus Services For
              <SectionTitleAccent>Every Kind of Group</SectionTitleAccent>
            </>
          }
          description="From everyday group outings to milestone events, find a charter service that brings everyone along for the journey."
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
              </div>

              <div className="flex flex-1 flex-col items-center px-5 py-5 text-center sm:px-6 sm:py-6">
                <h3
                  className={`${sectionCardTitleClass} transition-colors group-hover:text-primary-700`}
                >
                  {group.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-body-text">
                  {group.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-800">
                  Explore service
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
      {/* Full-width Estimate CTA */}
<section className="relative mt-16 w-full overflow-hidden sm:mt-20 lg:mt-24">
  {/* Background image */}
  <Image
    src={siteMedia.commitment.servicesCtaBand}
    alt=""
    fill
    priority
    sizes="100vw"
    className="object-cover object-center brightness-[1.02] contrast-[1.03]"
  />

  {/* Burgundy tint: stronger on the left for copy, lighter on the right so the photo reads clearly */}
  <div
    aria-hidden
    className="absolute inset-0 bg-gradient-to-r from-primary-950/82 via-primary-900/38 to-primary-950/10"
  />
  <div
    aria-hidden
    className="absolute inset-0 bg-gradient-to-t from-primary-950/35 via-transparent to-primary-950/15"
  />

  {/* CTA content */}
  <Container className="relative">
    <div className="flex min-h-[420px] flex-col items-center justify-center gap-8 py-16 text-center sm:min-h-[460px] sm:py-20 lg:min-h-[500px] lg:flex-row lg:justify-between lg:gap-14 lg:py-24 lg:text-left">
      
      {/* Text */}
      <div className="max-w-3xl">
        <h2 className={sectionTitleInvertedClass}>
          Get an Estimate for Your{" "}
          <span className="text-primary-100">
            Charter Bus Rental
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] sm:text-base sm:leading-8">
          Enter your trip details to get an estimated charter bus rental
          cost based on your travel distance, trip duration, and number of
          buses.
        </p>
      </div>

      {/* Button */}
      <div className="shrink-0">
        <button
          type="button"
          className="group inline-flex min-h-16 cursor-default items-center justify-center gap-4 rounded-full bg-white px-8 py-5 text-sm font-extrabold uppercase tracking-[0.05em] text-primary-900 shadow-[0_12px_35px_rgba(53,0,20,0.25)] sm:min-w-[340px] sm:px-10"
        >
          Calculate Bus Rental Cost
          <ArrowUpRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  </Container>
</section>
    </HomeSection>
  );
}
