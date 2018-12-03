const h = require("./3.0-helper");

const myQueue = function() {
  this.front = new h.Stack();
  this.back = new h.Stack();
  this.backUp = true;
};

myQueue.prototype.add = function(value) {
  if (!this.backUp) {
    while (!this.front.isEmpty()) {
      this.back.push(this.front.pop());
    }
    this.backUp = true;
  }
  this.back.push(value);
};

myQueue.prototype.remove = function() {
  if (this.backUp) {
    while (!this.back.isEmpty()) {
      this.front.push(this.back.pop());
    }
    this.backUp = false;
  }
  return this.front.pop();
};

myQueue.prototype.peek = function() {
  if (this.backUp) {
    while (!this.back.isEmpty()) {
      this.front.push(this.back.pop());
    }
    this.backUp = false;
  }
  return this.front.peek();
};

myQueue.prototype.isEmpty = function() {
  return this.front.isEmpty() && this.back.isEmpty();
};

/* TEST */
var m = new myQueue();
console.log(m.isEmpty(), true);

m.add("a");
m.add("b");
m.add("c");
m.add("d");
m.add("e");
console.log(m.peek(), "a");
m.remove();
console.log(m.peek(), "b");

console.log(m);
