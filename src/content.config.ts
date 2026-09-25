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

/** Pastel chip color on the hero card. Names match --tint-* tokens. */
const cardTint = z.enum(["sage", "sky", "tan"]);

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string().max(60),
    /** One sentence shown on cards: what it does and for whom. */
    summary: z.string().max(160),
    /** Short lowercase phrase for the hero sentence ("Right now I'm building …"). Falls back to the quoted title. */
    phrase: z.string().max(60).optional(),
    status: z.enum(["idea", "building", "shipped"]),
    stack: z.array(z.string()).min(1),
    startedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    repo: z.url().optional(),
    demo: z.url().optional(),
    tint: cardTint.default("sage"),
    /** Short handwritten margin note shown on the hero card (notebook style). */
    heroNote: z.string().max(48).optional(),
    /** Placeholder mini-UI shown on the card until the project has a real screenshot. */
    art: z.enum(["form", "cards", "chart", "request"]).default("form"),
    /**
     * Annotations on the project picture (lovi-style callouts): a dot at x/y (percent of the
     * picture) and a short note explaining a decision. 2–4 read best; more crowd the picture.
     */
    callouts: z
      .array(
        z.object({
          label: z.string().max(32),
          note: z.string().max(120),
          x: z.number().min(0).max(100),
          y: z.number().min(0).max(100),
          side: z.enum(["left", "right"]).default("right"),
        }),
      )
      .max(4)
      .default([]),
    featured: z.boolean().default(false),
    sample,
  }),
});

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string().max(90),
    description: z.string().max(180),
    /** Short lowercase phrase for the hero sentence ("Right now I'm building …"). Falls back to the quoted title. */
    phrase: z.string().max(60).optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Words from the first paragraph to mark with a highlighter on the hero card. */
    highlight: z.string().max(80).optional(),
    /** Short handwritten margin note shown on the hero card (notebook style). */
    heroNote: z.string().max(48).optional(),
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
    /** A few lines of real code from this month's learning, shown on the hero card. */
    snippet: z.string().max(160).optional(),
    /** Short handwritten margin note shown on the hero card (notebook style). */
    heroNote: z.string().max(48).optional(),
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
