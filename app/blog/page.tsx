import { Container, Section } from "@/components/layout";
import { SectionHeader, BlogCard } from "@/components/marketing";
import { SchemaMarkup } from "@/components/schema-markup";
import {
    blogSchema,
    blogItemListSchema,
    breadcrumbSchema,
    webPageSchema,
    getSiteUrl,
} from "@/lib/schema";
import { getBlogPosts } from "@/lib/contentful";

const SITE_URL = getSiteUrl();

export const revalidate = 0; // Always fetch fresh from Contentful

export default async function BlogPage() {
    const allPosts = await getBlogPosts();

    return (
        <>
            <SchemaMarkup
                schemas={[
                    blogSchema(),
                    blogItemListSchema(allPosts),
                    webPageSchema({
                        name: "Blog IPTV — Guides, Astuces & Actualités",
                        description:
                            "Retrouvez nos guides d'installation, astuces d'optimisation et actualités sur l'IPTV. Tout pour profiter au maximum de votre abonnement IPTV The King.",
                        url: `${SITE_URL}/blog`,
                    }),
                    breadcrumbSchema([
                        { name: "Accueil", url: SITE_URL },
                        { name: "Blog", url: `${SITE_URL}/blog` },
                    ]),
                ]}
            />
            <Section>
                <Container>
                    <SectionHeader
                        title="Blog IPTV The King"
                        subtitle="Guides, astuces et actualités pour profiter au maximum de votre expérience IPTV."
                    />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {allPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                    {allPosts.length === 0 && (
                        <p className="text-center text-text-muted py-12">
                            Aucun article disponible pour le moment.
                        </p>
                    )}
                </Container>
            </Section>
        </>
    );
}
