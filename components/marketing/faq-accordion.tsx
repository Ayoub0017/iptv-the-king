"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/lib/constants";

interface FAQAccordionProps {
    faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((faq, index) => (
                <div key={index}>
                    <button
                        onClick={() => toggle(index)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/50"
                        aria-expanded={openIndex === index}
                    >
                        <span className="text-sm font-medium">{faq.question}</span>
                        <ChevronDown
                            className={cn(
                                "h-4 w-4 shrink-0 text-text-muted transition-transform duration-200",
                                openIndex === index && "rotate-180"
                            )}
                        />
                    </button>
                    <div
                        className={cn(
                            "overflow-hidden transition-all duration-300 ease-in-out",
                            openIndex === index ? "max-h-96" : "max-h-0"
                        )}
                    >
                        <p className="px-6 pb-5 text-sm text-text-muted leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
