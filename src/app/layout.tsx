import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headlineFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Editorial Patisserie | Lilac & Honey",
  description: "Experience the artisanal alchemy of our signature brownies, crafted for life's sweetest celebrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headlineFont.variable} ${bodyFont.variable} m-0 min-h-0 bg-[#f1efd9] font-body text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed`}
      >
        {children}
      </body>
    </html>
  );
}
