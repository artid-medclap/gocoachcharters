import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { FleetShowcase } from "@/components/home/FleetShowcase";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BookingSteps } from "@/components/home/BookingSteps";
import { Amenities } from "@/components/home/Amenities";
import { FeaturedRoutes } from "@/components/home/FeaturedRoutes";
import { Gallery } from "@/components/home/Gallery";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { CommitmentSection } from "@/components/home/OurCommitment";
import { WhyChooseCharter } from "@/components/home/WhyChooseCharter";
import { SafetySection } from "@/components/home/SafetySection";

export const metadata: Metadata = {
  title: "Charter Bus Rentals for Groups Across Alberta",
  description:
    "Book a licensed, insured charter bus for weddings, corporate events, school trips, and sports teams across Calgary, Edmonton, and Alberta.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CommitmentSection />
      <WhyChooseCharter/>
      <ServicesSection />
      <SafetySection />
      <FeaturedRoutes/>
      {/* <BookingSteps /> */}
      {/* <FleetShowcase /> */}
      <Amenities />
      {/* <Gallery /> */}
      {/* <CustomerReviews /> */}
      {/* <FaqSection /> */}
      <FinalCta />
    </>
  );
}
