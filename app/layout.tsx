import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Meilleur IPTV en France | 10 000+ Chaînes | IPTV The King",
    template: "%s | IPTV The King",
  },
  description:
    "Le meilleur service IPTV en France avec 10 000+ chaînes en direct, 50 000+ films et séries en qualité 4K. Abonnements flexibles, support 24/7 et 99.9% de disponibilité.",
  keywords: [
    "meilleur iptv en france",
    "iptv france",
    "abonnement iptv",
    "iptv 4K",
    "iptv premium",
    "chaînes iptv",
    "iptv pas cher",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
