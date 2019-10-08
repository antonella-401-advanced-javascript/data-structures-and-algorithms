const fizzBuzzTree = (tree) => {
  if(tree.value % 3 === 0) {
    tree.value = 'Fizz';
  }
  else if(tree.value % 5 === 0) {
    tree.value = 'Buzz';
  }
  else if(tree.value % 3 === 0 && tree.value % 5 === 0) {
    tree.value = 'FizzBuzz';
  }
  return tree;
};

module.exports = {
  fizzBuzzTree
};