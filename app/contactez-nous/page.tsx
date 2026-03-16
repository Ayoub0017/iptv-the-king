import type { Metadata } from "next";
import { Mail, Clock, MessageCircle, Phone } from "lucide-react";
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
    title: "Contactez-Nous — Support Client 24/7",
    description:
        "Besoin d'aide avec votre abonnement IPTV ? Contactez l'équipe IPTV The King par email, chat en direct ou WhatsApp. Support client disponible 24h/24 et 7j/7.",
    alternates: {
        canonical: `${SITE_URL}/contactez-nous`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

const CONTACT_INFO = [
    {
        icon: Phone,
        title: "Téléphone / WhatsApp",
        description: "+33 7 53 82 03 07",
        detail: "Disponible 24/7 sur WhatsApp",
        href: "https://wa.me/33753820307",
    },
    {
        icon: Mail,
        title: "Email",
        description: "support@iptvtheking.com",
        detail: "Réponse sous 24 heures",
        href: "mailto:support@iptvtheking.com",
    },
    {
        icon: Clock,
        title: "Horaires de Support",
        description: "24/7 — Tous les jours",
        detail: "Nous sommes toujours disponibles",
        href: undefined,
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description: "+33 7 53 82 03 07",
        detail: "Réponse instantanée",
        href: "https://wa.me/33753820307",
    },
];

export default function ContactPage() {
    return (
        <>
            <SchemaMarkup
                schemas={[
                    webPageSchema({
                        name: "Contactez-Nous — Support Client 24/7",
                        description:
                            "Besoin d'aide avec votre abonnement IPTV ? Contactez l'équipe IPTV The King par email, chat en direct ou WhatsApp. Support client disponible 24h/24 et 7j/7.",
                        url: `${SITE_URL}/contactez-nous`,
                        type: "ContactPage",
                    }),
                    contactOrganizationSchema(),
                    breadcrumbSchema([
                        { name: "Accueil", url: SITE_URL },
                        { name: "Contact", url: `${SITE_URL}/contactez-nous` },
                    ]),
                ]}
            />
            <Section>
                <Container>
                    <SectionHeader
                        title="Contactez-Nous"
                        subtitle="Une question ? Besoin d'aide ? Notre équipe est là pour vous. Remplissez le formulaire ci-dessous ou utilisez nos autres moyens de contact."
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
