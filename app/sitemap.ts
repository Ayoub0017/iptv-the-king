import type { MetadataRoute } from "next";
import { PLANS } from "@/lib/constants";
import { getBlogPosts } from "@/lib/contentful";

export const revalidate = 3600; // ISR: refresh sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = "https://www.iptvtheking.com";
    const now = new Date();
    const blogPosts = await getBlogPosts();

    // Static pages
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
        {
            url: `${siteUrl}/blog`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    // Plan pages
    const planPages: MetadataRoute.Sitemap = PLANS.map((plan) => ({
        url: `${siteUrl}/${plan.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // Blog post pages
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...staticPages, ...planPages, ...blogPages];
}
