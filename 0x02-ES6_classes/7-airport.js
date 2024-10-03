class Airport {

  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return this._code;
  }
}

const airport = new Airport("John F. Kennedy International Airport", "JFK");
console.log(airport.toString());
