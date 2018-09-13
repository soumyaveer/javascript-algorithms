class Kruskals{
  constructor(graph){
    this.graph = graph;
  }

  /* Kruskal's algorithm finds the Minimum Spanning Tree.
    How it works?  Disjoint sets are used for this algorithm - findSet and Union operations majorly.

       1     6
    A --- D --- E                    Result: AD, BC, CD, EF, CF
    |   / |   / |                             1 + 1 + 1 + 2 + 4  = 9
  3 | 3/ 1|  /5 | 2
    | /   | /   |
    B --- C --- F
       1     4

   Table 1: Sort all the edges:       Table 2: Operations and explanations
   Edges: Weight                      Current Sets         Sets after Merge         Result Edge
   -------------                      -------------       ----------------          -----------
   AD   :   1                         A, D, E, B, C, F    Merge(AD), E, B, C, F      AD          (Merging sets A and B)
   BC   :   1                         AD, E, B, C, F      AD, E, Merge(BC), F        BC
   CD   :   1                         AD, E, BC, F        Merge(ADBC), E, F          CD          (Merged Ad and BC because C and D belong to sets AD and BC.
   EF   :   2                         ADBC, E, F          ADBC, Merge(EF)            EF          (Merging sets of E and F)
   BD   :   3                         ADBC, EF            ADBC, EF                   -           (No merge required as AD is in set ADBC. discarding edge BD)
   AB   :   3                         ADBC, EF            ADBC, EF                   -           (No merge required as AB is in set ADBC. Discarding edgs AB)
   CF   :   4                         ADBC, EF            Merge(ADBCEF)              CF          (Merge ADBC and EF because C is in set ADBC and F is in set EF)
   CE   :   5                         ADBCEF              ADBCEF                     -           (No merge required as C and E are present in ADBCEF set. Discarding edge CE)
   DE   :   6                         ADBCEF              ADBCEF                     -           (No merge required as D and E are in set ADBCEF. Discarding edge DE)

   Algorithm:
   ----------
   1. Loop through MST
      1.1 Find edge with min cost
      1.2 Verify is the edge is already taken by MST to avoid cycle
      1.3 If edges are not same, add it to MST
      1.4 Remove duplicate edges
   2. return MST
   */

  findMST(){
    let parent = [];
    let graphCost = [];
    graphCost =  this.clone(this.graph);
    let size = this.graph.length;
    let minCost;
    let setA, setB;
    let nodeEdges = 0;

    while (nodeEdges < size - 1){
      //find the edge of the minimum cost
      for(let i = 0, minCost = Infinity; i < size; i++) {
        for (let j = 0; j < size; j++) {
          if(graphCost[i][j] < minCost) {
            minCost = graphCost[i][j];
            setA = i;
            setB = j;
          }
        }
      }

      // verify if the edge is already taken by MST
      setA = this.find(setA, parent);
      setB = this.find(setB, parent);

      // if edges are not same, add it to MST
      if(this.union(setA, setB, parent)){
        nodeEdges++;
      }

      //remove duplicate edges
      graphCost[setA][setB]  = Infinity;
    }
    return parent;
  }

  clone(matrix){
    let duplicateMatrix = [];
    matrix.forEach((column) => duplicateMatrix.push(column));
    return duplicateMatrix;
  }

  find(element, array){
    while(array[element]){
      element = array[element];
    }
    return element;
  }

  union(setA, setB, array){
    if(setA !== setB){
      array[setB] = setA;
      return true;
    }
    return false;
  }
}

module.exports = Kruskals;