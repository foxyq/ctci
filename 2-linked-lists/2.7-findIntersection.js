const helper = require("./2.0-helper");

const list1 = new helper.LinkedList();

list1.pushToTail(1);
list1.pushToTail(2);
list1.pushToTail(3);
list1.pushToTail(4);
list1.pushToTail(5);

const intersection1 = list1.findKthToLast(2);

const list2 = new helper.LinkedList();

list2.pushToTail(666);
list2.pushToTail(999);
list2.tail.next = intersection1;
list2.tail = list2.findKthToLast(1);

const list3 = new helper.LinkedList();

list3.pushToTail(666);
list3.pushToTail(999);
list3.pushToTail(4);
list3.pushToTail(5);

const intersection2 = list3.findKthToLast(3);

const list4 = new helper.LinkedList();

list4.pushToTail(36);
list4.pushToTail(42);
list4.tail.next = intersection2;
list4.tail = list4.findKthToLast(1);

const testArray = [
  [list1, list2, intersection1],
  [list2, list1, intersection1],
  [list1, list3, null],
  [list2, list3, null],
  [list3, list4, intersection2]
];

testArray.forEach(list => {
  helper.assertEqual(
    helper.findIntersection(list[0], list[1]),
    list[2],
    "whether has an intersection node"
  );
});
