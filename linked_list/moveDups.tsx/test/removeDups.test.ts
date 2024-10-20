// tests/removeDups.test.ts

import { removeDups } from "../src/removeDups";

describe("removeDups", () => {
  test("one insert", () => {
    expect(removeDups("pale", "ple")).toBe(true);
  });

  test("one remove", () => {
    expect(removeDups("pales", "pale")).toBe(true);
  });

  test("one replace", () => {
    expect(removeDups("pale", "bale")).toBe(true);
  });

  test("two replace", () => {
    expect(removeDups("pale", "'bake")).toBe(false);
  });

  test("two insert", () => {
    expect(removeDups("pal", "palee")).toBe(false);
  });

  test("two remove", () => {
    expect(removeDups("pale", "pa")).toBe(false);
  });
});
