const helper = require("./2.0-helper");

const list1 = new helper.LinkedList();

list1.pushToTail(1);
list1.pushToTail(2);
list1.pushToTail(3);
list1.pushToTail(4);
list1.pushToTail(5);
list1.pushToTail(6);
list1.pushToTail(7);
list1.pushToTail(8);
list1.pushToTail(9);
list1.pushToTail(10);
list1.pushToTail(11);
list1.pushToTail(12);
list1.pushToTail(13);
list1.pushToTail(14);

const beginningOfLoop = list1.findKthToLast(6); // value 9

list1.tail.next = beginningOfLoop;

/**
 * 
 
 1-2-3-4-5-6-7-8-9-10-11-12-13-14
                 |             |                 
                 [-------------]

 * 
 */

const list2 = new helper.LinkedList();

list2.pushToTail(666);
list2.pushToTail(999);
list2.pushToTail(666);
list2.pushToTail(999);
list2.pushToTail(666);
list2.pushToTail(999);
list2.pushToTail(666);
list2.pushToTail(999);

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

const list5 = new helper.LinkedList();

list5.pushToTail(42);
list5.pushToTail(42);
list5.pushToTail(36);
list5.pushToTail(42);
list5.pushToTail(42);

const beginningOfLoop2 = list5.findKthToLast(3); // value 36
list5.tail.next = beginningOfLoop2;

const testArray = [
  [list1, beginningOfLoop],
  [list2, null],
  [list3, null],
  [list4, null],
  [list5, beginningOfLoop2]
];

testArray.forEach(list => {
  helper.assertEqual(list[0].findCycleStart(), list[1], "find start of cycle");
});
