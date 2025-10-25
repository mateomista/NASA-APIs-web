/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack(config) {
 
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
     
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: { not: /components/ }, 
      },
      
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: /components/, // 
        use: ['@svgr/webpack'], 
      }
    );

    
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  // -------------------------------------------------
};

export default nextConfig;