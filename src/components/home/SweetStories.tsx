"use client";

import { testimonials } from "@/app/home-data";
import { useEffect, useState } from "react";
import { StarIcon } from "./icons";
import { ResponsiveImage } from "./ResponsiveImage";

export function SweetStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = testimonials[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#fcf7e6]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-12 md:py-24">
        <h2 className="mb-10 text-center font-headline text-2xl font-bold text-primary md:mb-14 md:text-4xl">
          Sweet Stories from our Gallery
        </h2>
        <div className="shimmer-surface mx-auto max-w-[78rem] rounded-[1.5rem] bg-white/80 p-3 shadow-[0_4px_14px_rgba(87,59,38,0.08)] md:rounded-[2rem] md:p-6">
          <div className="relative rounded-[1.2rem] bg-white/92 px-5 py-7 md:rounded-[1.7rem] md:px-14 md:py-14">
            <div className="pointer-events-none absolute inset-0 rounded-[1.2rem] border border-[#c79a35] md:rounded-[1.7rem]" />
            <div className="pointer-events-none absolute inset-[10px] rounded-[0.9rem] border border-[#e2bf73] md:inset-[14px] md:rounded-[1.3rem]" />

            <div className="mb-7 flex gap-0 text-[#8a6b13]">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon className="h-4 w-4" key={index} />
              ))}
            </div>
            <p className="mb-8 max-w-[58rem] font-body text-[1rem] font-medium leading-[1.45] text-secondary italic md:mb-12 md:text-[1.2rem]">
              {activeStory.quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white shadow-sm md:h-14 md:w-14">
                <ResponsiveImage alt={activeStory.name} className="object-cover" sizes="56px" src={activeStory.image} />
              </div>
              <div>
                <p className="mb-1.5 font-headline text-[1.45rem] font-bold leading-none text-primary md:mb-2 md:text-xl">
                  {activeStory.name}
                </p>
                <p className="font-label text-[0.68rem] font-bold uppercase tracking-wide text-secondary md:text-[0.75rem]">
                  {activeStory.role}
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-2 md:mt-8">
              {testimonials.map((story, index) => (
                <button
                  aria-label={`Show testimonial from ${story.name}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-primary/25"
                  }`}
                  key={story.name}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
