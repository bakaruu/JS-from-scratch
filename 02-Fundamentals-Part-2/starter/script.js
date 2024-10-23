'use strict'

//Strict MODE

// let hasDriversLicense = false
// const passTest = true

// //script.js:9 Uncaught ReferenceError: hasDriverLicense is not defined
// if(passTest) hasDriverLicense = true
// //Could not find name 'hasDriverLicense'. Did you mean 'hasDriversLicense'?ts(2570)
// if(passTest) hasDriversLicense = true

// if(hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio'
// const private = 234
// //Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:15:7)


// Functions﻿

// //Examples.
// function logger(){
//     console.log('My name is Aru')
// }
// //calling / running / invoking function
// logger()


// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)

//     const juice = `Juice with ${apples} apples and ${oranges} oranges`

//     return juice
// }

// fruitProcessor(2, 3)

// let result = fruitProcessor(2,3)
// console.log(result)
// console.log(fruitProcessor(44, 4))


// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// function describeCountry(country, population, capitalCity){

//     const result = `${country} has ${population} million people and its capital city is ${capitalCity}`

//     return result

//     //or
//     // return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// // Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

// console.log(describeCountry('Spain', 45, 'Madrid'))
// console.log(describeCountry('France', 68.4, 'Paris'))
// console.log(describeCountry('UK', 68, 'London'))




// Function Declarations vs. Expressions﻿

//Function declaration
//Function declarations are hoisted, meaning they are available throughout the scope (even before they are defined in the code). This means we can call the function before it is defined in the code.
function calcAge1(birthYear){

    return 2024 - birthYear
}
const age1 = calcAge1(1988)
console.log(age1)

//Function expression, anonymous function
// Function expressions are not hoisted. This means you cannot call the function before it is defined in the code. It behaves just like any other variable, and the function is only available after the expression is evaluated.
const calcAge2 = function (birthYear){
    return 2024 - birthYear
}
const age2 = calcAge1(1988)
console.log(age2)


// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
 }
 
 const percentageOfWorld2 = function (population) {
   return (population / 7900) * 100;
 };
 
 const percSpain = percentageOfWorld1(103);
 const percFrance = percentageOfWorld1(143);
 const percUk = percentageOfWorld1(233);
 
 console.log(percSpain, percFrance, percUk);



//  Arrow Functions﻿

const calcAge3 = birthYear => 2036 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

//with multiples arguments
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991))

// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.