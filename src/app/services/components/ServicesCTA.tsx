"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

export default function ServicesCTA() {
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
    <section ref={sectionRef} className="bg-dark px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-scale relative flex min-h-[380px] items-center overflow-hidden rounded-4xl">
          <div className="absolute inset-0">
            <AppImage src="https://images.unsplash.com/photo-1558795498-71a8b32f3f9a" alt="Aircraft flying over clouds" fill className="object-cover" sizes="100vw" />
            <div className="from-dark/90 via-dark/75 absolute inset-0 bg-gradient-to-r to-dark/40" />
          </div>

          <div className="relative z-10 max-w-2xl px-10 py-16 md:px-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-jaune h-px w-8" />
              <span className="text-jaune/90 text-xs font-semibold uppercase tracking-[0.2em]">Passez a l&apos;action</span>
            </div>
            <h2 className="font-display mb-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Pret a decoller
              <br />
              <span className="text-gradient-vert italic">avec Teranga Tech ?</span>
            </h2>
            <p className="mb-10 text-base leading-relaxed font-light text-white/60">
              Planifiez une demo gratuite et decouvrez comment nos modules SaaS transforment votre activite aerienne en 7 jours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-vert hover:bg-vert-light hover:shadow-vert group flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5">
                Planifier une demo
                <Icon name="ArrowRightIcon" size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="border-white/20 text-white/70 hover:border-white/40 flex items-center gap-2 rounded-full border px-8 py-4 text-sm font-medium transition-all duration-300 hover:text-white">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
