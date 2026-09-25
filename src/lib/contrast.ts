/**
 * WCAG 2.x contrast helpers + a tiny parser for `src/styles/tokens.css`.
 *
 * Used by /styleguide (at build time) and by `npm run contrast` (Node),
 * so the numbers shown in the UI and in docs always come from the real tokens.
 * Pure functions only: no Astro or DOM imports, so Node can run this file directly.
 */

export type Mode = "light" | "dark";
export type Palette = Record<Mode, Record<string, string>>;

export interface ContrastPair {
  fg: string;
  bg: string;
  usage: string;
}

export interface ContrastResult extends ContrastPair {
  mode: Mode;
  ratio: number;
  passes: boolean;
}

/** Minimum ratio for normal-size text (WCAG 1.4.3, level AA). */
export const AA_TEXT = 4.5;

const HEX_TOKEN = /--([\w-]+):\s*light-dark\(\s*(#[0-9a-f]{6})\s*,\s*(#[0-9a-f]{6})\s*\)/gi;

/** Reads every `--name: light-dark(#hex, #hex)` declaration into a light/dark palette. */
export function parsePalette(css: string): Palette {
  const palette: Palette = { light: {}, dark: {} };
  for (const [, name, light, dark] of css.matchAll(HEX_TOKEN)) {
    if (name && light && dark) {
      palette.light[name] = light.toLowerCase();
      palette.dark[name] = dark.toLowerCase();
    }
  }
  return palette;
}

function channel(value: number): number {
  const c = value / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

/** Relative luminance as defined by WCAG 2.x. */
export function luminance(hex: string): number {
  const n = Number.parseInt(hex.replace("#", ""), 16);
  const r = channel((n >> 16) & 0xff);
  const g = channel((n >> 8) & 0xff);
  const b = channel(n & 0xff);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}

/** Checks each pair in both modes. Throws if a token name is missing, so typos fail loudly. */
export function checkPairs(palette: Palette, pairs: ContrastPair[]): ContrastResult[] {
  const modes: Mode[] = ["light", "dark"];
  return modes.flatMap((mode) =>
    pairs.map((pair) => {
      const fg = palette[mode][pair.fg];
      const bg = palette[mode][pair.bg];
      if (!fg || !bg) throw new Error(`Unknown token in contrast pair: ${pair.fg} on ${pair.bg}`);
      const ratio = contrastRatio(fg, bg);
      return { ...pair, mode, ratio, passes: ratio >= AA_TEXT };
    }),
  );
}

/**
 * Every text/background pair the site is allowed to use.
 * Adding a new text color? Add its pair here first; the build-time table will show if it fails.
 */
export const TEXT_PAIRS: ContrastPair[] = [
  { fg: "ink", bg: "paper", usage: "Body text, headings" },
  { fg: "ink-soft", bg: "paper", usage: "Secondary text, meta" },
  { fg: "accent", bg: "paper", usage: "Links, focus ring" },
  { fg: "ink", bg: "surface", usage: "Text on calm cards" },
  { fg: "ink-soft", bg: "surface", usage: "Secondary text on calm cards" },
  { fg: "ink", bg: "surface-raised", usage: "Nav, raised panels" },
  { fg: "ink", bg: "tint-sage", usage: "Project card (sage)" },
  { fg: "ink-soft", bg: "tint-sage", usage: "Project card meta (sage)" },
  { fg: "ink", bg: "tint-sky", usage: "Project card (sky)" },
  { fg: "ink-soft", bg: "tint-sky", usage: "Project card meta (sky)" },
  { fg: "ink", bg: "tint-tan", usage: "Project card (tan)" },
  { fg: "ink-soft", bg: "tint-tan", usage: "Project card meta (tan)" },
  { fg: "on-deep", bg: "deep-sage", usage: "Writing card (deep sage)" },
  { fg: "on-deep", bg: "deep-ink", usage: "Writing card (charcoal)" },
  { fg: "on-deep-soft", bg: "deep-sage", usage: "Writing card meta (deep sage)" },
  { fg: "on-deep-soft", bg: "deep-ink", usage: "Writing card meta (charcoal)" },
  { fg: "paper", bg: "ink", usage: "Primary button label" },
  { fg: "accent", bg: "tint-sky", usage: "Handwritten notes on hero cards (sky)" },
  { fg: "accent", bg: "tint-sage", usage: "Handwritten notes on hero cards (sage)" },
  { fg: "accent", bg: "tint-tan", usage: "Handwritten notes on hero cards (tan)" },
  { fg: "accent", bg: "surface-raised", usage: "Code keywords" },
  { fg: "code-type", bg: "surface-raised", usage: "Code type names and numbers" },
  { fg: "on-fill", bg: "sage", usage: "Text on sage fill (hover states)" },
  { fg: "on-fill", bg: "sky", usage: "Arrow button on sky" },
  { fg: "on-fill", bg: "tan", usage: "Hover fill on tan" },
];
