const grep = (haystack, needle) => {
  const checkMatch = (hayI, needleI) => {
    let i;

    for (i = hayI; i < hayI + needle.length; i++) {
      if (haystack[i] !== needle[needleI]) {
        return -1;
      }

      needleI += 1;
    }
    return i;
  };

  if (!haystack.length) return [];
  if (!needle.length) return [];

  //logic
  let needleIndex = 0;
  let haystackIndex = 0;
  const res = [];

  while (haystackIndex < haystack.length) {
    if (haystack[haystackIndex] === needle[needleIndex]) {
      const start = haystackIndex;
      const check = checkMatch(haystackIndex, needleIndex);

      if (check !== -1) {
        res.push(start);
        haystackIndex = check + 1;
      } else {
        haystackIndex = start + 1;
      }
    } else {
      haystackIndex += 1;
    }
  }

  return res;
};

console.log(grep('ababcbac', 'abc'));
