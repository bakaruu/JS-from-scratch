'use strict';

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// The call and apply Methods

const lufthansa = {
    airline: 'Lufthansa', 
    iataCode: 'LH', 
    bookings: [], 
    // book: function(){},
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})    

    },
    

};

lufthansa.book(234, 'Rufus Tiefus');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings', 
    iataCode: 'EW', 
    bookings: [], 
    // book: function(){},
    

};

const book = lufthansa.book;

// book(23, 'Joe, Simpsom');//this function is no longer the lufthansa method. Does not work

//Using the call method.
book.call(eurowings, 23,'Joe, Simpson');
console.log(eurowings);


//Apply method, does not receive a list of arguments after the thios keyword, instead take an array of the arguments

const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
//Apply method is not used anymore in MODERN JS

book.call(eurowings, ...flightData);

















//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// The Bind Method

// .bind() is a method that creates a new function with a preset this value and optionally pre-filled arguments. Unlike .call() and .apply(), .bind() does not execute the function immediately—instead, it returns a new function that can be called later

const bookEW = book.bind(eurowings);// 'this' is permanently set to 'eurowings'
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');

                                    //Pre-defined
const bookEW23 = book.bind(eurowings, 23);
//we only need the name
bookEW23('Joe Cooper');

//With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

// When you pass lufthansa.buyPlane directly as a callback to .addEventListener(), this inside buyPlane no longer refers to lufthansa, but instead to the element that triggered the event (the button itself).

// By default, in an event listener:

// this refers to the DOM element that triggered the event (in this case, the .buy button).
// So when buyPlane runs, this is not lufthansa, but the button.

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Another alternative fix
document.querySelector('.buy').addEventListener('click', () => lufthansa.buyPlane());

//Partial application: we can preset values
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));
                    // we dont care about this keyword, we use null
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

//const addTax = rate => value => value + value * rate;

// const addVAT = addTax(0.23);

// console.log(addVAT(100)); // 123
// console.log(addVAT(200)); // 246















//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// Functions Returning Functions.

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting}, ${name}`);
//     }
// };

// const greeterHey = greet('Hey'); //This value here is now a function.
// console.log(greeterHey);
// console.log(greeterHey('Jonas'));

// //Challenge
// const greetArr = greeting => name => console.log(`${greeting}, ${name}`);

// //this is cause closures 
// //A closure is when a function remembers the variables from its outer scope even after the outer function has finished executing.

// // When is it useful to return functions in JavaScript? 🚀
// // Returning functions is a powerful pattern in JavaScript that enables functional programming, encapsulation, and reusability. Here are some key situations where returning functions is useful:

// // 1️⃣ Function Factories (Creating Custom Functions)
// // Returning a function allows us to create dynamic and reusable functions based on input parameters.

// // Example: Custom Multipliers

// function createMultiplier(factor) {
//     return function (number) {
//         return number * factor;
//     };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15


// // ✅ Each returned function remembers the factor value, creating reusable multipliers.

// // 2️⃣ Closures for Data Privacy (Encapsulation)
// // Returning a function helps maintain private variables that cannot be accessed directly.

// // Example: Counter with Private State

// function createCounter() {
//     let count = 0;
    
//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// // ✅ count is not accessible from outside; only the returned function can modify it.



// // 3️⃣ Partial Application (Preset Arguments)
// // Returning a function enables pre-setting arguments, which makes function calls more concise.

// // Example: Custom Greeting Generator
// function greet(greeting) {
//     return function (name) {
//         return `${greeting}, ${name}!`;
//     };
// }

// const sayHello = greet("Hello");
// const sayGoodbye = greet("Goodbye");

// console.log(sayHello("Alice")); // "Hello, Alice!"
// console.log(sayGoodbye("Bob")); // "Goodbye, Bob!"
// // ✅ We don’t need to pass the greeting every time—just the name.

// // 4️⃣ Function Composition (Chaining Functions)
// // Returning functions helps combine multiple operations smoothly.

// // Example: Composing Functions

// function add(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// const addFive = add(5);
// console.log(addFive(10)); // 15
// console.log(addFive(20)); // 25
// // ✅ The first function sets a base value, and the second function completes the operation.

// // 5️⃣ Custom Event Handlers
// // Returning functions is useful for event handling and callbacks.

// // Example: Custom Event Listener
// function createEventHandler(message) {
//     return function () {
//         console.log(`Event triggered: ${message}`);
//     };
// }

// const onClick = createEventHandler("Button clicked");
// document.querySelector("button").addEventListener("click", onClick);
// // ✅ The returned function remembers the message when the event happens.

// // 6️⃣ Delayed Execution (Deferred Functions)
// // Returning a function enables delayed execution.

// // Example: Delayed Execution with setTimeout

// function delayMessage(message, delay) {
//     return function () {
//         setTimeout(() => console.log(message), delay);
//     };
// }

// const delayedHello = delayMessage("Hello after 2 seconds", 2000);
// delayedHello();
// // ✅ The function is created but only executed later.











//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// Functions Accepting Callback Functions

// const oneWord = function (str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// //Higher-order function
// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`)
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by ${fn.name}`)
// }

// transformer('JavaScript is the best!', upperFirstWord)
// transformer('JavaScript is the best!', oneWord)


// //Another callback function example.
// //JS uses callbacks all the time.
// //Callbacks functions allow to create abstraction
// const high5 = function(){
//     console.log('✋')
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);














// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //  First-Class and Higher-Order Functions

// // A callback function in JavaScript is a function that is passed as an argument to another function and is executed at a specific time inside that function.

// // Why Use Callbacks?
// // They allow for asynchronous operations (e.g., handling data after a delay or API call).
// // They help with modular code by allowing functions to execute behavior dynamically.

// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);


// //Output:
// // Hello, Alice!
// // Goodbye!


// //Returning a function
// function createMultiplier(factor) {
//     return function (number) {
//         return number * factor;
//     };
// }

// const double1 = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double1(5)); // 10
// console.log(triple(5)); // 15


// // First-Class Functions VS  Higher-Order Functions (HOFs)


// // First-Class Functions
// // A language has first-class functions when functions are treated like any other value (variables, objects, etc.).

// // Key Properties of First-Class Functions:
// // ✅ Functions can be assigned to variables
// // ✅ Functions can be passed as arguments to other functions
// // ✅ Functions can be returned from other functions
// // ✅ Functions can be stored in data structures (e.g., arrays, objects)

// // Example: Assigning a Function to a Variable

// // const greet = function (name) {
// //     return `Hello, ${name}!`;
// // };

// // console.log(greet("Alice")); // Hello, Alice!
// // Here, greet is stored in a variable, just like any other value.

// // Example: Passing a Function as an Argument

// function execute(fn, value) {
//     return fn(value);
// }

// function square(num) {
//     return num * num;
// }

// console.log(execute(square, 4)); // 16
// // Here, square is treated as a value and passed to execute.

// // Higher-Order Functions (HOFs)
// // A higher-order function is a function that either:
// // 1️⃣ Takes a function as an argument (callback functions)
// // 2️⃣ Returns a function

// // Example 1: Function Taking Another Function

// function repeatAction(action, times) {
//   for (let i = 0; i < times; i++) {
//     action();
//   }
// }

// repeatAction(() => console.log("Hello!"), 3);
// // Here, repeatAction takes a function (action) and executes it multiple times.

// // Example 2: Function Returning Another Function

// function createMultiplier(factor) {
//   return function (num) {
//     return num * factor;
//   };
// }

// const double = createMultiplier(2);
// console.log(double(5)); // 10
// // Here, createMultiplier returns a function that multiplies numbers.


// // 🔹 Summary

// // First-Class Functions = The ability to treat functions as values (assign them, pass them, return them).

// // Higher-Order Functions = Functions that work with other functions (accept functions as arguments or return them).











// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// // How Passing Arguments Works: Value vs. Reference

// const flight = 'LH234';

// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 12345678,
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 12345678) {
//         alert('Checked in');
//     } else {
//         alert('Wron passport!')
//     }
// };


// //When we pass a reference type to a function, what is copied is really just a reference to the object in the memory heap.
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);

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

