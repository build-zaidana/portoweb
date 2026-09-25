/** Site-wide constants. Change text here, not in components. */
export const site = {
  name: "Zaidana",
  title: "Zaidana — learning to build software that helps people",
  description:
    "Software Engineering student learning fullstack and AI in public. Open to remote internships and junior roles.",
  locale: "en",
  /** Open Graph fallback image, relative to /public. Replaced with a generated image in Phase 6. */
  ogImage: "/og-default.png",
} as const;

/**
 * Facts about Zaidana that the site may state. Source: PRD §1/§4 + answers from Zaidana (Phase 2).
 * Anything not listed here must not be claimed on the site.
 * Hours per week and start date were intentionally left out (not decided yet).
 */
export const profile = {
  role: "Software Engineering student",
  focus: "Fullstack + AI",
  country: "Indonesia",
  timezone: "WIB (UTC+7)",
  seeking: "Remote internships and junior software roles",
  github: { label: "github.com/build-zaidana", href: "https://github.com/build-zaidana" },
  /** PRD F7: placeholder until the real CV exists. Keep `placeholder: true` so the UI says so. */
  cv: { href: "/cv-placeholder.pdf", placeholder: true },
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation. Order follows what Rian needs first: proof, then thinking, then activity. */
export const nav: readonly NavItem[] = [
  { label: "Work", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Now", href: "/now" },
  { label: "About", href: "/about" },
];

export const contactHref = "/contact";
