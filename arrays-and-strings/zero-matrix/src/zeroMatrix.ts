// Zero Matrix:
// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.

// defining a function to check if an input string has unique characters

const zeroMatrix = (matrix: number[][]): void => {
  const rows: number = matrix.length;
  const cols: number = matrix[0].length;
  const zeroRows: Set<number> = new Set();
  const zeroCols: Set<number> = new Set();

  // First pass: identify all rows and columns that need to be zeroed
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  // Second pass: set identified rows to zero
  for (let r of zeroRows) {
    for (let j = 0; j < cols; j++) {
      matrix[r][j] = 0;
    }
  }

  // Set identified columns to zero
  for (let c of zeroCols) {
    for (let i = 0; i < rows; i++) {
      matrix[i][c] = 0;
    }
  }
};
export default zeroMatrix;
