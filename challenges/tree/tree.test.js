const { Node, BinaryTree } = require('./tree');

describe('Binary tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    const emptyTree = new BinaryTree();

    expect(emptyTree.root).toBe(null);
  });
});