const Node = require('../../../src/containers/trees/Node');

test('constructor creates a new node with element A', () => {
  let node = new Node(1);

  expect(node).toBeTruthy();
  expect(node.key).toBe(1);
});

test('constructor creates a new node and inserts it to the left', () => {
  let node1 = new Node(11);
  let node2 = new Node(7);

  node1.left = node2;

  expect(node1.key).toBe(11);
  expect(node1.left).toBe(node2);
});

test('constructor creates a new node and inserts it to the right', () => {
  let node1 = new Node(11);
  let node2 = new Node(27);

  node1.right = node2;

  expect(node1.key).toBe(11);
  expect(node1.right).toBe(node2);
});