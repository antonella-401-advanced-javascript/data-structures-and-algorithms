# Graph
We will be creating a Graph class represented as an adjacency list
## Challenge
The challenge entails creating a Graph which includes the following methods: `addNode()`, `addEdge()`, `getNodes()`, `getNeighbors()`, and `size()`
## Approach & Efficiency
Create a Graph class and set its nodes to be a new Map. AddNode adds a new node to the graph, takes in the value of that node and returns the added node. AddEdge adds a new edge between two nodes in the graph and takes in the two nodes to be connected by the edge. GetNodes returns all of the nodes in the graph as a collection. GetNeighbors returns a collection of nodes connected to the given node and takes in a given node. Size returns the total number of nodes in the graph.