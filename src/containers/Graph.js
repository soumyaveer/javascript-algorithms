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

  //adds vertices to the graph
  addVertex(vertex){
    this.vertices.push(vertex);
    this.adjList.set(vertex, []);
  }
}

module.exports = Graph;