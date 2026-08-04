import React from "react";
import { connection } from "next/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import { getContactSettings } from "@/sanity/lib/content";

export default async function Contact() {
  await connection();
  const contact = await getContactSettings();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5">
          <ContactInfo contact={contact} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
