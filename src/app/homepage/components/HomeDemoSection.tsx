"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

export default function HomeDemoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.15 },
    );

    sectionRef.current?.querySelectorAll(".reveal, .reveal-scale, .reveal-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-black/6 bg-white px-6 py-28 border-t">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="reveal-left">
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-orange h-px w-8" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#E8622A" }}>Passez à l&apos;action</span>
            </div>
            <h2 className="font-display text-text-dark mb-7 text-3xl font-bold tracking-tight md:text-4xl">
              Planifiez votre
              <br />
              <span className="text-gradient-vert">démo gratuite.</span>
            </h2>
            <p className="text-text-muted mb-12 max-w-xl text-sm leading-8 font-light md:text-base">
              Nos experts vous présentent la solution adaptée à votre activité : compagnie aérienne, agence de voyage ou assureur.
            </p>

            <div className="space-y-5">
              {[
                { icon: "ClockIcon", text: "Démo personnalisée en 30 minutes" },
                { icon: "UserGroupIcon", text: "Équipe dédiée secteur aérien" },
                { icon: "RocketLaunchIcon", text: "Mise en production en 7 jours" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="bg-vert/10 border-vert/20 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border">
                    <Icon name={item.icon} size={18} className="text-vert" />
                  </div>
                  <span className="text-text-dark text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-scale">
            <div className="bg-light-bg shadow-card rounded-3xl border border-black/8 p-8 md:p-11">
              <div className="bg-vert/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <Icon name="PaperAirplaneIcon" size={30} className="text-vert" />
              </div>
              <h3 className="font-display text-text-dark mb-3 text-center text-2xl font-bold">Prêt à échanger ?</h3>
              <p className="text-text-muted mx-auto mb-8 max-w-sm text-center text-sm leading-6">
                Décrivez votre besoin dans notre formulaire complet. Notre équipe vous répond sous 24 heures ouvrées.
              </p>
              <Link href="/contact" className="bg-vert hover:bg-vert-light hover:shadow-vert flex w-full items-center justify-center gap-3 rounded-full py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5">
                Planifier une démo
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
