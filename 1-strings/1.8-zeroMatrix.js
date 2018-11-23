const assertEqual = require("./1.0-helper");

const zeroMatrix = matrix => {
  let zeroRows = [];
  let zeroColumns = [];

  matrix.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column === 0) {
        zeroRows[rowIndex] = 1;
        zeroColumns[columnIndex] = 1;
      }
    });
  });

  matrix.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (zeroRows[rowIndex] !== undefined) {
        row[columnIndex] = 0;
      }
      if (zeroColumns[columnIndex] !== undefined) {
        row[columnIndex] = 0;
      }
    });
  });

  return matrix;
};

let matrix = [[1, 1, 0, 1], [0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]];
let result = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 1], [0, 0, 0, 0]];
assertEqual(zeroMatrix(matrix), result, "is correctly zeroed");

matrix = [[1, 1, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]];
result = [[0, 1, 1, 1], [0, 0, 0, 0], [0, 1, 1, 1], [0, 0, 0, 0]];
assertEqual(zeroMatrix(matrix), result, "is correctly zeroed");

matrix = [[1, 1, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]];
result = [[0, 1, 1, 1], [0, 0, 1, 0], [0, 1, 1, 1], [0, 0, 0, 0]];
assertEqual(zeroMatrix(matrix), result, "is correctly zeroed");
