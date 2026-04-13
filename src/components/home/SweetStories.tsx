"use client";

import { testimonials } from "@/app/home-data";
import { StarIcon } from "./icons";
import { ResponsiveImage } from "./ResponsiveImage";

/* Stagger heights — gives the lookbook asymmetric feel */
const staggerHeights = ["mt-10 md:mt-14", "mt-0", "mt-6 md:mt-20"] as const;
const cardRotations = [
  "-rotate-[0.8deg] md:-rotate-[1.2deg]",
  "rotate-[0.4deg] md:rotate-[0.6deg]",
  "-rotate-[0.5deg] md:-rotate-[0.8deg]",
] as const;

export function SweetStories() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      {/* ── Background atmosphere ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c79a35]/[0.03]" />
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c79a35]/[0.05]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c79a35]/[0.03]" />

        <StarBurst className="absolute top-[12%] left-[7%] h-5 w-5 text-[#c79a35]/[0.08] md:h-7 md:w-7" />
        <StarBurst className="absolute top-[22%] right-[10%] h-4 w-4 text-[#c79a35]/[0.06]" />
        <StarBurst className="absolute bottom-[18%] left-[12%] h-3 w-3 text-[#c79a35]/[0.07]" />
        <StarBurst className="absolute bottom-[28%] right-[5%] h-6 w-6 text-[#c79a35]/[0.05] md:h-8 md:w-8" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-20 md:px-8 md:pt-24 md:pb-32">
        {/* ── Editorial Header ── */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3 md:mb-7">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c79a35]/40 md:w-16" />
            <span className="inline-block h-1.5 w-1.5 rotate-45 border border-[#c79a35]/50" />
            <span className="font-label text-[0.55rem] font-bold uppercase tracking-[0.35em] text-[#8a6b13] md:text-[0.6rem]">
              Client Stories
            </span>
            <span className="inline-block h-1.5 w-1.5 rotate-45 border border-[#c79a35]/50" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c79a35]/40 md:w-16" />
          </div>

          <h2 className="mx-auto max-w-3xl font-headline text-[2.2rem] font-bold leading-[1.05] text-primary md:text-6xl lg:text-[4.2rem]">
            Sweet <span className="italic text-tertiary">stories</span> from
            our gallery
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-medium text-secondary/70 md:mt-6 md:text-base">
            Hear from the people who make every bake worth crafting.
          </p>
        </div>

        {/* ── Sliding Card Track ── */}
        {/* Duplicated cards for seamless infinite loop (same pattern as the EasterQuote marquee) */}
        <div className="group/track -mx-8 overflow-hidden px-8 md:-mx-12 md:px-12">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fcf7e6] to-transparent md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#fcf7e6] to-transparent md:w-20" />

          <div
            className="flex w-max items-start gap-6 lg:gap-8"
            style={{
              animation: "testimonialSlide 28s linear infinite",
            }}
          >
            {/* Set 1 */}
            {testimonials.map((story, index) => (
              <TestimonialCard
                index={index}
                key={`a-${story.name}`}
                story={story}
              />
            ))}
            {/* Set 2 — seamless repeat */}
            {testimonials.map((story, index) => (
              <TestimonialCard
                index={index}
                key={`b-${story.name}`}
                story={story}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom decorative flourish ── */}
        <div className="mt-12 flex items-center justify-center gap-3 md:mt-16">
          <div className="h-px flex-1 max-w-28 bg-gradient-to-r from-transparent to-primary/10" />
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#c79a35]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c79a35]/50" />
            <span className="h-1 w-1 rounded-full bg-[#c79a35]/30" />
          </div>
          <div className="h-px flex-1 max-w-28 bg-gradient-to-l from-transparent to-primary/10" />
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonial Card ─── */

type TestimonialCardProps = {
  story: (typeof testimonials)[number];
  index: number;
};

function TestimonialCard({ story, index }: TestimonialCardProps) {
  return (
    <div
      className={`w-[82vw] shrink-0 sm:w-[55vw] md:w-[380px] lg:w-[400px] ${staggerHeights[index]}`}
    >
      <div
        className={`lookbook-card group relative overflow-hidden rounded-[1.5rem] border border-primary/8 bg-white transition-all duration-700 hover:border-[#c79a35]/30 hover:!rotate-0 ${cardRotations[index]}`}
        /* Pause the marquee when hovering any card */
        onMouseEnter={(e) => {
          const track = e.currentTarget.closest("[style*=animation]");
          if (track instanceof HTMLElement)
            track.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          const track = e.currentTarget.closest("[style*=animation]");
          if (track instanceof HTMLElement)
            track.style.animationPlayState = "running";
        }}
      >
        {/* Inner ornate frame — reveals on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute inset-[6px] rounded-[1.2rem] border border-[#e2bf73]/20" />
        </div>

        {/* Large decorative quotation mark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-4 right-5 font-headline text-[7rem] leading-none text-primary/[0.025] transition-all duration-700 group-hover:text-primary/[0.04] md:top-3 md:right-6 md:text-[9rem]"
        >
          &rdquo;
        </div>

        {/* Card content */}
        <div className="relative z-10 px-6 pt-7 pb-6 md:px-7 md:pt-9 md:pb-7">
          {/* Avatar with gold gradient ring */}
          <div className="mb-6 flex items-center gap-4 md:mb-7">
            <div className="relative shrink-0 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 p-[2.5px] transition-all duration-500 group-hover:from-[#c79a35] group-hover:via-[#e2bf73] group-hover:to-[#c79a35] group-hover:shadow-[0_0_20px_rgba(199,154,53,0.2)]">
              <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white md:h-16 md:w-16">
                <ResponsiveImage
                  alt={story.name}
                  className="object-cover"
                  sizes="64px"
                  src={story.image}
                />
              </div>
            </div>
            <div>
              <p className="font-headline text-[1.2rem] font-bold leading-tight text-primary md:text-[1.35rem]">
                {story.name}
              </p>
              <p className="mt-0.5 font-label text-[0.56rem] font-bold uppercase tracking-[0.25em] text-secondary/50 transition-colors duration-500 group-hover:text-[#c79a35] md:text-[0.6rem]">
                {story.role}
              </p>
            </div>
          </div>

          {/* Star rating */}
          <div className="mb-4 flex gap-0.5 md:mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                className="h-3.5 w-3.5 text-[#c79a35]/40 transition-colors duration-500 group-hover:text-[#c79a35]"
                key={i}
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="min-h-[4.5rem] font-headline text-[1.05rem] leading-[1.6] font-semibold text-primary/80 italic md:min-h-[5rem] md:text-[1.15rem]">
            {story.quote}
          </blockquote>
        </div>

        {/* Bottom gold accent bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-primary/[0.04] to-transparent transition-all duration-700 group-hover:via-[#c79a35]/50" />
      </div>
    </div>
  );
}

/* ─── Star Burst Decoration ─── */
function StarBurst({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0L13.8 10.2 24 12 13.8 13.8 12 24 10.2 13.8 0 12 10.2 10.2z" />
    </svg>
  );
}
