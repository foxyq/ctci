var permute = function(nums) {
  //nums are distinct numbers.
  var numsLen = nums.length,
    result = [];

  function getPermutations(workingArr, candidateArray) {
    var candidateArrayLen = candidateArray.length;

    if (candidateArrayLen < 1) {
      result.push(workingArr.slice()); //Here we must do a copy. Because an array is an object, every time we're passing its reference into a new function.
    } else {
      for (let index = 0; index < candidateArrayLen; index++) {
        var nextCandidate = candidateArray.slice(); //Same reason, array is object, copy is needed.
        workingArr.push(candidateArray[index]);
        nextCandidate.splice(index, 1);
        getPermutations(workingArr, nextCandidate);
        workingArr.pop();
      }
    }
  }

  getPermutations([], nums);
  return result;
};

// console.log(permute([1, 2, 3]));

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

// console.log(permuteUnique([2, 3, 2]));

const nextPermutation = nums => {
  const len = nums.length;

  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  // go from right and fight first digit lesser than its right neigh
  for (let i = len - 2; i > -1; i--) {
    if (nums[i] < nums[i + 1]) {
      // found it .. go from right and fight first larger num
      for (let j = len - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          //found it .. swap
          [nums[j], nums[i]] = [nums[i], nums[j]];
          reverse(i + 1, len - 1);
          return nums;
        }
      }
    }
  }

  return nums.reverse();
};

console.log(nextPermutation([3, 2, 1]));
