import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { FloatingContact } from "@/components/FloatingContact";
import { Hero } from "./Hero";
import { StoryValues } from "./StoryValues";
import { Team } from "./Team";
import { AboutCTA } from "./AboutCTA";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About — Propertycare Paints & Electrics",
  description:
    "Meet the North East's only single-team whole-property transformation specialists — painting, electrical, media walls and maintenance under one roof.",
};

export default function About() {
  return (
    <>
      <SmoothScroll />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <StoryValues />
        <Team />
        <AboutCTA />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
