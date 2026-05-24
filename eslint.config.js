import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["dist/**", "node_modules/**", ".parcel-cache/**"]
  },
  {
    files: ["src/**/*.js", "data/**/*.js", "test/**/*.js", "cypress/**/*.js", "cypress.config.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
        URL: "readonly",
        alert: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        cy: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    },
  },
];
