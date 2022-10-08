const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  modifyVars: { '@primary-color': '#3167B8' },
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
  experimental: {
    forceSwcTransforms: true,
  },
});
