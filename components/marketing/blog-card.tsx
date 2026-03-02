import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/constants";

interface BlogCardProps {
    post: BlogPost;
    className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className={cn(
                "group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300",
                "hover:border-brand-300/50 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-0.5",
                className
            )}
        >
            {/* Thumbnail placeholder */}
            <div className="aspect-video w-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                <span className="text-brand-500/40 text-sm font-medium">{post.category}</span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                        {post.category}
                    </span>
                    <span className="text-xs text-text-muted">{post.readTime}</span>
                </div>
                <h3 className="text-base font-semibold leading-snug group-hover:text-brand-600 transition-colors">
                    {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-text-muted leading-relaxed line-clamp-2">
                    {post.excerpt}
                </p>
                <div className="mt-4 text-xs text-text-muted">
                    {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </div>
            </div>
        </Link>
    );
}
