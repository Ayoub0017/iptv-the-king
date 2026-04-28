import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { SectionHeader } from "@/components/marketing";
import { SchemaMarkup } from "@/components/schema-markup";
import { webPageSchema, breadcrumbSchema, getSiteUrl } from "@/lib/schema";

const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
    title: "Blog — IPTV Guides, Tips & News",
    description:
        "Guides, tips and news to help you get the most out of your IPTV experience. Installation tutorials, player reviews, streaming tips and more.",
    alternates: {
        canonical: `${SITE_URL}/blog`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function BlogPage() {
    return (
        <>
            <SchemaMarkup
                schemas={[
                    webPageSchema({
                        name: "Blog — IPTV Guides, Tips & News",
                        description:
                            "Guides, tips and news to help you get the most out of your IPTV experience.",
                        url: `${SITE_URL}/blog`,
                    }),
                    breadcrumbSchema([
                        { name: "Home", url: SITE_URL },
                        { name: "Blog", url: `${SITE_URL}/blog` },
                    ]),
                ]}
            />

            <Section>
                <Container>
                    <SectionHeader
                        title="Blog"
                        subtitle="Guides, tips and news to help you get the most out of your IPTV experience."
                    />

                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <p className="text-text-muted text-sm">Articles coming soon.</p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
