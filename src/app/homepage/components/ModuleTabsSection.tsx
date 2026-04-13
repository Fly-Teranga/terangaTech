"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

const tabs = [
  {
    id: "billetterie",
    label: "Billetterie SaaS",
    color: "#00853F",
    icon: "TicketIcon",
    headline: "Vendez des billets d'avion en ligne",
    sub: "Digitalisez votre agence de voyage ou compagnie en 7 jours. Accedez au canal digital africain et international.",
    image: "https://images.unsplash.com/photo-1690169309476-19b13633141b",
    features: [
      { icon: "BoltIcon", label: "Deploiement 7 jours" },
      { icon: "ClockIcon", label: "Moteur reservation temps reel" },
      { icon: "GlobeAltIcon", label: "Integration GDS / NDC" },
      { icon: "DevicePhoneMobileIcon", label: "Paiement mobile money & carte" },
      { icon: "DocumentTextIcon", label: "E-ticket & check-in mobile" },
      { icon: "ChartBarIcon", label: "Dashboard revenus live" },
    ],
    metric: { value: "7j", label: "mise en ligne" },
  },
  {
    id: "ia",
    label: "Logiciels IA",
    color: "#FDEF42",
    icon: "CpuChipIcon",
    headline: "IA pour l'optimisation aeronautique",
    sub: "Pricing dynamique, prevision de la demande, maintenance predictive. Automatisez et optimisez chaque operation.",
    image: "https://images.unsplash.com/photo-1644987708868-1a97a5341ec3",
    features: [
      { icon: "CurrencyDollarIcon", label: "Pricing dynamique IA" },
      { icon: "ChartPieIcon", label: "Prevision de la demande" },
      { icon: "WrenchScrewdriverIcon", label: "Maintenance predictive" },
      { icon: "ArrowPathIcon", label: "Gestion rotations appareils" },
      { icon: "CodeBracketIcon", label: "API compagnies & aeroports" },
      { icon: "ShieldCheckIcon", label: "Conformite reglementaire" },
    ],
    metric: { value: "+24%", label: "efficacite operationnelle" },
  },
  {
    id: "assuretech",
    label: "AssureTech Voyage",
    color: "#E31B23",
    icon: "ShieldCheckIcon",
    headline: "Assurance voyage digitalisee",
    sub: "Pour compagnies d'assurance et aeriennes. Proposez, gerez et indemnisez l'assurance voyage au point de vente du billet.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10761c133-1772293794587.png",
    features: [
      { icon: "BoltIcon", label: "Souscription instantanee" },
      { icon: "ComputerDesktopIcon", label: "Gestion sinistres en ligne" },
      { icon: "XCircleIcon", label: "Couverture annulation vol" },
      { icon: "UserCircleIcon", label: "Portail passager self-service" },
      { icon: "DocumentChartBarIcon", label: "Reporting actuariel live" },
    ],
    metric: { value: "100%", label: "digital, zero papier" },
  },
];

export default function ModuleTabsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.1 },
    );

    sectionRef.current?.querySelectorAll(".reveal, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = tabs[activeTab];

  return (
    <section ref={sectionRef} className="bg-light-bg px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-12 text-center">
          <span className="text-vert text-xs font-semibold uppercase tracking-[0.2em]">En detail</span>
          <h2 className="font-display text-text-dark mt-3 text-4xl font-bold tracking-tight md:text-5xl">Explorez chaque module</h2>
        </div>

        <div className="reveal mb-12 flex flex-wrap justify-center gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(i)}
              aria-pressed={activeTab === i}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? "scale-[1.02] border-transparent shadow-card"
                  : "border-black/8 bg-white text-text-muted hover:border-vert/30 hover:text-text-dark"
              }`}
              style={
                activeTab === i
                  ? {
                      background: tab.color,
                      color: tab.color === "#FDEF42" ? "#1A2E22" : "#FFFFFF",
                    }
                  : {}
              }
            >
              <Icon name={tab.icon} size={15} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-8 rounded-[2rem] transition-all duration-300 lg:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ background: `${active.color}12`, color: active.color, border: `1px solid ${active.color}30` }}>
                <Icon name={active.icon} size={13} />
                {active.label}
              </div>

              <h3 className="font-display text-text-dark mb-4 text-3xl font-bold tracking-tight md:text-4xl">{active.headline}</h3>
              <p className="text-text-muted mb-8 text-base leading-relaxed font-light">{active.sub}</p>

              <div className="shadow-card mb-8 inline-flex items-center gap-3 rounded-2xl border bg-white px-5 py-3" style={{ borderColor: `${active.color}25` }}>
                <span className="font-display text-2xl font-bold" style={{ color: active.color }}>{active.metric.value}</span>
                <span className="text-text-muted text-xs uppercase tracking-wider">{active.metric.label}</span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.features.map((feature) => (
                  <div key={feature.label} className="group flex items-center gap-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg" style={{ background: `${active.color}12` }}>
                      <Icon name={feature.icon} size={14} style={{ color: active.color }} />
                    </div>
                    <span className="text-text-dark text-sm font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/contact" className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:gap-4" style={{ color: active.color }}>
              Planifier une demo
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>

          <div className="shadow-card group relative h-[380px] overflow-hidden rounded-3xl border border-black/8 md:h-[440px]">
            <AppImage src={active.image} alt={active.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${active.color}25 0%, transparent 60%)` }} />
            <div className="absolute right-5 bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-black/8 bg-white/90 px-4 py-3 backdrop-blur-sm">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: `${active.color}15` }}>
                <Icon name={active.icon} size={16} style={{ color: active.color }} />
              </div>
              <div>
                <p className="text-text-dark text-xs font-semibold">{active.label}</p>
                <p className="text-text-muted text-[10px]">{active.metric.value} {active.metric.label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
