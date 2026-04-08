"use client";

import { OFFERS_SECTION_ID, seasonalSpotlight } from "@/app/home-data";
import { ResponsiveImage } from "./ResponsiveImage";

/* Marquee text that scrolls infinitely */
const marqueeWords = [
  "Freshly Baked",
  "✦",
  "Limited Edition",
  "✦",
  "Seasonal Specials",
  "✦",
  "Handcrafted With Love",
  "✦",
  "Weekend Batches",
  "✦",
  "Artisan Selection",
  "✦",
  "Pre-Order Now",
  "✦",
  "Festival Gifting",
  "✦",
];

const staggerHeights = ["md:mt-0", "md:mt-16", "md:mt-6"] as const;
const cardRotations = ["md:-rotate-1", "md:rotate-1", "md:-rotate-[0.5deg]"] as const;

export function EasterQuote() {
  return (
    <section
      className="relative overflow-clip bg-background"
    >
      {/* ── Animated Marquee Banner ── */}
      <div className="relative border-y border-primary/15 bg-primary/10 py-3 md:py-3.5">
        <div className="marquee-track flex whitespace-nowrap">
          {/* Duplicate content for seamless loop */}
          {[0, 1].map((copy) => (
            <div aria-hidden={copy === 1} className="marquee-content flex shrink-0 items-center" key={copy}>
              {marqueeWords.map((word, i) => (
                <span
                  className={`mx-4 text-[0.6rem] font-label font-bold uppercase tracking-[0.35em] md:mx-6 md:text-[0.65rem] ${
                    word === "✦"
                      ? "text-primary/40"
                      : "text-primary"
                  }`}
                  key={`${copy}-${i}`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div 
        className="relative z-10 mx-auto max-w-7xl scroll-mt-16 px-4 py-14 md:scroll-mt-20 md:px-8 md:py-20"
        id={OFFERS_SECTION_ID}
      >
        {/* Top: Large editorial headline */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-20">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/50 px-4 py-1.5 text-[0.55rem] font-label font-bold uppercase tracking-[0.35em] text-tertiary backdrop-blur-sm md:text-[0.6rem]">
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
            This Season&apos;s Edit
          </span>
          <h2 className="mx-auto max-w-3xl font-headline text-[2.2rem] font-bold leading-[1.05] text-primary md:text-6xl lg:text-7xl">
            Sweet moments,{" "}
            <span className="italic text-tertiary">crafted</span>{" "}
            for the season.
          </h2>
          <p className="mt-4 max-w-xl text-sm font-medium text-secondary md:mt-6 md:text-base">
            Limited runs, festive flavours, and weekend-only bakes — each
            designed to make the ordinary feel extraordinary.
          </p>
        </div>

        {/* ── Staggered Lookbook Cards ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:gap-7">
          {seasonalSpotlight.map((item, i) => (
            <div
              className={`group ${staggerHeights[i]}`}
              key={item.title}
            >
              <div
                className={`lookbook-card relative overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white transition-all duration-700 hover:border-primary/25 ${cardRotations[i]} hover:!rotate-0`}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low">
                  <ResponsiveImage
                    alt={item.title}
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={item.image}
                  />
                  {/* Stronger light gradient scrim for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-5 right-5">
                    <span className="rounded-full bg-tertiary-container px-3 py-1 text-[0.5rem] font-label font-bold uppercase tracking-[0.22em] text-on-tertiary-container shadow-lg md:text-[0.55rem]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    {/* Eyebrow */}
                    <span className="mb-2 block text-[0.55rem] font-label font-extrabold uppercase tracking-[0.3em] text-tertiary md:text-[0.6rem]">
                      {item.eyebrow}
                    </span>
                    {/* Title */}
                    <h3 className="mb-3 font-headline text-xl font-bold leading-tight text-primary md:text-2xl">
                      {item.title}
                    </h3>
                    {/* Description - appears on hover */}
                    <p className="mb-4 max-h-0 overflow-hidden text-[0.85rem] font-semibold leading-relaxed text-secondary transition-all duration-500 group-hover:max-h-24">
                      {item.description}
                    </p>
                    {/* CTA */}
                    <button className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[0.58rem] font-label font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 md:text-[0.62rem]">
                      {item.primaryCta}
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12h14m-5-5 5 5-5 5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom decorative line ── */}
        <div className="mt-14 flex items-center justify-center gap-3 md:mt-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/10" />
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-tertiary/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary/60" />
            <span className="h-1 w-1 rounded-full bg-tertiary/40" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/10" />
        </div>
      </div>
    </section>
  );
}
