"use client";

import { type MouseEvent, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/app/home-data";
import { CallIcon, CheckIcon, CloseIcon, CopyIcon, GmailIcon, MenuIcon, WhatsAppIcon } from "./icons";

type NavigationProps = {
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
};

export function Navigation({ isDrawerOpen, onToggleDrawer }: NavigationProps) {
  const pathname = usePathname();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<"email" | "phone" | "whatsapp" | null>(null);
  const contactEmail = "hello@lilacandhoney.com";
  const contactPhoneDisplay = "+91 72995 05240";
  const contactPhoneHref = "+917299505240";
  const whatsappMessage = encodeURIComponent(
    "Hi Lilac & Honey, I would like to place an order. Could you please share the available options?",
  );
  const whatsappLink = `https://wa.me/${contactPhoneHref.replace("+", "")}?text=${whatsappMessage}`;

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      // the CSS scroll-behavior: smooth will handle the animation gracefully.
      window.scrollTo(0, 0);
    }
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
    if (isDrawerOpen) {
      onToggleDrawer();
    }
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setCopiedField(null);
  };

  const copyContactDetail = async (
    value: string,
    field: "email" | "phone" | "whatsapp",
  ) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 1300);
    } catch {
      setCopiedField(null);
    }
  };

  const desktopLinkClass = (label: string) =>
    label === "Offers"
      ? "block rounded-full premium-btn px-5 py-2.5 text-sm font-label font-bold uppercase tracking-widest text-[#fcf7e6]"
      : "block py-2 text-sm font-label font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary-container";

  const mobileLinkClass = (label: string) =>
    label === "Offers"
      ? "block rounded-full premium-btn px-6 py-4 text-center text-xl font-headline font-bold tracking-wider text-[#fcf7e6]"
      : "block text-2xl font-headline font-bold text-primary transition-all hover:text-primary-container";

  return (
    <>
      <div
        className={`fixed inset-0 z-[45] bg-black/20 transition-opacity duration-400 ${isDrawerOpen ? "pointer-events-auto opacity-100 backdrop-blur-[8px]" : "pointer-events-none opacity-0"
          }`}
        onClick={onToggleDrawer}
      />
      <aside
        className={`fixed top-0 left-0 z-[60] flex h-full w-[82vw] max-w-80 flex-col border-r border-primary/10 bg-[#f1efd9] px-8 pt-24 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:px-10 md:pt-32 ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
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
                {item.label === "Contact Us" ? (
                  <button
                    className={mobileLinkClass(item.label)}
                    onClick={openContactModal}
                    type="button"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    className={mobileLinkClass(item.label)}
                    href={"href" in item ? item.href : ("anchorId" in item ? `/#${item.anchorId}` : "#")}
                    onClick={() => {
                      if (isDrawerOpen) onToggleDrawer();
                    }}
                  >
                    {item.label}
                  </a>
                )}
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
          <Link
            className="whitespace-nowrap font-headline text-xl font-bold italic tracking-tight text-primary drop-shadow-[0_0_8px_rgba(242,218,255,0.4)] md:text-3xl"
            href="/"
            onClick={handleLogoClick}
          >
            Lilac & Honey
          </Link>
          <div className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) =>
              item.label === "Contact Us" ? (
                <button
                  className={desktopLinkClass(item.label)}
                  key={item.label}
                  onClick={openContactModal}
                  type="button"
                >
                  {item.label}
                </button>
              ) : item.items.length > 0 ? (
                <div className="nav-dropdown" key={item.label}>
                  <a className={desktopLinkClass(item.label)} href={"href" in item ? item.href : ("anchorId" in item ? `/#${item.anchorId}` : "#")}>
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
              ) : (
                <a
                  className={desktopLinkClass(item.label)}
                  href={"href" in item ? item.href : ("anchorId" in item ? `/#${item.anchorId}` : "#")}
                  key={item.label}
                >
                  {item.label}
                </a>
              ),
            )}
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
      {isContactModalOpen ? (
        <div
          className="fixed inset-0 z-[75] flex items-center justify-center bg-black/40 px-4 backdrop-blur-md transition-opacity duration-500"
          onClick={closeContactModal}
        >
          <div
            className="relative w-full max-w-sm rounded-[1.5rem] bg-[#fdfbf6] p-7 shadow-[0_20px_60px_rgba(42,11,66,0.15)] md:max-w-md md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Elegant double border frame interior */}
            <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] border border-[#c79a35]/20" />
            <div className="pointer-events-none absolute inset-[7px] rounded-[1.1rem] border border-[#e2bf73]/20" />

            <button
              aria-label="Close contact details"
              className="absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full text-primary/50 transition-colors hover:bg-primary/5 hover:text-primary md:top-7 md:right-7"
              onClick={closeContactModal}
              type="button"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <div className="mb-8 mt-2 text-center relative z-10">
              <span className="mb-4 inline-block text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[#c79a35]">
                Concierge & Support
              </span>
              <h3 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                We are <span className="italic">here</span> to help.
              </h3>
            </div>

            <div className="space-y-5 px-1 relative z-10">
              {/* Email Row */}
              <div className="group flex items-center justify-between border-b border-primary/10 pb-4 transition-colors hover:border-[#c79a35]/40">
                <div>
                  <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#c79a35]">
                    Email
                  </p>
                  <p className="font-body text-[0.95rem] font-medium text-primary">
                    {contactEmail}
                  </p>
                </div>
                <button
                  aria-label="Copy email"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-primary/40 transition-colors hover:bg-primary/5 hover:text-primary"
                  onClick={() => copyContactDetail(contactEmail, "email")}
                  title={copiedField === "email" ? "Copied" : "Copy email"}
                  type="button"
                >
                  {copiedField === "email" ? (
                    <CheckIcon className="h-4 w-4 text-[#c79a35]" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Phone Row */}
              <div className="group flex items-center justify-between border-b border-primary/10 pb-4 transition-colors hover:border-[#c79a35]/40">
                <div>
                  <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#c79a35]">
                    Phone
                  </p>
                  <p className="font-body text-[0.95rem] font-medium text-primary">
                    {contactPhoneDisplay}
                  </p>
                </div>
                <button
                  aria-label="Copy phone"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-primary/40 transition-colors hover:bg-primary/5 hover:text-primary"
                  onClick={() => copyContactDetail(contactPhoneDisplay, "phone")}
                  title={copiedField === "phone" ? "Copied" : "Copy phone"}
                  type="button"
                >
                  {copiedField === "phone" ? (
                    <CheckIcon className="h-4 w-4 text-[#c79a35]" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp Row */}
              <div className="group flex items-center justify-between border-b border-primary/10 pb-4 transition-colors hover:border-[#c79a35]/40">
                <div>
                  <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#c79a35]">
                    WhatsApp
                  </p>
                  <p className="font-body text-[0.95rem] font-medium text-primary">
                    {contactPhoneDisplay}
                  </p>
                </div>
                <button
                  aria-label="Copy WhatsApp"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-primary/40 transition-colors hover:bg-primary/5 hover:text-primary"
                  onClick={() => copyContactDetail(contactPhoneDisplay, "whatsapp")}
                  title={copiedField === "whatsapp" ? "Copied" : "Copy WhatsApp"}
                  type="button"
                >
                  {copiedField === "whatsapp" ? (
                    <CheckIcon className="h-4 w-4 text-[#c79a35]" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 px-1 relative z-10">
              <a
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full premium-btn border-none px-6 py-3.5 text-[0.75rem] font-label font-bold uppercase tracking-[0.15em] text-[#fcf7e6] shadow-md"
                href={whatsappLink}
                rel="noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="h-4 w-4 shadow-sm" />
                Message via WhatsApp
              </a>
              <a
                className="group flex w-full items-center justify-center gap-3 rounded-full border border-[#c79a35]/40 bg-white/50 px-6 py-3.5 text-[0.75rem] font-label font-bold uppercase tracking-[0.15em] text-primary transition-all hover:bg-white hover:border-[#c79a35]/80 hover:shadow-sm"
                href={`tel:${contactPhoneHref}`}
              >
                <CallIcon className="h-4 w-4 text-[#c79a35]" />
                Call Patisserie
              </a>
              <a
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-transparent px-6 py-3.5 text-[0.75rem] font-label font-bold uppercase tracking-[0.15em] text-primary/80 transition-all hover:text-primary hover:bg-primary/5"
                href={`mailto:${contactEmail}`}
              >
                <GmailIcon className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
