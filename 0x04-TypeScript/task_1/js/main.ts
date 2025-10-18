// Task 1: Teacher Interface
interface Teacher {
  readonly firstName: string;        // Can only be set at creation
  readonly lastName: string;         // Can only be set at creation
  fullTimeEmployee: boolean;         // Must always be provided
  yearsOfExperience?: number;        // Optional (the ? makes it optional)
  location: string;                  // Must always be provided
  [key: string]: any;                // Index signature - allows any additional properties
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,                   // This is allowed because of [key: string]: any
  yearsOfExperience: 5,              // Optional, but we're providing it
};

console.log(teacher3);

// Task 2: Directors interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3: Print Teacher Function and Interface

// 3.1 Write the printTeacher function
function printTeacher({ firstName, lastName }) {
 return `${firstName}. ${lastName}`;
}

// 3.2 Write an interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}



