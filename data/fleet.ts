import { siteMedia } from "@/lib/site-media";

export const fleet = [
  {
    id: "motor-coach",
    name: "Large Group Coach  ",
    image: siteMedia.fleet.motorcoachMaroon,
    imageAlt: "Go Coach motor coach parked and ready for group travel",
    capacity: "52–56 passengers",
    description:
      "Spacious and comfortable transportation for large groups, with plenty of seating and luggage space.",
  },
  {
    id: "mini-coach",
    name: "Full-Size Coach",
    image: siteMedia.fleet.motorCoach,
    imageAlt: "Go Coach black Ford F-550 Mini Coach",
    capacity: "36–56 passengers",
    description:
      "A comfortable choice for medium to large groups, with ample space for passengers and luggage.",
  },
  {
    id: "ford-transit",
    name: "Mini Bus",
    image: siteMedia.fleet.fordTransit,
    imageAlt: "Black Ford passenger coach photographed outdoors",
    capacity: "Up to 20 passengers",
    description:
      "A convenient choice for smaller groups, ideal for local trips, events, and short group outings.",
  },
];
