import { describe, expect, it } from "vitest";
import { excerpt, isoDate, readingTime } from "../src/lib/format";

describe("readingTime", () => {
  it("never says 0 minutes", () => {
    expect(readingTime("")).toBe("1 min read");
    expect(readingTime(undefined)).toBe("1 min read");
  });

  it("counts about 220 words per minute", () => {
    expect(readingTime("word ".repeat(440))).toBe("2 min read");
  });

  it("ignores fenced code blocks", () => {
    const code = "```ts\n" + "token ".repeat(1000) + "\n```";
    expect(readingTime(`${code}\nshort text`)).toBe("1 min read");
  });
});

describe("excerpt", () => {
  it("skips quotes, headings, lists, and code at the start", () => {
    const md = "> Sample note.\n\n## Heading\n\n- item\n\nThe real first paragraph.";
    expect(excerpt(md)).toEqual({ before: "The real first paragraph.", mark: "", after: "" });
  });

  it("strips inline Markdown", () => {
    expect(excerpt("Use `fetch` and **read** the [docs](https://x.dev).")?.before).toBe(
      "Use fetch and read the docs.",
    );
  });

  it("splits around the highlighted phrase", () => {
    expect(excerpt("You never walk into the kitchen. An API works the same way.", "walk into")).toEqual({
      before: "You never ",
      mark: "walk into",
      after: " the kitchen. An API works the same way.",
    });
  });

  it("cuts at a word boundary without doubled punctuation", () => {
    const text = excerpt("One two three. Four five six seven eight nine ten.", undefined, 16)?.before;
    expect(text).toBe("One two three…");
  });

  it("returns undefined when there is no paragraph", () => {
    expect(excerpt("## Only a heading")).toBeUndefined();
  });
});

describe("isoDate", () => {
  it("formats for <time datetime>", () => {
    expect(isoDate(new Date("2026-09-25T10:00:00Z"))).toBe("2026-09-25");
  });
});
