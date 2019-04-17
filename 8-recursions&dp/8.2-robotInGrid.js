const uniquePaths = (m, n) => {
  let matrix = [];

  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 1;
    }
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
    }
  }
  console.log(matrix);
  return matrix[m - 1][n - 1];
};

console.log(uniquePaths(3, 3));
