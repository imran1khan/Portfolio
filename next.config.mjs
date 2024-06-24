/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "**.amazon.com",
            },
            {
                protocol: "https",
                hostname: "**.dribbble.com",
            },
        ]
    }
};

export default nextConfig;
