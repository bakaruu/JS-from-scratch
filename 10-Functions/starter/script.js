'use strict';


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by ${fn.name}`)
}

transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)


//Another callback function example.

//JS uses callbacks all the time.
const high5 = function(){
    console.log('✋')
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


//Callbacks functions allow to create abstraction






//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  First-Class and Higher-Order Functions

// A callback function in JavaScript is a function that is passed as an argument to another function and is executed at a specific time inside that function.

// Why Use Callbacks?
// They allow for asynchronous operations (e.g., handling data after a delay or API call).
// They help with modular code by allowing functions to execute behavior dynamically.

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);


//Output:
// Hello, Alice!
// Goodbye!


//Returning a function
function createMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double1 = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double1(5)); // 10
console.log(triple(5)); // 15


// First-Class Functions VS  Higher-Order Functions (HOFs)


// First-Class Functions
// A language has first-class functions when functions are treated like any other value (variables, objects, etc.).

// Key Properties of First-Class Functions:
// ✅ Functions can be assigned to variables
// ✅ Functions can be passed as arguments to other functions
// ✅ Functions can be returned from other functions
// ✅ Functions can be stored in data structures (e.g., arrays, objects)

// Example: Assigning a Function to a Variable

// const greet = function (name) {
//     return `Hello, ${name}!`;
// };

// console.log(greet("Alice")); // Hello, Alice!
// Here, greet is stored in a variable, just like any other value.

// Example: Passing a Function as an Argument

function execute(fn, value) {
    return fn(value);
}

function square(num) {
    return num * num;
}

console.log(execute(square, 4)); // 16
// Here, square is treated as a value and passed to execute.

// Higher-Order Functions (HOFs)
// A higher-order function is a function that either:
// 1️⃣ Takes a function as an argument (callback functions)
// 2️⃣ Returns a function

// Example 1: Function Taking Another Function

function repeatAction(action, times) {
  for (let i = 0; i < times; i++) {
    action();
  }
}

repeatAction(() => console.log("Hello!"), 3);
// Here, repeatAction takes a function (action) and executes it multiple times.

// Example 2: Function Returning Another Function

function createMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10
// Here, createMultiplier returns a function that multiplies numbers.


// 🔹 Summary

// First-Class Functions = The ability to treat functions as values (assign them, pass them, return them).

// Higher-Order Functions = Functions that work with other functions (accept functions as arguments or return them).











//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';

const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 12345678,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 12345678) {
        alert('Checked in');
    } else {
        alert('Wron passport!')
    }
};


//When we pass a reference type to a function, what is copied is really just a reference to the object in the memory heap.
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);

//JS only passing by value., does not have passing by reference













//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//Default parameters in functions.
// const bookings = [];
//                                                         //ES6
// const createBooking = function (flightNum, numPassengers = 1, price = 199 ) { //OR we can do this: price = 199 * numPassengers etc

//     //ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     };

//     console.log(booking);
//     bookings.push(booking);

// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);

// //we can't do this
// // createBooking('LH123', , 800);
// //or this to skip a parameter. Always in order.
// // createBooking('LH123',800);

// //we can do this trick.
// createBooking('LH123', undefined, 800);

