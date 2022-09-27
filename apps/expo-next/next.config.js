const withPlugins = require("next-compose-plugins");

const enabled = process.env.ANALYZE === "true",
  bundledAnalyzer = require("@next/bundle-analyzer")({ enabled }),
  withFonts = require("next-fonts"),
  withImages = require("next-images"),
  { createSecureHeaders } = require("next-secure-headers"),
  { withExpo } = require("@expo/next-adapter"),
  { withSentryConfig } = require("@sentry/nextjs");

const withTM = require("next-transpile-modules")([
  "solito",
  "dripsy",
  "@dripsy/core",
  "@dripsy/gradient",
  "moti",
  "@org/design-system",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [{ source: "/(.*)", headers: createSecureHeaders() }],
  poweredByHeader: false,
  reactStrictMode: true,
};

const sentryConfig = {
  hideSourceMaps: false,
  silent: true,
};

const plugins = withPlugins(
  [
    withTM,
    withFonts,
    withImages,
    bundledAnalyzer,
    [(config) => withSentryConfig(config, sentryConfig)],
    withExpo,
  ],
  nextConfig,
);

module.exports = function (phase, { defaultConfig }) {
  return plugins(phase, {});
};
