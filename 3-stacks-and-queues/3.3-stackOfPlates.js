const h = require("./3.0-helper");

class StackOfPlates {
  constructor(capacity = 3) {
    this.stacks = [new h.Stack()];
    this.capacity = capacity;
  }

  // push operation on the set
  add(stack) {
    this.stacks.push(stack);
  }

  // pop operation on the set
  remove() {
    this.stacks.pop();
  }

  push(value) {
    const last = this.getLastStack();

    if (last !== null && last !== undefined && !this.isFull()) {
      last.push(value);
    } else {
      const newStack = new h.Stack();
      newStack.push(value);
      this.add(newStack);
    }
  }

  pop() {
    if (this.isEmpty()) {
      if (this.remove() !== undefined) {
        return this.getLastStack().pop();
      } else return undefined;
    } else {
      const value = this.getLastStack().pop();

      if (this.isEmpty()) {
        this.remove();
      }

      return value;
    }
  }

  isEmpty() {
    const last = this.getLastStack();
    if (last) {
      return this.getLastStack().length() === 0;
    } else return true;
  }

  isFull() {
    return this.getLastStack().length() === this.capacity;
  }

  getLastStack() {
    return this.stacks[this.stacks.length - 1];
  }

  printStacks() {
    this.stacks.forEach(stack => {
      console.log(stack);
    });
    console.log("****");
  }
}

const stacks = new StackOfPlates(3);

stacks.push(1);
stacks.push(2);
stacks.push(3);

stacks.printStacks();

stacks.pop();
stacks.pop();

stacks.printStacks();
stacks.pop();
stacks.printStacks();

stacks.pop();
stacks.printStacks();

stacks.push(4);
stacks.push(5);
stacks.push(6);
stacks.push(7);
stacks.push(8);

stacks.printStacks();

stacks.push(9);
stacks.push(10);
stacks.push(11);

stacks.printStacks();

stacks.push(12);
stacks.push(13);

stacks.printStacks();
stacks.pop();
stacks.printStacks();
stacks.pop();
stacks.pop();
stacks.pop();
stacks.pop();
stacks.printStacks();
stacks.pop();
stacks.pop();
stacks.pop();
stacks.pop();

stacks.printStacks();
stacks.pop();
stacks.printStacks();
