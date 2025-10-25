/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Especifica los directorios correctos dentro de src
    dirs: ['src/app', 'src/components', 'src/lib'],
  },
};

export default nextConfig;