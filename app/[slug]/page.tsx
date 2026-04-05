import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import {
    HeroSection,
    PlanCard,
    TestimonialCard,
    CTASection,
    FAQAccordion,
    SectionHeader,
} from "@/components/marketing";
import { SchemaMarkup } from "@/components/schema-markup";
import { PLANS, TESTIMONIALS } from "@/lib/constants";
import {
    productSchema,
    serviceSchema,
    breadcrumbSchema,
    webPageSchema,
    getSiteUrl,
} from "@/lib/schema";

const SITE_URL = getSiteUrl();
const WHATSAPP_NUMBER = "33753820307";

/** Valid plan slugs */
const PLAN_SLUGS = PLANS.map((p) => p.slug);

interface PlanPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return PLAN_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PlanPageProps): Promise<Metadata> {
    const { slug } = await params;
    const plan = PLANS.find((p) => p.slug === slug);
    if (!plan) return {};
    return {
        title: `Abonnement IPTV ${plan.duration} à ${plan.price}€ — Meilleur Prix`,
        description: `Profitez de l'abonnement IPTV ${plan.duration} à seulement ${plan.pricePerMonth}€/mois. ${plan.features.length} fonctionnalités incluses : 10 000+ chaînes en direct, films et séries en qualité 4K. Sans engagement.`,
        alternates: {
            canonical: `${SITE_URL}/${slug}`,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function PlanPage({ params }: PlanPageProps) {
    const { slug } = await params;
    const plan = PLANS.find((p) => p.slug === slug);
    if (!plan) notFound();

    return (
        <>
            <SchemaMarkup
                schemas={[
                    productSchema(plan),
                    serviceSchema(plan),
                    webPageSchema({
                        name: `Abonnement IPTV ${plan.duration} à ${plan.price}€ — Meilleur Prix`,
                        description: `Profitez de l'abonnement IPTV ${plan.duration} à seulement ${plan.pricePerMonth}€/mois. ${plan.features.length} fonctionnalités incluses.`,
                        url: `${SITE_URL}/${plan.slug}`,
                    }),
                    breadcrumbSchema([
                        { name: "Accueil", url: SITE_URL },
                        { name: "Abonnements", url: `${SITE_URL}/#plans` },
                        { name: `Abonnement ${plan.duration}`, url: `${SITE_URL}/${plan.slug}` },
                    ]),
                ]}
            />
            {/* Hero */}
            <HeroSection
                title={`Abonnement ${plan.duration}`}
                highlight={`${plan.price}€`}
                subtitle={`Seulement ${plan.pricePerMonth}€ par mois. Accès complet à toutes nos chaînes, films et séries en qualité 4K.`}
                primaryCTA={{ label: "Test Gratuit", href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par l'abonnement IPTV ${plan.duration} à ${plan.price}€. Pouvez-vous me donner plus d'informations ?`)}` }}
                secondaryCTA={{ label: "Comparer les Plans", href: "#comparison" }}
            />

            {/* Full Feature List */}
            <Section>
                <Container>
                    <SectionHeader
                        title="Tout Ce Qui Est Inclus"
                        subtitle={`Votre abonnement ${plan.duration} comprend toutes ces fonctionnalités.`}
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {plan.featureDetails.map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-brand-300/50 hover:shadow-lg hover:shadow-brand-500/5"
                            >
                                <h3 className="mb-2 text-base font-semibold text-text-primary">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-text-muted">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Why Choose */}
            <Section className="bg-surface/30">
                <Container>
                    <SectionHeader
                        title={`Pourquoi Choisir un Abonnement IPTV ${plan.duration} ?`}
                        subtitle="Voici les raisons pour lesquelles cette formule est faite pour vous."
                    />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {plan.whyChoose.map((reason) => (
                            <div
                                key={reason.title}
                                className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-brand-300/50 hover:shadow-lg hover:shadow-brand-500/5"
                            >
                                <h3 className="mb-3 text-lg font-semibold text-text-primary">
                                    {reason.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-text-muted">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
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
                buttonLabel="Test Gratuit"
                buttonHref={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par l'abonnement IPTV ${plan.duration} à ${plan.price}€. Pouvez-vous me donner plus d'informations ?`)}`}
            />

            {/* FAQ */}
            <Section id="faq">
                <Container>
                    <SectionHeader
                        title="Questions Fréquentes"
                        subtitle="Tout ce que vous devez savoir avant de vous abonner."
                    />
                    <FAQAccordion faqs={plan.planFaqs} />
                </Container>
            </Section>
        </>
    );
}
