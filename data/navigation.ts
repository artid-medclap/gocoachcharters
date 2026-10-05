import type { NavItem } from "@/types/common";

/** In-page section links (homepage only — no separate routes for now) */
export const homeSections = {
  top: "/#top",
  commitment: "/#commitment",
  whyGoCoach: "/#why-go-coach",
  services: "/#services",
  safety: "/#safety",
  featuredRoutes: "/#featured-routes",
  amenities: "/#amenities",
  getStarted: "/#get-started",
} as const;

export const mainNav: NavItem[] = [
  {
    label: "Locations",
    href: homeSections.featuredRoutes,
    children: [
      { label: "Calgary", href: homeSections.featuredRoutes },
      { label: "Edmonton", href: homeSections.featuredRoutes },
      { label: "Sherwood Park", href: homeSections.featuredRoutes },
      { label: "Lloydminster", href: homeSections.featuredRoutes },
      { label: "St. Albert", href: homeSections.featuredRoutes },
      { label: "Fort Saskatchewan", href: homeSections.featuredRoutes },
    ],
  },
  { label: "About Us", href: homeSections.commitment },
  { label: "Gallery", href: homeSections.services },
  { label: "Reviews", href: homeSections.whyGoCoach },
  { label: "Blog", href: homeSections.commitment },
  { label: "FAQ", href: homeSections.amenities },
];

export const footerExplore: NavItem[] = [
  { label: "Home", href: homeSections.top },
  { label: "Our Commitment", href: homeSections.commitment },
  { label: "Why Go Coach", href: homeSections.whyGoCoach },
  { label: "Who We Serve", href: homeSections.services },
  { label: "Safety & Reliability", href: homeSections.safety },
  { label: "Featured Routes", href: homeSections.featuredRoutes },
  { label: "Onboard Amenities", href: homeSections.amenities },
];

export const footerCompany: NavItem[] = [
  { label: "About us", href: homeSections.commitment },
  { label: "Our fleet & coaches", href: homeSections.whyGoCoach },
  { label: "Group services", href: homeSections.services },
  { label: "Charter routes", href: homeSections.featuredRoutes },
  { label: "Get a quote", href: homeSections.getStarted },
];

export const contactPhone = {
  label: "+1 780-238-3866",
  href: "tel:+17802383866",
};
