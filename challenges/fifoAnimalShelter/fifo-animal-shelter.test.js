const { AnimalShelter } = require('./fifo-animal-shelter');

describe('Animal Shelter Queue', () => {
  it('Enqueues cats and dogs', () => {
    const testShelter = new AnimalShelter();
    testShelter.enqueue('dog');
    testShelter.enqueue('cat');
    testShelter.enqueue('Dog');
    testShelter.enqueue('Cat');

    expect(testShelter.animalQueue.top.value).toBe('cat');
    expect(testShelter.animalQueue.top.next.value).toBe('dog');
    expect(testShelter.animalQueue.top.next.next.value).toBe('cat');
    expect(testShelter.animalQueue.top.next.next.next.value).toBe('dog');
  });

  it('Only accepts cats or dogs', () => {
    const test = new AnimalShelter();
    const badPet = test.enqueue('snake');

    expect(badPet).toEqual('Shelter only accepts cats and dogs');
  });

  it('Gives first animal type in queue away', () => {
    const testShelter = new AnimalShelter();
    testShelter.enqueue('dog');
    testShelter.enqueue('cat');
    testShelter.enqueue('Dog');
    testShelter.enqueue('Cat');

    const home = testShelter.dequeue('cat');

    expect(home).toBe();
  });
});