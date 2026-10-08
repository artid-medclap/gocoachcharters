/**
 * Canonical paths for static assets under `public/media`.
 * Import from here instead of hard-coding URLs in components and data files.
 */
export const siteMedia = {
  brand: {
    logo: "/media/brand/logo.webp",
    busIconWhite: "/media/brand/icon-bus-white.webp",
  },
  home: {
    heroFleetWide: "/media/home/hero-fleet-wide.webp",
    heroFleet: "/media/home/hero-fleet.webp",
    heroCityscape: "/media/home/hero-cityscape.webp",
    commitmentFeature: "/media/home/commitment-feature.webp",
    edmontonCalgaryBackground: "/media/home/edmonton-calgary-background.webp",
  },
  booking: {
    stepRequestQuote: "/media/booking/step-request-quote.webp",
    stepConfirmCharter: "/media/booking/step-confirm-charter.webp",
    stepEnjoyRide: "/media/booking/step-enjoy-ride.webp",
  },
  coaches: {
    bus01: "/media/coaches/bus-01.webp",
    bus02: "/media/coaches/bus-02.webp",
    bus03: "/media/coaches/bus-03.webp",
    bus04: "/media/coaches/bus-04.webp",
    bus05: "/media/coaches/bus-05.webp",
    bus06: "/media/coaches/bus-06.webp",
  },
  fleet: {
    motorcoachMaroon: "/media/fleet/motorcoach-maroon.webp",
    motorCoach: "/media/fleet/motor-coach.webp",
    miniCoach: "/media/fleet/mini-coach.webp",
    fordTransit: "/media/fleet/ford-transit.webp",
  },
  services: {
    charterCoach: "/media/services/charter-coach.webp",
    /** Alias used by routes / why-choose cards */
    charters: "/media/services/charter-coach.webp",
    corporate: "/media/services/corporate.webp",
    corporateGroups: "/media/services/corporate-groups.webp",
    corporateTravel: "/media/services/corporate.webp",
    eventGroups: "/media/services/event-groups.webp",
    intercity: "/media/services/intercity.webp",
    privateTours: "/media/services/private-tours.webp",
    scenicTours: "/media/services/scenic-tours.webp",
    schoolGroups: "/media/services/school-groups.webp",
    shuttle: "/media/services/shuttle.webp",
    sports: "/media/services/sports.webp",
    sportsHockey: "/media/services/sports-hockey.webp",
    weddingsEvents: "/media/services/weddings-events.webp",
  },
  partners: {
    universityOfAlberta: "/media/partners/university-of-alberta.webp",
    aglc: "/media/partners/aglc.webp",
    atb: "/media/partners/atb.webp",
    rockyMountainSkiClub: "/media/partners/rocky-mountain-ski-club.webp",
    angelsScottish: "/media/partners/angels-scottish.webp",
    qti: "/media/partners/qti.webp",
  },
  commitment: {
    carousel: [
      "/media/commitment/carousel-01.webp",
      "/media/commitment/carousel-02.webp",
      "/media/commitment/carousel-03.webp",
    ] as const,
    servicesCtaBand: "/media/commitment/services-cta-band.webp",
    video: "/media/videos/commitment.mp4",
  },
  marketing: {
    whySectionCta: "/media/marketing/why-section-cta.webp",
  },
} as const;
