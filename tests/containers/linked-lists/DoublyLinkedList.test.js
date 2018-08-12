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

test('insert adds a new item at a specified position in the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(3);
  doublyLinkedList.append(4);
  doublyLinkedList.append(5);

  expect(doublyLinkedList.size()).toBe(4);

  doublyLinkedList.insert(1, 2);

  expect(doublyLinkedList.size()).toBe(5);
  expect(doublyLinkedList.indexOf(1)).toBe(0);
  expect(doublyLinkedList.indexOf(2)).toBe(1);
  expect(doublyLinkedList.indexOf(3)).toBe(2);
});

test('insert adds a new item at the beginning of the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  doublyLinkedList.append(4);
  doublyLinkedList.append(5);

  expect(doublyLinkedList.size()).toBe(4);

  doublyLinkedList.insert(0, 1);

  expect(doublyLinkedList.size()).toBe(5);
  expect(doublyLinkedList.indexOf(1)).toBe(0);
  expect(doublyLinkedList.indexOf(2)).toBe(1);
});

test('insert adds a new item at the end of the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  doublyLinkedList.append(4);

  expect(doublyLinkedList.size()).toBe(4);

  doublyLinkedList.insert(4, 5);

  expect(doublyLinkedList.size()).toBe(5);
  expect(doublyLinkedList.indexOf(4)).toBe(3);
  expect(doublyLinkedList.indexOf(5)).toBe(4);
});

