// tests/aboutUrlify.test.ts

import { palindromePermutation } from '../src/palindromePermutation';

describe('urlify', () => {
    test('palindrom permutation string', () => {
        expect(palindromePermutation("Tact Coa")).toBe(true);
    });

    test('case sensitivity', () => {
        expect(palindromePermutation("Aa")).toBe(true);
    });

    test('empty string', () => {
        expect(palindromePermutation("")).toBe(true);
    });

    test('single character', () => {
        expect(palindromePermutation("a")).toBe(true);
    });

    test('not palindrom permutation', () => {
        expect(palindromePermutation("abcdef")).toBe(false);
    });

    test('duplicate permutation', () => {
        expect(palindromePermutation("abcdebcea")).toBe(true);
    });

    test('case sensitivity with space', () => {
        expect(palindromePermutation("Aa bB")).toBe(true);
    });

    test('special characters', () => {
        expect(palindromePermutation("www.google.com")).toBe(false);
    });

    test('mixed characters', () => {
        expect(palindromePermutation("abc33abc")).toBe(true);
    });

});
