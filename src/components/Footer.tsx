import React from "react";
import Link from "next/link";
import { connection } from "next/server";
import { getContactSettings } from "@/sanity/lib/content";

function FakiAirlineLogo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="font-display font-bold"
        style={{ fontSize: size * 0.78, lineHeight: 1, letterSpacing: "-0.01em" }}
      >
        <span style={{ color: "#00853F" }}>Faki</span>
        <span style={{ color: "#E8622A" }}>Airline</span>
      </span>
      <svg
        width={size * 0.58}
        height={size * 0.58}
        viewBox="0 0 24 24"
        fill="none"
        style={{ color: "#E8622A" }}
      >
        <path
          d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default async function Footer() {
  await connection();
  const contact = await getContactSettings();

  return (
    <footer className="border-black/8 bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          <div className="max-w-xs flex-shrink-0">
            <Link href="/homepage" className="mb-4 flex items-center gap-2">
              <FakiAirlineLogo size={32} />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed font-light">
              Le voyage en toute confiance, 100 % en ligne - premiere plateforme senegalaise de reservation de billets d&apos;avion.
            </p>
            <div className="mt-5 flex h-1.5 w-24 overflow-hidden rounded-full">
              <div className="bg-vert flex-1" />
              <div className="bg-jaune flex-1" />
              <div className="bg-rouge flex-1" />
            </div>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-3">
              <span className="text-text-light text-xs font-semibold uppercase tracking-widest">Produits</span>
              <Link href="/services#billetterie" className="text-text-muted hover:text-vert text-sm font-medium transition-colors">Billetterie SaaS</Link>
              <Link href="/services#ia" className="text-text-muted hover:text-vert text-sm font-medium transition-colors">Logiciels IA</Link>
              <Link href="/services#assuretech" className="text-text-muted hover:text-vert text-sm font-medium transition-colors">AssureTech Voyage</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-text-light text-xs font-semibold uppercase tracking-widest">Entreprise</span>
              <Link href="/homepage" className="text-text-muted hover:text-vert text-sm font-medium transition-colors">Accueil</Link>
              <Link href="/services" className="text-text-muted hover:text-vert text-sm font-medium transition-colors">Services</Link>
              <Link href="/contact" className="text-text-muted hover:text-vert text-sm font-medium transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-text-light text-xs font-semibold uppercase tracking-widest">Contact</span>
              <span className="text-text-muted text-sm font-medium">{contact.address}</span>
              <a href={`mailto:${contact.email}`} className="text-text-muted hover:text-vert text-sm font-medium transition-colors">{contact.email}</a>
              {contact.phoneNumbers.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="text-text-muted hover:text-vert text-sm font-medium transition-colors">{phone}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 md:flex-row">
          <p className="text-text-light text-xs">© 2026 FakiAirline. Tous droits reserves.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-text-light hover:text-text-muted text-xs transition-colors">Confidentialite</Link>
            <Link href="/contact" className="text-text-light hover:text-text-muted text-xs transition-colors">Conditions d&apos;utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
