module.exports = {
  env: {
    browser: true,
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  ignorePatterns: [
    "**/.cache",
    "**/coverage",
    "**/lib",
    "**/.next*",
    "**/.serverless*",
    "**/.build",
    "**/dist",
    "**/node_modules",
    "**/*.config.js",
  ],
  overrides: [
    {
      files: ["*.{test,spec,story,stories}.ts{,x}"],
      rules: {
        "import/no-extraneous-dependencies": ["error", { packageDir: "./" }],
      },
    },
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 12,
    sourceType: "module", // Allows for the use of imports
  },
  plugins: ["eslint-plugin-tsdoc", "import", "react", "react-hooks", "simple-import-sort"],
  root: true,
  rules: {
    "no-console": ["warn"],
    "no-use-before-define": "off",
    "tsdoc/syntax": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
