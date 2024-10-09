// Define the interface for the constructor of StudentClass
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Define the interface for StudentClass methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass based on the interfaces
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to return "Currently working"
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to return the first name of the student
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student1.displayName());  // Output: John
console.log(student1.workOnHomework());  // Output: Currently working
