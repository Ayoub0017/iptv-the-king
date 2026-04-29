import type { MetadataRoute } from "next";
import { PLANS } from "@/lib/constants";
import { getBlogPosts } from "@/lib/contentful";

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
            url: `${siteUrl}/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/contact`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/tutorials`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/terms-of-use`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${siteUrl}/privacy-policy`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    const planPages: MetadataRoute.Sitemap = PLANS.map((plan) => ({
        url: `${siteUrl}/${plan.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // Add Tutorials from Contentful
    let tutorialPages: MetadataRoute.Sitemap = [];
    try {
        const posts = await getBlogPosts();
        tutorialPages = posts.map((post) => ({
            url: `${siteUrl}/tutorials/${post.fullSlug.join("/")}`,
            lastModified: new Date(post.date),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }));
    } catch (error) {
        console.error("Error fetching posts for sitemap", error);
    }

    return [...staticPages, ...planPages, ...tutorialPages];
}
