import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // French plan slugs → English slugs
      {
        source: "/abonnement-iptv-3-mois",
        destination: "/iptv-subscription-3-months",
        permanent: true,
      },
      {
        source: "/abonnement-iptv-6-mois",
        destination: "/iptv-subscription-6-months",
        permanent: true,
      },
      {
        source: "/abonnement-iptv-12-mois",
        destination: "/iptv-subscription-12-months",
        permanent: true,
      },
      // Legacy English plan paths
      {
        source: "/plans/3-months",
        destination: "/iptv-subscription-3-months",
        permanent: true,
      },
      {
        source: "/plans/6-months",
        destination: "/iptv-subscription-6-months",
        permanent: true,
      },
      {
        source: "/plans/12-months",
        destination: "/iptv-subscription-12-months",
        permanent: true,
      },
      // French page URLs → English URLs
      {
        source: "/a-propos",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contactez-nous",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/conditions-d-utilisation",
        destination: "/terms-of-use",
        permanent: true,
      },
      {
        source: "/politique-de-confidentialite",
        destination: "/privacy-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
