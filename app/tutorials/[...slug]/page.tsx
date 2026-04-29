import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Container, Section } from "@/components/layout";
import { SchemaMarkup } from "@/components/schema-markup";
import { blogPostingSchema, breadcrumbSchema, getSiteUrl } from "@/lib/schema";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/contentful";
import { TableOfContents, type TocHeading } from "@/components/blog/table-of-contents";

const SITE_URL = getSiteUrl();

export const revalidate = 0; // Ensure fresh content on every request

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
}

function extractHeadings(markdown: string): TocHeading[] {
    const headingRegex = /^(#{2,3})\s+(.*)$/gm;
    const headings: TocHeading[] = [];
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        headings.push({
            level,
            text,
            id: slugify(text),
        });
    }

    return headings;
}

type Props = {
    params: Promise<{ slug: string[] }>;
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Tutorial Not Found",
        };
    }

    return {
        title: `${post.title} — IPTV The King`,
        description: post.excerpt,
        alternates: {
            canonical: `${SITE_URL}/tutorials/${slug.join("/")}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: post.author?.name ? [post.author.name] : [],
            images: [
                {
                    url: post.image || "/logo.png",
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
            images: [post.image || "/logo.png"],
        },
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const breadcrumbList = [
        { name: "Home", url: SITE_URL },
        { name: "Tutorials", url: `${SITE_URL}/tutorials` },
    ];
    
    // Add parent articles to breadcrumb if they exist
    let currentPath = `${SITE_URL}/tutorials`;
    for (let i = 0; i < slug.length - 1; i++) {
        currentPath += `/${slug[i]}`;
        // we'd typically look up the title for this slug, but for simplicity we'll just use the slug capitalized
        const name = slug[i].charAt(0).toUpperCase() + slug[i].slice(1).replace(/-/g, ' ');
        breadcrumbList.push({ name, url: currentPath });
    }
    
    breadcrumbList.push({ name: post.title, url: `${SITE_URL}/tutorials/${slug.join("/")}` });

    const headings = post.body ? extractHeadings(post.body) : [];

    return (
        <>
            <SchemaMarkup
                schemas={[
                    blogPostingSchema({
                        headline: post.title,
                        description: post.excerpt,
                        image: post.image || `${SITE_URL}/logo.png`,
                        datePublished: post.date,
                        dateModified: post.updatedAt || post.date,
                        authorName: post.author?.name || "IPTV The King",
                        authorDescription: post.author?.bio,
                        authorImage: post.author?.avatar,
                        url: `${SITE_URL}/tutorials/${slug.join("/")}`,
                    }),
                    breadcrumbSchema(breadcrumbList),
                ]}
            />

            <article className="pt-24 pb-16">
                <div className="max-w-[1700px] mx-auto px-4 md:px-8">
                    {/* Header */}
                    <header className="max-w-4xl mx-auto text-center mb-12">
                        <div className="mb-6">
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
                                {post.category}
                            </span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-strong tracking-tight mb-8">
                            {post.title}
                        </h1>
                        
                        <div className="flex items-center justify-center text-sm text-text-muted space-x-6">
                            {post.author && (
                                <div className="flex items-center space-x-2">
                                    {post.author.avatar && (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                                    )}
                                    <span className="font-medium text-text-base">{post.author.name}</span>
                                </div>
                            )}
                            <div className="flex items-center space-x-2">
                                <time dateTime={new Date(post.date).toISOString()}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {post.image && (
                        <div className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl border border-border bg-surface-muted aspect-[21/9]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="flex flex-col xl:flex-row gap-12 justify-center">
                        {/* Left Sidebar: TOC */}
                        <aside className="hidden xl:block w-72 shrink-0">
                            <div className="sticky top-28">
                                <TableOfContents headings={headings} />
                            </div>
                        </aside>

                        {/* Content */}
                        <div className="flex-grow max-w-[1080px] w-full mx-auto xl:mx-0">
                            <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
                                {post.body ? (
                                    <ReactMarkdown 
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            h2: ({ children }) => {
                                                const id = slugify(String(children));
                                                return <h2 id={id}>{children}</h2>;
                                            },
                                            h3: ({ children }) => {
                                                const id = slugify(String(children));
                                                return <h3 id={id}>{children}</h3>;
                                            },
                                        }}
                                    >
                                        {post.body}
                                    </ReactMarkdown>
                                ) : (
                                    <p className="text-text-muted italic">Content coming soon...</p>
                                )}
                            </div>

                            {/* Author Bio Section */}
                            {post.author && (
                                <div className="mt-16 p-8 rounded-3xl bg-surface border border-border relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                                    
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                                        <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img 
                                                src={post.author.avatar || "/logo.png"} 
                                                alt={post.author.name} 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        
                                        <div className="text-center md:text-left">
                                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Written by</p>
                                            <h4 className="text-2xl font-black text-text-strong mb-3">{post.author.name}</h4>
                                            <p className="text-text-muted leading-relaxed mb-6">
                                                {post.author.bio || "An expert contributor to the IPTV The King blog, sharing insights and guides to help you master your streaming experience."}
                                            </p>
                                            
                                            <div className="flex items-center justify-center md:justify-start gap-4">
                                                <Link 
                                                    href="/tutorials" 
                                                    className="text-sm font-bold text-text-strong hover:text-primary transition-colors flex items-center"
                                                >
                                                    View all tutorials
                                                    <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {/* Tags / Footer */}
                            <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
                                <Link href="/tutorials" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                                    <svg className="w-5 h-5 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                    Back to Tutorials
                                </Link>
                            </div>
                        </div>

                        {/* Right Sidebar: CTA */}
                        <aside className="w-full xl:w-80 shrink-0">
                            <div className="sticky top-28">
                                <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-2xl shadow-brand-500/20 border border-white/10 overflow-hidden relative group">
                                    {/* Background decorative elements */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />
                                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-400/20 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-black mb-4 leading-tight">
                                            Ready to experience the best IPTV?
                                        </h3>
                                        <p className="text-brand-100 mb-8 text-sm leading-relaxed">
                                            Join 50,000+ happy customers and start streaming 10,000+ channels in 4K quality today.
                                        </p>
                                        
                                        <ul className="space-y-3 mb-8">
                                            {[
                                                "Free 24h Trial",
                                                "No Commitment",
                                                "Instant Activation",
                                                "24/7 Priority Support"
                                            ].map((feature) => (
                                                <li key={feature} className="flex items-center text-xs font-medium text-brand-50">
                                                    <svg className="w-4 h-4 mr-2 text-brand-300" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href="https://wa.me/33753820307?text=Hello%2C%20I%27d%20like%20to%20request%20a%20free%20trial%20after%20reading%20your%20blog."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center bg-white text-brand-700 font-bold py-4 rounded-2xl shadow-xl hover:bg-brand-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                                        >
                                            Request Free Trial
                                        </a>
                                        
                                        <p className="text-center mt-4 text-[10px] text-brand-200 font-medium">
                                            No credit card required • Instant setup
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Secondary small CTA or helpful link */}
                                <div className="mt-6 p-6 rounded-2xl border border-border bg-surface hover:border-brand-500/30 transition-colors group">
                                    <h4 className="text-sm font-bold text-text-strong mb-2 flex items-center">
                                        Need help choosing?
                                        <svg className="ml-2 w-3 h-3 text-brand-500 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </h4>
                                    <p className="text-xs text-text-muted">
                                        Compare our subscription plans to find the best fit for your needs.
                                    </p>
                                    <Link href="/#plans" className="absolute inset-0" />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
        </>
    );
}

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
        slug: post.fullSlug,
    }));
}
