const { BinaryTree } = require('../tree/tree');
const { fizzBuzzTree } = require('../fizzBuzzTree/fizz-buzz-tree');

describe('Fizz Buzz Tree', () => {
  it('determines weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes', () => {
    const tree = new BinaryTree();
    tree.add(10);
    tree.add(15);
    tree.add(3);

    expect(fizzBuzzTree(tree.root.left)).toEqual({ 'left': null, 'right': null, 'value': 'Fizz' });
  });
});