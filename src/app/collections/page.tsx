import Image from "next/image";
import Link from "next/link";
import { collectionsData } from "@/app/collections-data";

export const metadata = {
  title: "Collections | Lilac & Honey",
  description:
    "Explore our artisanal collections — hand-crafted brownies, chocolates, cookies and more.",
};

type CollectionsPageProps = {
  searchParams: Promise<{
    category?: string | string[];
  }>;
};

const availableCategories = [...new Set(collectionsData.map((item) => item.category))];

function normalizeCategory(value?: string | string[]) {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

function resolveCategory(value?: string) {
  if (!value) {
    return undefined;
  }

  return availableCategories.find(
    (category) => category.toLowerCase() === value.toLowerCase(),
  );
}

export default async function CollectionsPage({ searchParams }: CollectionsPageProps) {
  const query = await searchParams;
  const selectedCategory = resolveCategory(normalizeCategory(query.category));
  const visibleCollections = selectedCategory
    ? collectionsData.filter((item) => item.category === selectedCategory)
    : collectionsData;

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
            href="/"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero header */}
      <header className="pt-[80px] pb-6 md:pt-[120px] md:pb-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="mb-3 inline-block rounded-full bg-secondary-container px-3.5 py-1 text-[0.56rem] font-label font-bold uppercase tracking-[0.18em] text-on-secondary-container md:mb-4 md:px-4 md:text-[0.65rem]">
            Our Patisserie
          </span>
          <h1 className="sparkle-text mb-4 font-headline text-[2.25rem] font-bold leading-[1.05] text-primary md:mb-6 md:text-6xl">
            {selectedCategory ? `${selectedCategory} Collection` : "Artisanal Collections"}
          </h1>
          <p className="max-w-2xl text-base font-medium text-secondary md:text-xl">
            {selectedCategory
              ? `Explore our handcrafted ${selectedCategory.toLowerCase()} selection, made fresh in our boutique kitchen.`
              : "Curated boxes of whimsy and flavour, hand-crafted daily in our boutique kitchen. Each piece is a love letter to the art of patisserie."}
          </p>
          {selectedCategory ? (
            <Link
              className="mt-5 inline-flex text-[0.7rem] font-label font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary-container md:text-sm"
              href="/collections"
            >
              ← View all collections
            </Link>
          ) : null}
        </div>
      </header>

      {/* Product grid */}
      <main className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {visibleCollections.map((item) => (
            <Link
              className="group flex flex-col overflow-hidden rounded-2xl border border-primary/5 bg-white/45 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              href={`/collections/${item.slug}`}
              key={item.slug}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  alt={item.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={item.image}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/60 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="sparkle-text mb-2 font-headline text-3xl font-bold text-white md:text-4xl">
                    {item.price}
                  </span>
                  <span className="mt-2 rounded-full bg-white px-6 py-2 text-xs font-label font-bold uppercase tracking-widest text-primary">
                    View Details
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <span className="mb-2 text-[0.6rem] font-label font-bold uppercase tracking-[0.2em] text-tertiary">
                  {item.category}
                </span>
                <h2 className="mb-2 font-headline text-xl font-bold text-primary md:text-2xl">
                  {item.title}
                </h2>
                <p className="mb-4 flex-1 text-sm font-medium leading-relaxed text-secondary">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-headline text-lg font-bold text-primary">
                    {item.price}
                  </span>
                  <span className="text-[0.65rem] font-label font-bold uppercase tracking-widest text-primary/60 transition-colors group-hover:text-primary">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[2rem] bg-[#f6f5df]/95 backdrop-blur-md md:rounded-t-[3rem]">
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
