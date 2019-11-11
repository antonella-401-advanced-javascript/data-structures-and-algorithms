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

  it('Returns a collection of nodes connected to the given node', () => {
    const test = new Graph();
    test.addNode('testing');
    test.addNode('testing 2');
    test.addNode('collection');
    test.addNode('no connection');
    test.addEdge('testing', 'testing 2');
    test.addEdge('testing', 'collection');

    expect(test.getNeighbors('testing')).toEqual(['testing 2', 'collection']);
    expect(test.getNeighbors('no connection')).toEqual([]);
  });

  it('Returns the total number of nodes in the graph', () => {
    const test = new Graph();
    test.addNode('testing');
    test.addNode('testing 2');
    test.addNode('collection');
    test.addNode('size');
    
    expect(test.size()).toBe(4);
  });
});