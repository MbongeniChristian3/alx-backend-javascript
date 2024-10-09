class Teacher {
  constructor(firstName, lastName, fullTimeEmployee, location, yearsOfExperience = null) {
    // Private properties (modifiable only during initialization)
    Object.defineProperty(this, 'firstName', {
      value: firstName,
      writable: false,  // Makes it non-modifiable after initialization
      enumerable: true
    });

    Object.defineProperty(this, 'lastName', {
      value: lastName,
      writable: false,  // Makes it non-modifiable after initialization
      enumerable: true
    });

    // Public properties
    this.fullTimeEmployee = fullTimeEmployee;  // Always defined
    this.location = location;                  // Always defined
    this.yearsOfExperience = yearsOfExperience; // Optional
  }

  // Use a setter to allow additional attributes like contract(boolean) to be added
  setAttribute(attributeName, value) {
    this[attributeName] = value;
  }
}

// Example usage
const teacher1 = new Teacher('John', 'Doe', true, 'New York', 5);

// Adding a new attribute 'contract'
teacher1.setAttribute('contract', true);

console.log(teacher1);
