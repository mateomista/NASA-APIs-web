/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['.'], // 🔧 analiza todo el proyecto desde el directorio actual
  },
};

export default nextConfig;
