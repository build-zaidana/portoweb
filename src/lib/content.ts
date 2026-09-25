/**
 * The only way pages should read content collections.
 * Centralizes the sample guard (PRD F3) and the default sort order.
 */
import { getCollection, type CollectionEntry } from "astro:content";
import { SHOW_SAMPLES } from "astro:env/server";

type Collection = "projects" | "writing" | "now" | "timeline";

/** Samples are visible while developing, and in preview builds that opt in with SHOW_SAMPLES=true. */
export const samplesVisible: boolean = import.meta.env.DEV || SHOW_SAMPLES;

function isVisible(entry: CollectionEntry<Collection>): boolean {
  if (entry.data.sample && !samplesVisible) return false;
  if (entry.collection === "writing" && entry.data.draft && import.meta.env.PROD) return false;
  return true;
}

/** Entries allowed on the current build, unsorted. */
export async function getVisibleEntries<C extends Collection>(collection: C): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(collection);
  return entries.filter((entry) => isVisible(entry));
}

/** Newest first. Projects sort by last update, then start date. */
export async function getProjects(): Promise<CollectionEntry<"projects">[]> {
  const entries = await getVisibleEntries("projects");
  const time = (p: CollectionEntry<"projects">) => (p.data.updatedAt ?? p.data.startedAt).getTime();
  return entries.sort((a, b) => Number(b.data.featured) - Number(a.data.featured) || time(b) - time(a));
}

export async function getWriting(): Promise<CollectionEntry<"writing">[]> {
  const entries = await getVisibleEntries("writing");
  return entries.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

/** Timeline milestones, newest first. */
export async function getTimeline(): Promise<CollectionEntry<"timeline">[]> {
  const entries = await getVisibleEntries("timeline");
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** The current /now entry is simply the most recent month. */
export async function getLatestNow(): Promise<CollectionEntry<"now"> | undefined> {
  const entries = await getVisibleEntries("now");
  return entries.sort((a, b) => b.data.month.getTime() - a.data.month.getTime())[0];
}
