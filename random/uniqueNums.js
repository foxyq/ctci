/*
uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?

uniq([])                              // []
uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]

*/

const uniq = arr => {
  const set = new Set();
  const res = [];

  for (let num of arr) {
    const isThere = set.has(num);

    if (!isThere) {
      res.push(num);
      set.add(num);
    }
  }

  return res;
};

console.log(uniq([1, 1, 1, 1, 6, 2, 2, 2, 7, 2, 3, 8, 3, 4, 4, 9, 4, 4, 5]));
console.log(uniq([1, 4, 2, 2, 3, 4, 8]));
