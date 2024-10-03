class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}

const myClass = new HolbertonClass(300, 'San Francisco');
console.log(Number(myClass));
console.log(String(myClass));
