import Image from "next/image";
import { ClipboardList, MessageSquare, CheckCircle2, Bus, CalendarCheck, Users ,
  ArrowRight,
  } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { homeSectionMeta } from "@/lib/home-sections";
import { siteMedia } from "@/lib/site-media";
import { sectionTitleClass, sectionTitleEmphasisBrandClass } from "@/lib/typography";
import { cn } from "@/lib/utils";

const STEP_IMAGES = [
  { src: siteMedia.booking.stepRequestQuote, alt: "Request a quote" },
  { src: siteMedia.booking.stepConfirmCharter, alt: "Confirm your charter" },
  { src: siteMedia.booking.stepEnjoyRide, alt: "Enjoy the ride" },
];

const STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Request a quote",
    description:
      "Tell us your dates, headcount, and destination through our quote form or by phone.",
    bottomIcon: MessageSquare,
  },
  {
    icon: CheckCircle2,
    step: "02",
    title: "Confirm your charter",
    description:
      "We match you with the right vehicle, lock in your price, and secure your date.",
    bottomIcon: CalendarCheck,
  },
  {
    icon: Bus,
    step: "03",
    title: "Enjoy the ride",
    description:
      "Sit back while our professional driver handles the road and the schedule.",
    bottomIcon: Users,
  },
];

export const bookingStepsSection = homeSectionMeta.bookingSteps;

export function BookingStepsSection() {
  return (
    <section
      id={bookingStepsSection.id}
      aria-label={bookingStepsSection.name}
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      {/* Large pink glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-48
          top-36
          h-[520px]
          w-[520px]
          rounded-full
          bg-primary-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary-100/40
          blur-3xl
        "
      />

      {/* Dot pattern */}
      <div
        className="
          pointer-events-none
          absolute
          right-10
          top-10
          h-24
          w-24
          opacity-60
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, #f2b3c7 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Left curved decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-10
          h-72
          w-72
          rounded-full
          border-[3px]
          border-primary-200/40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-16
          h-80
          w-80
          rounded-full
          border-[3px]
          border-primary-200/25
        "
      />

      <Container className="relative">
        {/* =========================================================
            HEADING
        ========================================================= */}

        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-8 bg-primary-700" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-primary-700
              "
            >
              How it works
            </span>

            <span className="h-[2px] w-8 bg-primary-700" />
          </div>

          {/* Heading */}
          <h2 className={cn("mt-5 text-slate-950", sectionTitleClass)}>
            Book your charter in{" "}
            <span className={sectionTitleEmphasisBrandClass}>3 simple steps</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-500
              sm:text-lg
              sm:leading-8
            "
          >
            A straightforward process from your first message to the moment
            you step off the bus.
          </p>
        </div>

        {/* =========================================================
            STEPS
        ========================================================= */}

        <div className="relative mt-14 sm:mt-20">
          {/* Desktop connector */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-[52px] hidden lg:block">
            <div className="relative h-px border-t-2 border-dashed border-primary-200">
              {/* First arrow */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  bg-white
                  px-5
                "
              >
                <ArrowRight className="h-7 w-7 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
            {STEPS.map(
              (
                {
                  icon: Icon,
                  step,
                  title,
                  description,
                  bottomIcon: BottomIcon,
                },
                index,
              ) => (
                <div
                  key={step}
                  className="relative flex flex-col items-center"
                >
                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div className="relative z-10">
                    {/* Outer ring */}
                    <div
                      className="
                        flex
                        h-[108px]
                        w-[108px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-primary-200/60
                        bg-white
                        shadow-[0_12px_40px_rgba(242,179,199,0.28)]
                      "
                    >
                      {/* Inner circle */}
                      <div
                        className="
                          flex
                          h-[82px]
                          w-[82px]
                          items-center
                          justify-center
                          rounded-full
                          bg-primary-200/45
                        "
                      >
                        <Icon
                          className="h-10 w-10 text-primary-700"
                          strokeWidth={1.6}
                        />
                      </div>
                    </div>

                    {/* Number */}
                    <span
                      className="
                        absolute
                        -bottom-3
                        left-1/2
                        flex
                        h-10
                        w-10
                        -translate-x-1/2
                        items-center
                        justify-center
                        rounded-full
                        border-4
                        border-white
                        bg-primary-100
                        text-xs
                        font-extrabold
                        text-primary-900
                        shadow-lg
                      "
                    >
                      {step}
                    </span>
                  </div>

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <article
                    className="
                      relative
                      mt-7
                      flex
                      min-h-[330px]
                      w-full
                      flex-col
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-slate-100
                      bg-white
                      px-6
                      pb-0
                      pt-12
                      text-center
                      shadow-[0_12px_45px_rgba(15,23,42,0.07)]
                      sm:px-8
                    "
                  >
                    {/* Title */}
                    <h3
                      className="
                        text-xl
                        font-bold
                        tracking-tight
                        text-slate-950
                        sm:text-2xl
                      "
                    >
                      {title}
                    </h3>

                    {/* Small accent */}
                    <div className="mx-auto mt-5 h-1 w-8 rounded-full bg-primary-600" />

                    {/* Description */}
                    <p
                      className="
                        mx-auto
                        mt-5
                        max-w-sm
                        text-sm
                        leading-7
                        text-slate-500
                        sm:text-base
                      "
                    >
                      {description}
                    </p>

                    {/* Bottom decoration with image */}
                    <div className="relative mt-auto flex items-center justify-center overflow-hidden h-[200px]">
                      <div className="absolute inset-0">
                        <Image
                          src={STEP_IMAGES[index].src}
                          alt={STEP_IMAGES[index].alt}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </article>

                  {/* Mobile connector */}
                  {index < STEPS.length - 1 && (
                    <div className="flex items-center justify-center py-1 md:hidden">
                      <div className="h-8 border-l-2 border-dashed border-primary-200" />

                      <ArrowRight
                        className="
                          absolute
                          bottom-[-27px]
                          h-5
                          w-5
                          rotate-90
                          text-primary-500
                        "
                      />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}