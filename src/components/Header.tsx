"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Accueil", href: "/homepage" },
  { label: "Services", href: "/services" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

function FakiAirlineLogo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="font-display font-bold"
        style={{ fontSize: size * 0.78, lineHeight: 1, letterSpacing: "-0.01em" }}
      >
        <span style={{ color: "#00853F" }}>Faki</span>
        <span style={{ color: "#E8622A" }}>Airline</span>
      </span>
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="none"
        style={{ color: "#E8622A", marginLeft: -1 }}
      >
        <path
          d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) =>
    href === "/actualites" ? pathname.startsWith("/actualites") : pathname === href;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-black/8 bg-white/95 py-3 shadow-sm backdrop-blur-md border-b"
            : "bg-white/80 py-5 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/homepage" className="group flex items-center gap-2">
            <FakiAirlineLogo size={36} />
          </Link>
          <nav className="hidden items-center gap-1 rounded-full border border-black/8 bg-gray-50 px-2 py-1.5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  isActiveLink(link.href)
                    ? "bg-vert text-white shadow-sm"
                    : "text-text-muted hover:text-text-dark hover:bg-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/services"
              className="text-text-muted hover:text-vert px-4 py-2 text-sm font-medium transition-colors"
            >
              Voir les offres
            </Link>
            <Link
              href="/contact"
              className="bg-vert hover:bg-vert-light hover:shadow-vert flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="bg-orange absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-orange relative inline-flex h-2 w-2 rounded-full" />
              </span>
              Planifier une demo
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-black/8 bg-gray-50 md:hidden"
            aria-label="Menu"
          >
            <span className={`bg-text-dark h-0.5 w-5 transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`bg-text-dark h-0.5 w-5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`bg-text-dark h-0.5 w-5 transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>
      {menuOpen ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-white px-6 pt-24">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                  isActiveLink(link.href)
                    ? "bg-vert text-white"
                    : "text-text-dark hover:bg-vert/5 hover:text-vert"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/services" className="border-vert/40 text-vert w-full rounded-2xl border py-4 text-center text-base font-semibold" onClick={() => setMenuOpen(false)}>
              Voir les offres
            </Link>
            <Link href="/contact" className="bg-vert w-full rounded-2xl py-4 text-center text-base font-semibold text-white" onClick={() => setMenuOpen(false)}>
              Planifier une demo
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
