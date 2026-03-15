import {
  Tv,
  MonitorPlay,
  Smartphone,
  ShieldCheck,
  Headphones,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ============================================
   Navigation
   ============================================ */
export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Abonnements", href: "/#plans" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contactez-nous" },
] as const;

/* ============================================
   Plans
   ============================================ */
export interface Plan {
  id: string;
  slug: string;
  duration: string;
  months: number;
  price: number;
  pricePerMonth: number;
  features: string[];
  popular: boolean;
  badge?: string;
}

export const PLANS: Plan[] = [
  {
    id: "3mo",
    slug: "abonnement-iptv-3-mois",
    duration: "3 Mois",
    months: 3,
    price: 29.99,
    pricePerMonth: 9.99,
    features: [
      "10 000+ Chaînes TV en Direct",
      "50 000+ Films & Séries",
      "Qualité HD & Full HD",
      "1 Appareil Connecté",
      "Technologie Anti-Freeze",
      "Support Client 24/7",
      "Guide TV EPG",
      "Accès Bibliothèque VOD",
    ],
    popular: false,
  },
  {
    id: "6mo",
    slug: "abonnement-iptv-6-mois",
    duration: "6 Mois",
    months: 6,
    price: 49.99,
    pricePerMonth: 8.33,
    features: [
      "10 000+ Chaînes TV en Direct",
      "50 000+ Films & Séries",
      "Qualité HD, Full HD & 4K",
      "1 Appareil Connecté",
      "Technologie Anti-Freeze",
      "Support Client 24/7",
      "Guide TV EPG",
      "Accès Bibliothèque VOD",
      "Catch-Up TV (7 Jours)",
    ],
    popular: false,
  },
  {
    id: "12mo",
    slug: "abonnement-iptv-12-mois",
    duration: "12 Mois",
    months: 12,
    price: 69.99,
    pricePerMonth: 5.83,
    features: [
      "10 000+ Chaînes TV en Direct",
      "50 000+ Films & Séries",
      "Qualité HD, Full HD & 4K",
      "1 Appareil Connecté",
      "Technologie Anti-Freeze",
      "Support Prioritaire 24/7",
      "Guide TV EPG",
      "Accès Bibliothèque VOD",
      "Catch-Up TV (14 Jours)",
      "Événements PPV Inclus",
    ],
    popular: true,
    badge: "Le Plus Populaire",
  },
  {
    id: "24mo",
    slug: "abonnement-iptv-24-mois",
    duration: "24 Mois",
    months: 24,
    price: 109.99,
    pricePerMonth: 4.58,
    features: [
      "10 000+ Chaînes TV en Direct",
      "50 000+ Films & Séries",
      "Qualité HD, Full HD & 4K",
      "1 Appareil Connecté",
      "Technologie Anti-Freeze",
      "Support VIP 24/7",
      "Guide TV EPG",
      "Accès Complet Bibliothèque VOD",
      "Catch-Up TV (30 Jours)",
      "Événements PPV Inclus",
      "Assistance Installation Gratuite",
    ],
    popular: false,
    badge: "Meilleur Rapport Qualité-Prix",
  },
];

/* ============================================
   Features (Homepage grid)
   ============================================ */
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Tv,
    title: "10 000+ Chaînes en Direct",
    description:
      "Accédez aux chaînes premium du monde entier : sport, actualités, divertissement et bien plus encore.",
  },
  {
    icon: MonitorPlay,
    title: "Qualité 4K Ultra HD",
    description:
      "Streaming cristallin en HD, Full HD et 4K sans aucune interruption ni mise en mémoire tampon.",
  },
  {
    icon: Smartphone,
    title: "Multi-Appareils",
    description:
      "Regardez sur Smart TV, téléphone, tablette, PC ou tout appareil compatible avec nos applications.",
  },
  {
    icon: ShieldCheck,
    title: "Sans Engagement",
    description:
      "Des abonnements flexibles sans frais cachés, sans contrat à long terme. Résiliez quand vous voulez.",
  },
  {
    icon: Headphones,
    title: "Support Expert 24/7",
    description:
      "Notre équipe de support dédiée est disponible 24h/24 et 7j/7 pour vous assister.",
  },
  {
    icon: Zap,
    title: "99,9% de Disponibilité",
    description:
      "Des serveurs haute performance garantissent une expérience de streaming fluide et sans interruption.",
  },
];

/* ============================================
   Stats (Social proof bar)
   ============================================ */
export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "10 000+", label: "Chaînes en Direct" },
  { value: "50 000+", label: "Films & Séries" },
  { value: "99,9%", label: "Disponibilité" },
  { value: "150+", label: "Pays Couverts" },
];

/* ============================================
   Testimonials
   ============================================ */
export interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michel R.",
    avatar: "M",
    quote:
      "J'ai quitté le câble pour IPTV The King et j'économise plus de 100€/mois. La qualité est incroyable et le choix de chaînes est incomparable !",
    rating: 5,
  },
  {
    name: "Sophie L.",
    avatar: "S",
    quote:
      "Le meilleur service IPTV que j'ai essayé. La qualité 4K est époustouflante et j'adore pouvoir regarder sur tous mes appareils. Le support client est au top.",
    rating: 5,
  },
  {
    name: "David K.",
    avatar: "D",
    quote:
      "Abonné depuis plus d'un an maintenant. Zéro mise en mémoire tampon, une bibliothèque VOD incroyable, et le prix défie toute concurrence. Je recommande vivement !",
    rating: 5,
  },
];

/* ============================================
   FAQs
   ============================================ */
export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "Qu'est-ce que l'IPTV ?",
    answer:
      "L'IPTV (Internet Protocol Television) diffuse du contenu télévisé via Internet plutôt que par câble ou satellite traditionnel. Cela vous permet de regarder vos chaînes favorites et du contenu à la demande sur n'importe quel appareil connecté à Internet.",
  },
  {
    question: "Quels appareils sont compatibles ?",
    answer:
      "Vous pouvez utiliser IPTV The King sur pratiquement tous les appareils — Smart TV (Samsung, LG, Sony), smartphones et tablettes Android/iOS, Amazon Fire Stick, NVIDIA Shield, boîtiers MAG, ordinateurs, et bien plus.",
  },
  {
    question: "Quelle vitesse Internet est nécessaire ?",
    answer:
      "Nous recommandons un minimum de 10 Mbps pour le streaming HD et 25 Mbps pour le contenu 4K. Une connexion Internet stable garantit la meilleure expérience de visionnage.",
  },
  {
    question: "Puis-je essayer avant d'acheter ?",
    answer:
      "Oui ! Nous offrons un essai gratuit de 24 heures pour que vous puissiez tester notre service et constater la qualité par vous-même avant de vous engager.",
  },
  {
    question: "En combien de temps puis-je commencer à regarder ?",
    answer:
      "Instantanément ! Dès que votre paiement est confirmé, vous recevrez vos identifiants de connexion en quelques minutes. Notre guide d'installation facilite la mise en route sur tout appareil.",
  },
  {
    question: "Y a-t-il un contrat ou un engagement ?",
    answer:
      "Aucun contrat, aucun frais caché. Tous nos abonnements sont prépayés pour la durée sélectionnée. Vous pouvez renouveler ou changer de formule à tout moment.",
  },
  {
    question: "Proposez-vous un support client ?",
    answer:
      "Absolument ! Nous offrons un support client 24/7 par chat en direct, email et WhatsApp. Notre équipe est toujours prête à vous aider pour l'installation, le dépannage ou toute question.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les principales cartes de crédit/débit, PayPal, les cryptomonnaies et divers autres moyens de paiement pour votre commodité.",
  },
];

/* ============================================
   Blog (static placeholder data)
   ============================================ */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const BLOG_CATEGORIES = [
  "Tous",
  "Guides",
  "Actualités",
  "Astuces",
  "Avis",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "comment-installer-iptv-sur-firestick",
    title: "Comment Installer l'IPTV sur Amazon Fire Stick",
    excerpt:
      "Un guide complet étape par étape pour installer et configurer l'IPTV sur votre Amazon Fire Stick pour la meilleure expérience de streaming.",
    category: "Guides",
    date: "2026-02-28",
    readTime: "5 min de lecture",
    image: "/logo.png",
  },
  {
    id: "2",
    slug: "meilleurs-lecteurs-iptv-2026",
    title: "Top 5 des Lecteurs IPTV pour 2026",
    excerpt:
      "Découvrez les meilleures applications de lecteur IPTV disponibles aujourd'hui. Nous comparons les fonctionnalités, performances et compatibilité.",
    category: "Avis",
    date: "2026-02-20",
    readTime: "7 min de lecture",
    image: "/logo.png",
  },
  {
    id: "3",
    slug: "iptv-vs-cable-comparaison",
    title: "IPTV vs Câble TV : Lequel Choisir ?",
    excerpt:
      "Une comparaison détaillée entre l'IPTV et la télévision par câble traditionnelle — coût, qualité, flexibilité et choix de chaînes.",
    category: "Guides",
    date: "2026-02-15",
    readTime: "6 min de lecture",
    image: "/logo.png",
  },
  {
    id: "4",
    slug: "optimiser-qualite-streaming",
    title: "5 Astuces pour Optimiser la Qualité de Votre IPTV",
    excerpt:
      "Vous avez des problèmes de mise en mémoire tampon ? Ces astuces éprouvées vous aideront à obtenir un streaming IPTV fluide et de haute qualité.",
    category: "Astuces",
    date: "2026-02-10",
    readTime: "4 min de lecture",
    image: "/logo.png",
  },
  {
    id: "5",
    slug: "tendances-iptv-2026",
    title: "Les Tendances IPTV à Suivre en 2026",
    excerpt:
      "Des recommandations IA au streaming 8K, voici les grandes tendances qui façonnent l'avenir de l'IPTV.",
    category: "Actualités",
    date: "2026-02-05",
    readTime: "8 min de lecture",
    image: "/logo.png",
  },
  {
    id: "6",
    slug: "vpn-avec-iptv-guide",
    title: "Faut-il Utiliser un VPN avec l'IPTV ? Guide Complet",
    excerpt:
      "Découvrez pourquoi utiliser un VPN peut améliorer votre expérience IPTV et comment le configurer correctement.",
    category: "Guides",
    date: "2026-01-28",
    readTime: "5 min de lecture",
    image: "/logo.png",
  },
];

/* ============================================
   Company Values (About page)
   ============================================ */
export const COMPANY_VALUES = [
  {
    title: "La Qualité Avant Tout",
    description:
      "Nous investissons dans une infrastructure serveur premium pour offrir des flux de la plus haute qualité sans compromis.",
  },
  {
    title: "Obsession Client",
    description:
      "Chaque décision que nous prenons commence par nos clients. Votre satisfaction est notre priorité absolue.",
  },
  {
    title: "Innovation",
    description:
      "Nous améliorons continuellement notre technologie pour rester à la pointe et offrir des fonctionnalités de dernière génération.",
  },
  {
    title: "Transparence",
    description:
      "Aucun frais caché, aucun contrat, aucune surprise. Ce que vous voyez est exactement ce que vous obtenez.",
  },
];

/* ============================================
   Footer Links
   ============================================ */
export const FOOTER_LINKS = {
  plans: [
    { label: "Abonnement 3 Mois", href: "/abonnement-iptv-3-mois" },
    { label: "Abonnement 6 Mois", href: "/abonnement-iptv-6-mois" },
    { label: "Abonnement 12 Mois", href: "/abonnement-iptv-12-mois" },
    { label: "Abonnement 24 Mois", href: "/abonnement-iptv-24-mois" },
  ],
  company: [
    { label: "À propos", href: "/a-propos" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contactez-nous" },
  ],
  support: [
    { label: "FAQ", href: "/#faq" },
    { label: "Guide d'Installation", href: "/blog" },
    { label: "Contacter le Support", href: "/contactez-nous" },
  ],
} as const;
