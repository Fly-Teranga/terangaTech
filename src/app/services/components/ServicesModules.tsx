"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

const modules = [
  {
    id: "billetterie",
    tag: "SaaS",
    color: "#00853F",
    icon: "TicketIcon",
    title: "Billetterie Aerienne SaaS",
    headline: "Plateforme de vente de billets d'avion en ligne",
    description: "Digitalisez votre agence de voyage ou compagnie en 7 jours. Vendez des billets d'avion, gerez vos inventaires de sieges et accedez a de nouveaux passagers sur le canal digital africain et international.",
    image: "https://images.unsplash.com/photo-1668557060370-d1876dfea768",
    features: [
      { icon: "BoltIcon", label: "Deploiement 7 jours", desc: "Mise en ligne rapide sans interruption d'activite." },
      { icon: "ClockIcon", label: "Moteur reservation temps reel", desc: "Disponibilite et tarifs actualises en temps reel." },
      { icon: "GlobeAltIcon", label: "Integration GDS / NDC", desc: "Acces aux inventaires mondiaux via Amadeus, Sabre, NDC." },
      { icon: "DevicePhoneMobileIcon", label: "Paiement mobile money & carte", desc: "Orange Money, Wave, Visa, Mastercard." },
      { icon: "DocumentTextIcon", label: "E-ticket & check-in mobile", desc: "Billet electronique et embarquement sans papier." },
      { icon: "ChartBarIcon", label: "Dashboard revenus live", desc: "Suivi des ventes et revenus en temps reel." },
    ],
    audience: ["Agences de voyage", "Compagnies aeriennes", "OTA africaines"],
    metric: { value: "7 jours", label: "pour etre operationnel" },
  },
  {
    id: "ia",
    tag: "IA",
    color: "#FDEF42",
    icon: "CpuChipIcon",
    title: "Logiciels Aeronautiques & IA",
    headline: "Logiciels sur mesure & Intelligence Artificielle pour l'aviation",
    description: "Optimisation des operations aeriennes par l'IA : prevision de la demande, pricing dynamique, gestion des rotations d'appareils, analyse predictive de maintenance et automatisation des processus compagnies.",
    image: "https://images.unsplash.com/photo-1663355176396-31843c79e396",
    features: [
      { icon: "CurrencyDollarIcon", label: "Pricing dynamique IA", desc: "Optimisation tarifaire en temps reel basee sur la demande." },
      { icon: "ChartPieIcon", label: "Prevision de la demande", desc: "Modeles ML pour anticiper les flux passagers." },
      { icon: "WrenchScrewdriverIcon", label: "Maintenance predictive", desc: "Detection precoce des anomalies techniques." },
      { icon: "ArrowPathIcon", label: "Gestion rotations appareils", desc: "Optimisation des rotations et affectations de flotte." },
      { icon: "CodeBracketIcon", label: "API compagnies & aeroports", desc: "Integration native avec les systemes existants." },
      { icon: "ShieldCheckIcon", label: "Conformite reglementaire", desc: "Respect des normes IATA, OACI et locales." },
    ],
    audience: ["Compagnies aeriennes", "Gestionnaires d'aeroports", "Operateurs de flotte"],
    metric: { value: "+24%", label: "efficacite operationnelle moyenne" },
  },
  {
    id: "assuretech",
    tag: "SaaS",
    color: "#E31B23",
    icon: "ShieldCheckIcon",
    title: "AssureTech Voyage SaaS",
    headline: "Assurance voyage & passagers aeriens - digitalisee",
    description: "Plateforme SaaS dediee aux compagnies d'assurance et aux compagnies aeriennes pour proposer, gerer et indemniser les assurances voyage directement au point de vente du billet.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13ad8f7ad-1774096539133.png",
    features: [
      { icon: "BoltIcon", label: "Souscription instantanee", desc: "Proposition d'assurance integree au tunnel de reservation." },
      { icon: "ComputerDesktopIcon", label: "Gestion sinistres en ligne", desc: "Declaration et suivi des sinistres 100% digital." },
      { icon: "XCircleIcon", label: "Couverture annulation vol", desc: "Remboursement automatise en cas d'annulation." },
      { icon: "UserCircleIcon", label: "Portail passager self-service", desc: "Espace client pour gerer contrats et sinistres." },
      { icon: "DocumentChartBarIcon", label: "Reporting actuariel live", desc: "Tableaux de bord actuariels en temps reel." },
    ],
    audience: ["Compagnies d'assurance", "Compagnies aeriennes", "Courtiers voyage"],
    metric: { value: "100%", label: "digital, zero papier" },
  },
];

export default function ServicesModules() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-scale, .reveal-left");
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
    <section ref={sectionRef} className="bg-dark px-6 py-20">
      <div className="mx-auto max-w-7xl space-y-28">
        {modules.map((mod, idx) => (
          <div key={mod.id} id={mod.id} className="scroll-mt-24">
            <div className="reveal mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8" style={{ background: mod.color }} />
                <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ background: `${mod.color}18`, color: mod.color, border: `1px solid ${mod.color}35` }}>
                  {mod.tag}
                </span>
              </div>
              <h2 className="font-display mb-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{mod.title}</h2>
              <p className="max-w-2xl text-base font-light text-white/50">{mod.headline}</p>
            </div>

            <div className={`grid items-start gap-12 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className={`reveal-scale ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="group relative h-[380px] overflow-hidden rounded-3xl border border-white/8">
                  <AppImage src={mod.image} alt={mod.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${mod.color}25 0%, transparent 55%)` }} />
                  <div className="glass-dark absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl px-5 py-3">
                    <span className="font-display text-xl font-semibold" style={{ color: mod.color }}>{mod.metric.value}</span>
                    <span className="text-xs uppercase tracking-wider text-white/50">{mod.metric.label}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {mod.audience.map((audience) => (
                    <span key={audience} className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/50">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`reveal-left ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="mb-8 text-base leading-relaxed font-light text-white/55">{mod.description}</p>

                <div className="space-y-4">
                  {mod.features.map((feature, fi) => (
                    <div key={feature.label} className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/3 p-4 transition-all duration-300 hover:border-white/12 hover:bg-white/5" style={{ transitionDelay: `${fi * 50}ms` }}>
                      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: `${mod.color}18`, border: `1px solid ${mod.color}30` }}>
                        <Icon name={feature.icon} size={16} style={{ color: mod.color }} />
                      </div>
                      <div>
                        <p className="mb-0.5 text-sm font-semibold text-white">{feature.label}</p>
                        <p className="text-xs leading-relaxed font-light text-white/45">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:gap-4" style={{ color: mod.color }}>
                  Demander une demo
                  <Icon name="ArrowRightIcon" size={14} />
                </Link>
              </div>
            </div>

            {idx < modules.length - 1 ? <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
