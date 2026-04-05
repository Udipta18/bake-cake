"use client";

import { heroSlides } from "@/app/home-data";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import { ResponsiveImage } from "./ResponsiveImage";

type HeroCarouselProps = {
  currentSlide: number;
  onPrevious: () => void;
  onNext: () => void;
};

export function HeroCarousel({ currentSlide, onPrevious, onNext }: HeroCarouselProps) {
  return (
    <section className="relative h-[78svh] min-h-[470px] w-full overflow-hidden md:h-[700px] md:min-h-0">
      {heroSlides.map((slide, index) => (
        <div className={`carousel-slide min-w-full h-full flex items-center ${currentSlide === index ? "active" : ""}`} key={slide.title}>
          <div className="absolute inset-0 z-0">
            <ResponsiveImage
              alt={slide.title}
              className="object-cover brightness-90"
              priority={index === 0}
              sizes="100vw"
              src={slide.image}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
            <div className="max-w-2xl">
              <span className="mb-3 inline-block rounded-full bg-secondary-container px-3.5 py-1 text-[0.56rem] font-label font-bold uppercase tracking-[0.18em] text-on-secondary-container md:mb-4 md:px-4 md:text-[0.65rem]">
                {slide.eyebrow}
              </span>
              <h1 className="sparkle-text mb-4 max-w-[12ch] font-headline text-[2.25rem] font-bold leading-[1.05] text-primary md:mb-6 md:max-w-none md:text-7xl">
                {slide.title}
              </h1>
              <p className="mb-6 max-w-sm font-body text-base font-medium text-secondary md:mb-8 md:max-w-lg md:text-xl">{slide.description}</p>
              <button className="rounded-xl bg-primary px-6 py-3 text-[0.72rem] font-label font-bold uppercase tracking-[0.14em] text-on-primary transition-colors hover:bg-primary-container md:px-10 md:py-4 md:text-sm md:tracking-widest">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute right-0 bottom-4 left-0 z-20 flex w-full max-w-7xl justify-end px-4 md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:px-8">
        <div className="flex space-x-3 md:space-x-4">
          <button
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-background/60 text-primary backdrop-blur transition-colors hover:bg-primary/10 md:h-12 md:w-12"
            onClick={onPrevious}
          >
            <ArrowLeftIcon className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          <button
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg transition-colors hover:bg-primary-container md:h-12 md:w-12"
            onClick={onNext}
          >
            <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
