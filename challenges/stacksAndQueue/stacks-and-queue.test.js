const { Stack, Queue } = require('./stacks-and-queue');

describe('Stack and Queue', () => {
  it('Can successfully push onto a stack', () => {
    const test = new Stack();
    
    test.push(1);
    expect(test.top.value).toBe(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const multiTop = new Stack();
    multiTop.push('does');
    multiTop.push('this');
    multiTop.push('work');

    expect(multiTop.top.value).toEqual('work');
    expect(multiTop.top.next.value).toBe('this');
    expect(multiTop.top.next.next.value).toBe('does');
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
    expect(stack.pop()).toBe(27);
    expect(stack.pop()).toBe(9);
    expect(stack.pop()).toBe(null);
  });

  it('Can successfully peek the top item on the stack', () => {
    const stack = new Stack();
    stack.push(9);
    stack.push(27);
    stack.push(24);

    expect(stack.peek()).toBe(24);
  });
  
  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();

    expect(stack.top).toBe(null);
  });

  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);

    expect(queue.front.value).toBe(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(5);
    queue.enqueue(10);

    expect(queue.front.value).toBe(2);
    expect(queue.front.next.value).toBe(5);
    expect(queue.front.next.next.value).toBe(10);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(5);
    queue.enqueue(10);

    expect(queue.dequeue()).toBe(2);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(5);
    queue.enqueue(10);

    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe('queue is empty');
  });

  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();

    expect(queue.front).toBe(null);
  });
});