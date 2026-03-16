import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { SchemaMarkup } from "@/components/schema-markup";
import { webPageSchema, breadcrumbSchema, getSiteUrl } from "@/lib/schema";

const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
    title: "Politique de Confidentialité",
    description:
        "Consultez la politique de confidentialité d'IPTV The King. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.",
    alternates: {
        canonical: `${SITE_URL}/politique-de-confidentialite`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PolitiqueDeConfidentialitePage() {
    const lastUpdated = "15 mars 2026";

    return (
        <>
            <SchemaMarkup
                schemas={[
                    webPageSchema({
                        name: "Politique de Confidentialité — IPTV The King",
                        description:
                            "Politique de confidentialité d'IPTV The King : collecte, utilisation et protection de vos données personnelles.",
                        url: `${SITE_URL}/politique-de-confidentialite`,
                    }),
                    breadcrumbSchema([
                        { name: "Accueil", url: SITE_URL },
                        { name: "Politique de Confidentialité", url: `${SITE_URL}/politique-de-confidentialite` },
                    ]),
                ]}
            />

            {/* Hero */}
            <div className="border-b border-border bg-surface/50">
                <Container>
                    <div className="py-16 max-w-3xl">
                        <p className="text-sm font-medium text-brand-500 mb-3">Légal</p>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Politique de Confidentialité
                        </h1>
                        <p className="text-text-muted">
                            Dernière mise à jour : <time dateTime="2026-03-15">{lastUpdated}</time>
                        </p>
                    </div>
                </Container>
            </div>

            {/* Content */}
            <Section>
                <Container>
                    <div className="max-w-3xl prose prose-headings:text-text-primary prose-headings:font-semibold prose-p:text-text-secondary prose-li:text-text-secondary prose-strong:text-text-primary prose-a:text-brand-500 hover:prose-a:text-brand-400">

                        <h2>1. Qui sommes-nous ?</h2>
                        <p>
                            IPTV The King exploite le site <strong>iptvtheking.com</strong> et fournit des services d&apos;abonnement IPTV en France.
                            En tant que responsable du traitement, nous sommes engagés à protéger et respecter votre vie privée conformément au
                            Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                        </p>
                        <p>
                            Pour toute question relative à cette politique, vous pouvez nous contacter à :{" "}
                            <a href="mailto:support@iptvtheking.com">support@iptvtheking.com</a>.
                        </p>

                        <h2>2. Données collectées</h2>
                        <p>Nous collectons les catégories de données suivantes :</p>
                        <ul>
                            <li><strong>Données d&apos;identification :</strong> nom, prénom, adresse e-mail, lors de la création de votre compte ou de vos prises de contact.</li>
                            <li><strong>Données de paiement :</strong> ces données sont traitées directement par nos prestataires de paiement sécurisés (Stripe, PayPal). Nous ne stockons jamais vos numéros de carte bancaire.</li>
                            <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée des sessions — via des cookies et Google Analytics.</li>
                            <li><strong>Données de communication :</strong> messages envoyés via notre formulaire de contact.</li>
                        </ul>

                        <h2>3. Finalités du traitement</h2>
                        <p>Vos données sont utilisées pour :</p>
                        <ul>
                            <li>Gérer votre abonnement et votre accès au service ;</li>
                            <li>Traiter vos paiements et émettre vos factures ;</li>
                            <li>Assurer le support client ;</li>
                            <li>Améliorer nos services grâce à l&apos;analyse de l&apos;audience (Google Analytics) ;</li>
                            <li>Respecter nos obligations légales et réglementaires.</li>
                        </ul>

                        <h2>4. Base légale du traitement</h2>
                        <p>Nous traitons vos données sur les bases légales suivantes :</p>
                        <ul>
                            <li><strong>Exécution du contrat :</strong> pour la gestion de votre abonnement et des paiements.</li>
                            <li><strong>Intérêt légitime :</strong> pour l&apos;analyse de la navigation et l&apos;amélioration du service.</li>
                            <li><strong>Consentement :</strong> pour l&apos;envoi de communications marketing (si applicable).</li>
                            <li><strong>Obligation légale :</strong> pour la conservation des données de facturation.</li>
                        </ul>

                        <h2>5. Cookies</h2>
                        <p>
                            Notre site utilise des cookies pour améliorer votre expérience de navigation. Nous utilisons notamment Google Analytics
                            pour mesurer l&apos;audience de notre site. Ces cookies collectent des données de manière anonymisée.
                        </p>
                        <p>
                            Vous pouvez configurer votre navigateur pour refuser les cookies, bien que cela puisse affecter certaines
                            fonctionnalités du site.
                        </p>

                        <h2>6. Partage des données</h2>
                        <p>
                            Nous ne vendons jamais vos données personnelles à des tiers. Vos données peuvent être partagées uniquement avec :
                        </p>
                        <ul>
                            <li>Nos prestataires de paiement (Stripe, PayPal) pour le traitement des transactions ;</li>
                            <li>Google Analytics pour l&apos;analyse de l&apos;audience ;</li>
                            <li>Les autorités compétentes si la loi l&apos;exige.</li>
                        </ul>

                        <h2>7. Durée de conservation</h2>
                        <ul>
                            <li><strong>Données de compte :</strong> conservées pendant la durée de votre abonnement, puis 3 ans après sa résiliation.</li>
                            <li><strong>Données de facturation :</strong> 10 ans conformément aux obligations légales comptables.</li>
                            <li><strong>Données de navigation :</strong> 13 mois maximum (Google Analytics).</li>
                        </ul>

                        <h2>8. Vos droits</h2>
                        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                        <ul>
                            <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles ;</li>
                            <li><strong>Droit de rectification :</strong> corriger des données inexactes ;</li>
                            <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données ;</li>
                            <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré ;</li>
                            <li><strong>Droit d&apos;opposition :</strong> vous opposer à certains traitements ;</li>
                            <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données.</li>
                        </ul>
                        <p>
                            Pour exercer ces droits, contactez-nous à{" "}
                            <a href="mailto:support@iptvtheking.com">support@iptvtheking.com</a>. Nous répondrons dans un délai d&apos;un mois.
                            Vous avez également le droit d&apos;introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
                        </p>

                        <h2>9. Sécurité</h2>
                        <p>
                            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre
                            tout accès non autorisé, perte, destruction ou divulgation. Les transmissions de données sont chiffrées via le protocole HTTPS.
                        </p>

                        <h2>10. Modifications</h2>
                        <p>
                            Nous nous réservons le droit de modifier cette politique à tout moment. Toute modification substantielle vous sera
                            notifiée par e-mail ou via un avis visible sur notre site. La date de dernière mise à jour figure en haut de cette page.
                        </p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
