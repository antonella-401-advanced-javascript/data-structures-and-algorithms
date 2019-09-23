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
    this.head = node;
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
    let res = '';

    while(currentNode) {
      res = res + currentNode.value;
      currentNode = currentNode.next;
    }
    return res;
  }
}

module.exports = {
  LinkedList
};