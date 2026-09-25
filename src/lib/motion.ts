/**
 * Page transition used by <main> (ClientRouter / View Transitions).
 * Old content leaves fast and slightly upward; new content arrives a beat later,
 * rising 12px and settling with the same ease-out as the rest of the site.
 * Going back reverses the direction. Keyframes live in global.css (page-*).
 * Astro turns all of this off automatically under prefers-reduced-motion.
 */
import type { TransitionDirectionalAnimations } from "astro";

const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)"; // --ease-out
const EASE_IN = "cubic-bezier(0.4, 0, 1, 1)";

export const pageTransition: TransitionDirectionalAnimations = {
  forwards: {
    old: { name: "page-leave-up", duration: "160ms", easing: EASE_IN, fillMode: "both" },
    new: { name: "page-enter-up", duration: "400ms", delay: "60ms", easing: EASE_OUT, fillMode: "both" },
  },
  backwards: {
    old: { name: "page-leave-down", duration: "160ms", easing: EASE_IN, fillMode: "both" },
    new: { name: "page-enter-down", duration: "400ms", delay: "60ms", easing: EASE_OUT, fillMode: "both" },
  },
};
