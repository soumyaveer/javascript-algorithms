const Node = require('../../../src/containers/trees/Node');
const BinarySearchTree = require('../../../src/containers/trees/BinarySearchTree');

describe('insert()', () =>{
  test('if tree is empty, inserts key at root position', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);

    expect(tree.getRoot().key).toBe(11);
  });

  test('inserts new key in the tree', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);

    const root = tree.getRoot();
    expect(root.left.key).toBe(7);
    expect(root.right.key).toBe(15);
  });
});

describe('search()', () =>{
  test('returns true if key is present in the tree', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);

    expect(tree.search(7)).toBe(true);
  });

  test('returns false if key is not present in the tree', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);

    expect(tree.search(12)).toBe(false);
  });
});

describe('inOrderTraverse()', () => {
  test('visits all node of the tree using in-order-traversal', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);

    expect(tree.inOrderTraversal()).toBe("3 5 6 7 8 10 11 12 13 14 15 18 20 25");
  });
});

describe('preOrderTraverse()', () => {
  test('visits all node of the tree using pre-order-traversal', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);

    expect(tree.preOrderTraverse()).toBe("11 7 5 3 6 9 8 10 15 13 12 14 20 18 25");
  });
});

describe('postOrderTraverse()', () => {
  test('visits all node of the tree using post-order-traversal', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);

    expect(tree.postOrderTraverse()).toBe("3 6 5 8 10 9 7 12 14 13 18 25 20 15 11");
  });
});

describe('min()', () => {
  test('returns minimum value/key of the tree', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);

    expect(tree.min()).toBe(3);
  });
});


describe('max()', () => {
  test('returns the maximum value/key of the tree', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);

    expect(tree.max()).toBe(15);
  });
});

describe('remove()', () => {
  test('removes a key from the tree, when node is a leaf', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);

    expect(tree.remove(3)).toBe(3);
    expect(tree.preOrderTraverse()).toBe("11 7 5 6 9 8 10 15 13 12 14 20 18 25");
  });

  test('removes a key from the tree, when node has a left or a right child', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);

    expect(tree.remove(5)).toBe(5);
    expect(tree.preOrderTraverse()).toBe("11 7 3 6 9 8 10 15 13 12 14 20 18 25");
  });


  test('removes a key from the tree, when node has both left and right child', () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);

    expect(tree.remove(15)).toBe(15);
    expect(tree.preOrderTraverse()).toBe("11 7 3 6 9 8 10 18 13 12 14 20 25");
  });
});