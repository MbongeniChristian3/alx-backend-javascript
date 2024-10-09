// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;  // Optional attribute
}

// Define the Directors interface, which extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;  // Required attribute for Directors
}

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Example usage
console.log(printTeacher("John", "Doe"));  // Output: J. Doe
