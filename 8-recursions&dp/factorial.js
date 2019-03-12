const factorial = n => {
  const cache = new Map();

  cache.set(0, 1);
  cache.set(1, 1);

  const getFact = num => {
    let f = cache.get(num);

    if (f === undefined) {
      f = num * getFact(num - 1);

      cache.set(num, f);
    }

    return f;
  };

  return getFact(n);
};

console.log(factorial(90));
