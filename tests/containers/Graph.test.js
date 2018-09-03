const Graph = require('../../src/containers/Graph');

describe('addVertex', () => {
  test('adds new vertex to the graph', () => {
    let graph = new Graph();
    let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for(let i = 0; i < vertices.length; i++){
      graph.addVertex(vertices[i]);
    }

    expect(graph.isEmpty()).toBe(false);
    expect(graph.numberOfVertices()).toBe(9);
  });
});