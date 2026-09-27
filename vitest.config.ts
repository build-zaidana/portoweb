/// <reference types="vitest/config" />
// Unit tests cover the pure helpers in src/lib (no Astro runtime needed).
// For component tests later, switch to getViteConfig() from "astro/config".
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
  },
});
