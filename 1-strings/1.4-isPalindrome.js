const assertEqual = require("./1.0-helper");

const createFrequencyMap = word => {
  const map = new Map();

  for (let i = 0; i < word.length; i++) {
    const character = word[i].toLowerCase();
    const frequency = map.get(character);

    if (character !== " ") {
      if (frequency !== undefined) {
        map.set(character, frequency + 1);
      } else {
        map.set(character, 1);
      }
    }
  }
  return map;
};

const isPalindrome = word => {
  if (word) {
    const frequencyMap = createFrequencyMap(word);

    let oddCount = 0;

    frequencyMap.forEach(x => {
      x % 2 == 1 ? (oddCount += 1) : null;
    });

    return oddCount <= 1;
  }

  return false;
};

assertEqual(isPalindrome("tact  coa"), true, "palindrome check");
assertEqual(isPalindrome("A car, a man, a maraca"), true, "palindrome check");
assertEqual(isPalindrome("A but tuba"), true, "palindrome check");
assertEqual(
  isPalindrome("a dog a plan a canal pagoda"),
  true,
  "palindrome check"
);
assertEqual(isPalindrome("abcd"), false, "palindrome check");
assertEqual(isPalindrome("aeeettteeeaa"), false, "palindrome check");
assertEqual(isPalindrome("tactt  coa"), false, "palindrome check");
