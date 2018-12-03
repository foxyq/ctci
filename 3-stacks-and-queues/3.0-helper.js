"use strict";

module.exports = {
  Stack
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
