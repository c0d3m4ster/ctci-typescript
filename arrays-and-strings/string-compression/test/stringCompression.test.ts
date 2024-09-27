// tests/stringCompression.test.ts

import { stringCompression } from '../src/stringCompression';

describe('stringCompression', () => {
    test('compressed', () => {
        expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3");
    });

    test('not compressed', () => {
        expect(stringCompression("abca")).toBe("abca");
    });

    test('case sensitive', () => {
        expect(stringCompression("aAbcAa")).toBe("aAbcAa");
    });

    test('empty string', () => {
        expect(stringCompression("")).toBe("");
    });

    test('single character', () => {
        expect(stringCompression("C")).toBe("C");
    });

    test('repeated single character', () => {
        expect(stringCompression("www")).toBe("w3");
    });
    
});
