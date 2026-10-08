import { ArrowRight, Star } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { reviews } from "@/data/reviews";
import { primaryButtonClass } from "@/lib/constants";
import { homeSectionMeta } from "@/lib/home-sections";
import { sectionTitleStackClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

const reviewsSearchUrl =
  "https://www.google.com/search?q=Go+Coach+Charters+reviews";

export const customerReviewsSection = homeSectionMeta.reviews;

const displayedReviews = reviews.slice(0, 3);
const [featuredReview, ...supportingReviews] = displayedReviews;

const averageRating =
  displayedReviews.reduce((sum, r) => sum + r.rating, 0) /
  displayedReviews.length;

function Stars({
  rating,
  className,
  size = "md",
}: {
  rating: number;
  className?: string;
  size?: "sm" | "md";
}) {
  const starClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const filled = Math.round(rating);

  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            starClass,
            i < filled
              ? "fill-amber-400 text-amber-400"
              : "fill-white/25 text-white/25"
          )}
        />
      ))}
    </div>
  );
}

function StarsOnLight({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "h-4 w-4",
            i < filled
              ? "fill-amber-400 text-amber-400"
              : "fill-primary-100 text-primary-100"
          )}
        />
      ))}
    </div>
  );
}

function GoogleMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-bold tracking-wide",
        inverted ? "text-white/90" : "text-primary-950"
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-lg text-sm font-extrabold",
          inverted ? "bg-white text-primary-900" : "bg-white shadow-sm ring-1 ring-primary-100"
        )}
        aria-hidden
      >
        G
      </span>
      Google
    </span>
  );
}

export function CustomerReviewsSection() {
  if (!featuredReview) return null;

  return (
    <HomeSection
      id={customerReviewsSection.id}
      sectionName={customerReviewsSection.name}
      tone="blush"
      decorated
      className="overflow-hidden"
    >
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            title={
              <span className={sectionTitleStackClass}>
                <span className="block">What Groups Say</span>
                <SectionTitleAccent>About Go Coach</SectionTitleAccent>
              </span>
            }
            description="Honest feedback from weddings, schools, sports teams, and corporate groups across Alberta."
          />
        </div>

        <div
          className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-center gap-4 rounded-2xl border border-primary-100 bg-white px-6 py-5 shadow-[0_10px_36px_rgba(53,0,20,0.06)] sm:mt-12 sm:flex-row sm:justify-between sm:gap-8 sm:px-8"
        >
          <div className="flex items-center gap-4">
            <p className="text-4xl font-semibold tracking-tight text-primary-950">
              {averageRating.toFixed(1)}
            </p>
            <div className="text-left">
              <StarsOnLight rating={averageRating} />
              <p className="mt-1 text-sm text-muted-foreground">
                Average from recent reviews
              </p>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-primary-100 sm:block" aria-hidden />
          <GoogleMark />
        </div>

        <article
          className="relative mx-auto mt-8 max-w-5xl overflow-hidden rounded-[28px] bg-[#7a011f] px-6 py-8 text-white shadow-[0_20px_50px_rgba(122,1,31,0.22)] sm:mt-10 sm:px-10 sm:py-10 lg:px-12 lg:py-12"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            aria-hidden
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
            <div className="shrink-0 lg:w-48">
              <Stars rating={featuredReview.rating} />
              <p className="mt-3 text-3xl font-semibold leading-none text-white/95">
                {featuredReview.rating.toFixed(
                  featuredReview.rating % 1 === 0 ? 0 : 1
                )}
                <span className="text-lg font-medium text-white/70"> / 5</span>
              </p>
              <GoogleMark inverted />
            </div>
            <div className="min-w-0 flex-1">
              <blockquote className="text-lg leading-relaxed text-white/95 sm:text-xl sm:leading-8">
                &ldquo;{featuredReview.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/20 pt-6">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-sm font-bold ring-2 ring-white/25"
                  aria-hidden
                >
                  {featuredReview.initials}
                </span>
                <div>
                  <p className="font-semibold">{featuredReview.name}</p>
                  <p className="text-sm text-white/75">
                    {featuredReview.role} · {featuredReview.location}
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </article>

        <div className="mx-auto mt-6 grid max-w-5xl gap-5 sm:grid-cols-2 sm:mt-8">
          {supportingReviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col rounded-2xl border border-primary-100 bg-white p-6 shadow-[0_8px_28px_rgba(53,0,20,0.05)] transition-shadow hover:shadow-[0_14px_40px_rgba(53,0,20,0.08)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <StarsOnLight rating={review.rating} />
                <span className="text-xs font-semibold text-primary-800">
                  {review.rating.toFixed(review.rating % 1 === 0 ? 0 : 1)}
                </span>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-7 text-body-text sm:text-[0.9375rem]">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <footer className="mt-5 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7a011f] text-xs font-bold text-white"
                  aria-hidden
                >
                  {review.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-primary-950">
                    {review.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href={reviewsSearchUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "min-h-12 gap-2 px-8 py-3 text-sm font-semibold",
              primaryButtonClass
            )}
          >
            See all reviews on Google
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </HomeSection>
  );
}
