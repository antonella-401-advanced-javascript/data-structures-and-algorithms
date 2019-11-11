class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(value) {
    this.nodes.set(value, []);
    return this.nodes.get(value, []);
  }

  addEdge(firstNode, secondNode) {
    this.nodes.get(firstNode).push(secondNode);
    this.nodes.get(secondNode).push(firstNode);
  }
}

module.exports = Graph;