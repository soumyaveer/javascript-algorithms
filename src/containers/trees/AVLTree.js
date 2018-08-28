const Node = require('../../../src/containers/trees/Node');

class AVLTree{
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
    if(newNode.key < node.key){
      node.left = this.insertNode(node.left, newNode);

      if(node.left !== null){
        if(this.balanceFactor(node.left, node.right) > 1) {
          if (newNode.key < node.left.key) {
            node = this.rotationLL(node);
          } else {
            node = this.rotationLR(node);
          }
        }
      }
    } else if(newNode.key > node.key){
      node.right = this.insertNode(node.right, newNode);

      if(node.right !== null) {
        if(this.balanceFactor(node.right, node.left) > 1){
          if (newNode.key > node.right.key){
            node = this.rotationRR(node);
          } else {
            node = this.rotationRL(node);
          }
        }
      }
    }
    return node;
  }

  balanceFactor(nodeA, nodeB){
    return (this.heightNode(nodeA) - this.heightNode(nodeB));
  }

  heightNode(node){
    if(node === null){
      return -1;
    } else {
      return Math.max(this.heightNode(node.left), this.heightNode(node.right)) + 1;
    }
  }

  rotationRR(node){
    let temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  rotationLL(node){
    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }

  rotationLR(node){
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  rotationRL(node){
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }
}

module.exports = AVLTree;