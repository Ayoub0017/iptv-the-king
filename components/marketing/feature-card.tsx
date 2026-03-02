import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function FeatureCard({
    icon: Icon,
    title,
    description,
    className,
}: FeatureCardProps) {
    return (
        <div
            className={cn(
                "group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300",
                "hover:border-brand-300/50 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-0.5",
                className
            )}
        >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">{description}</p>
        </div>
    );
}
