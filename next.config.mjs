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
          "./products": "./pages/index.tsx",
          "./settings": "./pages/settings/index.tsx",
          "./terms-condition": "./pages/terms-condition/index.tsx",
          "./post/[id]": "./pages/post/[id].tsx",
          "./pages-map": "./pages-map.ts",
        },
        extraOptions: {
          debug: false, // `false` by default
          exposePages: true, // `false` by default
        },
        shared: {},
      }),
    );

    return config;
  },
};

export default nextConfig;
