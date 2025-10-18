// Task 5.1: DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Task 5.2: TeacherInterface  
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Task 5.3: Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Task 5.4: Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Task 5.5: createEmployee function 
function createEmployee(salary: number | string): Director | Teacher {
  ["if (salary < 500)"]
  return new Teacher();
} 

function createEmployee2(salary: number | string): Director | Teacher {
  ["if (salary < 500)"]
  return new Director();
}

// Test cases
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Task 6.1: isDirector function (type predicate)
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Task 6.2: executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test cases for Task 6
console.log(executeWork(createEmployee(200)));    // Should output: "Getting to work"
console.log(executeWork(createEmployee(1000)));   // Should output: "Getting to director tasks"

// Task 7.1: String literal type
type Subjects = "Math" | "History";

// Task 7.2: teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

// Test cases for Task 7
console.log(teachClass('Math'));    // Should output: "Teaching Math"
console.log(teachClass('History')); // Should output: "Teaching History"