class Node {
  constructor(value) {
    this.previous = null;
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

      while(currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++;
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

  append(value) {
    const node = new Node(value);

    if(this.size) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
    return node.value;
  }

  insertBefore(value, newVal) {
    if(value > 0 && newVal > this.size) {
      return false;
    }
    else {
      let node = new Node(newVal);
      let current;
      let previous;

      current = this.head;

      if(value === 0) {
        node.next = this.head;
        this.head = node;
      }
      else {
        current = this.head;
        let list = 0;

        while(list < value) {
          list++;
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.size++;
      return node;
    }
  }

  insertAfter(value, newVal) {
    const node = new Node(newVal);
    node.next = value.next;
    value.next = node; 
  }
}

module.exports = {
  LinkedList
};