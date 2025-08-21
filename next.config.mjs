/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API: process.env.RESEND_API,
  },
  serverExternalPackages: ['resend'],
};

export default nextConfig;
