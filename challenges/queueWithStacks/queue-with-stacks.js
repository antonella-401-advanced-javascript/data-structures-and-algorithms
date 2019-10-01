const { Stack } = require('./stacks-and-queue');

class PseudoQueue {
  constructor() {
    this.stackIn = new Stack();
    this.stackOut = new Stack();
  }

  enqueue(value) {
    return this.stackIn.push(value);
  }

  dequeue() {
    if(this.stackOut.top === null) {
      this.stackOut.push(this.stackIn.pop());
    }

    return this.stackOut.pop();
  }
}

module.exports = {
  PseudoQueue
};