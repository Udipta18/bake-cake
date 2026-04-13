"use client";

import Link from "next/link";
import { useState } from "react";
import { galleryItems } from "@/app/home-data";
import { Navigation } from "@/components/home/Navigation";
import { SiteFooter } from "@/components/home/SiteFooter";
import { WhatsAppButton } from "@/components/home/WhatsAppButton";
import { getOrderWhatsAppLink } from "@/lib/whatsapp";

const promisePoints = [
  "Freshly prepared in small batches.",
  "Finished with the same careful styling seen across the brand.",
  "Packed and delivered so every order still feels special on arrival.",
] as const;

export function AboutPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1efd9] font-body text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navigation isDrawerOpen={isDrawerOpen} onToggleDrawer={toggleDrawer} />
      <div
        className="relative z-10 bg-[#f1efd9] pt-[56px] transition-all duration-500 md:pt-[64px]"
        style={{ filter: isDrawerOpen ? "blur(10px)" : "none" }}
      >
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 py-12 md:px-8 md:py-20">
          {/* Hero Section */}
          <section className="flex flex-col items-center gap-16 md:flex-row md:justify-between">
            <div className="flex-1 space-y-8">
              <span className="inline-block rounded-full bg-secondary-container px-4 py-1.5 text-[0.65rem] font-label font-bold uppercase tracking-[0.25em] text-on-secondary-container">
                Our Story
              </span>
              <h1 className="sparkle-text font-headline text-5xl font-bold italic leading-[1.1] tracking-tight text-primary md:text-7xl">
                Crafted with warmth, detail, and pure love.
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-secondary drop-shadow-sm md:text-xl">
                Lilac & Honey is a handmade dessert brand focused on elegant bakes, thoughtful presentation,
                and memorable sweet moments. From signature cakes and brownies to elegant gifting boxes, every order is created
                to feel incredibly personal, fresh, and beautifully made.
              </p>
            </div>
            
            <div className="flex-1 w-full flex justify-center md:justify-end">
              <div className="ornate-frame relative w-full max-w-sm rounded-[1.8rem] bg-white/30 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                  <div className="ornate-corner ornate-corner-tl z-10" />
                  <div className="ornate-corner ornate-corner-tr z-10" />
                  <div className="ornate-corner ornate-corner-bl z-10" />
                  <div className="ornate-corner ornate-corner-br z-10" />
                  <img
                    src={galleryItems[1].image}
                    alt="Lilac and Honey handcrafted desserts"
                    className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
                  />
                  {/* Subtle vignette overlay for elegance */}
                  <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </section>

          {/* Promise Section */}
          <section className="shimmer-surface relative rounded-[2.5rem] border border-primary/10 bg-white/40 p-8 shadow-[0_8px_32px_rgba(74,44,93,0.04)] backdrop-blur-md md:p-16">
            <div className="mb-14 flex flex-col items-center text-center">
              <span className="mb-4 text-[0.7rem] font-label font-bold uppercase tracking-[0.35em] text-primary/60">
                Our Promise
              </span>
              <h2 className="font-headline text-4xl font-bold italic tracking-tight text-primary md:text-5xl">
                Quality, care, & consistency.
              </h2>
              <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
            <div className="grid gap-6 md:grid-cols-3 md:gap-10">
              {promisePoints.map((point, index) => (
                <div
                  className="bento-card group flex flex-col items-center rounded-3xl bg-white/80 p-8 text-center transition-all hover:-translate-y-2 hover:bg-white/95"
                  key={index}
                >
                  <span className="mb-6 font-headline text-4xl font-bold italic text-[#dfd0b8] transition-colors group-hover:text-[#cca830]">
                    0{index + 1}
                  </span>
                  <p className="text-[0.95rem] font-medium leading-relaxed text-secondary transition-colors group-hover:text-primary">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="flex flex-col items-center justify-center py-10 text-center">
            <h2 className="mb-6 font-headline text-4xl font-bold italic tracking-tight text-primary md:text-5xl">
              Ready to order something sweet?
            </h2>
            <p className="mb-10 max-w-xl text-base font-medium leading-relaxed text-secondary md:text-lg">
              Explore our artisanal collections or message us directly for custom cakes, gifting boxes, and special event orders.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link
                className="rounded-full bg-primary px-8 py-3.5 text-xs font-label font-bold uppercase tracking-[0.2em] text-on-primary shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:bg-primary-container hover:shadow-xl hover:shadow-primary/30"
                href="/collections"
              >
                Explore Collections
              </Link>
              <a
                className="rounded-full border border-primary/20 bg-white/60 px-8 py-3.5 text-xs font-label font-bold uppercase tracking-[0.2em] text-primary transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-white/90"
                href={getOrderWhatsAppLink("Hi Lilac & Honey, I would like to place a custom order.")}
                rel="noreferrer"
                target="_blank"
              >
                Message Us
              </a>
            </div>
          </section>
        </main>
      </div>
      <div className="bg-[#f1efd9] pt-12 md:pt-16" style={{ filter: isDrawerOpen ? "blur(10px)" : "none" }} />
      <div className="bg-[#5d4037]" style={{ filter: isDrawerOpen ? "blur(10px)" : "none" }}>
        <SiteFooter />
      </div>
      <WhatsAppButton />
    </div>
  );
}
