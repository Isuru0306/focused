/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  target: "serverless",
  env: {
    NEXT_PUBLIC_MGNL_API_URL: process.env.NEXT_PUBLIC_MGNL_API_URL,
  },
};

export default nextConfig;
