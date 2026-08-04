import type { Template } from "sanity";
import type { StructureResolver } from "sanity/structure";

const actualiteStarterSections = [
  {
    _type: "object",
    title: "Contexte",
    paragraphs: [
      "Expliquez ici le changement de marche, la tendance ou l'annonce a suivre.",
    ],
  },
  {
    _type: "object",
    title: "Impact metier",
    paragraphs: [
      "Precisez ici ce que cela change pour les compagnies, distributeurs ou assureurs.",
    ],
  },
  {
    _type: "object",
    title: "Lecture strategique FakiAirline",
    paragraphs: [
      "Reliez cette actualite a vos offres, vos cas d'usage et votre vision produit.",
    ],
  },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenus")
    .items([
      S.listItem()
        .title("Actualites")
        .schemaType("actualite")
        .child(S.documentTypeList("actualite").title("Actualites")),
      S.listItem()
        .title("Services")
        .schemaType("service")
        .child(S.documentTypeList("service").title("Services")),
      S.listItem()
        .title("Informations de contact")
        .schemaType("contactSettings")
        .child(
          S.document()
            .documentId("contactSettings")
            .schemaType("contactSettings")
            .title("Informations de contact"),
        ),
      ...S.documentTypeListItems().filter(
        (item) => !["actualite", "service", "contactSettings"].includes(item.getId() || ""),
      ),
    ]);

export const studioTemplates: Template[] = [
  {
    id: "actualite-guidee",
    title: "Actualite guidee",
    schemaType: "actualite",
    value: {
      category: "Aviation",
      accent: "#00853F",
      readTime: "4 min",
      heroTitle: "Titre detaille de l'analyse",
      intro:
        "Resumez ici en une ou deux phrases le sujet, son contexte et l'enjeu principal.",
      sections: actualiteStarterSections,
      keyPoints: [
        "Premier point cle a retenir",
        "Deuxieme point cle a retenir",
        "Troisieme point cle a retenir",
      ],
    },
  },
  {
    id: "service-guide",
    title: "Service guide",
    schemaType: "service",
    value: {
      color: "#00853F",
      icon: "RocketLaunchIcon",
      headline: "Promesse courte du service",
      description:
        "Decrivez ici le probleme adresse, le positionnement du service et la valeur livree.",
      features: [
        {
          _type: "object",
          icon: "BoltIcon",
          label: "Fonctionnalite cle",
          desc: "Expliquez ici le benefice principal pour le client.",
        },
      ],
      audience: ["Audience principale"],
      metric: {
        _type: "object",
        value: "1 KPI",
        label: "indicateur mis en avant",
      },
    },
  },
];
