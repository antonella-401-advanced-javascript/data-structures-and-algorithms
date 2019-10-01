class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);

    if(!this.top) {
      this.top = node;
    }
    else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    let element;
    if(this.top) {
      element = this.top.value;
      this.top = this.top.next;
    }
    else {
      element = null;
    }
    return element;
  }

  peek() {
    if(this.top === null) {
      return 'stack has no values to peek';
    }

    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    const node = new Node(value);

    if(this.front === null) {
      this.front = node;
    }
    else {
      let curr = this.front;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  dequeue() {
    let newFront;
    if(!this.front) {
      return 'queue is empty';
    }
    else {
      newFront = this.front.value;
      this.front = this.front.next;
    }
    return newFront;
  }

  peek() {
    return this.front.value;
  }
}

module.exports = {
  Node,
  Stack,
  Queue
};