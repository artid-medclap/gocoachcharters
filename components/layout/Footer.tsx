import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/shared/SocialIcons";
import {
  contactPhone,
  footerLocations,
  footerQuickLinks,
  homeSections,
} from "@/data/navigation";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  FOOTER_SOCIAL,
  SITE_NAME,
  SOCIAL_LINKS,
  type SocialPlatform,
} from "@/lib/constants";
import { sectionTitleCompactClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

const footerLinkClass =
  "text-sm text-white underline decoration-white/50 underline-offset-2 transition-colors hover:decoration-white";

const socialIconClass =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-900 shadow-[0_4px_14px_rgba(0,0,0,0.18)] ring-1 ring-white/25 transition-all hover:bg-primary-50 hover:shadow-[0_6px_18px_rgba(0,0,0,0.22)]";

const SOCIAL_ICONS: Record<
  SocialPlatform,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: XIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

function FooterLinkColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3
        className={cn(
          sectionTitleCompactClass,
          "!text-lg !font-semibold !text-white sm:!text-xl"
        )}
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className={footerLinkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-900 text-white">
      <FinalCtaSection />
      <Container
        className="grid gap-10 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.95fr_0.95fr_1.25fr] lg:gap-10 xl:gap-12"
      >
        <div>
          <Link
            href={homeSections.top}
            className="inline-flex rounded-2xl bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-1 ring-white/10"
          >
            <Logo className="h-9 w-auto" linked={false} />
          </Link>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-bold text-white">Address</p>
              <a
                href={CONTACT_ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-1.5 block max-w-xs ${footerLinkClass}`}
              >
                {CONTACT_ADDRESS.line}
              </a>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Phone</p>
              <a href={contactPhone.href} className={`mt-1.5 block ${footerLinkClass}`}>
                {contactPhone.label}
              </a>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Email</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`mt-1.5 block break-all ${footerLinkClass}`}
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {FOOTER_SOCIAL.map(({ platform, label }) => {
              const Icon = SOCIAL_ICONS[platform];
              return (
                <Link
                  key={platform}
                  href={SOCIAL_LINKS[platform]}
                  aria-label={label}
                  className={socialIconClass}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={3} />
                </Link>
              );
            })}
          </div>
        </div>

        <FooterLinkColumn title="Quick Links" items={footerQuickLinks} />
        <FooterLinkColumn title="Locations" items={footerLocations} />

        <div className="md:col-span-2 lg:col-span-1">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <iframe
              title="Go Coach Charters on Google Maps"
              src={CONTACT_ADDRESS.embedUrl}
              className="min-h-[260px] w-full border-0 sm:min-h-[300px] lg:min-h-[340px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={CONTACT_ADDRESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs font-medium text-white/80 underline underline-offset-2 hover:text-white"
          >
            Open in Maps
          </a>
        </div>
      </Container>

      <div className="border-t border-white/20 py-6">
        <Container className="flex flex-col items-center justify-between gap-4 text-xs text-white sm:flex-row">
          <p className="!text-white">
            &copy; {year} {SITE_NAME} Charters. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href={homeSections.policies}
              className="!text-white transition-colors hover:underline hover:!text-white/90"
            >
              Privacy Policy
            </Link>
            <Link
              href={homeSections.policies}
              className="!text-white transition-colors hover:underline hover:!text-white/90"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
