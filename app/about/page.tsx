import type { Metadata } from "next";
import { Tv, Heart, Lightbulb, Eye, MapPin } from "lucide-react";
import { Container, Section } from "@/components/layout";
import {
    HeroSection,
    StatsBar,
    FeatureCard,
    CTASection,
    SectionHeader,
} from "@/components/marketing";
import { SchemaMarkup } from "@/components/schema-markup";
import { STATS, COMPANY_VALUES } from "@/lib/constants";
import {
    organizationSchema,
    webPageSchema,
    breadcrumbSchema,
    getSiteUrl,
} from "@/lib/schema";

const VALUE_ICONS = [Tv, Heart, Lightbulb, Eye];
const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
    title: "About | Our Mission & Story",
    description:
        "Discover the story of IPTV The King, the best IPTV provider in the UK. Our mission: to make premium streaming accessible to everyone with 10,000+ channels in 4K.",
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutPage() {
    return (
        <>
            <SchemaMarkup
                schemas={[
                    webPageSchema({
                        name: "About | Our Mission & Story",
                        description:
                            "Discover the story of IPTV The King, the best IPTV provider in the UK. Our mission: to make premium streaming accessible to everyone with 10,000+ channels in 4K.",
                        url: `${SITE_URL}/about`,
                        type: "AboutPage",
                    }),
                    organizationSchema({
                        description:
                            "IPTV The King is the best IPTV provider in the UK, offering 10,000+ live channels and 50,000+ films and series in 4K quality.",
                        address: {
                            street: "76 Guild Street",
                            city: "London",
                            postalCode: "EC4M 2WW",
                            country: "GB",
                        },
                    }),
                    breadcrumbSchema([
                        { name: "Home", url: SITE_URL },
                        { name: "About", url: `${SITE_URL}/about` },
                    ]),
                ]}
            />
            {/* Hero */}
            <HeroSection
                title="About IPTV The King"
                subtitle="IPTV The King is a UK IPTV provider renowned for the quality and reliability of its services. With over 10,000 live channels, 50,000 films and series in 4K quality, and support available 7 days a week, we stand as the number one choice for anyone seeking a premium streaming experience. Our commitment to our customers and our cutting-edge infrastructure make IPTV The King the best IPTV provider in the UK."
                primaryCTA={{ label: "View Our Plans", href: "/#plans" }}
            />

            {/* Stats */}
            <StatsBar stats={STATS} />

            {/* Values */}
            <Section>
                <Container>
                    <SectionHeader
                        title="Our Values"
                        subtitle="The principles that guide every decision we make."
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

            {/* Contact & Location */}
            <Section>
                <Container>
                    <SectionHeader
                        title="Our Location"
                        subtitle="Visit us at our London office."
                    />
                    <div className="mx-auto flex max-w-md justify-center">
                        <div className="flex w-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand-300/50 hover:shadow-lg hover:shadow-brand-500/5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold">Our Address</h3>
                                <p className="mt-1 text-sm text-text-primary">76 Guild Street</p>
                                <p className="text-sm text-text-primary">London, EC4M 2WW</p>
                                <p className="text-sm text-text-primary">United Kingdom</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <CTASection
                title="Join the IPTV The King Family"
                subtitle="Discover why thousands of customers trust us for their daily entertainment."
                buttonLabel="Free Trial"
                buttonHref="/#plans"
            />
        </>
    );
}
