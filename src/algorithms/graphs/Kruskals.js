class Kruskals{
  constructor(graph){
    this.graph = graph;
  }

  /* Kruskal's algorithm finds the Minimum Spanning Tree.
    How it works?  We will use Disjoint sets for this algorithm - findSet and Union operations majorly.

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

   */
}

module.exports = Kruskals;