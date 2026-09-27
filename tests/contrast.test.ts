import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { AA_TEXT, TEXT_PAIRS, checkPairs, contrastRatio, parsePalette } from "../src/lib/contrast";

describe("contrastRatio", () => {
  it("matches the WCAG extremes", () => {
    expect(contrastRatio("#000000", "#ffffff")).toBeCloseTo(21, 1);
    expect(contrastRatio("#777777", "#777777")).toBeCloseTo(1, 5);
  });

  it("is symmetric", () => {
    expect(contrastRatio("#2a2a2a", "#f3f1ec")).toBeCloseTo(contrastRatio("#f3f1ec", "#2a2a2a"), 10);
  });
});

describe("parsePalette", () => {
  it("reads light-dark() tokens into both modes", () => {
    const palette = parsePalette("--ink: light-dark(#2a2a2a, #eceae4);");
    expect(palette.light.ink).toBe("#2a2a2a");
    expect(palette.dark.ink).toBe("#eceae4");
  });
});

describe("design tokens", () => {
  it("every text pair passes WCAG AA in light and dark mode", () => {
    const css = readFileSync(new URL("../src/styles/tokens.css", import.meta.url), "utf8");
    const failures = checkPairs(parsePalette(css), TEXT_PAIRS).filter((r) => !r.passes);
    expect(failures, `pairs below ${AA_TEXT}:1`).toEqual([]);
  });
});
