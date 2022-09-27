module.exports = {
  plugins: [["@babel/plugin-syntax-typescript", { isTSX: true }], "source-map-support"],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: "Last 2 Chrome versions, Firefox ESR",
          node: "current",
        },
      },
    ],
    ["@babel/preset-react", { development: false, runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  env: {
    build: {
      ignore: [
        "**/*.test.tsx",
        "**/*.test.ts",
        "**/*.test.js",
        "**/*.stories.tsx",
        "**/*.story.tsx",
        "__snapshots__",
        "__tests__",
        "__stories__",
      ],
    },
  },
  ignore: ["node_modules"],
};
