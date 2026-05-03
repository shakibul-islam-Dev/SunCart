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
  },
  reactCompiler: true,
};

export default nextConfig;
