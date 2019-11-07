const tree_intersection = (treeOne, treeTwo) => {
  const treeOneArr = treeOne.preOrder(treeOne.root);
  const treeTwoArr = treeTwo.preOrder(treeTwo.root);
  const result = [];

  treeOneArr.forEach(i => {
    treeTwoArr.forEach(j => {
      if(i === j) {
        result.push(i);
      }
    });
  });
  return result.sort();
};

module.exports = tree_intersection;