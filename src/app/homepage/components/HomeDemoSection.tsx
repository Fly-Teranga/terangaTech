"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

export default function HomeDemoSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="border-black/6 bg-white px-6 py-28 border-t">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="reveal-left">
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-orange h-px w-8" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#E8622A" }}>Passez a l&apos;action</span>
            </div>
            <h2 className="font-display text-text-dark mb-7 text-3xl font-bold tracking-tight md:text-4xl">
              Planifiez votre
              <br />
              <span className="text-gradient-vert">demo gratuite.</span>
            </h2>
            <p className="text-text-muted mb-12 max-w-xl text-sm leading-8 font-light md:text-base">
              Nos experts vous presentent la solution adaptee a votre activite - compagnie aerienne, agence de voyage ou assureur.
            </p>

            <div className="space-y-5">
              {[
                { icon: "ClockIcon", text: "Demo personnalisee en 30 minutes" },
                { icon: "UserGroupIcon", text: "Equipe dediee secteur aerien" },
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
            {submitted ? (
              <div className="bg-vert/5 border-vert/20 rounded-3xl border p-10 text-center">
                <div className="bg-vert/15 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full">
                  <Icon name="CheckCircleIcon" size={32} className="text-vert" />
                </div>
                <h3 className="font-display text-text-dark mb-3 text-2xl font-bold">Demande envoyee !</h3>
                <p className="text-text-muted mb-6 text-sm">Notre equipe vous contacte sous 24h pour organiser votre demo.</p>
                <Link href="/contact" className="text-vert hover:text-vert-light text-sm font-semibold transition-colors">
                  Formulaire complet →
                </Link>
              </div>
            ) : (
              <div className="bg-light-bg shadow-card rounded-3xl border border-black/8 p-8 md:p-11">
                <h3 className="font-display text-text-dark mb-2 text-xl font-bold">Planifier une demo</h3>
                <p className="text-text-muted mb-8 text-sm">Reponse sous 24h ouvrees.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-text-muted mb-2 block text-xs uppercase tracking-widest">Votre email professionnel</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input-light" placeholder="nom@compagnie.com" required />
                  </div>
                  <div>
                    <label className="text-text-muted mb-2 block text-xs uppercase tracking-widest">Votre societe</label>
                    <input type="text" className="form-input-light" placeholder="Nom de votre entreprise" />
                  </div>
                  <div>
                    <label className="text-text-muted mb-2 block text-xs uppercase tracking-widest">Module d&apos;interet</label>
                    <select className="form-input-light" style={{ color: "#1A2E22" }}>
                      <option value="">Selectionner un module</option>
                      <option value="billetterie">Billetterie Aerienne SaaS</option>
                      <option value="ia">Logiciels Aeronautiques & IA</option>
                      <option value="assuretech">AssureTech Voyage</option>
                      <option value="all">Les 3 modules</option>
                    </select>
                  </div>
                  <button type="submit" className="bg-vert hover:bg-vert-light hover:shadow-vert mt-2 w-full rounded-full py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5">
                    Soumettre ma demande
                  </button>
                </form>
                <p className="text-text-light mt-5 text-center text-xs">
                  Ou{" "}
                  <Link href="/contact" className="text-vert hover:text-vert-light transition-colors">
                    remplir le formulaire complet
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
