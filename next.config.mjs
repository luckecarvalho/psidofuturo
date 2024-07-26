/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['thispersondoesnotexist.com'],
    },

    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    },
};

export default nextConfig;