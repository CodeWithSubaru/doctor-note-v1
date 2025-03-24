/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mydoctorsnote.co',
                pathname: '/cdn/shop/files/**',
            },
        ],
    },
};

export default nextConfig;
