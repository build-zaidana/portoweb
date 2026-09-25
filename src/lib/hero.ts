/**
 * Cards for the hero stack. Each card is one real thing from the learning journey,
 * pulled from content collections (so samples follow the same production guard),
 * plus one card that is always true: this website, built in public.
 */
import { getLatestNow, getProjects, getWriting } from "./content";
import { formatDate, formatMonth } from "./format";
import { profile } from "./site";

/** Verb in the hero sentence. Projects pick theirs from their status, so an idea is never "being built". */
export type HeroVerb = "planning" | "building" | "improving" | "learning" | "writing about";

const projectVerb = { idea: "planning", building: "building", shipped: "improving" } as const;

/** Titles are quoted when used mid-sentence, so capitals and commas don't break the grammar. */
const quoted = (title: string) => `“${title}”`;

export interface HeroCard {
  id: string;
  /** Drives the changing sentence under the headline: "Right now I'm {verb} {phrase}." */
  verb: HeroVerb;
  /** Object of that sentence, e.g. "a quiz app for lecture notes" or "TypeScript generics". */
  phrase: string;
  kind: "project" | "learning" | "writing" | "site";
  title: string;
  body: string;
  meta: string;
  href: string;
  external?: boolean;
  tint: "sage" | "sky" | "tan";
  art?: "form" | "cards" | "chart";
  sample: boolean;
}

export async function getHeroCards(): Promise<HeroCard[]> {
  const [projects, writing, now] = await Promise.all([getProjects(), getWriting(), getLatestNow()]);
  const cards: HeroCard[] = [];

  const project = projects[0];
  if (project) {
    cards.push({
      id: `project-${project.id}`,
      verb: projectVerb[project.data.status],
      phrase: project.data.phrase ?? quoted(project.data.title),
      kind: "project",
      title: project.data.title,
      body: project.data.summary,
      meta: project.data.stack.slice(0, 3).join(", "),
      href: `/projects/${project.id}`,
      tint: project.data.tint,
      art: project.data.art,
      sample: project.data.sample,
    });
  }

  const learning = now?.data.learning[0];
  if (now && learning) {
    const topic = learning.split(",")[0] ?? learning;
    cards.push({
      id: `now-${now.id}`,
      verb: "learning",
      phrase: topic,
      kind: "learning",
      title: topic,
      body: learning,
      meta: `Updated ${formatMonth(now.data.month)}`,
      href: "/now",
      tint: "sage",
      sample: now.data.sample,
    });
  }

  const post = writing[0];
  if (post) {
    cards.push({
      id: `writing-${post.id}`,
      verb: "writing about",
      phrase: post.data.phrase ?? quoted(post.data.title),
      kind: "writing",
      title: post.data.title,
      body: post.data.description,
      meta: formatDate(post.data.publishedAt),
      href: `/writing/${post.id}`,
      tint: "tan",
      sample: post.data.sample,
    });
  }

  // Always real: the site itself is the first project built in public.
  cards.push({
    id: "site",
    verb: "building",
    phrase: "this website",
    kind: "site",
    title: "This site",
    body: "Designed and built step by step with Astro, TypeScript, and Tailwind. You're looking at it.",
    meta: profile.github.label,
    href: profile.github.href,
    external: true,
    tint: "sky",
    sample: false,
  });

  return cards;
}
