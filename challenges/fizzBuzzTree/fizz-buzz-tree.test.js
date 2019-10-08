const { BinaryTree } = require('../tree/tree');
const { fizzBuzzTree } = require('../fizzBuzzTree/fizz-buzz-tree');

describe('Fizz Buzz Tree', () => {
  it('determines weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes', () => {
    const tree = new BinaryTree();
    tree.add(5);
    tree.add(15);
    tree.add(3);

    expect(fizzBuzzTree(tree.root.left)).toBe('Fizz');
    expect(fizzBuzzTree(tree.root.right)).toBe('FizzBuzz');
    expect(fizzBuzzTree(tree.root)).toBe('Buzz');
  });
}); 