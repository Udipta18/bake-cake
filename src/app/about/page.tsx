import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Lilac & Honey",
  description: "Discover the story, craft, and values behind Lilac & Honey's editorial patisserie experience.",
};

export default function Page() {
  return <AboutPage />;
}
