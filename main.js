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

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);