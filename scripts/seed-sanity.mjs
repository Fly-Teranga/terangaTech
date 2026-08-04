import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET.",
  );
}

if (!token) {
  throw new Error(
    "Missing write token. Run with `sanity exec ... --with-user-token` or set SANITY_API_WRITE_TOKEN.",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-03-01",
  token,
  useCdn: false,
});

const actualites = [
  {
    _id: "actualite.revenus-ancillaires-digital-aerien",
    _type: "actualite",
    category: "Compagnies",
    title: "Le digital devient un levier direct de revenus ancillaires",
    slug: { _type: "slug", current: "revenus-ancillaires-digital-aerien" },
    summary:
      "Les transporteurs investissent davantage dans les parcours de réservation fluides, l'upsell temps réel et les interfaces self-service pour convertir plus vite.",
    highlight: "+18% de revenus additionnels sur les parcours optimisés",
    accent: "#00853F",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Cabine d'avion et passagers en embarquement",
    publishedAt: "26 avril 2026",
    readTime: "4 min",
    heroTitle: "Pourquoi les revenus ancillaires se jouent désormais dans l'expérience digitale",
    intro:
      "Les compagnies aériennes ne se contentent plus de vendre un siège. Elles structurent désormais leur croissance autour d'une expérience digitale capable de proposer au bon moment les bons services additionnels.",
    sections: [
      {
        _type: "object",
        title: "Le parcours de réservation devient un canal de monétisation",
        paragraphs: [
          "Le tunnel de réservation n'est plus un simple passage transactionnel. Il devient un espace stratégique où la compagnie peut pousser des services à forte marge comme les bagages, le choix de siège, les repas ou les options flexibles.",
          "Quand l'expérience est fluide, les taux de conversion augmentent naturellement. Les utilisateurs perçoivent mieux la valeur des offres additionnelles lorsque celles-ci sont contextualisées et intégrées sans friction.",
        ],
      },
      {
        _type: "object",
        title: "Le self-service améliore à la fois les ventes et la satisfaction",
        paragraphs: [
          "Les interfaces self-service réduisent la dépendance aux équipes support et permettent aux passagers de modifier ou compléter leurs achats plus facilement.",
          "Cette autonomie améliore l'expérience client tout en ouvrant davantage d'occasions commerciales après l'achat initial, notamment avant le départ ou pendant les étapes de check-in.",
        ],
      },
      {
        _type: "object",
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
    _id: "actualite.ia-operations-aeriennes-performance",
    _type: "actualite",
    category: "Opérations",
    title: "L'IA prédictive s'impose dans les opérations aériennes",
    slug: { _type: "slug", current: "ia-operations-aeriennes-performance" },
    summary:
      "Maintenance, rotation flotte et prévision de demande convergent vers des outils d'aide à la décision connectés aux données aéroportuaires et compagnies.",
    highlight: "Maintenance et planification alimentées par la data live",
    accent: "#E8622A",
    image:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Avion au sol avec personnel technique en opération",
    publishedAt: "26 avril 2026",
    readTime: "5 min",
    heroTitle: "Comment l'IA prédictive transforme la performance opérationnelle des acteurs aériens",
    intro:
      "Les opérations aériennes deviennent plus complexes, plus rapides et plus sensibles aux aléas. Dans ce contexte, l'intelligence artificielle prédictive s'impose comme un outil clé pour arbitrer, anticiper et sécuriser les décisions.",
    sections: [
      {
        _type: "object",
        title: "Prévoir avant de subir",
        paragraphs: [
          "Les équipes opérationnelles cherchent à réduire les imprévus sur la maintenance, les retards en chaîne et la disponibilité flotte. Les modèles prédictifs permettent d'identifier plus tôt les signaux faibles et d'anticiper les impacts.",
          "Cette logique de prévision améliore la continuité de service et réduit les coûts liés aux interventions de dernière minute ou aux réaffectations d'urgence.",
        ],
      },
      {
        _type: "object",
        title: "Des données connectées à l'action",
        paragraphs: [
          "La valeur de l'IA ne vient pas uniquement du modèle, mais de sa connexion aux données terrain: historiques techniques, rotations, météo, trafic ou performance commerciale.",
          "Lorsqu'elle est bien intégrée, elle devient une couche d'aide à la décision exploitable par les équipes planning, maintenance ou revenue management.",
        ],
      },
      {
        _type: "object",
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
    _id: "actualite.ndc-mobile-money-distribution-afrique-ouest",
    _type: "actualite",
    category: "Distribution",
    title: "Le couple NDC + mobile money accélère en Afrique de l'Ouest",
    slug: { _type: "slug", current: "ndc-mobile-money-distribution-afrique-ouest" },
    summary:
      "Les acteurs régionaux cherchent à rapprocher distribution moderne, moyens de paiement locaux et réactivité commerciale pour mieux servir diaspora et voyageurs domestiques.",
    highlight: "Paiement local et distribution internationale réunis",
    accent: "#E31B23",
    image:
      "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Voyageuse dans un terminal d'aéroport consultant son mobile",
    publishedAt: "26 avril 2026",
    readTime: "4 min",
    heroTitle: "Pourquoi NDC et mobile money redessinent la distribution aérienne régionale",
    intro:
      "En Afrique de l'Ouest, la distribution aérienne évolue vite. La combinaison entre NDC, paiements locaux et orchestration multi-canaux ouvre un modèle plus direct, plus agile et mieux adapté aux usages du marché.",
    sections: [
      {
        _type: "object",
        title: "Réduire la dépendance aux intermédiaires",
        paragraphs: [
          "Les connexions NDC donnent aux acteurs la possibilité de diffuser les offres compagnies plus directement, avec davantage de contrôle sur le contenu, les tarifs et les services additionnels.",
          "Cette évolution réduit certains coûts de distribution et permet de mieux valoriser les offres personnalisées dans les différents canaux de vente.",
        ],
      },
      {
        _type: "object",
        title: "Le paiement local n'est plus optionnel",
        paragraphs: [
          "Pour une large part du marché, le mobile money est une attente de base. Sans moyens de paiement adaptés, une part significative de la demande se perd avant la finalisation.",
          "L'intégration native de ces solutions améliore la conversion et rend les plateformes plus pertinentes pour les voyageurs domestiques comme pour la diaspora.",
        ],
      },
      {
        _type: "object",
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

const services = [
  {
    _id: "service.billetterie",
    _type: "service",
    id: "billetterie",
    title: "Billetterie Aerienne SaaS",
    slug: { _type: "slug", current: "billetterie" },
    tag: "SaaS",
    color: "#00853F",
    icon: "TicketIcon",
    headline: "Plateforme de vente de billets d'avion en ligne",
    description:
      "Digitalisez votre agence de voyage ou compagnie en 7 jours. Vendez des billets d'avion, gerez vos inventaires de sieges et accedez a de nouveaux passagers sur le canal digital africain et international.",
    image: "https://images.unsplash.com/photo-1668557060370-d1876dfea768",
    imageAlt: "Passagere en aeroport consultant son billet sur mobile",
    orderRank: 1,
    features: [
      { _type: "object", icon: "BoltIcon", label: "Deploiement 7 jours", desc: "Mise en ligne rapide sans interruption d'activite." },
      { _type: "object", icon: "ClockIcon", label: "Moteur reservation temps reel", desc: "Disponibilite et tarifs actualises en temps reel." },
      { _type: "object", icon: "GlobeAltIcon", label: "Integration GDS / NDC", desc: "Acces aux inventaires mondiaux via Amadeus, Sabre, NDC." },
      { _type: "object", icon: "DevicePhoneMobileIcon", label: "Paiement mobile money & carte", desc: "Orange Money, Wave, Visa, Mastercard." },
      { _type: "object", icon: "DocumentTextIcon", label: "E-ticket & check-in mobile", desc: "Billet electronique et embarquement sans papier." },
      { _type: "object", icon: "ChartBarIcon", label: "Dashboard revenus live", desc: "Suivi des ventes et revenus en temps reel." },
    ],
    audience: ["Agences de voyage", "Compagnies aeriennes", "OTA africaines"],
    metric: { _type: "object", value: "7 jours", label: "pour etre operationnel" },
  },
  {
    _id: "service.ia",
    _type: "service",
    id: "ia",
    title: "Aeronautique & Intelligence Artificielle",
    slug: { _type: "slug", current: "ia" },
    tag: "IA",
    color: "#FDEF42",
    icon: "CpuChipIcon",
    headline: "Solutions technologiques avancees pour compagnies aeriennes et acteurs du transport",
    description:
      "Nous developpons des solutions technologiques avancees dediees aux compagnies aeriennes et aux acteurs du transport, integrant l'intelligence artificielle pour optimiser la performance commerciale et operationnelle.",
    image: "https://images.unsplash.com/photo-1663355176396-31843c79e396",
    imageAlt: "Avion de ligne et univers data pour l'analyse aeronautique",
    orderRank: 2,
    features: [
      { _type: "object", icon: "CurrencyDollarIcon", label: "Revenue Management & tarification intelligente", desc: "Veille tarifaire automatisee, suivi en temps reel des prix du marche et des concurrents, et RMS pour optimiser dynamiquement les tarifs et le remplissage." },
      { _type: "object", icon: "UsersIcon", label: "Gestion des groupes", desc: "Automatisation et optimisation des reservations groupes pour gagner en rapidite de traitement et en rentabilite." },
      { _type: "object", icon: "ArchiveBoxIcon", label: "Solution cargo intelligente", desc: "Optimisation du remplissage des capacites cargo, tarification dynamique basee sur la demande et digitalisation du suivi logistique." },
      { _type: "object", icon: "ChartPieIcon", label: "Prevision de la demande via l'IA", desc: "Modeles predictifs pour anticiper les volumes, ajuster les offres et mieux planifier les operations commerciales." },
      { _type: "object", icon: "CodeBracketIcon", label: "Solution SaaS - Distribution & NDC", desc: "Connexion directe aux compagnies via API NDC, reduction des couts lies aux GDS et orchestration multi-canaux agences, web, mobile et partenaires." },
      { _type: "object", icon: "SparklesIcon", label: "Offres enrichies et personnalisation IA", desc: "Gestion des contenus enrichis, bundles, ancillaries et personnalisation des offres grace a l'intelligence artificielle." },
    ],
    audience: ["Compagnies aeriennes", "Gestionnaires d'aeroports", "Operateurs de flotte"],
    metric: { _type: "object", value: "IA + NDC", label: "performance commerciale et operationnelle" },
  },
  {
    _id: "service.assuretech",
    _type: "service",
    id: "assuretech",
    title: "AssureTech Voyage SaaS",
    slug: { _type: "slug", current: "assuretech" },
    tag: "SaaS",
    color: "#E31B23",
    icon: "ShieldCheckIcon",
    headline: "Assurance voyage & passagers aeriens - digitalisee",
    description:
      "Plateforme SaaS dediee aux compagnies d'assurance et aux compagnies aeriennes pour proposer, gerer et indemniser les assurances voyage directement au point de vente du billet.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13ad8f7ad-1774096539133.png",
    imageAlt: "Voyageur et parcours digital d'assurance voyage",
    orderRank: 3,
    features: [
      { _type: "object", icon: "BoltIcon", label: "Souscription instantanee", desc: "Proposition d'assurance integree au tunnel de reservation." },
      { _type: "object", icon: "ComputerDesktopIcon", label: "Gestion sinistres en ligne", desc: "Declaration et suivi des sinistres 100% digital." },
      { _type: "object", icon: "XCircleIcon", label: "Couverture annulation vol", desc: "Remboursement automatise en cas d'annulation." },
      { _type: "object", icon: "UserCircleIcon", label: "Portail passager self-service", desc: "Espace client pour gerer contrats et sinistres." },
      { _type: "object", icon: "DocumentChartBarIcon", label: "Reporting actuariel live", desc: "Tableaux de bord actuariels en temps reel." },
    ],
    audience: ["Compagnies d'assurance", "Compagnies aeriennes", "Courtiers voyage"],
    metric: { _type: "object", value: "100%", label: "digital, zero papier" },
  },
];

const contactSettings = {
  _id: "contactSettings",
  _type: "contactSettings",
  address: "Dakar, Sénégal",
  email: "contact@fakitechgroup.com",
  phoneNumbers: ["+221 77 137 76 37", "+221 77 621 78 98"],
  openingHours: ["Lun-Ven : 08h00-18h00", "Samedi : 09h00-13h00"],
};

async function seedDocuments(documents) {
  for (const document of documents) {
    await client.createOrReplace(document);
    console.log(`Seeded ${document._id}`);
  }
}

await seedDocuments(actualites);
await seedDocuments(services);
await seedDocuments([contactSettings]);

console.log("Sanity seed completed.");
