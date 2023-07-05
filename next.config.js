/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination:
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      },
    ];
  },
};

module.exports = nextConfig;
