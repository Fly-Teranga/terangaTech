"use client";

import React, { useEffect, useRef } from "react";

const stats = [
  { value: "7", unit: "jours", label: "Deploiement billetterie", accent: "#00853F" },
  { value: "3", unit: "modules", label: "SaaS integres", accent: "#FDEF42" },
  { value: "100%", unit: "", label: "Temps reel - reservation & revenus", accent: "#E31B23" },
  { value: "GDS", unit: "/NDC", label: "Integration mondiale", accent: "#00853F" },
];

const differentiators = [
  { icon: "✈", title: "Secteur aerien exclusif", desc: "Specialistes aviation - pas un generaliste SaaS." },
  { icon: "🌍", title: "Canal africain & international", desc: "Mobile money, UEMOA, CEMAC, et au-dela." },
  { icon: "🤖", title: "IA embarquee", desc: "Pricing, prevision, maintenance - tout en temps reel." },
  { icon: "⚡", title: "Mise en ligne en 7 jours", desc: "Integration rapide sans interruption d'activite." },
];

export default function StatsSection() {
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

  return (
    <section ref={sectionRef} className="border-black/6 bg-white px-6 py-20 border-y">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="font-display mb-2 font-bold tracking-tight" style={{ color: stat.accent }}>
                <span className="text-5xl md:text-6xl">{stat.value}</span>
                <span className="text-2xl md:text-3xl">{stat.unit}</span>
              </div>
              <p className="text-text-muted text-xs font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="reveal mb-6">
          <p className="text-vert mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em]">Pourquoi Teranga Tech</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <div key={item.title} className="reveal-scale bg-light-bg hover:shadow-card group rounded-2xl border border-black/6 p-6 transition-all duration-300 hover:border-vert/30" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="mb-4 inline-block origin-left text-2xl transition-transform group-hover:scale-110">{item.icon}</div>
              <h3 className="font-display text-text-dark mb-2 text-base font-bold">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
