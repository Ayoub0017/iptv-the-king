import type { BlogPost, Plan } from "./constants";

/* ============================================
   Site-wide Constants
   ============================================ */
const SITE_URL = "https://www.iptvtheking.com";
const SITE_NAME = "IPTV The King";
const LOGO_URL = `${SITE_URL}/logo.png`;

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
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: LOGO_URL,
                width: 512,
                height: 512,
            },
        },
    };
}

/* ============================================
   Organization Schema
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
        logo: {
            "@type": "ImageObject",
            url: LOGO_URL,
            width: 512,
            height: 512,
        },
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
        name: `IPTV Subscription ${plan.duration}`,
        description: `Premium IPTV subscription for ${plan.duration} with ${plan.features.length} included features: 10,000+ live channels, films and series in 4K quality.`,
        image: LOGO_URL,
        url: `${SITE_URL}/${plan.slug}`,
        sku: `IPTV-${plan.id.toUpperCase()}`,
        mpn: `IPTV-${plan.id.toUpperCase()}`,
        category: "IPTV Subscription",
        brand: {
            "@type": "Brand",
            name: SITE_NAME,
            logo: LOGO_URL,
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "1250",
            bestRating: "5",
            worstRating: "1",
        },
        review: {
            "@type": "Review",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
            },
            author: {
                "@type": "Person",
                name: "James T.",
            },
            reviewBody:
                "I ditched Sky for IPTV The King and I'm saving over £80 a month. The quality is incredible and the channel selection is unbeatable!",
        },
        offers: {
            "@type": "Offer",
            price: plan.price,
            priceCurrency: "GBP",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/${plan.slug}`,
            priceValidUntil: "2027-12-31",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
                "@type": "Organization",
                name: SITE_NAME,
                url: SITE_URL,
                logo: LOGO_URL,
            },
            priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: plan.price,
                priceCurrency: "GBP",
                referenceQuantity: {
                    "@type": "QuantitativeValue",
                    value: plan.months,
                    unitCode: "MON",
                },
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
        name: `IPTV The King — ${plan.duration} Subscription`,
        description: `Premium IPTV subscription service for ${plan.duration}. Access to 10,000+ live channels, 50,000+ films and series in 4K quality.`,
        url: `${SITE_URL}/${plan.slug}`,
        provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: LOGO_URL,
                width: 512,
                height: 512,
            },
        },
        serviceType: "IPTV Streaming Subscription",
        areaServed: {
            "@type": "Country",
            name: "United Kingdom",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "IPTV Subscriptions",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: `IPTV Subscription ${plan.duration}`,
                    },
                },
            ],
        },
        offers: {
            "@type": "Offer",
            price: plan.price,
            priceCurrency: "GBP",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/${plan.slug}`,
            priceValidUntil: "2027-12-31",
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
        name: `${SITE_NAME} Blog`,
        description:
            "Guides, tips and news to help you get the most out of your IPTV experience.",
        url: `${SITE_URL}/blog`,
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: LOGO_URL,
                width: 512,
                height: 512,
            },
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
    authorImage?: string;
    articleSection?: string;
    wordCount?: number;
    keywords?: string[];
}): JsonLd {
    const author: JsonLd = {
        "@type": "Person",
        name: options.authorName,
    };
    if (options.authorImage) author.image = options.authorImage;

    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: options.headline,
        description: options.description,
        image: {
            "@type": "ImageObject",
            url: options.image,
            width: 1200,
            height: 630,
        },
        datePublished: options.datePublished,
        dateModified: options.dateModified,
        url: options.url,
        inLanguage: "en-GB",
        ...(options.articleSection && { articleSection: options.articleSection }),
        ...(options.wordCount && { wordCount: options.wordCount }),
        ...(options.keywords?.length && { keywords: options.keywords.join(", ") }),
        author,
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: LOGO_URL,
                width: 512,
                height: 512,
            },
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
            email: "support@iptvtheking.com",
            telephone: "+33753820307",
            availableLanguage: ["English"],
        },
    });
}

/* ============================================
   Helper: get site URL constant
   ============================================ */
export function getSiteUrl(): string {
    return SITE_URL;
}
