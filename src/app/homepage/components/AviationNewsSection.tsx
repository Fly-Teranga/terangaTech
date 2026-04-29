"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import type { AviationNewsItem } from "@/content/aviationNews";

const sectorSignals = [
  "Hausse des attentes sur les paiements locaux et le remboursement rapide",
  "Demande croissante de portails passagers et d'automatisation post-achat",
  "Pilotage commercial plus fin grace aux donnees tarifaires en continu",
];

type AviationNewsSectionProps = {
  items: AviationNewsItem[];
};

export default function AviationNewsSection({
  items,
}: AviationNewsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );

    sectionRef.current
      ?.querySelectorAll(".reveal, .reveal-scale, .reveal-left")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-black/6 bg-white px-6 py-24"
    >
      <div
        className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(232,98,42,0.18) 0%, rgba(232,98,42,0) 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,133,63,0.14) 0%, rgba(0,133,63,0) 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="reveal-left">
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-orange h-px w-8" />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#E8622A" }}
              >
                Actualites aeronautiques
              </span>
            </div>
            <h2 className="font-display text-text-dark max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              La veille secteur qui
              <br />
              <span className="text-text-muted font-normal">
                impacte vos ventes, vos operations et votre relation passager.
              </span>
            </h2>
          </div>

          <div className="reveal">
            <p className="text-text-muted max-w-xl text-sm leading-relaxed font-light md:text-base">
              Teranga Tech suit les grandes tendances de l&apos;aeronautique pour aider
              les agences, compagnies et assureurs a transformer l&apos;actualite en
              decisions concretes.
            </p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item, index) => (
              <Link
                key={item.slug}
                href={`/actualites/${item.slug}`}
                className="reveal-scale shadow-card hover:shadow-card-hover group rounded-3xl border border-black/8 bg-light-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/12"
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      background: `${item.accent}16`,
                      color: item.accent,
                      border: `1px solid ${item.accent}2f`,
                    }}
                  >
                    {item.category}
                  </span>
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: item.accent }}
                  />
                </div>

                <h3 className="font-display text-text-dark mb-4 text-2xl font-bold leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-muted mb-6 text-sm leading-relaxed font-light">
                  {item.summary}
                </p>

                <div
                  className="mb-6 rounded-2xl border px-4 py-3 text-sm font-medium"
                  style={{
                    borderColor: `${item.accent}24`,
                    background: `${item.accent}0d`,
                    color: item.accent,
                  }}
                >
                  {item.highlight}
                </div>

                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
                  style={{ color: item.accent }}
                >
                  Lecture strategique
                  <Icon name="ArrowRightIcon" size={13} />
                </div>
              </Link>
            ))}
          </div>

          <aside className="reveal rounded-[2rem] bg-dark p-8 text-white shadow-[0_26px_60px_rgba(8,17,12,0.24)]">
            <div className="mb-8 flex items-center gap-3">
              <div className="bg-vert/15 animate-pulse-green flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10">
                <Icon name="SignalIcon" size={20} className="text-jaune" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Radar marche
                </p>
                <h3 className="font-display mt-1 text-2xl font-bold">
                  A surveiller maintenant
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {sectorSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="bg-jaune mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                    <p className="text-sm leading-relaxed text-white/82">
                      {signal}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/6 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                Notre angle
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/82">
                Nous traduisons ces tendances en modules concrets: distribution,
                automatisation, IA et experience passager.
              </p>
            </div>

            <Link
              href="/actualites"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-jaune px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#08110C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7e82b]"
            >
              Voir toutes les actualites
              <Icon name="ArrowRightIcon" size={15} />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
