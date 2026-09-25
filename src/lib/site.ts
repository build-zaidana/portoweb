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
