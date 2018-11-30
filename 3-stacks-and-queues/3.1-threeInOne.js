const helper = require("../1-strings/1.0-helper");

class TripleStack {
  constructor() {
    this._array = [[], [], []];
  }

  isEmpty(stack) {
    return this._array[stack - 1].length === 0;
  }

  push(stack, value) {
    this._array[stack - 1].push(value);
  }

  pop(stack) {
    return this._array[stack - 1].pop();
  }

  peek(stack) {
    const obj = this._array[stack - 1];
    const lastIndex = obj.length - 1;
    return obj[lastIndex];
  }
}

const stack = new TripleStack();

const testArray = [[]];

console.log(stack.peek(1));
console.log(stack.pop(3));

stack.push(1, 6);
stack.push(1, 2);
stack.push(1, 3);

stack.push(2, 4);
stack.push(2, 4);
stack.push(2, 4);

stack.push(3, 3);

stack.pop(3);

console.log(stack);

console.log(stack.isEmpty(3));
console.log(stack.isEmpty(2));
console.log(stack.peek(1));
