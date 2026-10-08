"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, MapPin, Maximize2, Sparkles, X } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { galleryItemsRow1, galleryItemsRow2 } from "@/data/gallery";
import type { GalleryItem } from "@/types/gallery";
import { homeSectionMeta } from "@/lib/home-sections";

export const gallerySection = homeSectionMeta.gallery;

interface GalleryCardProps {
  item: GalleryItem;
  onSelect: (item: GalleryItem) => void;
  priority?: boolean;
}

function GalleryCard({ item, onSelect, priority = false }: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="
        group relative
        h-[200px] w-[280px]
        shrink-0 overflow-hidden
        rounded-2xl border border-primary-200/50
        bg-surface-muted text-left
        shadow-sm transition-all duration-300
        hover:border-primary-400 hover:shadow-xl
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600
        sm:h-[240px] sm:w-[360px] sm:rounded-3xl
        lg:h-[270px] lg:w-[410px]
      "
    >
      {/* Bus / Travel Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 410px"
        priority={priority}
        className="
          object-cover object-center
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />

      {/* Subtle overlay gradient */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t from-black/80 via-black/20 to-transparent
          transition-opacity duration-300
        "
      />

      {/* Category pill on top-left */}
      <div className="absolute left-3.5 top-3.5 sm:left-4 sm:top-4">
        <span
          className="
            inline-flex items-center gap-1.5
            rounded-full bg-black/45 px-3 py-1
            text-[11px] font-semibold text-white
            backdrop-blur-md border border-white/20
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          {item.category}
        </span>
      </div>

      {/* Expand Icon indicator on hover */}
      <div
        className="
          absolute right-3.5 top-3.5 sm:right-4 sm:top-4
          flex h-8 w-8 items-center justify-center
          rounded-full bg-black/40 text-white backdrop-blur-md
          opacity-0 transition-all duration-300
          group-hover:opacity-100 group-hover:scale-100 scale-90
        "
      >
        <Maximize2 className="h-3.5 w-3.5" />
      </div>

      {/* Card Info on bottom */}
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 text-white">
        {item.location && (
          <div className="mb-1 flex items-center gap-1 text-[11px] font-medium text-white/80">
            <MapPin className="h-3 w-3 shrink-0 text-accent-300" />
            <span className="truncate">{item.location}</span>
          </div>
        )}
        <h3 className="text-sm font-bold leading-tight sm:text-base lg:text-lg drop-shadow-sm line-clamp-1">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-1 hidden text-xs text-white/75 line-clamp-1 sm:block">
            {item.description}
          </p>
        )}
      </div>
    </button>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  onSelect,
}: {
  items: GalleryItem[];
  direction?: "left" | "right";
  onSelect: (item: GalleryItem) => void;
}) {
  const animationClass =
    direction === "left" ? "animate-gallery-left" : "animate-gallery-right";

  return (
    <div className="gallery-marquee-container flex w-max overflow-hidden py-2">
      <div className={`flex shrink-0 items-center gap-4 sm:gap-6 ${animationClass}`}>
        {items.map((item) => (
          <GalleryCard
            key={`orig-${item.id}`}
            item={item}
            onSelect={onSelect}
          />
        ))}
      </div>
      {/* Duplicated track for endless loop */}
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-4 sm:gap-6 pl-4 sm:pl-6 ${animationClass}`}
      >
        {items.map((item) => (
          <GalleryCard
            key={`dup-${item.id}`}
            item={item}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section
      id={gallerySection.id}
      aria-label={gallerySection.name}
      className="relative overflow-hidden bg-surface-blush py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND AMBIENT GLOWS
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-primary-100/20 blur-[130px]" />
        <div className="absolute -right-40 bottom-10 h-[480px] w-[480px] rounded-full bg-primary-100/20 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-white/60 blur-[140px]" />
      </div>

      <Container className="relative">
        {/* =======================================================
            HEADER
        ======================================================= */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f2b3c7]/60 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100">
              <Sparkles className="h-3.5 w-3.5 text-primary-900" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-900">
              Fleet & Travel Gallery
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-primary-950 sm:text-5xl lg:text-6xl">
            Moments in motion.
            <span className="block text-primary-800">
              Explore our fleet & journeys.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-primary-950/60 sm:text-lg">
            From executive charters and cross-province tours to athletic teams and wedding shuttles,
            take a visual look at how Go Coach delivers comfortable group travel across Alberta.
          </p>
        </div>
      </Container>

      {/* =========================================================
          HORIZONTAL MOVING GALLERY (TWO OPPOSING TRACKS)
      ========================================================= */}
      <div className="relative mt-12 sm:mt-16 w-full overflow-hidden">
        {/* Left & Right Soft Fade Masks */}
        <div
          className="
            pointer-events-none absolute left-0 top-0 bottom-0 z-10
            w-16 sm:w-32 lg:w-48
            bg-gradient-to-r from-[#fff8fa] via-[#fff8fa]/80 to-transparent
          "
        />
        <div
          className="
            pointer-events-none absolute right-0 top-0 bottom-0 z-10
            w-16 sm:w-32 lg:w-48
            bg-gradient-to-l from-[#fff8fa] via-[#fff8fa]/80 to-transparent
          "
        />

        {/* Moving Row 1 (Right to Left) */}
        <div className="mb-4 sm:mb-6">
          <MarqueeRow
            items={galleryItemsRow1}
            direction="left"
            onSelect={setSelectedItem}
          />
        </div>

        {/* Moving Row 2 (Left to Right) */}
        <div>
          <MarqueeRow
            items={galleryItemsRow2}
            direction="right"
            onSelect={setSelectedItem}
          />
        </div>
      </div>

      {/* =========================================================
          VIEW MORE GALLERY CTA BUTTON
      ========================================================= */}
      <Container className="relative mt-12 sm:mt-16">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Link
            href="/gallery"
            className="
              group inline-flex items-center gap-3.5
              rounded-full bg-primary-100 px-8 py-4
              text-sm sm:text-base font-bold text-primary-950
              shadow-lg shadow-primary-900/10
              transition-all duration-300
              hover:bg-primary-200 hover:shadow-xl hover:shadow-primary-900/15
              hover:-translate-y-0.5 active:translate-y-0
            "
          >
            <Camera className="h-4 w-4 opacity-80" />
            <span>View More Gallery</span>
            <span
              className="
                flex h-7 w-7 items-center justify-center
                rounded-full bg-white/65
                transition-transform duration-300
                group-hover:translate-x-1 group-hover:-translate-y-0.5
              "
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>

          <p className="text-xs sm:text-sm font-medium text-primary-950/50">
            Discover full vehicle specifications, interior layouts, and charter experiences
          </p>
        </div>
      </Container>

      {/* =========================================================
          LIGHTBOX MODAL FOR QUICK PREVIEWS
      ========================================================= */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="
            fixed inset-0 z-50 flex items-center justify-center
            bg-black/80 p-4 backdrop-blur-md
          "
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="
              relative w-full max-w-4xl overflow-hidden
              rounded-2xl sm:rounded-3xl bg-white
              shadow-2xl transition-all
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close dialog"
              className="
                absolute right-4 top-4 z-20
                flex h-10 w-10 items-center justify-center
                rounded-full bg-black/60 text-white
                backdrop-blur-sm transition-colors
                hover:bg-black/80
              "
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-center"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-900">
                      {selectedItem.category}
                    </span>
                    {selectedItem.location && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 text-primary-700" />
                        {selectedItem.location}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                    {selectedItem.title}
                  </h3>
                  {selectedItem.description && (
                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                      {selectedItem.description}
                    </p>
                  )}
                </div>

                <div className="flex w-full items-center gap-3 sm:w-auto">
                  <Link
                    href="/gallery"
                    onClick={() => setSelectedItem(null)}
                    className="
                      inline-flex h-11 items-center justify-center gap-2
                      rounded-full bg-primary-100 px-6 text-sm font-bold text-primary-950
                      transition-colors hover:bg-primary-200
                    "
                  >
                    <span>View More Gallery</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
