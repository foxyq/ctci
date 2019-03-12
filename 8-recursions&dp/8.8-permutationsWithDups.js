var permuteUnique = function(nums) {
  let res = new Map();

  const permutations = (arr, start, end) => {
    if (start === end) {
      if (!res.get(arr)) {
        res.set(arr.toString(), true);
      }
    } else {
      for (let index = start; index <= end; index++) {
        [arr[index], arr[start]] = [arr[start], arr[index]];
        permutations(arr, start + 1, end);
        [arr[index], arr[start]] = [arr[start], arr[index]];
      }
    }
  };

  permutations(nums, 0, nums.length - 1);

  const result = [];

  res.forEach((val, key) => result.push(key.split(',')));

  return result;
};

console.log(permuteUnique([3, 3, 3]));
console.log('***');
console.log(permuteUnique([3, 2, 3]));
