// tests/rotateMatrix.test.ts

import { rotateMatrix } from '../src/rotateMatrix';

describe('rotateMatrix', () => {
    test('matrix 3 by 3', () => {
        const M_in = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const M_out = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
        expect(rotateMatrix(M_in)).toEqual(M_out);
    });

    test('matrix 4 by 4', () => {
        const M_in = [
            [75, 57, 19, 65],
            [26, 87, 82, 18],
            [78, 28, 76, 46],
            [99, 50, 37, 28]
        ];
        const M_out = [
            [99, 78, 26, 75], 
            [50, 28, 87, 57], 
            [37, 76, 82, 19], 
            [28, 46, 18, 65]
        ];
        expect(rotateMatrix(M_in)).toEqual(M_out);
    });
});