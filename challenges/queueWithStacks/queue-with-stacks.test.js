const { PseudoQueue } = require('./queue-with-stacks');

describe('Pseudoqueue', () => {
  it('inserts value into the PseudoQueue', () => {
    const pseudo = new PseudoQueue();
    pseudo.enqueue(2);
    pseudo.enqueue(10);
    pseudo.enqueue(24);

    expect(pseudo.stackIn.top.value).toBe(24);
    expect(pseudo.stackIn.top.next.value).toBe(10);
    expect(pseudo.stackIn.top.next.next.value).toBe(2);
  });
});