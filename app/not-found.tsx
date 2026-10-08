import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  HelpCircle,
  Images,
  MapPin,
  MessageSquareQuote,
  Users,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

const QUICK_LINKS = [
  { label: "Locations", description: "Cities we serve across Alberta", href: "/locations", icon: MapPin },
  { label: "About Us", description: "Our story and our fleet", href: "/about", icon: Users },
  { label: "Gallery", description: "See our coaches in action", href: "/gallery", icon: Images },
  { label: "Reviews", description: "What travellers are saying", href: "/reviews", icon: MessageSquareQuote },
  { label: "Blog", description: "Travel tips and updates", href: "/blog", icon: BookOpen },
  { label: "FAQ", description: "Answers to common questions", href: "/faq", icon: HelpCircle },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="relative flex-1 overflow-hidden bg-surface-muted">
        <div aria-hidden className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-neutral-200/50 blur-3xl" />
        <div aria-hidden className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-neutral-300/40 blur-3xl" />
        <div aria-hidden className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-neutral-200/60 blur-3xl" />

        <Container className="relative flex flex-col items-center gap-4 py-20 text-center sm:py-28">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-800 text-white shadow-soft">
            <Compass className="h-8 w-8" />
          </span>

          <p className="mt-2 bg-gradient-to-br from-primary-600 to-accent-500 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent sm:text-8xl">
            404
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Looks like this route doesn&apos;t run anymore
          </h1>
          <p className="mx-auto max-w-md text-body-text">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
            back on track.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/">Back to home</Button>
            <Button href="/contact" variant="outline">
              Get A Quote
            </Button>
          </div>

          <div className="mt-14 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_LINKS.map(({ label, description, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 text-left shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-bold text-foreground">{label}</span>
                  <span className="block text-xs text-muted-foreground">{description}</span>
                </span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary-600" />
              </Link>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
