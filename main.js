// comment

/* 
multi line comments
*/

// console logging
console.log("Hello World");
console.error("This is an Error");
console.warn("This is a Warning");
console.debug("This is Debug");
console.info("This is Info");

// variables
// var = globally scoped, typically shouldn't be used anymore
// let and const added with ES6 or ES 2015,
// let can be changed, const can not
// const is short for constant, cosnst age = 30; age = 35 will generate an error
// general use const unless you need to re-assign the value
// let can be initialized without a value `let age;`  const needs to be assigned with initialzed
// variables are not statically typed, and can change between data types

// data types = String, Number, Boolean, null, undefined, Symbol

const name = "John"; // string
const age = 30; // number
const rating = 4.5; // number
const isCool = true; // boolean
const x = null; // null
const y = undefined; // undefined
let z; // undefined

//can show data type using typeof
console.log(typeof isCool);
// typeoff x will return objkect not null...

// concatenante strings:
console.log("my name is " + name + " and i am " + age);
// template String // Template Literal defined using back tick
console.log(`my name is ${name} and i am ${age}`);
const hello = `my name is ${name} and i am ${age}`;
console.log(hello);

// properties and methods
console.log(hello.length);
console.log(hello.toLocaleUpperCase());
console.log(hello.substring(3, 10));
console.log(hello.substring(3, 10).toUpperCase());
console.log(hello.split(""));
console.log(hello.split(" "));
const s = "tech, computer, it, code";
console.log(s.split(", "));

// Arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
const fruits = ["apple", "orange", "pears", 120, true];
console.log(fruits);
console.log(fruits[1]);
// even though array defined as const it is still mutable
fruits[5] = "Grapes";
console.log(fruits);
fruits.push("Mangos");
console.log(fruits);
fruits.unshift("Strawberries");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("orange"));

// Object Literal, aka key value pair, aka dictionary
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "main street",
    city: "Boston",
    state: "MA",
  },
};
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// destructuring
const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(firstName);
console.log(city);

// add  new objects
person.email = "john@gmail.com";
console.log(person);

// array of objects
const todos = [
  { id: 1, text: "Take out the Trash", isComplete: true },
  { id: 2, text: "Meeting", isComplete: true },
  { id: 3, text: "Dentist", isComplete: false },
];

console.log(todos);
console.log(todos[1].text);

// convert to JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for (let todo of todos) {
  console.log(todo.text);
}

// preferred methods is to use high order array methods:
// forEach, map, filter

todos.forEach(function (todo) {
  console.log(todo.text);
});

todos.forEach((todo) => {
  console.log(todo.text);
});

const todoText = todos.map((todo) => {
  return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter((todo) => {
  return todo.isComplete == true;
});
console.log(todoCompleted);

const todoCompletedText = todos
  .filter((todo) => {
    return todo.isComplete == true;
  })
  .map((todo) => {
    return todo.text;
  });
console.log(todoCompletedText);

// conditionals
// == does not match data type, so 10=='10' is true
// === matches data type so 10==='10' is false

const ten = 10;
if (ten == 10) {
  console.log("1 ten is 10");
}
if (ten == "10") {
  console.log("2 ten is 10");
}
if (ten === 10) {
  console.log("3 ten is 10");
}
if (ten === "10") {
  console.log("4 ten is 10");
} else {
  console.log("ten is not 10");
}

if (ten === 4) {
  console.log("ten is 4");
} else if (ten > 4) {
  console.log("ten is greater then 4");
} else {
  console.log("how'd you get here???");
}

const one = 1;

if (ten > 5 || one > 5) {
  console.log("ten or one is greater then 5");
}
if (ten < 15 && one < 15) {
  console.log("ten and one are less then 15");
}

// ternary operator
const color1 = ten > 10 ? "red" : "blue";
console.log(color1);
const color2 = ten > 1 ? "red" : "blue";
console.log(color2);

switch (color1) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

// functions
function addNums(num1, num2) {
  console.log(num1 + num2);
}
addNums(5, 4);
addNums(); // retursn NaN = Not a Number

function addNums2(num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}
addNums2();

function addNums3(num1 = 1, num2 = 1) {
  return num1 + num2;
}
console.log(addNums3(3, 4));

// arrow functions introducted in ES6
const addNums4 = (num1 = 1, num2 = 1) => {
  return num1 + num2;
};
console.log(addNums4(6, 4));

// for 1 line functions this can be simplified further
const addNums5 = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums5(6, 5));

todos.forEach((todo) => console.log(todo.text));

// OOP ES5 (pre-classes)
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.dob_date = new Date(dob);
  this.getBirthYear = () => {
    return this.dob_date.getFullYear();
  };
  this.getFullName = () => `${this.firstName} ${this.lastName}`;
}

// This breaks when i try and use an arrow function??
Person.prototype.getLastFirstName = function () {
  return `${this.lastName} ${this.firstName}`;
};

const person1 = new Person("john", "doe", "1977-1-2");
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1.getLastFirstName());

// OOP ES6 Classes were added to JS
// under the hood doing same thing as above, but syntacically looks nicer

class PersonClass {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.dob_date = new Date(dob);
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person2 = new Person("john", "doe", "1977-1-2");
console.log(person2);
console.log(person2.getFullName());
