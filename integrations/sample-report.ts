/**
 * Build-time report of dummy content (PRD F3).
 *
 * Content with `sample: true` is filtered out of production pages by
 * `getVisibleEntries()` in src/lib/content.ts. This integration makes that
 * visible in the build log: it lists every sample file still in the repo and
 * says whether this build includes them, so fake content never ships by accident
 * and the "replace before launch" list is always one `npm run build` away.
 */
import { globSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { loadEnv } from "vite";

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---/;
const SAMPLE_FLAG = /^sample:\s*true\s*$/m;

export function findSampleFiles(contentDir: string): string[] {
  return globSync("**/*.{md,mdx}", { cwd: contentDir })
    .filter((file) => {
      const frontmatter = FRONTMATTER.exec(readFileSync(`${contentDir}/${file}`, "utf8"))?.[1] ?? "";
      return SAMPLE_FLAG.test(frontmatter);
    })
    .map((file) => file.replaceAll("\\", "/"))
    .sort();
}

export function sampleReport(): AstroIntegration {
  let contentDir = "";
  let showSamples = false;

  return {
    name: "zaidana:sample-report",
    hooks: {
      "astro:config:setup": ({ config }) => {
        contentDir = fileURLToPath(new URL("content", config.srcDir));
        // Same source of truth as astro:env (process env or .env files).
        const env = loadEnv("production", fileURLToPath(config.root), "");
        showSamples = env["SHOW_SAMPLES"] === "true";
      },
      "astro:build:done": ({ logger }) => {
        const samples = findSampleFiles(contentDir);
        if (samples.length === 0) {
          logger.info("No sample content left. Everything in src/content is real.");
          return;
        }
        const status = showSamples
          ? "INCLUDED in this build (SHOW_SAMPLES=true)"
          : "EXCLUDED from this build";
        logger.warn(`${samples.length} sample entries ${status}. Replace before launch:`);
        for (const file of samples) logger.warn(`  • src/content/${file}`);
      },
    },
  };
}
