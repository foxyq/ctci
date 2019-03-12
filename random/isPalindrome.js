const isPalindrome = str => {
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  );
};

console.log(isPalindrome('abcdcba'));
console.log(isPalindrome('abcba'));
console.log(isPalindrome('amanaplanacanalpanama'));
