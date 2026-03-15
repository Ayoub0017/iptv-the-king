import { createClient } from "contentful";
import { BLOG_POSTS, type BlogPost } from "./constants";

// Initialize the Contentful client
let contentfulClient: any = null;

if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    // Add environment if needed (default is 'master')
    environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
  });
}

/**
 * Fetch blog posts from Contentful.
 * Falls back to local static BLOG_POSTS if Contentful is not yet configured.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!contentfulClient) {
    console.warn("Contentful is not configured. Falling back to local static data.");
    return BLOG_POSTS;
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: "blogPost", // Make sure this matches your Contentful Content Type ID
      order: ["-sys.createdAt"], // Sort by descending date
    });

    return entries.items.map((entry: any) => ({
      id: entry.sys.id,
      slug: entry.fields.slug || "no-slug",
      title: entry.fields.title || "Untitled",
      excerpt: entry.fields.excerpt || "",
      category: entry.fields.category?.fields?.title || (typeof entry.fields.category === "string" ? entry.fields.category : "Actualités"),
      date: entry.sys.createdAt,
      readTime: entry.fields.readTime || "5 min de lecture",
      // Contentful image field might have nested `fields.file.url`
      image: entry.fields.image?.fields?.file?.url
        ? `https:${entry.fields.image.fields.file.url}`
        : "/logo.png",
      body: entry.fields.body || "",
    }));
  } catch (error) {
    console.error("Error fetching Contentful posts. Falling back to static data.", error);
    return BLOG_POSTS;
  }
}

/**
 * Fetch a single blog post by its slug fully SSR.
 */
export async function getBlogPostBySlug(slug: string): Promise<any | null> {
  if (!contentfulClient) {
    console.warn("Contentful is not configured. Falling back to local static data.");
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    return post ? { ...post, body: "" } : null;
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: "blogPost", // Ensure this matches exactly with your Contentful model
      "fields.slug": slug,
      limit: 1,
    });

    if (entries.items.length === 0) return null;

    const entry: any = entries.items[0];

    return {
      id: entry.sys.id,
      slug: entry.fields.slug || "no-slug",
      title: entry.fields.title || "Untitled",
      excerpt: entry.fields.excerpt || "",
      category: entry.fields.category?.fields?.title || (typeof entry.fields.category === "string" ? entry.fields.category : "Actualités"),
      date: entry.sys.createdAt,
      readTime: entry.fields.readTime || "5 min de lecture",
      image: entry.fields.image?.fields?.file?.url
        ? `https:${entry.fields.image.fields.file.url}`
        : "/logo.png",
      body: entry.fields.body || "",
      author: entry.fields.author?.fields
        ? {
            name: entry.fields.author.fields.name || null,
            bio: entry.fields.author.fields.bio || null,
            avatar: entry.fields.author.fields.avatar?.fields?.file?.url
              ? `https:${entry.fields.author.fields.avatar.fields.file.url}`
              : null,
          }
        : null,
    };
  } catch (error) {
    console.error(`Error fetching Contentful post for slug ${slug}`, error);
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    return post ? { ...post, body: "" } : null;
  }
}
