/*
intersection - Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?

intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
intersection([1, 5, 4, 2], [7, 12])             // []

*/

const intersection = (arr1, arr2) => {
  const res = [];
  const set = new Set();

  // O(N)
  for (let num of arr1) {
    set.add(num);
  }

  //O(M)
  for (let num of arr2) {
    if (set.has(num)) {
      res.push(num);
    }
  }

  return res;
};

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
console.log(intersection([1, 5, 4, 2], [7, 12]));
console.log(intersection([1, 2, 3, 4], [0, 32, 3]));
