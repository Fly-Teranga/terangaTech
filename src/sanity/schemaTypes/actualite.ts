import { defineArrayMember, defineField, defineType } from "sanity";

export const actualiteType = defineType({
  name: "actualite",
  title: "Actualite",
  type: "document",
  fields: [
    defineField({ name: "category", title: "Categorie", type: "string", initialValue: "Actualites" }),
    defineField({ name: "title", title: "Titre", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "summary", title: "Resume", type: "text", rows: 3 }),
    defineField({ name: "highlight", title: "Mise en avant", type: "string" }),
    defineField({ name: "accent", title: "Couleur accent", type: "string", initialValue: "#00853F" }),
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
    defineField({ name: "publishedAt", title: "Date de publication", type: "string" }),
    defineField({ name: "readTime", title: "Temps de lecture", type: "string" }),
    defineField({ name: "heroTitle", title: "Titre detail", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "text", rows: 4 }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({
              name: "paragraphs",
              title: "Paragraphes",
              type: "array",
              of: [defineArrayMember({ type: "text" })],
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({
      name: "keyPoints",
      title: "Points cles",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
    },
  },
});
