const helper = require("./2.0-helper");

let list = new helper.LinkedList();

list.pushToTail("igor");
list.pushToTail("2");
list.pushToTail("1");
list.pushToTail("foxy");
list.pushToTail("3");
list.pushToTail("123");

const list2 = new helper.LinkedList();

list2.pushToTail("igor");
list2.pushToTail("2");
list2.pushToTail("1");
list2.pushToTail("foxy");
list2.pushToTail("123");

const list20 = new helper.LinkedList();

list20.pushToTail("2");
list20.pushToTail("1");
list20.pushToTail("foxy");
list20.pushToTail("123");

const listM5 = new helper.LinkedList();

listM5.pushToTail("2");
listM5.pushToTail("1");
listM5.pushToTail("foxy");
listM5.pushToTail("123");

const testArray = [
  [2, list2, true],
  [20, list20, true],
  [-5, listM5, true],
  [1, list2, false]
];

testArray.forEach(item => {
  // calling delete function here as it directly changes the list itself
  list.deleteNode(list.findKthToLast(item[0]));

  helper.assertEqual(
    helper.compareLists(list, item[1]),
    item[2],
    ` correctly deleted ${item[0]}. element from end`
  );
});
