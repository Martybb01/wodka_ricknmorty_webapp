// next.config.js

module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rickandmortyapi.com',
                pathname: '/api/character/avatar/**',
            },
        ],
    },
};
