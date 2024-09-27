// tests/arePermutation.test.ts

import { arePermutation } from '../src/arePermutation';

describe('arePermutation', () => {
    test('not permuted', () => {
        expect(arePermutation("abcd", "acbx")).toBe(false);
    });

    test('permuted numbers', () => {
        expect(arePermutation("7928.15", "5128.97")).toBe(true);
    });

    test('repeated letters', () => {
        expect(arePermutation("Hello", "Helloo")).toBe(false);
    });

    test('permuted letters', () => {
        expect(arePermutation("Azbcx", "cAzxb")).toBe(true);
    });

    test('permuted with spaces', () => {
        expect(arePermutation("A dog", "Ad og")).toBe(true);
    });

    test('permuted special characters', () => {
        expect(arePermutation("*%@$)", "%)@$*")).toBe(true);
    });

    test('permuted letters and numbers', () => {
        expect(arePermutation("a4_paper0", "a_paper40")).toBe(true);
    });

    test('repeated numbers', () => {
        expect(arePermutation("541111", "154")).toBe(false);
    });

    test('not permuted letters', () => {
        expect(arePermutation("a ", "a")).toBe(false);
    });
});
