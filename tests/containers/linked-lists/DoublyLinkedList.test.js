const DoublyLinkedList = require('../../../src/containers/linked-lists/DoublyLinkedList');

test('append adds a new item at the head of an empty list', () => {
  let doublyLinkedList = new DoublyLinkedList();

  expect(doublyLinkedList.isEmpty()).toBe(true);

  doublyLinkedList.append(1);

  expect(doublyLinkedList.size()).toBe(1);
});


test('append adds a new item to the end of the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);

  expect(doublyLinkedList.size()).toBe(2);
});