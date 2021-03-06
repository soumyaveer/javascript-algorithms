const SinglyLinkedList = require('../../../src/containers/linked-lists/SinglyLinkedList');

test('append adds a new item at the head of an empty list', () => {
  let singlyLinkedList = new SinglyLinkedList();

  expect(singlyLinkedList.isEmpty()).toBe(true);

  singlyLinkedList.append(1);

  expect(singlyLinkedList.size()).toBe(1);
});


test('append adds a new item to the end of the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(2);

  expect(singlyLinkedList.size()).toBe(2);
});

test('insert adds a new item at a specified position in the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(3);
  singlyLinkedList.append(4);
  singlyLinkedList.append(5);

  expect(singlyLinkedList.size()).toBe(4);

  singlyLinkedList.insert(1, 2);

  expect(singlyLinkedList.size()).toBe(5);
  expect(singlyLinkedList.indexOf(1)).toBe(0);
  expect(singlyLinkedList.indexOf(2)).toBe(1);
  expect(singlyLinkedList.indexOf(3)).toBe(2);
});

test('insert adds a new item at the beginning of the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(2);
  singlyLinkedList.append(3);
  singlyLinkedList.append(4);
  singlyLinkedList.append(5);

  expect(singlyLinkedList.size()).toBe(4);

  singlyLinkedList.insert(0, 1);

  expect(singlyLinkedList.size()).toBe(5);
  expect(singlyLinkedList.indexOf(1)).toBe(0);
  expect(singlyLinkedList.indexOf(2)).toBe(1);
});

test('insert adds a new item at the end of the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(2);
  singlyLinkedList.append(3);
  singlyLinkedList.append(4);

  expect(singlyLinkedList.size()).toBe(4);

  singlyLinkedList.insert(4, 5);

  expect(singlyLinkedList.size()).toBe(5);
  expect(singlyLinkedList.indexOf(4)).toBe(3);
  expect(singlyLinkedList.indexOf(5)).toBe(4);
});

test('remove deletes an item from the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(2);
  singlyLinkedList.append(3);
  singlyLinkedList.append(4);

  expect(singlyLinkedList.size()).toBe(4);
  singlyLinkedList.remove(2);

  expect(singlyLinkedList.size()).toBe(3);
  expect(singlyLinkedList.indexOf(2)).toBe(-1);
});


test('remove deletes first item from the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(2);
  singlyLinkedList.append(3);
  singlyLinkedList.append(4);

  expect(singlyLinkedList.size()).toBe(4);
  singlyLinkedList.remove(1);

  expect(singlyLinkedList.size()).toBe(3);
  expect(singlyLinkedList.indexOf(1)).toBe(-1);
});

test('remove deletes last item from the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(2);
  singlyLinkedList.append(3);
  singlyLinkedList.append(4);

  expect(singlyLinkedList.size()).toBe(4);
  singlyLinkedList.remove(4);

  expect(singlyLinkedList.size()).toBe(3);
  expect(singlyLinkedList.indexOf(4)).toBe(-1);
});

test('indexOf returns the index of the element', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(3);
  singlyLinkedList.append(2);
  singlyLinkedList.append(4);

  expect(singlyLinkedList.size()).toBe(4);
  expect(singlyLinkedList.indexOf(3)).toBe(1);
});

test('indexOf returns -1 if the element is not in the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(2);
  singlyLinkedList.append(1);

  expect(singlyLinkedList.size()).toBe(2);
  expect(singlyLinkedList.indexOf(3)).toBe(-1);
});

test('removeAt deletes an item from a specified position in the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(2);
  singlyLinkedList.append(3);
  singlyLinkedList.append(4);

  expect(singlyLinkedList.size()).toBe(4);

  singlyLinkedList.removeAt(2);

  expect(singlyLinkedList.size()).toBe(3);
  expect(singlyLinkedList.indexOf(3)).toBe(-1);
});


test('removeAt deletes an item from the head position in the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(2);
  singlyLinkedList.append(3);

  expect(singlyLinkedList.size()).toBe(3);

  singlyLinkedList.removeAt(0);

  expect(singlyLinkedList.size()).toBe(2);
  expect(singlyLinkedList.indexOf(1)).toBe(-1);
});


test('removeAt deletes the last element in the list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(2);
  singlyLinkedList.append(3);

  expect(singlyLinkedList.size()).toBe(3);

  singlyLinkedList.removeAt(2);

  expect(singlyLinkedList.size()).toBe(2);
  expect(singlyLinkedList.indexOf(3)).toBe(-1);
});

test('isEmpty returns true if list does not contain elements', () => {
  let singlyLinkedList = new SinglyLinkedList();

  expect(singlyLinkedList.isEmpty()).toBe(true);
});

test('isEmpty returns false if list contains elements', () => {
  let singlyLinkedList = new SinglyLinkedList(1);
  singlyLinkedList.append(2);

  expect(singlyLinkedList.isEmpty()).toBe(false);
});

test('size returns number of elements in list', () => {
  let singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append(2);

  expect(singlyLinkedList.size()).toBe(2);
});
