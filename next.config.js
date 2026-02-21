/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/natalia-art-portfolio',
  assetPrefix: '/natalia-art-portfolio/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
