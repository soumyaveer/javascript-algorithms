const Node = require('../../../src/containers/trees/Node');
const AVLTree = require('../../../src/containers/trees/AVLTree');

describe('insert()', () => {
  test('inserts key to the avl tree', () => {
    const avlTree = new AVLTree();
    avlTree.insert(50);

    expect(avlTree.getRoot().key).toBe(50);
  });

  test('inserts key to the avl tree - Right Right Rotation', () => {
    const avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(30);
    avlTree.insert(70);
    avlTree.insert(60);
    avlTree.insert(80);

    // inserting a node that unbalances the tree
    avlTree.insert(90);

    // returns the balanced tree
    expect(avlTree.getRoot().key).toBe(70);
    expect(avlTree.preOrderTraverse()).toMatchObject([70, 50, 30, 60, 80, 90]);
  });

  test('inserts key to the avl tree - Left Left Rotation', () => {
    const avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(30);
    avlTree.insert(70);
    avlTree.insert(10);
    avlTree.insert(40);

    // inserting a node that unbalances the tree
    avlTree.insert(5);

    // returns the balanced tree
    expect(avlTree.getRoot().key).toBe(30);
    expect(avlTree.preOrderTraverse()).toMatchObject([30,10, 5, 50, 40, 70]);
  });


  test('inserts key to the avl tree - Left Right Rotation', () => {
    const avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(30);
    avlTree.insert(70);
    avlTree.insert(10);
    avlTree.insert(40);

    // inserting the node that unbalances the tree
    avlTree.insert(35);

    //returning the balanced tree
    expect(avlTree.getRoot().key).toBe(40);
    expect(avlTree.preOrderTraverse()).toMatchObject([40, 30, 10, 35, 50, 70]);
  });


  test('inserts key to the avl tree - Right Left Rotation', () => {
    const avlTree = new AVLTree();
    avlTree.insert(70);
    avlTree.insert(50);
    avlTree.insert(80);
    avlTree.insert(72);
    avlTree.insert(90);

    // inserting the node that unbalances the tree
    avlTree.insert(75);

    // returning the balanced tree
    expect(avlTree.getRoot().key).toBe(72);
    expect(avlTree.preOrderTraverse()).toMatchObject([72, 70, 50, 80, 75, 90]);
  });
});