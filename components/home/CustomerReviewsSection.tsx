import { ArrowRight, Star, Verified } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { HomeSection } from "@/components/shared/HomeSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { reviews } from "@/data/reviews";
import { homeSectionMeta } from "@/lib/home-sections";

const reviewsSearchUrl =
  "https://www.google.com/search?q=Go+Coach+Charters+reviews";

export const customerReviewsSection = homeSectionMeta.reviews;

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
          title="Customer Testimonials"
        />

        <div className="mx-auto mt-10 grid max-w-5xl items-stretch gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <article
              key={review.id}
              className="flex min-h-[234px] flex-col rounded-2xl border border-primary-100 bg-white p-5 text-primary-950 shadow-[0_12px_36px_rgba(53,0,20,0.08)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-900 text-sm font-semibold text-white">
                    {review.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{review.name}</p>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                      {review.role}, {review.location}
                    </p>
                  </div>
                </div>
                <span
                  aria-label="Google reviews"
                  className="bg-gradient-to-br from-[#4285f4] via-[#34a853] to-[#ea4335] bg-clip-text text-xl font-bold text-transparent"
                >
                  G
                </span>
              </div>

              <div
                className="mt-3 flex items-center gap-0.5"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className={`h-[18px] w-[18px] ${
                      index < Math.round(review.rating)
                        ? "fill-[#fbbc04] text-[#fbbc04]"
                        : "text-neutral-300"
                    }`}
                  />
                ))}
                <Verified
                  aria-label="Verified review"
                  className="ml-1 h-4 w-4 fill-primary-900 text-white"
                />
              </div>

              <p className="mt-3 line-clamp-4 text-sm leading-[1.4] text-primary-950/80">
                {review.quote}
              </p>

              <a
                className="mt-auto pt-2 text-sm text-muted-foreground hover:underline"
                href={reviewsSearchUrl}
                target="_blank"
                rel="noreferrer"
              >
                Read more
              </a>
            </article>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <a
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
            href={reviewsSearchUrl}
            target="_blank"
            rel="noreferrer"
          >
            Read More Reviews
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </HomeSection>
  );
}
