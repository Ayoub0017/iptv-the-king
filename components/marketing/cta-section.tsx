import Link from "next/link";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

interface CTASectionProps {
    title: string;
    subtitle?: string;
    buttonLabel: string;
    buttonHref: string;
    className?: string;
}

export function CTASection({
    title,
    subtitle,
    buttonLabel,
    buttonHref,
    className,
}: CTASectionProps) {
    return (
        <section className={cn("relative overflow-hidden py-20 md:py-24", className)}>
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-brand-500/8 blur-[100px]" />
            </div>

            <Container className="relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-4 text-lg text-text-muted leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                    <Link
                        href={buttonHref}
                        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-cta px-8 text-sm font-semibold text-cta-foreground transition-all hover:opacity-90 hover:shadow-xl hover:scale-[1.02] glow-purple"
                    >
                        {buttonLabel}
                    </Link>
                </div>
            </Container>
        </section>
    );
}
