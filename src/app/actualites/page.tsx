import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import { getAllActualites } from "@/sanity/lib/content";

export const dynamic = "force-dynamic";

export default async function ActualitesPage() {
  const aviationNews = await getAllActualites();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="border-b border-black/6 bg-light-bg px-6 pt-32 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="bg-orange h-px w-8" />
            <span className="text-orange text-xs font-semibold uppercase tracking-[0.2em]">
              Actualites
            </span>
          </div>
          <h1 className="font-display text-text-dark max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
            Veille aeronautique, signaux marche et analyses strategiques.
          </h1>
          <p className="text-text-muted mt-7 max-w-2xl text-sm leading-8 font-light md:text-base">
            Une lecture metier des tendances qui transforment la distribution,
            les operations et l&apos;experience passager.
          </p>
        </div>
      </section>
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {aviationNews.map((item) => (
            <Link
              key={item.slug}
              href={`/actualites/${item.slug}`}
              className="shadow-card hover:shadow-card-hover group rounded-3xl border border-black/8 bg-light-bg p-9 transition-all duration-300 hover:-translate-y-1"
            >
              {item.image && (
                <div className="mb-7 overflow-hidden rounded-2xl">
                  <AppImage
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    width={900}
                    height={520}
                    quality={75}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="mb-6 flex items-center justify-between gap-4">
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
                <span className="text-text-light text-xs uppercase tracking-wider">
                  {item.readTime}
                </span>
              </div>
              <h2 className="font-display text-text-dark mb-4 text-2xl font-bold leading-tight">
                {item.title}
              </h2>
              <p className="text-text-muted mb-6 text-sm leading-7 font-light">
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
              <div className="text-text-light mb-6 text-xs uppercase tracking-wider">
                Publie le {item.publishedAt}
              </div>
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
                style={{ color: item.accent }}
              >
                Lire l&apos;analyse complete
                <Icon name="ArrowRightIcon" size={13} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
