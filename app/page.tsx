import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Best IPTV Provider in the UK | 10,000+ Channels | IPTV The King",
  description:
    "The best IPTV provider in the UK with 10,000+ live channels, 50,000+ films and series in 4K quality. Flexible subscriptions, 24/7 support and 99.9% uptime.",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        schemas={[
          websiteSchema(),
          organizationSchema(),
          webPageSchema({
            name: "Best IPTV Provider in the UK | 10,000+ Channels | IPTV The King",
            description:
              "The best IPTV provider in the UK with 10,000+ live channels, 50,000+ films and series in 4K quality. Flexible subscriptions, 24/7 support and 99.9% uptime.",
            url: SITE_URL,
          }),
          breadcrumbSchema([{ name: "Home", url: SITE_URL }]),
        ]}
      />
      {/* Hero */}
      <HeroSection
        title="Best IPTV Provider in the UK"
        subtitle="Stream 10,000+ live channels and 50,000+ films in stunning 4K quality from anywhere in the UK. No contract, no buffering — just pure entertainment."
        primaryCTA={{ label: "View Subscriptions", href: "#plans" }}
        secondaryCTA={{ label: "Learn More", href: "/about" }}
      />

      {/* Stats Bar */}
      <StatsBar stats={STATS} />

      {/* Features */}
      <Section id="features">
        <Container>
          <SectionHeader
            title="Why Choose IPTV The King?"
            subtitle="We offer the best streaming experience with premium features that set us apart from the competition."
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
            title="Choose Your Subscription"
            subtitle="Flexible pricing with no hidden fees. All subscriptions include full access to our channels and VOD library."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
            title="What Our Customers Say"
            subtitle="Join thousands of satisfied customers who have chosen IPTV The King."
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
        title="Ready to Start Streaming?"
        subtitle="Join thousands of satisfied customers and discover the best IPTV service available. Free trial today."
        buttonLabel="Free Trial"
        buttonHref="#plans"
      />

      {/* FAQ */}
      <Section id="faq">
        <Container>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our IPTV service."
          />
          <FAQAccordion faqs={FAQS} />
        </Container>
      </Section>
    </>
  );
}
