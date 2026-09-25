/**
 * Content collections (PRD F2). Every entry is a Markdown file validated by a Zod schema,
 * so a typo in frontmatter fails the build instead of shipping a broken page.
 *
 * `sample: true` marks dummy content (PRD F3/§9). It is shown with a "Sample" label
 * in dev/preview and excluded from production by src/lib/content.ts.
 */
import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

/** Shared by every collection. */
const sample = z.boolean().default(false);

/** Pastel surface for the project card (craft-style). Names match --tint-* tokens. */
const cardTint = z.enum(["sage", "sky", "tan"]);

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string().max(60),
    /** One sentence shown on cards: what it does and for whom. */
    summary: z.string().max(160),
    status: z.enum(["idea", "building", "shipped"]),
    stack: z.array(z.string()).min(1),
    startedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    repo: z.url().optional(),
    demo: z.url().optional(),
    tint: cardTint.default("sage"),
    /** Placeholder mini-UI shown on the card until the project has a real screenshot. */
    art: z.enum(["form", "cards", "chart"]).default("form"),
    featured: z.boolean().default(false),
    sample,
  }),
});

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string().max(90),
    description: z.string().max(180),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    sample,
  }),
});

/** One file per month, e.g. `2026-09.md`. The newest entry is the current /now page. */
const now = defineCollection({
  loader: glob({ base: "./src/content/now", pattern: "**/*.md" }),
  schema: z.object({
    month: z.coerce.date(),
    location: z.string().optional(),
    learning: z.array(z.string()).min(1),
    building: z.array(z.string()).default([]),
    reading: z.array(z.string()).default([]),
    sample,
  }),
});

/** Dated milestones for the learning timeline on /about (one YAML file, one entry per item). */
const timeline = defineCollection({
  loader: file("./src/content/timeline.yaml"),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().max(80),
    note: z.string().max(160).optional(),
    sample,
  }),
});

export const collections = { projects, writing, now, timeline };
