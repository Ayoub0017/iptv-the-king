import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import {
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
            {/* Hero — split layout */}
            <section className="relative overflow-hidden py-16 md:py-24">
                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-500/10 blur-[120px]" />
                </div>
                <Container className="relative z-10">
                    <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
                        {/* Left — image */}
                        <div className="w-full lg:w-1/2 shrink-0">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-500/10">
                                <Image
                                    src={plan.image}
                                    alt={plan.imageAlt}
                                    width={1080}
                                    height={1080}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        {/* Right — content */}
                        <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
                            {plan.badge && (
                                <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
                                    {plan.badge}
                                </span>
                            )}
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                                Abonnement IPTV{" "}
                                <span className="text-gradient-purple">{plan.duration}</span>
                            </h1>
                            <p className="text-lg text-text-muted leading-relaxed">
                                Seulement{" "}
                                <span className="font-semibold text-text-primary">{plan.pricePerMonth}€/mois</span>.{" "}
                                Accès complet à toutes nos chaînes, films et séries en qualité 4K.
                            </p>
                            <div className="flex items-end gap-2">
                                <span className="text-5xl font-extrabold text-text-primary">{plan.price}€</span>
                                <span className="mb-2 text-text-muted">/ {plan.duration.toLowerCase()}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par l'abonnement IPTV ${plan.duration} à ${plan.price}€. Pouvez-vous me donner plus d'informations ?`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-cta px-8 text-sm font-semibold text-cta-foreground transition-all hover:opacity-90 hover:shadow-xl hover:scale-[1.02] glow-purple"
                                >
                                    Test Gratuit
                                </a>
                                <Link
                                    href="#comparison"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface/50 px-8 text-sm font-semibold text-text-primary transition-all hover:bg-surface hover:border-brand-300"
                                >
                                    Comparer les Plans
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

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
