import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'svgrepo.com',
            },
            {
                protocol: 'https',
                hostname: 'getbootstrap.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.icon-icons.com',
            },
            {
                protocol: 'https',
                hostname: 'vectorlogo.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn4.iconfinder.com',
            },
            {
                protocol: 'https',
                hostname: 'nodejs.org',
            },
            {
                protocol: 'https',
                hostname: 'cdn.worldvectorlogo.com'
            },
            {
                protocol: 'https',
                hostname: 'mongoosejs.com'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            },
        ],
    },
};

if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
}

export default nextConfig;
