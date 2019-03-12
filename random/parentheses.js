const isBalanced = arr => {
  const stack = [];

  for (let c of arr) {
    if (c === '{') {
      stack.push(c);
    }

    if (c === '}') {
      const top = stack.pop();
      if (top !== '{') {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isBalanced('}{') + ' === false'); // false

console.log(isBalanced('{{}') + ' === false'); // false

console.log(isBalanced('{}{}') + ' === true'); // true

console.log(isBalanced('foo { bar { baz } boo }') + ' === true'); // true

console.log(isBalanced('foo { bar { baz }') + ' === false'); // false

console.log(isBalanced('foo { bar } }') + ' === false'); // false));
