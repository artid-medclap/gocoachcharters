import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { fleet } from "@/data/fleet";
import { homeSectionMeta } from "@/lib/home-sections";
import { sectionCardTitleClass } from "@/lib/typography";
import { bodyTextSmClass } from "@/lib/typography";

export const fleetShowcaseSection = homeSectionMeta.fleet;

export function FleetShowcaseSection() {
  return (
    <HomeSection
      id={fleetShowcaseSection.id}
      sectionName={fleetShowcaseSection.name}
      tone="white"
      decorated
      className="overflow-hidden"
    >
      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          className="mx-auto"
          title={
            <>
              Choose the Right Coach
              <SectionTitleAccent>For Your Group</SectionTitleAccent>
            </>
          }
          description="Find a comfortable ride for your group size, travel plans, and destination."
        />

        <div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {fleet.map((vehicle) => (
            <article
              key={vehicle.name}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-[0_12px_36px_rgba(53,0,20,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_22px_50px_rgba(53,0,20,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col items-center px-5 py-5 text-center sm:px-6 sm:py-6">
                <h3 className={sectionCardTitleClass}>
                  {vehicle.name}
                </h3>
                <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary-800">
                  <Users className="h-4 w-4" aria-hidden />
                  {vehicle.capacity}
                </div>
                <p className={`mt-3 max-w-sm ${bodyTextSmClass}`}>
                  {vehicle.description}
                </p>

                <Link
                  href="/booking"
                  className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary-900 px-6 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
                >
                  Book Now
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </HomeSection>
  );
}
