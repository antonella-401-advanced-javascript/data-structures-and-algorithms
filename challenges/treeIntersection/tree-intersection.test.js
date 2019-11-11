const tree_intersection = require('./tree-intersection');
const { BinaryTree } = require('../tree/tree');

describe('tree intersection', () => {
  it('returns values found in both trees', () => {
    const treeOne = new BinaryTree();
    treeOne.add(5);
    treeOne.add(3);
    treeOne.add(7);

    const treeTwo = new BinaryTree();
    treeTwo.add(2);
    treeTwo.add(3);
    treeTwo.add(7);

    expect(tree_intersection(treeOne, treeTwo)).toEqual([3, 7]);
  });
});