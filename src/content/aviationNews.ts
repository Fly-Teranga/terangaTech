export type AviationNewsItem = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  highlight: string;
  accent: string;
  publishedAt: string;
  readTime: string;
  heroTitle: string;
  intro: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
  keyPoints: string[];
};

export const aviationNews: AviationNewsItem[] = [
  {
    slug: "revenus-ancillaires-digital-aerien",
    category: "Compagnies",
    title: "Le digital devient un levier direct de revenus ancillaires",
    summary:
      "Les transporteurs investissent davantage dans les parcours de réservation fluides, l'upsell temps réel et les interfaces self-service pour convertir plus vite.",
    highlight: "+18% de revenus additionnels sur les parcours optimisés",
    accent: "#00853F",
    publishedAt: "26 avril 2026",
    readTime: "4 min",
    heroTitle: "Pourquoi les revenus ancillaires se jouent désormais dans l'expérience digitale",
    intro:
      "Les compagnies aériennes ne se contentent plus de vendre un siège. Elles structurent désormais leur croissance autour d'une expérience digitale capable de proposer au bon moment les bons services additionnels.",
    sections: [
      {
        title: "Le parcours de réservation devient un canal de monétisation",
        paragraphs: [
          "Le tunnel de réservation n'est plus un simple passage transactionnel. Il devient un espace stratégique où la compagnie peut pousser des services à forte marge comme les bagages, le choix de siège, les repas ou les options flexibles.",
          "Quand l'expérience est fluide, les taux de conversion augmentent naturellement. Les utilisateurs perçoivent mieux la valeur des offres additionnelles lorsque celles-ci sont contextualisées et intégrées sans friction.",
        ],
      },
      {
        title: "Le self-service améliore à la fois les ventes et la satisfaction",
        paragraphs: [
          "Les interfaces self-service réduisent la dépendance aux équipes support et permettent aux passagers de modifier ou compléter leurs achats plus facilement.",
          "Cette autonomie améliore l'expérience client tout en ouvrant davantage d'occasions commerciales après l'achat initial, notamment avant le départ ou pendant les étapes de check-in.",
        ],
      },
      {
        title: "Le rôle de la donnée temps réel",
        paragraphs: [
          "Les compagnies les plus performantes pilotent leurs offres ancillaires à partir de la demande, du profil passager et du contexte du vol.",
          "L'analyse temps réel permet d'adapter les propositions, de prioriser les bons bundles et d'augmenter la valeur moyenne par réservation sans dégrader l'expérience utilisateur.",
        ],
      },
    ],
    keyPoints: [
      "Le parcours digital influence directement les revenus additionnels.",
      "Les options self-service créent de nouveaux moments de conversion.",
      "La personnalisation temps réel devient un avantage compétitif.",
    ],
  },
  {
    slug: "ia-operations-aeriennes-performance",
    category: "Opérations",
    title: "L'IA prédictive s'impose dans les opérations aériennes",
    summary:
      "Maintenance, rotation flotte et prévision de demande convergent vers des outils d'aide à la décision connectés aux données aéroportuaires et compagnies.",
    highlight: "Maintenance et planification alimentées par la data live",
    accent: "#E8622A",
    publishedAt: "26 avril 2026",
    readTime: "5 min",
    heroTitle: "Comment l'IA prédictive transforme la performance opérationnelle des acteurs aériens",
    intro:
      "Les opérations aériennes deviennent plus complexes, plus rapides et plus sensibles aux aléas. Dans ce contexte, l'intelligence artificielle prédictive s'impose comme un outil clé pour arbitrer, anticiper et sécuriser les décisions.",
    sections: [
      {
        title: "Prévoir avant de subir",
        paragraphs: [
          "Les équipes opérationnelles cherchent à réduire les imprévus sur la maintenance, les retards en chaîne et la disponibilité flotte. Les modèles prédictifs permettent d'identifier plus tôt les signaux faibles et d'anticiper les impacts.",
          "Cette logique de prévision améliore la continuité de service et réduit les coûts liés aux interventions de dernière minute ou aux réaffectations d'urgence.",
        ],
      },
      {
        title: "Des données connectées à l'action",
        paragraphs: [
          "La valeur de l'IA ne vient pas uniquement du modèle, mais de sa connexion aux données terrain: historiques techniques, rotations, météo, trafic ou performance commerciale.",
          "Lorsqu'elle est bien intégrée, elle devient une couche d'aide à la décision exploitable par les équipes planning, maintenance ou revenue management.",
        ],
      },
      {
        title: "Une meilleure coordination entre commerce et opérations",
        paragraphs: [
          "Prévoir la demande aide aussi à mieux calibrer les fréquences, les ressources et les politiques tarifaires. Les décisions ne sont plus prises en silo.",
          "Cette convergence entre signaux commerciaux et réalité opérationnelle améliore la rentabilité globale tout en renforçant la résilience du réseau.",
        ],
      },
    ],
    keyPoints: [
      "L'IA prédictive réduit les décisions réactives de dernière minute.",
      "La performance dépend de la qualité de l'intégration aux données terrain.",
      "Les gains sont à la fois opérationnels, commerciaux et organisationnels.",
    ],
  },
  {
    slug: "ndc-mobile-money-distribution-afrique-ouest",
    category: "Distribution",
    title: "Le couple NDC + mobile money accélère en Afrique de l'Ouest",
    summary:
      "Les acteurs régionaux cherchent à rapprocher distribution moderne, moyens de paiement locaux et réactivité commerciale pour mieux servir diaspora et voyageurs domestiques.",
    highlight: "Paiement local et distribution internationale réunis",
    accent: "#E31B23",
    publishedAt: "26 avril 2026",
    readTime: "4 min",
    heroTitle: "Pourquoi NDC et mobile money redessinent la distribution aérienne régionale",
    intro:
      "En Afrique de l'Ouest, la distribution aérienne évolue vite. La combinaison entre NDC, paiements locaux et orchestration multi-canaux ouvre un modèle plus direct, plus agile et mieux adapté aux usages du marché.",
    sections: [
      {
        title: "Réduire la dépendance aux intermédiaires",
        paragraphs: [
          "Les connexions NDC donnent aux acteurs la possibilité de diffuser les offres compagnies plus directement, avec davantage de contrôle sur le contenu, les tarifs et les services additionnels.",
          "Cette évolution réduit certains coûts de distribution et permet de mieux valoriser les offres personnalisées dans les différents canaux de vente.",
        ],
      },
      {
        title: "Le paiement local n'est plus optionnel",
        paragraphs: [
          "Pour une large part du marché, le mobile money est une attente de base. Sans moyens de paiement adaptés, une part significative de la demande se perd avant la finalisation.",
          "L'intégration native de ces solutions améliore la conversion et rend les plateformes plus pertinentes pour les voyageurs domestiques comme pour la diaspora.",
        ],
      },
      {
        title: "Une distribution plus riche et mieux orchestrée",
        paragraphs: [
          "Le vrai potentiel se révèle quand l'offre, le paiement et la personnalisation sont pensés ensemble. Les agences, le web, le mobile et les partenaires doivent pouvoir activer la même logique commerciale.",
          "Cette orchestration multi-canaux renforce la cohérence de l'expérience et accélère l'adaptation commerciale selon les segments de clientèle.",
        ],
      },
    ],
    keyPoints: [
      "NDC renforce le contrôle direct sur l'offre et le contenu.",
      "Le mobile money est décisif pour la conversion locale.",
      "L'enjeu n'est pas seulement technique, mais aussi commercial et stratégique.",
    ],
  },
];

export function getAviationNewsBySlug(slug: string) {
  return aviationNews.find((item) => item.slug === slug);
}
