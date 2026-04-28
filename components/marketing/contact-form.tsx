"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-lg space-y-5 rounded-2xl border border-border bg-card p-8"
        >
            <div>
                <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium mb-2"
                >
                    Name
                </label>
                <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-2"
                >
                    Email
                </label>
                <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    placeholder="your@email.com"
                />
            </div>

            <div>
                <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium mb-2"
                >
                    Message
                </label>
                <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 resize-none"
                    placeholder="How can we help you?"
                />
            </div>

            <button
                type="submit"
                className={cn(
                    "flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all",
                    submitted
                        ? "bg-green-600 text-white"
                        : "bg-cta text-cta-foreground hover:opacity-90 hover:shadow-lg hover:scale-[1.01]"
                )}
            >
                {submitted ? (
                    "Message Sent!"
                ) : (
                    <>
                        Send Message
                        <Send className="h-4 w-4" />
                    </>
                )}
            </button>
        </form>
    );
}
