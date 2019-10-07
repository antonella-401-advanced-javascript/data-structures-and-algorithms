const { Node, BinaryTree } = require('./tree');

describe('Binary tree', () => {

  it('Can successfully instantiate an empty tree', () => {
    const emptyTree = new BinaryTree();

    expect(emptyTree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree();

    tree.add(1);

    expect(tree.root.value).toBe(1);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    const tree = new BinaryTree();

    tree.add(5);
    tree.add(3);
    tree.add(7);

    expect(tree.root.value).toBe(5);
    expect(tree.root.left.value).toBe(3);
    expect(tree.root.right.value).toBe(7);
  });
});