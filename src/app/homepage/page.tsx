import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import ModulesBentoSection from "./components/ModulesBentoSection";
import AviationNewsSection from "./components/AviationNewsSection";
import StatsSection from "./components/StatsSection";
import ModuleTabsSection from "./components/ModuleTabsSection";
import HomeDemoSection from "./components/HomeDemoSection";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ModulesBentoSection />
      <AviationNewsSection />
      <StatsSection />
      <ModuleTabsSection />
      <HomeDemoSection />
      <Footer />
    </main>
  );
}
