// tests/zeroMatrix.test.ts

import stringRotation from "../src/stringRotation";

describe("stringRotation", () => {
  test("should return true for valid rotations", () => {
    expect(stringRotation("waterbottle", "erbottlewat")).toBe(true);
    expect(stringRotation("abcde", "cdeab")).toBe(true);
    expect(stringRotation("hello", "llohe")).toBe(true);
    expect(stringRotation("12345", "45123")).toBe(true);
  });

  test("should return false for invalid rotations", () => {
    expect(stringRotation("abcde", "edcba")).toBe(false); // Invalid rotation
    expect(stringRotation("hello", "hello!")).toBe(false); // Different length
    expect(stringRotation("", "a")).toBe(false); // Different lengths
    expect(stringRotation("abc", "")).toBe(false); // Different lengths
  });

  test("should return false for strings of different lengths", () => {
    expect(stringRotation("abc", "abcd")).toBe(false);
    expect(stringRotation("abcd", "abc")).toBe(false);
    expect(stringRotation("abcde", "ab")).toBe(false);
  });
});
