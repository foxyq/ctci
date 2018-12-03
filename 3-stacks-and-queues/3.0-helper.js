"use strict";

module.exports = {
  Stack,
  Queue
};

function Stack() {
  this._array = [];
}

Stack.prototype.isEmpty = function() {
  return this._array.length === 0;
};

Stack.prototype.push = function(value) {
  this._array.push(value);
};

Stack.prototype.pop = function() {
  return this._array.pop();
};

Stack.prototype.peek = function(stack) {
  const obj = this._array;
  const lastIndex = obj.length - 1;
  return obj[lastIndex];
};

Stack.prototype.length = function() {
  return this._array.length;
};

function Queue() {
  this.arr = [];
}

Queue.prototype.add = function(animal) {
  this.arr.unshift(animal);
};

Queue.prototype.remove = function() {
  return this.arr.pop();
};

Queue.prototype.peek = function() {
  return this.arr[this.arr.length - 1];
};

Queue.prototype.isEmpty = function() {
  return this.arr.length === 0;
};
