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
    avlTree.insert(80);
    avlTree.insert(60);

    avlTree.insert(90);

    expect(avlTree.inOrderTraverse()).toMatchObject([30, 50, 60, 70, 80, 90])

  });

  test('inserts key to the avl tree - Left Left Rotation', () => {
    const avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(30);
    avlTree.insert(70);
    avlTree.insert(10);
    avlTree.insert(40);

    avlTree.insert(5);

    expect(avlTree.inOrderTraverse()).toMatchObject([5, 10, 30, 40, 50, 70])
  });


  test('inserts key to the avl tree - Left Right Rotation', () => {
    const avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(30);
    avlTree.insert(70);
    avlTree.insert(10);
    avlTree.insert(40);

    avlTree.insert(35);

    expect(avlTree.inOrderTraverse()).toMatchObject([10, 30, 35, 40, 50, 70])
  });


  test('inserts key to the avl tree - Right Left Rotation', () => {
    const avlTree = new AVLTree();
    avlTree.insert(70);
    avlTree.insert(50);
    avlTree.insert(80);
    avlTree.insert(72);
    avlTree.insert(90);

    avlTree.insert(75);

    expect(avlTree.inOrderTraverse()).toMatchObject([50, 70, 72, 75, 80, 90])
  });
};