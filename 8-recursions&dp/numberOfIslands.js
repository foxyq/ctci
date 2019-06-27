/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
  const searchAround = (row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      return;

    const value = grid[row][col];

    if (value == 1) {
      grid[row][col] = 'V';

      searchAround(row, col + 1);
      searchAround(row + 1, col);
      searchAround(row, col - 1);
      searchAround(row - 1, col);
    }
  };

  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        islands++;
        searchAround(i, j);
      }
    }
  }

  return islands;
};

const map = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '1'],
  ['0', '0', '0', '1', '1']
];

console.log(numIslands(map) === 2);
