import "dotenv/config";

export default {
  expo: {
    name: "demo-app",
    slug: "demo-app",
    version: "0.0.0-alpha",
    scheme: "demo-app",
    platforms: ["ios", "android"],
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: "com.rubyjasmin.demo-app",
    },
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: process.env.SENTRY_ORG,
            project: process.env.SENTRY_PROJECT,
            authToken: process.env.SENTRY_AUTH_TOKEN,
          },
        },
      ],
    },
    packagerOpts: {
      config: "metro.config.js",
      sourceExts: [
        "expo.ts",
        "expo.tsx",
        "expo.js",
        "expo.jsx",
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "wasm",
        "svg",
      ],
    },
  },
};
