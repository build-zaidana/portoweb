/** Site-wide constants. Change text here, not in components. */
export const site = {
  name: "Zaidana",
  title: "Zaidana — learning to build software that helps people",
  description:
    "Software Engineering student learning fullstack and AI in public. Open to remote internships and junior roles.",
  locale: "en",
  /** Open Graph image for every page, relative to /public (rendered from the site's own components, 1200×630). */
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
  /**
   * PRD §3 logistics. Start date and weekly hours aren't decided yet (Gate 4), so the site
   * says so plainly instead of guessing. Replace with real values when known.
   */
  availability: "Start date and weekly hours: happy to discuss",
  /** PRD F7: placeholder until the real CV exists. Keep `placeholder: true` so the UI says so. */
  cv: { href: "/cv-placeholder.pdf", placeholder: true },
} as const;

/**
 * Ways to reach Zaidana. `null` = not set up yet, and the UI hides it (never a fake address).
 * Social links (X, Instagram) are added here once the accounts exist.
 */
export const contact: { email: string | null; social: readonly NavItem[] } = {
  email: null,
  social: [],
};

/**
 * Newsletter (PRD F5, Buttondown). While `username` is null the site says the newsletter
 * hasn't started and offers RSS instead; with a username, the subscribe form goes live.
 */
export const newsletter: { username: string | null } = {
  username: null,
};

/** Real progress of this website, phase by phase (update at every gate). Shown on Home. */
export const siteProgress: readonly { label: string; done: boolean }[] = [
  { label: "Foundations", done: true },
  { label: "Home and About", done: true },
  { label: "Projects and writing", done: true },
  { label: "Copy and real projects", done: true },
  { label: "Launch", done: false },
];

export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation. Order follows what Rian needs first: proof, then thinking, then activity. */
export const nav: readonly NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Now", href: "/now" },
  { label: "About", href: "/about" },
];

export const contactHref = "/contact";
