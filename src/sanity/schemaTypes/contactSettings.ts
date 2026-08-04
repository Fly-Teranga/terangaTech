import { defineArrayMember, defineField, defineType } from "sanity";

export const contactSettingsType = defineType({
  name: "contactSettings",
  title: "Informations de contact",
  type: "document",
  fields: [
    defineField({
      name: "address",
      title: "Adresse",
      type: "string",
      initialValue: "Dakar, Sénégal",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "email",
      initialValue: "contact@fakitechgroup.com",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phoneNumbers",
      title: "Numéros de téléphone",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      initialValue: ["+221 77 137 76 37", "+221 77 621 78 98"],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "openingHours",
      title: "Horaires d'ouverture",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      initialValue: ["Lun-Ven : 08h00-18h00", "Samedi : 09h00-13h00"],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Informations de contact" }),
  },
});
