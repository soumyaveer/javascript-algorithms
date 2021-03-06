const Node = require('../../../src/containers/trees/Node');

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

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
      this.insertNode(this.root, newNode);
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
        this.insertNode(node.right, newNode);
      }
    }
  };

  //returns the true if key is present in the tree otherwise false
  search(key){
    return this.searchKey(this.root, key);
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
  }

  // returns the minimum node of the tree
  min(){
    return this.minNode(this.root);
  }

  minNode(node){
    if(node === null) {
      return;
    }

    while(node.left){
      node = node.left;
    }
    return node.key;
  }

  //returns the max node of the tree
  max(){
    return this.maxNode(this.root);
  }

  maxNode(node){
    if(node === null){
      return;
    }

    while(node.right){
      node = node.right;
    }

    return node.key;
  }

  inOrderTraverse(){
    return this.inOrderTraverseNode(this.root);
  }

  inOrderTraverseNode(node){
    let nodeKeys = [];

    if(node){
      nodeKeys.push(this.inOrderTraverseNode(node.left));
      nodeKeys.push(node.key);
      nodeKeys.push(this.inOrderTraverseNode(node.right));
    }

    nodeKeys = [].concat.apply([], nodeKeys);
    return nodeKeys;
  }

  preOrderTraverse(){
    return this.preOrderTraverseNode(this.root);
  }

  preOrderTraverseNode(node){
    let nodeKeys = [];

    if(node){
      nodeKeys.push(node.key);
      nodeKeys.push(this.preOrderTraverseNode(node.left));
      nodeKeys.push(this.preOrderTraverseNode(node.right));
    }

     nodeKeys = [].concat.apply([], nodeKeys);

    return nodeKeys;
  }

  postOrderTraverse(){
    return this.postOrderTraverseNode(this.root);
  }

  postOrderTraverseNode(node){
    let nodeKeys = [];

    if(node){
      nodeKeys.push(this.postOrderTraverseNode(node.left));
      nodeKeys.push(this.postOrderTraverseNode(node.right));
      nodeKeys.push(node.key);
    }

    nodeKeys = [].concat.apply([], nodeKeys);
    return nodeKeys;
  }

  remove(key){
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node === null) {
      return;
    }

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let minNode = this.findMin(node.right);
      node.key = minNode.key;
      node.right = this.removeNode(node.right, minNode.key);
      return node;
    }
  }

  findMin(node){
    while(node && node.left !== null){
      node = node.left;
    }
    return node;
  }
}

module.exports = BinarySearchTree;