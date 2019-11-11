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

  getNodes() {
    const keys = this.nodes.keys();
    let arr = [];

    for(let key of keys) {
      arr.push(key);
    }
    return arr;
  }

  getNeighbors(node) {
    return this.nodes.get(node);
  }

  size() {
    return this.nodes.size;
  }
}

module.exports = Graph;