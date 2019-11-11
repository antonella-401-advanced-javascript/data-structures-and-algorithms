# Tree Intersection
We will be creating a binary tree intersection
## Challenge
The challenge entails creating a function that will find the intersection of two binary trees
## Approach & Efficiency
Use the preOrder BinaryTree method to traverse tree starting from the root. Set an empty result array we will be pushing the intersect values to. go through both arrays and compare the values, if they are the same then we push to the array, return the result array at the end.