const { Stack } = require('../stacksAndQueue/stacks-and-queue');

class AnimalShelter {
  constructor() {
    this.animalQueue = new Stack();
    this.animalOut = new Stack();
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
    let animal = this.front;

    if(!pref) {
      return null;
    }

    if(!this.animalOut.top) {
      let element = this.animalQueue.pop();

      while(this.animalQueue.top) {
        this.animalOut.push(element);
        element = this.animalQueue.pop();
      }
      return element;
    }

    while(pref) {
      if(pref.toLowerCase() === animal.value) {
        return animal.value;
      }
      animal = animal.next;
    }
  }
}

module.exports = {
  AnimalShelter
};