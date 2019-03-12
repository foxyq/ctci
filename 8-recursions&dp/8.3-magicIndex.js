const magicFast = arr => {
  return magicIndex(arr);
};

const magicIndex = (arr, left = 0, right = arr.length - 1) => {
  if (right < left) return false;

  let mid = Math.floor((left + right) / 2);

  if (mid === arr[mid]) {
    return true;
  } else if (arr[mid] > mid) {
    return magicIndex(arr, left, mid - 1);
  } else {
    return magicIndex(arr, mid + 1, right);
  }

  return false;
};

console.log(magicFast([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));
console.log(magicFast([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]));
console.log(magicFast([1, 2, 3, 4, 5]));
console.log(magicFast([0, 1, 2, 3, 4, 5]));
