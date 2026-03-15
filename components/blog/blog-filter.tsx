"use client";

import { useState } from "react";
import { BlogCard } from "@/components/marketing";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/constants";

interface BlogFilterProps {
    posts: BlogPost[];
    categories: string[];
}

export function BlogFilter({ posts, categories }: BlogFilterProps) {
    const [active, setActive] = useState("Tous");

    const filtered = active === "Tous" ? posts : posts.filter((p) => p.category === active);

    return (
        <>
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                {["Tous", ...categories].map((category) => (
                    <button
                        key={category}
                        onClick={() => setActive(category)}
                        className={cn(
                            "rounded-full px-4 py-2 text-sm font-medium transition-all",
                            active === category
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
                {filtered.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="text-center text-text-muted py-12">
                    Aucun article trouvé dans cette catégorie.
                </p>
            )}
        </>
    );
}
