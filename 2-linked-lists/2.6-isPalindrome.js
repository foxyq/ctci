const helper = require("./2.0-helper");

const list1 = new helper.LinkedList();
const list2 = new helper.LinkedList();

list2.addToHead(6);

const list3 = new helper.LinkedList();

list3.addToHead(6);
list3.addToHead(1);

const list4 = new helper.LinkedList();

list4.addToHead(6);
list4.addToHead(1);
list4.addToHead(7);

const list5 = new helper.LinkedList();

list5.addToHead(6);
list5.addToHead(1);
list5.addToHead(7);
list5.addToHead(7);
list5.addToHead(1);
list5.addToHead(6);

const list6 = new helper.LinkedList();

list6.addToHead(6);
list6.addToHead(1);
list6.addToHead(7);
list6.addToHead(1);
list6.addToHead(6);

const list7 = new helper.LinkedList();

list7.addToHead(6);
list7.addToHead(1);
list7.addToHead(7);
list7.addToHead(7);
list7.addToHead(7);
list7.addToHead(2);
list7.addToHead(6);

const testArray = [
  [list1, true],
  [list2, true],
  [list3, false],
  [list4, false],
  [list5, true],
  [list6, true],
  [list7, false]
];

testArray.forEach(list => {
  helper.assertEqual(list[0].isPalindrome(), list[1], "whether is palindrome");
});
