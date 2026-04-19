"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "./container";
import { NAV_LINKS, PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PLAN_DROPDOWN = PLANS.map((p) => ({
    label: `Abonnement ${p.duration}`,
    href: `/${p.slug}`,
    price: `${p.price} DH`,
}));

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [plansOpen, setPlansOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/logo.png"
                            alt="IPTV The King"
                            width={36}
                            height={36}
                            className="rounded-lg transition-transform group-hover:scale-105"
                        />
                        <span className="text-lg font-bold tracking-tight">
                            IPTV <span className="text-gradient-purple">The King</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
                        {NAV_LINKS.map((link) =>
                            link.label === "Abonnements" ? (
                                /* Abonnements with dropdown */
                                <div
                                    key={link.href}
                                    className="relative"
                                    onMouseEnter={() => setPlansOpen(true)}
                                    onMouseLeave={() => setPlansOpen(false)}
                                >
                                    <button
                                        className="flex items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                                        aria-expanded={plansOpen}
                                        aria-haspopup="true"
                                    >
                                        {link.label}
                                        <ChevronDown
                                            className={cn(
                                                "h-3.5 w-3.5 transition-transform duration-200",
                                                plansOpen && "rotate-180"
                                            )}
                                        />
                                    </button>

                                    {/* Dropdown */}
                                    <div
                                        className={cn(
                                            "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                                            plansOpen
                                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                                : "opacity-0 -translate-y-1 pointer-events-none"
                                        )}
                                    >
                                        <div className="w-64 rounded-xl border border-border bg-background/95 backdrop-blur-xl p-2 shadow-xl shadow-brand-500/5">
                                            {PLAN_DROPDOWN.map((plan) => (
                                                <Link
                                                    key={plan.href}
                                                    href={plan.href}
                                                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-surface group/item"
                                                >
                                                    <span className="font-medium text-text-muted group-hover/item:text-text-primary transition-colors">
                                                        {plan.label}
                                                    </span>
                                                    <span className="text-xs font-semibold text-brand-500">
                                                        {plan.price}
                                                    </span>
                                                </Link>
                                            ))}
                                            <div className="my-1 h-px bg-border" />
                                            <Link
                                                href="/#plans"
                                                className="flex items-center justify-center rounded-lg px-3 py-2  text-sm font-medium text-brand-500 transition-colors hover:bg-brand-50"
                                            >
                                                Comparer tous les plans
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://wa.me/33753820307?text=Bonjour%2C%20je%20souhaite%20tester%20votre%20service%20IPTV%20gratuitement."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-cta px-5 text-sm font-semibold text-cta-foreground transition-all hover:opacity-90 hover:shadow-lg"
                        >
                            Test Gratuit
                        </a>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-text-muted hover:text-text-primary transition-colors"
                            aria-label="Ouvrir le menu"
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div
                    className={cn(
                        "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
                        mobileOpen ? "max-h-[500px] pb-6" : "max-h-0"
                    )}
                >
                    <nav className="flex flex-col gap-1 pt-2" aria-label="Navigation mobile">
                        {NAV_LINKS.map((link) =>
                            link.label === "Abonnements" ? (
                                <div key={link.href}>
                                    <button
                                        onClick={() => setPlansOpen(!plansOpen)}
                                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface hover:text-text-primary"
                                    >
                                        {link.label}
                                        <ChevronDown
                                            className={cn(
                                                "h-4 w-4 transition-transform duration-200",
                                                plansOpen && "rotate-180"
                                            )}
                                        />
                                    </button>
                                    <div
                                        className={cn(
                                            "overflow-hidden transition-all duration-200",
                                            plansOpen ? "max-h-60" : "max-h-0"
                                        )}
                                    >
                                        <div className="pl-4 space-y-1 py-1">
                                            {PLAN_DROPDOWN.map((plan) => (
                                                <Link
                                                    key={plan.href}
                                                    href={plan.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:bg-surface hover:text-text-primary"
                                                >
                                                    <span>{plan.label}</span>
                                                    <span className="text-xs font-semibold text-brand-500">{plan.price}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface hover:text-text-primary"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                        <a
                            href="https://wa.me/33753820307?text=Bonjour%2C%20je%20souhaite%20tester%20votre%20service%20IPTV%20gratuitement."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 flex h-10 items-center justify-center rounded-full bg-cta text-sm font-semibold text-cta-foreground transition-all hover:opacity-90"
                        >
                            Test Gratuit
                        </a>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
