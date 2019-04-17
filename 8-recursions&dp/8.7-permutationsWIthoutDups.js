const permutations = str => {
  const res = [];

  if (str === '') {
    res.push(str);
    return res;
  }

  for (let i = 0; i < str.length; i++) {
    const beforeI = str.substr(0, i);
    const afterI = str.substr(i + 1);

    const partials = permutations(beforeI + afterI);

    partials.forEach(perm => {
      res.push(str[i] + perm);
    });
  }

  return res;
};

console.log(permutations('abc'));
// console.log('fails with ' + permutations('aac'));
