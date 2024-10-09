class DirectorInterface {
    workFromHome() {
        throw new Error('Method not implemented.');
    }

    getCoffeeBreak() {
        throw new Error('Method not implemented.');
    }

    workDirectorTasks() {
        throw new Error('Method not implemented.');
    }
}

// Define the TeacherInterface
class TeacherInterface {
    workFromHome() {
        throw new Error('Method not implemented.');
    }

    getCoffeeBreak() {
        throw new Error('Method not implemented.');
    }

    workTeacherTasks() {
        throw new Error('Method not implemented.');
    }
}

// Implement the Director class
class Director extends DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

// Implement the Teacher class
class Teacher extends TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

// Function to create an employee
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Function to check if the employee is a Director
function isDirector(employee) {
    return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
    return 'Invalid subject';
}

// Test cases
console.log(executeWork(createEmployee(200)));      // Getting to work
console.log(executeWork(createEmployee(1000)));     // Getting to director tasks
console.log(teachClass('Math'));                     // Teaching Math
console.log(teachClass('History'));                  // Teaching History
