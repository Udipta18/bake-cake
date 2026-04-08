"use client";

import { useEffect, useState } from "react";
import { BestSellers } from "./BestSellers";
import { EasterQuote } from "./EasterQuote";
import { HeroCarousel } from "./HeroCarousel";
import { Navigation } from "./Navigation";
import { ProductGallery } from "./ProductGallery";
import { PromiseGrid } from "./PromiseGrid";
import { SiteFooter } from "./SiteFooter";
import { SweetStories } from "./SweetStories";
import { SITE_TOP_ID } from "@/app/home-data";
import { WhatsAppButton } from "./WhatsAppButton";

export function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  return (
    <div
      className="relative overflow-x-hidden bg-[#f1efd9] font-body text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed"
      id={SITE_TOP_ID}
    >
      <Navigation isDrawerOpen={isDrawerOpen} onToggleDrawer={toggleDrawer} />
      <div
        className="framed-container relative z-10 mb-0 pt-[56px] duration-500 md:pt-[64px]"
      >
        <main>
          <HeroCarousel
            currentSlide={currentSlide}
            onNext={() => setCurrentSlide((prev) => (prev + 1) % 2)}
            onPrevious={() => setCurrentSlide((prev) => (prev - 1 + 2) % 2)}
          />
          <ProductGallery />
          <EasterQuote />
          <BestSellers />
          <PromiseGrid />
        </main>
      </div>
      {/* One block with SweetStories + footer so page bg / framed gradient never shows between them */}
      <div className="relative z-10 mt-0 bg-[#fcf7e6]">
        <SweetStories />
        {/* <div className="bg-[#f1efd9] pt-12 md:pt-16" style={{ filter: isDrawerOpen ? "blur(10px)" : "none" }} /> */}
        <div className="bg-[#5d4037]" style={{ filter: isDrawerOpen ? "blur(10px)" : "none" }}>
          <SiteFooter />
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
