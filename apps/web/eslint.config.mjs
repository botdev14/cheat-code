import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Your shared Turborepo config (equivalent to `.eslintrc.js` extends)
import repoNextConfig from "@repo/eslint-config/next.js";

export default defineConfig([
  // --- Shared turborepo config (from .eslintrc.js extends)
  ...repoNextConfig,

  // --- Next.js recommended configs
  ...nextVitals,
  ...nextTs,

  // --- Parser options from old .eslintrc.js
  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
    },
  },

  // --- Overrides for default ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts", // default ignore from eslint-config-next
  ]),
]);
