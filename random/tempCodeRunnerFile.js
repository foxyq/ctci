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

console.log(isBalanced('}{')); // false

console.log(isBalanced('{{}')); // false

console.log(isBalanced('{}{}')); // true

console.log(isBalanced('foo { bar { baz } boo }')); // true

console.log(isBalanced('foo { bar { baz }')); // false

console.log(isBalanced('foo { bar } }')); // false));
