export type ServiceFeature = {
  icon: string;
  label: string;
  desc: string;
};

export type ServiceMetric = {
  value: string;
  label: string;
};

export type ServiceOffer = {
  id: string;
  slug: string;
  tag: string;
  color: string;
  icon: string;
  title: string;
  headline: string;
  description: string;
  image: string | null;
  imageAlt?: string;
  features: ServiceFeature[];
  audience: string[];
  metric: ServiceMetric;
};

export const serviceOffers: ServiceOffer[] = [
  {
    id: "billetterie",
    slug: "billetterie",
    tag: "SaaS",
    color: "#00853F",
    icon: "TicketIcon",
    title: "Billetterie Aerienne SaaS",
    headline: "Plateforme de vente de billets d'avion en ligne",
    description:
      "Digitalisez votre agence de voyage ou compagnie en 7 jours. Vendez des billets d'avion, gerez vos inventaires de sieges et accedez a de nouveaux passagers sur le canal digital africain et international.",
    image: "https://images.unsplash.com/photo-1668557060370-d1876dfea768",
    imageAlt: "Passagere en aeroport consultant son billet sur mobile",
    features: [
      { icon: "BoltIcon", label: "Deploiement 7 jours", desc: "Mise en ligne rapide sans interruption d'activite." },
      { icon: "ClockIcon", label: "Moteur reservation temps reel", desc: "Disponibilite et tarifs actualises en temps reel." },
      { icon: "GlobeAltIcon", label: "Integration GDS / NDC", desc: "Acces aux inventaires mondiaux via Amadeus, Sabre, NDC." },
      { icon: "DevicePhoneMobileIcon", label: "Paiement mobile money & carte", desc: "Orange Money, Wave, Visa, Mastercard." },
      { icon: "DocumentTextIcon", label: "E-ticket & check-in mobile", desc: "Billet electronique et embarquement sans papier." },
      { icon: "ChartBarIcon", label: "Dashboard revenus live", desc: "Suivi des ventes et revenus en temps reel." },
    ],
    audience: ["Agences de voyage", "Compagnies aeriennes", "OTA africaines"],
    metric: { value: "7 jours", label: "pour etre operationnel" },
  },
  {
    id: "ia",
    slug: "ia",
    tag: "IA",
    color: "#FDEF42",
    icon: "CpuChipIcon",
    title: "Aeronautique & Intelligence Artificielle",
    headline: "Solutions technologiques avancees pour compagnies aeriennes et acteurs du transport",
    description:
      "Nous developpons des solutions technologiques avancees dediees aux compagnies aeriennes et aux acteurs du transport, integrant l'intelligence artificielle pour optimiser la performance commerciale et operationnelle.",
    image: "https://images.unsplash.com/photo-1663355176396-31843c79e396",
    imageAlt: "Avion de ligne et univers data pour l'analyse aeronautique",
    features: [
      { icon: "CurrencyDollarIcon", label: "Revenue Management & tarification intelligente", desc: "Veille tarifaire automatisee, suivi en temps reel des prix du marche et des concurrents, et RMS pour optimiser dynamiquement les tarifs et le remplissage." },
      { icon: "UsersIcon", label: "Gestion des groupes", desc: "Automatisation et optimisation des reservations groupes pour gagner en rapidite de traitement et en rentabilite." },
      { icon: "ArchiveBoxIcon", label: "Solution cargo intelligente", desc: "Optimisation du remplissage des capacites cargo, tarification dynamique basee sur la demande et digitalisation du suivi logistique." },
      { icon: "ChartPieIcon", label: "Prevision de la demande via l'IA", desc: "Modeles predictifs pour anticiper les volumes, ajuster les offres et mieux planifier les operations commerciales." },
      { icon: "CodeBracketIcon", label: "Solution SaaS - Distribution & NDC", desc: "Connexion directe aux compagnies via API NDC, reduction des couts lies aux GDS et orchestration multi-canaux agences, web, mobile et partenaires." },
      { icon: "SparklesIcon", label: "Offres enrichies et personnalisation IA", desc: "Gestion des contenus enrichis, bundles, ancillaries et personnalisation des offres grace a l'intelligence artificielle." },
    ],
    audience: ["Compagnies aeriennes", "Gestionnaires d'aeroports", "Operateurs de flotte"],
    metric: { value: "IA + NDC", label: "performance commerciale et operationnelle" },
  },
  {
    id: "assuretech",
    slug: "assuretech",
    tag: "SaaS",
    color: "#E31B23",
    icon: "ShieldCheckIcon",
    title: "AssureTech Voyage SaaS",
    headline: "Assurance voyage & passagers aeriens - digitalisee",
    description:
      "Plateforme SaaS dediee aux compagnies d'assurance et aux compagnies aeriennes pour proposer, gerer et indemniser les assurances voyage directement au point de vente du billet.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13ad8f7ad-1774096539133.png",
    imageAlt: "Voyageur et parcours digital d'assurance voyage",
    features: [
      { icon: "BoltIcon", label: "Souscription instantanee", desc: "Proposition d'assurance integree au tunnel de reservation." },
      { icon: "ComputerDesktopIcon", label: "Gestion sinistres en ligne", desc: "Declaration et suivi des sinistres 100% digital." },
      { icon: "XCircleIcon", label: "Couverture annulation vol", desc: "Remboursement automatise en cas d'annulation." },
      { icon: "UserCircleIcon", label: "Portail passager self-service", desc: "Espace client pour gerer contrats et sinistres." },
      { icon: "DocumentChartBarIcon", label: "Reporting actuariel live", desc: "Tableaux de bord actuariels en temps reel." },
    ],
    audience: ["Compagnies d'assurance", "Compagnies aeriennes", "Courtiers voyage"],
    metric: { value: "100%", label: "digital, zero papier" },
  },
];

export function getServiceOfferBySlug(slug: string) {
  return serviceOffers.find((item) => item.slug === slug);
}
