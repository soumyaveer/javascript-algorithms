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
        this.insertNode(node.left, newNode);
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  };

  //returns the true if key is present in the tree otherwise false
  search(key){
    return this.searchKey(this.root, key)
  }

  searchKey(node, key){
    if (node === null){
      return false;
    }

    if(key < node.key){
      return this.searchKey(node.left, key);
    } else if(key > node.key){
      return this.searchKey(node.right, key);
    } else {
      return true;
    }
  };
}

module.exports = BinarySearchTree;