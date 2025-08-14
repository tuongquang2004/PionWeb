/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pionlogin.net", pathname: "/**" },
      { protocol: "https", hostname: "dummyimage.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
