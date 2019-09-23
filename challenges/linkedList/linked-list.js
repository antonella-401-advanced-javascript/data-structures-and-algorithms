class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    const node = new Node(value);
    let currentNode;

    if(this.head === null) {
      this.head = node;
    }
    else {
      currentNode = this.head;

      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++;
    return this.head;
  }

  includes(value) {
    let currentNode = this.head;
    while(currentNode) {
      if(currentNode.value === value) {
        return true;
      }
      else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let res = [];

    while(currentNode) {
      res.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return res.join(', ');
  }
}

module.exports = {
  LinkedList
};