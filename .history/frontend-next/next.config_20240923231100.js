/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8888', // Port où ton site Drupal est servi
        pathname: '/**', // Permet toutes les images sous ce chemin
      },
    ],
  },
}

