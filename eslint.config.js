import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "module",   // Hamma fayl uchun import/export ishlaydi
      globals: globals.browser,
    },
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["server-*.js"],
    languageOptions: {
      sourceType: "module",   // commonjs emas, modul sifatida ishlatamiz
      globals: globals.node,
    },
  },
]);
