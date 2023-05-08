/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iili.io',
        port: '',
      }
    ],
    domains: [
      'res.cloudinary.com'
    ]
  }
}

module.exports = nextConfig
