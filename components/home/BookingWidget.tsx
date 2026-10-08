"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, MapPin, Send, Users } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Input } from "@/components/shared/Input";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";

const LOCATIONS = [
  "Calgary, AB",
  "Edmonton, AB",
  "Sherwood Park, AB",
  "Lloydminster, AB",
  "St. Albert, AB",
  "Fort Saskatchewan, AB",
  "Red Deer, AB",
  "Banff, AB",
  "Jasper, AB",
  "Lake Louise, AB",
];

const TRIP_TYPES = [
  { value: "one-way", label: "One way" },
  { value: "round-trip", label: "Round trip" },
  { value: "multi-day", label: "Multi-day" },
] as const;

export function BookingWidget() {
  const router = useRouter();
  const [tripType, setTripType] = useState<(typeof TRIP_TYPES)[number]["value"]>("one-way");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(20);

  const debouncedPickup = useDebounce(pickup);
  const pickupSuggestions = useMemo(
    () =>
      debouncedPickup.length > 0
        ? LOCATIONS.filter((city) => city.toLowerCase().includes(debouncedPickup.toLowerCase())).slice(0, 4)
        : [],
    [debouncedPickup]
  );

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams({
      pickup,
      dropoff,
      date,
      passengers: String(passengers),
      trip: tripType,
    });
    router.push(`/booking?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl rounded-2xl border border-border bg-surface p-6 text-left shadow-soft sm:p-8"
    >
      <div className="flex gap-2">
        {TRIP_TYPES.map((type) => (
          <button
            key={type.value}
            type="button"
            onClick={() => setTripType(type.value)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
              tripType === type.value
                ? "bg-primary-100 text-primary-950"
                : "bg-surface-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-start">
        <div className="relative">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Pickup location
          </label>
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={pickup}
              onChange={(event) => setPickup(event.target.value)}
              placeholder="City or address"
              className="pl-9"
            />
          </div>
          {pickupSuggestions.length > 0 && (
            <ul className="absolute z-10 mt-1 w-full rounded-lg border border-border bg-surface py-1 shadow-card">
              {pickupSuggestions.map((city) => (
                <li key={city}>
                  <button
                    type="button"
                    className="block w-full px-3 py-2 text-left text-sm hover:bg-surface-muted"
                    onClick={() => setPickup(city)}
                  >
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Drop-off location
          </label>
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={dropoff}
              onChange={(event) => setDropoff(event.target.value)}
              placeholder="City or address"
              className="pl-9"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Trip date
          </label>
          <div className="relative">
            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Group size
          </label>
          <div className="relative">
            <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="number"
              min={1}
              max={60}
              value={passengers}
              onChange={(event) => setPassengers(Number(event.target.value))}
              className="pl-9"
            />
          </div>
        </div>

        <div className="flex items-end">
          <Button type="submit" size="lg" className="w-full lg:w-auto">
            <Send className="h-4 w-4" />
            Get a free quote
          </Button>
        </div>
      </div>
    </form>
  );
}
