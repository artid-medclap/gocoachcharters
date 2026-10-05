import {
  Headset,
  ShieldCheck,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
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
} from "@/components/shared/premium-ui";

const SAFETY_PILLARS: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Go Coach Charters operates as a licensed and insured transportation provider, helping groups travel with confidence.",
  },
  {
    icon: Wrench,
    title: "Regular Vehicle Maintenance",
    description:
      "Our coaches are regularly maintained and serviced to help keep vehicles prepared for group travel.",
  },
  {
    icon: UserCheck,
    title: "Professional Drivers",
    description:
      "Our drivers are experienced in group transportation and understand the responsibilities involved in safely moving passengers.",
  },
  {
    icon: Headset,
    title: "Trip Support",
    description:
      "From planning your pickup points to coordinating your travel schedule, our team helps keep your transportation organized.",
  },
];

export function SafetySection() {
  return (
    <HomeSection id="safety" tone="white" className="overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-16 h-[400px] w-[400px] rounded-full bg-primary-200/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-primary-200/10 blur-[110px]" />

      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          eyebrow="Built for Trust"
          title={
            <>
              Safety & Reliability
              <SectionTitleAccent>Behind Every Trip</SectionTitleAccent>
            </>
          }
          description="Licensed operations, maintained coaches, experienced drivers, and responsive support — so your group can focus on the journey."
        />

        <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:gap-6">
          {SAFETY_PILLARS.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className={premiumCard(
                "flex h-full flex-col overflow-hidden p-0",
                "light"
              )}
            >
              <div className={premiumCardBody}>
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-primary-800 ring-1 ring-primary-200/45 transition-colors duration-300 group-hover:bg-primary-200 group-hover:text-primary-950">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="text-[11px] font-bold tabular-nums text-primary-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className={`mt-5 ${premiumCardTitle}`}>{title}</h3>
                <p className={premiumCardDescription}>{description}</p>
              </div>
              <div className={premiumCardAccentBar} />
            </article>
          ))}
        </div>
      </Container>
    </HomeSection>
  );
}
