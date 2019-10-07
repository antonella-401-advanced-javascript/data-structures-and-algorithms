class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(node) {
    if(node !== null) {
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  inOrder(node) {
    if(node !== null) {
      this.inorder(node.left);
      this.inorder(node.right);
    }
  }

  postOrder(node) {
    if(node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
    }
  }

  add(value) {
    let newNode = new Node(value);

    if(this.root === null) {
      this.root = newNode;
    }
    else {
      this.addNode(this.root, newNode);
    }
  }

  addNode(node, newNode) {
    if(newNode.value < node.value) {
      if(node.left === null) {
        node.left = newNode;
      }
      else {
        this.addNode(node.left, newNode);
      }
    }
    else {
      if(node.right === null) {
        node.right = newNode;
      }
      else {
        this.addNode(node.right, newNode);
      }
    }
  }

  contains(value) {
    let has = false;
    if(this.value === value) {
      has = true;
    }
    else if(value.left !== null && value < this.value) {
      this.add(this.left);
    }
    else if(this.right !== null && value > this.value) {
      this.add(this.right);
    }
    this.add(this);
    return has;
  }
}