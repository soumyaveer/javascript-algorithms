const Dictionary = require('../../src/containers/Dictionary');
const Queue = require('../../src/containers/queues/Queue');

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

  //adds edges to the vertices of the graph
  addEdge(vertexA, vertexB){
    this.adjList.get(vertexA).push(vertexB);
    this.adjList.get(vertexB).push(vertexA);
  }

  // prints the graph
  toString(){
    let str = '';
    let neighbors;
    for(let i = 0; i< this.vertices.length; i++) {
      str += this.vertices[i] + ' -> ';
      neighbors = this.adjList.get(this.vertices[i]);
      for(let j = 0; j < neighbors.length; j++){
        str += neighbors[j] + ' ';
      }
      str += '\n';
    }
    return str;
  }

  /* Traverse Graph -
     1. BFS - Queues. Width wise search.
     2. DFS - Stacks. Height Wise search.
 */

  /* Node colors:
     1. white -> undiscovered
     2. grey -> discovered
     3. black -> explored

     Initialize all the vertices of graph to white before starting BFS or DFS.
   */

  initializeColor(){
    let color = [];
    for(let i = 0; i < this.vertices.length; i++){
      color[this.vertices[i]] = 'white';
    }
    return color;
  }

  /* Algorithm - BFS:
     1. Create queue
     2. Mark starting vertex(v) as discovered (grey).
     3. Enqueue v to queue
     4. Loop through queue ,while queue is not empty:
        4.1 Dequeue first node from queue, let's call it u.
        4.2 Mark u as discovered (grey). The undiscovered nodes are marked white.
        4.3 Find it's neighbors
        4.4 Loop through each neighbor. We will call each element w:
            4.4.1 Check is the neighbor(w) is undiscovered (white)
                  4.4.1.1 Mark it(w) as discovered (grey)
                  4.4.1.2 Enqueue the neighbor (w)
        4.5 Mark u as explored(black);
        4.6 Concatenate the result to the queue
   */
  breadthFirstSearch(vertex){
    let color = this.initializeColor();
    let dequeueNode;
    let neighbors = [];
    let visitedVertices = [];

    let queue = new Queue();
    queue.enqueue(vertex);

    while(!queue.isEmpty()){
      dequeueNode = queue.dequeue();
      neighbors = this.adjList.get(dequeueNode);
      color[dequeueNode] = 'grey';
      for(let i = 0; i < neighbors.length; i++){
        if(color[neighbors[i]] === 'white'){
          color[neighbors[i]] = 'grey';
          queue.enqueue(neighbors[i]);
        }
      }
      color[dequeueNode] = 'black';
      visitedVertices.push(dequeueNode);
    }

    return visitedVertices;
  }

  /* Algorithm - DFS:
    1. Mark vertex(v) as discovered(grey)
    2. Get neighbors of v. Calling each neighbor w
    3. loop through neighbors:
       3.1 if neighbor is undiscovered (white)
           3.1.1 Visit  vertex w
    4. Mark u as explored (black)

    Note: recursion uses stack
   */

  depthFirstSearch(){
    let color = this.initializeColor();
    let visitedVertices = [];

    for(let i = 0; i < this.vertices.length; i++){
      if(color[this.vertices[i]] === 'white'){
        this.depthFirstVisit(this.vertices[i], color, visitedVertices);
      }
    }
  return visitedVertices;
  }

  depthFirstVisit(vertex, color, visitedVertices){
    color[vertex] = 'grey';
    visitedVertices.push(vertex);
    let neighbors = this.adjList.get(vertex);
    for(let i = 0; i < neighbors.length; i++){
      if(color[neighbors[i]] === 'white'){
        this.depthFirstVisit(neighbors[i], color, visitedVertices);
      }
    }
    color[vertex] = 'black';
  }
}

module.exports = Graph;