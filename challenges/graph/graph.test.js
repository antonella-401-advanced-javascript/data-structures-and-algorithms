const Graph = require('./graph');

describe('graph', () => {
  it('Adds a new node to the graph', () => {
    const test = new Graph();
    test.addNode('testing');

    expect(test.nodes.get('testing')).toEqual([]);
  });

  it('Adds a new edge between two nodes in the graph', () => {
    const test = new Graph();
    test.addNode('testing');
    test.addNode('testing 2');
    test.addEdge('testing', 'testing 2');

    expect(test.nodes.get('testing')).toEqual(['testing 2']);
    expect(test.nodes.get('testing 2')).toEqual(['testing']);
  });

  it('Returns all of the nodes in the graph as a collection', () => {
    const test = new Graph();
    test.addNode('testing');
    test.addNode('testing 2');
    test.addNode('collection');

    expect(test.getNodes()).toEqual(['testing', 'testing 2', 'collection']);
  });
});