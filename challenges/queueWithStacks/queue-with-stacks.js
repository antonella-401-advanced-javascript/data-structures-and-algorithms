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
    if(!this.stackOut.top) {
      let element = this.stackIn.pop();

      while(this.stackIn.top) {
        this.stackOut.push(element);
        element = this.stackIn.pop();
      }
      return element;
    }
    return this.stackOut.pop();
  }
}

module.exports = {
  PseudoQueue
};