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
  { label: "Home", href: "/" },
  { label: "Subscriptions", href: "/#plans" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
    slug: "iptv-subscription-3-months",
    duration: "3 Months",
    months: 3,
    price: 15,
    pricePerMonth: 5.00,
    features: [
      "10,000+ Live TV Channels",
      "50,000+ Films & Series",
      "HD & Full HD Quality",
      "1 Connected Device",
      "Anti-Freeze Technology",
      "24/7 Customer Support",
      "TV Guide EPG",
      "VOD Library Access",
    ],
    popular: false,
    image: "/abonnement-iptv-3-mois.png",
    imageAlt: "3-Month IPTV Subscription — Man watching a 4K Smart TV in a modern living room with blue and purple ambient lighting",
    featureDetails: [
      {
        title: "10,000+ Live TV Channels",
        description: "Access over 10,000 channels from around the world: sport, news, films, kids' TV and much more, all in real time.",
      },
      {
        title: "50,000+ Films & Series",
        description: "A VOD library of over 50,000 titles, updated regularly to keep up with everything you want to watch.",
      },
      {
        title: "HD & Full HD Quality",
        description: "Enjoy your content in High Definition and Full HD for a sharp picture and the best viewing experience.",
      },
      {
        title: "1 Connected Device",
        description: "Use your subscription on the device of your choice: Smart TV, smartphone, tablet, PC or Fire Stick.",
      },
      {
        title: "Anti-Freeze Technology",
        description: "Our high-performance server infrastructure eliminates buffering and freezing for smooth, uninterrupted streaming.",
      },
      {
        title: "24/7 Customer Support",
        description: "Our team is available 24 hours a day, 7 days a week via chat, email or WhatsApp to answer all your questions.",
      },
      {
        title: "TV Guide EPG",
        description: "View the live TV schedule directly in your IPTV player so you never miss your favourite programmes.",
      },
      {
        title: "VOD Library Access",
        description: "Access our on-demand catalogue of films and series, available for instant streaming at any time.",
      },
    ],
    whyChoose: [
      {
        title: "Ideal for Getting Started",
        description: "Try IPTV The King quality without a long-term commitment. Perfect for exploring our catalogue before choosing a longer plan.",
      },
      {
        title: "Maximum Flexibility",
        description: "Renew, switch plan or cancel at any time after your period ends. No ties, no hidden fees.",
      },
      {
        title: "Instant Activation",
        description: "Receive your login details within minutes of payment and start watching your favourite channels straight away.",
      },
    ],
    planFaqs: [
      {
        question: "Is the 3-month subscription contract-free?",
        answer: "Yes, absolutely. There is no contract, no automatic renewal and no hidden fees. At the end of the 3 months, you are free to renew or not.",
      },
      {
        question: "Can I upgrade to a longer subscription after 3 months?",
        answer: "Absolutely. When your 3-month subscription expires, you can easily upgrade to a 6 or 12-month subscription to benefit from a lower monthly rate.",
      },
      {
        question: "Is 4K quality available with the 3-month subscription?",
        answer: "The 3-month subscription includes HD and Full HD quality. To access 4K Ultra HD streaming, we recommend upgrading to the 6 or 12-month subscription.",
      },
      {
        question: "Which devices are compatible with the 3-month subscription?",
        answer: "Your 3-month subscription works on all devices: Smart TV (Samsung, LG, Sony), iOS/Android smartphones and tablets, Amazon Fire Stick, PC, and any IPTV-compatible device.",
      },
      {
        question: "How do I activate my 3-month subscription?",
        answer: "After your payment is confirmed, you will receive your login details via WhatsApp or email within minutes. Our team will guide you through installation on your device.",
      },
    ],
  },
  {
    id: "6mo",
    slug: "iptv-subscription-6-months",
    duration: "6 Months",
    months: 6,
    price: 24,
    pricePerMonth: 4.00,
    features: [
      "10,000+ Live TV Channels",
      "50,000+ Films & Series",
      "HD, Full HD & 4K Quality",
      "1 Connected Device",
      "Anti-Freeze Technology",
      "24/7 Customer Support",
      "TV Guide EPG",
      "VOD Library Access",
      "Catch-Up TV (7 Days)",
    ],
    popular: false,
    image: "/abonnement-iptv-6-mois.png",
    imageAlt: "6-Month IPTV Subscription — Man watching a 4K Smart TV in a modern living room with blue and purple ambient lighting",
    featureDetails: [
      {
        title: "10,000+ Live TV Channels",
        description: "Access over 10,000 channels from around the world: sport, news, films, kids' TV and much more, all in real time.",
      },
      {
        title: "50,000+ Films & Series",
        description: "A VOD library of over 50,000 titles, updated regularly to keep up with everything you want to watch.",
      },
      {
        title: "HD, Full HD & 4K Quality",
        description: "From HD to 4K Ultra HD, adapt quality to your screen and connection for a perfect picture every time.",
      },
      {
        title: "1 Connected Device",
        description: "Use your subscription on the device of your choice: Smart TV, smartphone, tablet, PC or Fire Stick.",
      },
      {
        title: "Anti-Freeze Technology",
        description: "Our high-performance server infrastructure eliminates buffering and freezing for smooth, uninterrupted streaming.",
      },
      {
        title: "24/7 Customer Support",
        description: "Our team is available 24 hours a day, 7 days a week via chat, email or WhatsApp to answer all your questions.",
      },
      {
        title: "TV Guide EPG",
        description: "View the live TV schedule directly in your IPTV player so you never miss your favourite programmes.",
      },
      {
        title: "VOD Library Access",
        description: "Access our on-demand catalogue of films and series, available for instant streaming at any time.",
      },
      {
        title: "Catch-Up TV (7 Days)",
        description: "Rewatch your favourite programmes and matches up to 7 days after broadcast. No need to schedule a recording.",
      },
    ],
    whyChoose: [
      {
        title: "Cover a Full Season",
        description: "6 months is plenty of time to follow an entire football, tennis or F1 season without any interruption to service.",
      },
      {
        title: "Savings vs the 3-Month Plan",
        description: "By choosing 6 months upfront, you reduce your monthly cost and avoid frequent renewals.",
      },
      {
        title: "Stability and Peace of Mind",
        description: "Enjoy stable access for 6 months without worrying about renewal. Ideal comfort for the whole family.",
      },
    ],
    planFaqs: [
      {
        question: "What is the difference between the 6-month and 3-month subscription?",
        answer: "The 6-month subscription includes 4K Ultra HD quality and 7-day Catch-Up TV, plus a reduced monthly rate of £4.00/month versus £5.00/month for the 3-month plan. More features for less.",
      },
      {
        question: "Is Catch-Up TV included in the 6-month subscription?",
        answer: "Yes, the 6-month subscription includes 7-day Catch-Up TV. You can rewatch any programme, match or series broadcast in the last 7 days.",
      },
      {
        question: "Can I watch in 4K with the 6-month subscription?",
        answer: "Yes, 4K Ultra HD quality is included from the 6-month subscription onwards. Make sure you have a connection of at least 25 Mbps and a compatible screen to fully enjoy it.",
      },
      {
        question: "Does the 6-month subscription auto-renew?",
        answer: "No. All our subscriptions are prepaid and do not auto-renew. You will receive a reminder before expiry so you can calmly choose your next plan.",
      },
      {
        question: "How many devices can I connect at the same time?",
        answer: "The 6-month subscription allows 1 device to be connected at a time. If you wish to use the service on multiple screens simultaneously, contact our support team to find out about available options.",
      },
    ],
  },
  {
    id: "12mo",
    slug: "iptv-subscription-12-months",
    duration: "12 Months",
    months: 12,
    price: 42,
    pricePerMonth: 3.50,
    features: [
      "10,000+ Live TV Channels",
      "50,000+ Films & Series",
      "HD, Full HD & 4K Quality",
      "1 Connected Device",
      "Anti-Freeze Technology",
      "Priority 24/7 Support",
      "TV Guide EPG",
      "VOD Library Access",
      "Catch-Up TV (14 Days)",
      "PPV Events Included",
    ],
    popular: true,
    badge: "Most Popular",
    image: "/abonnement-iptv-12-mois.png",
    imageAlt: "12-Month IPTV Subscription — Man watching a 4K Smart TV in a premium living room with blue and purple ambient lighting, high-quality streaming all year round",
    featureDetails: [
      {
        title: "10,000+ Live TV Channels",
        description: "Access over 10,000 channels from around the world: sport, news, films, kids' TV and much more, all in real time.",
      },
      {
        title: "50,000+ Films & Series",
        description: "A VOD library of over 50,000 titles, updated regularly to keep up with everything you want to watch.",
      },
      {
        title: "HD, Full HD & 4K Quality",
        description: "From HD to 4K Ultra HD, adapt quality to your screen and connection for a perfect picture every time.",
      },
      {
        title: "1 Connected Device",
        description: "Use your subscription on the device of your choice: Smart TV, smartphone, tablet, PC or Fire Stick.",
      },
      {
        title: "Anti-Freeze Technology",
        description: "Our high-performance server infrastructure eliminates buffering and freezing for smooth, uninterrupted streaming.",
      },
      {
        title: "Priority 24/7 Support",
        description: "Benefit from priority access to our support team, available 24/7 for fast resolution of your requests.",
      },
      {
        title: "TV Guide EPG",
        description: "View the live TV schedule directly in your IPTV player so you never miss your favourite programmes.",
      },
      {
        title: "VOD Library Access",
        description: "Access our on-demand catalogue of films and series, available for instant streaming at any time.",
      },
      {
        title: "Catch-Up TV (14 Days)",
        description: "Access 14 days of content on replay. Easily catch up on missed series, documentaries and sporting events.",
      },
      {
        title: "PPV Events Included",
        description: "Major pay-per-view events (boxing, MMA, exclusive matches) are included at no extra cost in your subscription.",
      },
    ],
    whyChoose: [
      {
        title: "Best Value for Money",
        description: "At just £3.50/month, this is our most popular plan. Save the most while enjoying a premium service all year round.",
      },
      {
        title: "PPV Events at No Extra Cost",
        description: "Boxing, MMA, exclusive matches... All major pay-per-view events are included in your 12-month subscription.",
      },
      {
        title: "A Full Year Without Interruption",
        description: "A year of uninterrupted access to 10,000+ channels and 50,000+ films. Nothing to worry about — we take care of everything.",
      },
    ],
    planFaqs: [
      {
        question: "Why is the 12-month subscription the most popular?",
        answer: "The 12-month subscription offers the best balance of price and features: at £3.50/month, it includes 4K, 14-day Catch-Up TV, PPV events and priority support. It is the preferred plan for customers who want a full year without worrying about renewal.",
      },
      {
        question: "Are PPV events really included at no extra cost?",
        answer: "Yes, absolutely. With the 12-month subscription, all major pay-per-view events — boxing, MMA, exclusive matches — are broadcast at no additional charge. No nasty surprises on your bill.",
      },
      {
        question: "What is the 14-day Catch-Up TV included in this plan?",
        answer: "Catch-Up TV lets you rewatch any programme broadcast in the last 14 days. Missed a match or a series? Find it easily in your IPTV player, without any prior recording needed.",
      },
      {
        question: "What does priority 24/7 support mean?",
        answer: "Unlike standard support, priority support puts you at the front of the queue for faster handling of your requests. Our team is available 24/7 via chat, email and WhatsApp to respond to you as a priority.",
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
    title: "10,000+ Live Channels",
    description:
      "Access premium channels from around the world: sport, news, entertainment and much more.",
  },
  {
    icon: MonitorPlay,
    title: "4K Ultra HD Quality",
    description:
      "Crystal-clear streaming in HD, Full HD and 4K with no interruptions or buffering.",
  },
  {
    icon: Smartphone,
    title: "Multi-Device",
    description:
      "Watch on Smart TV, phone, tablet, PC or any compatible device with our apps.",
  },
  {
    icon: ShieldCheck,
    title: "No Contract",
    description:
      "Flexible subscriptions with no hidden fees and no long-term contract. Cancel whenever you like.",
  },
  {
    icon: Headphones,
    title: "Expert 24/7 Support",
    description:
      "Our dedicated support team is available 24 hours a day, 7 days a week to assist you.",
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description:
      "High-performance servers guarantee a smooth, uninterrupted streaming experience.",
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
  { value: "10,000+", label: "Live Channels" },
  { value: "50,000+", label: "Films & Series" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Countries Covered" },
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
    name: "James T.",
    avatar: "J",
    quote:
      "I ditched Sky for IPTV The King and I'm saving over £80 a month. The quality is incredible and the channel selection is unbeatable!",
    rating: 5,
  },
  {
    name: "Sarah M.",
    avatar: "S",
    quote:
      "The best IPTV service I've tried. The 4K quality is stunning and being able to watch on all my devices is brilliant. Support is top notch.",
    rating: 5,
  },
  {
    name: "David K.",
    avatar: "D",
    quote:
      "Been subscribed for over a year now. Zero buffering, an incredible VOD library, and the price is unbeatable. Highly recommend!",
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
    question: "What is IPTV?",
    answer:
      "IPTV (Internet Protocol Television) delivers TV content over the internet rather than through traditional cable or satellite. It lets you watch your favourite channels and on-demand content on any internet-connected device.",
  },
  {
    question: "Which devices are compatible?",
    answer:
      "You can use IPTV The King on virtually any device — Smart TV (Samsung, LG, Sony), Android/iOS smartphones and tablets, Amazon Fire Stick, NVIDIA Shield, MAG boxes, computers, and many more.",
  },
  {
    question: "What internet speed is needed?",
    answer:
      "We recommend a minimum of 10 Mbps for HD streaming and 25 Mbps for 4K content. A stable internet connection ensures the best viewing experience.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Yes! We offer a free 24-hour trial so you can test our service and see the quality for yourself before committing.",
  },
  {
    question: "How quickly can I start watching?",
    answer:
      "Instantly! As soon as your payment is confirmed, you will receive your login details within minutes. Our installation guide makes getting set up easy on any device.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No contract, no hidden fees. All our subscriptions are prepaid for the selected duration. You can renew or change plan at any time.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Absolutely! We offer 24/7 customer support via live chat, email and WhatsApp. Our team is always ready to help with installation, troubleshooting or any question you may have.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, PayPal, cryptocurrency and various other payment methods for your convenience.",
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
  "All",
  "Guides",
  "News",
  "Tips",
  "Reviews",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-install-iptv-on-firestick",
    fullSlug: ["how-to-install-iptv-on-firestick"],
    title: "How to Install IPTV on Amazon Fire Stick",
    excerpt:
      "A complete step-by-step guide to installing and setting up IPTV on your Amazon Fire Stick for the best streaming experience.",
    category: "Guides",
    date: "2026-02-28",
    readTime: "5 min read",
    image: "/logo.png",
  },
  {
    id: "2",
    slug: "best-iptv-players-2026",
    fullSlug: ["best-iptv-players-2026"],
    title: "Top 5 IPTV Players for 2026",
    excerpt:
      "Discover the best IPTV player apps available today. We compare features, performance and compatibility.",
    category: "Reviews",
    date: "2026-02-20",
    readTime: "7 min read",
    image: "/logo.png",
  },
  {
    id: "3",
    slug: "iptv-vs-cable-comparison",
    fullSlug: ["iptv-vs-cable-comparison"],
    title: "IPTV vs Cable TV: Which Should You Choose?",
    excerpt:
      "A detailed comparison between IPTV and traditional cable television — cost, quality, flexibility and channel choice.",
    category: "Guides",
    date: "2026-02-15",
    readTime: "6 min read",
    image: "/logo.png",
  },
  {
    id: "4",
    slug: "improve-streaming-quality",
    fullSlug: ["improve-streaming-quality"],
    title: "5 Tips to Improve Your IPTV Streaming Quality",
    excerpt:
      "Experiencing buffering? These proven tips will help you achieve smooth, high-quality IPTV streaming.",
    category: "Tips",
    date: "2026-02-10",
    readTime: "4 min read",
    image: "/logo.png",
  },
  {
    id: "5",
    slug: "iptv-trends-2026",
    fullSlug: ["iptv-trends-2026"],
    title: "IPTV Trends to Watch in 2026",
    excerpt:
      "From AI recommendations to 8K streaming, here are the key trends shaping the future of IPTV.",
    category: "News",
    date: "2026-02-05",
    readTime: "8 min read",
    image: "/logo.png",
  },
  {
    id: "6",
    slug: "vpn-with-iptv-guide",
    fullSlug: ["vpn-with-iptv-guide"],
    title: "Should You Use a VPN with IPTV? Complete Guide",
    excerpt:
      "Find out why using a VPN can enhance your IPTV experience and how to set it up correctly.",
    category: "Guides",
    date: "2026-01-28",
    readTime: "5 min read",
    image: "/logo.png",
  },
];

/* ============================================
   Company Values (About page)
   ============================================ */
export const COMPANY_VALUES = [
  {
    title: "Quality First",
    description:
      "We invest in premium server infrastructure to deliver the highest quality streams without compromise.",
  },
  {
    title: "Customer Obsession",
    description:
      "Every decision we make starts with our customers. Your satisfaction is our absolute priority.",
  },
  {
    title: "Innovation",
    description:
      "We continually improve our technology to stay ahead and deliver the latest features.",
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no contracts, no surprises. What you see is exactly what you get.",
  },
];

/* ============================================
   Footer Links
   ============================================ */
export const FOOTER_LINKS = {
  plans: [
    { label: "3-Month Subscription", href: "/iptv-subscription-3-months" },
    { label: "6-Month Subscription", href: "/iptv-subscription-6-months" },
    { label: "12-Month Subscription", href: "/iptv-subscription-12-months" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "FAQ", href: "/#faq" },
    { label: "Contact Support", href: "/contact" },
  ],
} as const;
