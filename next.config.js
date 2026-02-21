/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/natalia-art-portfolio',
  assetPrefix: '/natalia-art-portfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
