// residentialBuilding.js
import Building from './building.js';  // Import the Building class

// Subclass that extends the abstract Building class
export default class ResidentialBuilding extends Building {
  constructor(sqft, numFloors) {
    super(sqft); // Call the parent class constructor
    this._numFloors = numFloors; // Add new property specific to ResidentialBuilding
  }

  // Getter for number of floors
  get numFloors() {
    return this._numFloors;
  }

  // Override the abstract method with a custom implementation
  evacuationWarningMessage() {
    return `Evacuate the ${this._numFloors} floors immediately!`;
  }
}

// Create an instance of the ResidentialBuilding class to test
const myBuilding = new ResidentialBuilding(1000, 3);
console.log(myBuilding.evacuationWarningMessage()); // Evacuate the 3 floors immediately!
