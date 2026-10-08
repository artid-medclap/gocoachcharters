import type { NavItem } from "@/types/common";

/** In-page section links (homepage only; no separate routes for now) */
export const homeSections = {
  top: "/#top",
  commitment: "/#commitment",
  whyGoCoach: "/#why-go-coach",
  services: "/#services",
  safety: "/#safety",
  featuredRoutes: "/#featured-routes",
  amenities: "/#amenities",
  reviews: "/#reviews",
  getStarted: "/#get-started",
  faq: "/#faq",
  gallery: "/gallery",
  contact: "/contact",
  destinations: "/destinations",
  blog: "/about",
  aboutUs: "/about-us",
  policies: "/about-us",
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
  { label: "Reviews", href: homeSections.reviews },
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

export const footerQuickLinks: NavItem[] = [
  { label: "Blog", href: homeSections.blog },
  { label: "Gallery", href: homeSections.gallery },
  { label: "About Us", href: homeSections.aboutUs },
  { label: "Request A Quote", href: homeSections.getStarted },
  { label: "Our Policies", href: homeSections.policies },
  { label: "Privacy Policy", href: homeSections.policies },
  { label: "Reviews", href: homeSections.reviews },
  { label: "FAQ", href: homeSections.faq },
  { label: "Safety", href: homeSections.safety },
];

export const footerLocations: NavItem[] = [
  { label: "Edmonton", href: homeSections.destinations },
  { label: "Calgary", href: homeSections.destinations },
  { label: "Sherwood Park", href: homeSections.destinations },
  { label: "Lloydminster", href: homeSections.destinations },
  { label: "St Albert", href: homeSections.destinations },
  { label: "Saskatchewan", href: homeSections.destinations },
  { label: "Red Deer", href: homeSections.destinations },
];

export const contactPhone = {
  label: "+1 780-238-3866",
  href: "tel:+17802383866",
};
