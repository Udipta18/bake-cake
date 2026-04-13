"use client";

import { useState } from "react";
import { faqItems } from "@/app/home-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-transparent">
      {/* Decorative geometry — concentric circles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full border border-[#c79a35]/[0.05] md:h-[28rem] md:w-[28rem]" />
        <div className="absolute -right-32 -bottom-32 h-80 w-80 rounded-full border border-[#c79a35]/[0.05] md:h-[28rem] md:w-[28rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 md:px-10 md:pb-24">
        {/* ── Section Header ── */}
        <div className="mb-10 text-center md:mb-14">
          {/* Gold filigree divider — matches other sections */}
          <div className="mx-auto mb-5 flex items-center justify-center gap-3 md:mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c79a35]/40 md:w-20" />
            <span className="inline-block h-1.5 w-1.5 rotate-45 border border-[#c79a35]/50" />
            <span className="font-label text-[0.55rem] font-bold uppercase tracking-[0.35em] text-[#8a6b13] md:text-[0.6rem]">
              Need Help?
            </span>
            <span className="inline-block h-1.5 w-1.5 rotate-45 border border-[#c79a35]/50" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c79a35]/40 md:w-20" />
          </div>

          <h2 className="mb-3 font-headline text-3xl font-bold text-primary md:text-[2.75rem] md:leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-lg text-sm font-medium text-secondary/80 md:text-base">
            Quick answers for ordering, customization, delivery, and storage.
          </p>
        </div>

        {/* ── Two-column layout: left ornate context + right accordion ── */}
        <div className="mx-auto grid max-w-[64rem] grid-cols-1 gap-8 md:grid-cols-[280px_1fr] md:gap-12">
          {/* Left column — editorial aside */}
          <div className="hidden flex-col items-start md:flex">
            <div className="sticky top-32">
              {/* Decorative number */}
              <span className="mb-4 block font-headline text-[4.5rem] font-bold leading-none text-[#c79a35]/10">
                {String(faqItems.length).padStart(2, "0")}
              </span>
              <p className="mb-2 font-label text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#c79a35]">
                Common Questions
              </p>
              <p className="mb-8 max-w-[220px] text-[0.88rem] leading-relaxed text-secondary/70">
                Everything you need to know before placing your first order with
                us.
              </p>

              {/* Decorative vertical line with dot */}
              <div className="flex flex-col items-center gap-2">
                <span className="h-16 w-px bg-gradient-to-b from-[#c79a35]/30 to-transparent" />
                <span className="h-1.5 w-1.5 rotate-45 border border-[#c79a35]/30" />
              </div>
            </div>
          </div>

          {/* Right column — accordion in ornate frame */}
          <div className="shimmer-surface rounded-[1.5rem] bg-white/80 p-3 shadow-[0_4px_18px_rgba(87,59,38,0.08)] md:rounded-[2rem] md:p-5">
            <div className="relative rounded-[1.2rem] bg-white/95 px-5 py-5 md:rounded-[1.6rem] md:px-9 md:py-7">
              {/* Ornate gold frame */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.2rem] border border-[#c79a35]/25 md:rounded-[1.6rem]" />
              <div className="pointer-events-none absolute inset-[8px] rounded-[0.9rem] border border-[#e2bf73]/15 md:inset-[11px] md:rounded-[1.3rem]" />

              {/* Corner flourishes */}
              <CornerFlourish position="top-left" />
              <CornerFlourish position="top-right" />
              <CornerFlourish position="bottom-left" />
              <CornerFlourish position="bottom-right" />

              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const answerId = `faq-answer-${index}`;
                const isLast = index === faqItems.length - 1;

                return (
                  <article
                    className={`relative${!isLast ? " border-b border-[#c79a35]/8" : ""}`}
                    key={item.question}
                  >
                    <button
                      aria-controls={answerId}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-4 py-5 text-left transition-colors md:py-6"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      type="button"
                    >
                      {/* Numbering */}
                      <span
                        className={`hidden shrink-0 font-headline text-[0.82rem] font-semibold transition-colors duration-300 md:inline ${
                          isOpen
                            ? "text-[#c79a35]/80"
                            : "text-[#c79a35]/35 group-hover:text-[#c79a35]/60"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question text */}
                      <span
                        className={`flex-1 font-headline text-[1.05rem] font-bold leading-snug transition-colors duration-300 md:text-[1.28rem] ${
                          isOpen
                            ? "text-primary"
                            : "text-primary/75 group-hover:text-primary"
                        }`}
                      >
                        {item.question}
                      </span>

                      {/* Toggle icon — plus morphs to minus */}
                      <span
                        aria-hidden="true"
                        className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-400 md:h-8 md:w-8 ${
                          isOpen
                            ? "border-[#c79a35]/35 bg-[#c79a35]/[0.06]"
                            : "border-primary/8 bg-transparent group-hover:border-[#c79a35]/25"
                        }`}
                      >
                        {/* Horizontal bar — always visible */}
                        <span className="absolute h-[1.5px] w-3 rounded-full bg-primary/60 transition-colors duration-300" />
                        {/* Vertical bar — collapses when open */}
                        <span
                          className={`absolute h-3 w-[1.5px] rounded-full bg-primary/60 transition-all duration-300 ${
                            isOpen
                              ? "scale-0 opacity-0"
                              : "scale-100 opacity-100"
                          }`}
                        />
                      </span>
                    </button>

                    {/* Answer — grid-rows animate for smooth collapse */}
                    <div
                      className={`grid overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                      id={answerId}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 pr-6 pl-0 font-body text-[0.9rem] leading-[1.8] text-secondary/80 md:pb-6 md:pr-8 md:pl-8 md:text-[0.95rem]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom decorative flourish — matches EasterQuote pattern */}
        <div className="mt-10 flex items-center justify-center gap-3 md:mt-14">
          <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-primary/10" />
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#c79a35]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c79a35]/50" />
            <span className="h-1 w-1 rounded-full bg-[#c79a35]/30" />
          </div>
          <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-primary/10" />
        </div>
      </div>
    </section>
  );
}

/* ─── Corner Flourish SVG ─── */

function CornerFlourish({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const base =
    "pointer-events-none absolute hidden md:block text-[#c79a35]/20";

  const pos: Record<typeof position, string> = {
    "top-left": "top-[14px] left-[14px]",
    "top-right": "top-[14px] right-[14px] -scale-x-100",
    "bottom-left": "bottom-[14px] left-[14px] -scale-y-100",
    "bottom-right": "bottom-[14px] right-[14px] -scale-x-100 -scale-y-100",
  };

  return (
    <svg
      aria-hidden="true"
      className={`${base} ${pos[position]}`}
      fill="none"
      height="28"
      stroke="currentColor"
      strokeWidth="1"
      viewBox="0 0 28 28"
      width="28"
    >
      <path d="M2 2 Q2 14 14 14 Q14 2 2 2Z" />
      <path d="M5 5 Q5 12 12 12" strokeWidth="0.7" />
      <circle cx="3" cy="3" fill="currentColor" r="1" opacity="0.4" />
    </svg>
  );
}
