"use client";

import React, { useEffect, useRef } from "react";

export default function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".c-reveal");
    items?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 150}ms`;
      el.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-36 pb-10">
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full opacity-20"
        style={{ background: "#F5C4A8" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-20 h-60 w-60 rounded-full opacity-15"
        style={{ background: "#B8E0CC" }}
      />
      <div className="bg-orange pointer-events-none absolute top-10 left-10 h-3 w-3 rounded-full opacity-70" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <line x1="55%" y1="5%" x2="85%" y2="45%" stroke="#E8622A" strokeWidth="1" strokeDasharray="6 8" />
      </svg>
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="c-reveal mb-5 flex items-center gap-3 opacity-0">
          <span className="bg-vert h-px w-8" />
          <span className="text-vert text-xs font-semibold uppercase tracking-[0.2em]">Contact & Demo</span>
        </div>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-display text-text-dark c-reveal mb-4 text-5xl leading-[1.05] font-semibold tracking-tight opacity-0 md:text-6xl">
              Parlons de votre
              <br />
              <span className="text-gradient-vert italic">projet aerien.</span>
            </h1>
          </div>
          <div className="flex items-end lg:col-span-5">
            <p className="text-text-muted c-reveal text-base leading-relaxed font-light opacity-0">
              Demo gratuite, conseil personnalise, reponse sous 24h. Notre equipe specialisee aviation vous accompagne de A a Z.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
