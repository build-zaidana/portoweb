// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import { sampleReport } from "./integrations/sample-report.ts";

// https://astro.build/config
export default defineConfig({
  // Temporary free subdomain until a custom domain is bought (PRD §10).
  site: "https://zaidana.netlify.app",

  integrations: [sampleReport()],

  // The floating dev toolbar would appear in every review screenshot.
  devToolbar: { enabled: false },

  // Typed env vars. SHOW_SAMPLES=true lets a preview deploy include `sample: true` entries (PRD F3).
  env: {
    schema: {
      SHOW_SAMPLES: envField.boolean({ context: "server", access: "public", default: false }),
    },
  },

  // Fonts API: files are downloaded at build time and served from this site (self-hosted).
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Instrument Serif",
      cssVariable: "--font-instrument-serif",
      weights: [400],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.fontshare(),
      name: "General Sans",
      cssVariable: "--font-general-sans",
      weights: [400, 500, 600],
      styles: ["normal"],
      fallbacks: ["sans-serif"],
    },
    {
      // Handwriting for margin notes on the hero cards (Gate 2 decision). One weight only.
      provider: fontProviders.fontsource(),
      name: "Caveat",
      cssVariable: "--font-caveat",
      weights: [600],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["cursive"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
