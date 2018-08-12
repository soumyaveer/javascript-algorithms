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

  expect(singlyLinkedList.size()).toBe(4);

  singlyLinkedList.insert(1, 2);

  expect(singlyLinkedList.size()).toBe(5);
  expect(singlyLinkedList.indexOf(2)).toBe(1);
});

test('remove deletes an item from the list', () => {
  let singlyLinkedList = new SinglyLinkedList(1);
  singlyLinkedList.append(2);
  singlyLinkedList.append(3);
  singlyLinkedList.append(4);

  expect(singlyLinkedList.size()).toBe(4);

  singlyLinkedList.remove(2);

  expect(singlyLinkedList.size()).toBe(3);
  expect(singlyLinkedList.indexOf(3)).toBe(1);
});

