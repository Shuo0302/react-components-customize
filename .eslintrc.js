module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/consistent-type-imports": "error",
    "no-async-promise-executor": "warn",
    "no-control-regex": "warn",
    "no-throw-literal": "warn",
    "no-irregular-whitespace": "warn",
    "no-empty": "warn",
    "no-console": "warn",
  },
};
