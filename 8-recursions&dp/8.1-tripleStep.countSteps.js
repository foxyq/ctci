const countSteps = n => {
  let memo = {};

  const runUp = n => {
    if (n < 0) {
      return 0;
    } else if (n === 0) {
      return 1;
    } else if (memo[n] > -1) {
      return memo[n];
    } else {
      memo[n] = runUp(n - 1) + runUp(n - 2) + runUp(n - 3);
      return memo[n];
    }
  };

  return runUp(n);
};

console.log(countSteps(4));
