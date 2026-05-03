import type { Metadata } from "next";
import { Mail, Clock, MessageCircle } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { SectionHeader, ContactForm } from "@/components/marketing";
import { SchemaMarkup } from "@/components/schema-markup";
import {
    contactOrganizationSchema,
    webPageSchema,
    breadcrumbSchema,
    getSiteUrl,
} from "@/lib/schema";

const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
    title: "Contact Us | 24/7 Customer Support",
    description:
        "Need help with your IPTV subscription? Contact the IPTV The King team by email, live chat or WhatsApp. Customer support available 24 hours a day, 7 days a week.",
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

const CONTACT_INFO = [
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description: "Message us on WhatsApp",
        detail: "Instant response — available 24/7",
        href: "https://wa.me/33753820307",
    },
    {
        icon: Mail,
        title: "Email",
        description: "support@iptvtheking.com",
        detail: "Response within 24 hours",
        href: "mailto:support@iptvtheking.com",
    },
    {
        icon: Clock,
        title: "Support Hours",
        description: "24/7 — Every day",
        detail: "We are always available",
        href: undefined,
    },
];

export default function ContactPage() {
    return (
        <>
            <SchemaMarkup
                schemas={[
                    webPageSchema({
                        name: "Contact Us | 24/7 Customer Support",
                        description:
                            "Need help with your IPTV subscription? Contact the IPTV The King team by email, live chat or WhatsApp. Support available 24/7.",
                        url: `${SITE_URL}/contact`,
                        type: "ContactPage",
                    }),
                    contactOrganizationSchema(),
                    breadcrumbSchema([
                        { name: "Home", url: SITE_URL },
                        { name: "Contact", url: `${SITE_URL}/contact` },
                    ]),
                ]}
            />
            <Section>
                <Container>
                    <SectionHeader
                        title="Contact Us"
                        subtitle="Have a question? Need help? Our team is here for you. Fill in the form below or use our other contact methods."
                    />

                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* Form */}
                        <div>
                            <ContactForm />
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col justify-center gap-8">
                            {CONTACT_INFO.map((item) => {
                                const content = (
                                    <>
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold">{item.title}</h3>
                                            <p className="mt-1 text-sm text-text-primary">{item.description}</p>
                                            <p className="mt-0.5 text-xs text-text-muted">{item.detail}</p>
                                        </div>
                                    </>
                                );

                                const className = "flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand-300/50 hover:shadow-lg hover:shadow-brand-500/5";

                                return item.href ? (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={className}
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div key={item.title} className={className}>
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
