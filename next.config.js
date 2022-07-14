/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/myportfolio',
  assetPrefix: '/myportfolio',
}

module.exports = nextConfig