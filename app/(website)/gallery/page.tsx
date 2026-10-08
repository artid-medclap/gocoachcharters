"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Filter,
  MapPin,
  Maximize2,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { allGalleryItems } from "@/data/gallery";
import { bodyTextClass, bodyTextSmClass } from "@/lib/typography";
import type { GalleryItem } from "@/types/gallery";

const CATEGORIES = [
  "All",
  "Fleet",
  "Tours",
  "Corporate",
  "Weddings",
  "Sports",
  "Events",
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return allGalleryItems;
    return allGalleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-surface-blush pt-12 pb-24">
      {/* =========================================================
          HERO BANNER
      ========================================================= */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-primary-100/20 blur-[130px]" />
          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-primary-100/20 blur-[130px]" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f2b3c7]/60 bg-white px-4 py-2 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100">
                <Sparkles className="h-3.5 w-3.5 text-primary-900" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-900">
                Official Photo Gallery
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-primary-950 sm:text-5xl lg:text-6xl">
              Experience the ride
              <span className="block text-primary-800">before you step aboard.</span>
            </h1>

            <p className={`mt-6 ${bodyTextClass}`}>
              Browse our diverse fleet of charter buses, luxury mini coaches, executive interiors,
              and scenic Alberta destinations from Edmonton to Calgary, Banff, and Jasper.
            </p>
          </div>

          {/* =====================================================
              CATEGORY FILTER TABS
          ===================================================== */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="mr-1 hidden items-center gap-1.5 text-xs font-semibold text-primary-950/60 sm:flex">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter:</span>
            </div>
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary-100 text-primary-950 shadow-md shadow-primary-900/10"
                        : "border border-primary-200/60 bg-white text-primary-950/70 hover:border-primary-400 hover:text-primary-950"
                    }
                  `}
                >
                  {category}
                  {category === "All" && (
                    <span
                      className={`
                        ml-1 rounded-full px-1.5 py-0.5 text-[10px]
                        ${isActive ? "bg-white/20 text-white" : "bg-primary-100 text-primary-900"}
                      `}
                    >
                      {allGalleryItems.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          PHOTO GALLERY GRID
      ========================================================= */}
      <section className="relative">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                className="
                  group relative flex flex-col overflow-hidden
                  rounded-3xl border border-primary-200/50 bg-white
                  text-left shadow-sm transition-all duration-300
                  hover:-translate-y-1 hover:border-primary-400 hover:shadow-xl
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600
                "
              >
                {/* Photo */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-primary-900/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    className="
                      object-cover object-center
                      transition-transform duration-700 ease-out
                      group-hover:scale-105
                    "
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                  {/* Category Pill */}
                  <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
                    {item.category}
                  </span>

                  {/* Expand preview icon */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {item.location && (
                      <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-primary-700">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    )}
                    <h2 className="text-lg font-bold text-primary-950 transition-colors group-hover:text-primary-800">
                      {item.title}
                    </h2>
                    {item.description && (
                      <p className={`mt-2 ${bodyTextSmClass}`}>
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-800">
                      View photo details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground/80">
                      Go Coach Alberta
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="my-16 rounded-3xl border border-dashed border-primary-200 bg-white p-12 text-center">
              <Camera className="mx-auto h-10 w-10 text-primary-300" />
              <p className="mt-4 text-lg font-bold text-primary-950">No photos found in this category</p>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-4 rounded-full bg-primary-100 px-6 py-2.5 text-sm font-semibold text-primary-950 transition-colors hover:bg-primary-200"
              >
                Reset filter
              </button>
            </div>
          )}

          {/* =====================================================
              BOTTOM BOOKING CTA
          ===================================================== */}
          <div className="mt-16 rounded-3xl border border-primary-200/60 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-800">
                  <CheckCircle2 className="h-4 w-4" /> Ready for your group trip?
                </span>
                <h3 className="mt-2 text-2xl font-bold text-primary-950 sm:text-3xl">
                  Reserve your coach or get an instant group quote
                </h3>
                <p className={`mt-3 ${bodyTextSmClass}`}>
                  Whether you are planning a corporate conference, a wedding party, or a sporting tournament,
                  our team is ready to assist with custom itineraries and transparent pricing.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                  href="/booking"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-100 px-7 text-sm font-bold text-primary-950 shadow-md transition-all hover:bg-primary-200"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+17802383866"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-200 bg-white px-7 text-sm font-bold text-primary-950 transition-colors hover:bg-primary-50"
                >
                  <Phone className="h-4 w-4 text-primary-800" />
                  <span>Call +1 (780) 238-3866</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          LIGHTBOX MODAL
      ========================================================= */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-900">
                      {selectedItem.category}
                    </span>
                    {selectedItem.location && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 text-primary-700" />
                        {selectedItem.location}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                    {selectedItem.title}
                  </h3>
                  {selectedItem.description && (
                    <p className={`mt-2 ${bodyTextSmClass}`}>
                      {selectedItem.description}
                    </p>
                  )}
                </div>

                <div className="flex w-full items-center gap-3 sm:w-auto">
                  <Link
                    href="/booking"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary-100 px-6 text-sm font-bold text-primary-950 transition-colors hover:bg-primary-200"
                  >
                    <span>Book This Charter</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
