import "server-only";
import { defaultContactSettings, type ContactSettings } from "@/content/contactSettings";
import type { AviationNewsItem } from "@/content/aviationNews";
import { aviationNews, getAviationNewsBySlug } from "@/content/aviationNews";
import type { ServiceOffer } from "@/content/serviceOffers";
import { getServiceOfferBySlug, serviceOffers } from "@/content/serviceOffers";
import { hasSanityConfig } from "../env";
import { getSanityClient } from "./client";
import {
  ACTUALITE_BY_SLUG_QUERY,
  ACTUALITES_QUERY,
  CONTACT_SETTINGS_QUERY,
  SERVICE_BY_SLUG_QUERY,
  SERVICES_QUERY,
} from "./queries";

type SanityNews = Partial<AviationNewsItem> & { slug?: string };
type SanityService = Partial<ServiceOffer> & { slug?: string; id?: string };
type SanityContactSettings = Partial<ContactSettings>;

function normalizeNewsItem(item: SanityNews): AviationNewsItem | null {
  if (!item.slug || !item.title) {
    return null;
  }

  return {
    slug: item.slug,
    category: item.category || "Actualites",
    title: item.title,
    summary: item.summary || "",
    highlight: item.highlight || "",
    accent: item.accent || "#00853F",
    image: item.image || null,
    imageAlt: item.imageAlt || "",
    publishedAt: item.publishedAt || "",
    readTime: item.readTime || "",
    heroTitle: item.heroTitle || item.title,
    intro: item.intro || item.summary || "",
    sections: item.sections || [],
    keyPoints: item.keyPoints || [],
  };
}

function normalizeServiceOffer(item: SanityService): ServiceOffer | null {
  if (!item.slug || !item.id || !item.title) {
    return null;
  }

  return {
    id: item.id,
    slug: item.slug,
    tag: item.tag || "Service",
    color: item.color || "#00853F",
    icon: item.icon || "RocketLaunchIcon",
    title: item.title,
    headline: item.headline || item.title,
    description: item.description || "",
    image: item.image || null,
    imageAlt: item.imageAlt || "",
    features: item.features || [],
    audience: item.audience || [],
    metric: item.metric || { value: "", label: "" },
  };
}

export async function getAllActualites(): Promise<AviationNewsItem[]> {
  if (!hasSanityConfig) {
    return aviationNews;
  }

  const client = getSanityClient().withConfig({ useCdn: false });
  const data = await client.fetch<SanityNews[]>(ACTUALITES_QUERY);
  const normalized = data
    .map(normalizeNewsItem)
    .filter((item): item is AviationNewsItem => Boolean(item));

  return normalized.length ? normalized : aviationNews;
}

export async function getActualiteBySlug(slug: string) {
  if (!hasSanityConfig) {
    return getAviationNewsBySlug(slug) || null;
  }

  const client = getSanityClient().withConfig({ useCdn: false });
  const data = await client.fetch<SanityNews | null>(ACTUALITE_BY_SLUG_QUERY, {
    slug,
  });

  return normalizeNewsItem(data || {}) || getAviationNewsBySlug(slug) || null;
}

export async function getAllServices(): Promise<ServiceOffer[]> {
  if (!hasSanityConfig) {
    return serviceOffers;
  }

  const client = getSanityClient().withConfig({ useCdn: false });
  const data = await client.fetch<SanityService[]>(SERVICES_QUERY);
  const normalized = data
    .map(normalizeServiceOffer)
    .filter((item): item is ServiceOffer => Boolean(item));

  return normalized.length ? normalized : serviceOffers;
}

export async function getServiceBySlug(slug: string) {
  if (!hasSanityConfig) {
    return getServiceOfferBySlug(slug) || null;
  }

  const client = getSanityClient().withConfig({ useCdn: false });
  const data = await client.fetch<SanityService | null>(SERVICE_BY_SLUG_QUERY, {
    slug,
  });

  return normalizeServiceOffer(data || {}) || getServiceOfferBySlug(slug) || null;
}

export async function getContactSettings(): Promise<ContactSettings> {
  if (!hasSanityConfig) {
    return defaultContactSettings;
  }

  const client = getSanityClient().withConfig({ useCdn: false });
  const data = await client.fetch<SanityContactSettings | null>(CONTACT_SETTINGS_QUERY);

  if (!data?.address || !data.email || !data.phoneNumbers?.length || !data.openingHours?.length) {
    return defaultContactSettings;
  }

  return {
    address: data.address,
    email: data.email,
    phoneNumbers: data.phoneNumbers,
    openingHours: data.openingHours,
  };
}
