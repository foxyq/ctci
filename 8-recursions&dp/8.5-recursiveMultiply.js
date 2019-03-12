//  iterative
// const multiply = (x, y) => {
//   let count = 0;
//   let res = 0;
//   while (count < y) {
//     res += x;
//     count++;
//   }

//   return res;
// };

const multiply = (x, y) => {
  if (x === 0 || y === 0) return 0;
  if (x === 1) return y;
  if (y === 1) return x;

  if (y < 0) {
    return -x + multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};

console.log(multiply(-3, 6));
