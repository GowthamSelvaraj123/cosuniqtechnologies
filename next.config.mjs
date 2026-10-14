/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compress: true,
  poweredByHeader: false,
  // Optional: Add trailingSlash if your hosting provider requires it for static exports
  // trailingSlash: true,
};

export default nextConfig;

