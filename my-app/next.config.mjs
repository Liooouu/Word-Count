/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // ensures static HTML export
  trailingSlash: true,    // maps /Wordcount/ correctly
};

module.exports = nextConfig;
