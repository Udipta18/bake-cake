import { promiseItems } from "@/app/home-data";
import { ResponsiveImage } from "./ResponsiveImage";

export function PromiseGrid() {
  return (
    <section className="bg-[#fef2f2]/90 py-12 backdrop-blur-sm md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <span className="mb-6 inline-block text-[0.6rem] font-label font-bold uppercase tracking-[0.3em] text-primary md:text-[0.7rem]">
          From Craving to Your Doorstep
        </span>
        <h2 className="mb-5 font-headline text-2xl font-bold text-primary md:mb-8 md:text-5xl">
          Our <span className="italic text-primary-container">Promise</span> to You
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base font-body text-secondary md:mb-16 md:text-lg">
          There&apos;s no secret spell. Only honest, hard work. Here&apos;s what we commit to, every order.
        </p>
        <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-4">
          {promiseItems.map((item) => (
            <div className="flip-card h-[250px] md:h-[320px]" key={item.number}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="relative h-full w-full">
                    <ResponsiveImage alt={item.title} className="object-cover" sizes="(min-width: 768px) 25vw, 100vw" src={item.image} />
                  </div>
                </div>
                <div className="flip-card-back">
                  <span className="mb-2 block font-headline text-2xl font-bold text-primary">{item.number}</span>
                  <h4 className="mb-3 font-headline text-xl font-bold text-primary">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-secondary">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
