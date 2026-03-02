import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/layout";
import {
    HeroSection,
    PlanCard,
    TestimonialCard,
    CTASection,
    FAQAccordion,
    SectionHeader,
} from "@/components/marketing";
import { PLANS, TESTIMONIALS, FAQS } from "@/lib/constants";

const SLUG_MAP: Record<string, string> = {
    "3-months": "3mo",
    "6-months": "6mo",
    "12-months": "12mo",
    "24-months": "24mo",
};

interface PlanPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return Object.keys(SLUG_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PlanPageProps): Promise<Metadata> {
    const { slug } = await params;
    const plan = PLANS.find((p) => p.slug === slug);
    if (!plan) return {};
    return {
        title: `Abonnement IPTV ${plan.duration} — ${plan.price}€`,
        description: `Abonnement IPTV ${plan.duration} à seulement ${plan.pricePerMonth}€/mois. ${plan.features.length} fonctionnalités incluses. Accès à 10 000+ chaînes en qualité 4K.`,
    };
}

export default async function PlanPage({ params }: PlanPageProps) {
    const { slug } = await params;
    const plan = PLANS.find((p) => p.slug === slug);
    if (!plan) notFound();

    return (
        <>
            {/* Hero */}
            <HeroSection
                title={`Abonnement ${plan.duration}`}
                highlight={`${plan.price}€`}
                subtitle={`Seulement ${plan.pricePerMonth}€ par mois. Accès complet à toutes nos chaînes, films et séries en qualité 4K.`}
                primaryCTA={{ label: "Choisir ce Plan", href: "#" }}
                secondaryCTA={{ label: "Comparer les Plans", href: "#comparison" }}
            />

            {/* Full Feature List */}
            <Section>
                <Container>
                    <SectionHeader
                        title="Tout Ce Qui Est Inclus"
                        subtitle={`Votre abonnement ${plan.duration} comprend toutes ces fonctionnalités.`}
                    />
                    <div className="mx-auto max-w-2xl">
                        <div className="rounded-2xl border border-border bg-card p-8">
                            <ul className="space-y-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 mt-0.5 shrink-0 text-brand-500" />
                                        <span className="text-text-muted">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Comparison Table */}
            <Section id="comparison" className="bg-surface/30">
                <Container>
                    <SectionHeader
                        title="Comparer Tous les Abonnements"
                        subtitle="Choisissez le plan qui correspond le mieux à vos besoins."
                    />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {PLANS.map((p) => (
                            <PlanCard key={p.id} plan={p} />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Testimonials */}
            <Section>
                <Container>
                    <SectionHeader
                        title="Ce Que Disent Nos Clients"
                        subtitle="Rejoignez des milliers de clients satisfaits."
                    />
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {TESTIMONIALS.map((testimonial) => (
                            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <CTASection
                title="Prêt à Profiter du Meilleur IPTV ?"
                subtitle="Commencez dès maintenant et profitez d'un streaming illimité en qualité 4K."
                buttonLabel="Choisir ce Plan"
                buttonHref="#"
            />

            {/* FAQ */}
            <Section id="faq">
                <Container>
                    <SectionHeader
                        title="Questions Fréquentes"
                        subtitle="Tout ce que vous devez savoir avant de vous abonner."
                    />
                    <FAQAccordion faqs={FAQS} />
                </Container>
            </Section>
        </>
    );
}
