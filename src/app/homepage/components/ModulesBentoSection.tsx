"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

const modules = [
  {
    id: "billetterie",
    tag: "SaaS",
    title: "Billetterie Aerienne",
    description: "Digitalisez votre agence ou compagnie. Moteur de reservation temps reel, integration GDS/NDC, paiement mobile money, e-ticket et dashboard revenus live.",
    features: ["Deploiement 7 jours", "Moteur temps reel", "GDS / NDC", "Mobile Money", "E-ticket & check-in", "Dashboard live"],
    icon: "TicketIcon",
    accentColor: "#00853F",
    image: "https://images.unsplash.com/photo-1698851580098-00afba42cba2",
    colSpan: "lg:col-span-2",
    large: true,
    href: "/services#billetterie",
  },
  {
    id: "ia",
    tag: "IA",
    title: "Logiciels Aeronautiques & IA",
    description: "Pricing dynamique, prevision de la demande, maintenance predictive, gestion rotations appareils, API compagnies & aeroports.",
    features: ["Pricing IA", "Prevision demande", "Maintenance predictive", "API compagnies"],
    icon: "CpuChipIcon",
    accentColor: "#FDEF42",
    image: null,
    colSpan: "lg:col-span-1",
    large: false,
    href: "/services#ia",
  },
  {
    id: "assuretech",
    tag: "SaaS",
    title: "AssureTech Voyage",
    description: "Souscription instantanee, gestion sinistres en ligne, portail passager self-service, reporting actuariel live.",
    features: ["Souscription instantanee", "Gestion sinistres", "Couverture annulation", "Portail passager", "Reporting actuariel"],
    icon: "ShieldCheckIcon",
    accentColor: "#E31B23",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16487e85a-1772083479313.png",
    colSpan: "lg:col-span-3",
    large: true,
    href: "/services#assuretech",
  },
];

export default function ModulesBentoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    sectionRef.current?.querySelectorAll(".reveal, .reveal-scale, .reveal-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-light-bg px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="bg-vert h-px w-8" />
            <span className="text-vert text-xs font-semibold uppercase tracking-[0.2em]">Nos modules</span>
          </div>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="font-display text-text-dark max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              3 modules de vol.
              <br />
              <span className="text-text-muted font-normal">Une seule plateforme.</span>
            </h2>
            <Link href="/services" className="text-vert hover:text-vert-light group flex items-center gap-2 text-sm font-medium transition-colors">
              Explorer tous les services
              <Icon name="ArrowRightIcon" size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {modules.map((mod, idx) => (
            <Link key={mod.id} href={mod.href} className={`reveal-scale shadow-card hover:shadow-card-hover group relative overflow-hidden rounded-3xl border border-black/8 bg-white transition-all duration-500 hover:border-vert/20 ${mod.colSpan}`} style={{ transitionDelay: `${idx * 120}ms` }}>
              {mod.image ? (
                <div className="absolute inset-0">
                  <AppImage
                    src={mod.image}
                    alt={mod.title}
                    fill
                    className="opacity-8 h-full w-full object-cover transition-opacity duration-700 group-hover:scale-105 group-hover:opacity-12"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${mod.accentColor}08 0%, #ffffff 60%)` }} />
                </div>
              ) : (
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${mod.accentColor}06 0%, #ffffff 70%)` }} />
              )}

              <div className="absolute -right-8 -bottom-8 h-32 w-32 opacity-5 transition-opacity group-hover:opacity-10">
                <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full" fill="currentColor" style={{ color: mod.accentColor }}>
                  <path d="M50 50 L50 0 A50 50 0 0 1 100 50 Z" />
                </svg>
              </div>

              <div className={`relative z-10 flex flex-col justify-between p-9 ${mod.large ? "min-h-[340px]" : "min-h-[300px]"}`}>
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ background: `${mod.accentColor}15`, color: mod.accentColor, border: `1px solid ${mod.accentColor}30` }}>
                      {mod.tag}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${mod.accentColor}12`, border: `1px solid ${mod.accentColor}25` }}>
                      <Icon name={mod.icon} size={20} style={{ color: mod.accentColor }} />
                    </div>
                  </div>

                  <h3 className="font-display text-text-dark mb-3 text-xl font-bold tracking-tight md:text-2xl">{mod.title}</h3>
                  <p className="text-text-muted mb-7 text-sm leading-7 font-light">{mod.description}</p>

                  <div className={`grid gap-3 ${mod.large && mod.colSpan === "lg:col-span-3" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1"}`}>
                    {mod.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="h-1 w-1 flex-shrink-0 rounded-full" style={{ background: mod.accentColor }} />
                        <span className="text-text-muted text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:gap-3" style={{ color: mod.accentColor }}>
                  En savoir plus
                  <Icon name="ArrowRightIcon" size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
