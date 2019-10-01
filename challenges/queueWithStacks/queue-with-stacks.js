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
    let element = this.inStack.top;
    let poppedIn = this.inStack.pop();
    let poppedOut = this.outStack.pop();

    while(this.inStack.top) {
      this.outStack.push(poppedIn);
    }
    this.inStack.pop();
    while(this.outStack.peek()) {
      this.inStack.push(poppedOut);
    }
    return element;
  }
}

module.exports = {
  PseudoQueue
};