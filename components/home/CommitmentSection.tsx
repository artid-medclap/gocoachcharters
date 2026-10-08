import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { CommitmentSectionCarousel } from "@/components/home/CommitmentSectionCarousel";
import { homeSectionMeta } from "@/lib/home-sections";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
  sectionBodyTextClass,
} from "@/components/shared/SectionHeading";

export const commitmentSection = homeSectionMeta.commitment;

export function CommitmentSection() {
  return (
    <HomeSection
      id={commitmentSection.id}
      sectionName={commitmentSection.name}
      tone="white"
      decorated
      className="overflow-hidden"
    >
      <Container className="relative max-w-[90rem]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative isolate min-w-0 w-full">
            <CommitmentSectionCarousel />
          </div>

          <div className="relative z-10 flex min-w-0 flex-col justify-center py-2 lg:py-0 lg:pl-2">
            <SectionHeading
              align="left"
              title={
                <>
                  Edmonton’s Local Charter Bus Company
                  <SectionTitleAccent>for Group Travel</SectionTitleAccent>
                </>
              }
            />

            <div
              className={`mt-2 space-y-4 sm:mt-3 sm:space-y-4 ${sectionBodyTextClass}`}
            >
              <p>
                Go Coach Charters has been providing reliable group
                transportation across Alberta and Western Canada since 2013. We
                offer charter bus rental for school trips, corporate travel,
                sports teams, family outings, events, and long-distance
                journeys.
              </p>
              <p>
                With 13+ years of experience and more than 1,000 groups served,
                our team understands the importance of reliable service and
                safety. Our professional drivers and well-maintained coaches
                help groups travel comfortably and with confidence.
              </p>
              <p>
                We offer 56-passenger motorcoach and minibus rentals for local
                trips, events, tours, and long-distance group travel. These
                buses offer comfortable seating, luggage space, and select
                onboard amenities, including Wi-Fi and onboard washrooms.
              </p>
            </div>

            <Link
              href="/about-us/"
              className="group mt-7 inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-primary-700 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(115,0,40,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-[0_16px_36px_rgba(115,0,40,0.24)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 sm:mt-8"
            >
              Learn More About Go Coach Charters
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </HomeSection>
  );
}
