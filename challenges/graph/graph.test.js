const Graph = require('./graph');

describe('graph', () => {
  it('Adds a new node to the graph', () => {
    const test = new Graph();
    test.addNode('testing');
    expect(test.nodes.get('testing')).toEqual([]);
  });
});