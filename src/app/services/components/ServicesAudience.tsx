"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

const audiences = [
  { icon: "PaperAirplaneIcon", title: "Compagnies aeriennes", desc: "Billetterie, IA operationnelle, assurance passagers - une plateforme unifiee pour l'ensemble de votre activite digitale.", modules: ["Billetterie SaaS", "Logiciels IA", "AssureTech"], color: "#00853F" },
  { icon: "BuildingOfficeIcon", title: "Agences de voyage", desc: "Lancez votre canal de vente en ligne en 7 jours. GDS/NDC, mobile money, e-ticket - tout inclus.", modules: ["Billetterie SaaS"], color: "#FDEF42" },
  { icon: "ShieldCheckIcon", title: "Compagnies d'assurance", desc: "Digitalisez votre offre assurance voyage. Souscription, sinistres, reporting actuariel - 100% en ligne.", modules: ["AssureTech Voyage"], color: "#E31B23" },
];

export default function ServicesAudience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-scale");
    const fallback = setTimeout(() => {
      elements?.forEach((el) => el.classList.add("visible"));
    }, 300);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0 },
    );

    elements?.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark-2 border-vert/8 px-6 py-20 border-t">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-12 text-center">
          <span className="text-vert/80 text-xs font-semibold uppercase tracking-[0.2em]">Qui sommes-nous pour</span>
          <h2 className="font-display mt-3 mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">Fait pour votre secteur.</h2>
          <p className="mx-auto max-w-xl text-base font-light text-white/45">Des solutions concues pour les acteurs de l&apos;aviation africaine et internationale.</p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {audiences.map((audience, i) => (
            <div key={audience.title} className="reveal-scale group relative overflow-hidden rounded-3xl border border-white/5 p-8 transition-all duration-500 hover:border-white/15" style={{ background: `linear-gradient(135deg, ${audience.color}10 0%, #080C0A 70%)`, transitionDelay: `${i * 100}ms` }}>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110" style={{ background: `${audience.color}18`, border: `1px solid ${audience.color}35` }}>
                <Icon name={audience.icon} size={22} style={{ color: audience.color }} />
              </div>
              <h3 className="font-display mb-3 text-xl font-semibold text-white">{audience.title}</h3>
              <p className="mb-6 text-sm leading-relaxed font-light text-white/50">{audience.desc}</p>
              <div className="flex flex-wrap gap-2">
                {audience.modules.map((module) => (
                  <span key={module} className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ background: `${audience.color}15`, color: audience.color, border: `1px solid ${audience.color}30` }}>
                    {module}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-dark border-vert/15 reveal-scale flex flex-col items-center justify-between gap-6 rounded-3xl border p-8 md:flex-row md:p-10">
          <div>
            <h3 className="font-display mb-2 text-2xl font-semibold text-white">Votre secteur n&apos;est pas liste ?</h3>
            <p className="text-sm font-light text-white/45">Nous developpons des logiciels sur mesure pour tout acteur de l&apos;ecosysteme aerien.</p>
          </div>
          <Link href="/contact" className="bg-vert hover:bg-vert-light hover:shadow-vert flex flex-shrink-0 items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5">
            Discuter de votre projet
            <Icon name="ArrowRightIcon" size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
