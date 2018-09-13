const Dijkstras = require('../../../src/algorithms/graphs/Dijkstras');

describe('shortestPath', ()=>{
  test('returns the shortest path for the graph', () =>{
    let graph = [[0, 2, 4, 0, 0, 0],
                 [0, 0, 1, 4, 2, 0],
                 [0, 0, 0, 0, 3, 0],
                 [0, 0, 0, 0, 0, 2],
                 [0, 0, 0, 3, 0, 2],
                 [0, 0, 0, 0, 0, 0]];

    let dijkstras = new Dijkstras(graph);

    expect(dijkstras.shortestPath(0)).toMatchObject([0, 2, 3, 6, 4, 6]);
  });
});