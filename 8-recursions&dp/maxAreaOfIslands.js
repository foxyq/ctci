var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  let currArea = 0;

  const explore = (row, col, size) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      return;

    // console.log(row, col, size);

    if (grid[row][col] == 1) {
      grid[row][col] = '#';
      currArea++;
      maxArea = Math.max(maxArea, currArea);

      explore(row, col + 1, size + 1); // right
      //   explore(row + 1, col + 1, size + 1); // down right
      explore(row + 1, col, size + 1); // down
      //   explore(row + 1, col, size - 1); // down left
      explore(row, col - 1, size + 1); // left
      //   explore(row - 1, col - 1, size + 1); // up left
      explore(row - 1, col, size + 1); // up
      //   explore(row - 1, col + 1, size + 1); // up right
    }
  };

  for (let rows = 0; rows < grid.length; rows++) {
    for (let cols = 0; cols < grid[0].length; cols++) {
      if (grid[rows][cols] === 1) {
        currArea = 0;
        explore(rows, cols, 1);
      }
    }
  }

  return maxArea;
};

const map = [
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
];

const map2 = [
  [0, 0, 1, 1, 0],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1]
];

console.log(maxAreaOfIsland(map2));
