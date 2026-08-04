import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import { getAllActualites, getActualiteBySlug } from "@/sanity/lib/content";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ActualiteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getActualiteBySlug(slug);

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="border-b border-black/6 bg-white px-6 pt-32 pb-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/actualites"
            className="text-text-muted hover:text-vert mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <Icon name="ArrowLeftIcon" size={16} />
            Retour aux actualités
          </Link>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
              style={{
                background: `${article.accent}16`,
                color: article.accent,
                border: `1px solid ${article.accent}2f`,
              }}
            >
              {article.category}
            </span>
            <span className="text-text-light text-xs uppercase tracking-wider">
              {article.publishedAt}
            </span>
            <span className="text-text-light text-xs uppercase tracking-wider">
              {article.readTime}
            </span>
          </div>
          <h1 className="font-display text-text-dark text-4xl font-bold tracking-tight md:text-6xl">
            {article.heroTitle}
          </h1>
          <p className="text-text-muted mt-6 max-w-3xl text-lg leading-relaxed font-light">
            {article.intro}
          </p>
        </div>
      </section>
      <section className="bg-light-bg px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="rounded-[2rem] border border-black/6 bg-white p-8 md:p-12">
            {article.image && (
              <div className="mb-10 overflow-hidden rounded-3xl">
                <AppImage
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  width={1200}
                  height={675}
                  quality={75}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}
            <div className="space-y-10">
              {article.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display text-text-dark mb-4 text-3xl font-bold">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-text-muted text-base leading-relaxed font-light"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
          <aside className="h-fit rounded-[2rem] bg-dark p-8 text-white shadow-[0_26px_60px_rgba(8,17,12,0.24)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              À retenir
            </p>
            <div className="mt-6 space-y-4">
              {article.keyPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: article.accent }}
                    />
                    <p className="text-sm leading-relaxed text-white/82">{point}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-jaune px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#08110C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7e82b]"
            >
              Échanger avec nos experts
              <Icon name="ArrowRightIcon" size={15} />
            </Link>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
