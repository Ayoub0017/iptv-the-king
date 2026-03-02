import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog IPTV — Guides, Astuces & Actualités",
    description:
        "Retrouvez nos guides d'installation, astuces d'optimisation et actualités sur l'IPTV. Tout pour profiter au maximum de votre abonnement IPTV The King.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
