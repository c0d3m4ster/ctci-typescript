// tests/aboutUrlify.test.ts

import { aboutUrlify } from '../src/aboutUrlify';

describe('urlify', () => {
    test('not permuted', () => {
        expect(aboutUrlify("Mr John Smith    ", 13)).toBe("Mr%20John%20Smith");
    });

    test('first space', () => {
        expect(aboutUrlify(" Initial Characters  ", 19)).toBe("%20Initial%20Characters");
    });

    test('final space', () => {
        expect(aboutUrlify("Final letter is a space  ", 24)).toBe("Final%20letter%20is%20a%20space%20");
    });

});
