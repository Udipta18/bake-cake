import { galleryItems } from "@/app/home-data";
import { ResponsiveImage } from "./ResponsiveImage";

export function ProductGallery() {
  return (
    <section className="bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col items-start justify-between md:mb-16 md:flex-row md:items-end">
          <div className="mb-6 max-w-xl md:mb-0">
            <h2 className="mb-3 font-headline text-2xl font-bold text-primary md:mb-4 md:text-4xl">Artisanal Collections</h2>
            <p className="text-base font-medium text-secondary md:text-lg">
              Curated boxes of whimsy and flavor, hand-crafted daily in our boutique kitchen.
            </p>
          </div>
          <div className="cursor-pointer border-b border-primary/30 pb-2 text-[0.7rem] font-label font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary-container md:text-[0.75rem]">
            View All Collections
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {galleryItems.map((item) => (
            <div className="group text-center" key={item.title}>
              <div className="relative mb-5 aspect-square overflow-hidden rounded-2xl shadow-lg md:mb-6 md:rounded-none md:shadow-2xl">
                <ResponsiveImage alt={item.title} className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(min-width: 768px) 33vw, 100vw" src={item.image} />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/60 p-6 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="sparkle-text mb-2 font-headline text-3xl font-bold text-white md:text-4xl">{item.price}</span>
                  <button className="mt-4 rounded-full bg-white px-6 py-2 text-xs font-label font-bold uppercase tracking-widest text-primary">
                    Shop Now
                  </button>
                </div>
              </div>
              <h3 className="mb-2 font-headline text-2xl font-bold text-primary md:mb-3 md:text-3xl">{item.title}</h3>
              <p className="px-2 text-[0.98rem] font-medium text-secondary md:px-4 md:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
