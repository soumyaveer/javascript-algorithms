const Dictionary = require('../../src/containers/Dictionary');

class Graph{
  constructor(){
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  //returns the number of vertices in the graph
  numberOfVertices(){
    return this.vertices.length;
  }

  // returns true if graph is empty
  isEmpty(){
    return !this.numberOfVertices();
  }
}

module.exports = Graph;