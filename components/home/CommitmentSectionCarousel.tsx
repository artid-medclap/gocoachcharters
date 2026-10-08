"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { siteMedia } from "@/lib/site-media";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    src: siteMedia.commitment.carousel[0],
    alt: "Go Coach Charters motorcoach ready for group travel",
  },
  {
    src: siteMedia.commitment.carousel[1],
    alt: "Comfortable charter bus interior and seating",
  },
  {
    src: siteMedia.commitment.carousel[2],
    alt: "Go Coach team preparing a coach for departure",
  },
] as const;

const ROTATE_MS = 6000;

export function CommitmentSectionCarousel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % SLIDES.length);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [isPlaying, reduceMotion]);

  const stopVideo = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setIsPlaying(false);
  }, []);

  const startVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    setIsPlaying(true);
    try {
      await video.play();
    } catch {
      setIsPlaying(false);
    }
  }, []);

  return (
    <div
      className={cn(
        "relative min-h-[380px] overflow-hidden bg-primary-950 sm:min-h-[460px] lg:min-h-[540px]",
        "rounded-[28px] shadow-[0_24px_60px_rgba(53,0,20,0.18)] ring-1 ring-primary-100/80"
      )}
    >
      {SLIDES.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={index === 0}
          className={cn(
            "object-cover transition-opacity duration-700",
            index === activeIndex && !isPlaying ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
          isPlaying ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        src={siteMedia.commitment.video}
        playsInline
        preload="none"
        onEnded={stopVideo}
      />

      {isPlaying ? (
        <button
          type="button"
          onClick={stopVideo}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-primary-950/70 text-white backdrop-blur-sm transition-colors hover:bg-primary-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Close video"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      ) : (
        <button
          type="button"
          onClick={startVideo}
          className="group absolute inset-0 z-10 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label="Play commitment video"
        >
          <span
            className="flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-primary-900/90 text-white shadow-[0_12px_40px_rgba(53,0,20,0.35)] ring-4 ring-white/35 transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105 sm:h-[4.75rem] sm:w-[4.75rem]"
          >
            <Play className="ml-0.5 h-7 w-7 fill-current" aria-hidden />
          </span>
        </button>
      )}
    </div>
  );
}
