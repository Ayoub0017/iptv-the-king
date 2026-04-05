import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/plans/3-months",
        destination: "/abonnement-iptv-3-mois",
        permanent: true,
      },
      {
        source: "/plans/6-months",
        destination: "/abonnement-iptv-6-mois",
        permanent: true,
      },
      {
        source: "/plans/12-months",
        destination: "/abonnement-iptv-12-mois",
        permanent: true,
      },
      {
        source: "/plans/24-months",
        destination: "/abonnement-iptv-24-mois",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/articles/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
