import Image from "next/image";

import { Container } from "@/components/shared/Container";
import {
  HOME_SECTION_PADDING,
  HomeSectionDecor,
} from "@/components/shared/HomeSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";

const TRUST_LOGOS = [
  { src: siteMedia.partners.universityOfAlberta, alt: "University of Alberta" },
  { src: siteMedia.partners.aglc, alt: "AGLC" },
  { src: siteMedia.partners.atb, alt: "ATB" },
  { src: siteMedia.partners.rockyMountainSkiClub, alt: "Rocky Mountain Seniors Ski Club" },
  { src: siteMedia.partners.angelsScottish, alt: "Angels Scottish SC" },
  { src: siteMedia.partners.qti, alt: "QTI" },
];

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-9 pr-9 sm:gap-12 sm:pr-12 lg:gap-14 lg:pr-14">
      {TRUST_LOGOS.map((logo, index) => (
        <div
          key={`${duplicate ? "duplicate" : "original"}-${logo.src}-${index}`}
          className="flex w-[145px] shrink-0 flex-col items-center sm:w-[170px] lg:w-[185px]"
        >
          <div className="flex h-16 w-full items-center justify-center sm:h-[4.5rem] lg:h-20">
            <Image
              src={logo.src}
              alt={duplicate ? "" : logo.alt}
              aria-hidden={duplicate}
              width={280}
              height={150}
              className="h-auto max-h-16 w-auto max-w-[145px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:max-h-[4.5rem] sm:max-w-[170px] lg:max-h-20 lg:max-w-[185px]"
            />
          </div>
          <span
            className="mt-2 min-h-10 max-w-full text-center text-sm font-semibold leading-5 text-primary-900/80 sm:text-base"
            aria-hidden={duplicate}
          >
            {logo.alt}
          </span>
        </div>
      ))}
    </div>
  );
}

export const trustedPartnersSection = homeSectionMeta.trustedPartners;

export function TrustedPartnersSection() {
  return (
    <section
      id={trustedPartnersSection.id}
      className={`relative w-full overflow-hidden bg-surface-blush ${HOME_SECTION_PADDING}`}
      aria-label={trustedPartnersSection.name}
    >
      <HomeSectionDecor />
      <Container className="relative mb-8 sm:mb-10 lg:mb-16 text-3xl capitalize">
        <SectionHeading
          align="center"
          size="compact"
          title="Trusted by Groups Across Alberta"
          className="max-w-none"
        />
      </Container>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-blush to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-blush to-transparent sm:w-20"
          aria-hidden
        />

        <div className="flex w-max animate-trust-marquee items-center">
          <LogoSet />
          <LogoSet duplicate />
        </div>
      </div>
    </section>
  );
}
