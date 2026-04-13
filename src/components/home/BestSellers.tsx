import { bestSellerItems } from "@/app/home-data";
import { getOrderWhatsAppLink } from "@/lib/whatsapp";
import { ResponsiveImage } from "./ResponsiveImage";

export function BestSellers() {
  return (
    <section className="bg-[#B77466]">

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-12 md:py-24">
        {/* ── Section Header ── */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3 md:mb-7">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#fcf7e6]/40 md:w-16" />
            <span className="inline-block h-1.5 w-1.5 rotate-45 border border-[#fcf7e6]/50" />
            <span className="font-label text-[0.55rem] font-bold uppercase tracking-[0.35em] text-[#fcf7e6]/80 md:text-[0.6rem]">
              Most Loved
            </span>
            <span className="inline-block h-1.5 w-1.5 rotate-45 border border-[#fcf7e6]/50" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#fcf7e6]/40 md:w-16" />
          </div>

          <h2 className="mx-auto max-w-2xl font-headline text-[2.2rem] font-bold leading-[1.05] text-[#fcf7e6] md:text-6xl lg:text-[4rem]">
            Our <span className="italic text-[#c79a35]">best</span> sellers
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-medium text-[#fcf7e6]/70 md:mt-5 md:text-base">
            Discover the creations that have captured the hearts of our
            community.
          </p>
        </div>

        {/* ── Product Cards ── */}
        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-0 md:pb-0 lg:gap-9">
          {bestSellerItems.map((item) => (
            <div
              className="min-w-[78%] snap-start sm:min-w-[55%] md:min-w-0"
              key={item.title}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-primary/6 bg-white transition-all duration-500 hover:border-[#c79a35]/25 hover:shadow-[0_16px_48px_rgba(74,44,93,0.1)] md:rounded-[1.8rem]">
                {/* ── Image area ── */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ResponsiveImage
                    alt={item.title}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 80vw"
                    src={item.image}
                  />

                  {/* Gradient scrim at bottom */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />


                  {/* Price tag — positioned at bottom-right of image */}
                  <div className="absolute right-4 bottom-4 flex items-baseline gap-0.5 md:right-5 md:bottom-5">
                    <span className="font-label text-[0.55rem] font-bold uppercase tracking-wider text-white/70">
                      from
                    </span>
                    <span className="font-headline text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] md:text-[1.8rem]">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* ── Card Body ── */}
                <div className="relative flex flex-1 flex-col px-6 pt-5 pb-6 md:px-7 md:pt-6 md:pb-7">
                  {/* Small decorative gold line */}
                  <div className="mb-4 flex items-center gap-2 md:mb-5">
                    <span className="h-px w-6 bg-[#c79a35]/40" />
                    <span className="h-1 w-1 rotate-45 border border-[#c79a35]/30" />
                  </div>

                  <h3 className="mb-1 font-headline text-[1.35rem] font-bold leading-snug text-primary md:text-[1.5rem]">
                    {item.title}
                  </h3>
                  <p className="mb-5 font-label text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[#c79a35]/70 md:mb-6 md:text-[0.62rem]">
                    Artisan Collection
                  </p>

                  {/* CTA Button */}
                  <a
                    className="premium-btn mt-auto flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3 text-center text-[0.65rem] font-label font-bold uppercase tracking-[0.18em] text-[#fcf7e6] transition-all active:scale-[0.97] md:py-3.5 md:text-[0.68rem]"
                    href={getOrderWhatsAppLink(
                      `Hi Lilac & Honey, I'd like to order ${item.title}.`,
                    )}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <WhatsAppSmall />
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom decorative flourish ── */}
        <div className="mt-12 flex items-center justify-center gap-3 md:mt-16">
          <div className="h-px flex-1 max-w-28 bg-gradient-to-r from-transparent to-[#fcf7e6]/20" />
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#fcf7e6]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#fcf7e6]/50" />
            <span className="h-1 w-1 rounded-full bg-[#fcf7e6]/30" />
          </div>
          <div className="h-px flex-1 max-w-28 bg-gradient-to-l from-transparent to-[#fcf7e6]/20" />
        </div>
      </div>
    </section>
  );
}

/* ─── Tiny WhatsApp icon for the CTA ─── */
function WhatsAppSmall() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
