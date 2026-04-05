import { bestSellerItems } from "@/app/home-data";
import { ResponsiveImage } from "./ResponsiveImage";

export function BestSellers() {
  return (
    <section className="bg-background/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-12 md:py-24">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-3 font-headline text-2xl font-bold text-primary md:mb-4 md:text-4xl">Best Sellers</h2>
          <p className="mx-auto max-w-2xl text-base font-medium text-secondary md:text-lg">
            Discover the creations that have captured the hearts of our community.
          </p>
        </div>
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-12 md:overflow-visible md:px-0 md:pb-0">
          {bestSellerItems.map((item) => (
            <div className="group min-w-[82%] snap-start flex flex-col rounded-2xl border border-primary/5 bg-white/45 p-4 transition-all duration-500 hover:shadow-xl sm:min-w-[62%] md:min-w-0 md:rounded-lg md:p-6" key={item.title}>
              <div className="relative mb-5 aspect-square overflow-hidden rounded-xl md:mb-6 md:rounded-lg">
                <ResponsiveImage alt={item.title} className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" src={item.image} />
              </div>
              <h3 className="mb-2 text-center font-headline text-[1.3rem] font-bold text-primary md:text-2xl">{item.title}</h3>
              <p className="mb-5 text-center font-headline text-lg font-bold text-primary md:mb-6 md:text-xl">{item.price}</p>
              <button className="mt-auto w-full rounded-xl bg-primary py-3 text-[0.66rem] font-label font-bold uppercase tracking-[0.12em] text-on-primary transition-colors hover:bg-primary-container active:scale-95 md:text-[0.7rem] md:tracking-widest">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
