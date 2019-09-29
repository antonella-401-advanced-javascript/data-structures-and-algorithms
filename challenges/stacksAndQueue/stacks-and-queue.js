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

    if(this.top === null) {
      this.top = node.value;
    }
    else {
      node.next = this.top;
      this.top = node.value;
    }
    return this.top;
  }

  pop() {
    let element = this.top;
    while(this.top) {
      this.top = this.top.next;
    }
    return element;
  }

  peek() {
    if(this.top === null) {
      console.log('stack has no values to peek');
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
    if(this.front === null) {
      console.log('queue is empty');
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