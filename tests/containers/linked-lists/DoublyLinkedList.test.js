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


test('remove deletes an item from the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  doublyLinkedList.append(4);

  expect(doublyLinkedList.size()).toBe(4);
  doublyLinkedList.remove(2);

  expect(doublyLinkedList.size()).toBe(3);
  expect(doublyLinkedList.indexOf(2)).toBe(-1);
});


test('remove deletes first item from the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  doublyLinkedList.append(4);

  expect(doublyLinkedList.size()).toBe(4);
  doublyLinkedList.remove(1);

  expect(doublyLinkedList.size()).toBe(3);
  expect(doublyLinkedList.indexOf(1)).toBe(-1);
});

test('remove deletes last item from the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  doublyLinkedList.append(4);

  expect(doublyLinkedList.size()).toBe(4);
  doublyLinkedList.remove(4);

  expect(doublyLinkedList.size()).toBe(3);
  expect(doublyLinkedList.indexOf(4)).toBe(-1);
});


test('indexOf returns the index of the element', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(3);
  doublyLinkedList.append(2);
  doublyLinkedList.append(4);

  expect(doublyLinkedList.size()).toBe(4);
  expect(doublyLinkedList.indexOf(3)).toBe(1);
});

test('indexOf returns -1 if the element is not in the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(2);
  doublyLinkedList.append(1);


  expect(doublyLinkedList.size()).toBe(2);
  expect(doublyLinkedList.indexOf(3)).toBe(-1);
});

test('removeAt deletes an item from a specified position in the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  doublyLinkedList.append(4);

  expect(doublyLinkedList.size()).toBe(4);

  doublyLinkedList.removeAt(2);

  expect(doublyLinkedList.size()).toBe(3);
  expect(doublyLinkedList.indexOf(3)).toBe(-1);
});

test('removeAt deletes an item from the head position in the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);

  expect(doublyLinkedList.size()).toBe(3);

  doublyLinkedList.removeAt(0);

  expect(doublyLinkedList.size()).toBe(2);
  expect(doublyLinkedList.indexOf(1)).toBe(-1);
});

test('removeAt deletes the last element in the list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);

  expect(doublyLinkedList.size()).toBe(3);

  doublyLinkedList.removeAt(2);

  expect(doublyLinkedList.size()).toBe(2);
  expect(doublyLinkedList.indexOf(3)).toBe(-1);
});


test('isEmpty returns true if list does not contain elements', () => {
  let doublyLinkedList = new DoublyLinkedList();

  expect(doublyLinkedList.isEmpty()).toBe(true);
});

test('isEmpty returns false if list contains elements', () => {
  let doublyLinkedList = new DoublyLinkedList(1);
  doublyLinkedList.append(2);

  expect(doublyLinkedList.isEmpty()).toBe(false);
});

test('size returns number of elements in list', () => {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);

  expect(doublyLinkedList.size()).toBe(2);
});
