const indexOf = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }

  return -1;
};

console.log(indexOf([1, 2, 3, 5], 3));
