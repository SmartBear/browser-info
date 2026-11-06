import globals from "globals";
import js from "@eslint/js";

export default [
  {
    ignores: ["**/node_modules/**", "dist/*", "docs/*", "coverage/**"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    }
  },
  {
    files: ['test/*.js', 'test-package/*.js'],
    languageOptions: {
      globals: {
        ...globals.mocha,
        ...globals.node,
      },
    },
  }];
