import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { SchemaMarkup } from "@/components/schema-markup";
import { webPageSchema, breadcrumbSchema, getSiteUrl } from "@/lib/schema";

const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read the IPTV The King Privacy Policy. Find out how we collect, use and protect your personal data.",
    alternates: {
        canonical: `${SITE_URL}/privacy-policy`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    const lastUpdated = "15 March 2026";

    return (
        <>
            <SchemaMarkup
                schemas={[
                    webPageSchema({
                        name: "Privacy Policy — IPTV The King",
                        description:
                            "Privacy Policy for IPTV The King: how we collect, use and protect your personal data.",
                        url: `${SITE_URL}/privacy-policy`,
                    }),
                    breadcrumbSchema([
                        { name: "Home", url: SITE_URL },
                        { name: "Privacy Policy", url: `${SITE_URL}/privacy-policy` },
                    ]),
                ]}
            />

            {/* Hero */}
            <div className="border-b border-border bg-surface/50">
                <Container>
                    <div className="py-16 max-w-3xl">
                        <p className="text-sm font-medium text-brand-500 mb-3">Legal</p>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Privacy Policy
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

                        <h2>1. Who We Are</h2>
                        <p>
                            IPTV The King operates the website <strong>iptvtheking.com</strong> and provides IPTV subscription services in the United Kingdom.
                            As data controller, we are committed to protecting and respecting your privacy in accordance with the
                            UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                        </p>
                        <p>
                            For any questions regarding this policy, please contact us at:{" "}
                            <a href="mailto:support@iptvtheking.com">support@iptvtheking.com</a>.
                        </p>

                        <h2>2. Data We Collect</h2>
                        <p>We collect the following categories of data:</p>
                        <ul>
                            <li><strong>Identity data:</strong> name and email address, when you create an account or get in touch with us.</li>
                            <li><strong>Payment data:</strong> this data is processed directly by our secure payment providers (Stripe, PayPal). We never store your card numbers.</li>
                            <li><strong>Browsing data:</strong> IP address, browser type, pages visited, session duration — via cookies and Google Analytics.</li>
                            <li><strong>Communications data:</strong> messages sent via our contact form.</li>
                        </ul>

                        <h2>3. Purposes of Processing</h2>
                        <p>Your data is used to:</p>
                        <ul>
                            <li>Manage your subscription and access to the service;</li>
                            <li>Process your payments and issue invoices;</li>
                            <li>Provide customer support;</li>
                            <li>Improve our services through audience analysis (Google Analytics);</li>
                            <li>Comply with our legal and regulatory obligations.</li>
                        </ul>

                        <h2>4. Legal Basis for Processing</h2>
                        <p>We process your data on the following legal bases:</p>
                        <ul>
                            <li><strong>Performance of a contract:</strong> for managing your subscription and payments.</li>
                            <li><strong>Legitimate interests:</strong> for analysing browsing behaviour and improving the service.</li>
                            <li><strong>Consent:</strong> for sending marketing communications (where applicable).</li>
                            <li><strong>Legal obligation:</strong> for retaining billing data.</li>
                        </ul>

                        <h2>5. Cookies</h2>
                        <p>
                            Our site uses cookies to improve your browsing experience. We use Google Analytics
                            to measure site traffic. These cookies collect data in an anonymised manner.
                        </p>
                        <p>
                            You can configure your browser to refuse cookies, although this may affect certain
                            features of the site.
                        </p>

                        <h2>6. Data Sharing</h2>
                        <p>
                            We never sell your personal data to third parties. Your data may be shared only with:
                        </p>
                        <ul>
                            <li>Our payment providers (Stripe, PayPal) for processing transactions;</li>
                            <li>Google Analytics for audience analysis;</li>
                            <li>The competent authorities where required by law.</li>
                        </ul>

                        <h2>7. Retention Periods</h2>
                        <ul>
                            <li><strong>Account data:</strong> retained for the duration of your subscription, then 3 years after cancellation.</li>
                            <li><strong>Billing data:</strong> 6 years in accordance with UK legal accounting obligations.</li>
                            <li><strong>Browsing data:</strong> up to 14 months (Google Analytics).</li>
                        </ul>

                        <h2>8. Your Rights</h2>
                        <p>Under the UK GDPR, you have the following rights:</p>
                        <ul>
                            <li><strong>Right of access:</strong> obtain a copy of your personal data;</li>
                            <li><strong>Right to rectification:</strong> correct inaccurate data;</li>
                            <li><strong>Right to erasure:</strong> request deletion of your data;</li>
                            <li><strong>Right to data portability:</strong> receive your data in a structured format;</li>
                            <li><strong>Right to object:</strong> object to certain types of processing;</li>
                            <li><strong>Right to restriction:</strong> restrict the processing of your data.</li>
                        </ul>
                        <p>
                            To exercise these rights, contact us at{" "}
                            <a href="mailto:support@iptvtheking.com">support@iptvtheking.com</a>. We will respond within one month.
                            You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
                        </p>

                        <h2>9. Security</h2>
                        <p>
                            We implement appropriate technical and organisational measures to protect your data against
                            unauthorised access, loss, destruction or disclosure. Data transmissions are encrypted via the HTTPS protocol.
                        </p>

                        <h2>10. Changes</h2>
                        <p>
                            We reserve the right to amend this policy at any time. Any material changes will be
                            notified to you by email or via a prominent notice on our site. The date of last update appears at the top of this page.
                        </p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
