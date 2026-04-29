import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "id", title: "ID interne", type: "string", description: "Identifiant court, par exemple billetterie, ia ou assuretech.", validation: (rule) => rule.required() }),
    defineField({ name: "title", title: "Titre", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "id", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "tag", title: "Tag", type: "string", initialValue: "Service" }),
    defineField({ name: "color", title: "Couleur", type: "string", initialValue: "#00853F" }),
    defineField({ name: "icon", title: "Icone Heroicons", type: "string", initialValue: "RocketLaunchIcon" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
    defineField({
      name: "featuredImage",
      title: "Image Sanity",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif",
          type: "string",
        }),
      ],
    }),
    defineField({ name: "image", title: "Image URL (legacy ou externe)", type: "url" }),
    defineField({ name: "imageAlt", title: "Texte alternatif image URL", type: "string" }),
    defineField({ name: "orderRank", title: "Ordre", type: "number", initialValue: 1 }),
    defineField({
      name: "features",
      title: "Fonctionnalites",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icone Heroicons", type: "string", initialValue: "BoltIcon" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "desc", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "label", subtitle: "desc" } },
        }),
      ],
    }),
    defineField({
      name: "audience",
      title: "Audience",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "metric",
      title: "Metrique",
      type: "object",
      fields: [
        defineField({ name: "value", title: "Valeur", type: "string" }),
        defineField({ name: "label", title: "Label", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tag",
      media: "featuredImage",
    },
  },
});
