/**
 * RSS feed for /writing (PRD F4). Reads through lib/content, so samples and drafts follow
 * the same rules as the pages: a production build never publishes a sample post.
 */
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getWriting } from "../lib/content";
import { site } from "../lib/site";

export async function GET(context: APIContext) {
  const posts = await getWriting();
  return rss({
    title: `${site.name} · Writing`,
    description: "Notes on what I learn while building fullstack and AI projects, written in the open.",
    site: context.site ?? "https://zaidana.netlify.app",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>${site.locale}</language>`,
  });
}
