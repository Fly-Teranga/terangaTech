import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "./components/ServicesHero";
import ServicesModules from "./components/ServicesModules";
import ServicesAudience from "./components/ServicesAudience";
import ServicesCTA from "./components/ServicesCTA";

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesModules />
      <ServicesAudience />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
