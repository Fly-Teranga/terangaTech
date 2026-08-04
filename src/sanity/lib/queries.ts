import { defineQuery } from "next-sanity";

export const CONTACT_SETTINGS_QUERY = defineQuery(`
  *[_id == "contactSettings" && _type == "contactSettings"][0] {
    address,
    email,
    phoneNumbers,
    openingHours
  }
`);

export const ACTUALITES_QUERY = defineQuery(`
  *[_type == "actualite"] | order(publishedAt desc) {
    _id,
    "slug": slug.current,
    category,
    title,
    summary,
    highlight,
    accent,
    "image": coalesce(featuredImage.asset->url, image),
    "imageAlt": coalesce(featuredImage.alt, imageAlt),
    publishedAt,
    readTime,
    heroTitle,
    intro,
    sections[]{
      title,
      paragraphs
    },
    keyPoints
  }
`);

export const ACTUALITE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "actualite" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    category,
    title,
    summary,
    highlight,
    accent,
    "image": coalesce(featuredImage.asset->url, image),
    "imageAlt": coalesce(featuredImage.alt, imageAlt),
    publishedAt,
    readTime,
    heroTitle,
    intro,
    sections[]{
      title,
      paragraphs
    },
    keyPoints
  }
`);

export const SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(orderRank asc, title asc) {
    _id,
    "slug": slug.current,
    id,
    tag,
    color,
    icon,
    title,
    headline,
    description,
    "image": coalesce(featuredImage.asset->url, image),
    "imageAlt": coalesce(featuredImage.alt, imageAlt),
    features[]{
      icon,
      label,
      desc
    },
    audience,
    metric{
      value,
      label
    }
  }
`);

export const SERVICE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    id,
    tag,
    color,
    icon,
    title,
    headline,
    description,
    "image": coalesce(featuredImage.asset->url, image),
    "imageAlt": coalesce(featuredImage.alt, imageAlt),
    features[]{
      icon,
      label,
      desc
    },
    audience,
    metric{
      value,
      label
    }
  }
`);
