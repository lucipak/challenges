var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    const above = grid[i - 1];
    const lower = grid[i + 1];
    for (let j = 0; j < grid[i].length; j++) {
      let current = grid[i][j];
      const previous = grid[i][j - 1];
      if (current === '0') j++;
      if (current === '1') {
        if (
          (lower && lower[j] === 'c') ||
          (above && above[j] === 'c') ||
          (previous && previous === 'c')
        ) {
          j++;
        } else {
          count++;
          grid[i][j] = 'c';
        }
      }
    }
  }
  return count;
};

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

numIslands(grid);
