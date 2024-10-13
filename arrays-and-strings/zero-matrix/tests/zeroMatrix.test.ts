// tests/zeroMatrix.test.ts

import zeroMatrix from "../src/zeroMatrix";

describe("zeroMatrix", () => {
  test("matrix with a zero in the middle", () => {
    const matrix = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9],
    ];
    zeroMatrix(matrix);
    expect(matrix).toEqual([
      [1, 0, 3],
      [0, 0, 0],
      [7, 0, 9],
    ]);
  });

  test("matrix with no zeros", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    zeroMatrix(matrix);
    expect(matrix).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  test("matrix that is completely zero", () => {
    const matrix = [
      [0, 0],
      [0, 0],
    ];
    zeroMatrix(matrix);
    expect(matrix).toEqual([
      [0, 0],
      [0, 0],
    ]);
  });

  test("single column with a zero", () => {
    const matrix = [[1], [0], [3]];
    zeroMatrix(matrix);
    expect(matrix).toEqual([[0], [0], [0]]);
  });

  test("matrix with multiple zeros", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0],
    ];
    zeroMatrix(matrix);
    expect(matrix).toEqual([
      [1, 2, 0],
      [4, 5, 0],
      [0, 0, 0],
    ]);
  });
});
