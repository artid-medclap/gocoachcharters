import { siteMedia } from "@/lib/site-media";

export const fleet = [
  {
    id: "motor-coach",
    name: "Motor Coach",
    image: siteMedia.fleet.motorcoachMaroon,
    imageAlt: "Go Coach motor coach parked and ready for group travel",
    capacity: "52–56 passengers",
    description:
      "Full-size MCI and Prevost coaches offer spacious seating and luggage room for larger groups.",
  },
  {
    id: "mini-coach",
    name: "Mini Coach",
    image: siteMedia.fleet.motorCoach,
    imageAlt: "Go Coach black Ford F-550 Mini Coach",
    capacity: "Up to 27 passengers",
    description:
      "A comfortable, easy-to-board option for smaller groups, local trips, and special events.",
  },
  {
    id: "ford-transit",
    name: "Ford Transit",
    image: siteMedia.fleet.fordTransit,
    imageAlt: "Black Ford passenger coach photographed outdoors",
    capacity: "Up to 13 passengers",
    description:
      "A nimble choice for smaller groups, with room for passengers and personal luggage.",
  },
];
