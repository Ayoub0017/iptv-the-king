import { Container } from "@/components/layout";
import type { Stat } from "@/lib/constants";

interface StatsBarProps {
    stats: Stat[];
}

export function StatsBar({ stats }: StatsBarProps) {
    return (
        <section className="border-y border-border bg-surface/30 py-12">
            <Container>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl font-extrabold tracking-tight text-gradient-purple md:text-4xl">
                                {stat.value}
                            </div>
                            <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
