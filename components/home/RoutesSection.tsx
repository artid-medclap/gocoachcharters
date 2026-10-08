import Link from "next/link";
import { ArrowRight, Bus, Clock3, MapPinned } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { charterRoutes } from "@/data/charterRoutes";
import { formatCurrency } from "@/lib/formatters";

export function RoutesSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Charter routes across Alberta"
            description="From city corridors to mountain destinations, these are the trips groups book most."
          />
          <Link
            href="/routes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            View all routes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {charterRoutes.map((route) => (
            <Link
              key={route.id}
              href={`/routes/${route.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-800 text-white">
                <Bus className="h-5 w-5" />
              </span>
              <div className="mt-4 flex items-center justify-between text-sm font-semibold text-foreground">
                <span>{route.from}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                <span>{route.to}</span>
              </div>
              <p className="mt-3 text-sm text-body-text">{route.description}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" /> {route.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MapPinned className="h-3.5 w-3.5" /> {route.distance}
                </span>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-lg font-bold text-foreground">
                  {formatCurrency(route.priceFrom)}
                  <span className="text-xs font-normal text-muted-foreground"> onwards</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
