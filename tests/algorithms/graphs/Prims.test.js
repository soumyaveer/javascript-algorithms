const Prims = require('../../../src/algorithms/graphs/Prims');

describe('createMST', () =>{
  test('takes in a graph and returns the Minimum Spanning Tree', () => {
    let graph = [[0, 2, 4, 0, 0, 0],
                 [2, 0, 2, 4, 2, 0],
                 [4, 2, 0, 0, 3, 0],
                 [0, 4, 0, 0, 3, 2],
                 [0, 2, 3, 3, 0, 2],
                 [0, 0, 0, 2, 2, 0]];

    let prim = new Prims(graph);
    // return edges
    // expect(prim.createMST()).toMatchObject([-1, 0, 1, 5, 1, 4]);

    //return weight
    expect(prim.createMST()).toMatchObject([0, 2, 2, 2, 2, 2]);
  });
});