// Rotate Matrix: 
// Given an image represented by an NxN matrix, 
// where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. 
// Can you do this in place?
// Example:
// [[1, 2, 3],         [[7, 4, 1], 
//  [4, 5, 6],    ->    [8, 5, 2], 
//  [7, 8, 9]]          [9, 6, 3]]

// defining a function
export function rotateMatrix(matrix: number[][]): number[][] {
    const n = matrix.length;
    
    for (let l = 0; l < Math.floor(n / 2); l++) {
        for (let i = l; i < n - l - 1; i++) {
            const temp = matrix[l][i];
            matrix[l][i] = matrix[n - i - 1][l];
            matrix[n - i - 1][l] = matrix[n - l - 1][n - i - 1];
            matrix[n - l - 1][n - i - 1] = matrix[i][n - l - 1];
            matrix[i][n - l - 1] = temp;
        }
    }
    
    return matrix;
}