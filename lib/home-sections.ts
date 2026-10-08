export interface HomeSectionMeta {
  id: string;
  name: string;
}

/** Stable ids and accessible names for homepage sections (anchors + aria). */
export const homeSectionMeta = {
  hero: { id: "top", name: "Go Coach Charters" },
  trustedPartners: { id: "trusted-partners", name: "Trusted partners" },
  commitment: { id: "commitment", name: "Our commitment" },
  whyGoCoach: { id: "why-go-coach", name: "Why Go Coach Charters" },
  services: { id: "services", name: "Who we serve" },
  fleet: { id: "fleet", name: "Our fleet" },
  safety: { id: "safety", name: "Safety and reliability" },
  bookingSteps: { id: "booking-steps", name: "How booking works" },
  amenities: { id: "amenities", name: "Onboard amenities" },
  featuredRoutes: { id: "featured-routes", name: "Featured routes" },
  gallery: { id: "gallery", name: "Gallery" },
  reviews: { id: "reviews", name: "Customer testimonials" },
  faq: { id: "faq", name: "Frequently asked questions" },
  getStarted: { id: "get-started", name: "Get started" },
} as const satisfies Record<string, HomeSectionMeta>;
