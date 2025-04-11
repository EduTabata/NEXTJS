import type { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  // Suas configurações personalizadas aqui (exemplo: React Strict Mode)
  reactStrictMode: true,

  // Redirecionamentos
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
