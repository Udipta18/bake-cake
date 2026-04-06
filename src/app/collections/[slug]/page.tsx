import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collectionsData } from "@/app/collections-data";

export function generateStaticParams() {
  return collectionsData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = collectionsData.find((i) => i.slug === slug);
  if (!item) return { title: "Not Found | Lilac & Honey" };
  return {
    title: `${item.title} | Lilac & Honey`,
    description: item.description,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = collectionsData.find((i) => i.slug === slug);
  if (!item) notFound();

  // Find related items (same category, exclude current)
  const related = collectionsData
    .filter((i) => i.category === item.category && i.slug !== item.slug)
    .slice(0, 2);

  return (
    <div className="relative min-h-screen bg-[#f1efd9] font-body text-on-background">
      {/* Navigation bar */}
      <nav className="glass-nav fixed top-0 right-0 left-0 z-50 w-full border-b border-primary/5 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-6">
          <Link
            className="whitespace-nowrap font-headline text-xl font-bold italic tracking-tight text-primary drop-shadow-[0_0_8px_rgba(242,218,255,0.4)] md:text-3xl"
            href="/"
          >
            Lilac &amp; Honey
          </Link>
          <Link
            className="text-[0.7rem] font-label font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary-container md:text-sm"
            href="/collections"
          >
            ← All Collections
          </Link>
        </div>
      </nav>

      {/* Product detail section */}
      <main className="pt-[80px] md:pt-[100px]">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-16">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs font-label font-medium text-secondary md:mb-10 md:text-sm">
            <Link
              className="transition-colors hover:text-primary"
              href="/"
            >
              Home
            </Link>
            <span className="text-primary/30">/</span>
            <Link
              className="transition-colors hover:text-primary"
              href="/collections"
            >
              Collections
            </Link>
            <span className="text-primary/30">/</span>
            <span className="text-primary">{item.title}</span>
          </div>

          {/* Split layout: Image (left) + Details (right) */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left — Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl lg:sticky lg:top-[120px]">
              <Image
                alt={item.title}
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={item.image}
              />
              {/* Ornamental overlay corner accents */}
              <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-white/40 rounded-tl-lg pointer-events-none" />
              <div className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-white/40 rounded-br-lg pointer-events-none" />
            </div>

            {/* Right — Details */}
            <div className="flex flex-col">
              <span className="mb-3 inline-block w-fit rounded-full bg-secondary-container px-3.5 py-1 text-[0.56rem] font-label font-bold uppercase tracking-[0.18em] text-on-secondary-container md:px-4 md:text-[0.65rem]">
                {item.category}
              </span>

              <h1 className="sparkle-text mb-4 font-headline text-[2rem] font-bold leading-[1.1] text-primary md:mb-5 md:text-5xl">
                {item.title}
              </h1>

              <p className="mb-6 max-w-lg text-base font-medium leading-relaxed text-secondary md:mb-8 md:text-lg">
                {item.longDescription}
              </p>

              {/* Price block */}
              <div className="mb-8 flex items-end gap-3 md:mb-10">
                <span className="font-headline text-3xl font-bold text-primary md:text-4xl">
                  {item.price}
                </span>
                <span className="mb-1 text-sm font-medium text-secondary">
                  {item.priceNote}
                </span>
              </div>

              {/* Order now */}
              <button className="mb-10 w-full rounded-xl bg-primary px-8 py-4 text-[0.72rem] font-label font-bold uppercase tracking-[0.14em] text-on-primary shadow-lg transition-all hover:bg-primary-container hover:shadow-xl active:scale-[0.98] md:w-auto md:max-w-xs md:text-sm md:tracking-widest">
                Order Now
              </button>

              {/* Divider */}
              <div className="mb-8 h-px w-full bg-primary/10" />

              {/* Details grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
                {/* Ingredients */}
                <div>
                  <h3 className="mb-3 text-xs font-label font-bold uppercase tracking-widest text-primary">
                    Ingredients
                  </h3>
                  <ul className="space-y-1.5">
                    {item.ingredients.map((ing) => (
                      <li
                        className="flex items-center gap-2 text-sm font-medium text-secondary"
                        key={ing}
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-tertiary-container" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="space-y-5">
                  <div>
                    <h3 className="mb-1 text-xs font-label font-bold uppercase tracking-widest text-primary">
                      Serving Size
                    </h3>
                    <p className="text-sm font-medium text-secondary">
                      {item.servingSize}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs font-label font-bold uppercase tracking-widest text-primary">
                      Shelf Life
                    </h3>
                    <p className="text-sm font-medium text-secondary">
                      {item.shelfLife}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs font-label font-bold uppercase tracking-widest text-primary">
                      Allergens
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.allergens.map((a) => (
                        <span
                          className="rounded-full border border-primary/15 bg-primary-fixed/20 px-3 py-0.5 text-[0.65rem] font-label font-bold uppercase tracking-wider text-primary"
                          key={a}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <section className="mt-16 md:mt-24">
              <h2 className="mb-8 font-headline text-2xl font-bold text-primary md:mb-12 md:text-3xl">
                You May Also Enjoy
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10">
                {related.map((r) => (
                  <Link
                    className="group flex flex-col overflow-hidden rounded-2xl border border-primary/5 bg-white/45 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 sm:flex-row"
                    href={`/collections/${r.slug}`}
                    key={r.slug}
                  >
                    <div className="relative aspect-square sm:w-48 sm:shrink-0">
                      <Image
                        alt={r.title}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        fill
                        sizes="(min-width: 640px) 192px, 100vw"
                        src={r.image}
                      />
                    </div>
                    <div className="flex flex-col justify-center p-5 md:p-6">
                      <span className="mb-1 text-[0.6rem] font-label font-bold uppercase tracking-[0.2em] text-tertiary">
                        {r.category}
                      </span>
                      <h3 className="mb-2 font-headline text-xl font-bold text-primary">
                        {r.title}
                      </h3>
                      <p className="mb-3 text-sm font-medium text-secondary line-clamp-2">
                        {r.description}
                      </p>
                      <span className="font-headline text-lg font-bold text-primary">
                        {r.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 w-full rounded-t-[2rem] bg-[#f6f5df]/95 backdrop-blur-md md:mt-16 md:rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-primary/5 py-6 text-center md:flex-row md:py-8 md:text-left">
            <span className="font-headline text-lg font-bold italic text-primary">
              Lilac &amp; Honey
            </span>
            <span className="text-xs font-medium text-secondary">
              © 2024 Editorial Patisserie. Crafted with whimsical intent.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
