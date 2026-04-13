"use client";

import React, { useEffect, useRef } from "react";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

const contactDetails = [
  { icon: "MapPinIcon", label: "Adresse", lines: ["Almadies, Dakar", "Senegal - BP 12450"], color: "#00853F" },
  { icon: "PhoneIcon", label: "Telephone", lines: ["+221 33 800 12 34", "+221 77 800 12 34"], color: "#FDEF42", href: "tel:+221338001234" },
  { icon: "EnvelopeIcon", label: "Email", lines: ["contact@terangatech.sn", "demo@terangatech.sn"], color: "#E31B23", href: "mailto:contact@terangatech.sn" },
  { icon: "ClockIcon", label: "Horaires", lines: ["Lun-Ven : 08h00-18h00", "Samedi : 09h00-13h00"], color: "#00853F" },
];

const modules = [
  { label: "Billetterie SaaS", color: "#00853F" },
  { label: "Logiciels IA", color: "#FDEF42" },
  { label: "AssureTech Voyage", color: "#E31B23" },
];

export default function ContactInfo() {
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
    <div ref={sectionRef} className="sticky top-28 flex flex-col gap-6">
      <div className="reveal glass-dark rounded-3xl border border-white/8 p-8">
        <h3 className="font-display mb-6 text-xl font-semibold text-white">Informations de contact</h3>
        <div className="space-y-6">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="group flex items-start gap-4">
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${detail.color}15`, border: `1px solid ${detail.color}30` }}
              >
                <Icon name={detail.icon} size={18} style={{ color: detail.color }} />
              </div>
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/35">{detail.label}</p>
                {detail.lines.map((line, i) =>
                  detail.href && i === 0 ? (
                    <a key={line} href={detail.href} className="text-vert block text-sm font-medium text-white/80 transition-colors hover:text-vert">
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-sm font-medium text-white/80">{line}</p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal-scale group relative h-[200px] overflow-hidden rounded-3xl border border-white/8">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_18142ce97-1773079416693.png"
          alt="Dakar city coastline"
          fill
          className="object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="from-dark/70 absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="glass-dark animate-float absolute bottom-4 left-4 flex items-center gap-2 rounded-xl px-4 py-2.5">
          <span className="bg-vert h-2 w-2 animate-ping rounded-full" />
          <span className="text-xs font-semibold text-white">Dakar, Senegal</span>
        </div>
      </div>

      <div className="reveal glass-dark rounded-3xl border border-white/8 p-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/35">Nos modules</p>
        <div className="space-y-3">
          {modules.map((module) => (
            <div key={module.label} className="flex items-center gap-3">
              <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: module.color }} />
              <span className="text-sm font-medium text-white/65">{module.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 border-t border-white/5 pt-5">
          <p className="text-xs leading-relaxed font-light text-white/30">Demo gratuite - Reponse sous 24h - Accompagnement personnalise</p>
        </div>
      </div>
    </div>
  );
}
