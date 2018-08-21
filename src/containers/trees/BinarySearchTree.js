const Node = require('../../../src/containers/trees/Node');

class BinarySearchTree{
  constructor(){
    this.root = null;
  };

  // returns the root of the tree
  getRoot(){
    return this.root;
  }

  // inserts a new key to the tree
  insert(key){
    let newNode = new Node(key);

    if(this.root === null){
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode){
    if(newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode)
      }
    }
  }
}

module.exports = BinarySearchTree;