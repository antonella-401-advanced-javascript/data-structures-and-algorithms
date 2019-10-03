const { Stack } = require('../stacksAndQueue/stacks-and-queue');

class AnimalShelter {
  constructor() {
    this.animalQueue = new Stack();
  }

  enqueue(animal) {
    if(animal.toLowerCase() === 'cat' || animal.toLowerCase() === 'dog') {
      this.animalQueue.push(animal.toLowerCase());
    }
    else {
      return 'Shelter only accepts cats and dogs';
    }
  }

  dequeue(pref) {
    const lower = pref.toLowerCase();
    if(lower !== 'dog' && lower !== 'cat') {
      return null;
    }

    let res;
    let curr = this.animalQueue.top;
    let prev;
    while(curr.value !== lower) {
      prev = curr;
      curr = curr.next;
      prev.next = curr.next;
    }

    res = curr.value;
    return res;
  }
}

module.exports = {
  AnimalShelter
};