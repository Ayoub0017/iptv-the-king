import type { Metadata } from "next";
import { Tv, Heart, Lightbulb, Eye } from "lucide-react";
import { Container, Section } from "@/components/layout";
import {
    HeroSection,
    StatsBar,
    FeatureCard,
    CTASection,
    SectionHeader,
} from "@/components/marketing";
import { STATS, COMPANY_VALUES } from "@/lib/constants";

const VALUE_ICONS = [Tv, Heart, Lightbulb, Eye];

export const metadata: Metadata = {
    title: "À Propos — Notre Mission & Notre Histoire",
    description:
        "Découvrez l'histoire d'IPTV The King, le meilleur fournisseur IPTV en France. Notre mission : rendre le streaming premium accessible à tous avec 10 000+ chaînes en 4K.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <HeroSection
                title="Le Meilleur IPTV,"
                highlight="par Passion"
                subtitle="Nous sommes une équipe passionnée par le streaming de qualité. Notre mission : rendre le divertissement premium accessible à tous, partout en France."
                primaryCTA={{ label: "Voir nos Abonnements", href: "/#plans" }}
            />

            {/* Stats */}
            <StatsBar stats={STATS} />

            {/* Values */}
            <Section>
                <Container>
                    <SectionHeader
                        title="Nos Valeurs"
                        subtitle="Les principes qui guident chaque décision que nous prenons."
                    />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {COMPANY_VALUES.map((value, index) => (
                            <FeatureCard
                                key={value.title}
                                icon={VALUE_ICONS[index]}
                                title={value.title}
                                description={value.description}
                            />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <CTASection
                title="Rejoignez la Famille IPTV The King"
                subtitle="Découvrez pourquoi des milliers de clients nous font confiance pour leur divertissement quotidien."
                buttonLabel="Commencer Maintenant"
                buttonHref="/#plans"
            />
        </>
    );
}
