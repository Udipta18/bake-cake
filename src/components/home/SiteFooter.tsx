import { EastIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="w-full rounded-t-[2rem] bg-[#f6f5df]/95 backdrop-blur-md md:rounded-t-[3rem]">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="grid w-full grid-cols-1 gap-8 py-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12 md:py-16">
          <div className="space-y-4 md:space-y-6">
            <span className="font-headline text-2xl font-bold italic text-primary">Lilac & Honey</span>
            <p className="text-sm font-medium leading-relaxed text-secondary">
              Crafting ephemeral moments of joy through the artisanal art of patisserie.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-label font-bold uppercase tracking-widest text-primary">Our World</h4>
            <ul className="space-y-2">
              <li><a className="text-sm font-medium text-secondary opacity-80 transition-all hover:text-primary hover:opacity-100" href="#">Seasonal Menu</a></li>
              <li><a className="text-sm font-medium text-secondary opacity-80 transition-all hover:text-primary hover:opacity-100" href="#">Workshop</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-label font-bold uppercase tracking-widest text-primary">Support</h4>
            <ul className="space-y-2">
              <li><a className="text-sm font-medium text-secondary opacity-80 transition-all hover:text-primary hover:opacity-100" href="#">Shipping Info</a></li>
              <li><a className="text-sm font-medium text-secondary opacity-80 transition-all hover:text-primary hover:opacity-100" href="#">Allergens</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-label font-bold uppercase tracking-widest text-primary">Join the Gallery</h4>
            <div className="flex space-x-2">
              <input className="w-full rounded-full border-none bg-surface/50 px-4 py-2 text-xs focus:ring-1 focus:ring-primary/20" placeholder="Your Email" type="text" />
              <button className="flex min-h-9 min-w-9 items-center justify-center rounded-full bg-primary p-2 text-on-primary transition-colors hover:bg-primary-container">
                <EastIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary/5 py-6 text-center md:py-8 md:flex-row md:text-left">
          <span className="text-xs font-medium text-secondary">© 2024 Editorial Patisserie. Crafted with whimsical intent.</span>
        </div>
      </div>
    </footer>
  );
}
