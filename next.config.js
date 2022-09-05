/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['admin.marina.com.eg'],
  },
};

module.exports = nextConfig;
