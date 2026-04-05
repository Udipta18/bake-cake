"use client";

import { easterQuote } from "@/app/home-data";
import { RefObject, useEffect } from "react";

type EasterQuoteProps = {
  quoteRef: RefObject<HTMLQuoteElement | null>;
};

export function EasterQuote({ quoteRef }: EasterQuoteProps) {
  useEffect(() => {
    if (!quoteRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll(".flow-line");
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.classList.add("visible");
              }, index * 800);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(quoteRef.current);

    return () => observer.disconnect();
  }, [quoteRef]);

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#fcfae4] via-[#f1efd9] to-[#fcfae4] py-24 text-center md:py-32">
      <div className="egg-decoration egg-1" />
      <div className="egg-decoration egg-2" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex min-h-[150px] items-center justify-center md:min-h-[200px]">
          <blockquote
            className="sparkle-text mx-auto max-w-5xl px-4 font-headline text-2xl font-bold leading-tight text-primary italic md:px-8 md:text-5xl"
            ref={quoteRef}
          >
            {easterQuote.map((line, index) => (
              <span className={`flow-line ${index > 0 ? "mt-4 md:mt-6" : ""}`} key={line}>
                {line}
              </span>
            ))}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
