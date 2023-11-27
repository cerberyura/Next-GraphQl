/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'info-side.test',
    }]
  }
}

module.exports = nextConfig
