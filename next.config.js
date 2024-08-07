const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

/** @type {import('next').NextConfig} */
module.exports = {
  ...withNextra(),
  basePath: "/hyperscript-docs",
  images: {
    unoptimized: true,
  },
};
