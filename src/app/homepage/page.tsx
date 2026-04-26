import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import ModulesBentoSection from "./components/ModulesBentoSection";
import AviationNewsSection from "./components/AviationNewsSection";
import StatsSection from "./components/StatsSection";
import ModuleTabsSection from "./components/ModuleTabsSection";
import HomeDemoSection from "./components/HomeDemoSection";
import { getAllActualites, getAllServices } from "@/sanity/lib/content";

export default async function Homepage() {
  const [actualites, services] = await Promise.all([
    getAllActualites(),
    getAllServices(),
  ]);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ModulesBentoSection services={services} />
      <AviationNewsSection items={actualites} />
      <StatsSection />
      <ModuleTabsSection services={services} />
      <HomeDemoSection />
      <Footer />
    </main>
  );
}
