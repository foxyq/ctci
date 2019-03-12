const arr = [1, 2, 3, 4];

Array.prototype.map2 = function(fn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = fn(this[i]);
  }

  return result;
};

Array.prototype.filter2 = function(fn) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    fn(this[i]) && res.push(this[i]);
  }
  return res;
};

Array.prototype.reduce2 = function(fn, acc) {
  for (let i = 0; i < this.length; i++) {
    acc = fn(acc, this[i]);
  }

  return acc;
};

console.log(arr);
console.log(arr.map2(x => 3 * x).filter(x => x > 6));
console.log(arr);
console.log(arr.reduce2((first, next) => first + next, 0));
console.log(arr);
