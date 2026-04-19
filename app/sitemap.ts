import type { MetadataRoute } from "next";
import { PLANS } from "@/lib/constants";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = "https://www.iptvtheking.com";
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${siteUrl}/a-propos`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/contactez-nous`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    const planPages: MetadataRoute.Sitemap = PLANS.map((plan) => ({
        url: `${siteUrl}/${plan.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    return [...staticPages, ...planPages];
}
