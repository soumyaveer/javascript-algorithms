const Node = require('../../../src/containers/linked-lists/Node');

test('constructor creates a new node with element 1', () => {
  let node = new Node(1);

  expect(node).toBeTruthy();
  expect(node.element).toBe(1);
});

test('constructor creates a new node with element 2 and has previous node', () => {
  let previousNode = new Node(1);
  let currentNode = new Node(2);

  expect(previousNode.element).toBe(1);
  expect(currentNode.element).toBe(2);

  currentNode.previous = previousNode;
  expect(currentNode.previous.element).toBe(previousNode.element);
});

test('constructor creates a new node with element 2 and has next node', () => {
  let currentNode = new Node(2);
  let nextNode = new Node(3);

  expect(nextNode.element).toBe(3);
  expect(currentNode.element).toBe(2);

  currentNode.next = nextNode;
  expect(currentNode.next.element).toBe(nextNode.element);
});