"use client";

import { useEffect, useState } from "react";

export interface TocHeading {
    level: number;
    text: string;
    id: string;
}

export function TableOfContents({ headings }: { headings: TocHeading[] }) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                        break;
                    }
                }
            },
            { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
        );

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <nav className="rounded-2xl border border-border bg-surface p-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">
                Table des matières
            </p>
            <ul className="space-y-1">
                {headings.map(({ level, text, id }) => (
                    <li
                        key={id}
                        style={{ paddingLeft: `${(level - 2) * 12}px` }}
                    >
                        <a
                            href={`#${id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById(id)
                                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                            className={`block rounded-lg px-3 py-1.5 text-sm transition-all duration-150 ${
                                activeId === id
                                    ? "bg-brand-100 font-medium text-brand-700"
                                    : "text-text-muted hover:bg-brand-50 hover:text-brand-600"
                            }`}
                        >
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
