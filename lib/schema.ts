import type { BlogPost, Plan } from "./constants";

/* ============================================
   Site-wide Constants
   ============================================ */
const SITE_URL = "https://iptvtheking.com"; // Update with your real domain
const SITE_NAME = "IPTV The King";
const LOGO_URL = "YOUR_LOGO_URL"; // Replace with your actual logo URL

/* ============================================
   Type for a JSON-LD schema object
   ============================================ */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type JsonLd = Record<string, any>;

/* ============================================
   WebSite Schema (Homepage — with SearchAction)
   ============================================ */
export function websiteSchema(): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
}

/* ============================================
   Organization Schema (basic — no sameAs)
   ============================================ */
export function organizationSchema(options?: {
    description?: string;
    contactPoint?: JsonLd;
}): JsonLd {
    const schema: JsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: LOGO_URL,
    };

    if (options?.description) {
        schema.description = options.description;
    }

    if (options?.contactPoint) {
        schema.contactPoint = options.contactPoint;
    }

    return schema;
}

/* ============================================
   WebPage Schema (sitewide)
   ============================================ */
export function webPageSchema(options: {
    name: string;
    description: string;
    url: string;
    type?: string; // e.g. "AboutPage", "ContactPage"
}): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": options.type || "WebPage",
        name: options.name,
        description: options.description,
        url: options.url,
        isPartOf: {
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
        },
    };
}

/* ============================================
   BreadcrumbList Schema (sitewide)
   ============================================ */
export function breadcrumbSchema(
    items: { name: string; url: string }[]
): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/* ============================================
   Product + Offer Schema (Plan pages)
   ============================================ */
export function productSchema(plan: Plan): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: `Abonnement IPTV ${plan.duration}`,
        description: `Abonnement IPTV premium de ${plan.duration} avec ${plan.features.length} fonctionnalités incluses : 10 000+ chaînes en direct, films et séries en qualité 4K.`,
        image: LOGO_URL, // Replace with actual product image
        offers: {
            "@type": "Offer",
            price: plan.price,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/plans/${plan.slug}`,
            priceValidUntil: "2027-12-31",
            billingDuration: {
                "@type": "QuantitativeValue",
                value: plan.months,
                unitCode: "MON",
            },
        },
    };
}

/* ============================================
   Service Schema (Plan pages)
   ============================================ */
export function serviceSchema(plan: Plan): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `IPTV The King — Abonnement ${plan.duration}`,
        description: `Service d'abonnement IPTV premium de ${plan.duration}. Accès à 10 000+ chaînes en direct, 50 000+ films et séries en qualité 4K.`,
        provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
        },
        serviceType: "IPTV Streaming Subscription",
        areaServed: "FR",
        offers: {
            "@type": "Offer",
            price: plan.price,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
        },
    };
}

/* ============================================
   Blog Schema (Blog listing page)
   ============================================ */
export function blogSchema(): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `Blog ${SITE_NAME}`,
        description:
            "Guides, astuces et actualités pour profiter au maximum de votre expérience IPTV.",
        url: `${SITE_URL}/blog`,
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: LOGO_URL,
        },
    };
}

/* ============================================
   ItemList Schema (Blog listing — post previews)
   ============================================ */
export function blogItemListSchema(posts: BlogPost[]): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: post.title,
            url: `${SITE_URL}/blog/${post.slug}`,
        })),
    };
}

/* ============================================
   BlogPosting Schema (Individual blog post)
   ============================================ */
export function blogPostingSchema(options: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
    url: string;
}): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: options.headline,
        description: options.description,
        image: options.image,
        datePublished: options.datePublished,
        dateModified: options.dateModified,
        url: options.url,
        author: {
            "@type": "Person",
            name: options.authorName,
        },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: LOGO_URL,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": options.url,
        },
    };
}

/* ============================================
   Person Schema (About page team members)
   ============================================ */
export function personSchema(options: {
    name: string;
    jobTitle?: string;
    url?: string;
    image?: string;
}): JsonLd {
    const schema: JsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: options.name,
    };

    if (options.jobTitle) schema.jobTitle = options.jobTitle;
    if (options.url) schema.url = options.url;
    if (options.image) schema.image = options.image;

    return schema;
}

/* ============================================
   ContactPage Organization with ContactPoint
   ============================================ */
export function contactOrganizationSchema(): JsonLd {
    return organizationSchema({
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "YOUR_EMAIL", // Replace with your real email
            telephone: "YOUR_TELEPHONE", // Replace with your real phone
            availableLanguage: ["French", "English"],
        },
    });
}

/* ============================================
   Helper: get site URL constant
   ============================================ */
export function getSiteUrl(): string {
    return SITE_URL;
}
