import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { SchemaMarkup } from "@/components/schema-markup";
import { webPageSchema, breadcrumbSchema, getSiteUrl } from "@/lib/schema";

const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
    title: "Terms of Use",
    description:
        "Read the IPTV The King Terms of Use. Usage rules, subscriptions, payments and responsibilities.",
    alternates: {
        canonical: `${SITE_URL}/terms-of-use`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsOfUsePage() {
    const lastUpdated = "15 March 2026";

    return (
        <>
            <SchemaMarkup
                schemas={[
                    webPageSchema({
                        name: "Terms of Use — IPTV The King",
                        description:
                            "Terms of Use for IPTV The King: usage rules, subscriptions, payments and responsibilities.",
                        url: `${SITE_URL}/terms-of-use`,
                    }),
                    breadcrumbSchema([
                        { name: "Home", url: SITE_URL },
                        { name: "Terms of Use", url: `${SITE_URL}/terms-of-use` },
                    ]),
                ]}
            />

            {/* Hero */}
            <div className="border-b border-border bg-surface/50">
                <Container>
                    <div className="py-16 max-w-3xl">
                        <p className="text-sm font-medium text-brand-500 mb-3">Legal</p>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Terms of Use
                        </h1>
                        <p className="text-text-muted">
                            Last updated: <time dateTime="2026-03-15">{lastUpdated}</time>
                        </p>
                    </div>
                </Container>
            </div>

            {/* Content */}
            <Section>
                <Container>
                    <div className="max-w-3xl prose prose-headings:text-text-primary prose-headings:font-semibold prose-p:text-text-secondary prose-li:text-text-secondary prose-strong:text-text-primary prose-a:text-brand-500 hover:prose-a:text-brand-400">

                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing <strong>iptvtheking.com</strong> and using the services of IPTV The King,
                            you agree without reservation to these Terms of Use. If you do not accept these terms,
                            please do not use our services.
                        </p>
                        <p>
                            These Terms may be amended at any time. The version in force is the one published on this page, dated at the top of the document.
                        </p>

                        <h2>2. Description of Service</h2>
                        <p>
                            IPTV The King provides access to audiovisual content via Internet Protocol (IPTV),
                            including:
                        </p>
                        <ul>
                            <li>Over 10,000 live channels;</li>
                            <li>Over 50,000 films and series on demand;</li>
                            <li>Streaming quality up to 4K Ultra HD;</li>
                            <li>Customer support available 24 hours a day, 7 days a week.</li>
                        </ul>

                        <h2>3. Access to Service and Registration</h2>
                        <p>
                            Access to the service is reserved for individuals aged 18 or over. By creating an account,
                            you confirm that the information you provide is accurate and will be kept up to date.
                        </p>
                        <p>
                            You are solely responsible for maintaining the confidentiality of your login credentials. Any access via your account is deemed to have been carried out by you.
                        </p>

                        <h2>4. Subscriptions and Payments</h2>
                        <p>
                            Subscriptions are available in various plans (monthly, quarterly, bi-annual, annual).
                            The prices in force are those displayed on our site at the time of purchase.
                        </p>
                        <ul>
                            <li>Payments are processed securely by our payment providers (Stripe, PayPal).</li>
                            <li>Any subscription purchased is due in full, even if partially used.</li>
                            <li>Prices are quoted in pounds sterling (£).</li>
                            <li>IPTV The King reserves the right to amend its pricing, with prior notice to subscribers.</li>
                        </ul>

                        <h2>5. Cancellation and Refunds</h2>
                        <p>
                            Under the Consumer Contracts Regulations 2013, you have a 14-day cooling-off period from the date of purchase. However, by activating your access immediately after payment, you expressly acknowledge that the service has begun and you waive your right to cancel under the cooling-off period.
                        </p>
                        <p>
                            If you experience a verified technical fault from the start of your subscription, please contact our support team at <a href="mailto:support@iptvtheking.com">support@iptvtheking.com</a> — we will review your situation on a case-by-case basis.
                        </p>

                        <h2>6. Acceptable Use</h2>
                        <p>By using our services, you agree to:</p>
                        <ul>
                            <li>Not share your access credentials with unauthorised third parties;</li>
                            <li>Not resell, redistribute or sub-license the service;</li>
                            <li>Not attempt to circumvent technical protection measures;</li>
                            <li>Not use the service for any illegal or inappropriate purpose;</li>
                            <li>Not use a VPN or proxy to access geo-blocked content in an abusive manner.</li>
                        </ul>
                        <p>
                            Any breach of these rules may result in the immediate suspension or termination of your subscription without refund.
                        </p>

                        <h2>7. Intellectual Property</h2>
                        <p>
                            All elements of the iptvtheking.com website (text, images, logos, interface) are the exclusive property of IPTV The King or are subject to usage licences. Any unauthorised reproduction, representation or use is strictly prohibited.
                        </p>

                        <h2>8. Service Availability</h2>
                        <p>
                            IPTV The King endeavours to maintain 99.9% service uptime. Temporary interruptions may nonetheless occur for maintenance, updates or technical incidents. We cannot be held liable for service interruptions caused by third parties (internet service providers, content providers, force majeure events).
                        </p>

                        <h2>9. Limitation of Liability</h2>
                        <p>
                            IPTV The King shall not be liable for any indirect damages, data loss or loss of earnings resulting from the use or inability to use the service. Our liability is in any event limited to the amount of the subscription paid in the last 3 months.
                        </p>

                        <h2>10. Termination</h2>
                        <p>
                            You may cancel your subscription at any time by contacting our support team. Cancellation takes effect at the end of the current period, unless there is a serious breach of these Terms, in which case termination is immediate.
                        </p>
                        <p>
                            IPTV The King reserves the right to terminate any account that does not comply with these Terms, without notice or refund.
                        </p>

                        <h2>11. Governing Law and Disputes</h2>
                        <p>
                            These Terms are governed by English law. In the event of a dispute, an amicable resolution will be sought in the first instance. Failing that, the courts of England and Wales shall have exclusive jurisdiction.
                        </p>
                        <p>
                            You also have the right to use an Alternative Dispute Resolution (ADR) scheme. For further information, please visit the UK government&apos;s ADR guidance at <a href="https://www.gov.uk/alternative-dispute-resolution-adr-and-consumer-disputes" target="_blank" rel="noopener noreferrer">gov.uk</a>.
                        </p>

                        <h2>12. Contact</h2>
                        <p>
                            For any questions regarding these Terms, please contact us at:{" "}
                            <a href="mailto:support@iptvtheking.com">support@iptvtheking.com</a>.
                        </p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
