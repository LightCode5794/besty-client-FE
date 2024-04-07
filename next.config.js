/** @type {import('next').NextConfig} */
const path = require('path')

require('dotenv').config();

const apiUrl = process.env.BASE_API_URL;

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['vnpayqr.vn'],
    },
}

module.exports = nextConfig
