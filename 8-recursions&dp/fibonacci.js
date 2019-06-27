//primitive

const fibonnaci = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonnaci(n - 1) + fibonnaci(n - 2);
};

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(num => console.log(fibonnaci(num)));

///
console.log('***');

//with memo
const fib = num => {
  const table = new Map();

  table.set(0, 0);
  table.set(1, 1);

  const getFib = num => {
    let f = table.get(num);

    if (f === undefined) {
      f = getFib(num - 1) + getFib(num - 2);
      table.set(num, f);
    }

    return f;
  };

  return getFib(num);
};

console.log(fib(1231));
