// tests/oneAway.test.ts

import { oneAway } from '../src/oneAway';

describe('oneAway', () => {
    test('one insert', () => {
        expect(oneAway("pale", "ple")).toBe(true);
    });

    test('one remove', () => {
        expect(oneAway("pales", "pale")).toBe(true);
    });

    test('one replace', () => {
        expect(oneAway("pale", "bale")).toBe(true);
    });

    test('two replace', () => {
        expect(oneAway("pale", "'bake")).toBe(false);
    });

    test('two insert', () => {
        expect(oneAway("pal", "palee")).toBe(false);
    });

    test('two remove', () => {
        expect(oneAway("pale", "pa")).toBe(false);
    });
    
});
