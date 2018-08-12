const Node = require('../../../src/containers/linked-lists/Node');
const SinglyLinkedList = require('../../../src/containers/linked-lists/SinglyLinkedList');

test('append adds a new item to the end of the list', () => {
  let singlyLinkedList = new SinglyLinkedList(1);

  singlyLinkedList.append(2);

  expect(singlyLinkedList.size()).toBe(2)
});

test('insert adds a new item at a specified position in the list', () => {
  let singlyLinkedList = new SinglyLinkedList(1);
  singlyLinkedList.append(3);
  singlyLinkedList.append(4);
  singlyLinkedList.append(5);

  singlyLinkedList.insert(1, 2);

  expect(singlyLinkedList.size()).toBe(5);
  expect(singlyLinkedList.next).toBe(2);
});


