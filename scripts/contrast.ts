/**
 * Prints the WCAG contrast table for every allowed text pair, in both modes.
 * Run with `npm run contrast` (Node strips the TypeScript types natively).
 * Exits with code 1 if any pair is below 4.5:1, so it can guard CI later.
 */
import { readFileSync } from "node:fs";
import { AA_TEXT, TEXT_PAIRS, checkPairs, parsePalette } from "../src/lib/contrast.ts";

const css = readFileSync(new URL("../src/styles/tokens.css", import.meta.url), "utf8");
const results = checkPairs(parsePalette(css), TEXT_PAIRS);

console.log("| Mode | Text | Background | Ratio | AA | Usage |");
console.log("|---|---|---|---|---|---|");
for (const r of results) {
  const mark = r.passes ? "✅" : "❌";
  console.log(
    `| ${r.mode} | \`--${r.fg}\` | \`--${r.bg}\` | ${r.ratio.toFixed(2)}:1 | ${mark} | ${r.usage} |`,
  );
}

const failures = results.filter((r) => !r.passes);
if (failures.length > 0) {
  console.error(`\n${failures.length} pair(s) below ${AA_TEXT}:1`);
  process.exit(1);
}
