import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";

interface HeroSectionProps {
    title: string;
    highlight?: string;
    subtitle: string;
    primaryCTA?: { label: string; href: string };
    secondaryCTA?: { label: string; href: string };
    className?: string;
}

export function HeroSection({
    title,
    highlight,
    subtitle,
    primaryCTA,
    secondaryCTA,
    className,
}: HeroSectionProps) {
    return (
        <section className={cn("relative overflow-hidden py-24 md:py-32 lg:py-40", className)}>
            {/* Background glow effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-500/10 blur-[120px]" />
                <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-brand-400/8 blur-[100px]" />
                <div className="absolute bottom-1/4 left-1/4 h-[250px] w-[250px] rounded-full bg-brand-600/6 blur-[80px]" />
            </div>

            <Container className="relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {title}{" "}
                        {highlight && (
                            <span className="text-gradient-purple">{highlight}</span>
                        )}
                    </h1>
                    <p className="mt-6 text-lg text-text-muted md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                    {(primaryCTA || secondaryCTA) && (
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            {primaryCTA && (
                                <Link
                                    href={primaryCTA.href}
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-cta px-8 text-sm font-semibold text-cta-foreground transition-all hover:opacity-90 hover:shadow-xl hover:scale-[1.02] glow-purple"
                                >
                                    {primaryCTA.label}
                                </Link>
                            )}
                            {secondaryCTA && (
                                <Link
                                    href={secondaryCTA.href}
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface/50 px-8 text-sm font-semibold text-text-primary transition-all hover:bg-surface hover:border-brand-300"
                                >
                                    {secondaryCTA.label}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
