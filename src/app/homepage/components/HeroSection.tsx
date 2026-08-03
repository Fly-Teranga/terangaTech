"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = contentRef.current?.querySelectorAll(".hero-reveal");
    items?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 150}ms`;
      el.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 pt-28 pb-24">
      <div className="bg-orange animate-float pointer-events-none absolute top-8 left-8 h-5 w-5 rounded-full opacity-80" style={{ animationDuration: "5s" }} />
      <div className="animate-float-reverse pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full opacity-30" style={{ background: "#F5C4A8", animationDuration: "8s" }} />
      <div className="animate-float pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full opacity-25" style={{ background: "#B8E0CC", animationDuration: "9s" }} />
      <div className="bg-rouge animate-float-reverse pointer-events-none absolute right-12 bottom-16 h-10 w-10 rounded-full opacity-70" style={{ animationDuration: "6s" }} />

      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <line x1="30%" y1="20%" x2="70%" y2="60%" stroke="#E8622A" strokeWidth="1" strokeDasharray="6 8" />
        <line x1="65%" y1="15%" x2="95%" y2="55%" stroke="#E8622A" strokeWidth="1" strokeDasharray="6 8" />
      </svg>

      <div ref={contentRef} className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="hero-reveal mb-12 flex items-center justify-center gap-3 opacity-0">
          <span className="font-display font-bold" style={{ fontSize: "clamp(2.8rem, 7vw, 4.8rem)", lineHeight: 1.08, letterSpacing: "-0.01em" }}>
            <span style={{ color: "#00853F" }}>Faki</span>
            <span style={{ color: "#E8622A" }}>Airline</span>
          </span>
          <svg className="flex-shrink-0" style={{ width: "clamp(2rem, 4vw, 3.4rem)", height: "clamp(2rem, 4vw, 3.4rem)", color: "#E8622A", marginLeft: "-4px" }} viewBox="0 0 24 24" fill="none">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" fill="currentColor" />
          </svg>
        </div>

        <h1 className="font-display text-text-dark hero-reveal mb-4 text-xl leading-snug font-bold opacity-0 md:text-2xl lg:text-3xl">
          Le voyage en toute confiance,
        </h1>
        <p className="font-display hero-reveal mb-10 text-xl font-bold opacity-0 md:text-2xl lg:text-3xl" style={{ color: "#E8622A" }}>
          100 % en ligne
        </p>

        <div className="hero-reveal mb-12 flex justify-center opacity-0">
          <div className="border-vert max-w-xl border-l-2 pl-6 text-left">
            <p className="text-text-muted text-sm leading-8 font-light md:text-base">
              Premi&egrave;re plateforme SaaS s&eacute;n&eacute;galaise de r&eacute;servation de billets d&apos;avion, pens&eacute;e pour le march&eacute; local et la diaspora.
            </p>
          </div>
        </div>

        <div className="hero-reveal flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row">
          <Link href="/services" className="bg-vert hover:bg-vert-light hover:shadow-vert group flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5">
            D&eacute;couvrir nos services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/contact" className="border-vert/30 text-vert hover:bg-vert/5 group flex items-center gap-3 rounded-full border-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:border-vert">
            Planifier une demo
          </Link>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 flex h-1.5">
        <div className="bg-vert flex-1" />
        <div className="bg-jaune flex-1" />
        <div className="bg-rouge flex-1" />
      </div>
    </section>
  );
}
