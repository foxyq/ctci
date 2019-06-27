/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)
It is possible to make £2 in the following way:
1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?
example usage of `makeChange`:
// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2

1 - 1
2 - 2



*/

// const makeChange = (sum, curr = []) => {
//   const coins = [1, 2, 5, 10, 20, 50, 100, 200];

//   if (sum < 1) return 0;

//   let result = 0;
//   const validCoins = coins.filter(val => val <= sum);

//   validCoins.forEach(coin => {
//     if (coin === sum) {
//       result += 1;
//       curr.push(coin);
//     } else {
//       curr.push(coin);
//       result += makeChange(sum - coin, curr);
//     }
//   });

//   const set = new Set(curr);

//   return set.size;
// };

// console.log(makeChange(10)); // 1111, 22, 211
// console.log(makeChange(5)); // 5, 221, 2111, 11111

// const values = [1, 2, 5, 10, 20, 50, 100, 200];

// var makeChange = function(total) {
//   let C = Array.from({ length: total + 1 }, () => 0);
//   C[0] = 1;
//   for (let i = 0; i < values.length; i++) {
//     for (let j = C[i]; j <= total; j++) {
//       if (j - values[i] >= 0) {
//         C[j] += C[j - values[i]];
//       }
//     }
//   }
//   return C[total];
// };

// ////

// var change = function(amount, coins) {
//   const memo = new Array(amount + 1).fill(0);
//   memo[0] = 1;

//   for (const coin of coins) {
//     for (let i = coin; i < memo.length; i++) {
//       memo[i] += memo[i - coin];
//     }
//   }

//   return memo[amount];
// };

// const coins = [1, 2, 5, 10, 20, 50, 100, 200];

// console.log(change(10, coins));

// ///

// var coinChange = function(coins, amount) {
//   let dp = new Array(amount + 1);
//   dp[0] = 0;
//   for (let i = 1; i <= amount; i++) {
//     dp[i] = Number.MAX_SAFE_INTEGER;
//     coins.forEach(coin => {
//       if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//     });
//   }
//   return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
// };

// ////

function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);

  let res = Infinity;

  function helper(k, amount, count) {
    const coin = coins[k];

    // last smallest coin
    if (k === coins.length - 1) {
      if (amount % coin === 0) {
        res = Math.min(res, count + Math.floor(amount / coin));
      }
    } else {
      for (let i = Math.floor(amount / coin); i >= 0 && count + i < res; i--) {
        // count + i < res is for pruning, avoid unnecessary calculation
        helper(k + 1, amount - coin * i, count + i);
      }
    }
  }

  helper(0, amount, 0);

  return res === Infinity ? -1 : res;
}

console.log(coinChange([1, 2, 5, 10], 5));
