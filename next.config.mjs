/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🔧 Corrige el error de "Invalid project directory: /lint"
  eslint: {
    dirs: ['.'], // Analiza el directorio actual (raíz del proyecto)
  },
};

export default nextConfig;
