import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import {
  contactPhone,
  footerCompany,
  footerExplore,
  homeSections,
} from "@/data/navigation";
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-900 text-white">
      <FinalCtaSection />
      <Container className="grid gap-10 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr] lg:gap-12">
        <div>
          <span className="inline-flex rounded-2xl bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-1 ring-white/10">
            <Logo className="h-9 w-auto" />
          </span>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white">
            {SITE_TAGLINE}
          </p>
          <Link
            href={homeSections.getStarted}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:underline"
          >
            Start your quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerExplore.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white transition-colors hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerCompany.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white transition-colors hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={contactPhone.href}
                className="flex items-center gap-2.5 text-white transition-colors hover:underline"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#7c011e] ring-1 ring-white">
                  <Phone className="h-4 w-4" />
                </span>
                {CONTACT_PHONE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2.5 text-white transition-colors hover:underline"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#7c011e] ring-1 ring-white">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all">{CONTACT_EMAIL}</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-white">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#7c011e] ring-1 ring-white">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="pt-1.5">Serving Calgary, Edmonton &amp; Alberta</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/20 py-6">
        <Container className="flex flex-col items-center justify-between gap-4 text-xs text-white sm:flex-row">
          <p>
            &copy; {year} {SITE_NAME} Charters. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href={homeSections.commitment}
              className="transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href={homeSections.commitment}
              className="transition-colors hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
