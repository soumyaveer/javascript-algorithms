const Kruskals = require('../../../src/algorithms/graphs/Kruskals');

describe('findMST', () =>{
  test('finds and returns Minimum spanning Tree for connected weighted undirected graph', () =>{
    let graph = [[0, 2, 4, 0, 0, 0],
                 [2, 0, 2, 4, 2, 0],
                 [4, 2, 0, 0, 3, 0],
                 [0, 4, 0, 0, 3, 2],
                 [0, 2, 3, 3, 0, 2],
                 [0, 0, 0, 2, 2, 0]];

    let kruskals = new Kruskals(graph);

    expect(kruskals.findMST()).toMatchObject([0, 2, 2, 2, 2, 2]);
  });
});