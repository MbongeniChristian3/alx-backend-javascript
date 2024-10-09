var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DirectorInterface = /** @class */ (function () {
    function DirectorInterface() {
    }
    DirectorInterface.prototype.workFromHome = function () {
        throw new Error('Method not implemented.');
    };
    DirectorInterface.prototype.getCoffeeBreak = function () {
        throw new Error('Method not implemented.');
    };
    DirectorInterface.prototype.workDirectorTasks = function () {
        throw new Error('Method not implemented.');
    };
    return DirectorInterface;
}());
// Define the TeacherInterface
var TeacherInterface = /** @class */ (function () {
    function TeacherInterface() {
    }
    TeacherInterface.prototype.workFromHome = function () {
        throw new Error('Method not implemented.');
    };
    TeacherInterface.prototype.getCoffeeBreak = function () {
        throw new Error('Method not implemented.');
    };
    TeacherInterface.prototype.workTeacherTasks = function () {
        throw new Error('Method not implemented.');
    };
    return TeacherInterface;
}());
// Implement the Director class
var Director = /** @class */ (function (_super) {
    __extends(Director, _super);
    function Director() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}(DirectorInterface));
// Implement the Teacher class
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}(TeacherInterface));
// Function to create an employee
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
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
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Function to teach a class
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
    return 'Invalid subject';
}
// Test cases
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History
