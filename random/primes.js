const isPrime = num => {
  const limit = Math.floor(Math.sqrt(num));

  for (let i = 2; i < limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const getPrimes = (n = 0) => {
  const primes = n < 2 ? [] : [2];

  for (let i = 3; i <= n; i += 1) {
    if (primes.every(x => i % x)) primes.push(i);
  }

  return primes;
};

console.log(getPrimes(59));
