// Hash Tables
// Time Complexity
// 	Insertion: O(1) || Removal: O(1) || Access: O(1)
//  Space Complexity O(n)

class HashTable {
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let PRIME = 13;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);

    return index;
  }

  get(key) {
    const index = this.hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }

    return null;
  }

  keys() {
    let keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keys;
  }

  values() {
    let values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return values;
  }
}

const x = new HashTable(3);

x.set('ilker', 'kaan');
x.set('ilkeasr', 'kaan');
x.set('ilkeqwer', 'kaan');
x.set('ilk23er', 'kaan');
x.set('ilkqweer', 'kaan');

console.log(x.keyMap);

console.log(x.keys());
console.log(x.values());
