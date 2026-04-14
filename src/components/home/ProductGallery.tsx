import Link from "next/link";
import { galleryItems } from "@/app/home-data";
import { ResponsiveImage } from "./ResponsiveImage";

const badges = ["Signature", "Handcrafted", "Seasonal"] as const;

export function ProductGallery() {
  const [featured, ...rest] = galleryItems;

  return (
    <section className="bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-24">
        {/* Section header */}
        <div className="mb-10 flex flex-col items-start justify-between md:mb-14 md:flex-row md:items-end">
          <div className="mb-6 max-w-xl md:mb-0">
            <span className="mb-3 inline-block rounded-full bg-secondary-container px-3.5 py-1 text-[0.56rem] font-label font-bold uppercase tracking-[0.18em] text-on-secondary-container md:mb-4 md:px-4 md:text-[0.6rem]">
              Curated for You
            </span>
            <h2 className="mb-3 font-headline text-3xl font-bold text-primary md:mb-4 md:text-5xl">
              Artisanal Collections
            </h2>
            <p className="text-base font-medium text-secondary md:text-lg">
              Curated boxes of whimsy and flavor, hand-crafted daily in our
              boutique kitchen.
            </p>
          </div>
          <Link
            className="group flex items-center gap-2 border-b border-primary/30 pb-2 text-[0.7rem] font-label font-bold uppercase tracking-widest text-primary transition-colors hover:border-primary hover:text-primary-container md:text-[0.75rem]"
            href="/collections"
          >
            View All Collections
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6 lg:gap-7">
          {/* ── Featured (large) card ── */}
          <Link
            className="bento-card group relative col-span-1 overflow-hidden rounded-[1.25rem] md:col-span-7 md:row-span-2"
            href={`/collections?category=${encodeURIComponent(featured.category)}`}
          >
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full md:min-h-[540px]">
              <ResponsiveImage
                alt={featured.title}
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                priority
                sizes="(min-width: 768px) 58vw, 100vw"
                src={featured.image}
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Badge */}
              <span className="absolute top-5 right-5 rounded-full bg-tertiary-container px-3 py-1 text-[0.55rem] font-label font-bold uppercase tracking-[0.2em] text-on-tertiary-container shadow-lg md:top-7 md:right-7 md:px-4 md:text-[0.6rem]">
                {badges[0]}
              </span>

              {/* Bottom info — slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col p-5 md:p-8">
                <div className="mb-3 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.6rem] font-label font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm">
                    {featured.price}
                  </span>
                </div>
                <h3 className="mb-2 font-headline text-2xl font-bold text-white md:text-4xl lg:text-5xl">
                  {featured.title}
                </h3>
                <p className="max-w-md text-sm font-medium text-white/80 md:text-base">
                  {featured.description}
                </p>
                <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[0.65rem] font-label font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white/25 md:text-xs">
                  Explore Collection
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
                      strokeWidth="2.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* ── Smaller cards (stacked right) ── */}
          {rest.map((item, i) => (
            <Link
              className="bento-card group relative col-span-1 overflow-hidden rounded-[1.25rem] md:col-span-5"
              href={`/collections?category=${encodeURIComponent(item.category)}`}
              key={item.title}
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[258px]">
                <ResponsiveImage
                  alt={item.title}
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  sizes="(min-width: 768px) 42vw, 100vw"
                  src={item.image}
                />

                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                {/* Badge */}
                <span className="absolute top-4 right-4 rounded-full bg-tertiary-container px-2.5 py-0.5 text-[0.5rem] font-label font-bold uppercase tracking-[0.2em] text-on-tertiary-container shadow-lg md:top-5 md:right-5 md:px-3 md:py-1 md:text-[0.55rem]">
                  {badges[i + 1]}
                </span>

                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 md:p-6">
                  <div>
                    <h3 className="mb-1 font-headline text-xl font-bold text-white md:text-2xl lg:text-3xl">
                      {item.title}
                    </h3>
                    <p className="max-w-xs text-xs font-medium text-white/75 md:text-sm">
                      {item.description}
                    </p>
                  </div>
                  <span className="shrink-0 translate-y-1 rounded-full bg-white/15 px-3 py-1.5 text-[0.6rem] font-label font-bold text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-xs">
                    {item.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Decorative bottom accent ── */}
        <div className="mt-10 flex items-center justify-center gap-3 md:mt-14">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
          <span className="text-[0.6rem] font-label font-bold uppercase tracking-[0.3em] text-primary/30">
            ✦ hand-crafted with love ✦
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}
