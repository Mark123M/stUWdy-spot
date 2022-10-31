console.log('Hello World');

// Variables and Data Types
const name = 'Matt';
const age = 18.25;
const x = null;
const y = undefined;
let z; // Also gives undefined
console.log(typeof age)

// Concatenation
// console.log('My name is ' + name + ' and I am ' + age);

// Template String
console.log(`My name is ${name} and I am ${age}`)


// Arrays
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);

// Object Literals
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music,', 'movies', 'sports'],
  address: {
    street: '50 Main St',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person.hobbies[1]);

// An array of object literals
const todos = [
  {
    id: 1,
    text: 'MATH135 A5',
    isCompleted: true
  },
  {
    id: 2,
    text: 'CS135 A6',
    isCompleted: false
  },
  {
    id: 3,
    text: 'CFM101 A3',
    isCompleted: false
  }
]
console.log(todos[1].text);

// JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// Loops
// Simple for (like Java)
for(let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// For of (like Python)
for(let todo of todos) {
  console.log(todo.isCompleted);
}

// Simple while (like Java)
let i = 0;
while(i < todos.length) {
  console.log(`ID: ${todos[i].id}`)
  i++;
}

// List Functions
// For Each
// Calls function(todo){ } for each element in todos
// The parameter todo iterates through todos each function call
todos.forEach(function(todo) {
  console.log(todo.text);
});

// Map
// Same formatting as for each, except the output is a list
// This time the function is defined by itself
const todoText = todos.map(todoFunction);
function todoFunction(item, index, arr) {
  return item.text;
}
console.log(todoText);

// Filter
// Again, same formatting as for each and map (note the === though)
// We added a map to the end so that all of the completed tasks are added to a list
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
})
console.log(todoCompleted);

// Conditionals
// Note the difference between == and ===
const a = '10';
const b = 10
if (a === 10) {
  console.log('a is the number 10');
} else if (a === b) {
  console.log('a and b are both the number 10')
} else if (a == b && a == 10) {
  console.log('a and b are both 10')
} else if (a == 10 || b == 10) {
  console.log('either a or b is 10');
} else {
  console.log('neither a nor b are 10');
}

// Turnery Operators
// Note that a > 10 is false, so color = 'blue'
const color = a > 10 ? 'red' : 'blue'

// Switches
switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  defualt:
    console.log('color is neither red nor blue');
    break;
}

// Arrow Functions
// num1 = 1 sets 1 as the default value if no value is passed in the function call
// Lot of different ways to condense, see examples
// No condensing
const addNums = (num1 = 1, num2 = 2) => {
  return num1 + num2;
}
const subNums = (num1 = 1, num2 = 1) => num1 - num2;
const add1 = num1 => num1 + 1;

console.log(addNums(2,3));
console.log(subNums(2,3));
console.log(add1(2));

// We can use arrow functions within list functions!!
todos.forEach((todo) => console.log(todo.text));

// OOP
// Note that we used the date constructor to turn dob into a different datatype. Now we can call different methods relating to date/time onto dob
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);

  // Method (a function in an object function ig)
  this.getBirthyear = function() {
    return this.dob.getFullYear();
  }
  this.getFullname = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate an object
const person1 = new Person('Kanye', 'East', '04-20-1969');
console.log(person1);
console.log(person1.getBirthyear());
console.log(person1.getFullname())