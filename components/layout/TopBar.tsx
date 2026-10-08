import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Container } from "@/components/shared/Container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/shared/SocialIcons";
import { homeSections } from "@/data/navigation";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  FOOTER_SOCIAL,
  SOCIAL_LINKS,
  type SocialPlatform,
} from "@/lib/constants";
import type { ComponentType, SVGProps } from "react";

const TOPBAR_SOCIAL_ICONS: Record<
  SocialPlatform,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: XIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

export function TopBar() {
  return (
    <div className="hidden border-b border-border bg-surface-muted text-xs text-muted-foreground md:block">
      <Container className="flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href={homeSections.contact}
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5" /> {CONTACT_PHONE}
          </Link>
          <Link
            href={homeSections.contact}
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Mail className="h-3.5 w-3.5" /> {CONTACT_EMAIL}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {FOOTER_SOCIAL.map(({ platform, label }) => {
            const Icon = TOPBAR_SOCIAL_ICONS[platform];
            return (
              <Link
                key={platform}
                href={SOCIAL_LINKS[platform]}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-900 shadow-sm ring-1 ring-border transition-colors hover:bg-primary-50"
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={3} />
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
