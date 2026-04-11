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
  { label: "Articles", href: "/articles" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contactez-nous" },
] as const;

/* ============================================
   Plans
   ============================================ */
export interface PlanFeatureDetail {
  title: string;
  description: string;
}

export interface WhyChooseReason {
  title: string;
  description: string;
}

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
  featureDetails: PlanFeatureDetail[];
  whyChoose: WhyChooseReason[];
  planFaqs: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
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
    image: "/abonnement-iptv-3-mois.png",
    imageAlt: "Abonnement IPTV 3 Mois — Homme regardant une Smart TV 4K dans un salon moderne avec éclairage ambiant bleu et violet",
    featureDetails: [
      {
        title: "10 000+ Chaînes TV en Direct",
        description: "Accédez à plus de 10 000 chaînes du monde entier : sport, info, cinéma, jeunesse et bien plus, tous en temps réel.",
      },
      {
        title: "50 000+ Films & Séries",
        description: "Une bibliothèque VOD de plus de 50 000 titres mise à jour régulièrement pour satisfaire toutes vos envies.",
      },
      {
        title: "Qualité HD & Full HD",
        description: "Profitez de vos contenus en Haute Définition et Full HD pour une image nette et une expérience visuelle optimale.",
      },
      {
        title: "1 Appareil Connecté",
        description: "Utilisez votre abonnement sur l'appareil de votre choix : Smart TV, smartphone, tablette, PC ou Fire Stick.",
      },
      {
        title: "Technologie Anti-Freeze",
        description: "Notre infrastructure serveur haute performance élimine les coupures et la mise en mémoire tampon pour un streaming fluide.",
      },
      {
        title: "Support Client 24/7",
        description: "Notre équipe est disponible 24h/24, 7j/7 par chat, email ou WhatsApp pour répondre à toutes vos questions.",
      },
      {
        title: "Guide TV EPG",
        description: "Consultez le programme TV en temps réel directement dans votre lecteur IPTV pour ne jamais rater vos émissions préférées.",
      },
      {
        title: "Accès Bibliothèque VOD",
        description: "Accédez à notre catalogue de films et séries à la demande, disponible en streaming instantané à tout moment.",
      },
    ],
    whyChoose: [
      {
        title: "Idéal pour Découvrir",
        description: "Testez la qualité IPTV The King sans engagement long terme. Parfait pour explorer notre catalogue avant de vous décider pour une formule plus longue.",
      },
      {
        title: "Flexibilité Maximale",
        description: "Renouvelez, changez de formule ou stoppez à tout moment après votre période. Aucune contrainte, aucun frais caché.",
      },
      {
        title: "Activation Immédiate",
        description: "Recevez vos identifiants en quelques minutes après le paiement et profitez immédiatement de vos chaînes préférées.",
      },
    ],
    planFaqs: [
      {
        question: "L'abonnement 3 mois est-il sans engagement ?",
        answer: "Oui, totalement. Il n'y a aucun contrat, aucun renouvellement automatique et aucun frais caché. À l'issue des 3 mois, vous choisissez librement de renouveler ou non.",
      },
      {
        question: "Puis-je passer à un abonnement plus long après les 3 mois ?",
        answer: "Absolument. À l'expiration de votre abonnement 3 mois, vous pouvez facilement upgrader vers un abonnement 6, 12 ou 24 mois pour bénéficier d'un tarif mensuel plus avantageux.",
      },
      {
        question: "La qualité 4K est-elle disponible avec l'abonnement 3 mois ?",
        answer: "L'abonnement 3 mois inclut la qualité HD et Full HD. Pour accéder au streaming 4K Ultra HD, nous vous recommandons de passer à l'abonnement 6, 12 ou 24 mois.",
      },
      {
        question: "Quels appareils sont compatibles avec l'abonnement 3 mois ?",
        answer: "Votre abonnement 3 mois fonctionne sur tous les appareils : Smart TV (Samsung, LG, Sony), smartphones et tablettes iOS/Android, Amazon Fire Stick, PC, et tout appareil compatible IPTV.",
      },
      {
        question: "Comment activer mon abonnement 3 mois ?",
        answer: "Après confirmation de votre paiement, vous recevez vos identifiants de connexion par WhatsApp ou email en quelques minutes. Notre équipe vous guide pour l'installation sur votre appareil.",
      },
    ],
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
    image: "/abonnement-iptv-6-mois.png",
    imageAlt: "Abonnement IPTV 6 Mois — Homme regardant une Smart TV 4K dans un salon moderne avec éclairage ambiant bleu et violet",
    featureDetails: [
      {
        title: "10 000+ Chaînes TV en Direct",
        description: "Accédez à plus de 10 000 chaînes du monde entier : sport, info, cinéma, jeunesse et bien plus, tous en temps réel.",
      },
      {
        title: "50 000+ Films & Séries",
        description: "Une bibliothèque VOD de plus de 50 000 titres mise à jour régulièrement pour satisfaire toutes vos envies.",
      },
      {
        title: "Qualité HD, Full HD & 4K",
        description: "Du HD au 4K Ultra HD, adaptez la qualité à votre écran et à votre connexion pour une image toujours parfaite.",
      },
      {
        title: "1 Appareil Connecté",
        description: "Utilisez votre abonnement sur l'appareil de votre choix : Smart TV, smartphone, tablette, PC ou Fire Stick.",
      },
      {
        title: "Technologie Anti-Freeze",
        description: "Notre infrastructure serveur haute performance élimine les coupures et la mise en mémoire tampon pour un streaming fluide.",
      },
      {
        title: "Support Client 24/7",
        description: "Notre équipe est disponible 24h/24, 7j/7 par chat, email ou WhatsApp pour répondre à toutes vos questions.",
      },
      {
        title: "Guide TV EPG",
        description: "Consultez le programme TV en temps réel directement dans votre lecteur IPTV pour ne jamais rater vos émissions préférées.",
      },
      {
        title: "Accès Bibliothèque VOD",
        description: "Accédez à notre catalogue de films et séries à la demande, disponible en streaming instantané à tout moment.",
      },
      {
        title: "Catch-Up TV (7 Jours)",
        description: "Revivez vos émissions et matchs préférés jusqu'à 7 jours après leur diffusion. Plus besoin de programmer un enregistrement.",
      },
    ],
    whyChoose: [
      {
        title: "Couvrez Toute une Saison",
        description: "6 mois suffisent pour suivre entièrement une saison de football, de tennis ou de F1 sans interruption de service.",
      },
      {
        title: "Économies par Rapport au 3 Mois",
        description: "En choisissant 6 mois d'un coup, vous réduisez votre coût mensuel et évitez les renouvellements fréquents.",
      },
      {
        title: "Stabilité et Tranquillité",
        description: "Profitez d'un accès stable pendant 6 mois sans vous soucier du renouvellement. Un confort idéal pour toute la famille.",
      },
    ],
    planFaqs: [
      {
        question: "Quelle est la différence entre l'abonnement 6 mois et le 3 mois ?",
        answer: "L'abonnement 6 mois inclut la qualité 4K Ultra HD et le Catch-Up TV 7 jours, en plus d'un tarif mensuel réduit à 8,33€/mois contre 9,99€/mois pour le 3 mois. C'est plus de fonctionnalités pour un prix moindre.",
      },
      {
        question: "Le Catch-Up TV est-il inclus dans l'abonnement 6 mois ?",
        answer: "Oui, l'abonnement 6 mois inclut le Catch-Up TV sur 7 jours. Vous pouvez revisionner n'importe quelle émission, match ou série diffusé au cours des 7 derniers jours.",
      },
      {
        question: "Puis-je regarder en 4K avec l'abonnement 6 mois ?",
        answer: "Oui, la qualité 4K Ultra HD est incluse à partir de l'abonnement 6 mois. Assurez-vous d'avoir une connexion d'au moins 25 Mbps et un écran compatible pour en profiter pleinement.",
      },
      {
        question: "L'abonnement 6 mois se renouvelle-t-il automatiquement ?",
        answer: "Non. Tous nos abonnements sont prépayés et ne se renouvellent pas automatiquement. Vous recevrez un rappel avant l'expiration pour vous permettre de choisir sereinement votre prochaine formule.",
      },
      {
        question: "Combien d'appareils puis-je connecter simultanément ?",
        answer: "L'abonnement 6 mois permet de connecter 1 appareil à la fois. Si vous souhaitez utiliser le service sur plusieurs écrans en même temps, contactez notre support pour connaître les options disponibles.",
      },
    ],
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
    image: "/abonnement-iptv-12-mois.png",
    imageAlt: "Abonnement IPTV 12 Mois — Homme regardant une Smart TV 4K dans un salon premium avec éclairage ambiant bleu et violet, streaming haute qualité toute l'année",
    featureDetails: [
      {
        title: "10 000+ Chaînes TV en Direct",
        description: "Accédez à plus de 10 000 chaînes du monde entier : sport, info, cinéma, jeunesse et bien plus, tous en temps réel.",
      },
      {
        title: "50 000+ Films & Séries",
        description: "Une bibliothèque VOD de plus de 50 000 titres mise à jour régulièrement pour satisfaire toutes vos envies.",
      },
      {
        title: "Qualité HD, Full HD & 4K",
        description: "Du HD au 4K Ultra HD, adaptez la qualité à votre écran et à votre connexion pour une image toujours parfaite.",
      },
      {
        title: "1 Appareil Connecté",
        description: "Utilisez votre abonnement sur l'appareil de votre choix : Smart TV, smartphone, tablette, PC ou Fire Stick.",
      },
      {
        title: "Technologie Anti-Freeze",
        description: "Notre infrastructure serveur haute performance élimine les coupures et la mise en mémoire tampon pour un streaming fluide.",
      },
      {
        title: "Support Prioritaire 24/7",
        description: "Bénéficiez d'un accès prioritaire à notre équipe de support disponible 24h/24, 7j/7 pour une résolution rapide de vos demandes.",
      },
      {
        title: "Guide TV EPG",
        description: "Consultez le programme TV en temps réel directement dans votre lecteur IPTV pour ne jamais rater vos émissions préférées.",
      },
      {
        title: "Accès Bibliothèque VOD",
        description: "Accédez à notre catalogue de films et séries à la demande, disponible en streaming instantané à tout moment.",
      },
      {
        title: "Catch-Up TV (14 Jours)",
        description: "Accédez à 14 jours de contenu en replay. Rattrapez facilement vos séries, documentaires et événements sportifs manqués.",
      },
      {
        title: "Événements PPV Inclus",
        description: "Les grands événements pay-per-view (combats de boxe, MMA, matchs exclusifs) sont inclus sans surcoût dans votre abonnement.",
      },
    ],
    whyChoose: [
      {
        title: "Meilleur Rapport Qualité-Prix",
        description: "À seulement 5,83€/mois, c'est notre formule la plus populaire. Économisez un maximum tout en profitant d'un service premium toute l'année.",
      },
      {
        title: "Événements PPV Sans Supplément",
        description: "Combats de boxe, MMA, matchs exclusifs... Tous les grands événements pay-per-view sont inclus dans votre abonnement 12 mois.",
      },
      {
        title: "Toute l'Année Sans Interruption",
        description: "Un an d'accès ininterrompu à 10 000+ chaînes et 50 000+ films. Vous ne pensez plus à rien, on s'occupe de tout.",
      },
    ],
    planFaqs: [
      {
        question: "Pourquoi l'abonnement 12 mois est-il le plus populaire ?",
        answer: "L'abonnement 12 mois offre le meilleur équilibre entre prix et fonctionnalités : à 5,83€/mois, il inclut la 4K, le Catch-Up TV 14 jours, les événements PPV et un support prioritaire. C'est la formule préférée de nos clients pour une année entière sans se soucier du renouvellement.",
      },
      {
        question: "Les événements PPV sont-ils vraiment inclus sans supplément ?",
        answer: "Oui, absolument. Avec l'abonnement 12 mois, tous les grands événements pay-per-view — combats de boxe, MMA, matchs exclusifs — sont diffusés sans frais additionnels. Aucune mauvaise surprise sur votre facture.",
      },
      {
        question: "Qu'est-ce que le Catch-Up TV 14 jours inclus dans ce plan ?",
        answer: "Le Catch-Up TV vous permet de revisionner n'importe quel programme diffusé au cours des 14 derniers jours. Un match raté, une série manquée ? Retrouvez-le facilement depuis votre lecteur IPTV, sans enregistrement préalable.",
      },
      {
        question: "En quoi consiste le support prioritaire 24/7 ?",
        answer: "Contrairement au support standard, le support prioritaire vous place en tête de file pour un traitement accéléré de vos demandes. Notre équipe est disponible 24h/24, 7j/7 par chat, email et WhatsApp pour vous répondre en priorité.",
      },
      {
        question: "Puis-je upgrader vers le 24 mois en cours d'abonnement ?",
        answer: "Oui, vous pouvez contacter notre support à tout moment pour passer à l'abonnement 24 mois. Nous nous chargeons de la transition et ajustons la durée restante pour que vous ne perdiez aucun jour.",
      },
    ],
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
    image: "/abonnement-iptv-24-mois.png",
    imageAlt: "Abonnement IPTV 24 Mois — Homme profitant d'un salon home cinema avec Smart TV 4K, éclairage LED ambiant, expérience streaming VIP premium",
    featureDetails: [
      {
        title: "10 000+ Chaînes TV en Direct",
        description: "Accédez à plus de 10 000 chaînes du monde entier : sport, info, cinéma, jeunesse et bien plus, tous en temps réel.",
      },
      {
        title: "50 000+ Films & Séries",
        description: "Une bibliothèque VOD de plus de 50 000 titres mise à jour régulièrement pour satisfaire toutes vos envies.",
      },
      {
        title: "Qualité HD, Full HD & 4K",
        description: "Du HD au 4K Ultra HD, adaptez la qualité à votre écran et à votre connexion pour une image toujours parfaite.",
      },
      {
        title: "1 Appareil Connecté",
        description: "Utilisez votre abonnement sur l'appareil de votre choix : Smart TV, smartphone, tablette, PC ou Fire Stick.",
      },
      {
        title: "Technologie Anti-Freeze",
        description: "Notre infrastructure serveur haute performance élimine les coupures et la mise en mémoire tampon pour un streaming fluide.",
      },
      {
        title: "Support VIP 24/7",
        description: "Accès VIP à notre équipe d'experts disponible à toute heure pour un accompagnement personnalisé et une réactivité maximale.",
      },
      {
        title: "Guide TV EPG",
        description: "Consultez le programme TV en temps réel directement dans votre lecteur IPTV pour ne jamais rater vos émissions préférées.",
      },
      {
        title: "Accès Complet Bibliothèque VOD",
        description: "Profitez de l'intégralité de notre bibliothèque VOD sans restriction, avec des milliers de titres en qualité HD et 4K.",
      },
      {
        title: "Catch-Up TV (30 Jours)",
        description: "Le replay le plus généreux du marché : 30 jours d'archives pour ne jamais rien manquer, même après un mois d'absence.",
      },
      {
        title: "Événements PPV Inclus",
        description: "Les grands événements pay-per-view (combats de boxe, MMA, matchs exclusifs) sont inclus sans surcoût dans votre abonnement.",
      },
      {
        title: "Assistance Installation Gratuite",
        description: "Un technicien dédié vous guide pas à pas pour installer et configurer votre service IPTV sur tous vos appareils.",
      },
    ],
    whyChoose: [
      {
        title: "Prix le Plus Bas du Catalogue",
        description: "À seulement 4,58€/mois, c'est le tarif le plus avantageux que nous proposons. Deux ans d'accès pour le coût d'un café par mois.",
      },
      {
        title: "Support VIP & Installation Offerte",
        description: "Bénéficiez d'un support VIP 24/7 et d'une assistance à l'installation gratuite. Un service premium de bout en bout, sans compromis.",
      },
      {
        title: "Catch-Up TV 30 Jours",
        description: "Revivez vos programmes préférés jusqu'à 30 jours en arrière. Le délai de replay le plus généreux de toute notre gamme.",
      },
    ],
    planFaqs: [
      {
        question: "Pourquoi choisir 24 mois plutôt qu'un abonnement plus court ?",
        answer: "L'abonnement 24 mois est notre offre la plus économique à 4,58€/mois, soit une économie significative par rapport aux autres formules. Il inclut également des avantages exclusifs : support VIP, assistance installation gratuite et Catch-Up TV 30 jours que vous ne trouverez dans aucun autre plan.",
      },
      {
        question: "En quoi consiste l'assistance installation gratuite ?",
        answer: "Un technicien de notre équipe vous accompagne personnellement pour installer et configurer votre service IPTV sur tous vos appareils : Smart TV, Fire Stick, smartphone, décodeur MAG, etc. Cette assistance est offerte sans frais supplémentaires avec l'abonnement 24 mois.",
      },
      {
        question: "Qu'est-ce que le Catch-Up TV 30 jours ?",
        answer: "Le Catch-Up TV 30 jours vous permet d'accéder à un mois complet d'archives télévisées. Revivez n'importe quel programme diffusé au cours des 30 derniers jours, directement depuis votre lecteur IPTV, sans enregistrement préalable.",
      },
      {
        question: "Le support VIP est-il vraiment différent du support standard ?",
        answer: "Oui. Le support VIP vous donne accès à une ligne dédiée avec des temps de réponse réduits et un accompagnement personnalisé. Vous bénéficiez d'un interlocuteur prioritaire disponible 24h/24, 7j/7, que ce soit pour une question technique ou une demande de configuration.",
      },
      {
        question: "Que se passe-t-il à l'expiration de mon abonnement 24 mois ?",
        answer: "Votre abonnement expire simplement sans renouvellement automatique. Vous recevrez un rappel avant la date d'expiration pour vous permettre de renouveler ou de choisir une autre formule. Votre historique et vos préférences sont conservés.",
      },
    ],
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
  fullSlug: string[]; // e.g. ['parent-slug', 'child-slug'] or ['slug']
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
    fullSlug: ["comment-installer-iptv-sur-firestick"],
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
    fullSlug: ["meilleurs-lecteurs-iptv-2026"],
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
    fullSlug: ["iptv-vs-cable-comparaison"],
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
    fullSlug: ["optimiser-qualite-streaming"],
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
    fullSlug: ["tendances-iptv-2026"],
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
    fullSlug: ["vpn-avec-iptv-guide"],
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
    { label: "Articles", href: "/articles" },
    { label: "Contact", href: "/contactez-nous" },
  ],
  support: [
    { label: "FAQ", href: "/#faq" },
    { label: "Guide d'Installation", href: "/articles" },
    { label: "Contacter le Support", href: "/contactez-nous" },
  ],
} as const;
