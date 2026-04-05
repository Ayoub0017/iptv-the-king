import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/schema";

const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
    title: "Blog IPTV — Guides, Astuces & Actualités",
    description:
        "Retrouvez nos guides d'installation, astuces d'optimisation et actualités sur l'IPTV. Tout pour profiter au maximum de votre abonnement IPTV The King.",
    alternates: {
        canonical: `${SITE_URL}/articles`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ArticlesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
