/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "profile_app",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./products": "./components/products/products.tsx",
        },
        extraOptions: {
          debug: false, // `false` by default
          exposePages: false, // `false` by default
        },
        shared: {},
      }),
    );

    return config;
  },
};

export default nextConfig;
