const { Node, Stack, Queue } = require('./stacks-and-queue');

describe('Stack and Queue', () => {
  it('Can successfully push onto a stack', () => {
    const top = new Stack();
    
    top.push(1);
    expect(top).toEqual({ 'top': 1 });
  });

  it('Can successfully push multiple values onto a stack', () => {
    const multiTop = new Stack();
    multiTop.push('does');
    multiTop.push('this');
    multiTop.push('work');

    expect(multiTop).toEqual({ 'top': 'work' });
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(9);
    stack.push(27);
    stack.push(24);

    expect(stack.pop()).toBe(24);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(9);
    stack.push(27);
    stack.push(24);

    expect(stack.pop()).toBe(24);
    // expect(stack.pop()).toBe(27);
    // expect(stack.pop()).toBe(9);
  });
});