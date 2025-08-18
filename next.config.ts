
import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';

// The basePath is the name of the repository on GitHub
const basePath = isProd ? '/solutiontemple' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
