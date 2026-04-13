import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import ModulesBentoSection from "./components/ModulesBentoSection";
import StatsSection from "./components/StatsSection";
import ModuleTabsSection from "./components/ModuleTabsSection";
import HomeDemoSection from "./components/HomeDemoSection";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ModulesBentoSection />
      <StatsSection />
      <ModuleTabsSection />
      <HomeDemoSection />
      <Footer />
    </main>
  );
}
