const permutations = string => {
  const len = string.length;

  let res = [];

  if (len === 0) {
    res.push('');
    return res;
  }

  for (let i = 0; i < len; i++) {
    const before = string.substring(0, i);
    const after = string.substring(i + 1, len);

    let partials = permutations(before + after);

    partials.forEach(x => {
      res.push(string.charAt(i) + x);
    });
  }

  return res;
};

console.log(permutations('abc'));
console.log('fails with ' + permutations('aac'));
