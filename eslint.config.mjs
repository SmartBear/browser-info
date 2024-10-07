import globals from "globals";
import js from "@eslint/js";
import babel from "@babel/eslint-parser";

export default [
  {
    ignores: ["**/node_modules/**", "dist/*", "docs/*"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2020,
      sourceType: "module",
      parser: babel,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: [
            "@babel/plugin-syntax-import-assertions"
          ]
        }
      },
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
