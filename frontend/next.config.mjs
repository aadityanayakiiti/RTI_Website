/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/app",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/app",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/rti",
        permanent: false,
      },
      {
        source: "/admin", // Matches /app/admin
        destination: "/admin/dashboard", // Redirects to /app/admin/dashboard
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
