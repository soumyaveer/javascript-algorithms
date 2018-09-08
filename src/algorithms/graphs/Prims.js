class Prims {
  constructor(graph){
    this.graph = graph;
  }

  /* Prim's Algorithm is MST algorithm.
    How it works?

       1     6
    A --- D --- E                    Result: AD, CD, BC, CF, EF
    |   / |   / |                    Time Complexity:  O(Elog(V))
  3 | 3/ 1|  /5 | 2                  Space complexity: O(E + V)
    | /   | /   |
    B --- C --- F
       1     4

   Table 1:                        Table 2:
   | Vertex | Edge        |        Vertex - Weight
    ----------------------         ---------------
   |  D     |  AD         |         A - INF, 0
   |  B     |  AB, BC     |         B - INF, 3, 1
   |  E     |  DE, CE, EF |         C - INF, 1
   |  C     |  CD         |         D - INF, 1
   |  F     |  CF         |         E - INF, 6, 5, 2
   |        |             |         F - INF, 4


   Explanation:
   1. Start with initialising all the weights of all the vertices to Infinity.
   2. Pick an initial node and mark it as 0. The distance of a node from itself is 0. In this case we pick vertex A.
   3. Remove the vertex A from Table 2 and do extract min from the vertices, A is connected to. In this case vertices (B, D) we pick AD because it has weight 1 which is less than weight 3 of AB edge
   4. Now, the vertex is D and Edge from where we got it is AD with weight 1. (Table 1)
   5. Similarly, check the edges from D. Edges are DB -> 3, DC -> 1, DE -> 6. Update the weight of vertices in table 2, if new weight is < previous weight.
   6. Repeat step 3. Do extract min and fill up Table B.
   7. Repeat till all the nodes are visited and MST is created.

   MST will look something like this:
      1
   A --- D     E
       1 |     | 2              Total weight of this MST: 1 + 1 + 1 + 4 + 2 = 9
   B --- C --- F
      1     4


   Algorithm:
   1. Initialize all keys as vertices as infinite and visited as false
   2. Set first key as 0 and parent as -1. Because the first node is always the root of MST
   3. Loop through graph and find MST of all vertices
      3.1 Find the minimum key vertex from the set of vertices that are unvisited.
      3.2 Mark the minimum vertex as true, which states that the vertex has been visited now. This is done to ensure that same vertex is not counted more than once.
      3.3 Check if the vertex is not visited and we found the minimum weight
          3.3.1 store MST path value to parent
          3.3.2 Set the new cost of MST (minimum cost)
   4. return the result (parent) confining MST after all the vertices are processed.
   */
}


module.exports = Prims;