const helper = require("../1-strings/1.0-helper");

class Stack {
  constructor() {
    this._array = [];
  }

  isEmpty() {
    return this._array.length === 0;
  }

  push(value) {
    this._array.push(value);
  }

  pop() {
    return this._array.pop();
  }

  peek(stack) {
    const obj = this._array;
    const lastIndex = obj.length - 1;
    return obj[lastIndex];
  }
}

class MinStack {
  constructor() {
    this.stack = new Stack();
    this.mins = new Stack();
    this.currMin = Number.MAX_SAFE_INTEGER;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(value) {
    if (value < this.min()) {
      this.mins.push(this.currMin);
      this.currMin = value;
    }
    this.stack.push(value);
  }

  peek() {
    return this.stack.peek();
  }

  pop() {
    const val = this.stack.pop();

    if (val === this.currMin) {
      this.currMin = this.mins.pop();
    }
    return val;
  }

  min() {
    return this.currMin;
  }
}

const stack = new MinStack();

stack.push(6);
console.log(stack.min() === 6);

stack.push(3);
console.log(stack.min() === 3);
stack.push(4);
console.log(stack.min() === 3);
stack.push(2);
console.log(stack.min() === 2);
stack.pop();
console.log(stack.min() === 3);
stack.push(1);
console.log(stack.min() === 1);
stack.pop();
stack.push(10);
console.log(stack.min() === 3);
stack.push(-5);
console.log(stack.min() === -5);
