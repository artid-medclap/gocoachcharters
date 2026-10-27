import { FleetVehicleCard } from "@/components/home/FleetVehicleCard";
import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { fleet } from "@/data/fleet";
import { homeSectionMeta } from "@/lib/home-sections";

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
          className="mx-auto capitalize"
          title={
            <>
              Choose the Right Coach
              <SectionTitleAccent>For Your Group</SectionTitleAccent>
            </>
          }
          description="Find a comfortable ride for your group size, travel plans, and destination."
        />

        <div
          className="mx-auto mt-8 grid max-w-7xl min-w-0 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3"
        >
          {fleet.map((vehicle) => (
            <FleetVehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </Container>
    </HomeSection>
  );
}
