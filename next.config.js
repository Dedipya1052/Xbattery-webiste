/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/learn',
        permanent: true, // Set to `true` if it's a permanent redirect
      },
    ];
  },
}

module.exports = nextConfig;