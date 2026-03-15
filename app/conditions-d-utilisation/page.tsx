import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { SchemaMarkup } from "@/components/schema-markup";
import { webPageSchema, breadcrumbSchema, getSiteUrl } from "@/lib/schema";

const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
    title: "Conditions d'Utilisation",
    description:
        "Consultez les conditions générales d'utilisation d'IPTV The King. Règles d'usage, abonnements, paiements et responsabilités.",
};

export default function ConditionsDUtilisationPage() {
    const lastUpdated = "15 mars 2026";

    return (
        <>
            <SchemaMarkup
                schemas={[
                    webPageSchema({
                        name: "Conditions d'Utilisation — IPTV The King",
                        description:
                            "Conditions générales d'utilisation d'IPTV The King : règles d'usage, abonnements, paiements et responsabilités.",
                        url: `${SITE_URL}/conditions-d-utilisation`,
                    }),
                    breadcrumbSchema([
                        { name: "Accueil", url: SITE_URL },
                        { name: "Conditions d'Utilisation", url: `${SITE_URL}/conditions-d-utilisation` },
                    ]),
                ]}
            />

            {/* Hero */}
            <div className="border-b border-border bg-surface/50">
                <Container>
                    <div className="py-16 max-w-3xl">
                        <p className="text-sm font-medium text-brand-500 mb-3">Légal</p>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Conditions d&apos;Utilisation
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

                        <h2>1. Acceptation des conditions</h2>
                        <p>
                            En accédant au site <strong>iptvtheking.com</strong> et en utilisant les services d&apos;IPTV The King,
                            vous acceptez sans réserve les présentes conditions générales d&apos;utilisation (CGU). Si vous n&apos;acceptez pas
                            ces conditions, veuillez ne pas utiliser nos services.
                        </p>
                        <p>
                            Ces CGU peuvent être modifiées à tout moment. La version en vigueur est celle publiée sur cette page, datée en haut du document.
                        </p>

                        <h2>2. Description du service</h2>
                        <p>
                            IPTV The King propose un service d&apos;accès à des contenus audiovisuels par protocole Internet (IPTV),
                            comprenant notamment :
                        </p>
                        <ul>
                            <li>Plus de 10 000 chaînes en direct ;</li>
                            <li>Plus de 50 000 films et séries en vidéo à la demande ;</li>
                            <li>Une qualité de diffusion allant jusqu&apos;à la 4K ;</li>
                            <li>Un support client disponible 24h/24, 7j/7.</li>
                        </ul>

                        <h2>3. Accès au service et inscription</h2>
                        <p>
                            L&apos;accès au service est réservé aux personnes physiques majeures (18 ans et plus). En créant un compte,
                            vous garantissez fournir des informations exactes et les maintenir à jour.
                        </p>
                        <p>
                            Vous êtes seul responsable de la confidentialité de vos identifiants de connexion. Tout accès via votre compte
                            est réputé effectué par vous.
                        </p>

                        <h2>4. Abonnements et paiements</h2>
                        <p>
                            Les abonnements sont proposés sous différentes formules (mensuelle, trimestrielle, semestrielle, annuelle).
                            Les tarifs en vigueur sont ceux affichés sur notre site au moment de la souscription.
                        </p>
                        <ul>
                            <li>Les paiements sont traités de manière sécurisée par nos prestataires (Stripe, PayPal).</li>
                            <li>Tout abonnement souscrit est dû dans son intégralité, même en cas d&apos;utilisation partielle.</li>
                            <li>Les prix sont indiqués en euros (€) toutes taxes comprises (TTC).</li>
                            <li>IPTV The King se réserve le droit de modifier ses tarifs, avec notification préalable aux abonnés.</li>
                        </ul>

                        <h2>5. Droit de rétractation</h2>
                        <p>
                            Conformément à l&apos;article L. 221-28 du Code de la consommation, le droit de rétractation ne s&apos;applique pas
                            aux contenus numériques dont l&apos;exécution a commencé avec votre accord préalable exprès. En activant votre accès
                            immédiatement après paiement, vous renoncez expressément à votre droit de rétractation.
                        </p>
                        <p>
                            Toutefois, si vous rencontrez un problème technique avéré dès le début de votre abonnement, contactez notre support
                            à <a href="mailto:support@iptvtheking.com">support@iptvtheking.com</a> — nous examinerons votre situation au cas par cas.
                        </p>

                        <h2>6. Utilisation acceptable</h2>
                        <p>En utilisant nos services, vous vous engagez à :</p>
                        <ul>
                            <li>Ne pas partager vos accès avec des tiers non autorisés ;</li>
                            <li>Ne pas revendre, redistribuer ou sous-licencier le service ;</li>
                            <li>Ne pas tenter de contourner les mesures de protection techniques ;</li>
                            <li>Ne pas utiliser le service à des fins illégales ou contraires aux bonnes mœurs ;</li>
                            <li>Ne pas utiliser de VPN ou proxy pour accéder à des contenus géo-bloqués de manière abusive.</li>
                        </ul>
                        <p>
                            Tout manquement à ces règles peut entraîner la suspension ou la résiliation immédiate de votre abonnement,
                            sans remboursement.
                        </p>

                        <h2>7. Propriété intellectuelle</h2>
                        <p>
                            L&apos;ensemble des éléments du site iptvtheking.com (textes, images, logos, interface) sont la propriété exclusive
                            d&apos;IPTV The King ou font l&apos;objet de licences d&apos;utilisation. Toute reproduction, représentation ou utilisation
                            non autorisée est strictement interdite.
                        </p>

                        <h2>8. Disponibilité du service</h2>
                        <p>
                            IPTV The King s&apos;engage à maintenir une disponibilité du service de 99,9%. Des interruptions temporaires peuvent
                            néanmoins survenir pour des raisons de maintenance, mises à jour ou incidents techniques. Nous ne saurions être
                            tenus responsables d&apos;interruptions de service liées à des tiers (fournisseurs d&apos;accès Internet, fournisseurs de
                            contenu, cas de force majeure).
                        </p>

                        <h2>9. Limitation de responsabilité</h2>
                        <p>
                            IPTV The King ne saurait être tenu responsable des dommages indirects, pertes de données ou manques à gagner
                            résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser le service. Notre responsabilité est en tout état de
                            cause limitée au montant de l&apos;abonnement payé au cours des 3 derniers mois.
                        </p>

                        <h2>10. Résiliation</h2>
                        <p>
                            Vous pouvez résilier votre abonnement à tout moment en contactant notre support. La résiliation prend effet
                            à l&apos;échéance de la période en cours, sauf manquement grave aux présentes CGU auquel cas la résiliation est
                            immédiate.
                        </p>
                        <p>
                            IPTV The King se réserve le droit de résilier tout compte ne respectant pas les présentes conditions,
                            sans préavis ni remboursement.
                        </p>

                        <h2>11. Droit applicable et litiges</h2>
                        <p>
                            Les présentes CGU sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en
                            priorité. À défaut, les tribunaux compétents français seront seuls compétents.
                        </p>
                        <p>
                            Conformément à l&apos;article L. 612-1 du Code de la consommation, tout consommateur a le droit de recourir
                            gratuitement à un médiateur de la consommation.
                        </p>

                        <h2>12. Contact</h2>
                        <p>
                            Pour toute question relative aux présentes conditions, contactez-nous à :{" "}
                            <a href="mailto:support@iptvtheking.com">support@iptvtheking.com</a>.
                        </p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
