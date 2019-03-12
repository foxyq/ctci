const subsets = nums => {
  if (nums.length === 0) return [[]];
  const num = nums.shift();
  const rest = subsets(nums);
  return rest.concat(rest.map(set => [...set, num]));
};

console.log(subsets([6, 7]));
