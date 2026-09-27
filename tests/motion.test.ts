import { describe, expect, it } from "vitest";
import { navMotion } from "../src/lib/motion";

const url = (path: string) => new URL(path, "https://zaidana.netlify.app");
const move = (from: string, to: string) => navMotion(url(from), url(to));

describe("navMotion", () => {
  it("moves right when going later in the nav, with a staggered arrival", () => {
    expect(move("/projects", "/writing")).toEqual({ x: 1, stagger: true });
    expect(move("/", "/about/")).toEqual({ x: 1, stagger: true });
  });

  it("moves left when going back in the nav", () => {
    expect(move("/now", "/projects")).toEqual({ x: -1, stagger: true });
  });

  it("stays put between a list and its detail page (the morph carries the motion)", () => {
    expect(move("/projects", "/projects/quiz-from-notes")).toEqual({ x: 0, stagger: false });
    expect(move("/writing/a", "/writing")).toEqual({ x: 0, stagger: false });
  });

  it("keeps direction but skips the stagger between detail pages of different sections", () => {
    expect(move("/projects/a", "/writing/b")).toEqual({ x: 1, stagger: false });
  });

  it("does nothing special for pages outside the nav", () => {
    expect(move("/styleguide", "/projects")).toEqual({ x: 0, stagger: false });
  });
});
