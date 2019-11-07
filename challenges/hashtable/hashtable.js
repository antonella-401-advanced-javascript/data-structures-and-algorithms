class Hashtable {
  constructor(size = 10) {
    this.bucket = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.toString()
      .length % this.size;
  }

  add(key, value) {
    const index = this.hash(key);

    if(!this.bucket[index]) {
      this.bucket[index] = [key];
    }
    this.bucket[index].push(value);
  }

  get(key) {
    const index = this.hash(key);

    if(!this.bucket[index]) return null;

    for(let i = 0; i < this.size; i++) {
      if(this.bucket[i] === this.bucket[index]) {
        return this.bucket[i];
      }
    }
  }

  contains(key) {
    const index = this.hash(key);

    if(this.bucket[index]) {
      return true;
    }

    return false;
  }
}

module.exports = Hashtable;