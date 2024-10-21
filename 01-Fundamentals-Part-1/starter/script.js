// Values and Variables

// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.

let country= "Spain"
let continent = "Europe"
let population = 13

console.log(country)
console.log(continent)
console.log(population)


// Data Types﻿
// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.

let isIsland = false
let language

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof continent)
console.log(typeof country)

// let, const and var﻿
// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.

language = 'Spanish';
// const country2 = 'Spain';
// const continent2 = 'Europe';
// const isIsland2 = false;
// isIsland2 = true
// //script.js:40 Uncaught TypeError: Assignment to constant variable. at script.js:40:11
// console.log(isIsland)



// Basic Operators﻿

// If your country split in half, and each half would contain half the population, then how many people would live in each half?

let halfOfPopulation = population / 2
console.log(halfOfPopulation)
// or 
console.log(population / 2)

// Increase the population of your country by 1 and log the result to the console.
population++
console.log(population)

// Finland has a population of 6 million. Does your country have more people than Finland?
let finlandPopulation = 6
console.log(population>finlandPopulation)
//or 

console.log(population>6)

// The average population of a country is 33 million people. Does you country have less people than the average country?

console.log(population>= 33)

// Based on the variables you created, create a new variable description which contains a string with this format: 'Spain is in Europe, and its 45 million people speak spanish'.

let description = country + " Is in " + continent
+ " and its " + population + " million people speak " + language

console.log(description)


// Strings and Template Literals﻿
// Recreate the description variable from the last assignment, this time using the template literal syntax.

let descriptionLiterals = `${country} is in ${continent} and its ${population} million people speak ${language}`

console.log(descriptionLiterals)


// Taking Decisions: if / else Statements﻿
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.


if (population > 33) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(
      `${country}'s population is ${33 - population} million below average`
    );
  }


console.log("TYPE CONVERSION AND COERCION")
//   Type Conversion and Coercion﻿
// Predict the result of these 5 operations without executing them:


//TYPE CONVERSION
const inputYear = '1991'
// const inputYear = Number('1991')
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)
console.log(Number('Albert')) // = NaN, its a number but an invalid one
console.log(String(23))


//TYPE COERCION

console.log('i am' + 23 + ' years old')
console.log('23' - '10' - 3) // minus operation triggers the opposite conversion

let n = '1'+ 1
n = n - 1
console.log(n) // = 10


console.log('9' - '5'); // -> ? 4
console.log('19' - '13' + '17'); // -> ? 617
console.log('19' - '13' + 17); // -> ? 23
console.log('123' < 57); // -> ?false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ? 1143



//Truthy and Falsy Values

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Aru'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100

if(money){
  console.log("Don't spend it all ;")
} else{
  console.log('You should get a job!')
}


let height = 0
if (height){
  console.log('YAY! Height is defined')
} else{
  console.log('Height is UNDEFINED')
}


// Equality Operators: == vs. ===﻿
// Declare a variable numNeighbours based on a prompt input like this:

// prompt('How many neighbour countries does your contry have?');
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// Reflect on why we should use the === operator and type conversion in this situation.