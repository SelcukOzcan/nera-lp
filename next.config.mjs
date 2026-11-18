const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  enablePrerenderSourceMaps: false,
  images: { unoptimized: true },
};

export default nextConfig;
