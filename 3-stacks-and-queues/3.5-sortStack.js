const h = require("./3.0-helper");

const sortStack = toSort => {
  const helper = new h.Stack();

  while (!toSort.isEmpty()) {
    const tmp = toSort.pop();

    while (!helper.isEmpty() && helper.peek() > tmp) {
      toSort.push(helper.pop());
    }

    helper.push(tmp);
  }
  // all sorted in helper
  // push it back to original stack
  while (!helper.isEmpty()) {
    toSort.push(helper.pop());
  }
};

const randomStack = new h.Stack();

randomStack.push(1);
randomStack.push(8);
randomStack.push(5);
randomStack.push(7);
randomStack.push(9);
randomStack.push(3);
randomStack.push(2);
randomStack.push(4);

console.log("before");
console.log(randomStack);
sortStack(randomStack);
console.log("after");
console.log(randomStack);
