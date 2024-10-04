// Building.js

class Building {
  constructor(sqft) {
    // Prevent direct instantiation of the abstract Building class
    if (this.constructor === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly.');
    }
    this._sqft = sqft;
  }

  // Getter for the square footage
  get sqft() {
    return this._sqft;
  }

  // Setter for the square footage
  set sqft(value) {
    this._sqft = value;
  }

  // Abstract method to be implemented by subclasses
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Export the Building class as default
export default Building;
