import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { SectionHeader } from "@/components/marketing";
import { SchemaMarkup } from "@/components/schema-markup";
import { webPageSchema, breadcrumbSchema, getSiteUrl, blogSchema, blogItemListSchema } from "@/lib/schema";
import { getBlogPosts } from "@/lib/contentful";

const SITE_URL = getSiteUrl();

export const revalidate = 0; // Ensure fresh content on every request

export const metadata: Metadata = {
    title: "Articles — IPTV Guides, Tips & News",
    description:
        "Guides, tips and news to help you get the most out of your IPTV experience. Installation tutorials, player reviews, streaming tips and more.",
    alternates: {
        canonical: `${SITE_URL}/articles`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default async function ArticlesPage() {
    const posts = await getBlogPosts();

    return (
        <>
            <SchemaMarkup
                schemas={[
                    webPageSchema({
                        name: "Articles — IPTV Guides, Tips & News",
                        description:
                            "Guides, tips and news to help you get the most out of your IPTV experience.",
                        url: `${SITE_URL}/articles`,
                    }),
                    blogSchema(),
                    blogItemListSchema(posts.map(p => ({
                        ...p,
                        slug: p.fullSlug.join("/") // Ensure correct slug path for schema
                    }))),
                    breadcrumbSchema([
                        { name: "Home", url: SITE_URL },
                        { name: "Articles", url: `${SITE_URL}/articles` },
                    ]),
                ]}
            />

            <Section>
                <Container>
                    <SectionHeader
                        title="Articles"
                        subtitle="Guides, tips and news to help you get the most out of your IPTV experience."
                    />

                    {posts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-24 text-center">
                            <p className="text-text-muted text-lg">No articles found. Check back later!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                            {posts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/articles/${post.fullSlug.join("/")}`}
                                    className="group flex flex-col overflow-hidden rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm"
                                >
                                    <div className="aspect-video w-full overflow-hidden relative bg-surface-muted">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={post.image || "/logo.png"}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col flex-grow p-6">
                                        <div className="flex items-center text-xs text-text-muted mb-3 space-x-3">
                                            <time dateTime={new Date(post.date).toISOString()}>
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </time>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-text-strong mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        
                                        <p className="text-text-muted line-clamp-3 mb-6 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        
                                        <div className="mt-auto flex items-center text-primary font-medium text-sm group/btn">
                                            Read article
                                            <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </Container>
            </Section>
        </>
    );
}
