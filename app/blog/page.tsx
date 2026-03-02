"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { SectionHeader, BlogCard } from "@/components/marketing";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("Tous");

    const filteredPosts =
        activeCategory === "Tous"
            ? BLOG_POSTS
            : BLOG_POSTS.filter((post) => post.category === activeCategory);

    return (
        <>
            <Section>
                <Container>
                    <SectionHeader
                        title="Blog IPTV The King"
                        subtitle="Guides, astuces et actualités pour profiter au maximum de votre expérience IPTV."
                    />

                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                        {BLOG_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "rounded-full px-4 py-2 text-sm font-medium transition-all",
                                    activeCategory === category
                                        ? "bg-cta text-cta-foreground"
                                        : "bg-surface text-text-muted hover:bg-surface hover:text-text-primary border border-border"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <p className="text-center text-text-muted py-12">
                            Aucun article trouvé dans cette catégorie.
                        </p>
                    )}
                </Container>
            </Section>
        </>
    );
}
