import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/constants";

interface TestimonialCardProps {
    testimonial: Testimonial;
    className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-border bg-card p-6 transition-all duration-300",
                "hover:border-brand-300/50 hover:shadow-lg hover:shadow-brand-500/5",
                className
            )}
        >
            {/* Stars */}
            <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                        key={i}
                        className="h-4 w-4 fill-brand-400 text-brand-400"
                    />
                ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-4 text-sm text-text-muted leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                    {testimonial.avatar}
                </div>
                <span className="text-sm font-medium">{testimonial.name}</span>
            </div>
        </div>
    );
}
