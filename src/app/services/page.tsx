import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "./components/ServicesHero";
import ServicesModules from "./components/ServicesModules";
import ServicesAudience from "./components/ServicesAudience";
import ServicesCTA from "./components/ServicesCTA";
import { getAllServices } from "@/sanity/lib/content";

export const dynamic = "force-dynamic";

export default async function Services() {
  const services = await getAllServices();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesModules services={services} />
      <ServicesAudience />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
