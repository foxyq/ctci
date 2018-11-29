const helper = require("./2.0-helper");

const a = new helper.Node("a");
const b = new helper.Node("b");
const c = new helper.Node("c");
const d = new helper.Node("d");
const e = new helper.Node("e");
const f = new helper.Node("f");
const g = new helper.Node("g");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

const list = new helper.LinkedList();
list.head = a;

const testArray = [
  [1, g, true],
  [2, f, true],
  [3, e, true],
  [4, d, true],
  [5, c, true],
  [6, b, true],
  [7, a, true],
  [8, c, false],
  [3, a, false]
];

testArray.forEach(item => {
  helper.assertEqual(
    helper.compareNodes(list.findKthToLast(item[0]), item[1]),
    item[2],
    " Kth element from end found succesfully"
  );
});
