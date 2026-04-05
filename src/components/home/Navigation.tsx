"use client";

import { navigationItems } from "@/app/home-data";
import { CloseIcon, MenuIcon } from "./icons";

type NavigationProps = {
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
};

export function Navigation({ isDrawerOpen, onToggleDrawer }: NavigationProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-[45] bg-black/20 transition-opacity duration-400 ${
          isDrawerOpen ? "pointer-events-auto opacity-100 backdrop-blur-[8px]" : "pointer-events-none opacity-0"
        }`}
        onClick={onToggleDrawer}
      />
      <aside
        className={`fixed top-0 left-0 z-[60] flex h-full w-[82vw] max-w-80 flex-col border-r border-primary/10 bg-[#f1efd9] px-8 pt-24 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:px-10 md:pt-32 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          aria-label="Close navigation menu"
          className="absolute top-6 right-6 text-primary transition-transform hover:scale-110 md:top-8 md:right-8"
          onClick={onToggleDrawer}
        >
          <CloseIcon className="h-7 w-7" />
        </button>
        <div className="mb-12">
          <span className="mb-4 block text-xs font-label font-bold uppercase tracking-[0.3em] text-primary/40">
            Navigation
          </span>
          <ul className="space-y-6">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a className="block text-2xl font-headline font-bold text-primary transition-all hover:text-primary-container" href="#">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto pb-12">
          <p className="text-[0.65rem] leading-loose font-label font-bold uppercase tracking-widest text-primary/50">
            Established 2024
            <br />
            Editorial Patisserie
          </p>
        </div>
      </aside>
      <nav className="glass-nav fixed top-0 right-0 left-0 z-50 w-full border-b border-primary/5 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-6">
          <span className="whitespace-nowrap font-headline text-xl font-bold italic tracking-tight text-primary drop-shadow-[0_0_8px_rgba(242,218,255,0.4)] md:text-3xl">
            Lilac & Honey
          </span>
          <div className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <div className="nav-dropdown" key={item.label}>
                <a className="block py-2 text-sm font-label font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary-container" href="#">
                  {item.label}
                </a>
                <div className="dropdown-menu">
                  {item.items.map((subItem) => (
                    <a className="dropdown-item" href="#" key={subItem}>
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button
              aria-label="Open navigation menu"
              className="flex min-h-10 min-w-10 cursor-pointer items-center justify-center text-primary transition-transform hover:scale-110"
              onClick={onToggleDrawer}
            >
              <MenuIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
