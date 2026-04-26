import { defineArrayMember, defineField, defineType } from "sanity";

export const actualiteType = defineType({
  name: "actualite",
  title: "Actualite",
  type: "document",
  fields: [
    defineField({ name: "category", title: "Categorie", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "title", title: "Titre", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "summary", title: "Resume", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "highlight", title: "Mise en avant", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "accent", title: "Couleur accent", type: "string", initialValue: "#00853F", validation: (rule) => rule.required() }),
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
    defineField({ name: "publishedAt", title: "Date de publication", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "readTime", title: "Temps de lecture", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "heroTitle", title: "Titre detail", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "intro", title: "Introduction", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "paragraphs",
              title: "Paragraphes",
              type: "array",
              of: [defineArrayMember({ type: "text" })],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "keyPoints",
      title: "Points cles",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1),
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
