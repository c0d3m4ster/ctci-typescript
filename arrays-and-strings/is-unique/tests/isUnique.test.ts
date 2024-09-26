// tests/isUnique.test.ts

import { isUnique } from '../src/isUnique';

describe('isUnique', () => {
    test('long string', () => {
        expect(isUnique("a".repeat(129))).toBe(false);
    });

    test('case sensitivity', () => {
        expect(isUnique("Aa", false)).toBe(false);
    });

    test('empty string', () => {
        expect(isUnique("")).toBe(true);
    });

    test('single character', () => {
        expect(isUnique("a")).toBe(true);
    });

    test('unique characters', () => {
        expect(isUnique("abcdef")).toBe(true);
    });

    test('duplicate characters', () => {
        expect(isUnique("abcdea")).toBe(false);
    });

    test('case insensitivity', () => {
        expect(isUnique("Aa")).toBe(false);
    });

    test('special characters', () => {
        expect(isUnique("!@#$%^&*()")).toBe(true);
    });

    test('mixed characters', () => {
        expect(isUnique("abc123abc")).toBe(false);
    });
});