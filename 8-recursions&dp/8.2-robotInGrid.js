const uniquePaths = (m, n) => {
  let matrix = [];

  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }
  console.log(matrix);
  return matrix[m - 1][n - 1];
};

console.log(uniquePaths(3, 4));
