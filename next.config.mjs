/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['thispersondoesnotexist.com'],
    },

    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    },

    env: {
        BASE_URL: process.env.BASE_URL,
    },
};

export default nextConfig;