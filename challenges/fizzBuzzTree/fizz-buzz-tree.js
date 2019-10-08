const fizzBuzzTree = (tree) => {
  if(tree.value % 3 === 0 && tree.value % 5 === 0) {
    tree.value = 'FizzBuzz';
  }
  else if(tree.value % 3 === 0) {
    tree.value = 'Fizz';
  }
  else if(tree.value % 5 === 0) {
    tree.value = 'Buzz';
  }
  return tree.value;
};

module.exports = {
  fizzBuzzTree
};