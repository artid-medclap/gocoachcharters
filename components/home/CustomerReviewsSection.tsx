import { ArrowRight, Quote, Star } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import {
  SectionHeading,
  SectionTitleAccent,
} from "@/components/shared/SectionHeading";
import { reviews } from "@/data/reviews";
import { primaryButtonClass } from "@/lib/constants";
import { homeSectionMeta } from "@/lib/home-sections";
import { cn } from "@/lib/utils";

const reviewsSearchUrl =
  "https://www.google.com/search?q=Go+Coach+Charters+reviews";

export const customerReviewsSection = homeSectionMeta.reviews;

const displayedReviews = reviews.slice(0, 3);

const averageRating =
  displayedReviews.reduce((sum, r) => sum + r.rating, 0) /
  displayedReviews.length;

function StarRating({
  rating,
  className,
  size = "md",
}: {
  rating: number;
  className?: string;
  size?: "sm" | "md";
}) {
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
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
            icon,
            i < filled
              ? "fill-amber-400 text-amber-400"
              : "fill-primary-100 text-primary-100"
          )}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  className,
}: {
  review: (typeof displayedReviews)[number];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-primary-100/90 bg-white p-6 shadow-[0_12px_40px_rgba(53,0,20,0.05)] ring-1 ring-inset ring-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_22px_56px_rgba(122,1,31,0.1)] sm:p-7",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#7a011f] to-transparent opacity-80"
        aria-hidden
      />
      <Quote
        className="h-8 w-8 text-primary-200"
        strokeWidth={1.25}
        aria-hidden
      />
      <div className="mt-3 flex items-center justify-between gap-2">
        <StarRating rating={review.rating} size="sm" />
        <span className="text-xs font-bold tabular-nums text-[#7a011f]">
          {review.rating.toFixed(review.rating % 1 === 0 ? 0 : 1)}
        </span>
      </div>
      <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-7 text-body-text sm:text-base sm:leading-8">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <footer className="mt-6 flex items-center gap-3 border-t border-primary-50 pt-5">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7a011f] to-primary-800 text-xs font-bold text-white shadow-[0_4px_14px_rgba(122,1,31,0.25)] ring-2 ring-white"
          aria-hidden
        >
          {review.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-primary-950">
            {review.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {review.role} · {review.location}
          </p>
        </div>
      </footer>
    </article>
  );
}

export function CustomerReviewsSection() {
  return (
    <HomeSection
      id={customerReviewsSection.id}
      sectionName={customerReviewsSection.name}
      tone="blush"
      decorated
      className="overflow-hidden"
    >
      <Container className="relative">
        <SectionHeading
          align="center"
          wide
          className="mx-auto"
          title={
            <>
              What Our
              <SectionTitleAccent>Customers Say</SectionTitleAccent>
            </>
          }
        />

        <div
          className="mx-auto mt-10 max-w-6xl rounded-[32px] bg-gradient-to-br from-primary-100/40 via-white to-surface-blush p-[1px] shadow-[0_24px_64px_rgba(53,0,20,0.08)] sm:mt-14"
        >
          <div
            className="rounded-[31px] bg-white/90 p-6 backdrop-blur-sm sm:p-8 lg:flex lg:gap-10 lg:p-10 xl:gap-14 xl:p-12"
          >
            <aside
              className="mb-8 flex flex-col items-center border-b border-primary-100 pb-8 text-center lg:mb-0 lg:w-[220px] lg:shrink-0 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8 lg:text-left xl:w-[240px] xl:pr-10"
            >
              <p
                className="text-5xl font-semibold tracking-tight text-primary-950 xl:text-6xl"
              >
                {averageRating.toFixed(1)}
              </p>
              <StarRating rating={averageRating} className="mt-3" />
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Average guest rating
              </p>
              <ul className="mt-6 w-full space-y-3 text-sm text-body-text">
                <li className="flex items-center justify-between gap-3 border-b border-primary-50 pb-3">
                  <span>Groups served</span>
                  <span className="font-semibold text-primary-950">1,000+</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span>Serving Alberta</span>
                  <span className="font-semibold text-[#7a011f]">Since 2013</span>
                </li>
              </ul>
            </aside>

            <div className="grid min-w-0 flex-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {displayedReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
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
            Read more reviews
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </HomeSection>
  );
}
