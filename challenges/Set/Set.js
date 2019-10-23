class Set {
  constructor() {
    this.length = 0;
    this.array = [];
  }

  add(item) {
    this.array.push(item);
    this.length++;
  }

  remove(item) {
    for(let i = 0; i < this.array.length; i++) {
      if(this.array[i] === item) {
        this.array.splice(i, 1);
        this.length--;
      }
    }
  }

  has(item) {
    for(let i = 0; i < this.array.length; i++) {
      if(this.array[i] === item) {
        return true;
      }
    }
    return false;
  }

  intersection(set) {
    let newSet = new Set();
    for(let item of set.array) {
      if(this.has(item)) {
        newSet.add(item);
      }
    }
    return newSet;
  }

  union(set) {
    let newSet = new Set();
    this.array.forEach(item => {
      if(!newSet.has(item)) {
        newSet.add(item);
      }
    });
    set.array.forEach(item => {
      if(!newSet.has(item)) {
        newSet.add(item);
      }
    });
    return newSet;
  }

  difference(set) {
    let newSet = new Set();
    this.array.forEach(item => {
      if(!set.has(item)) {
        newSet.add(item);
      }
    });
    set.array.forEach(item => {
      if(!this.has(item)) {
        newSet.add(item);
      }
    });
    return newSet;
  }

  static staticIntersection(setA, setB) {
    let newSet = new Set();
    setA.array.forEach(item => {
      if(setB.has(item)) {
        newSet.add(item);
      }
    });
    return newSet;
  }

  static staticUnion(setA, setB) {
    let newSet = new Set();
    setA.array.forEach(item => {
      if(!newSet.has(item)) {
        newSet.add(item);
      }
    });
    setB.array.forEach(item => {
      if(!newSet.has(item)) {
        newSet.add(item);
      }
    });
    return newSet;
  }

  static staticDifference(setA, setB) {
    let newSet = new Set();
    setA.array.forEach(item => {
      if(!setB.has(item)) {
        newSet.add(item);
      }
    });
    setB.array.forEach(item => {
      if(!setA.has(item)) {
        newSet.add(item);
      }
    });
    return newSet;
  }
}

module.exports = {
  Set
};