/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**", // Sob website theke image allow korbe (development-er jonno)
      },
    ],
    trustedOrigins: [
      "https://suncart-omega.vercel.app",
      "https://suncart-git-main-ishakibul98-1076s-projects.vercel.app",
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
