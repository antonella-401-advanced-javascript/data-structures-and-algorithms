const { Stack } = require('../stacksAndQueue/stacks-and-queue');

class AnimalShelter {
  constructor() {
    this.animalIn = new Stack();
    this.animalOut = new Stack();
  }

  enqueue(animal) {
    return this.animalIn.push(animal);
  }

  dequeue(pref) {
    if(!this.animalIn.top && this.animalOut.top) {
      return null;
    }
  }
}

module.exports = {
  AnimalShelter
};