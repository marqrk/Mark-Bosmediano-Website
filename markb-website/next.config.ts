/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure we're using the "experimental" app dir support for Next-on-Pages if needed
  experimental: {
    // if using app router:
    appDir: true
  }
};

export default nextConfig;