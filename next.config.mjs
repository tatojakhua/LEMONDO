/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['s3.zoommer.ge'],
  },
};

export default nextConfig;
