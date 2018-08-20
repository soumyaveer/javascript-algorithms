const Node = require('../../../src/containers/trees/Node');
const BinarySearchTree = require('../../../src/containers/trees/BinarySearchTree');

describe('insert()', () =>{
  test('if tree is empty, inserts key at root position', () => {
    const tree = new BinarySearchTree();
    tree.insert(11)

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