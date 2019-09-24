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
    let newNode = new Node(newVal);
    let node = this.head;
    
    if(node.value === value) {
      this.insert(newVal);
    }
    while(node.next) {
      if(!this.head) {
        this.head = new Node(newVal);
        return;
      }

      if(node.next.value === value) {
        newNode.next = node.next;
        node.next = newNode;
        node = newNode;
      }
      node = node.next;
    }
  }

  insertAfter(value, newVal) {
    let node = this.head;
    while(node) {
      if(!this.head) {
        this.head = new Node(newVal);
        return;
      }

      if(node.value === value) {
        let newNode = new Node(newVal);
        newNode.next = node.next;
        node.next = newNode; 

        return node;
      }
      node = node.next;
    }
  }
}

module.exports = {
  LinkedList
};