/**
 * Page transitions (ClientRouter / View Transitions).
 *
 * Two kinds of navigation, two kinds of motion:
 *   1. List ↔ detail (e.g. /projects → /projects/x): titles and art morph between pages
 *      (see .vt-morph in global.css). <main> only fades gently around them.
 *   2. Between top-level pages (Home, Projects, Writing, Now, About, Contact): nothing is
 *      shared, so the motion itself carries the story. Pages sit in a row in nav order;
 *      the old page slides out toward the side you came from and softens, and the new
 *      page's sections arrive one after another from the other side.
 *
 * The direction is decided before the swap and written onto the incoming <html>
 * (data-nav + --nav-x), which the view-transition pseudo-elements inherit.
 * Astro turns view transitions off under prefers-reduced-motion; the stagger has its
 * own reduced-motion guard in global.css.
 */
import type { TransitionDirectionalAnimations } from "astro";
import { nav } from "./site";

const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)"; // --ease-out
const EASE_IN = "cubic-bezier(0.4, 0, 1, 1)";

const leave = { name: "page-leave", duration: "180ms", easing: EASE_IN, fillMode: "both" } as const;
const enter = {
  name: "page-enter",
  duration: "420ms",
  delay: "60ms",
  easing: EASE_OUT,
  fillMode: "both",
} as const;

/** Keyframes read --nav-x / --nav-y, so one definition covers every direction. */
export const pageTransition: TransitionDirectionalAnimations = {
  forwards: { old: leave, new: enter },
  backwards: { old: leave, new: enter },
};

/** Top-level pages in the order they sit in the nav. Detail pages belong to their list. */
const order = ["/", ...nav.map((item) => item.href), "/contact"];

function place(pathname: string): { index: number; depth: number } {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const depth = clean === "/" ? 0 : clean.split("/").length - 1;
  const top = depth === 0 ? "/" : `/${clean.split("/")[1]}`;
  return { index: order.indexOf(top), depth };
}

export type NavMotion = { x: -1 | 0 | 1; stagger: boolean };

/**
 * Direction of travel between two URLs.
 * x: +1 = moving right in the nav, -1 = moving left, 0 = same section (list ↔ detail).
 * stagger: only between top-level pages, where no element morphs across.
 */
export function navMotion(from: URL, to: URL): NavMotion {
  const a = place(from.pathname);
  const b = place(to.pathname);
  if (a.index < 0 || b.index < 0 || a.index === b.index) return { x: 0, stagger: false };
  const x = b.index > a.index ? 1 : -1;
  return { x, stagger: a.depth <= 1 && b.depth <= 1 };
}
