import { Container, Section } from "@/components/layout";
import {
  HeroSection,
  StatsBar,
  FeatureCard,
  PlanCard,
  TestimonialCard,
  CTASection,
  FAQAccordion,
  SectionHeader,
} from "@/components/marketing";
import { SchemaMarkup } from "@/components/schema-markup";
import { FEATURES, STATS, PLANS, TESTIMONIALS, FAQS } from "@/lib/constants";
import {
  websiteSchema,
  organizationSchema,
  webPageSchema,
  breadcrumbSchema,
  getSiteUrl,
} from "@/lib/schema";

const SITE_URL = getSiteUrl();

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        schemas={[
          websiteSchema(),
          organizationSchema(),
          webPageSchema({
            name: "Meilleur IPTV en France | 10 000+ Chaînes | IPTV The King",
            description:
              "Le meilleur service IPTV en France avec 10 000+ chaînes en direct, 50 000+ films et séries en qualité 4K. Abonnements flexibles, support 24/7 et 99.9% de disponibilité.",
            url: SITE_URL,
          }),
          breadcrumbSchema([{ name: "Accueil", url: SITE_URL }]),
        ]}
      />
      {/* Hero */}
      <HeroSection
        title="Meilleur IPTV"
        highlight="en France"
        subtitle="Streamez 10 000+ chaînes en direct et 50 000+ films en qualité 4K époustouflante. Sans engagement, sans coupure — que du divertissement pur."
        primaryCTA={{ label: "Voir les Abonnements", href: "#plans" }}
        secondaryCTA={{ label: "En Savoir Plus", href: "/a-propos" }}
      />

      {/* Stats Bar */}
      <StatsBar stats={STATS} />

      {/* Features */}
      <Section id="features">
        <Container>
          <SectionHeader
            title="Pourquoi Choisir IPTV The King ?"
            subtitle="Nous offrons la meilleure expérience de streaming avec des fonctionnalités premium qui nous distinguent de la concurrence."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Plans */}
      <Section id="plans" className="bg-surface/30">
        <Container>
          <SectionHeader
            title="Choisissez Votre Abonnement"
            subtitle="Des tarifs flexibles sans frais cachés. Tous les abonnements incluent l'accès complet à nos chaînes et notre bibliothèque VOD."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <SectionHeader
            title="Ce Que Disent Nos Clients"
            subtitle="Rejoignez des milliers de clients satisfaits qui ont fait le choix d'IPTV The King."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title="Prêt à Commencer le Streaming ?"
        subtitle="Rejoignez des milliers de clients satisfaits et découvrez le meilleur service IPTV disponible. Essai gratuit dès aujourd'hui."
        buttonLabel="Test Gratuit"
        buttonHref="#plans"
      />

      {/* FAQ */}
      <Section id="faq">
        <Container>
          <SectionHeader
            title="Questions Fréquemment Posées"
            subtitle="Tout ce que vous devez savoir sur notre service IPTV."
          />
          <FAQAccordion faqs={FAQS} />
        </Container>
      </Section>
    </>
  );
}
