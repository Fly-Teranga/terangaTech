"use client";

import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-36 pb-20">
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-20" style={{ background: "#F5C4A8" }} />
      <div className="pointer-events-none absolute top-1/2 -left-24 h-64 w-64 rounded-full opacity-15" style={{ background: "#B8E0CC" }} />
      <div className="bg-orange pointer-events-none absolute top-8 left-8 h-4 w-4 rounded-full opacity-70" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <line x1="60%" y1="10%" x2="90%" y2="50%" stroke="#E8622A" strokeWidth="1" strokeDasharray="6 8" />
      </svg>

      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="bg-vert h-px w-8" />
          <span className="text-vert text-xs font-semibold uppercase tracking-[0.2em]">Nos services</span>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-display text-text-dark text-5xl leading-[1.02] font-semibold tracking-tight md:text-6xl lg:text-7xl">
              3 modules.
              <br />
              <span className="text-gradient-vert italic">Un ecosysteme</span>
              <br />
              aerien complet.
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-text-muted mb-8 text-base leading-relaxed font-light">
              De la vente de billets a la gestion d&apos;assurance voyage, en passant par l&apos;optimisation IA des operations - Teranga Tech Solution couvre l&apos;integralite de la chaine de valeur aerienne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="bg-vert hover:bg-vert-light hover:shadow-vert flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300">
                Planifier une demo
                <Icon name="ArrowRightIcon" size={15} />
              </Link>
              <Link href="/contact" className="border-vert/30 text-vert hover:bg-vert/5 flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-vert">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { id: "billetterie", label: "Billetterie SaaS", color: "#00853F", icon: "TicketIcon" },
            { id: "ia", label: "Logiciels IA", color: "#FDEF42", icon: "CpuChipIcon" },
            { id: "assuretech", label: "AssureTech", color: "#E31B23", icon: "ShieldCheckIcon" },
          ].map((module) => (
            <a key={module.id} href={`#${module.id}`} className="shadow-card group flex items-center gap-3 rounded-2xl border border-black/8 bg-white px-5 py-4 transition-all duration-300 hover:border-vert/30 hover:shadow-card-hover">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: `${module.color}12`, border: `1px solid ${module.color}30` }}>
                <Icon name={module.icon} size={17} style={{ color: module.color }} />
              </div>
              <span className="text-text-dark group-hover:text-vert text-sm font-semibold transition-colors">{module.label}</span>
              <Icon name="ChevronRightIcon" size={14} className="text-text-light ml-auto transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
