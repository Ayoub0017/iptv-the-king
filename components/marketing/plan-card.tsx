import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Plan } from "@/lib/constants";

interface PlanCardProps {
    plan: Plan;
    className?: string;
}

export function PlanCard({ plan, className }: PlanCardProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300",
                "hover:border-brand-300/50 hover:shadow-lg hover:shadow-brand-500/5",
                className
            )}
        >
            {/* Header */}
            <div className="text-center">
                <h3 className="text-lg font-semibold">{plan.duration}</h3>
                <div className="mt-4">
                    <span className="text-4xl font-extrabold tracking-tight">
                        {plan.price}€
                    </span>
                    <span className="text-sm text-text-muted ml-1">/ {plan.months} mois</span>
                </div>
                <p className="mt-1 text-sm text-text-muted">
                    {plan.pricePerMonth}€/mois
                </p>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-border" />

            {/* Features */}
            <ul className="flex-1 space-y-3">
                {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-brand-500" />
                        <span className="text-text-muted">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <Link
                href={`/plans/${plan.slug}`}
                className="mt-8 flex h-11 items-center justify-center rounded-full bg-cta text-sm font-semibold text-cta-foreground transition-all hover:scale-[1.02] hover:opacity-90 hover:shadow-lg"
            >
                Choisir ce Plan
            </Link>
        </div>
    );
}
