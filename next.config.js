/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HEART_COLOR: '#DC474F'
  },
  images: {
    domains: ['via.placeholder.com']
  }
}

module.exports = nextConfig
