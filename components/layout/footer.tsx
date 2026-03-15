import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-surface/50">
            <Container>
                <div className="py-16">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <Image
                                    src="/logo.png"
                                    alt="IPTV The King"
                                    width={32}
                                    height={32}
                                    className="rounded-lg"
                                />
                                <span className="text-base font-bold tracking-tight">
                                    IPTV The King
                                </span>
                            </Link>
                            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                                Service IPTV premium avec 10 000+ chaînes, qualité 4K et support 24/7. L&apos;expérience streaming ultime.
                            </p>
                        </div>

                        {/* Plans */}
                        <div>
                            <h4 className="text-sm font-semibold mb-4">Abonnements</h4>
                            <ul className="space-y-2.5">
                                {FOOTER_LINKS.plans.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-sm font-semibold mb-4">Entreprise</h4>
                            <ul className="space-y-2.5">
                                {FOOTER_LINKS.company.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-sm font-semibold mb-4">Support</h4>
                            <ul className="space-y-2.5">
                                {FOOTER_LINKS.support.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-12 pt-8 border-t border-border">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-xs text-text-muted">
                                © {currentYear} IPTV The King. Tous droits réservés.
                            </p>
                            <div className="flex items-center gap-6">
                                <Link href="#" className="text-xs text-text-muted hover:text-text-primary transition-colors">
                                    Politique de Confidentialité
                                </Link>
                                <Link href="#" className="text-xs text-text-muted hover:text-text-primary transition-colors">
                                    Conditions d&apos;Utilisation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
