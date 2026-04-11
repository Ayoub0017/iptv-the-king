import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { Container, Section } from "@/components/layout";
import { SchemaMarkup } from "@/components/schema-markup";
import { TableOfContents, type TocHeading } from "@/components/blog/table-of-contents";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/contentful";
import {
    breadcrumbSchema,
    blogPostingSchema,
    getSiteUrl,
} from "@/lib/schema";

const SITE_URL = getSiteUrl();

interface ArticlePostPageProps {
    params: Promise<{ slug: string[] }>;
}

export const revalidate = 0; // Always fetch fresh from Contentful

/** Convert heading text to a URL-safe anchor ID. */
function slugify(text: string): string {
    return String(text)
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

/** Extract headings (h2, h3) from a markdown string for the ToC. */
function extractHeadings(markdown: string): TocHeading[] {
    const lines = markdown.split("\n");
    const headings: TocHeading[] = [];
    for (const line of lines) {
        const match = line.match(/^(#{2,3})\s+(.+)$/);
        if (match) {
            const level = match[1].length;
            const text = match[2].trim();
            headings.push({ level, text, id: slugify(text) });
        }
    }
    return headings;
}

/** Custom ReactMarkdown components that inject anchor IDs on headings. */
const markdownComponents: Components = {
    h1: ({ children }) => <h1 id={slugify(String(children))}>{children}</h1>,
    h2: ({ children }) => <h2 id={slugify(String(children))}>{children}</h2>,
    h3: ({ children }) => <h3 id={slugify(String(children))}>{children}</h3>,
    h4: ({ children }) => <h4 id={slugify(String(children))}>{children}</h4>,
    h5: ({ children }) => <h5 id={slugify(String(children))}>{children}</h5>,
    h6: ({ children }) => <h6 id={slugify(String(children))}>{children}</h6>,
};

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({ slug: [post.slug] }));
}

export async function generateMetadata({ params }: ArticlePostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const postSlug = slug[slug.length - 1];
    const post = await getBlogPostBySlug(postSlug);

    if (!post) {
        return {
            title: "Article Introuvable | IPTV The King",
            description: "Cet article n'existe pas ou a été supprimé.",
        };
    }

    return {
        title: `${post.title} | Blog IPTV The King`,
        description: post.excerpt,
        alternates: {
            canonical: `${SITE_URL}/articles/${slug.join("/")}`,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `${SITE_URL}/articles/${slug.join("/")}`,
            type: "article",
            publishedTime: post.date,
            authors: [post.author?.name || "IPTV The King"],
            images: [
                {
                    url: post.image?.startsWith("http") ? post.image : `${SITE_URL}${post.image}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image?.startsWith("http") ? post.image : `${SITE_URL}${post.image}`],
        },
    };
}

export default async function ArticlePostPage({ params }: ArticlePostPageProps) {
    const { slug } = await params;
    const currentPath = slug.join("/");
    const postSlug = slug[slug.length - 1];
    const post = await getBlogPostBySlug(postSlug);

    if (!post) notFound();

    const headings = extractHeadings(post.body || "");

    return (
        <>
            <SchemaMarkup
                schemas={[
                    blogPostingSchema({
                        headline: post.title,
                        description: post.excerpt,
                        image: post.image?.startsWith("http") ? post.image : `${SITE_URL}${post.image}`,
                        datePublished: post.date,
                        dateModified: post.updatedAt || post.date,
                        authorName: post.author?.name || "IPTV The King",
                        authorImage: post.author?.avatar || undefined,
                        url: `${SITE_URL}/articles/${currentPath}`,
                        articleSection: post.category,
                        wordCount: post.body ? post.body.trim().split(/\s+/).length : undefined,
                        keywords: [post.category, "IPTV", "streaming", "France"].filter(Boolean),
                    }),
                    breadcrumbSchema([
                        { name: "Accueil", url: SITE_URL },
                        { name: "Articles", url: `${SITE_URL}/articles` },
                        { name: post.title, url: `${SITE_URL}/articles/${currentPath}` },
                    ]),
                ]}
            />

            {/* Hero */}
            <Section className="pb-8 pt-24 lg:pt-32">
                <Container className="max-w-4xl text-center">
                    <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
                        <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-brand-700">
                            {post.category}
                        </span>
                        <span className="text-text-muted">•</span>
                        <span className="text-text-muted">
                            {new Date(post.date).toLocaleDateString("fr-FR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                        <span className="text-text-muted">•</span>
                        <span className="text-text-muted">{post.readTime}</span>
                    </div>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                        {post.title}
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-text-muted md:text-xl leading-relaxed">
                        {post.excerpt}
                    </p>
                </Container>
            </Section>

            {/* Featured Image */}
            <Section className="py-8">
                <Container className="max-w-5xl">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl bg-surface border border-border shadow-2xl shadow-brand-500/5">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </Container>
            </Section>

            {/* Content + ToC */}
            <Section className="py-12">
                <Container className="max-w-7xl">
                    <div className="flex gap-10 xl:gap-16">

                        {/* Left: Sticky Table of Contents */}
                        {headings.length > 0 && (
                            <aside className="hidden lg:block w-64 shrink-0">
                                <div className="sticky top-24">
                                    <TableOfContents headings={headings} />
                                </div>
                            </aside>
                        )}

                        {/* Right: Article + Author */}
                        <div className="min-w-0 flex-1">
                            <article className="prose prose-brand max-w-none text-text-primary prose-headings:text-text-primary prose-p:text-text-muted prose-li:text-text-muted prose-strong:text-text-primary prose-a:text-brand-500 hover:prose-a:text-brand-400 prose-img:rounded-2xl prose-hr:border-border prose-table:border prose-th:bg-brand-50 prose-th:text-text-primary prose-th:px-4 prose-th:py-3 prose-td:px-4 prose-td:py-3">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={markdownComponents}
                                >
                                    {post.body || "Le contenu complet arrive bientôt..."}
                                </ReactMarkdown>
                            </article>

                            {/* Author Bio */}
                            {post.author?.name && (
                                <div className="mt-16 rounded-2xl border border-border bg-surface p-6 sm:p-8">
                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                                        {/* Avatar */}
                                        <div className="shrink-0">
                                            {post.author.avatar ? (
                                                <img
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    className="h-16 w-16 rounded-full object-cover ring-2 ring-brand-200"
                                                />
                                            ) : (
                                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-2xl font-bold text-brand-600">
                                                    {post.author.name.charAt(0).toUpperCase()}
                                                </div>
                                            )}
                                        </div>
                                        {/* Info */}
                                        <div>
                                            <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-brand-500">
                                                À propos de l&apos;auteur
                                            </p>
                                            <p className="mb-2 text-lg font-semibold text-text-primary">
                                                {post.author.name}
                                            </p>
                                            {post.author.bio && (
                                                <p className="text-sm leading-relaxed text-text-muted">
                                                    {post.author.bio}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
