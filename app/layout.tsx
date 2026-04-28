import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    default: "Best IPTV Provider in the UK | 10,000+ Channels | IPTV The King",
    template: "%s | IPTV The King",
  },
  description:
    "The best IPTV provider in the UK with 10,000+ live channels, 50,000+ films and series in 4K quality. Flexible subscriptions, 24/7 support and 99.9% uptime.",
  keywords: [
    "best iptv provider uk",
    "iptv uk",
    "iptv subscription uk",
    "iptv 4k",
    "iptv premium",
    "iptv channels uk",
    "cheap iptv uk",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G6W57ZYX4B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G6W57ZYX4B');
          `}
        </Script>
      </body>
    </html>
  );
}
