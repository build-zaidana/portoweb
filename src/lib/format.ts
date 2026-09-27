const monthYear = new Intl.DateTimeFormat("en", { month: "long", year: "numeric", timeZone: "UTC" });
const fullDate = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "September 2026" — used for /now and project timelines. */
export const formatMonth = (date: Date): string => monthYear.format(date);

/** "8 Sep 2026" — used for article dates. */
export const formatDate = (date: Date): string => fullDate.format(date);

/** "4 min read" from a Markdown body, at 220 words per minute (never below 1). */
export function readingTime(markdown: string | undefined): string {
  const words = (markdown ?? "")
    .replace(/```[\s\S]*?```/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

/** Text split around a highlighted phrase, for the marker effect on writing cards. */
export interface Highlighted {
  before: string;
  mark: string;
  after: string;
}

/**
 * Opening text of a Markdown body as plain text: the first real paragraphs (skips quotes,
 * headings, code, lists) joined up to `max` characters, optionally split around `highlight`.
 */
export function excerpt(
  markdown: string | undefined,
  highlight?: string,
  max = 300,
): Highlighted | undefined {
  const blocks = (markdown ?? "")
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.trim())
    .filter((block) => block && !/^(>|#|```|[-*] |\d+\. )/.test(block));
  if (blocks.length === 0) return undefined;
  let text = "";
  for (const block of blocks) {
    if (text.length >= max) break;
    text = text ? `${text} ${block}` : block;
  }
  text = text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*?([^*]+)\*\*?/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ");
  // Cut at a word boundary and drop trailing punctuation so we never print "word.…".
  if (text.length > max)
    text = `${text
      .slice(0, max)
      .replace(/\s+\S*$/, "")
      .replace(/[\s.,;:!?]+$/, "")}…`;
  const at = highlight ? text.indexOf(highlight) : -1;
  if (!highlight || at < 0) return { before: text, mark: "", after: "" };
  return { before: text.slice(0, at), mark: highlight, after: text.slice(at + highlight.length) };
}

/** Machine-readable value for <time datetime>. */
export const isoDate = (date: Date): string => date.toISOString().slice(0, 10);
