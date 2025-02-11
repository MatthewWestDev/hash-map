class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = [];

    /* if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds.");
    } */
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const hashValue = this.hash(key);
    this.buckets[hashValue] = value;
  }

  get(key) {
    const hashValue = this.hash(key);
    return this.buckets[hashValue];
  }

  has(key) {
    const hashValue = this.hash(key);
    return this.buckets[hashValue] != null;
  }

  remove(key) {
    const hashValue = this.hash(key);
    this.buckets[hashValue] = null;
  }

  // length() {}

  // clear() {}

  // keys() {}

  // values() {}

  // entries() {}

  // end
}

// testing
const test = new HashMap();

test.set("apple", "red");
console.log(test.get("apple")); // red
console.log(test.has("apple")); // true
test.remove("apple");
console.log(test.has("apple")); // false

/* test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden"); */
