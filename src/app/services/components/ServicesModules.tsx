"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import type { ServiceOffer } from "@/content/serviceOffers";

type ServicesModulesProps = {
  services: ServiceOffer[];
};

export default function ServicesModules({
  services,
}: ServicesModulesProps) {
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
        {services.map((mod, idx) => (
          <div key={mod.id} id={mod.slug} className="scroll-mt-24">
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
                  <AppImage src={mod.image || "https://images.unsplash.com/photo-1663355176396-31843c79e396"} alt={mod.imageAlt || mod.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
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

            {idx < services.length - 1 ? <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
