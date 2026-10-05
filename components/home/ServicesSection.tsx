import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Map,
  Trophy,
  Users,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { homeSections } from "@/data/navigation";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import {
  premiumCard,
  premiumCardAccentBar,
  premiumCardBody,
  premiumCardDescription,
  premiumCardTitle,
  premiumImageHover,
  premiumImageOverlay,
  premiumMediaAspect,
} from "@/components/shared/premium-ui";

const GROUPS = [
  {
    icon: Briefcase,
    image: "/services/corporate-travel.webp",
    title: "Corporate Travel",
    description:
      "Conferences, meetings, employee transportation, and company events.",
  },
  {
    icon: GraduationCap,
    image: "/services/school-trips.webp",
    title: "School Trips",
    description:
      "Transportation for students, teachers, and educational groups.",
  },
  {
    icon: Trophy,
    image: "/services/sports-teams.webp",
    title: "Sports Teams",
    description:
      "Travel to games, tournaments, and sporting events.",
  },
  {
    icon: HeartHandshake,
    image: "/services/weddings-events.webp",
    title: "Weddings & Events",
    description:
      "Keep guests moving between hotels, venues, and event locations.",
  },
  {
    icon: Map,
    image: "/services/private-tours (1).webp",
    title: "Private Tours",
    description:
      "Group transportation for sightseeing and multi-day trips.",
  },
  {
    icon: Users,
    image: "/services/corporate-travel.webp",
    title: "Family Outings",
    description:
      "Reunions, celebrations, and day trips with room for the whole group.",
  },
];

export function ServicesSection() {
  return (
    <HomeSection id="services" tone="blush" className="overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-primary-200/12 blur-[110px]" />

      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          eyebrow="Who We Serve"
          title={
            <>
              Transportation for
              <SectionTitleAccent>Every Kind of Group</SectionTitleAccent>
            </>
          }
          description="From business travel and school trips to weddings, sporting events, private tours, and family outings, we keep your group moving comfortably together."
        />

        <div className="mx-auto mt-10 grid max-w-7xl items-stretch gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          {GROUPS.map((group, index) => {
            const Icon = group.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={group.title}
                className={premiumCard(
                  "flex h-full flex-col overflow-hidden p-0 lg:col-span-2",
                  "light"
                )}
              >
                <div className={premiumMediaAspect}>
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={premiumImageHover}
                  />
                  <div className={premiumImageOverlay} />

                  <span className="absolute left-4 top-4 text-[11px] font-bold tabular-nums text-white/90">
                    {number}
                  </span>

                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-primary-200/50 group-hover:bg-primary-200 group-hover:text-primary-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className={premiumCardBody}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-primary-800 ring-1 ring-primary-200/45 transition-colors duration-300 group-hover:bg-primary-200 group-hover:text-primary-950">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-800/70">
                      Group transportation
                    </p>
                  </div>

                  <h3 className={`mt-4 ${premiumCardTitle}`}>{group.title}</h3>

                  <p className={premiumCardDescription}>{group.description}</p>
                </div>

                <div className={premiumCardAccentBar} />
              </article>
            );
          })}
        </div>

        <div
          className={premiumCard(
            "mx-auto mt-8 max-w-7xl px-7 py-8 sm:mt-10 sm:px-8 sm:py-8 lg:mt-12",
            "light"
          )}
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:gap-8 sm:text-left">
            <div className="max-w-xl">
              <h3 className="text-xl font-bold tracking-[-0.02em] text-primary-950 sm:text-2xl">
                Planning Group Trip
              </h3>
              <p className="mt-2 text-sm leading-6 text-primary-950/55 sm:text-base sm:leading-7">
                Share your trip details and get a transportation quote tailored
                to your group.
              </p>
            </div>
            <Link
              href={homeSections.getStarted}
              className="group inline-flex h-12 w-full shrink-0 items-center justify-center gap-2.5 rounded-full bg-primary-800 px-8 text-sm font-bold text-white shadow-[0_12px_32px_rgba(53,0,20,0.18)] transition-all hover:bg-primary-900 hover:shadow-[0_16px_40px_rgba(53,0,20,0.22)] sm:w-auto sm:min-w-[200px]"
            >
              Get a Quote
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
          <div className={premiumCardAccentBar} />
        </div>
      </Container>
    </HomeSection>
  );
}
