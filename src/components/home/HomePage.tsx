"use client";

import { useEffect, useRef, useState } from "react";
import { BestSellers } from "./BestSellers";
import { EasterQuote } from "./EasterQuote";
import { HeroCarousel } from "./HeroCarousel";
import { Navigation } from "./Navigation";
import { ProductGallery } from "./ProductGallery";
import { PromiseGrid } from "./PromiseGrid";
import { SiteFooter } from "./SiteFooter";
import { SweetStories } from "./SweetStories";
import { WhatsAppButton } from "./WhatsAppButton";

export function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1efd9] font-body text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navigation isDrawerOpen={isDrawerOpen} onToggleDrawer={toggleDrawer} />
      <div
        className="framed-container relative z-10 pt-[56px] transition-all duration-500 md:pt-[64px]"
        style={{ filter: isDrawerOpen ? "blur(10px)" : "none" }}
      >
        <main>
          <HeroCarousel
            currentSlide={currentSlide}
            onNext={() => setCurrentSlide((prev) => (prev + 1) % 2)}
            onPrevious={() => setCurrentSlide((prev) => (prev - 1 + 2) % 2)}
          />
          <ProductGallery />
          <EasterQuote quoteRef={quoteRef} />
          <BestSellers />
          <PromiseGrid />
          <SweetStories />
        </main>
        <SiteFooter />
      </div>
      <WhatsAppButton />
    </div>
  );
}
