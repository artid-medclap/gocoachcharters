export const SITE_NAME = "GoCoach";
export const SITE_TAGLINE = "Book bus tickets & coach tours in minutes";
export const SITE_DESCRIPTION =
  "Search, compare, and book bus tickets and multi-day coach tours across 500+ routes with verified operators, real-time tracking, and a best price guarantee.";

// Placeholder — replace with the production domain before deploying.
export const SITE_URL = "https://www.gocoach.com";

export const CONTACT_EMAIL = "info@gocoach.ca";
export const CONTACT_PHONE = "+1 780-238-3866";

export const CONTACT_ADDRESS = {
  line: "2016 Sherwood Dr, Sherwood Park, AB T8A 3X3, Canada",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2016+Sherwood+Dr,+Sherwood+Park,+AB+T8A+3X3,+Canada",
  embedUrl:
    "https://www.google.com/maps?q=Go+Coach+Charters+2016+Sherwood+Dr+Sherwood+Park+AB&output=embed",
};

/** Internal routes until public profile URLs are set (swap to https://… when ready). */
export const SOCIAL_LINKS = {
  facebook: "/contact",
  instagram: "/contact",
  twitter: "/contact",
  linkedin: "/contact",
  youtube: "/contact",
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;

export const FOOTER_SOCIAL: { platform: SocialPlatform; label: string }[] = [
  { platform: "instagram", label: "Instagram" },
  { platform: "facebook", label: "Facebook" },
  { platform: "twitter", label: "X (Twitter)" },
  { platform: "linkedin", label: "LinkedIn" },
  { platform: "youtube", label: "YouTube" },
];
