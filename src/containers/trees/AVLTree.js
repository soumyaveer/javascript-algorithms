const Node = require('../../../src/containers/trees/Node');

class AVLTree{
  constructor(){
    this.root = null;
  }

  // returns the root of the tree
  getRoot(){
    return this.root;
  }
}

module.exports = AVLTree;