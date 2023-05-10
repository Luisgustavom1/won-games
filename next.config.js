/** @type {import('next').NextConfig} */
const inProd = process.env.NODE_ENV === 'production';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: !inProd,
});

module.exports = withPWA({});
