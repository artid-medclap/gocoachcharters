import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedPartnersSection } from "@/components/home/TrustedPartnersSection";
import { FleetShowcaseSection } from "@/components/home/FleetShowcaseSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BookingStepsSection } from "@/components/home/BookingStepsSection";
import { AmenitiesSection } from "@/components/home/AmenitiesSection";
import { FeaturedRoutesSection } from "@/components/home/FeaturedRoutesSection";
import { GallerySection } from "@/components/home/GallerySection";
import { CustomerReviewsSection } from "@/components/home/CustomerReviewsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CommitmentSection } from "@/components/home/CommitmentSection";
import { WhyChooseCharterSection } from "@/components/home/WhyChooseCharterSection";
import { SafetySection } from "@/components/home/SafetySection";

export const metadata: Metadata = {
  title: "Charter Bus Rentals for Groups Across Alberta",
  description:
    "Book a licensed, insured charter bus for weddings, corporate events, school trips, and sports teams across Calgary, Edmonton, and Alberta.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main className="flex flex-col bg-white">
      <HeroSection />
      <TrustedPartnersSection />
      <CommitmentSection />
      {/* <WhyChooseCharterSection /> */}
      <ServicesSection />
      <FleetShowcaseSection />

      {/* <SafetySection /> */}
      {/* <BookingStepsSection /> */}
      <AmenitiesSection />
      <FeaturedRoutesSection />
      <CustomerReviewsSection />
      {/* <GallerySection /> */}
      {/* <FaqSection /> */}
    </main>
  );
}
