/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'localhost',
      'https://darwin.md'
    ],
  },
};

export default withNextIntl(nextConfig);