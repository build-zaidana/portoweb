/**
 * robots.txt built from `site` in astro.config.mjs, so the sitemap URL follows the domain
 * when it changes (PRD §10: free Netlify subdomain first, own domain later).
 */
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site);
  return new Response(`User-agent: *\nAllow: /\nDisallow: /styleguide\n\nSitemap: ${sitemap.href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
