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
 * Recursively build the full slug path by traversing the parentArticle chain.
 * e.g. grandparent → parent → child becomes ['grandparent-slug', 'parent-slug', 'child-slug']
 */
function buildFullSlug(entry: any, allEntries: any[]): string[] {
  const slug: string = entry.fields.slug || "no-slug";
  const parentRef = entry.fields.parentArticle;

  if (!parentRef) return [slug];

  // parentRef is resolved when include >= 1
  const parentEntry = parentRef.fields
    ? parentRef
    : allEntries.find((e: any) => e.sys.id === parentRef.sys?.id);

  if (!parentEntry?.fields) return [slug];

  return [...buildFullSlug(parentEntry, allEntries), slug];
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
      content_type: "blogPost",
      order: ["-sys.createdAt"],
      include: 2, // resolve linked entries (parentArticle) up to 2 levels deep
    });

    return entries.items.map((entry: any) => ({
      id: entry.sys.id,
      slug: entry.fields.slug || "no-slug",
      fullSlug: buildFullSlug(entry, entries.items),
      title: entry.fields.title || "Untitled",
      excerpt: entry.fields.excerpt || "",
      category: entry.fields.category?.fields?.title || (typeof entry.fields.category === "string" ? entry.fields.category : "Actualités"),
      date: entry.sys.createdAt,
      readTime: entry.fields.readTime || "5 min de lecture",
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
 * Fetch a single blog post by its slug.
 * Pass the full slug array (e.g. ['parent', 'child']) — only the last segment
 * is used to query Contentful, but the parent chain is verified.
 */
export async function getBlogPostBySlug(slugArray: string[]): Promise<any | null> {
  const slug = slugArray[slugArray.length - 1];

  if (!contentfulClient) {
    console.warn("Contentful is not configured. Falling back to local static data.");
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    return post ? { ...post, body: "" } : null;
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      include: 2, // resolve parentArticle links
      limit: 1,
    });

    if (entries.items.length === 0) return null;

    const entry: any = entries.items[0];
    const fullSlug = buildFullSlug(entry, entries.items);

    // Validate that the URL path matches the actual parent chain
    if (fullSlug.join("/") !== slugArray.join("/")) return null;

    return {
      id: entry.sys.id,
      slug: entry.fields.slug || "no-slug",
      fullSlug,
      title: entry.fields.title || "Untitled",
      excerpt: entry.fields.excerpt || "",
      category: entry.fields.category?.fields?.title || (typeof entry.fields.category === "string" ? entry.fields.category : "Actualités"),
      date: entry.sys.createdAt,
      updatedAt: entry.sys.updatedAt,
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
