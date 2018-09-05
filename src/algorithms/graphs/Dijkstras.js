class Dijkstras{
  constructor(graph){
    this.graph = graph;
  }

  /* Algorithm:
    1. Create arrays to store the distance and visited nodes
    2. initialize all distances as infinite and visited as false
    3. The minimum distance of source vertex from itself is 0, so, we set the distance of source vertex from itself as 0
    4. loop through the graph
       4.1 Find the minimum distance vertex from the set of vertices
       4.2 Mark the selected vertex(minimum distance vertex) as true so as to not calculate it twice.
       4.3 Check is the shortest path is found.
           4.3.1 set new value of the shortest path.
    5. After all vertices are processed, return the shortest path distance.
  */

  shortestPath(source){
    let distances = [];
    let visitedVertices = [];
    let size = this.graph.length;
    // initialize distances as infinity and visitedVertices as false

    for(let i = 0; i < size; i++){
      distances[i] = Infinity;
      visitedVertices[i] = false;
    }

    // min distance of source from itself is 0
    distances[source] = 0;

    for(let i = 0; i < size - 1; i++){
      let minDistanceVertexIndex = this.findMinDistanceVertexIndex(distances, visitedVertices);

      visitedVertices[minDistanceVertexIndex] = true;

      for (let j = 0; j < size; j++){
        if(!visitedVertices[j] && !this.graph[minDistanceVertexIndex][j] != 0 && distances[minDistanceVertexIndex] != Infinity && distances[minDistanceVertexIndex] + this.graph[minDistanceVertexIndex][j] < distances[j]){
          distances[j] = distances[minDistanceVertexIndex] + this.graph[minDistanceVertexIndex][j];
        }
      }
    }
    return distances;
  }
}

modeule.exports = Dijkstras;