import globals from "globals";
import js from "@eslint/js";

export default [
  {
    ignores: ["**/node_modules/**", "dist/*", "docs/*"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2020,
      sourceType: "module"
    }
  },
  {
    files: ['test/*.js'],
    languageOptions: {
      globals: {
        ...globals.mocha,
        // ...globals.node,
      },
    },
  }];
