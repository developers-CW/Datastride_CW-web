/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Optional: Uncomment if you want to use trailing slashes
  // trailingSlash: true,
  // Optional: Customize output directory (default is 'out')
  // distDir: 'dist',
};

export default nextConfig;